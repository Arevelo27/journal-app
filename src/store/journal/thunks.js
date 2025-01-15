import { doc, collection, setDoc } from "firebase/firestore/lite"
import { FirebaseDB } from "../../firebase/config"
import { addNewEmptyNote, savingNewNote, setActiveNote, setNotes, setPhotosToActiveNote, setSaving, updateNote } from "./"
import { loadNotes } from "../../helpers/loadNotes"
import { fileUpload } from "../../helpers/fileUpload"

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

export const startSaveNote = () => {
    return async (dispatch, getState) => {

        dispatch(setSaving());

        const { uid } = getState().auth
        const { active: note } = getState().journal

        const noteToFirestore = { ...note };  // copio la nota
        delete noteToFirestore.id;  // elimino el id de la nota

        const docRef = doc(FirebaseDB, `${uid}/journal/notes/${note.id}`);  // id de la nota a actualizar
        await setDoc(docRef, noteToFirestore, { merge: true });  // actualizo la nota

        dispatch(updateNote(note));  // actualizo la nota en el state
    }
}

export const startUploadingFiles = (files = []) => {
    return async (dispatch) => {

        dispatch(setSaving());

        const fileUploadPromises = [];
        for (const file of files) {
            fileUploadPromises.push(fileUpload(file));  // creo una promesa para cada archivo
        }

        const photosUrls = await Promise.all(fileUploadPromises);  // espero todas las promesas para obtener las urls de las fotos

        console.log(photosUrls)

        dispatch(setPhotosToActiveNote(photosUrls));  // actualizo las fotos en el state
    }
}