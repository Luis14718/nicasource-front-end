import { Container } from '@mui/material';
import NewsLetter from './NewsLetter';
import MenuFooter from './Menu_Footer';
import RightsFooter from './Rights_Footer';


export default function Footer() {
    return(
    <Container sx={{mt: 5 }}>
        <NewsLetter/>
        <MenuFooter/>
        <RightsFooter/>
    </Container>
    );
    
}