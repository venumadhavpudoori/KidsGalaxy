import React from 'react';
import './Navbar.css';

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

const useStyles = makeStyles((theme) => ({
    title: {
      flexGrow: 1,
      background : '#212121',
      alignSelf: 'center',
      padding: "18px 0px",
    },
    login:{
        flexGrow: 1,
        alignSelf: 'center',
        padding: "18px 0px", 
    },
    labels:{
        flexGrow: 1,
        alignSelf: 'center',
    }
  }));
function Navbar(props) {
    const classes = useStyles();
    const [auth, setAuth] = React.useState(true);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
  
    const handleChange = (event) => {
      setAuth(event.target.checked);
    };
  
    const handleMenu = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
    return (
        <div>
         <div className="flex-container">
            <div className="flex-item-left">
            <div className="item-container">   
                <div className={classes.labels}>
                    Label 1<ArrowDropDownIcon/>
                </div>
                <div className={classes.labels}>
                    Label 2<ArrowDropDownIcon/>
                    </div>
                <div className={classes.title}>
                    <Typography variant="h6" style={{color:"#fff"}}>
                    Logo
                    </Typography>
                </div>
            </div>
            </div>
            <div className="flex-item-right">
            <div className="item-container">
                <div style={{flexGrow: 1}}>Label 3</div>
                <div style={{flexGrow: 1}}>label 4</div>
                <div className={classes.login}>
                {auth && (
                <div>
                <Typography  onClick={handleMenu} style={{color:"#000"}}>
                    Login | Sign Up
                    </Typography>
                    <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
              </Menu>
              </div>
          )}
                </div>
            </div>
            </div>
         </div>   
        </div>
    );
}

export default Navbar;