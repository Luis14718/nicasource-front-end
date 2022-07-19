import Typography from '@mui/material/Typography';
import { Box, Skeleton } from '@mui/material';
import apple from '../../assets/apple.png';
import google from '../../assets/google.png';
import spotify from '../../assets/spotify.png';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadPagesAsync } from '../../redux/reducers/pages/pages.thunks';



export default function Hero_Section() {

    const dispatch = useDispatch();
    const { isLoading, pages, errorMessage } = useSelector((state) => state.pages);
    useEffect(
        () => {
            dispatch(loadPagesAsync());
        }, []
    );
    return (
        <div className="row hero-section align-items-center">
            <div className="col-12 col-md-6 col-lg-6 ">
                <Typography className="trending" variant="span" component="div" gutterBottom>
                    Trending Episode
                </Typography>
                <Typography variant="h3" component="div" gutterBottom>
                {isLoading && <Skeleton />}
                    {errorMessage && <h3>{errorMessage}</h3>}
                    {pages && pages.acf.Title}
                </Typography>
                <Typography variant="p" component="div" gutterBottom>
                {isLoading && <Skeleton />}
                    {errorMessage && <h3>{errorMessage}</h3>}
                    {pages && pages.acf.content}
                </Typography>
                <Box sx={{ mt: 5 }}>
                    <Typography className="listen" variant="span" component="div" gutterBottom>
                        Listen On Also
                    </Typography>
                    <Box sx={{ mt: 3 }} className="social-hero">
                        <Box className="social-btn" ><img src={spotify} alt={'spotify'} /></Box>
                        <Box className="social-btn" ><img src={google} alt={'google'} /></Box>
                        <Box className="social-btn" ><img src={apple} alt={'apple'} /></Box>
                    </Box>

                </Box>

            </div>
            <div className="col-12 col-md-6 col-lg-6 d-flex">
                     {isLoading && <Skeleton />}
                    {errorMessage && <h3>{errorMessage}</h3>}
                <img className="hero_image" src={pages && pages.acf.image.url} alt="podcast" />
            </div>
        </div>
    );

}