import { Grid, Skeleton, Typography } from '@mui/material';
import Card from '@mui/material/Card';

export function Course(props) {
    return (
        <Card>
            <Grid 
                container 
                spacing={0}
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                columns={5}>
                <Grid item xs={3} sm={3}>
                    <div className="course-text">
                        <Typography variant="h4">{props.name}</Typography>
                        <Typography>{props.distance + "km"}</Typography>
                        <Typography>{props.info}</Typography>
                    </div>
                </Grid>
                <Grid item>
                    <Skeleton variant="rectangular" width={210} height={118} />
                </Grid>
            </Grid>
        </Card>
    );
}