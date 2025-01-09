export const startNewNote = () => {
    return async (dispatch, getState) => {

        const newNote = {
            title: '',
            body: '',
            date: new Date().getTime(),
            imageUrls: [],
            uid: getState().auth.uid
        }
        // dispatch
        // dispatch(newNote);
        // dispatch(activarNote(newNote));
    }
}