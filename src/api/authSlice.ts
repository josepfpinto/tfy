import { createSlice } from '@reduxjs/toolkit'
import type { Draft, PayloadAction } from '@reduxjs/toolkit'
import { CognitoUser } from 'amazon-cognito-identity-js';
import { response } from './types';

interface AuthState {
  value: {
    isLoading: boolean,
    isSignout: boolean,
    user?: CognitoUser,
  }
}

const initialState = {
  value: {
    isLoading: false,
    isSignout: false,
  }
} as AuthState;

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setIsLoading(
      state: Draft<AuthState>,
      action: PayloadAction<boolean>
    ) {
      if (action.payload !== state.value.isLoading) {
        state.value.isLoading = action.payload;
      }
    },
    setIsSignout(
      state: Draft<AuthState>,
      action: PayloadAction<boolean>
    ) {
      if (action.payload !== state.value.isSignout) {
        state.value.isSignout = action.payload;
      }
    },
    setUser(
      state: Draft<AuthState>,
      action: PayloadAction<CognitoUser | boolean>
    ) {
      if (typeof action.payload === "boolean" && state.value.user) {
        delete state.value["user"];
      } else if (typeof action.payload === "object") {
        state.value.user = action.payload as CognitoUser;
      }
    },
    setLogin(
      state: Draft<AuthState>,
      action: PayloadAction<response>
    ) {
      if (action.payload.success) {
        setUser(action.payload.data);
      } else {
        setUser(false);
      }
      setIsLoading(false);
      setIsSignout(false);
    },
  },
});

export const getAuthState = (state: { auth: AuthState }) => state.auth.value;
export const { setIsLoading, setIsSignout, setUser, setLogin } = authSlice.actions;
export default authSlice.reducer;