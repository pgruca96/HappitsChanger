import React from 'react';
import { useStyles } from './NavBar.styles';
import clsx from 'clsx';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Button,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import Logo from '../../../../components/logo/logo';
import srcLogo from '../../../../assets/punctuality2.png';

const NavBar = ({ open, handleOpen, handleLogOut }) => {
  const classes = useStyles();
  return (
    <AppBar
      position="fixed"
      className={clsx(classes.appBar, {
        [classes.appBarShift]: open,
      })}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleOpen}
          edge="start"
          className={clsx(classes.menuButton, {
            [classes.hide]: open,
          })}
        >
          <MenuIcon />
        </IconButton>
        <Logo src={srcLogo} width="50px" />
        <Typography variant="h2" className={classes.h2}>
          HappitsChanger
        </Typography>
        <Button onClick={handleLogOut} className={classes.logOutButton}>
          Log out
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
