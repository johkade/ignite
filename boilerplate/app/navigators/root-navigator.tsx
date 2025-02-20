import { DarkTheme, DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { useColorScheme } from 'react-native';
import { WelcomeScreen } from '../screens';
import { navigationRef, useBackButtonHandler } from './navigation-utilities';

export type NavigatorParamList = {
  welcome: undefined;
  // 🔥 Your screens go here
};

const Stack = createNativeStackNavigator<NavigatorParamList>();
const options = { headerShown: false };

interface NavigationProps extends Partial<React.ComponentProps<typeof NavigationContainer>> {}

export const RootNavigator = (props: NavigationProps) => {
  const colorScheme = useColorScheme();
  useBackButtonHandler(canExit);
  return (
    <NavigationContainer
      ref={navigationRef}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}
      {...props}
    >
      <Stack.Navigator screenOptions={options}>
        <Stack.Screen name="welcome" component={WelcomeScreen} />

        {/** 🔥 Your screens go here */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

RootNavigator.displayName = 'AppNavigator';

/**
 * A list of routes from which we're allowed to leave the app when
 * the user presses the back button on Android.
 *
 * Anything not on this list will be a standard `back` action in
 * react-navigation.
 *
 * `canExit` is used in ./app/app.tsx in the `useBackButtonHandler` hook.
 */
const exitRoutes = ['welcome'];
export const canExit = (routeName: string) => exitRoutes.includes(routeName);
