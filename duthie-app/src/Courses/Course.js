import { Grid, Skeleton, Typography } from '@mui/material';
import Card from '@mui/material/Card';

export function Course(props) {
    return (
        <Card>
            <div className='addPointerEvents'>
                <Grid 
                    container 
                    spacing={0}
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                    columns={5}>
                    <Grid item xs zeroMinWidth>
                        <div className="course-text">
                            <Typography noWrap={false} variant="h5">{props.name}</Typography>
                            <Typography noWrap={false}>{props.distance + "km"}</Typography>
                            <Typography noWrap={false} style={{overflowWrap: 'break-word'}}>{props.info}</Typography>
                        </div>
                    </Grid>
                    {/* <Grid item>
                        <Skeleton variant="rectangular" width={150} height={100} />
                    </Grid> */}
                </Grid>
            </div>
        </Card>
    );
}