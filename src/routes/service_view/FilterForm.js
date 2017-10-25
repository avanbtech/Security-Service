import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './ServiceView.scss';
import OneServiceRequest from './OneServiceRequest';
import {Form} from 'semantic-ui-react'
import DatePicker from 'material-ui/DatePicker';


function FilterForm() {
  return (
    <Form action="/ServiceView" method="GET">
      <div className={s.filter}>
        <h4 className={s.filter_title}>Request Date</h4>
        <div className={s.filter}>
          <h4 className={s.filter_title}>Location</h4>
          <div className={s.filter_options}>
            <Form.Checkbox name = "include_burnaby" label='Burnaby' value="yes"/>
            <Form.Checkbox name = "include_surrey" label='Surrey' value="yes"/>
            <Form.Checkbox name = "include_vancouver" label='Vancouver' value="yes"/>
          </div>
        </div>
        <Form.Button>Refine</Form.Button>
    </Form>
);
}

export default withStyles(FilterForm, s);
