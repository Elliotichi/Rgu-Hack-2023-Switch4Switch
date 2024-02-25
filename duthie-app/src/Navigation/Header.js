import { Grid, IconButton } from "@mui/material";
import MapIcon from '@mui/icons-material/Map';
import HomeIcon from '@mui/icons-material/Home';
import { Link } from "react-router-dom";

export function Header(props) {
    return (
        <Grid 
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={2}>
            <Grid item>
                <Link to="/">
                    <IconButton>
                        <MapIcon fontSize="large" />
                    </IconButton>
                </Link>
            </Grid>
            <Grid item>
                <Link to="/about">
                    <IconButton>
                        <HomeIcon fontSize="large" />
                    </IconButton>
                </Link>
            </Grid>
        </Grid>
    )
}