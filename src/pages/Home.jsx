import React, {Component, Fragment, Row} from 'react';
import { Redirect, Link, useHistory } from 'react-router-dom';
import Box from '@material-ui/core/Box';
import {Button, Typography, createMuiTheme, responsiveFontSizes, MuiThemeProvider, SvgIcon} from '@material-ui/core';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import Navbar from './components/navbar';
import Loader from 'react-loader-spinner';
import home1wtext from '../images/1/desktop/homewtxt1.jpg'
import home2wtext from '../images/1/desktop/homewtxt2.jpg'
import home3wtext from '../images/1/desktop/homewtxt3.jpg'
import home4wtext from '../images/1/desktop/homewtxt4.jpg'
import home5wtext from '../images/1/desktop/homewtxt5.jpg'
import homemobile1 from '../images/1/mobile/homemobile1darker.jpg'
import homemobile2 from '../images/1/mobile/homemobile2.jpg'
import homemobile3 from '../images/1/mobile/homemobile3.jpg'
import homemobile4 from '../images/1/mobile/homemobile4.jpg'
import homemobile5 from '../images/1/mobile/homemobile5.jpg'
import footer from '../images/1/mobile/Footerdiff.jpg'
import { CSSTransition } from 'react-transition-group';
import '../index.css';

export default class Home extends Component {
    constructor(props) {
        super(props)
        this.state = { isLoading: true, drawerActivate:false, drawer:false }
        this.smallScreen = this.smallScreen.bind(this);
        this.largeScreen = this.largeScreen.bind(this);
        this.isVisiblefirst = true;
    }
    componentWillMount() {
        if(window.outerWidth <= 850){
          this.setState({drawerActivate:true});
        }
    
        window.addEventListener('resize',()=>{
          if(window.outerWidth <= 850){
            this.setState({drawerActivate:true});
          }
          else{
            this.setState({drawerActivate:false})
          }
        });
    }
    componentDidMount() {
        document.body.style.background = "#F5F5F5";
        this.setState({ isLoading: false })
    }

