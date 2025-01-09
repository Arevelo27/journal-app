import { doc, collection, setDoc } from "firebase/firestore/lite"
import { FirebaseDB } from "../../firebase/config"

export const startNewNote = () => {
    return async (dispatch, getState) => {

        const { uid } = getState().auth

        const newNote = {
            title: '',
            body: '',
            date: new Date().getTime(),
            imageUrls: [],
        }

        const newDoc = await doc(collection(FirebaseDB, `${uid}/journal/notes`))
        await setDoc(newDoc, newNote)

        // dispatch
        // dispatch(newNote);
        // dispatch(activarNote(newNote));
    }
}