import { Grid2, Typography } from '@mui/material';
import { StarOutline } from '@mui/icons-material';

export const NothingSelectedView = () => {
    return (
        <Grid2
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            sx={{
                minHeight: 'calc(100vh - 110px)',
                backgroundColor: 'primary.main',
                borderRadius: 3
            }}
        >
            <Grid2 xs={12}> {/* Asegúrate de que esto esté correcto */}
                <StarOutline sx={{ fontSize: 100, color: 'white' }} />
            </Grid2>
            <Grid2 xs={12}> {/* Asegúrate de que esto esté correcto */}
                <Typography variant="h5" sx={{ color: 'white' }}>No hay nada seleccionado</Typography>
            </Grid2>
        </Grid2>
    );
}