    //small screens 
    smallScreen() {
        return(
            <Fragment>
                <Navbar/>
                <Box display="flex" flexDirection="column" m={0} p={0} style={{fontSize: 0}}>
                    
                    <div style={{position:"relative", textAlign:"left"}}>
                        <img src={homemobile1} display="flex" alt="Background1" style={{maxWidth:"100%"}}></img>
                        <Typography  style={{fontFamily:"Arial", 
                             color:"white",
                            lineHeight:"9.4vw",
                            position:"absolute",
                            bottom:"3%", 
                            left:"7.7%",
                           fontSize:"8vw"}}>
                        <b>Esra Systems</b>
                        <br/>
                            Tailored HR Solutions
                            <Typography fontWeight="fontWeightLight" style={{fontSize:"5vw", marginRight:"4vw",marginTop:"3vw", lineHeight:"6vw", marginBottom: "3vw"}}>
                            We created a fully customizable leave
                            and accommodations management
                            platform suited to handle coronavirus
                            related absence and designed to help
                            with the FMLA and ADA processes.</Typography>
                        </Typography>
                    </div>
                    
                    <div style={{position:"relative", textAlign:"left"}}>
                        <img src={homemobile2} display="flex" alt="Background1" style={{maxWidth:"100%"}}></img>
                        <Typography style={{fontFamily:"Arial", 
                             color:"black",
                            lineHeight:"8vw",
                            position:"absolute",
                            top:"10%", 
                            left:"17.7%",
                           fontSize:"7vw",
                            right:"16%"}}>
                            <b>Why Esra?</b>
                            <br/>
                            <br/>
                            <div  height="70vw" style={{position:"relative", top:"28%", left:"0", right:"10%"}}>
                            <Typography style={{fontSize:"6vw"}}>
                                Fast Deployment
                            <br/>
                                <Typography style={{fontSize:"4vw" ,marginTop:"2vw"}}>1-3 weeks: We guarantee an
                                industry leading delivery time -
                                expedited delivery available
                                upon request.</Typography>
                            <br/>
                                Bespoke Software
                            <br/>
                                <Typography style={{fontSize:"4vw",marginTop:"2vw"}}>We offer a fully customizable
                                    platform as per your company’s
                                    unique needs - additional
                                    alterations available after.</Typography>
                            <br/>
                                Client Care
                            <br/>
                                <Typography style={{fontSize:"4vw",marginTop:"2vw"}}>We are 24/7. No robots,
                                    outsourcing, or recordings rather
                                    we have Josh, Advaith and
                                    Swaraj. Contact us day or night.</Typography>
                        </Typography>
                        </div>
                        </Typography>
                    </div>

                    <div height="50vw" style={{position:"relative", textAlign:"left"}}>
                        <img src={homemobile3} display="flex" alt="Background1" style={{maxWidth:"100%"}}></img>
                        
                        <Typography style={{fontFamily:"Arial", 
                             color:"black",
                            lineHeight:"7vw",
                            position:"absolute",
                            top:"14%", 
                            left:"10.7%",
                           fontSize:"4vw"}}>
                            Meet our product
                            <div  height="60vw" style={{position:"relative", top:"10%", left:"0", right:"10%"}}>
                            <Typography style={{fontSize:"6vw"}}><b>The Esra Leave Manager</b></Typography>
                            <Typography style={{fontSize:"4vw", marginRight:"9vw", marginTop:"3vw", lineHeight:"6vw", marginBottom: "3vw"}}>
                                The Esra Leave Manager was built as a tool to aid
                                HR teams during the coronavirus pandemic. In
                                the Month of April (2020) “employed people not
                                at work” due to coronavirus went up by 271% (US
                                Bureau of Labor Statistics, May 8th, 2020). Clearly,
                                our country’s HR teams needed our help, they
                                needed Esra. We created a platform that collects,
                                filters, and exports leave and accommodation
                                requests so they may get to the necessary third
                                party, and allow your HR teams to focus on what
                                matters most, your employees.
                                <br/>
                                <br/>
                                <Link to="/products" style={{ color: 'inherit', textDecoration: 'none' }}>
                                <b>Go to products page</b><ArrowForwardIcon style={{fontSize:"5vw", position:"absolute", bottom:"-.05vw"}}/>

                                </Link>
                        </Typography>
                    </div>
                    </Typography>
                    </div>
                    <div style={{position:"relative", textAlign:"left"}}>
                        <img src={homemobile4} display="flex" alt="Background1" style={{maxWidth:"100%"}}></img>

                    </div>
                    <div style={{position:"relative", textAlign:"left"}}>
                        <img src={homemobile5} display="flex" alt="Background1" style={{maxWidth:"100%"}}></img>
                        <Typography style={{fontFamily:"Arial", 
                             color:"black",
                            lineHeight:"8vw",
                            position:"absolute",
                            top:"12%", 
                            left:"10.7%",
                           fontSize:"4vw"}}>
                            Like what you see?
                             <div  height="60vw" style={{position:"relative", top:"10%", left:"0", right:"10%"}}>
                            <Typography style={{fontSize:"6vw", lineHeight:"6vw"}}><b>Get in Touch!
                                <br/>Let’s start a conversation.</b></Typography>
                            <Typography style={{fontSize:"4vw", marginRight:"12vw", marginTop:"5vw", lineHeight:"6vw", marginBottom: "3vw"}}>
                                We look forward to hearing about how we can
                                help your HR team with our tailored software.
                                Through our custom-made platform, 24/7
                                accessibility, and industry leading delivery time
                                we are confident we can solve your company’s
                                HR challenges. Help us help you.
                                <br/><br/>
                                <Link to="/contact" style={{ color: 'inherit', textDecoration: 'none' }}>
                                <b>Contact Us</b><ArrowForwardIcon style={{fontSize:"5vw", position:"absolute", bottom:"-.05vw"}}/>

                                </Link>
                                </Typography>
                                </div>

                        </Typography>
                    </div>
                        <div style={{position:"relative", textAlign:"left"}}>
                        <img src={footer} display="flex" alt="Background1" style={{maxWidth:"100%"}}></img>
                        <div style={{position:"absolute", bottom:"20%", left:"7.7%"}}>
                            <Typography style={{fontFamily:"Arial", fontSize:"5vw", color:"#fff", lineHeight:"2vw"}}> 
                            <b>Esra Systems</b>
                            <br/>
                            <br/>
                            <br/>
                            <Typography style={{fontSize:"3vw"}}>
                                Business Inquiries: info@esrasystems.com
                             <br/>Career Inquiries: jobs@esrasystems.com
                            </Typography>
                            <br/>
                                <Typography style={{fontSize:"2vw"}}>
                                All Rights Reserved © Esra Systems LLC 2020
                                </Typography>
                            </Typography>
                         </div>
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
                    <div style={{position:"relative", textAlign:"left"}}>
                        <img src={home1wtext} display="flex" alt="Background1" style={{maxWidth:"100%"}}></img>
                        {/* <div style={{position:"absolute", bottom:"14%", left:"7%", maxWidth:"45vw"}}>
                            <h1 style={{fontFamily:"helvetica", fontSize:"32pt", fontWeight:"", color:"#fff"}}>We are a software development firm based in Atlanta</h1>
                            <h3 style={{color:"#fff", maxWidth:"30vw"}}>We specialize in developing software technology for your corporate needs. Ready to deploy anytime, anywhere.</h3>    
                        </div> */}
                    </div>
                    <div>
                        <img src={home2wtext} display="flex" alt="Background1" style={{maxWidth:"100%"}}></img>
                    </div>
                    <div style={{position:"relative", textAlign:"left"}}>
                        <img src={home3wtext} display="flex" alt="Background1" style={{maxWidth:"100%"}}></img>
                        <Link to="/products" style={{ color: 'inherit', textDecoration: 'none' }}>
                            <div style={{position:"absolute", bottom:"24%", left:"7.7%"}}>
                                <Typography style={{fontFamily:"Arial", fontSize:"2vw", fontWeight:"bold", color:"#333333"}}>Go to products page <ArrowForwardIcon 
                                style={{fontSize:"2vw", position:"absolute", bottom:".2vw"}}/></Typography>
                            </div>
                        </Link>
                    </div >
                    <div style={{position:"relative", textAlign:"left"}}>
                        <img src={home4wtext} display="flex" alt="Background1" style={{maxWidth:"100%"}}></img>
                        <Link to="/contact" style={{ color: 'inherit', textDecoration: 'none' }}>
                            <div style={{position:"absolute", bottom:"30%", left:"7.7%"}}>
                                <Typography style={{fontFamily:"Arial", fontSize:"2vw", fontWeight:"bold", color:"#333333"}}>Contact Us
                                </Typography>
                            </div>
                        </Link>
                    </div>
                    <div style={{position:"relative", textAlign:"right"}}>
                        <img src={home5wtext} display="flex" alt="Background1" style={{maxWidth:"100%"}}></img>
                        <div style={{position:"absolute", bottom:"30%", right:"7.7%"}}>
                            <Typography style={{fontFamily:"Arial", fontSize:"1.4vw", fontWeight:"bold", color:"#fff"}}> Business Inquiries: info@esrasystems.com
                            </Typography>
                            <Typography style={{fontFamily:"Arial", fontSize:"1.4vw", fontWeight:"bold", color:"#fff"}}> Career Inquiries: jobs@esrasystems.com
                            </Typography>
                         </div>
                    </div>
                </Box>
            </Fragment>
        )
    }

    render() {
        if (this.state.isLoading) return (<Loader />)
        return (
            <div>
                {this.state.drawerActivate ? this.smallScreen() : this.largeScreen()}
            </div>
        )
    }
};