import { ListItemText, ListItemIcon, MenuItem } from '@material-ui/core';
import styled from 'styled-components';

const ListItemWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 100%;
`;

const returnListitem = (name, icon) => 
  <MenuItem value={name} key={name}>
    <ListItemWrapper>
      <ListItemText primary={name} />
      {icon && <ListItemIcon>{icon()}</ListItemIcon>}
    </ListItemWrapper>
  </MenuItem>

export const selectItems = (items) => {
  return items.map(item => {
    if(typeof item === 'object' && item === null) return;
    if(typeof item !== 'object') return returnListitem(item);
    const {name, icon} = item;
    return returnListitem(name, icon);
  });
};
