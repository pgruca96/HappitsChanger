import GavelRoundedIcon from "@material-ui/icons/GavelRounded";
import EditRoundedIcon from "@material-ui/icons/EditRounded";
import ListAltRoundedIcon from "@material-ui/icons/ListAltRounded";
import CakeRoundedIcon from "@material-ui/icons/CakeRounded";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActiveRounded";
import SettingsIcon from "@material-ui/icons/SettingsRounded";

export const habitTools = [
    {
        name: "Habits list",
        icon: () => <EditRoundedIcon />
    },
    {
        name: "Create your habit",
        icon: () => <ListAltRoundedIcon />    
    },
    {
        name: "Rules",
        icon: () => <GavelRoundedIcon />             
    },
    {
        name: "Awards",
        icon: () => <CakeRoundedIcon />
    }
];

export const accountUserMenagment = [
    {
        name: "Settings",
        icon: () => <SettingsIcon />
    },
    {
        name: "Notifications",
        icon: () => <NotificationsActiveIcon />
    }   
]
