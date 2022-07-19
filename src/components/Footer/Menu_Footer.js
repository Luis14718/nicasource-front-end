import logo from '../../assets/logo.svg';
import { Typography, Box } from '@mui/material';
import { Icon } from '@iconify/react';
import apple from '../../assets/apple.png';
import google from '../../assets/google.png';
import spotify from '../../assets/spotify.png';


export default function MenuFooter() {
    return (
        <div className="row mb-5">
            <div className="col-12 col-md-4 p-2">
                <img className="footer-logo" src={logo} alt="Nicasource" />
                <Typography className="w-70" sx={{ mt: 3, fontSize: '13px', color: "#999999" }} variant="span" component="div" gutterBottom>
                    Lorem ipsum dolor sit amet, consetetur sadipscing  elitr, sed diam nonumy eirmod.
                </Typography>
                <Typography sx={{ mt: 3 }} variant="" component="div" gutterBottom>
                    <span className="icon"><Icon icon="ei:sc-facebook" /></span>
                    <span className="icon"><Icon icon="akar-icons:linkedin-v2-fill" /></span>
                    <span className="icon"><Icon icon="akar-icons:instagram-fill" /></span>
                    <span className="icon"><Icon icon="ant-design:skype-outlined" /></span>
                </Typography>

            </div>
            <div className="col-12 col-md-4">
                <div className="row">
                    <div className="col-6">
                        <Typography sx={{ mt: 3 }} variant="p" component="div" gutterBottom>
                            Pages
                        </Typography>
                        <Typography sx={{ mt: 3, color: "#999999" }} variant="p" component="div" gutterBottom>
                            <ul className="footer_menu">
                                <li>About</li>
                                <li>Episode</li>
                                <li>Blog</li>
                                <li>Contact</li>
                            </ul>
                        </Typography>


                    </div>
                    <div className="col-6">
                        <Typography sx={{ mt: 3 }} variant="p" component="div" gutterBottom>
                            Recent Episodes
                        </Typography>
                        <Typography sx={{ mt: 3, color: "#999999" }} variant="p" component="div" gutterBottom>
                            <ul className="footer_menu">
                                <li>Episodes 1</li>
                                <li>Episode 2</li>
                                <li>Episode 3</li>
                                <li>Episode 4</li>
                            </ul>
                        </Typography>
                    </div>
                </div>
            </div>
            <div className="col-12 col-md-4">
                <Typography sx={{ mt: 3 }} variant="p" component="div" gutterBottom>
                    Listen my podcasts In
                </Typography>
                <ul className="footer_menu">
                    <li>
                        <Box className="social-btn" ><img src={google} alt={'spotify'} /></Box>
                    </li>
                    <li>
                        <Box className="social-btn" ><img src={apple} alt={'spotify'} /></Box>
                    </li>
                    <li>
                        <Box className="social-btn" ><img src={spotify} alt={'spotify'} /></Box>
                    </li>
                </ul>

            </div>
        </div>);
} 