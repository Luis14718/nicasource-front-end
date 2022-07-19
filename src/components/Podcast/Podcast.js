import { Component } from 'react';
import { Box, Container, Typography } from '@mui/material';
import Episodes from './Episodes';

export default class Podcast extends Component {
    render() {
        return (<>
            <Container >
                <Box className="white-box">
                    <div className="row mb-4">
                        <div className=" col-12 col-md-10 col-lg-10 ">
                            <Typography variant="h4" component="div"  gutterBottom>
                                Lastest Podcast Episodes
                            </Typography>
                        </div>
                        <div className="col-12 col-md-2 col-lg-2 v-all">
                            <button className="btn primary-btn " >View all</button>
                        </div>
                    </div>
                    <div className="row">
                        <Episodes/>
                    </div>
                    <div className="row mt-4 ">
                        <div className="col-12 show-more ">
                        <button className="btn secondary-btn"> Show More Episodes</button>
                        </div>
                    </div>
                </Box>
            </Container>
        </>);
    }
}