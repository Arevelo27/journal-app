import { Grid2, TextField, Typography } from '@mui/material'
import { SaveOutlined } from '@mui/icons-material'
import { ImageGallery } from '../../ui'


export const NoteView = () => {
    return (
        <Grid2
            container
            direction='row'
            justifyContent='space-between'
            alignItems='center'
            sx={{ mb: 1 }}
        >
            <Grid2 container>
                <Typography fontSize={39} fontWeight='light'>28 de agosto, 2023</Typography>
            </Grid2>
            <Grid2 container display='flex' alignItems='center'>
                <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
                Guardar
            </Grid2>

            <Grid2 container>
                <TextField
                    type="text"
                    variant="filled"
                    placeholder="Ingrese un título"
                    fullWidth
                    label="Título"
                    sx={{ border: 'none', mb: 1 }}
                />
                <TextField
                    type="text"
                    variant="filled"
                    placeholder="Que sucedió en el día de hoy"
                    fullWidth
                    multiline
                    minRows={5}
                />
            </Grid2>

            {/* Image Gallery */}
            <ImageGallery />

        </Grid2>
    )
}
