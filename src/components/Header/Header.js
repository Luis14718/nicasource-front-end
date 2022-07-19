import { Component} from 'react';
import {Container} from '@mui/material';
import Navigation from './Nav';
import Hero from './Hero_Section';




export default class Header extends Component {

render() {
    return (
        <div className="header">
            <Container>
              <Navigation/>
              <Hero />
            </Container>
        </div>
     );
}


}

     
