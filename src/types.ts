import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { BottomTabScreenProps } from '@react-navigation/bottom-tabs';

export type RootStackParamList = {
    Login: undefined;
    Main: undefined;
};

export type PropsLogin = NativeStackScreenProps<RootStackParamList, 'Login'>;
export type PropsMain = NativeStackScreenProps<RootStackParamList, 'Main'>;

export type RootTabParamList = {
    Home: undefined;
    Collection: undefined;
    // Settings: { userId: string };
};

export type PropsHome = BottomTabScreenProps<RootTabParamList, 'Home'>;
export type PropsCollection = BottomTabScreenProps<RootTabParamList, 'Collection'>;
