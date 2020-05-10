import React, {Component, Fragment, Row} from 'react';
import Box from '@material-ui/core/Box';
import Navbar from './components/navbar'
import contact1 from '../images/contact1.jpg'
import contact2 from '../images/contact2.jpg'
import contact3 from '../images/contact3.jpg'

export default class contact extends Component {
    render() {
        return (
            <Fragment>
                <Navbar/>
                <Box display="flex" flexDirection="column" m={0} p={0}>
                        <div>
                            <img src={contact1} display="flex" alt="Background1" style={{maxWidth:"100vw"}}></img>
                        </div>
                        <div>
                            <img src={contact2} display="flex" alt="Background1" style={{maxWidth:"100vw"}}></img>
                        </div>
                        <div>
                            <img src={contact3} display="flex" alt="Background1" style={{maxWidth:"100vw"}}></img>
                        </div>
                </Box>
            </Fragment>
        )
    }
};