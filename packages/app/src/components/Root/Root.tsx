import { PropsWithChildren } from 'react';
import { makeStyles } from '@material-ui/core';
import LogoFull from './LogoFull';
import {
  Settings as SidebarSettings,
  UserSettingsSignInAvatar,
} from '@backstage/plugin-user-settings';
import {
  Link,
} from '@backstage/core-components';
import { NotificationsSidebarItem } from '@backstage/plugin-notifications';

const useHeaderStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    width: '100%',
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 24px',
    height: 72,
    borderBottom: '3px solid #e61616',
    width: '100%',
    backgroundColor: '#ffffff',
    boxSizing: 'border-box',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
  leftSection: {
    display: 'flex',
    alignItems: 'center',
    gap: 48,
  },
  navigation: {
    display: 'flex',
    gap: 32,
    alignItems: 'center',
  },
  navItem: {
    textDecoration: 'none',
    color: '#000000',
    padding: '12px 20px',
    borderRadius: 4,
    fontWeight: 500,
    fontSize: '16px',
    transition: 'all 0.2s ease',
    '&:hover': {
      backgroundColor: '#e61616',
      color: '#ffffff',
    },
  },
  rightSection: {
    display: 'flex',
    alignItems: 'center',
    gap: 16,
  },
  content: {
    flex: 1,
    width: '100%',
  },
});

export const Root = ({ children }: PropsWithChildren<{}>) => {
  const classes = useHeaderStyles();

  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <div className={classes.leftSection}>
          <Link to="/" underline="none" aria-label="Home">
            <LogoFull />
          </Link>
          <nav className={classes.navigation}>
            <Link to="/catalog" className={classes.navItem}>Home</Link>
            <Link to="/api-docs" className={classes.navItem}>APIs</Link>
            <Link to="/docs" className={classes.navItem}>Docs</Link>
            <Link to="/create" className={classes.navItem}>Create</Link>
            <Link to="/search" className={classes.navItem}>Search</Link>
          </nav>
        </div>
        <div className={classes.rightSection}>
          <NotificationsSidebarItem />
          <UserSettingsSignInAvatar />
          <SidebarSettings />
        </div>
      </div>
      <div className={classes.content}>
        {children}
      </div>
    </div>
  );
};
