
import { Container, Typography, Box, Skeleton } from '@mui/material';
import { Icon } from '@iconify/react';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadBlogsAsync } from '../../redux/reducers/blogs/blogs.thunks';
import parse from 'html-react-parser';
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
function SingleBlog({ ...blog }) {

    function htmlgenerate(html) {
        return parse(decodeURIComponent(html.replace(/\+/g, ' ')));
    }


    return (
        <Box className="single-blog" id={blog.id} key={blog.id}>
            <div className="layout" id={blog.id} key={blog.id}>
                <div className="row ">
                    <div className="col-12 top-blog">
                        <div className="row">
                            <div className="col-6">
                                <Typography variant="p" sx={{ color: "#F13C45", }} component="div" gutterBottom>
                                    By Mehedi Hasan
                                </Typography>
                                <Typography variant="span" sx={{ color: "#ACACAC", fontSize: '14px' }} component="div" gutterBottom>
                                    Nicasource Radio
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
                            {htmlgenerate(blog.title.rendered)}
                        </Typography>
                    </div>
                </div>
                <div className="row p-4">
                    <div className="col-12">
                        <Typography variant="p" component="div" gutterBottom>
                        {htmlgenerate(blog.content.rendered)}
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
    return <button className="arrow-left" onClick={() => onClick()} ><Icon icon="akar-icons:arrow-left" /></button>;
};



export default function Blog() {

    const dispatch = useDispatch();
    const { isLoading, blogs, errorMessage } = useSelector((state) => state.blogs);
    useEffect(
        () => {
            dispatch(loadBlogsAsync());
        }, []
    );
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
                    {isLoading && <Skeleton/>}
                    {errorMessage && <h3>{errorMessage}</h3>}
                    {blogs && blogs.map((blogs) => <div key={blogs.id}> <SingleBlog  {...blogs} /></div>)}
                </Carousel>
            </div>
            <div className="row">

            </div>

        </Container>
    );
}