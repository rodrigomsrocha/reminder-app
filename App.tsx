import { NavigationContainer } from '@react-navigation/native';
import { CardStyleInterpolators } from '@react-navigation/stack';
import * as React from 'react';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';
import { Home } from './src/screens/Home';
import { Note } from './src/screens/Note';
import { Notes } from './src/screens/Notes';
import { NoteType } from './src/types';

export type RootStackParamList = {
  Home: undefined;
  Notes: undefined;
  Note: { note: NoteType };
};

export default function App() {
  const Stack = createSharedElementStackNavigator<RootStackParamList>();

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
          sharedElements={(route) => {
            return [
              { id: `${route.params.note.id}${route.params.note.title}.title`, animation: 'fade', resize: 'none' },
            ];
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
