import { Box } from '@mui/material';
import shield from '../../assets/shield.jpg';
import Typography from '@mui/material/Typography';




export default function SingleEpisode({ ...post }) {

    return (
        <Box className="row single-episode" key={post.id}>
            <div className="col-12 col-md-3 d-flex">
                <img src={post.acf.NS_image.url} alt={"shield"} />
            </div>
            <div className="col-12 col-md-7">
                <Typography variant="h5" component="div" gutterBottom>
                    {post.title.rendered}
                </Typography>
                <Typography variant="p" component="div" gutterBottom>
                    {post.acf.description}
                </Typography>
                <button className="btn secondary-btn"> Know More</button>

            </div>
            <div className="col-12 col-md-2 tags">
                {post.acf.category.map((tag) =>
                    <Typography variant="span" key={tag} component="div" gutterBottom>
                        {"#" + tag}
                    </Typography>)}

            </div>
        </Box>
    );
}