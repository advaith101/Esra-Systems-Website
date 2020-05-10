import React, {Component, Fragment, Row} from 'react';
import Box from '@material-ui/core/Box';
import Navbar from './components/navbar'
import products1 from '../images/product1.jpg'
import products2 from '../images/product2.jpg'
import products3 from '../images/product3.jpg'
import products4 from '../images/product4.jpg'
import products5 from '../images/product5.jpg'

export default class Products extends Component {
    render() {
        return (
            <Fragment>
                <Navbar/>
                <Box display="flex" flexDirection="column" m={0} p={0}>
                        <div>
                            <img src={products1} display="flex" alt="Background1" style={{maxWidth:"100vw"}}></img>
                        </div>
                        <div>
                            <img src={products2} display="flex" alt="Background1" style={{maxWidth:"100vw"}}></img>
                        </div>
                        <div>
                            <img src={products3} display="flex" alt="Background1" style={{maxWidth:"100vw"}}></img>
                        </div>
                        <div>
                            <img src={products4} display="flex" alt="Background1" style={{maxWidth:"100vw"}}></img>
                        </div>
                        <div>
                            <img src={products5} display="flex" alt="Background1" style={{maxWidth:"100vw"}}></img>
                        </div>
                </Box>
            </Fragment>
        )
    }
};