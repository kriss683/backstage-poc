import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Typography,
  Grid,
  Card,
  CardContent,
  Box,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Chip,
  Divider,
  IconButton,
  Breadcrumbs,
  Link,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from '@material-ui/core';
import {
  GitHub as GitHubIcon,
  Build as PipelineIcon,
  Cloud as AwsIcon,
  Security as SecurityIcon,
  VpnKey as OktaIcon,
  Storage as SecretIcon,
  Link as LinkIcon,
  Launch as LaunchIcon,
  CheckCircle as SuccessIcon,
  Cancel as ErrorIcon,
  Warning as WarningIcon,
  CloudQueue as OcfIcon,
  Fingerprint as IdIcon,
  BugReport as TestIcon,
  FilterList as FilterIcon,
} from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(3),
    background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
    minHeight: 'calc(100vh - 72px)',
  },
  breadcrumbs: {
    marginBottom: theme.spacing(2),
  },
  appHeader: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: theme.spacing(3),
    marginBottom: theme.spacing(3),
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
    borderLeft: '4px solid #e61616',
  },
  appTitle: {
    color: '#e61616',
    fontWeight: 700,
    marginBottom: theme.spacing(1),
  },
  appDescription: {
    color: '#666',
    fontSize: '1.1rem',
  },
  filterSection: {
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing(2),
    backgroundColor: '#ffffff',
    padding: theme.spacing(2),
    borderRadius: 8,
    marginBottom: theme.spacing(3),
    boxShadow: '0 1px 4px rgba(0, 0, 0, 0.1)',
  },
  filterControl: {
    minWidth: 200,
  },
  sectionCard: {
    height: 'auto',
    minHeight: 300,
    background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)',
    border: '1px solid #e0e0e0',
    borderRadius: 12,
    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
    '&:hover': {
      transform: 'translateY(-2px)',
      boxShadow: '0 6px 20px rgba(0, 0, 0, 0.12)',
    },
  },
  sectionHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: theme.spacing(2),
    padding: theme.spacing(1.5),
    backgroundColor: '#f8f9fa',
    borderRadius: 8,
    border: '1px solid #e0e0e0',
  },
  sectionHeaderLeft: {
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing(1),
  },
  sectionTitle: {
    fontWeight: 600,
    fontSize: '1.1rem',
  },
  sectionIcon: {
    fontSize: 24,
  },
  itemList: {
    padding: 0,
    maxHeight: 200,
    overflowY: 'auto',
  },
  listItem: {
    padding: theme.spacing(1),
    cursor: 'pointer',
    borderRadius: 6,
    margin: theme.spacing(0.5, 0),
    transition: 'all 0.2s ease',
    '&:hover': {
      backgroundColor: '#f0f8ff',
      transform: 'translateX(4px)',
    },
  },
  itemContent: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  itemInfo: {
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing(1),
  },
  itemText: {
    fontSize: '0.9rem',
  },
  statusIndicator: {
    width: 8,
    height: 8,
    borderRadius: '50%',
    marginRight: theme.spacing(1),
  },
  successIndicator: {
    backgroundColor: '#4caf50',
  },
  warningIndicator: {
    backgroundColor: '#ff9800',
  },
  errorIndicator: {
    backgroundColor: '#f44336',
  },
  pipelineChip: {
    height: 20,
    fontSize: '0.7rem',
    backgroundColor: '#4caf50',
    color: '#ffffff',
  },
  noPipelineChip: {
    height: 20,
    fontSize: '0.7rem',
    backgroundColor: '#f44336',
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
  },
  componentsIcon: {
    color: '#333',
  },
  hostingIcon: {
    color: '#ff9800',
  },
  securityIcon: {
    color: '#e61616',
  },
  otherIcon: {
    color: '#2196f3',
  },
}));

