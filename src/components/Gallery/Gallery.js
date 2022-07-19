import { Container, Typography, Modal, Box } from '@mui/material';
import { useState } from 'react';
import tree from '../../assets/tree.png'
import sunset from '../../assets/sunsettree.jpeg'
import sunset2 from '../../assets/sunsettwo.jpeg'
import sunset3 from '../../assets/pinkscape-min.jpeg'
import lake from '../../assets/lake.png'
import trig from '../../assets/trig.png'
import star from '../../assets/stars.png'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  };
  
export default function Gallery() {
    const [open, setOpen] = useState(false);
    const handleClose = () => setOpen(false);
    const [imagefile,setImage] = useState();

     function showimage(image) {
        setImage(image);
        setOpen(true);
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
            <img className="image-modal"src={imagefile} alt={"modal"}></img>
        </Box>
      </Modal>
            <div className="row">
                <div className="col-12 text-center">
                    <Typography variant="h4" component="div" gutterBottom>
                        Our Gallery
                    </Typography></div>
            </div>
            <div className="row gallery">
                <div class="col-lg-4 col-md-12 mb-4 mb-lg-0">
                    <div className="hovereffect">
                        <button onClick={()=>{showimage(sunset)}}>
                        <img src={sunset} className="w-100" alt="tree sunset" />
                        </button>
                    </div>
                    <div className="hovereffect">
                    <button onClick={()=>{showimage(sunset2)}}>
                        <img src={sunset2} className="w-100" alt="tree sunset" />
                        </button>
                    </div>
                    <div className="hovereffect">
                    <button onClick={()=>{showimage(sunset3)}}>
                        <img src={sunset3} className="w-100" alt="tree sunset" />
                        </button>
                    </div>
                </div>

                <div class="col-lg-4 mb-4 mb-lg-0">
                         <button onClick={()=>{showimage(tree)}}>
                        <img src={tree} className="w-100" alt="tree sunset" />
                        </button>
                        <button onClick={()=>{showimage(lake)}}>
                        <img src={lake} className="w-100" alt="tree sunset" />
                        </button>
                </div>

                <div class="col-lg-4 mb-4 mb-lg-0">
                <button onClick={()=>{showimage(trig)}}>
                        <img src={trig} className="w-100" alt="tree sunset" />
                        </button>
                        <button onClick={()=>{showimage(star)}}>
                        <img src={star} className="w-100" alt="tree sunset" />
                        </button>
                </div>
            </div>
        </Container>
    );
}