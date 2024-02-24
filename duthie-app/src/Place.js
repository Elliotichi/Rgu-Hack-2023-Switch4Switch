import { Card, Grid, Skeleton, Typography } from "@mui/material";

export function Place() {
    return (
        <Card>
            <Grid 
                container 
                spacing={0}
                direction="column"
                justifyContent="space-between"
                alignItems="center"
                columns={5}>
                <Grid item xs={3} sm={3}>
                    <Typography>Text!</Typography>
                </Grid>
                <Grid item>
                    <Skeleton variant="rectangular" width={210} height={118} />
                </Grid>
            </Grid>
        </Card>
    );
}