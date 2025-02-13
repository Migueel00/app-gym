// Ejemplo de archivo de test (splashScreen.test.jsx)
import React from 'react';
import { fireEvent, render, waitFor } from '@testing-library/react-native';
import Index from '@/app/index'; // Asegúrate de que la ruta sea la correcta
import { hideAsync, preventAutoHideAsync } from 'expo-splash-screen';

// Creamos un mock configurable para el hook
const mockUseSplashScreenLogic = jest.fn();

// <<-- Importante: usa la misma ruta que el componente para el hook -->
jest.mock('@/src/hooks/useSplashScreenLogic', () => ({
  useSplashScreenLogic: () => mockUseSplashScreenLogic(),
}));

jest.mock('expo-splash-screen', () => ({
  preventAutoHideAsync: jest.fn(),
  hideAsync: jest.fn(),
}));

jest.mock('@/app/components/Menu', () => ({
  __esModule: true,
  default: () => null,
}));

describe('Splash Screen Logic', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('debe llamar a preventAutoHideAsync al montar', () => {
    // Para este test necesitamos que la app esté lista para que se renderice el componente y se ejecute el useEffect.
    render(<Index />);
    expect(preventAutoHideAsync).toHaveBeenCalledTimes(1);
  });

  it('should hide the splash screen when appIsReady fire', async () => {
    // Para este test, simulamos que la app está lista para renderizar el View con testID "root-view"
    mockUseSplashScreenLogic.mockReturnValue(true);
    const { getByTestId } = render(<Index />);

    // Simula que el layout se ha realizado
    fireEvent(getByTestId('root-view'), 'layout');

    // Verifica que se haya llamado a hideAsync
    await waitFor(() => {
      expect(hideAsync).toHaveBeenCalledTimes(1);
    });
  });

  it('should not render content if appIsReady is false', () => {
    // En este test, simulamos que la app NO está lista
    mockUseSplashScreenLogic.mockReturnValue(false);
    const { queryByTestId } = render(<Index />);
    expect(queryByTestId('root-view')).toBeNull();
  });
});
