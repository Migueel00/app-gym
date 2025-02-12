import { create } from 'zustand';
import { AppState } from '../interfaces/AppState';
import { User } from '../interfaces/User';

const useAppStore = create<AppState>()((set) => ({
    user: null,
    setUser: (user: User) => set(() => ({ user: user}))
}));

export default useAppStore;