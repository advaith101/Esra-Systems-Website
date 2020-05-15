import React, {Component, Fragment, Row} from 'react';
import { Redirect, Link, useHistory } from 'react-router-dom';
import Box from '@material-ui/core/Box';
import {Button, Typography, createMuiTheme, responsiveFontSizes, MuiThemeProvider} from '@material-ui/core';
import Navbar from './components/navbar';
import Loader from 'react-loader-spinner';
import home1 from '../images/home1.jpg'
import home1flipped from '../images/home1flipped.jpg'
import home2 from '../images/home2.jpg'
import home3 from '../images/home3.jpg'
import home4 from '../images/home4.jpg'
import home5 from '../images/home5.jpg'
import home1wtext from '../images/1/homewtxt1.jpg'
import home2wtext from '../images/1/homewtxt2.jpg'
import home3wtext from '../images/1/homewtxt3.jpg'
import home4wtext from '../images/1/homewtxt4.jpg'
import home5wtext from '../images/1/homewtxt5.jpg'



export default class Home extends Component {
    constructor(props) {
        super(props)
        this.state = { isLoading: true, drawerActivate:false, drawer:false }
        this.smallScreen = this.smallScreen.bind(this);
        this.largeScreen = this.largeScreen.bind(this);
    }
    componentWillMount() {
        if(window.innerWidth <= 900){
          this.setState({drawerActivate:true});
        }
    
        window.addEventListener('resize',()=>{
          if(window.innerWidth <= 900){
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
                <Box display="flex" flexDirection="column" m={0} p={0}>
                    <div style={{position:"relative", textAlign:"left"}}>
                        <img src={home1wtext} display="flex" alt="Background1" style={{maxWidth:"100vw"}}></img>
                        {/* <div style={{position:"absolute", bottom:"14%", left:"7%", maxWidth:"45vw"}}>
                            <h1 style={{fontFamily:"helvetica", fontSize:"32pt", fontWeight:"", color:"#fff"}}>We are a software development firm based in Atlanta</h1>
                            <h3 style={{color:"#fff", maxWidth:"30vw"}}>We specialize in developing software technology for your corporate needs. Ready to deploy anytime, anywhere.</h3>    
                        </div> */}
                    </div>
                    <div>
                        <img src={home2wtext} display="flex" alt="Background1" style={{maxWidth:"100vw"}}></img>
                    </div>
                    <div style={{position:"relative", textAlign:"left"}}>
                        <img src={home3wtext} display="flex" alt="Background1" style={{maxWidth:"100vw"}}></img>
                        <Link to="/products" style={{ color: 'inherit', textDecoration: 'none' }}>
                            <div style={{position:"absolute", bottom:"26%", left:"7.7%"}}>
                                <Typography style={{fontFamily:"Helvetica Neue", fontSize:"5pt", fontWeight:"bold", color:"#333333"}}>Go to products page -></Typography>
                            </div>
                        </Link>
                    </div >
                    <div style={{position:"relative", textAlign:"left"}}>
                        <img src={home4wtext} display="flex" alt="Background1" style={{maxWidth:"100vw"}}></img>
                        <Link to="/contact" style={{ color: 'inherit', textDecoration: 'none' }}>
                            <div style={{position:"absolute", bottom:"30%", left:"7.7%"}}>
                                <Typography style={{fontFamily:"Helvetica Neue", fontSize:"5pt", fontWeight:"bold", color:"#333333"}}>Contact Us
                                </Typography>
                            </div>
                        </Link>
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

    //large screens
    largeScreen() {
        return (
            <Fragment>
                <Navbar/>
                <Box display="flex" flexDirection="column" m={0} p={0}>
                    <div style={{position:"relative", textAlign:"left"}}>
                        <img src={home1wtext} display="flex" alt="Background1" style={{maxWidth:"100vw"}}></img>
                        {/* <div style={{position:"absolute", bottom:"14%", left:"7%", maxWidth:"45vw"}}>
                            <h1 style={{fontFamily:"helvetica", fontSize:"32pt", fontWeight:"", color:"#fff"}}>We are a software development firm based in Atlanta</h1>
                            <h3 style={{color:"#fff", maxWidth:"30vw"}}>We specialize in developing software technology for your corporate needs. Ready to deploy anytime, anywhere.</h3>    
                        </div> */}
                    </div>
                    <div>
                        <img src={home2wtext} display="flex" alt="Background1" style={{maxWidth:"100vw"}}></img>
                    </div>
                    <div style={{position:"relative", textAlign:"left"}}>
                        <img src={home3wtext} display="flex" alt="Background1" style={{maxWidth:"100vw"}}></img>
                        <Link to="/products" style={{ color: 'inherit', textDecoration: 'none' }}>
                            <div style={{position:"absolute", bottom:"26%", left:"7.7%"}}>
                                <Typography style={{fontFamily:"Helvetica Neue", fontSize:"16pt", fontWeight:"bold", color:"#333333"}}>Go to products page -></Typography>
                            </div>
                        </Link>
                    </div >
                    <div style={{position:"relative", textAlign:"left"}}>
                        <img src={home4wtext} display="flex" alt="Background1" style={{maxWidth:"100vw"}}></img>
                        <Link to="/contact" style={{ color: 'inherit', textDecoration: 'none' }}>
                            <div style={{position:"absolute", bottom:"30%", left:"7.7%"}}>
                                <Typography style={{fontFamily:"Helvetica Neue", fontSize:"16pt", fontWeight:"bold", color:"#333333"}}>Contact Us
                                </Typography>
                            </div>
                        </Link>
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
        if (this.state.isLoading) return (<Loader />)
        return (
            <div>
                {this.state.drawerActivate ? this.smallScreen() : this.largeScreen()}
            </div>
        )
    }
};