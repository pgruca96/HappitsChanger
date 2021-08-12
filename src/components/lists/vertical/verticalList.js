import React from 'react';
import { prepareURL } from "../../../utils/helpers/prepareURL";
import { Link } from 'react-router-dom';
import { Divider, List } from "@material-ui/core";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";



const VerticalList = ({open, list, subheader}) => {
    return ( 
        <>
            <Divider />
            <List
                subheader={
                    open && (
                    <ListSubheader component="div" id={subheader}>
                        {subheader}
                    </ListSubheader>
                    )
                }
            >
                {list.map(({name, icon}) => (
                        <ListItem button component={Link} to={prepareURL(name)} key={name}>
                            <ListItemIcon>{icon()}</ListItemIcon>
                            <ListItemText primary={name} />
                        </ListItem>
                    )
                )}
            </List>
        </>
     );
}
 
export default VerticalList;