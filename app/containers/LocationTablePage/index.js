/*
 * LocationTablePage
 *
 * This is a sortable searchable table of the available locations
 *
 */

import React from 'react';
import Grid from '@material-ui/core/Grid';
import { FormattedMessage } from 'react-intl';
import LocationTable from '../../components/LocationTable';
import messages from './messages';
import NavBar from '../../components/NavBar';

export default function LocationTablePage() {
  return (
    <Grid
      container
      direction="column"
      justify="space-around"
      alignItems="center"
    >
      <NavBar />
      <h1 className="headline">
        <FormattedMessage {...messages.header} />
      </h1>
      <LocationTable />
    </Grid>
  );
}
