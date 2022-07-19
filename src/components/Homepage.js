import { Component } from 'react';
import Header from './Header/Header';
import Podcast from './Podcast/Podcast';
import Blog from './Blog/Blog';
import Gallery from './Gallery/Gallery';
import Footer from './Footer/Footer';
export default class Home extends Component {
    render() {
        return (<>
            <Header />
            <Podcast />
            <Blog/>
            <Gallery />
            <Footer />
        </>);
    }
}