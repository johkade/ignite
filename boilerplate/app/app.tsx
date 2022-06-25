import React, { useEffect } from 'react';
import { initialWindowMetrics, SafeAreaProvider } from 'react-native-safe-area-context';
import './i18n';
import { RootNavigator } from './navigators';
import { initFonts } from './theme/fonts'; // expo

export const NAVIGATION_PERSISTENCE_KEY = 'NAVIGATION_STATE';

/**
 * This is the root component of our app.
 */
function App() {
  // Kick off initial async loading actions, like loading fonts and RootStore
  useEffect(() => {
    (async () => {
      await initFonts(); // expo
    })();
  }, []);

  // otherwise, we're ready to render the app
  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <RootNavigator />
    </SafeAreaProvider>
  );
}

export default App;
