import { Auth } from 'aws-amplify';
import { Hub } from 'aws-amplify';
import { dealResponse } from './utils';

/**
 * This is an async function that signs up a user with a given username and password using AWS Amplify
 * Auth and returns the user object.
 * @param {string} username - The username of the user being signed up.
 * @param {string} password - The password that the user wants to use for their account. 
 * @returns It returns an object with two properties: 'success' and 'data'.
 * The data key can represent the `user` object in this format: { user: CognitoUser; userConfirmed: boolean; userSub: string }
 * If an error is catched during the sign up process, the data key will contain an error object in this format:
 * { message: error.message}
 */
export async function signUp(username:string, password:string) {
    let user:any = {};

    try {
        user = await Auth.signUp({
            username,
            password,
            attributes: {},
            autoSignIn: { // enables auto sign in after user is confirmed
                enabled: true,
            }
        });
        console.log(user);
        return dealResponse(true, user);

    } catch (error:any) {
        console.log('error signing up:', error);
        return dealResponse(false, error.message);
    }
}

/**
 * This function listens to an 'auth' event and returns data based on whether the event is 'autoSignIn'
 * or 'autoSignIn_failure'.
 * @returns It returns an object with two properties: 'success' and 'data'.
 */
export function listenToAutoSignInEvent() {
    return Hub.listen('auth', ({ payload }) => {
        const { event } = payload;
        if (event === 'autoSignIn') {
            console.log('auto sign in:', payload.data);
            return dealResponse(true, payload.data);

        } else if (event === 'autoSignIn_failure') {
            return dealResponse(false, "autoSignIn_failure");
        }
    });
}

/**
 * Function that attempts to sign in a user with a given username and password
 * using the Auth module, and returns the user object if successful or an error message if
 * unsuccessful.
 * @param {string} username - The username of the user trying to sign in.
 * @param {string} password - The user's password that they are trying to use to sign in.
 * @returns It returns an object with two properties: 'success' and 'data'.
 * The data key cn represent the sign-in is successful or a custom error object with a `message`
 * property if there is an error during the sign-in process.
 */
export async function signIn(username:string, password:string) {
    try {
        const user = await Auth.signIn(username, password);
        console.log('user signed in:', user);
        return dealResponse(true, user);
    } catch (error:any) {
        console.log('error signing in', error);
        return dealResponse(false, error.message);
    }
}

/**
 * This function signs out a user from an authentication service and returns an error message if there
 * is one.
 * @param {boolean} global - The `global` parameter is a boolean flag that indicates whether the sign
 * out operation should be applied globally or not. 
 * @returns It returns an object with two properties: 'success' and 'data'. If there is an error signing out,
 * the data key will contain an object error message. If there is no error, the data key will not contain anything
 * (i.e. it will return undefined).
 */
export async function signOut(global:boolean) {
    try {
        await Auth.signOut(global ? { global: true } : undefined);
        return dealResponse(true);
    } catch (error:any) {
        console.log('error signing out: ', error);
        return dealResponse(false, error.message);
    }
}

/**
 * This TypeScript function retrieves a JWT token from the current user session using AWS Amplify Auth
 * and returns it as a response.
 * @returns The `getToken` function is returning an object with two properties: a boolean value
 * indicating whether the token was successfully retrieved (`true` if it was, `false` if there was an
 * error), and either the JWT token string or an error message as a string.
 */
export async function getToken() {
    try {
        const session = await Auth.currentSession();
        return dealResponse(true, session.getIdToken().getJwtToken());
    } catch (error:any) {
        console.log('error getting token: ', error);
        return dealResponse(false, error.message);
    }
}
