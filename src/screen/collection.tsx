import { Text, View, StyleSheet } from "react-native";
import { PropsCollection } from '../types';

const Collection = ({ route, navigation }: PropsCollection) => {

    return (
        <View style={styles.container}>
            <Text>Collection!</Text>
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

export default Collection;