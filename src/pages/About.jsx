import React, {Component, Fragment, Row} from 'react';
import Box from '@material-ui/core/Box';
import {Button, Typography, createMuiTheme, responsiveFontSizes, MuiThemeProvider} from '@material-ui/core';
import Navbar from './components/navbar'
import aboutwtxt1 from '../images/2/desktop/aboutwtxt1.jpg'
import aboutwtxt2 from '../images/2/desktop/aboutwtxt2.jpg'
import aboutwtxt3 from '../images/2/desktop/aboutwtxt3.jpg'
import aboutwtxt4 from '../images/2/desktop/aboutwtxt4.jpg'
import home5wtext from '../images/1/desktop/homewtxt5.jpg'
import aboutmobile1 from '../images/2/mobile/aboutmobile1.jpg'
import aboutmobile2 from '../images/2/mobile/aboutmobile2.jpg'
import aboutmobile3 from '../images/2/mobile/aboutmobile3.jpg'
import aboutmobile4 from '../images/2/mobile/aboutmobile5.jpg'
import aboutmobile5 from '../images/2/mobile/aboutmobile6.jpg'
import footer from '../images/1/mobile/Footerdiff.jpg'

export default class About extends Component {
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
        this.setState({ isLoading: false })
    }
    componentDidMount(){
        document.body.style.background = "#F5F5F5";
    }

    //small screens
    smallScreen() {
        return(
            <Fragment>
                <Navbar/>
                <Box display="flex" flexDirection="column" m={0} p={0} style={{fontSize:0}}>
                    <div style={{position:"relative", textAlign:"left"}}>
                        <img src={aboutmobile1} display="flex" alt="Background1" style={{maxWidth:"100%"}}></img>
                        <Typography  style={{fontFamily:"Arial", 
                             color:"white",
                            lineHeight:"7vw",
                            position:"absolute",
                            bottom:"3%", 
                            left:"7.7%",
                           fontSize:"7vw"}}>
                        <b>Short Deliveries</b>
                        <br/>
                            Long Hours
                            <Typography fontWeight="fontWeightLight" style={{fontSize:"5vw", marginRight:"4vw",marginTop:"3vw", lineHeight:"6vw", marginBottom: "3vw"}}>
                                At Esra Systems, we offer industry
                                leading delivery time, in addition to
                                hubs in the US and India promising 24
                                hour service and an international
                                business approach.</Typography>
                        </Typography>
                        </div>
                        <div style={{position:"relative", textAlign:"left"}}>
                        <img src={aboutmobile2} display="flex" alt="Background1" style={{maxWidth:"100%"}}></img>
                        
                        <svg height="152vw" style={{position:"absolute", top:"28%", left:"5%"}}>
                            {/* current issue with svg is not resposive for if text changes paragraph size
                            "The Problem" changes from 8 lines to 9 lines if the screen becomes smaller */}
                            <rect x="0" y="1vw" height="150vw" width=".3vw" style={{position:"absolute" ,color:"#707070"}}> </rect>
                            <rect x="0" y="1vw" height=".3vw" width="5.5vw" style={{position:"absolute" ,color:"#707070"}}> </rect>
                            <rect x="0" y="70vw" height=".3vw" width="5.5vw" style={{position:"absolute" ,color:"#707070"}}> </rect>
                            <rect x="0" y="151vw" height=".3vw" width="5.5vw" style={{position:"absolute" ,color:"#707070"}}> </rect>
                        </svg>
                        <Typography  style={{fontFamily:"Arial", 
                             color:"black",
                            lineHeight:"7vw",
                            position:"absolute",
                            top:"3%", 
                            left:"14%",
                           fontSize:"7vw"}}>
                        <b>Our Story</b>
                        <br/>

                            <Typography fontWeight="fontWeightLight" style={{fontSize:"5vw", 
                            marginRight:"11vw",marginTop:"5vw", lineHeight:"6vw", marginBottom: "11vw"}}>
                                Our company came to life in
                                the wake of the coronavirus
                                pandemic, when business
                                administrators and their HR
                                teams were faced with a
                                unique challenge, one they
                                didn’t necessarily have the
                                tools to manage.</Typography>
                        </Typography>
                        <div  height="151vw" style={{position:"absolute", top:"28%", left:"5%", right:"0%"}}>
                        <Typography  style={{fontFamily:"Arial", 
                             color:"black",
                            lineHeight:"5vw",
                            position:"absolute",
                            top:"27.3%", 
                            left:"14%",
                           fontSize:"6vw"}}>
                        <b>The Problem</b>
                        <br/>
                            <Typography fontWeight="fontWeightLight" style={{fontSize:"4vw", 
                            marginRight:"0vw",marginTop:"5vw", lineHeight:"6vw", marginBottom: "11vw"}}>
                                Overburdened by hundreds of
                                distressed employee phone calls
                                and emails during the pandemic, HR
                                teams sought help, looking for a
                                comprehensive system that helped
                                them record and manage leaves and
                                leave requests. FMLA requirements
                                didn’t make this easier, especially for
                                large corporations spread over
                                different states</Typography>
                        <b>Our Process</b>
                        <br/>
                            <Typography fontWeight="fontWeightLight" style={{fontSize:"4vw", 
                            marginRight:"7vw",marginTop:"3vw", lineHeight:"6vw", marginBottom: "8vw"}}>
                                Once we identified the problem, we
                                mobilized rapidly, designing and
                                building a web application that was
                                deployed in 2 weeks. It was made
                                streamlined, to ensure that the end
                                users could adapt to this software as
                                quickly as possible without having to
                                undergo any training. Our first client
                                then tested the product, and we
                                worked with them to personalize the
                                feature to their company’s needs.</Typography>
                         <b>The Solution</b>
                        <br/>
                            <Typography fontWeight="fontWeightLight" style={{fontSize:"4vw", 
                            marginRight:"7vw",marginTop:"5vw", lineHeight:"6vw"}}>
                                    The solution was the Esra Leave
                                    Manager - a streamlined tool that
                                    aided HR teams to track employees
                                    on leave, or those in need of
                                    accommodations. It was developed
                                    into a tool that helped businesses
                                    adhere to FMLA requirements
                                    through the use of a filter mechanism.</Typography>
                                </Typography>
                                </div>
                            </div>
                        <div style={{position:"relative", textAlign:"left"}}>
                        <img src={aboutmobile3} display="flex" alt="Background1" style={{maxWidth:"100%"}}></img>
                            <Typography  style={{fontFamily:"Arial", 
                             color:"black",
                            lineHeight:"7vw",
                            position:"absolute",
                            top:"13%", 
                            left:"14%",
                           fontSize:"6vw"}}>
                        <b>Our Vision</b>
                        <br/>
                            <Typography fontWeight="fontWeightLight" style={{fontSize:"4vw", 
                            marginRight:"8vw",marginTop:"5vw", lineHeight:"5.5vw",}}>
                            In a world of changing pressures, problems and
                            priorities, Esra Systems seeks to challenge
                            barriers that hinder the growth of our world
                            community through the means of 100%
                            personalized technology. We strive towards
                            creating a technology-driven world where
                            hurdles are meant to be overcome and not be
                            succumbed to.
                            <br/>
                            <br/>
                            Our name “Esra” is derived from the Hebrew
                            word ‘Ezra’ which means help, an idea we hope
                            to carry on for years to come.</Typography>
                        </Typography>
                        </div>
                        <div style={{position:"relative", textAlign:"left"}}>
                        <img src={aboutmobile5} display="flex" alt="Background1" style={{maxWidth:"100%"}}></img>
                        </div>
                        <div style={{position:"relative", textAlign:"left"}}>
                        <img src={aboutmobile4} display="flex" alt="Background1" style={{maxWidth:"100%"}}></img>
                        <Typography style={{fontFamily:"Arial", 
                             color:"black",
                            lineHeight:"8vw",
                            position:"absolute",
                            top:"5%", 
                            left:"14%",
                            right:"11%",
                           fontSize:"7vw"}}>
                            <b>Our Team</b>
                            <br/>
                            <br/>
                            <div  height="70vw" style={{position:"relative", top:"28%"}}>
                            <Typography style={{fontSize:"5vw", lineHeight:"4vw"}}>
                                <b>Advaith Sekharan</b>
                            <br/>
                                <Typography style={{fontSize:"4vw",}}>Software</Typography>
                                <Typography style={{fontSize:"4vw" ,marginTop:"2vw"}}>Advaith is our all-round technology
                                expert. Being a full-stacked
                                programmer, he is our code architect,
                                bringing our technology solutions to life</Typography>
                            <br/>
                            <br/>
                                <b>Josh Rafaeli</b>
                            <br/>
                            <Typography style={{fontSize:"4vw",}}>Operations</Typography>
                                <Typography style={{fontSize:"4vw",marginTop:"2vw"}}>Josh Rafaeli leads our business
                                    operations. Handling Marketing, Legal,
                                    and Client outreach, in addition to our
                                    company’s finances.</Typography>
                            <br/>
                            <br/>
                                <b>Swaraj Agarwal</b>
                            <br/>
                            <Typography style={{fontSize:"4vw",}}>Design</Typography>
                                <Typography style={{fontSize:"4vw",marginTop:"2vw"}}>Looking after all things design, Swaraj
                                works on User Interfaces and Experiences
                                ensuring that your transition to our
                                software is seamless</Typography>
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
        return (
            <Fragment>
                <Navbar/>
                <Box display="flex" flexDirection="column" m={0} p={0}>
                        <div>
                            <img src={aboutwtxt1} display="flex" alt="Background1" style={{maxWidth:"100%"}}></img>
                        </div>
                        <div>
                            <img src={aboutwtxt2} display="flex" alt="Background1" style={{maxWidth:"100%"}}></img>
                        </div>
                        <div>
                            <img src={aboutwtxt3} display="flex" alt="Background1" style={{maxWidth:"100%"}}></img>
                        </div>
                        <div>
                            <img src={aboutwtxt4} display="flex" alt="Background1" style={{maxWidth:"100%"}}></img>
                        </div>
                        <div style={{position:"relative", textAlign:"right"}}>
                        <img src={home5wtext} display="flex" alt="Background1" style={{maxWidth:"100%"}}></img>
                        <div style={{position:"absolute", bottom:"30%", right:"7.7%"}}>
                            <Typography style={{fontFamily:"Arial", fontSize:"1.4vw", color:"#fff"}}> Business Inquiries: info@esrasystems.com
                            </Typography>
                            <Typography style={{fontFamily:"Arial", fontSize:"1.4vw", color:"#fff"}}> Career Inquiries: jobs@esrasystems.com
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