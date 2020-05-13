import React, {Component, Fragment, Row} from 'react';
import Box from '@material-ui/core/Box';
import Navbar from './components/navbar'
import about1 from '../images/about1.jpg'
import about2 from '../images/about2.jpg'
import about3 from '../images/about3.jpg'
import about4 from '../images/about4.jpg'
import about5 from '../images/about5.jpg'
import aboutwtxt1 from '../images/2/aboutwtxt1.jpg'
import aboutwtxt2 from '../images/2/aboutwtxt2.jpg'
import aboutwtxt3 from '../images/2/aboutwtxt3.jpg'
import aboutwtxt4 from '../images/2/aboutwtxt4.jpg'
import home5wtext from '../images/1/homewtxt5.jpg'


export default class About extends Component {
    componentDidMount(){
        document.body.style.background = "#F5F5F5";
    }
    render() {
        return (
            <Fragment>
                <Navbar/>
                <Box display="flex" flexDirection="column" m={0} p={0}>
                        <div>
                            <img src={aboutwtxt1} display="flex" alt="Background1" style={{maxWidth:"100vw"}}></img>
                        </div>
                        <div>
                            <img src={aboutwtxt2} display="flex" alt="Background1" style={{maxWidth:"100vw"}}></img>
                        </div>
                        <div>
                            <img src={aboutwtxt3} display="flex" alt="Background1" style={{maxWidth:"100vw"}}></img>
                        </div>
                        <div>
                            <img src={aboutwtxt4} display="flex" alt="Background1" style={{maxWidth:"100vw"}}></img>
                        </div>
                        <div>
                            <img src={home5wtext} display="flex" alt="Background1" style={{maxWidth:"100vw"}}></img>
                        </div>
                </Box>
            </Fragment>
        )
    }
};