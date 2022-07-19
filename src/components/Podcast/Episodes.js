import { Box ,Skeleton } from "@mui/material";
import SingleEpisode from "./SingleEpisode";
import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import  {loadPostsAsync} from '../../redux/reducers/posts/posts.thunks';


/* Space to set map when takeing info from wordpress */
export default function Episodes() {
    const dispatch = useDispatch();
    const {isLoading, posts, errorMessage} = useSelector((state)=> state.posts);
    
    useEffect(
        ()=>{
        dispatch(loadPostsAsync());
        },[]
    );
    
    return (
        <Box xs={{ m: 5 }}>
            {isLoading && <h3> <Skeleton/></h3>}
          {errorMessage && <h3>{errorMessage}</h3>}
          {posts && posts.map((post) =><SingleEpisode key={post.id} {...post} />)}

        </Box>
    );
}