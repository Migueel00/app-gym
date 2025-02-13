import { useState, useEffect } from "react";

export const useSplashScreenLogic = () => {
  const [appIsReady, setAppIsReady] = useState<boolean>(false);

  useEffect(() => {
    
    setAppIsReady(true);
  }, []);

  return appIsReady;
}