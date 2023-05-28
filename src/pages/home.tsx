import { useEffect, useState } from "react";
import ApiFetch from "../api/apiFetch";
import { Button, Text } from "react-native";

const Home = (props: any) => {
    const [test, setTest] = useState(0);

    useEffect(() => {
        ApiFetch('/').then((res:any) => console.log(res));
    }, [test]);

    return (
        <>
            <Text>TEST!</Text>
            <Button title={test.toString()} onPress={() => setTest(test + 1)} />
        </>
    );
};

export default Home;