import hero_image from '../../assets/Podcast.png';
import Typography from '@mui/material/Typography';
import {Box} from '@mui/material';
import apple from '../../assets/apple.png';
import google from '../../assets/google.png';
import spotify from '../../assets/spotify.png';





export default function Hero_Section() {
    return (
        <div className="row hero-section align-items-center">
            <div className="col-12 col-md-6 col-lg-6 ">
                <Typography className="trending" variant="span" component="div" gutterBottom>
                    Trending Episode
                </Typography>
                <Typography variant="h3" component="div" gutterBottom>
                    Lorem ipsum dolor sit amet, consectetuer.
                </Typography>
                <Typography variant="p" component="div" gutterBottom>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                </Typography>
                <Box sx={{mt:5}}>
                <Typography className="listen" variant="span" component="div" gutterBottom>
                    Listen On Also
                    </Typography>
                    <Box sx={{mt:3}}  className="social-hero">
                    <Box className="social-btn" ><img src={spotify} alt={'spotify'}/></Box>
                    <Box className="social-btn" ><img src={google} alt={'google'}/></Box>
                    <Box className="social-btn" ><img src={apple} alt={'apple'}/></Box>
                    </Box>
               
                </Box>
               
            </div>
            <div className="col-12 col-md-6 col-lg-6 d-flex">
                <img className="hero_image" src={hero_image} alt="podcast" />
            </div>
        </div>
    );

}