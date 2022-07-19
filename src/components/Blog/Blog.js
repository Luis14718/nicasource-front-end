
import { Container, Typography, Box } from '@mui/material';
import { Icon } from '@iconify/react';

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
        slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1024, min: 765 },
        items: 3,
        slidesToSlide: 3 // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 765, min: 0 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
    }
};


/// Single post to use with 'for'  to an array of elent 
function SingleBlog({ content }) {
    return (
        <Box className="single-blog">
            <div className="layout">
                <div className="row ">
                    <div className="col-12 top-blog">
                        <div className="row">
                            <div className="col-6">
                                <Typography variant="p" sx={{ color: "#F13C45", }} component="div" gutterBottom>
                                    By Mehedi Hasan
                                </Typography>
                                <Typography variant="span" sx={{ color: "#ACACAC", fontSize: '14px' }} component="div" gutterBottom>
                                    By Mehedi Hasan
                                </Typography>
                            </div>
                            <div className="col-6">
                                <Typography variant="span" sx={{ color: "#ACACAC", fontSize: '14px' }} component="div" gutterBottom>
                                    Sep 11, 2020
                                </Typography>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row p-4">
                    <div className="col-12">
                        <Typography variant="h6" component="div" gutterBottom>
                            Global News Podcast Thai soldier kills many {content}
                        </Typography>
                    </div>
                </div>
                <div className="row p-4">
                    <div className="col-12">
                        <Typography variant="p" component="div" gutterBottom>
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore {content}
                        </Typography>
                    </div>
                </div>
            </div>
        </Box>
    );
}
const CustomRightArrow = ({ onClick, ...rest }) => {
    return <button className="arrow-right" onClick={() => onClick()} ><Icon icon="akar-icons:arrow-right" /></button>;
};
const CustomLeftArrow = ({ onClick, ...rest }) => {
    return <button  className="arrow-left" onClick={() => onClick()} ><Icon icon="akar-icons:arrow-left" /></button>;
};

export default function Blog() {


    return (
        <Container sx={{ mt: 5 }}>
            <div className="row">
                <div className="col-12 text-center">
                    <Typography variant="h4" sx={{ m: 3 }} component="div" gutterBottom>
                        Blog Posts
                    </Typography>
                </div>
            </div>
            <div className="row p-5">
                <Carousel
                    swipeable={true}
                    draggable={false}
                    customRightArrow={<CustomRightArrow />}
                    customLeftArrow={<CustomLeftArrow />}
                    responsive={responsive}
                    ssr={true} // means to render carousel on server-side.
                    infinite={true}
                    autoPlaySpeed={1000}
                    keyBoardControl={true}
                    customTransition="all .5"
                    transitionDuration={500}
                    containerClass="carousel-container"
                    removeArrowOnDeviceType={["tablet", "mobile"]}
                    itemClass=""
                >
                    <div> <SingleBlog content={'1'} /></div>
                    <div ><SingleBlog content={'2'} /></div>
                    <div ><SingleBlog content={'3'} /></div>
                    <div ><SingleBlog content={'4'} /></div>
                    <div ><SingleBlog content={'5'} /></div>

                </Carousel>
            </div>
            <div className="row">

            </div>

        </Container>
    );
}