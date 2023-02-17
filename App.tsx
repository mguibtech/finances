import React, { useCallback, useEffect, useState } from 'react';
import { StatusBar, View } from 'react-native';
import {
  useFonts,
  Poppins_400Regular,
  Poppins_700Bold,
  Poppins_500Medium
} from '@expo-google-fonts/poppins';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import theme from './src/global/styles/theme';
import { Dashboard } from './src/screens/Dashboard';
import { ThemeProvider } from 'styled-components/native';

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        await SplashScreen.preventAutoHideAsync();
        await Font.loadAsync({
          Poppins_400Regular,
          Poppins_700Bold,
          Poppins_500Medium
        });
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }

    prepare();
  }, [])

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <ThemeProvider theme={theme}>
      <View onLayout={onLayoutRootView} style={{
        flex: 1
      }}>
        <Dashboard />
      </View>
    </ThemeProvider>
  );
}

