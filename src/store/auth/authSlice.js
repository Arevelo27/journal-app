import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        status: 'checking', // 'authenticated', 'not-authenticated
        uid: null,
        email: null,
        displayName: null,
        photoURL: null,
        errorMessage: null
    },
    reducers: {
        login: ( state, { payload } ) => {
        },
        logout: ( state, { payload } ) => {     
        },
        checkingCredentials: ( state ) => {
        }
    }
});


// Action creators are generated for each case reducer function
export const { increment } = authSlice.actions;