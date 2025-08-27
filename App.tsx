import React, { useEffect } from "react";
import { VESDK } from "react-native-videoeditorsdk";
import HomeScreen from "./src/screens/HomeScreen";

const LICENCE_KEY = process.env.EXPO_PUBLIC_LICENCE_KEY;

const App = () => {
  useEffect(() => {
    try {
      VESDK.unlockWithLicense(LICENCE_KEY);
      console.warn("SUCCESSFULLY UNLOCKED VESDK");
    } catch (error) {
      console.error("Failed to unlock VESDK:", error);
    }
  }, []);

  return <HomeScreen />;
};

export default App;
