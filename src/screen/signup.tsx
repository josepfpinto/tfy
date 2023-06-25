import React from 'react'
import { View, Text, TextInput, Button, StyleSheet, ToastAndroid, GestureResponderEvent } from 'react-native'
import { PropsSignUp } from '../types';
import { getToken, signUp } from '../api/auth';
import { setLogin } from '../api/authSlice';
import { useDispatch } from '../store';
import { Formik } from "formik";
import * as yup from "yup";

const SignUp = ({ route, navigation }: PropsSignUp) => {
    const dispatch = useDispatch();

    let validationSchema = yup.object().shape({
        username: yup.string().required(),
        email: yup.string().email().required(),
        password: yup.string().min(8).required(),
    });

    function handleSignUp (values:any) {
        console.log('TESTING SUBMIT!')
        signUp(values.username, values.password, values.email).then((response:any) => {
            dispatch(setLogin(response));
            console.log('TOKEN test');
            console.log(getToken());
            // navigation.dispatch(StackActions.replace('Main'));
        }).catch((error) => {
            console.log(error);
            ToastAndroid.show(error.message, ToastAndroid.LONG);
        });
    }

    return (
        <Formik
            initialValues={{ email: '', username: '', password: '', }}
            onSubmit={values => handleSignUp(values)}
            validationSchema={validationSchema}
            validateOnChange={true}
            validateOnBlur={true}
        >
            {({ handleChange, handleSubmit, values, errors }) => (
            <View  style={styles.container}>
                <Text>SignUp</Text>
                <TextInput
                    placeholder="Username"
                    onChangeText={handleChange('username')}
                    value={values.username}
                />
                <TextInput
                    placeholder="Email"
                    onChangeText={handleChange('email')}
                    value={values.email}
                />
                <TextInput
                    placeholder="Password"
                    onChangeText={handleChange('password')}
                    value={values.password}
                    // secureTextEntry
                />
                { errors.username ?
                    <Text>Invalid username: {errors.username}</Text>
                : errors.email ?
                    <Text>Invalid email: {errors.email}</Text>
                : errors.password ?
                    <Text>Invalid password: {errors.password}</Text>
                : null
                }
                
                <Button title="SignUp" onPress={(event: GestureResponderEvent) => handleSubmit} />
            </View>
            )}
        </Formik>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }

});

export default SignUp;