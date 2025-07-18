import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from './navigation/AuthNavigator';
import MainNavigator from './navigation/MainNavigator';

export default function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);

  return (
    <NavigationContainer>
      {isLoggedIn ? (
        <MainNavigator onLogout={() => setLoggedIn(false)} />
      ) : (
        <AuthNavigator onLogin={() => setLoggedIn(true)} />
      )}
    </NavigationContainer>
  );
}
