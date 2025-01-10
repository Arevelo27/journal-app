import { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Grid2, TextField, Typography } from '@mui/material'
import { SaveOutlined } from '@mui/icons-material'
import Swal from 'sweetalert2';
import 'Sweetalert2/dist/sweetalert2.css';
import { useForm } from '../../hook'
import { ImageGallery } from '../components'
import { setActiveNote, startSaveNote } from '../../store/journal';


export const NoteView = () => {

    const dispatch = useDispatch();
    const { active: note, messageSaved, isSaving } = useSelector(state => state.journal);
    const { body, title, date, onInputChange, formState } = useForm(note);

    const dateString = useMemo(() => {
        const newDate = new Date(date);
        return newDate.toUTCString();
    }, [date]);

    useEffect(() => {
        dispatch(setActiveNote(formState));
    }, [formState]);

    useEffect(() => {
        if (messageSaved.length > 0) {
            Swal.fire('Notas actualizada', messageSaved, 'success');
        }
    }, [messageSaved]);

    const onSaveNote = () => {
        dispatch(startSaveNote(formState));
    }

    return (
        <Grid2
            className='animate__animated animate__fadeIn animate__faster'
            container
            direction='row'
            justifyContent='space-between'
            alignItems='center'
            sx={{ mb: 1 }}
        >
            <Grid2 container size={8}>
                <Typography fontSize={39} fontWeight='light'>{dateString}</Typography>
            </Grid2>
            <Grid2 container size={4} display='flex' alignItems='center' justifyContent='end'>
                <Button
                    disabled={isSaving}
                    onClick={onSaveNote}
                    color='primary'
                    sx={{ padding: 2 }}
                >
                    <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
                    Guardar
                </Button>
            </Grid2>

            <Grid2 size={12} container>
                <TextField
                    type="text"
                    variant="filled"
                    placeholder="Ingrese un título"
                    fullWidth
                    label="Título"
                    sx={{ border: 'none', mb: 1 }}
                    name='title'
                    value={title}
                    onChange={onInputChange}
                />
                <TextField
                    type="text"
                    variant="filled"
                    placeholder="Que sucedió en el día de hoy"
                    fullWidth
                    multiline
                    minRows={5}
                    name='body'
                    value={body}
                    onChange={onInputChange}
                />
            </Grid2>

            {/* Image Gallery */}
            <ImageGallery />

        </Grid2>
    )
}
