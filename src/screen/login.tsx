
// LOGIN page with option to signup or login in react native for a mobile app
// It only requires a username and password

import React, { useState }
from 'react'
import { View, Text, TextInput, Button, StyleSheet } from 'react-native'
import { PropsLogin } from '../types';

const Login = ({ route, navigation }: PropsLogin) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        navigation.navigate('Main');
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