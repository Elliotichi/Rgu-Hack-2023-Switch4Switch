import { Grid, IconButton } from "@mui/material";
import MapIcon from '@mui/icons-material/Map';
import HomeIcon from '@mui/icons-material/Home';
import { Link } from "react-router-dom";

export function Header(props) {
    return (
        <div className='addPointerEvents'>
            <Grid 
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={2}>
                <Grid item>
                    <Link to="/">
                        <IconButton>
                            <MapIcon className="nav-icon2" fontSize="large" />
                        </IconButton>
                    </Link>
                </Grid>
                <Grid item>
                    <Link to="/about">
                        <IconButton>
                            <HomeIcon className="nav-icon" fontSize="large" />
                        </IconButton>
                    </Link>
                </Grid>
            </Grid>
        </div>
    )
}