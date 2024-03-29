import { Container, Typography, Modal, Box, Skeleton } from '@mui/material';
import { useState } from 'react';
import tree from '../../assets/tree.png'
import sunset from '../../assets/sunsettree.jpeg'
import sunset2 from '../../assets/sunsettwo.jpeg'
import sunset3 from '../../assets/pinkscape-min.jpeg'
import lake from '../../assets/lake.png'
import trig from '../../assets/trig.png'
import star from '../../assets/stars.png'
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadPagesAsync } from '../../redux/reducers/pages/pages.thunks';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
};


export default function Gallery() {
    const dispatch = useDispatch();
    const { isLoading, pages, errorMessage } = useSelector((state) => state.pages);
    useEffect(
        () => {
            dispatch(loadPagesAsync());
        }, []
    );
    const [open, setOpen] = useState(false);
    const handleClose = () => setOpen(false);
    const [imagefile, setImage] = useState();

    function showimage(image) {
        setImage(image);
        setOpen(true);
    }
    function gallery(image, numb) {
        let resto = numb % 3;
        console.log(resto + "" + numb);
    }
    return (
        <Container sx={{ mb: 5 }}>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <img className="image-modal" src={imagefile} alt={"modal"}></img>
                </Box>
            </Modal>
            <div className="row">
                <div className="col-12 text-center">
                    <Typography variant="h4" component="div" gutterBottom>
                        Our Gallery
                    </Typography></div>
            </div>

            <div className="row gallery">
                {isLoading && <Skeleton />}
                {errorMessage && <h3>{errorMessage}</h3>}
                {pages && pages.acf.photo_gallery.gallery[0].map((images) => {
                    return (
                        <div key={images.id} className="col-lg-4 col-md-12 mb-4 mb-lg-0">
                            <div className="hovereffect">
                                <button onClick={() => { showimage(images.full_image_url) }}>
                                    <img src={images.full_image_url} className="w-100" alt="tree sunset" />
                                </button>
                            </div>
                        </div>
                    );
                })}


            </div>
        </Container>
    );
}