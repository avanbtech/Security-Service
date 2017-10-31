import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './ServiceView.scss';
import OneServiceRequest from './OneServiceRequest';
import {Form} from 'semantic-ui-react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import DatePicker from 'material-ui/DatePicker';


function FilterForm({filterObject}) {
  const start_date = filterObject.start_date === '' ? "From" :  filterObject.start_date;
  const end_date = filterObject.end_date === '' ? "To" :  filterObject.end_date;

  return (
    <MuiThemeProvider>
            <Form action="/ServiceView" method="GET">
                <div className={s.filter}>
                    <h4 className={s.filter_title}>Request Date</h4>
                    <div className={s.filter_options}>
                            <DatePicker
                                hintText={start_date}
                                container="inline"
                                name="start_date"
                                textFieldStyle={{
                                    width: '100%',
                                }}
                            />
                            <DatePicker
                                hintText={end_date}
                                container="inline"
                                name="end_date"
                                textFieldStyle={{
                                    width: '100%',
                                }}
                            />
                    </div>
                </div>
                <div className={s.filter}>
                    <h4 className={s.filter_title}>Location</h4>
                    <div className={s.filter_options}>
                        <Form.Checkbox defaultChecked={filterObject.includeBurnaby}
                          name = "include_burnaby" label='Burnaby' value="yes"/>
                        <Form.Checkbox defaultChecked={filterObject.includeSurrey}
                          name = "include_surrey" label='Surrey' value="yes"/>
                        <Form.Checkbox defaultChecked={filterObject.includeVancouver}
                          name = "include_vancouver" label='Vancouver' value="yes"/>
                    </div>
                </div>
                <div className={s.button_container}>
                    <Form.Button>Refine</Form.Button>
                </div>
            </Form>
    </MuiThemeProvider>
  );
}

export default withStyles(FilterForm, s);