export const ManageAppsPage = () => {
  const classes = useStyles();
  const [selectedEnvironment, setSelectedEnvironment] = useState('All Environments');

  const environments = [
    'All Environments',
    'Production',
    'Staging',
    'Development',
    'Testing',
  ];

  const appData = {
    components: [
      { name: 'mytravelers-pi-frontend', repo: 'travelers/mytravelers-pi-frontend', hasPipeline: true, status: 'active' },
      { name: 'mytravelers-pi-backend', repo: 'travelers/mytravelers-pi-backend', hasPipeline: true, status: 'active' },
      { name: 'mytravelers-pi-database', repo: 'travelers/mytravelers-pi-db', hasPipeline: false, status: 'active' },
      { name: 'mytravelers-pi-config', repo: 'travelers/mytravelers-pi-config', hasPipeline: true, status: 'maintenance' },
      { name: 'mytravelers-pi-docs', repo: 'travelers/mytravelers-pi-docs', hasPipeline: false, status: 'active' },
    ],
    hosting: [
      { type: 'AWS Account', name: 'travelers-prod-pi', region: 'us-east-1', status: 'active' },
      { type: 'AWS Account', name: 'travelers-dev-pi', region: 'us-east-1', status: 'active' },
      { type: 'EKS Namespace', name: 'mytravelers-pi-prod', cluster: 'prod-east-1', status: 'healthy' },
      { type: 'EKS Namespace', name: 'mytravelers-pi-staging', cluster: 'staging-east-1', status: 'healthy' },
      { type: 'OCF Space', name: 'pi-production', foundation: 'travelers-prod', status: 'running' },
      { type: 'OCF Space', name: 'pi-development', foundation: 'travelers-dev', status: 'running' },
    ],
    security: [
      { type: 'Okta Authorizer', name: 'MyTravelers-PI-Auth', scope: 'pi.read,pi.write', status: 'active' },
      { type: 'Okta Client', name: 'mytravelers-pi-web', clientId: 'mtpi_web_client', status: 'active' },
      { type: 'Okta Client', name: 'mytravelers-pi-mobile', clientId: 'mtpi_mobile_client', status: 'active' },
      { type: 'Secret', name: 'pi-database-credentials', vault: 'prod-secrets', status: 'active' },
      { type: 'Secret', name: 'pi-api-keys', vault: 'prod-secrets', status: 'rotation-needed' },
    ],
    other: [
      { type: 'Generic ID', name: 'MTPI-APP-001', purpose: 'Application Identifier', status: 'active' },
      { type: 'Generic ID', name: 'MTPI-SVC-002', purpose: 'Service Identifier', status: 'active' },
      { type: 'Testing URL', name: 'staging.mytravelers-pi.internal', environment: 'Staging', status: 'active' },
      { type: 'Testing URL', name: 'dev.mytravelers-pi.internal', environment: 'Development', status: 'active' },
      { type: 'Testing URL', name: 'test.mytravelers-pi.local', environment: 'Local Testing', status: 'inactive' },
    ],
  };

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'active':
      case 'healthy':
      case 'running':
        return '#4caf50';
      case 'maintenance':
      case 'rotation-needed':
        return '#ff9800';
      case 'inactive':
      case 'error':
        return '#f44336';
      default:
        return '#666';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type.toLowerCase()) {
      case 'aws account':
        return <AwsIcon style={{ fontSize: 20, color: '#ff9800' }} />;
      case 'eks namespace':
        return <AwsIcon style={{ fontSize: 20, color: '#326ce5' }} />;
      case 'ocf space':
        return <OcfIcon style={{ fontSize: 20, color: '#2196f3' }} />;
      case 'okta authorizer':
      case 'okta client':
        return <OktaIcon style={{ fontSize: 20, color: '#007dc1' }} />;
      case 'secret':
        return <SecretIcon style={{ fontSize: 20, color: '#e61616' }} />;
      case 'generic id':
        return <IdIcon style={{ fontSize: 20, color: '#9c27b0' }} />;
      case 'testing url':
        return <TestIcon style={{ fontSize: 20, color: '#4caf50' }} />;
      default:
        return <LinkIcon style={{ fontSize: 20, color: '#666' }} />;
    }
  };

  const handleItemClick = (section: string, item: any) => {
    console.log(`Navigate to ${section}:`, item);
  };

  return (
    <div className={classes.container}>
      <Breadcrumbs className={classes.breadcrumbs}>
        <Link color="inherit" href="/manage-apps">
          Manage Apps
        </Link>
        <Typography color="textPrimary">MyTravelers PI</Typography>
      </Breadcrumbs>

      <div className={classes.filterSection}>
        <FilterIcon style={{ color: '#666' }} />
        <Typography variant="body1" style={{ color: '#666' }}>
          Environment:
        </Typography>
        <FormControl className={classes.filterControl}>
          <Select
            value={selectedEnvironment}
            onChange={(e) => setSelectedEnvironment(e.target.value as string)}
            style={{ fontSize: '14px' }}
          >
            {environments.map((env) => (
              <MenuItem key={env} value={env}>
                {env}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>

      <div className={classes.appHeader}>
        <Typography variant="h3" className={classes.appTitle}>
          MyTravelers PI
        </Typography>
        <Typography variant="body1" className={classes.appDescription}>
          Personal Insurance application providing policy management and customer self-service capabilities
        </Typography>
      </div>

      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Card className={classes.sectionCard}>
            <CardContent>
              <div className={classes.sectionHeader}>
                <div className={classes.sectionHeaderLeft}>
                  <GitHubIcon className={`${classes.sectionIcon} ${classes.componentsIcon}`} />
                  <Typography variant="h6" className={classes.sectionTitle}>
                    Components
                  </Typography>
                </div>
                <Chip 
                  label={appData.components.length} 
                  size="small" 
                  className={classes.countChip}
                />
              </div>
              <List className={classes.itemList}>
                {appData.components.map((component, index) => (
                  <React.Fragment key={component.name}>
                    <ListItem 
                      className={classes.listItem}
                      onClick={() => handleItemClick('component', component)}
                    >
                      <div className={classes.itemContent}>
                        <div className={classes.itemInfo}>
                          <div 
                            className={`${classes.statusIndicator} ${
                              component.status === 'active' ? classes.successIndicator : classes.warningIndicator
                            }`}
                          />
                          <GitHubIcon style={{ fontSize: 16, color: '#333' }} />
                          <ListItemText
                            primary={component.name}
                            secondary={component.repo}
                            classes={{ primary: classes.itemText }}
                          />
                          {component.hasPipeline ? (
                            <Chip 
                              label="Pipeline" 
                              size="small" 
                              className={classes.pipelineChip}
                              icon={<PipelineIcon style={{ fontSize: 14, color: '#ffffff' }} />}
                            />
                          ) : (
                            <Chip 
                              label="No Pipeline" 
                              size="small" 
                              className={classes.noPipelineChip}
                            />
                          )}
                        </div>
                        <LaunchIcon className={classes.linkIcon} />
                      </div>
                    </ListItem>
                    {index < appData.components.length - 1 && <Divider />}
                  </React.Fragment>
                ))}
              </List>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card className={classes.sectionCard}>
            <CardContent>
              <div className={classes.sectionHeader}>
                <div className={classes.sectionHeaderLeft}>
                  <AwsIcon className={`${classes.sectionIcon} ${classes.hostingIcon}`} />
                  <Typography variant="h6" className={classes.sectionTitle}>
                    Hosting Infrastructure
                  </Typography>
                </div>
                <Chip 
                  label={appData.hosting.length} 
                  size="small" 
                  className={classes.countChip}
                />
              </div>
              <List className={classes.itemList}>
                {appData.hosting.map((item, index) => (
                  <React.Fragment key={`${item.type}-${item.name}`}>
                    <ListItem 
                      className={classes.listItem}
                      onClick={() => handleItemClick('hosting', item)}
                    >
                      <div className={classes.itemContent}>
                        <div className={classes.itemInfo}>
                          <div 
                            className={`${classes.statusIndicator} ${classes.successIndicator}`}
                          />
                          {getTypeIcon(item.type)}
                          <ListItemText
                            primary={item.name}
                            secondary={`${item.type} • ${item.region || item.cluster || item.foundation}`}
                            classes={{ primary: classes.itemText }}
                          />
                        </div>
                        <LaunchIcon className={classes.linkIcon} />
                      </div>
                    </ListItem>
                    {index < appData.hosting.length - 1 && <Divider />}
                  </React.Fragment>
                ))}
              </List>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card className={classes.sectionCard}>
            <CardContent>
              <div className={classes.sectionHeader}>
                <div className={classes.sectionHeaderLeft}>
                  <SecurityIcon className={`${classes.sectionIcon} ${classes.securityIcon}`} />
                  <Typography variant="h6" className={classes.sectionTitle}>
                    Security
                  </Typography>
                </div>
                <Chip 
                  label={appData.security.length} 
                  size="small" 
                  className={classes.countChip}
                />
              </div>
              <List className={classes.itemList}>
                {appData.security.map((item, index) => (
                  <React.Fragment key={`${item.type}-${item.name}`}>
                    <ListItem 
                      className={classes.listItem}
                      onClick={() => handleItemClick('security', item)}
                    >
                      <div className={classes.itemContent}>
                        <div className={classes.itemInfo}>
                          <div 
                            className={`${classes.statusIndicator} ${
                              item.status === 'rotation-needed' ? classes.warningIndicator : classes.successIndicator
                            }`}
                          />
                          {getTypeIcon(item.type)}
                          <ListItemText
                            primary={item.name}
                            secondary={`${item.type} • ${item.scope || item.clientId || item.vault}`}
                            classes={{ primary: classes.itemText }}
                          />
                        </div>
                        <LaunchIcon className={classes.linkIcon} />
                      </div>
                    </ListItem>
                    {index < appData.security.length - 1 && <Divider />}
                  </React.Fragment>
                ))}
              </List>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card className={classes.sectionCard}>
            <CardContent>
              <div className={classes.sectionHeader}>
                <div className={classes.sectionHeaderLeft}>
                  <LinkIcon className={`${classes.sectionIcon} ${classes.otherIcon}`} />
                  <Typography variant="h6" className={classes.sectionTitle}>
                    Other
                  </Typography>
                </div>
                <Chip 
                  label={appData.other.length} 
                  size="small" 
                  className={classes.countChip}
                />
              </div>
              <List className={classes.itemList}>
                {appData.other.map((item, index) => (
                  <React.Fragment key={`${item.type}-${item.name}`}>
                    <ListItem 
                      className={classes.listItem}
                      onClick={() => handleItemClick('other', item)}
                    >
                      <div className={classes.itemContent}>
                        <div className={classes.itemInfo}>
                          <div 
                            className={`${classes.statusIndicator} ${
                              item.status === 'inactive' ? classes.errorIndicator : classes.successIndicator
                            }`}
                          />
                          {getTypeIcon(item.type)}
                          <ListItemText
                            primary={item.name}
                            secondary={`${item.type} • ${item.purpose || item.environment}`}
                            classes={{ primary: classes.itemText }}
                          />
                        </div>
                        <LaunchIcon className={classes.linkIcon} />
                      </div>
                    </ListItem>
                    {index < appData.other.length - 1 && <Divider />}
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