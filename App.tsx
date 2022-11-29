import { NavigationContainer } from '@react-navigation/native';
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { Home } from './src/screens/Home';
import { Note } from './src/screens/Note';
import { Notes } from './src/screens/Notes';

export type RootStackParamList = {
  Home: undefined;
  Notes: undefined;
  Note: { note: { title: string; description: string } };
};

export default function App() {
  const Stack = createStackNavigator<RootStackParamList>();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen
          name="Notes"
          component={Notes}
          options={() => ({
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          })}
        />
        <Stack.Screen
          name="Note"
          component={Note}
          options={() => ({
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
