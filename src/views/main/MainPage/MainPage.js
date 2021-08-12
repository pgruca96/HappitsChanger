import React, { useState } from 'react';
import { NavBar, SideBar } from '../../../components/layout/navigation';
import { useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { MainPageContainer } from './MainPage.styles';
import { CssBaseline } from '@material-ui/core';
import MainRoutes from '../mainRoutes';
import { logOut } from '../../../store/actions/auth';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    justifyContent: 'flex-end',
    ...theme.mixins.toolbar,
  },
  container: {
    flexGrow: 1,
    padding: theme.spacing(0, 3, 3),
  },
  content: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.spacing(3),
  },
}));

export default function MainPage() {
  const history = useHistory();
  const classes = useStyles();
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => setOpen(true);

  const handleDrawerClose = () => setOpen(false);

  const handleLogOut = () => dispatch(logOut()).then(history.push('/'));

  return (
    <MainPageContainer>
      <CssBaseline />
      <NavBar
        open={open}
        handleOpen={handleDrawerOpen}
        handleLogOut={handleLogOut}
      />
      <SideBar open={open} handleClose={handleDrawerClose} />
      <main className={classes.container}>
        <div className={classes.toolbar} />
        <div className={classes.content}>
          <MainRoutes />
        </div>
      </main>
    </MainPageContainer>
  );
}
