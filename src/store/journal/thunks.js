import { doc, collection, setDoc } from "firebase/firestore/lite"
import { FirebaseDB } from "../../firebase/config"
import { addNewEmptyNote, savingNewNote, setActiveNote, setNotes } from "./"
import { loadNotes } from "../../helpers/loadNotes"

export const startNewNote = () => {
    return async (dispatch, getState) => {

        dispatch(savingNewNote());

        const { uid } = getState().auth

        const newNote = {
            title: '',
            body: '',
            date: new Date().getTime(),
            imageUrls: [],
        }

        const newDoc = await doc(collection(FirebaseDB, `${uid}/journal/notes`))
        await setDoc(newDoc, newNote)

        newNote.id = newDoc.id

        // dispatch
        dispatch(addNewEmptyNote(newNote));
        dispatch(setActiveNote(newNote));
    }
}

export const startLoadingNotes = () => {
    return async (dispatch, getState) => {

        const { uid } = getState().auth

        if (!uid) throw new Error('El UID del usuario no existe')

        await loadNotes(uid).then(notes => dispatch(setNotes(notes)))
    }
}