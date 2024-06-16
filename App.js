
import { SafeAreaProvider } from 'react-native-safe-area-context';
import * as SplashScreen from "expo-splash-screen"
import {useFonts} from 'expo-font';
import { useCallback } from 'react';
import {FONTS} from './constants/fonts';
import AppNavigation from './navigations/AppNavigation';


SplashScreen.preventAutoHideAsync();
export default function App() {
  const [FontsLoaded] = useFonts(FONTS);
  const onLayoutRootView = useCallback(async ()=>{
    if(FontsLoaded){
      await SplashScreen.hideAsync();
    }
  },[FontsLoaded]);

  if(!FontsLoaded){
    return null;
  };
  return (
    
    <SafeAreaProvider onLayout={onLayoutRootView}>
       <AppNavigation/>

    </SafeAreaProvider>
  );
}


