import React from 'react';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import Paper from '@material-ui/core/Paper';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import Typography from '@material-ui/core/Typography';
import { Route } from 'react-router';
import { Link as RouterLink } from 'react-router-dom';

function ListItemLink({ icon, primary, to, ...rest }) {
  const renderLink = React.useMemo(
    () =>
      React.forwardRef((itemProps, ref) => (
        <RouterLink to={to} ref={ref} {...itemProps} />
      )),
    [to]
  );

  return (
    <li>
      <MenuItem button component={renderLink} {...rest}>
        {icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
        <ListItemText primary={primary} />
      </MenuItem>
    </li>
  );
}

export default function ListRouter() {
  return (
    <div>
      <Route>
        {({ location }) => (
          <Typography data-cy={location.pathname.replace('/', '')} gutterBottom>
            Current route: {location.pathname}
          </Typography>
        )}
      </Route>
      <Paper elevation={0}>
        <MenuList aria-label="main mailbox folders">
          <ListItemLink
            data-cy="menu-inbox-link"
            to="/menu-inbox"
            primary="Menu Inbox"
            icon={<InboxIcon />}
          />
          <ListItemLink
            data-cy="menu-drafts-link"
            to="/menu-drafts"
            primary="Menu Drafts"
            icon={<DraftsIcon />}
          />
        </MenuList>
      </Paper>
    </div>
  );
}
