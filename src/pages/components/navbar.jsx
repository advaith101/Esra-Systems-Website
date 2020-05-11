import React, {Component} from 'react';
import { Redirect, Link, useHistory } from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
// import { red } from 'material-ui/core/colors';
import { AppBar, Toolbar, IconButton, MenuIcon, Typography, Button, Avatar} from '@material-ui/core';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { Row } from 'simple-flexbox';
import { StyleSheet, css } from 'aphrodite';
import LogoDark from '../../logos/logodark.ico'
import LogoWhite from '../../logos/logolight.ico'

const styles = StyleSheet.create({
    avatar: {
        height: 35,
        width: 35,
        borderRadius: 50,
        marginLeft: 14,
        border: '1px solid #DFE0EB',
    },
    container: {
        height: 70, width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        backgroundColor: "#fff"
    },
    cursorPointer: {
        cursor: 'pointer'
    },
    name: {
        fontSize: "21px",
        fontWeight: 300,
        lineHeight: "70px",
        color: "#323332",
        textDecoration: "none",
        fontFamily: "Roboto",
        textAlign: 'right',
        letterSpacing: 0.2,
        '@media (max-width: 768px)': {
            display: 'none'
        }
    },
    separator: {
        borderLeft: '1px solid #DFE0EB',
        marginLeft: 32,
        marginRight: 32,
        height: 32,
        width: 2,
        '@media (max-width: 768px)': {
            marginLeft: 12,
            marginRight: 12
        }
    },
    title: {
        fontSize: "21px",
        fontWeight: 300,
        lineHeight: "70px",
        color: "#788195",
        textDecoration: "none",
        fontFamily: "Roboto",
        textAlign: 'right',
        letterSpacing: 0.4,
        marginLeft: 21,
        '@media (max-width: 768px)': {
            marginLeft: 73
        },
        '@media (max-width: 468px)': {
            fontSize: 20
        }
    },
    iconStyles: {
        cursor: 'pointer',
        marginLeft: 21,
        '@media (max-width: 768px)': {
            marginLeft: 12
        }
    }
});

const useStyles = theme => ({
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    small: {
      width: theme.spacing(3),
      height: theme.spacing(3),
    },
    large: {
      marginTop: "0%",
      marginBottom: "0%",
      width: theme.spacing(12),
      height: theme.spacing(12),
    },
    container: {
        height: 70, width: "100%", maxHeight:"8vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        backgroundColor: "#000000"
    },
    button: {
        color: 'white',
        justifyContent: "flex-end",
        marginLeft:10,
        marginRight:10
    }
});

class Navbar extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const { classes } = this.props;
        return (
            <AppBar position="static" color="inherit" style={{opacity: .5, position: "fixed", top: 0, left: 0, width: "100%", maxHeight:"8vh", background:"#000000"}}>
                <Toolbar variant="dense"> 
                    <Link to="/">
                        <Avatar variant='square' className={classes.large} src={LogoWhite} />
                    </Link>
                    <Row className={classes.container}>
                        <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }} >
                            <Button className={classes.button}>Home</Button>
                        </Link>
                        <Link to="/about" style={{ color: 'inherit', textDecoration: 'none' }} >
                            <Button className={classes.button}>About Us</Button>
                        </Link>
                        <Link to="/products" style={{ color: 'inherit', textDecoration: 'none' }} >
                            <Button className={classes.button}>Products</Button>
                        </Link>
                        <Link to="/contact" style={{ color: 'inherit', textDecoration: 'none' }} >
                            <Button className={classes.button}>Contact</Button>
                        </Link>
                    </Row>
                </Toolbar>
            </AppBar>
        )
    }
}

export default withStyles(useStyles)(Navbar);