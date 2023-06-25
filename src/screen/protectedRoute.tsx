import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { useSelector } from 'react-redux';
import { getAuthState } from '../api/authSlice';
import { RootStackParamList } from '../types';
import Login from './login';
import Main from './main';
import SignUp from './signup';

const RootStack = createStackNavigator<RootStackParamList>();

export default function protectedRoute() {
    const auth = useSelector(getAuthState);

    console.log('auth.user');
    console.log(auth);
    console.log(auth.user);

    return (
        <RootStack.Navigator initialRouteName="Login">
            {auth.user === null || auth.user === undefined ? (
                // No token found, user isn't signed in
                <>
                    <RootStack.Screen 
                        name="Login" 
                        component={Login} 
                        options={{animationTypeForReplace: auth.isSignout ? 'pop' : 'push'}} />
                    <RootStack.Screen name="SignUp" component={SignUp} />
                </>
            ) : (
                // User is signed in
                <RootStack.Screen name="Main" component={Main} />
            )}
            
            {/*<StatusBar style="auto" />*/}
        </RootStack.Navigator>
    );
}
