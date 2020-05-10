import React, {Component, Fragment, Row} from 'react';
import Box from '@material-ui/core/Box';
import Navbar from './components/navbar'
import home1 from '../images/home1.jpg'
import home1flipped from '../images/home1flipped.jpg'
import home2 from '../images/home2.jpg'
import home3 from '../images/home3.jpg'
import home4 from '../images/home4.jpg'
import home5 from '../images/home5.jpg'
import home2wtext from '../images/home2wtext.jpg'
import home3wtext from '../images/home3wtext.jpg'
import home4wtext from '../images/home4wtext.jpg'
import home5wtext from '../images/home5wtext.jpg'


export default class Home extends Component {
    render() {
        return (
            <Fragment>
                <Navbar/>
                <Box display="flex" flexDirection="column" m={0} p={0}>
                    <div style={{position:"relative", textAlign:"left"}}>
                        <img src={home1} display="flex" alt="Background1" style={{maxWidth:"100vw"}}></img>
                        <div style={{position:"absolute", bottom:"14%", left:"7%", maxWidth:"45vw"}}>
                            <h1 style={{fontFamily:"helvetica", fontSize:"36pt", fontWeight:"", color:"#fff"}}>We are a software development firm based in Atlanta</h1>
                            <h3 style={{color:"#fff", maxWidth:"30vw"}}>We specialize in developing software technology for your corporate needs. Ready to deploy anytime, anywhere.</h3>    
                        </div>
                    </div>
                    <div>
                        <img src={home2wtext} display="flex" alt="Background1" style={{maxWidth:"100vw"}}></img>
                    </div>
                    <div>
                        <img src={home3wtext} display="flex" alt="Background1" style={{maxWidth:"100vw"}}></img>
                    </div>
                    <div>
                        <img src={home4wtext} display="flex" alt="Background1" style={{maxWidth:"100vw"}}></img>
                    </div>
                    <div>
                        <img src={home5wtext} display="flex" alt="Background1" style={{maxWidth:"100vw"}}></img>
                    </div>
                </Box>
            </Fragment>
        )
    }
};