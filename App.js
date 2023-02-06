import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './src/Navigation/AppNavigator';
import NoteProvider from './src/context/NoteProvider';

export default function App() {
  return (
    <NavigationContainer>
      <NoteProvider>
      <AppNavigator/>
      </NoteProvider>
    </NavigationContainer>
  );
}