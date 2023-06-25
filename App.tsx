import { Amplify } from 'aws-amplify';
import awsExports from './src/aws-exports';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { store } from "./src/store";
import ProtectedRoute from './src/screen/protectedRoute';

Amplify.configure(awsExports);

export default function App() {
    return (
        <Provider store={store}>
            <NavigationContainer>
                    <ProtectedRoute />
            </NavigationContainer>
        </Provider>
    );
}
