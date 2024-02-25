import { Card, Grid, ThemeProvider, Typography } from "@mui/material";

export function Place(props) {
    return (
        <Card>
            <div className="carousel-card addPointerEvents">
                <Grid 
                    container 
                    spacing={0}
                    direction="column"
                    justifyContent="space-between"
                    alignItems="left"
                    columns={5}>
                    <Grid item className="place-img">
                        <img src={props.img} className="place-img"></img>
                    </Grid>
                    <Grid item xs={3} sm={3}>
                        <Typography variant="h5">{props.name}</Typography>
                    </Grid>
                    <Grid item xs={3} sm={3}>
                        <Typography>{props.description}</Typography>
                    </Grid>
                </Grid>
            </div>
        </Card>
    );
}