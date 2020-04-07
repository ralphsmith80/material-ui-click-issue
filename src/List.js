import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Paper from '@material-ui/core/Paper';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
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
      <ListItem button component={renderLink} {...rest}>
        {icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
        <ListItemText primary={primary} />
      </ListItem>
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
        <List aria-label="main mailbox folders">
          <ListItemLink
            data-cy="inbox-link"
            to="/inbox"
            primary="Inbox"
            icon={<InboxIcon />}
          />
          <ListItemLink
            data-cy="drafts-link"
            to="/drafts"
            primary="Drafts"
            icon={<DraftsIcon />}
          />
        </List>
        <Divider />
        <List aria-label="secondary mailbox folders">
          <ListItemLink data-cy="trash-link" to="/trash" primary="Trash" />
          <ListItemLink data-cy="spam-link" to="/spam" primary="Spam" />
        </List>
      </Paper>
    </div>
  );
}
