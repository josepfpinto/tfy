
// LOGIN page with option to signup or login in react native for a mobile app
// It only requires a username and password

import React, { useState }
from 'react'
import { View, Text, TextInput, Button, StyleSheet, ToastAndroid } from 'react-native'
import { PropsLogin } from '../types';
import { listenToAutoSignInEvent, signIn } from '../api/auth';
import { useDispatch } from '../store';
import { setIsLoading, setLogin } from '../api/authSlice';

const Login = ({ route, navigation }: PropsLogin) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();

    console.log('LOGING!')

    const handleLogin = () => {
        dispatch(setIsLoading(true));
        listenToAutoSignInEvent();
        signIn(username, password).then((response:any) => {
            dispatch(setLogin(response));
            // navigation.dispatch(StackActions.replace('Main'));
        }).catch((error) => {
            console.log(error);
            ToastAndroid.show(error.message, ToastAndroid.LONG);
        });
    }

    return (
        <View style={styles.container}>
            <Text>Login</Text>
            <TextInput
                placeholder="Username"
                value={username}
                onChangeText={setUsername}
            />
            <TextInput
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
            />
            <Button title="Login" onPress={handleLogin} />
            <Text onPress={() => navigation.navigate('SignUp')}> 
                Sign Up
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }

});

export default Login;
