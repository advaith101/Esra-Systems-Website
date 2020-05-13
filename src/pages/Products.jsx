import React, {Component, Fragment, Row} from 'react';
import { Redirect, Link, useHistory } from 'react-router-dom';
import Box from '@material-ui/core/Box';
import {Button, Typography} from '@material-ui/core';
import Navbar from './components/navbar'
import products1 from '../images/product1.jpg'
import products2 from '../images/product2.jpg'
import products3 from '../images/product3.jpg'
import products4 from '../images/product4.jpg'
import products5 from '../images/product5.jpg'
import productswtxt1 from '../images/3/productswtxt1.jpg'
import productswtxt2 from '../images/3/productswtxt2.jpg'
import productswtxt3 from '../images/3/productswtxt3.jpg'
import productswtxt4 from '../images/3/productswtxt4.jpg'
import home5wtext from '../images/1/homewtxt5.jpg'

export default class Products extends Component {
    componentDidMount(){
        document.body.style.background = "#F5F5F5";
    }
    render() {
        return (
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
                                <Button variant="primary" style={{position:"absolute", bottom:"25%", left:"6.7%", maxWidth:"45vw"}}>
                                    <Typography>Schedule a free trial</Typography>
                                </Button>
                            </Link>
                        </div>
                        <div>
                            <img src={productswtxt4} display="flex" alt="Background1" style={{maxWidth:"100vw"}}></img>
                        </div>
                        <div>
                            <img src={home5wtext} display="flex" alt="Background1" style={{maxWidth:"100vw"}}></img>
                        </div>
                </Box>
            </Fragment>
        )
    }
};