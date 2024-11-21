import { Box } from "@mui/material"
import { Navbar } from "../../ui";

const drawerWidth = 240;

export const JournalLayout = ({ children }) => {
    return (
        <Box sx={{ display: 'flex' }}>
            {/* Nabvar */}
            <Navbar drawerWidth={ drawerWidth } />

            {/* Sidebar */}

            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3 }}
            >

                {/* Toolbar */}

                {children}
            </Box>
        </Box>
    )
}