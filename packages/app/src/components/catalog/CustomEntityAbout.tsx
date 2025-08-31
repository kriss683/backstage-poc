import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Card,
  CardContent,
  Typography,
  Chip,
  Box,
  Avatar,
  Grid,
} from '@material-ui/core';
import {
  Person as OwnerIcon,
  Schedule as LifecycleIcon,
  Label as TypeIcon,
  Language as SystemIcon,
  Description as DescriptionIcon,
} from '@material-ui/icons';
import { useEntity } from '@backstage/plugin-catalog-react';

const useStyles = makeStyles((theme) => ({
  aboutCard: {
    background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)',
    border: '1px solid #e0e0e0',
    borderRadius: 12,
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
    marginBottom: theme.spacing(3),
  },
  cardContent: {
    padding: theme.spacing(3),
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: theme.spacing(2),
    gap: theme.spacing(2),
  },
  entityAvatar: {
    backgroundColor: '#e61616',
    color: '#ffffff',
    width: 56,
    height: 56,
    fontSize: '1.5rem',
    fontWeight: 600,
  },
  titleSection: {
    flex: 1,
  },
  entityName: {
    color: '#000000',
    fontWeight: 700,
    fontSize: '1.5rem',
    marginBottom: theme.spacing(0.5),
  },
  entityType: {
    color: '#666',
    fontSize: '0.9rem',
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing(0.5),
  },
  infoGrid: {
    marginTop: theme.spacing(2),
  },
  infoItem: {
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing(1),
    padding: theme.spacing(1),
    backgroundColor: '#f8f9fa',
    borderRadius: 8,
    border: '1px solid #e0e0e0',
  },
  infoIcon: {
    fontSize: 20,
    color: '#e61616',
  },
  infoLabel: {
    fontWeight: 600,
    color: '#333',
    minWidth: 80,
  },
  infoValue: {
    color: '#666',
  },
  description: {
    marginTop: theme.spacing(2),
    padding: theme.spacing(2),
    backgroundColor: '#f0f8ff',
    borderRadius: 8,
    borderLeft: '4px solid #e61616',
  },
  descriptionText: {
    color: '#333',
    lineHeight: 1.6,
  },
  tagContainer: {
    display: 'flex',
    gap: theme.spacing(1),
    flexWrap: 'wrap',
    marginTop: theme.spacing(1),
  },
  tag: {
    backgroundColor: '#e61616',
    color: '#ffffff',
    fontSize: '0.75rem',
    height: 24,
  },
}));

export const CustomEntityAbout = () => {
  const classes = useStyles();
  const { entity } = useEntity();

  const metadata = entity.metadata;
  const spec = entity.spec || {};

  const getEntityInitials = (name: string) => {
    return name
      .split(/[-_\s]/)
      .map(word => word.charAt(0).toUpperCase())
      .slice(0, 2)
      .join('');
  };

  const tags = metadata.tags || [];
  const description = metadata.description || 'No description available';
  const owner = (spec as any).owner || 'Unknown';
  const lifecycle = (spec as any).lifecycle || 'Unknown';
  const system = (spec as any).system || 'Unknown';

  return (
    <Card className={classes.aboutCard}>
      <CardContent className={classes.cardContent}>
        <div className={classes.header}>
          <Avatar className={classes.entityAvatar}>
            {getEntityInitials(metadata.name)}
          </Avatar>
          <div className={classes.titleSection}>
            <Typography variant="h5" className={classes.entityName}>
              {metadata.title || metadata.name}
            </Typography>
            <div className={classes.entityType}>
              <TypeIcon style={{ fontSize: 16, color: '#666' }} />
              {entity.kind} • {(spec as any).type || 'service'}
            </div>
          </div>
        </div>

        <Grid container spacing={2} className={classes.infoGrid}>
          <Grid item xs={12} sm={6} md={3}>
            <div className={classes.infoItem}>
              <OwnerIcon className={classes.infoIcon} />
              <Typography variant="body2" className={classes.infoLabel}>
                Owner:
              </Typography>
              <Typography variant="body2" className={classes.infoValue}>
                {owner}
              </Typography>
            </div>
          </Grid>
          
          <Grid item xs={12} sm={6} md={3}>
            <div className={classes.infoItem}>
              <LifecycleIcon className={classes.infoIcon} />
              <Typography variant="body2" className={classes.infoLabel}>
                Lifecycle:
              </Typography>
              <Typography variant="body2" className={classes.infoValue}>
                {lifecycle}
              </Typography>
            </div>
          </Grid>
          
          <Grid item xs={12} sm={6} md={3}>
            <div className={classes.infoItem}>
              <SystemIcon className={classes.infoIcon} />
              <Typography variant="body2" className={classes.infoLabel}>
                System:
              </Typography>
              <Typography variant="body2" className={classes.infoValue}>
                {system}
              </Typography>
            </div>
          </Grid>
          
          <Grid item xs={12} sm={6} md={3}>
            <div className={classes.infoItem}>
              <DescriptionIcon className={classes.infoIcon} />
              <Typography variant="body2" className={classes.infoLabel}>
                Version:
              </Typography>
              <Typography variant="body2" className={classes.infoValue}>
                {metadata.annotations?.['backstage.io/version'] || 'N/A'}
              </Typography>
            </div>
          </Grid>
        </Grid>

        {description && (
          <div className={classes.description}>
            <Typography variant="body1" className={classes.descriptionText}>
              {description}
            </Typography>
          </div>
        )}

        {tags.length > 0 && (
          <div className={classes.tagContainer}>
            {tags.map((tag, index) => (
              <Chip
                key={index}
                label={tag}
                size="small"
                className={classes.tag}
              />
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
};