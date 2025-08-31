import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  Box,
  Select,
  MenuItem,
  FormControl,
  Chip,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Divider,
} from '@material-ui/core';
import {
  Apps as AppsIcon,
  Schedule as ReleaseIcon,
  Visibility as MonitoringIcon,
  FilterList as FilterIcon,
  Settings as SettingsIcon,
  Add as AddIcon,
  Launch as LaunchIcon,
  CheckCircle as SuccessIcon,
  Warning as WarningIcon,
  Schedule as ClockIcon,
} from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(3),
    maxWidth: '100%',
    background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
    minHeight: 'calc(100vh - 72px)',
  },
  welcomeSection: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: theme.spacing(3),
    padding: theme.spacing(3),
    backgroundColor: '#ffffff',
    borderRadius: 12,
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
  },
  welcomeText: {
    color: '#000000',
    fontWeight: 600,
  },
  filterSection: {
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing(2),
  },
  filterControl: {
    minWidth: 250,
  },
  customizeSection: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginBottom: theme.spacing(2),
    gap: theme.spacing(1),
  },
  customizeButton: {
    backgroundColor: '#f8f9fa',
    border: '2px dashed #e61616',
    color: '#e61616',
    '&:hover': {
      backgroundColor: '#e61616',
      color: '#ffffff',
    },
  },
  dashboardGrid: {
    marginTop: theme.spacing(2),
  },
  inventoryCard: {
    height: 320,
    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
    background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)',
    border: '1px solid #e0e0e0',
    '&:hover': {
      transform: 'translateY(-4px)',
      boxShadow: '0 8px 24px rgba(0, 0, 0, 0.15)',
    },
  },
  cardHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: theme.spacing(2),
    padding: theme.spacing(1),
    backgroundColor: '#f8f9fa',
    borderRadius: 8,
  },
  cardHeaderLeft: {
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing(1),
  },
  cardTitle: {
    color: '#e61616',
    fontWeight: 600,
    fontSize: '1.1rem',
  },
  cardIcon: {
    color: '#e61616',
  },
  itemList: {
    padding: 0,
  },
  listItem: {
    padding: theme.spacing(1, 0),
    cursor: 'pointer',
    borderRadius: 6,
    '&:hover': {
      backgroundColor: '#f0f8ff',
      transform: 'translateX(4px)',
    },
  },
  itemText: {
    fontSize: '0.9rem',
  },
  itemLink: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  statusChip: {
    fontSize: '0.75rem',
    height: 20,
  },
  successStatus: {
    backgroundColor: '#4caf50',
    color: '#ffffff',
  },
  warningStatus: {
    backgroundColor: '#ff9800',
    color: '#ffffff',
  },
  inProgressStatus: {
    backgroundColor: '#2196f3',
    color: '#ffffff',
  },
  countChip: {
    backgroundColor: '#e61616',
    color: '#ffffff',
    fontWeight: 600,
  },
  linkIcon: {
    fontSize: 16,
    color: '#666',
    opacity: 0,
    transition: 'opacity 0.2s ease',
    '$listItem:hover &': {
      opacity: 1,
    },
  },
}));

