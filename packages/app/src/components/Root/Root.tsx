import { PropsWithChildren } from 'react';
import { makeStyles, InputBase, IconButton } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import LogoFull from './LogoFull';
import {
  Settings as SidebarSettings,
  UserSettingsSignInAvatar,
} from '@backstage/plugin-user-settings';
import {
  Link,
} from '@backstage/core-components';
import { NotificationsSidebarItem } from '@backstage/plugin-notifications';
import { useNavigate } from 'react-router-dom';

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
    flex: 1,
    minWidth: 0,
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
    flexShrink: 0,
  },
  searchContainer: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    borderRadius: 24,
    padding: '4px 16px',
    marginLeft: 32,
    width: 250,
    maxWidth: 250,
  },
  searchInput: {
    marginLeft: 8,
    flex: 1,
    fontSize: 14,
  },
  searchIcon: {
    color: '#666',
  },
  content: {
    flex: 1,
    width: '100%',
  },
});

export const Root = ({ children }: PropsWithChildren<{}>) => {
  const classes = useHeaderStyles();
  const navigate = useNavigate();

  const handleSearchSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const query = formData.get('search') as string;
    if (query?.trim()) {
      navigate(`/search?query=${encodeURIComponent(query.trim())}`);
    }
  };

  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <div className={classes.leftSection}>
          <Link to="/" underline="none" aria-label="Home">
            <LogoFull />
          </Link>
          <nav className={classes.navigation}>
            <Link to="/" className={classes.navItem}>Home</Link>
            <Link to="/catalog" className={classes.navItem}>Inventory</Link>
            <Link to="/manage-apps" className={classes.navItem}>Manage Apps</Link>
            <Link to="/docs" className={classes.navItem}>Docs & Support</Link>
          </nav>
          <form onSubmit={handleSearchSubmit}>
            <div className={classes.searchContainer}>
              <SearchIcon className={classes.searchIcon} />
              <InputBase
                name="search"
                placeholder="Search..."
                className={classes.searchInput}
                inputProps={{ 'aria-label': 'search' }}
              />
            </div>
          </form>
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
