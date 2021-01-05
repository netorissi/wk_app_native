import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SignIn from '../pages/signIn';
import SignUp from '../pages/signUp';

const Auth = createStackNavigator();

const AuthRoutes: React.FC = () => (
  <Auth.Navigator 
    screenOptions={{
      headerShown: false,
      cardStyle: { backgroundColor: '#f0f0f0' },
    }}
  >
    <Auth.Screen name="SignUp" component={SignUp} />
    <Auth.Screen name="SignIn" component={SignIn} />
  </Auth.Navigator>
);

export default AuthRoutes;