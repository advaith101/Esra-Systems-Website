import React, {Component} from 'react';
import { Redirect, Link, useHistory } from 'react-router-dom';
// import {createMuiTheme, responsiveFontSizes, MuiThemeProvider} from '@material-ui/core/styles';
// import { red } from 'material-ui/core/colors';
import { AppBar, Toolbar, IconButton, Typography, Button, Avatar, createMuiTheme, responsiveFontSizes, MuiThemeProvider, List, ListItem, Grid, SwipeableDrawer} from '@material-ui/core';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import { Row } from 'simple-flexbox';
import { StyleSheet, css } from 'aphrodite';
import LogoDark from '../../logos/logodark.ico'
import LogoWhite from '../../logos/logolight.ico'

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
    },
    list : {
        width : 200,
    },
    padding : {
        paddingRight : 30,
        cursor : "pointer",
    },
    sideBarIcon : {
        padding : 0,
        color : "white",
        cursor : "pointer",
    }
});

// let theme = createMuiTheme();
// theme = responsiveFontSizes(theme);

class Navbar extends Component {
    constructor(props) {
        super(props)
        this.state = {drawerActivate:false, drawer:false};
        this.createDrawer = this.createDrawer.bind(this);
        this.destroyDrawer = this.destroyDrawer.bind(this);
    }
    componentWillMount(){
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

    //Small Screens
    createDrawer() {
    const { classes } = this.props;
    return (
      <div>
        <AppBar position="static" color="inherit" style={{opacity: .5, position: "fixed", top: 0, left: 0, width: "100%", maxHeight:"8vh", background:"#000000"}}>
            <Toolbar variant="dense"> 
                <Link to="/">
                    <Avatar variant='square' className={classes.large} src={LogoWhite} />
                </Link>
                <Row className={classes.container}>
                    <MenuIcon
                    className = {this.props.classes.sideBarIcon}
                    onClick={()=>{this.setState({drawer:true})}} />
                </Row>
            </Toolbar>
        </AppBar>

        <SwipeableDrawer
         anchor="right"
         open={this.state.drawer}
         onClose={()=>{this.setState({drawer:false})}}
         onOpen={()=>{this.setState({drawer:true})}}>

           <div
             tabIndex={0}
             role="button"
             onClick={()=>{this.setState({drawer:false})}}
             onKeyDown={()=>{this.setState({drawer:false})}}>

            <List className = {this.props.classes.list}>
                <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }} >
                    <ListItem key = {1} button divider>
                        <Typography>Home</Typography>
                    </ListItem>
                </Link>
                <Link to="/about" style={{ color: 'inherit', textDecoration: 'none' }} >
                    <ListItem key = {2} button divider>
                        <Typography>About Us</Typography>
                    </ListItem>
                </Link>
                <Link to="/products" style={{ color: 'inherit', textDecoration: 'none' }} >
                    <ListItem key = {3} button divider>
                        <Typography>Products</Typography>
                    </ListItem>
                </Link>
                <Link to="/contact" style={{ color: 'inherit', textDecoration: 'none' }} >
                    <ListItem key = {4} button divider>
                        <Typography>Contact</Typography>
                    </ListItem>
                </Link>
            </List>
         </div>
       </SwipeableDrawer>
      </div>
    )};
    
    //Large screens
    destroyDrawer(){
        const { classes } = this.props;
        return(
            <AppBar position="static" color="inherit" style={{opacity: .5, position: "fixed", top: 0, left: 0, width: "100%", maxHeight:"8vh", background:"#000000"}}>
                <Toolbar variant="dense"> 
                    <Link to="/">
                        <Avatar variant='square' className={classes.large} src={LogoWhite} />
                    </Link>
                    <Row className={classes.container}>
                        <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }} >
                            <Button className={classes.button}>
                                <Typography>Home</Typography>                       
                            </Button>
                        </Link>
                        <Link to="/about" style={{ color: 'inherit', textDecoration: 'none' }} >
                            <Button className={classes.button}>
                                <Typography>About Us</Typography>
                            </Button>
                        </Link>
                        <Link to="/products" style={{ color: 'inherit', textDecoration: 'none' }} >
                            <Button className={classes.button}>
                                <Typography>Products</Typography>
                            </Button>
                        </Link>
                        <Link to="/contact" style={{ color: 'inherit', textDecoration: 'none' }} >
                            <Button className={classes.button}>
                                <Typography>Contact</Typography>
                            </Button>
                        </Link>
                    </Row>
                </Toolbar>
            </AppBar>
        )   
    }

    render() {
        return (
            <div>
                {this.state.drawerActivate ? this.createDrawer() : this.destroyDrawer()}
            </div>
        )
    }
}

export default withStyles(useStyles)(Navbar);