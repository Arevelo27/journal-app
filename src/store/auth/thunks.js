import { signInWithGoogle, registerUserWithEmailPassword } from "../../firebase/providers";
import { checkingCredentials, login, logout } from "./";

export const checkingAuthentication = (email, password) => {
    return async (dispatch) => {
        dispatch(checkingCredentials());
    }
}

export const startGoogleSignIn = () => {
    return async (dispatch) => {
        dispatch(checkingCredentials());

        const result = await signInWithGoogle();
        if (!result.ok) return dispatch(logout(result.errorMessage || 'No se pudo iniciar sesión con Google()'));

        dispatch(login(result));
    }
}

export const startCreatingUserWithEmailPassword = ({ email, password, displayName }) => {
    return async (dispatch) => {
        dispatch(checkingCredentials());
        const resp = await registerUserWithEmailPassword({ email, password, displayName });

        console.log(resp)
    }
}