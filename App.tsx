import { NavigationContainer } from '@react-navigation/native';
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { Home } from './src/screens/Home';
import { Notes } from './src/screens/Notes';

export default function App() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen
          name="Notes"
          component={Notes}
          options={() => ({
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
