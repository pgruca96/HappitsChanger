import React from 'react';
import { useStyles } from './SideBar.styles';
import { useTheme } from '@material-ui/core/styles';
import clsx from 'clsx';
import {
  habitTools,
  accountUserMenagment,
} from '../../../../utils/constants/menuLists';
import HorizontalList from '../../../../components/lists/vertical/verticalList';
import { Drawer, IconButton } from '@material-ui/core';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

const SideBar = ({ open, handleClose }) => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Drawer
      variant="permanent"
      className={clsx(classes.drawer, {
        [classes.drawerOpen]: open,
        [classes.drawerClose]: !open,
      })}
      classes={{
        paper: clsx({
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        }),
      }}
    >
      <div className={classes.toolbar}>
        <IconButton onClick={handleClose}>
          {theme.direction === 'rtl' ? (
            <ChevronRightIcon />
          ) : (
            <ChevronLeftIcon />
          )}
        </IconButton>
      </div>
      <HorizontalList open={open} list={habitTools} subheader="Habit tools" />
      <HorizontalList
        open={open}
        list={accountUserMenagment}
        subheader="Account user management"
      />
    </Drawer>
  );
};

export default SideBar;
