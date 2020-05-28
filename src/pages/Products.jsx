import React, {Component, Fragment, Row} from 'react';
import { Redirect, Link, useHistory } from 'react-router-dom';
import Box from '@material-ui/core/Box';
import {Button, Typography} from '@material-ui/core';
import Navbar from './components/navbar'
import productswtxt1 from '../images/3/productswtxt1.jpg'
import productswtxt2 from '../images/3/productswtxt2.jpg'
import productswtxt3 from '../images/3/productswtxt3.jpg'
import home5wtext from '../images/1/homewtxt5.jpg'

export default class Products extends Component {
    constructor(props) {
        super(props)
        this.state = { isLoading: true, drawerActivate:false, drawer:false }
        this.smallScreen = this.smallScreen.bind(this);
        this.largeScreen = this.largeScreen.bind(this);
    }
    componentWillMount() {
        if(window.innerWidth <= 1000){
          this.setState({drawerActivate:true});
        }
    
        window.addEventListener('resize',()=>{
          if(window.innerWidth <= 1000){
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
        return(
            <Fragment>
                <Navbar/>
                <Box display="flex" flexDirection="column" m={0} p={0}>
                        <div>
                            <img src={productswtxt1} display="flex" alt="Background1" style={{maxWidth:"100vw"}}></img>
                        </div>
                        <div>
                            <img src={productswtxt2} display="flex" alt="Background1" style={{maxWidth:"100vw"}}></img>
                        </div>
                        <div style={{position:"relative", textAlign:"left"}}>
                            <img src={productswtxt3} display="flex" alt="Background1" style={{maxWidth:"100vw"}}></img>
                            <Link to="/contact" style={{ color: 'inherit', textDecoration: 'none' }}>
                                <div style={{position:"absolute", bottom:"26%", left:"7.7%"}}>
                                    <Typography style={{fontFamily:"Arial", fontSize:"5pt", fontWeight:"bold", color:"#333333"}}>Schedule a free trial</Typography>
                                </div>
                            </Link>
                        </div>
                        <div style={{position:"relative", textAlign:"left"}}>
                            <svg width="12vw" height="12vw">
                            <rect width="70vw" height="70vw" style={{fill:"#f5f5f5"}}/>
                        </svg>
                            <div style={{position:"absolute", bottom:"26%", left:"7.7%",}}>
                                <Typography style={{fontFamily:"Arial", fontSize:"4.5pt", fontWeight:"bold", color:"#333333"}}>For more information and a free trial, contact info@esrasystems.com or call +1 (919) 475-7292</Typography>
                                <Link to="/contact" style={{ color: 'inherit', textDecoration: 'none' }}>
                                    <Typography style={{fontFamily:"Arial", fontSize:"5pt", fontWeight:"bold", color:"#333333", marginTop:3}}>Contact Us</Typography>
                                </Link>
                            </div>
                        </div>
                        <div style={{position:"relative", textAlign:"right"}}>
                        <img src={home5wtext} display="flex" alt="Background1" style={{maxWidth:"100vw"}}></img>
                        <div style={{position:"absolute", bottom:"30%", right:"7.7%"}}>

                            <Typography style={{fontFamily:"Arial", fontSize:"4pt", fontWeight:"bold", color:"#fff"}}> Business Inquiries: info@esrasystems.com
                            </Typography>
                            <Typography style={{fontFamily:"Arial", fontSize:"4pt", fontWeight:"bold", color:"#fff"}}> Career Inquiries: jobs@esrasystems.com
                            </Typography>
                         </div>
                    </div>
                </Box>
            </Fragment>
        )
    }

    //large screens
    largeScreen() {
        return(
            <Fragment>
                <Navbar/>
                <Box display="flex" flexDirection="column" m={0} p={0}>
                        <div>
                            <img src={productswtxt1} display="flex" alt="Background1" style={{maxWidth:"100vw"}}></img>
                        </div>
                        <div>
                            <img src={productswtxt2} display="flex" alt="Background1" style={{maxWidth:"100vw"}}></img>
                        </div>
                        <div style={{position:"relative", textAlign:"left"}}>
                            <img src={productswtxt3} display="flex" alt="Background1" style={{maxWidth:"100vw"}}></img>
                            <Link to="/contact" style={{ color: 'inherit', textDecoration: 'none' }}>
                                <div style={{position:"absolute", bottom:"26%", left:"7.7%"}}>
                                    <Typography style={{fontFamily:"Arial", fontSize:"16pt", fontWeight:"bold", color:"#333333"}}>Schedule a free trial -></Typography>
                                </div>
                            </Link>
                        </div>
                        <div style={{position:"relative", textAlign:"left"}}>
                        <svg width="17vw" height="17vw">
                            <rect width="100vw" height="100vw" style={{fill:"#f5f5f5"}}/>
                        </svg>
                            <div style={{position:"absolute", bottom:"26%", left:"7.7%"}}>
                                <Typography style={{fontFamily:"Arial", fontSize:"20pt", fontWeight:"bold", color:"#333333"}}>For more information and a free trial, contact info@esrasystems.com or call +1 (919) 475-7292</Typography>
                                <Link to="/contact" style={{ color: 'inherit', textDecoration:'none'}}>
                                        {/* <Button variant="outlined">
                                            <Typography style={{fontFamily:"Arial", fontSize:"16pt", fontWeight:"bold", color:"#333333"}}>Contact Us</Typography>
                                        </Button> */}
                                        <Typography style={{fontFamily:"Arial", fontSize:"16pt", fontWeight:"bold", color:"#333333", marginTop:30}}>Contact Us</Typography>
                                </Link>
                            </div>
                        </div>
                        <div style={{position:"relative", textAlign:"right"}}>
                        <img src={home5wtext} display="flex" alt="Background1" style={{maxWidth:"100vw"}}></img>
                        <div style={{position:"absolute", bottom:"30%", right:"7.7%"}}>
                            <Typography style={{fontFamily:"Arial", fontSize:"14pt", fontWeight:"light", color:"#fff"}}> Business Inquiries: info@esrasystems.com
                            </Typography>
                            <Typography style={{fontFamily:"Arial", fontSize:"14pt", fontWeight:"light", color:"#fff"}}> Career Inquiries: jobs@esrasystems.com
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