import React, {Component, Fragment, Row} from 'react';
import Box from '@material-ui/core/Box';
import {Button, Typography, createMuiTheme, responsiveFontSizes, MuiThemeProvider} from '@material-ui/core';
import Navbar from './components/navbar'
import contact1 from '../images/contact1.jpg'
import contact2 from '../images/contact2.jpg'
import contact3 from '../images/contact3.jpg'
import contactwtxt1 from '../images/4/contactwtxt1.jpg'
import contactwtxt2 from '../images/4/contactwtxt2.jpg'
import contactwtxt3 from '../images/4/contactwtxt3.jpg'
import home5wtext from '../images/1/homewtxt5.jpg'


export default class contact extends Component {
    constructor(props) {
        super(props)
        this.state = { isLoading: true, drawerActivate:"large", drawer:false }
        this.smallScreen = this.smallScreen.bind(this);
        this.largeScreen = this.largeScreen.bind(this);
        this.mediumScreen = this.mediumScreen.bind(this);
    }
    componentWillMount() {
        if(window.innerWidth <= 1000){
            console.log('heyyyyllooooo')
            this.setState({drawerActivate:"medium"});
        }
        if(window.innerWidth <= 600){
            console.log('heyyyy')
            this.setState({drawerActivate:"small"});
        }
    
        window.addEventListener('resize',()=>{
            if(window.innerWidth <= 1000){
                console.log('heyyyyllooooo')
                this.setState({drawerActivate:"medium"});
            }
            if(window.innerWidth <= 600){
                console.log('heyyyy')
                this.setState({drawerActivate:"small"});
            }
            else{
                this.setState({drawerActivate:"large"})
            }
        });
    }
    componentDidMount() {
        document.body.style.background = "#F5F5F5";
    }

    //small screens
    smallScreen() {
        return (
            <Fragment>
                <Navbar/>
                <Box display="flex" flexDirection="column" m={0} p={0}>
                        <div>
                            <img src={contactwtxt1} display="flex" alt="Background1" style={{maxWidth:"100vw"}}></img>
                        </div>
                        <div style={{position:"relative", textAlign:"left"}}>
                            <img src={contactwtxt3} display="flex" alt="Background1" style={{maxWidth:"100vw"}}></img>
                            <div style={{position:"absolute", bottom:"29%", left: "56.5%", maxWidth:"40vw"}}>
                                <Box display="flex" flexDirection="column" m={0} p={0}>
                                    <Typography style={{fontFamily:"Helvetica Neue", fontSize:"4pt", fontWeight:"bold", color:"#333333", marginTop:0.5, marginBottom:0.5}}>Address: 4000.5 Commodore Drive, Atlanta, GA</Typography>
                                    <Typography style={{fontFamily:"Helvetica Neue", fontSize:"4pt", fontWeight:"bold", color:"#333333", marginTop:0.5, marginBottom:0.5}}>Business Inquiries: info@esrasystems.com</Typography>
                                    <Typography style={{fontFamily:"Helvetica Neue", fontSize:"4pt", fontWeight:"bold", color:"#333333", marginTop:0.5, marginBottom:0.5}}>Apply: jobs@esrasystems.com</Typography>
                                    <Typography style={{fontFamily:"Helvetica Neue", fontSize:"4pt", fontWeight:"bold", color:"#333333", marginTop:0.5, marginBottom:0.5}}>Phone: +1 (919) 475-7292</Typography>
                                </Box>
                            </div>
                        </div>
                        <div style={{position:"relative", textAlign:"right"}}>
                        <img src={home5wtext} display="flex" alt="Background1" style={{maxWidth:"100vw"}}></img>
                        <div style={{position:"absolute", bottom:"30%", right:"7.7%"}}>
                            <Typography style={{fontFamily:"Helvetica Neue", fontSize:"4pt", fontWeight:"bold", color:"#fff"}}> Business Inquiries: info@esrasystems.com
                            </Typography>
                            <Typography style={{fontFamily:"Helvetica Neue", fontSize:"4pt", fontWeight:"bold", color:"#fff"}}> Career Inquiries: jobs@esrasystems.com
                            </Typography>
                         </div>
                    </div>
                </Box>
            </Fragment>
        )
    }

