import React, {Component, Fragment, Row} from 'react';
import Box from '@material-ui/core/Box';
import {Button, Typography, createMuiTheme, responsiveFontSizes, MuiThemeProvider} from '@material-ui/core';
import Navbar from './components/navbar'
import contactwtxt1 from '../images/4/desktop/contactwtxt1.jpg'
import contactwtxt3 from '../images/4/desktop/contactwtxt3.jpg'
import home5wtext from '../images/1/desktop/homewtxt5.jpg'
import contactmobile1 from '../images/4/mobile/contactmobile1.jpg'
import contactmobile3 from '../images/4/mobile/contactmobile2.jpg'
import footer from '../images/1/mobile/Footerdiff.jpg'

export default class contact extends Component {
    constructor(props) {
        super(props)
        this.state = { isLoading: true, drawerActivate:false, drawer:false }
        this.smallScreen = this.smallScreen.bind(this);
        this.largeScreen = this.largeScreen.bind(this);
    }
    componentWillMount() {
        if(window.innerWidth <= 900){
            console.log('heyyyy')
            this.setState({drawerActivate:true});
        }
    
        window.addEventListener('resize',()=>{
            if(window.innerWidth <= 900){
                console.log('heyyyy')
                this.setState({drawerActivate:true});
            }
            else{
                this.setState({drawerActivate:false})
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
                <Box display="flex" flexDirection="column" m={0} p={0} style={{fontSize: 0}}>
                        <div style={{position:"relative", textAlign:"left"}}>
                            <img src={contactmobile1} display="flex" alt="Background1" style={{maxWidth:"100vw"}}></img>
                            <Typography style={{fontFamily:"Arial", 
                             color:"white",
                            lineHeight:"9vw",
                            position:"absolute",
                            bottom:"0%", 
                            left:"7.7%",
                           fontSize:"9vw",
                            marginRight:"10vw"}}>
                        <b>Let's do great things together</b>
                        <br/>
                            Contact Us
                            <Typography style={{fontSize:"5vw", marginRight:"4vw", marginTop:"3vw", lineHeight:"6vw", marginBottom: "5vw"}}>
                                We look forward to hearing about how
                                Esra can help your HR team with our
                                personalized solutions. Reach out to us
                                with any further inquiries (reference
                                contact info below).</Typography>
                        </Typography>
                        </div>
                        <div style={{position:"relative", textAlign:"left"}}>
                            <img src={contactmobile3} display="flex" alt="Background1" style={{maxWidth:"100vw"}}></img>
                            <div style={{position:"absolute", bottom:"8vw", left: "25%", maxWidth:"100vw"}}>
                                <Box display="flex" flexDirection="column" m={0} p={0}>
                                    <Typography style={{fontFamily:"Arial", fontSize:"6vw", fontWeight:"bold", color:"#333333", marginTop:"10vw", marginBottom:"5vw"}}>Address: 
                                    <br/><Typography style={{fontSize:"5vw", fontWeight:"light"}}>4000.5 Commodore Drive, <br/>Atlanta, GA</Typography></Typography>
                                    <Typography style={{fontFamily:"Arial", fontSize:"6vw", fontWeight:"bold", color:"#333333", marginBottom:"5vw"}}>Business Inquiries:
                                    <br/><Typography style={{fontSize:"5vw", fontWeight:"light"}}>info@esrasystems.com</Typography></Typography>
                                    <Typography style={{fontFamily:"Arial", fontSize:"6vw", fontWeight:"bold", color:"#333333", marginBottom:"5vw"}}>Apply:
                                    <br/><Typography style={{fontSize:"5vw", fontWeight:"light"}}>info@esrasystems.com</Typography></Typography>
                                    <Typography style={{fontFamily:"Arial", fontSize:"6vw", fontWeight:"bold", color:"#333333", marginBottom:"5vw"}}>Phone:
                                    <br/><Typography style={{fontSize:"5vw", fontWeight:"light"}}>+1 (919) 475-7292</Typography></Typography>
                                </Box>
                            </div>
                        </div>
                        <div style={{position:"relative", textAlign:"right"}}>
                        <img src={footer} display="flex" alt="Background1" style={{maxWidth:"100vw"}}></img>
                        <div style={{position:"absolute", bottom:"30%", right:"7.7%"}}>
                            <Typography style={{fontFamily:"Arial", fontSize:"2.8vw", color:"#fff", marginBottom:"2vw"}}> Business Inquiries: info@esrasystems.com
                            </Typography>
                            <Typography style={{fontFamily:"Arial", fontSize:"2.8vw", color:"#fff"}}> Career Inquiries: jobs@esrasystems.com
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
                        <div>
                            <img src={contactwtxt1} display="flex" alt="Background1" style={{maxWidth:"100vw"}}></img>
                        </div>
                        <div style={{position:"relative", textAlign:"left"}}>
                            <img src={contactwtxt3} display="flex" alt="Background1" style={{maxWidth:"100vw"}}></img>
                            <div style={{position:"absolute", bottom:"27%", left: "56.5%", maxWidth:"40vw"}}>
                                <Box display="flex" flexDirection="column" m={0} p={0}>
                                    <Typography style={{fontFamily:"Arial", fontSize:"1.5vw", fontWeight:"bold", color:"#333333", marginTop:5, marginBottom:5}}>Address: 4002 Commodore Drive, Atlanta, GA</Typography>
                                    <Typography style={{fontFamily:"Arial", fontSize:"1.5vw", fontWeight:"bold", color:"#333333", marginTop:5, marginBottom:5}}>Business Inquiries: info@esrasystems.com</Typography>
                                    <Typography style={{fontFamily:"Arial", fontSize:"1.5vw", fontWeight:"bold", color:"#333333", marginTop:5, marginBottom:5}}>Apply: jobs@esrasystems.com</Typography>
                                    <Typography style={{fontFamily:"Arial", fontSize:"1.5vw", fontWeight:"bold", color:"#333333", marginTop:5, marginBottom:5}}>Phone: +1 (919) 475-7292</Typography>
                                </Box>
                            </div>
                        </div>
                        <div style={{position:"relative", textAlign:"right"}}>
                        <img src={home5wtext} display="flex" alt="Background1" style={{maxWidth:"100vw"}}></img>
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
        return (
            <div>
                {this.state.drawerActivate ? this.smallScreen() : this.largeScreen()}
            </div>
        )
    }
};