export const HomePage = () => {
  const classes = useStyles();
  const [selectedCircle, setSelectedCircle] = useState('Engineering Enablement Circle');

  const circles = [
    'Engineering Enablement Circle',
    'Platform Engineering Circle',
    'Data Engineering Circle',
    'Security Engineering Circle',
    'DevOps Circle',
  ];

  const getStatusIcon = (status: string) => {
    switch (status.toLowerCase()) {
      case 'success':
      case 'running':
        return <SuccessIcon style={{ fontSize: 16, color: '#4caf50' }} />;
      case 'failed':
      case 'warning':
        return <WarningIcon style={{ fontSize: 16, color: '#ff9800' }} />;
      case 'in qa':
      case 'development':
      case 'maintenance':
        return <ClockIcon style={{ fontSize: 16, color: '#2196f3' }} />;
      default:
        return null;
    }
  };

  const handleItemClick = (type: string, item: string) => {
    console.log(`Navigate to ${type}: ${item}`);
  };

  const inventoryData = {
    applications: [
      { name: 'Developer Portal', status: 'Running', version: 'v2.1.0' },
      { name: 'CI/CD Pipeline Service', status: 'Running', version: 'v1.8.2' },
      { name: 'Code Quality Scanner', status: 'Running', version: 'v3.0.1' },
      { name: 'Artifact Repository', status: 'Running', version: 'v1.5.4' },
      { name: 'Testing Framework', status: 'Maintenance', version: 'v2.2.0' },
    ],
    upcomingReleases: [
      { name: 'Developer Portal v2.2.0', releaseDate: 'Sept 15, 2025', status: 'In QA' },
      { name: 'CI/CD Service v1.9.0', releaseDate: 'Sept 22, 2025', status: 'Development' },
      { name: 'Security Scanner v3.1.0', releaseDate: 'Oct 1, 2025', status: 'Planning' },
      { name: 'Testing Framework v2.3.0', releaseDate: 'Oct 8, 2025', status: 'Development' },
      { name: 'Monitoring Dashboard v1.0.0', releaseDate: 'Oct 15, 2025', status: 'Planning' },
    ],
    productionMonitoring: [
      { name: 'Developer Portal', uptime: '99.9%', alerts: '0 Active', lastDeploy: '2 days ago' },
      { name: 'CI/CD Service', uptime: '99.8%', alerts: '1 Warning', lastDeploy: '5 days ago' },
      { name: 'Artifact Repository', uptime: '100%', alerts: '0 Active', lastDeploy: '1 week ago' },
      { name: 'Code Scanner', uptime: '99.9%', alerts: '0 Active', lastDeploy: '3 days ago' },
    ],
  };

  return (
    <div className={classes.container}>
      <div className={classes.welcomeSection}>
        <Typography variant="h4" className={classes.welcomeText}>
          Welcome, Kristin!
        </Typography>
        <div className={classes.filterSection}>
          <FilterIcon style={{ color: '#666' }} />
          <Typography variant="body1" style={{ color: '#666' }}>
            Filtered to:
          </Typography>
          <FormControl className={classes.filterControl}>
            <Select
              value={selectedCircle}
              onChange={(e) => setSelectedCircle(e.target.value as string)}
              style={{ fontSize: '14px' }}
            >
              {circles.map((circle) => (
                <MenuItem key={circle} value={circle}>
                  {circle}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
      </div>

      <div className={classes.customizeSection}>
        <Button
          variant="outlined"
          startIcon={<AddIcon />}
          className={classes.customizeButton}
          size="small"
        >
          Add Widget
        </Button>
        <Button
          variant="outlined"
          startIcon={<SettingsIcon />}
          className={classes.customizeButton}
          size="small"
        >
          Customize Dashboard
        </Button>
      </div>

      <Grid container spacing={3} className={classes.dashboardGrid}>
        <Grid item xs={12} md={4}>
          <Card className={classes.inventoryCard}>
            <CardContent>
              <div className={classes.cardHeader}>
                <div className={classes.cardHeaderLeft}>
                  <AppsIcon className={classes.cardIcon} />
                  <Typography variant="h6" className={classes.cardTitle}>
                    Applications
                  </Typography>
                </div>
                <Chip 
                  label={inventoryData.applications.length} 
                  size="small" 
                  className={classes.countChip}
                />
              </div>
              <List className={classes.itemList}>
                {inventoryData.applications.map((app, index) => (
                  <React.Fragment key={app.name}>
                    <ListItem 
                      className={classes.listItem}
                      onClick={() => handleItemClick('application', app.name)}
                    >
                      <div className={classes.itemLink}>
                        <ListItemText
                          primary={
                            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                              {getStatusIcon(app.status)}
                              {app.name}
                            </div>
                          }
                          secondary={`${app.status} • ${app.version}`}
                          classes={{
                            primary: classes.itemText,
                            secondary: classes.itemText,
                          }}
                        />
                        <LaunchIcon className={classes.linkIcon} />
                      </div>
                    </ListItem>
                    {index < inventoryData.applications.length - 1 && <Divider />}
                  </React.Fragment>
                ))}
              </List>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card className={classes.inventoryCard}>
            <CardContent>
              <div className={classes.cardHeader}>
                <div className={classes.cardHeaderLeft}>
                  <ReleaseIcon className={classes.cardIcon} />
                  <Typography variant="h6" className={classes.cardTitle}>
                    Upcoming Releases
                  </Typography>
                </div>
                <Chip 
                  label={inventoryData.upcomingReleases.length} 
                  size="small" 
                  className={classes.countChip}
                />
              </div>
              <List className={classes.itemList}>
                {inventoryData.upcomingReleases.map((release, index) => (
                  <React.Fragment key={release.name}>
                    <ListItem 
                      className={classes.listItem}
                      onClick={() => handleItemClick('release', release.name)}
                    >
                      <div className={classes.itemLink}>
                        <ListItemText
                          primary={
                            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                              {getStatusIcon(release.status)}
                              {release.name}
                            </div>
                          }
                          secondary={`${release.releaseDate} • ${release.status}`}
                          classes={{
                            primary: classes.itemText,
                            secondary: classes.itemText,
                          }}
                        />
                        <LaunchIcon className={classes.linkIcon} />
                      </div>
                    </ListItem>
                    {index < inventoryData.upcomingReleases.length - 1 && <Divider />}
                  </React.Fragment>
                ))}
              </List>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card className={classes.inventoryCard}>
            <CardContent>
              <div className={classes.cardHeader}>
                <div className={classes.cardHeaderLeft}>
                  <MonitoringIcon className={classes.cardIcon} />
                  <Typography variant="h6" className={classes.cardTitle}>
                    Production Monitoring
                  </Typography>
                </div>
                <Chip 
                  label={inventoryData.productionMonitoring.length} 
                  size="small" 
                  className={classes.countChip}
                />
              </div>
              <List className={classes.itemList}>
                {inventoryData.productionMonitoring.map((service, index) => (
                  <React.Fragment key={service.name}>
                    <ListItem 
                      className={classes.listItem}
                      onClick={() => handleItemClick('monitoring', service.name)}
                    >
                      <div className={classes.itemLink}>
                        <ListItemText
                          primary={
                            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                              {service.alerts === '0 Active' ? 
                                <SuccessIcon style={{ fontSize: 16, color: '#4caf50' }} /> :
                                <WarningIcon style={{ fontSize: 16, color: '#ff9800' }} />
                              }
                              {service.name}
                            </div>
                          }
                          secondary={`${service.uptime} uptime • ${service.alerts}`}
                          classes={{
                            primary: classes.itemText,
                            secondary: classes.itemText,
                          }}
                        />
                        <LaunchIcon className={classes.linkIcon} />
                      </div>
                    </ListItem>
                    {index < inventoryData.productionMonitoring.length - 1 && <Divider />}
                  </React.Fragment>
                ))}
              </List>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};