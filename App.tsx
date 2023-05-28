import * as React from 'react';
import { Amplify } from 'aws-amplify';
import awsExports from './src/aws-exports';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { RootStackParamList } from './src/types';
import Login from './src/screen/login';
import Main from './src/screen/main';
import { StatusBar } from 'expo-status-bar';

const RootStack = createStackNavigator<RootStackParamList>();

Amplify.configure(awsExports);

export default function App() {
    return (
        <NavigationContainer>
            <RootStack.Navigator initialRouteName="Login">
                <RootStack.Screen name="Login" component={Login} />
                <RootStack.Screen name="Main" component={Main} />
                <StatusBar style="auto" />
            </RootStack.Navigator>
        </NavigationContainer>
        
      
    );
}
