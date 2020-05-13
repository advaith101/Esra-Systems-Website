import React, {Component, Fragment, Row} from 'react';
import Box from '@material-ui/core/Box';
import {Button, Typography} from '@material-ui/core';
import Navbar from './components/navbar'
import contact1 from '../images/contact1.jpg'
import contact2 from '../images/contact2.jpg'
import contact3 from '../images/contact3.jpg'
import contactwtxt1 from '../images/4/contactwtxt1.jpg'
import contactwtxt2 from '../images/4/contactwtxt2.jpg'
import contactwtxt3 from '../images/4/contactwtxt3.jpg'
import home5wtext from '../images/1/homewtxt5.jpg'

export default class contact extends Component {
    componentDidMount(){
        document.body.style.background = "#F5F5F5";
    }
    render() {
        return (
            <Fragment>
                <Navbar/>
                <Box display="flex" flexDirection="column" m={0} p={0}>
                        <div>
                            <img src={contactwtxt1} display="flex" alt="Background1" style={{maxWidth:"100vw"}}></img>
                        </div>
                        <div style={{position:"relative", textAlign:"left"}}>
                            <img src={contactwtxt3} display="flex" alt="Background1" style={{maxWidth:"100vw"}}></img>
                            <div style={{position:"absolute", bottom:"26.9%", left: "56.5%", maxWidth:"40vw"}}>
                                <Box display="flex" flexDirection="column" m={0} p={0}>
                                    <Typography style={{fontFamily:"Helvetica Neue", fontSize:"16pt", fontWeight:"bold", color:"#333333", marginTop:5, marginBottom:5}}>Address: 4002 Commodore Drive, Atlanta, GA</Typography>
                                    <Typography style={{fontFamily:"Helvetica Neue", fontSize:"16pt", fontWeight:"bold", color:"#333333", marginTop:5, marginBottom:5}}>Business Inquiries: info@esrasystems.com</Typography>
                                    <Typography style={{fontFamily:"Helvetica Neue", fontSize:"16pt", fontWeight:"bold", color:"#333333", marginTop:5, marginBottom:5}}>Apply: jobs@esrasystems.com</Typography>
                                    <Typography style={{fontFamily:"Helvetica Neue", fontSize:"16pt", fontWeight:"bold", color:"#333333", marginTop:5, marginBottom:5}}>Phone: +1 (919) 475-7292</Typography>
                                </Box>
                            </div>
                        </div>
                        <div>
                            <img src={home5wtext} display="flex" alt="Background1" style={{maxWidth:"100vw"}}></img>
                        </div>
                </Box>
            </Fragment>
        )
    }
};