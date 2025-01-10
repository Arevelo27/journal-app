import { useMemo } from "react"
import { Grid2, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material"
import { TurnedInNot } from "@mui/icons-material"

export const SideBarItem = ({ title, body, id }) => {

    const newTitle = useMemo(() => {
        return title.length > 17
            ? title.substring(0, 17) + '...'
            : title
    })
    return (
        <ListItem disablePadding>
            <ListItemButton>
                <ListItemIcon>
                    <TurnedInNot />
                </ListItemIcon>
                <Grid2>
                    <ListItemText primary={newTitle} />
                    <ListItemText secondary={body} />
                </Grid2>
            </ListItemButton>
        </ListItem>
    )

}