    //medium screens
    mediumScreen() {
        return(
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
                                    <Typography style={{fontFamily:"Helvetica Neue", fontSize:"8pt", fontWeight:"bold", color:"#333333", marginTop:2, marginBottom:2}}>Address: 4002 Commodore Drive, Atlanta, GA</Typography>
                                    <Typography style={{fontFamily:"Helvetica Neue", fontSize:"8pt", fontWeight:"bold", color:"#333333", marginTop:2, marginBottom:2}}>Business Inquiries: info@esrasystems.com</Typography>
                                    <Typography style={{fontFamily:"Helvetica Neue", fontSize:"8pt", fontWeight:"bold", color:"#333333", marginTop:2, marginBottom:2}}>Apply: jobs@esrasystems.com</Typography>
                                    <Typography style={{fontFamily:"Helvetica Neue", fontSize:"8pt", fontWeight:"bold", color:"#333333", marginTop:2, marginBottom:2}}>Phone: +1 (919) 475-7292</Typography>
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

    //large screens
    largeScreen() {
        return (
            <Fragment>
                <Navbar/>
                <Box display="flex" flexDirection="column" m={0} p={0}>
                        <div>
                            <img src={contactwtxt1} display="flex" alt="Background1" style={{maxWidth:"100vw"}}></img>
                        </div>
                        <div style={{position:"relative", textAlign:"left"}}>
                            <img src={contactwtxt3} display="flex" alt="Background1" style={{maxWidth:"100vw"}}></img>
                            <div style={{position:"absolute", bottom:"27%", left: "56.5%", maxWidth:"40vw"}}>
                                <Box display="flex" flexDirection="column" m={0} p={0}>
                                    <Typography style={{fontFamily:"Helvetica Neue", fontSize:"13pt", fontWeight:"bold", color:"#333333", marginTop:5, marginBottom:5}}>Address: 4002 Commodore Drive, Atlanta, GA</Typography>
                                    <Typography style={{fontFamily:"Helvetica Neue", fontSize:"13pt", fontWeight:"bold", color:"#333333", marginTop:5, marginBottom:5}}>Business Inquiries: info@esrasystems.com</Typography>
                                    <Typography style={{fontFamily:"Helvetica Neue", fontSize:"13pt", fontWeight:"bold", color:"#333333", marginTop:5, marginBottom:5}}>Apply: jobs@esrasystems.com</Typography>
                                    <Typography style={{fontFamily:"Helvetica Neue", fontSize:"13pt", fontWeight:"bold", color:"#333333", marginTop:5, marginBottom:5}}>Phone: +1 (919) 475-7292</Typography>
                                </Box>
                            </div>
                        </div>
                        <div style={{position:"relative", textAlign:"right"}}>
                        <img src={home5wtext} display="flex" alt="Background1" style={{maxWidth:"100vw"}}></img>
                        <div style={{position:"absolute", bottom:"30%", right:"7.7%"}}>
                            <Typography style={{fontFamily:"Helvetica Neue", fontSize:"14pt", fontWeight:"light", color:"#fff"}}> Business Inquiries: info@esrasystems.com
                            </Typography>
                            <Typography style={{fontFamily:"Helvetica Neue", fontSize:"14pt", fontWeight:"light", color:"#fff"}}> Career Inquiries: jobs@esrasystems.com
                            </Typography>
                         </div>
                    </div>
                </Box>
            </Fragment>
        )
    }

    render() {
        return (
            <div>
                {this.state.drawerActivate == "large"
                ? this.largeScreen()
                : (
                    this.state.drawerActivate == "medium"
                    ? this.mediumScreen()
                    : this.smallScreen()
                )
                }
            </div>
        )
    }
};