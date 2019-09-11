/**
 *
 * FoodSiteDetail
 *
 */

import React, { memo } from 'react';
// import _ from 'lodash';
// import PropTypes from 'prop-types';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

// import axios from 'axios';

/* eslint-disable react/prefer-stateless-function */
class FoodSiteDetail extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      siteDetails: {},
    };
  }

  //   uncomment other component mount and delete this once we have fewer null results
  componentDidMount() {
    const res = {
      name: 'funkytown',
      open_from: 5,
      open_to: 8,
      open_time1: 6,
      close_time1: 9,
      sunday: true,
      monday: true,
      tuesday: true,
      wednesday: true,
      friday: true,
      saturday: false,
      snap: true,
      wic: true,
      fmnp: true,
      fresh_produce: false,
      mrfei_score: 152,
      food_bucks: false,
      open_to_spec_group: false,
      address: 'yer moms house',
      city: 'pgh',
      state: 'pa',
      zip_code: 12345,
      location_description: 'sassy',
    };
    this.setState({ siteDetails: res });
  }
  //   componentDidMount() {
  //     axios
  //       .get(`https://dev.stevesaylor.io/api/location/${this.props.siteId}/`)
  //       .then(res => this.setState({ siteDetails: res.data }));
  //   }

  render() {
    // return <div>{this.state.siteDetails.name}</div>;
    return (
      <div>
        <h1>{this.state.siteDetails.name}</h1>
        <small>
          {this.state.siteDetails.open_from} until
          {this.state.siteDetails.open_to}
        </small>
        <br />
        {/* how do open from-to, open close time 1, and open close time 2 relate? */}
        <small>
          {this.state.siteDetails.open_time1} until
          {this.state.siteDetails.close_time1}
        </small>
        <br />
        <FormGroup row>
          <FormControlLabel
            control={
              <Checkbox
                checked={!!this.state.siteDetails.sunday}
                color="primary"
                disabled
              />
            }
            label="Sunday"
            labelPlacement="top"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={!!this.state.siteDetails.monday}
                color="primary"
                disabled
              />
            }
            label="Monday"
            labelPlacement="top"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={!!this.state.siteDetails.tuesday}
                color="primary"
                disabled
              />
            }
            label="Tuesday"
            labelPlacement="top"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={!!this.state.siteDetails.wednesday}
                color="primary"
                disabled
              />
            }
            label="Wednesday"
            labelPlacement="top"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={!!this.state.siteDetails.thursday}
                color="primary"
                disabled
              />
            }
            label="Thursday"
            labelPlacement="top"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={!!this.state.siteDetails.friday}
                color="primary"
                disabled
              />
            }
            label="Friday"
            labelPlacement="top"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={!!this.state.siteDetails.saturday}
                color="primary"
                disabled
              />
            }
            label="Saturday"
            labelPlacement="top"
          />
        </FormGroup>
        <label>
          <input
            type="checkbox"
            checked={this.state.siteDetails.snap}
            disabled
          />
          Takes SNAP
        </label>
        <label>
          <input
            type="checkbox"
            checked={this.state.siteDetails.wic}
            disabled
          />
          Takes WIC
        </label>
        <label>
          <input
            type="checkbox"
            checked={this.state.siteDetails.fmnp}
            disabled
          />
          Takes FMNP
        </label>
        <label>
          <input
            type="checkbox"
            checked={this.state.siteDetails.food_bucks}
            disabled
          />
          Takes Food Bucks
        </label>
        <label>
          <input
            type="checkbox"
            checked={this.state.siteDetails.fresh_produce}
            disabled
          />
          Has Fresh Produce
        </label>
        <label>
          <input
            type="checkbox"
            checked={this.state.siteDetails.open_to_spec_group}
            disabled
          />
          Open to Special Groups
        </label>
        <h3>
          OMG check out this sweet mrfei score!!!!
          {this.state.siteDetails.mrfei_score}
        </h3>
        <p>Find this site at</p>
        <p>{this.state.siteDetails.address}</p>
        <p>{this.state.siteDetails.city}</p>
        <p>{this.state.siteDetails.state}</p>
        <p>{this.state.siteDetails.zip_code}</p>
        <i>
          This site has been declared{' '}
          {this.state.siteDetails.location_description}
        </i>
      </div>
    );
  }
}

export default memo(FoodSiteDetail);

// FoodSiteDetail.propTypes = {
//   siteId: PropTypes.string.isRequired,
// };