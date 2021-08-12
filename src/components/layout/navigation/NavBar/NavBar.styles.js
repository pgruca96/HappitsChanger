import { makeStyles } from '@material-ui/core/styles';
import { primaryTheme } from '../../../../utils/constants/colors';
import { sidebarDrawerWidth as drawerWidth } from '../../../../utils/constants/defaultSizes';

export const useStyles = makeStyles((theme) => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    backgroundColor: primaryTheme,
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  h2: {
    fontSize: '2rem',
    fontFamily: 'Lobster, open-sans',
    padding: '0 20px',
  },
  logOutButton: {
    marginLeft: 'auto',
  },
}));
