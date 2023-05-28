import { useEffect, useState } from "react";
import ApiFetch from "../api/apiFetch";
import { Button, Text, View, StyleSheet } from "react-native";
import { PropsHome } from '../types';

const Home = ({ route, navigation }: PropsHome) => {
    const [test, setTest] = useState(0);

    useEffect(() => {
        ApiFetch('/').then((res:any) => console.log(res));
    }, [test]);

    return (
        <View style={styles.container}>
            <Text>HOME!</Text>
            <Button title={test.toString()} onPress={() => setTest(test + 1)} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default Home;