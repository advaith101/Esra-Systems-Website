import React, {Component, Fragment, Row} from 'react';
import { Redirect, Link, useHistory } from 'react-router-dom';
import Box from '@material-ui/core/Box';
import {Button, Typography} from '@material-ui/core';
import Navbar from './components/navbar'
import productswtxt1 from '../images/3/desktop/productswtxt1.jpg'
import productswtxt2 from '../images/3/desktop/productswtxt2.jpg'
import productswtxt3 from '../images/3/desktop/productswtxt3.jpg'
import productsmobile1 from '../images/3/mobile/productmobile1.jpg'
import productsmobile2 from '../images/3/mobile/productmobile2.jpg'
import productsmobile3 from '../images/3/mobile/productmobile3.jpg'
import productsmobile4 from '../images/3/mobile/productmobile4.jpg'
import home5wtext from '../images/1/desktop/homewtxt5.jpg'
import footer from '../images/1/mobile/Footerdiff.jpg'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

export default class Products extends Component {
    constructor(props) {
        super(props)
        this.state = { isLoading: true, drawerActivate:false, drawer:false }
        this.smallScreen = this.smallScreen.bind(this);
        this.largeScreen = this.largeScreen.bind(this);
    }
    componentWillMount() {
        if(window.outerWidth <= 900){
          this.setState({drawerActivate:true});
        }
    
        window.addEventListener('resize',()=>{
          if(window.outerWidth <= 900){
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
                <Box display="flex" flexDirection="column" m={0} p={0} style={{fontSize: 0}}>
                    <div style={{position:"relative", textAlign:"left"}}>
                        <img src={productsmobile1} display="flex" alt="Background1" style={{maxWidth:"100%"}}></img>
                        <Typography  style={{fontFamily:"Arial", 
                             color:"white",
                            lineHeight:"7vw",
                            position:"absolute",
                            bottom:"3%", 
                            left:"7.7%",
                            marginRight :"10%",
                           fontSize:"7vw"}}>
                        <b>The Esra
                            <br/>Leave Manager</b>
                        <br/>
                            Helping you help
                        <br/>your employees
                            <Typography fontWeight="fontWeightLight" style={{fontSize:"4.5vw", right:"0vw",marginTop:"3vw", lineHeight:"6vw", marginBottom: "3vw"}}>
                                The Esra Leave Manager helps your
                                HR team request, filter, and export
                                necessary leave information.</Typography>
                        </Typography>
                    </div>
                    <div style={{position:"relative", textAlign:"left"}}>
                        <img src={productsmobile2} display="flex" alt="Background1" style={{maxWidth:"100%"}}></img>
                        <Typography style={{fontFamily:"Arial", 
                             color:"black",
                            lineHeight:"8vw",
                            position:"absolute",
                            top:"8%", 
                            left:"20%",
                            right:"15%",
                           fontSize:"7vw"}}>
                            <b>Basic Features</b>
                            <br/>
                            <br/>
                            <div  height="70vw" style={{position:"relative", top:"28%", left:"0",   }}>
                            <Typography style={{fontSize:"5.5vw"}}>
                                Customize
                            <br/>
                                <Typography style={{fontSize:"3.5vw" ,marginTop:"1vw"}}>Decide the questions, text, and
                                even functions on your custom-made platform.</Typography>
                            <br/>
                                Refine
                            <br/>
                                <Typography style={{fontSize:"3.5vw",marginTop:"2vw"}}>We offer a fully customizable
                                    platform as per your company’s
                                    unique needs - additional
                                    alterations available after.</Typography>
                            <br/>
                                Export
                            <br/>
                                <Typography style={{fontSize:"3.5vw",marginTop:"2vw"}}>Export the filtered employee
                                    information (as an excel file) and
                                    send it to the appropriate third party.</Typography>
                        </Typography>
                        </div>
                        </Typography>
                    </div>
                    <div height="50vw" style={{position:"relative", textAlign:"left"}}>
                        <img src={productsmobile3} display="flex" alt="Background1" style={{maxWidth:"100%"}}></img>
                        
                        <Typography style={{fontFamily:"Arial", 
                             color:"black",
                            lineHeight:"7vw",
                            position:"absolute",
                            top:"19%", 
                            left:"10.7%",
                           fontSize:"4vw"}}>
                            <div  height="60vw" style={{position:"relative", top:"10%", left:"0", right:"10%"}}>
                            <Typography style={{fontSize:"6vw"}}><b>Overview</b></Typography>
                            <Typography style={{fontSize:"4vw", marginRight:"6vw", marginTop:"3vw", lineHeight:"6vw", marginBottom: "3vw"}}>
                                The Esra Employee Tracker app was built as a
                                tool to aid businesses in dealing with the
                                operational challenges posed by the
                                coronavirus pandemic. Giving employers the
                                ability to track employees on leave, the app
                                also comes with a comprehensive filter system
                                that allows HR teams identify pools of
                                employees who might be affected by FMLA
                                laws. Additionally, this may be used to manage
                                and monitor employees that are in need of
                                accommodations.
                        </Typography>
                    </div>
                    </Typography>
                    </div>
                        <div style={{position:"relative", textAlign:"left"}}>
                        <img src={productsmobile4} display="flex" alt="Background1" style={{maxWidth:"100%"}}></img>
                        </div>
                        <div style={{position:"relative", textAlign:"left"}}>
                        <img src={footer} display="flex" alt="Background1" style={{maxWidth:"100%"}}></img>
                        <div style={{position:"absolute", bottom:"20%", left:"7.7%"}}>
                            <Typography style={{fontFamily:"Arial", fontSize:"5vw", color:"#fff", lineHeight:"2vw"}}> 
                            <b>Esra Systems</b>
                            <br/>
                            <br/>
                            <Typography style={{fontSize:"3vw"}}>
                                Business Inquiries: info@esrasystems.com
                             <br/>Career Inquiries: jobs@esrasystems.com
                            </Typography>
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
        return(
            <Fragment>
                <Navbar/>
                <Box display="flex" flexDirection="column" m={0} p={0}>
                        <div>
                            <img src={productswtxt1} display="flex" alt="Background1" style={{maxWidth:"100%"}}></img>
                        </div>
                        <div>
                            <img src={productswtxt2} display="flex" alt="Background1" style={{maxWidth:"100%"}}></img>
                        </div>
                        <div style={{position:"relative", textAlign:"left"}}>
                            <img src={productswtxt3} display="flex" alt="Background1" style={{maxWidth:"100%"}}></img>
                            <Link to="/contact" style={{ color: 'inherit', textDecoration: 'none' }}>
                                <div style={{position:"absolute", bottom:"26%", left:"7.7%"}}>
                                    <Typography style={{fontFamily:"Arial", fontSize:"1.7vw", fontWeight:"bold", color:"#333333"}}>Schedule a free trial
                                    <ArrowForwardIcon style={{fontSize:"2.1vw", position:"absolute", bottom:".2vw"}}/></Typography>
                                </div>
                            </Link>
                        </div>
                        <div style={{position:"relative", textAlign:"left"}}>
                        <svg width="17vw" height="17vw">
                            <rect width="100%" height="100%" style={{fill:"#f5f5f5"}}/>
                        </svg>
                            <div style={{position:"absolute", bottom:"26%", left:"7.7%"}}>
                                <Typography style={{fontFamily:"Arial", fontSize:"2vw", fontWeight:"bold", color:"#333333"}}>For more information and a free trial,
                                <br/> contact info@esrasystems.com or call +1 (919) 475-7292</Typography>
                                <Link to="/contact" style={{ color: 'inherit', textDecoration:'none'}}>
                                        {/* <Button variant="outlined">
                                            <Typography style={{fontFamily:"Arial", fontSize:"16pt", fontWeight:"bold", color:"#333333"}}>Contact Us</Typography>
                                        </Button> */}
                                        <Typography style={{fontFamily:"Arial", fontSize:"2vw", fontWeight:"bold", color:"#333333", marginTop:30}}>Contact Us</Typography>
                                </Link>
                            </div>
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
        return (
            <div>
                {this.state.drawerActivate ? this.smallScreen() : this.largeScreen()}
            </div>
        )
    }
};