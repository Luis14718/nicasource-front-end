import { Box } from '@mui/material';
import shield from '../../assets/shield.jpg';
import Typography from '@mui/material/Typography';




export default function SingleEpisode() {
    return (
        <Box className="row single-episode" >
            <div className="col-12 col-md-3 d-flex">
                <img src={shield} alt={"shield"} />
            </div>
            <div className="col-12 col-md-7">
                <Typography variant="h5" component="div" gutterBottom>
                    Lorem ipsum dolor sit amet, consectetuer.
                </Typography>
                <Typography variant="p" component="div" gutterBottom>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam , sed diam voluptua.
                </Typography>
                <button className="btn secondary-btn"> Know More</button>

            </div>
            <div className="col-12 col-md-2 tags">
                <Typography variant="span" component="div" gutterBottom>
                    #Season 1
                </Typography>
                <Typography variant="span" component="div" gutterBottom>
                    # Posted on Sep 3, 2020
                </Typography>
                <Typography variant="span" component="div" gutterBottom>
                    #  audio / goodbyes / life
                </Typography>
            </div>
        </Box>
    );
}