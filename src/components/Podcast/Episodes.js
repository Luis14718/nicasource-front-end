import { Box } from "@mui/material";
import SingleEpisode from "./SingleEpisode";


/* Space to set map when takeing info from wordpress */
export default function Episodes() {
    return (
        <Box xs={{ m: 5 }}>
            <SingleEpisode />
            <SingleEpisode />
            <SingleEpisode />
        </Box>
    );
}