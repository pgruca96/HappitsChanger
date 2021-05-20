import React from "react";
import clsx from "clsx";
import {
  makeStyles,
  useTheme,
  ThemeProvider,
  createMuiTheme,
} from "@material-ui/core/styles";
import {
  AppBar,
  CssBaseline,
  Drawer,
  Toolbar,
  Typography,
  Divider,
  IconButton,
  List,
} from "@material-ui/core";
import NotificationsActiveIcon from "@material-ui/icons";,
import SettingsIcon from "@material-ui/icons";,
import GavelRoundedIcon from "@material-ui/icons";,
import MenuIcon from "@material-ui/icons",
import EditRoundedIcon from "@material-ui/icons",
import ListAltRoundedIcon from "@material-ui/icons";
import ChevronLeftIcon from "@material-ui/icons";
import ChevronRightIcon from "@material-ui/icons";
import CakeRoundedIcon from "@material-ui/icons/CakeRoundedIcon";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import Logo from "../../components/logo";
import srcLogo from "../../assets/punctuality.png";
import { primaryTheme, secondaryTheme } from "../../styles/colors";
import { NavLink } from "react-router-dom";
import MainRoutes from "./mainRoutes";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    backgroundColor: primaryTheme,
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    backgroundColor: secondaryTheme,
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1,
    },
    backgroundColor: secondaryTheme,
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  navbarToolbar: {
    height: "50px",
  },
  h2: {
    fontSize: "2rem",
    fontFamily: "Lobster, open-sans",
    padding: "0 20px",
  },
}));

export default function MainPage() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const prepareURL = (text) => {
    if (text === "Habits list") return "/main/habits";
    else if (text === "Create your habit") return "/main/create";
    else return text.toLowerCase();
  };

  const showIcons = (index) => {
    switch (index) {
      case 0: {
        return <EditRoundedIcon />;
      }
      case 1: {
        return <ListAltRoundedIcon />;
      }
      case 2: {
        return <GavelRoundedIcon />;
      }
      case 3: {
        return <CakeRoundedIcon />;
      }
      default:
        <EditRoundedIcon />;
    }
  };
  return (
    <div className={classes.root}>
      <CssBaseline />

      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar className={classes.navbarToolbar}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
          <Logo src={srcLogo} />
          <Typography variant="h2" className={classes.h2}>
            HappitsChanger
          </Typography>
        </Toolbar>
      </AppBar>
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
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <List
          subheader={
            open && (
              <ListSubheader component="div" id="habit-tools-list-subheader">
                Habit tools
              </ListSubheader>
            )
          }
        >
          {["Habits list", "Create your habit", "Rules", "Awards"].map(
            (text, index) => (
              <NavLink to={prepareURL(text)}>
                <ListItem button key={text}>
                  <ListItemIcon>{showIcons(index)}</ListItemIcon>
                  <ListItemText primary={text} />
                </ListItem>
              </NavLink>
            )
          )}
        </List>
        <Divider />
        <List
          subheader={
            open && (
              <ListSubheader component="div" id="habit-tools-list-subheader">
                Account user management
              </ListSubheader>
            )
          }
        >
          {["Settings", "Notifications"].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? (
                  <SettingsIcon />
                ) : (
                  <NotificationsActiveIcon />
                )}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <MainRoutes />
      </main>
    </div>
  );
}
