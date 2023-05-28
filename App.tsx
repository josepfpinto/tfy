import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { Amplify, Auth } from 'aws-amplify';
import awsExports from './src/aws-exports';
import Home from './src/pages/home';
Amplify.configure(awsExports);

export default function App() {
  return (
    <View style={styles.container}>
      <Home />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
