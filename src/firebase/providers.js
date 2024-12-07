import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";
import { FirebaseAuth } from "./config";

const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
    try {
        const result = await signInWithPopup(FirebaseAuth, googleProvider);
        // const credentials = GoogleAuthProvider.credentialFromResult(result);
        // const token = credentials.accessToken;
        const { displayName, email, photoURL, uid } = result.user;

        return {
            ok: true,
            displayName,
            email,
            photoURL,
            uid
        };

    } catch (error) {
        // Handle Errors here.
        return { ok: false, errorMessage: error.message }

    }
};

export const registerUserWithEmailPassword = async ({ email, password, displayName }) => {

    try {
        const resp = await createUserWithEmailAndPassword(FirebaseAuth, email, password);

        const { uid, photoURL } = resp.user;
        await updateProfile(FirebaseAuth.currentUser, { displayName });

        return {
            ok: true,
            uid,
            photoURL,
            email,
            displayName
        };

    } catch (error) {
        // Handle Errors here.
        return { ok: false, errorMessage: error.message }
    }
}

export const loginWithEmailPassword = async ({ email, password }) => {

    try {
        const resp = await signInWithEmailAndPassword(FirebaseAuth, email, password);
        const { displayName, photoURL, uid } = resp.user;

        return {
            ok: true,
            displayName,
            photoURL,
            email,
            uid
        };

    } catch (error) {
        // Handle Errors here.
        return { ok: false, errorMessage: error.message }
    }
}