import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './ServiceView.scss';
import OneServiceRequest from './OneServiceRequest';
import {Form} from 'semantic-ui-react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import DatePicker from 'material-ui/DatePicker';


function FilterForm({filterObject}) {
  return (
    <MuiThemeProvider>
            <Form action="/ServiceView" method="GET">
                <div className={s.filter}>
                    <h4 className={s.filter_title}>Request Date</h4>
                    <div className={s.filter_options}>
                            <DatePicker
                                hintText="From"
                                container="inline"
                                name="from_date"
                                defaultDate={filterObject.start_date}
                                textFieldStyle={{
                                    width: '100%',
                                }}
                            />
                            <DatePicker
                                hintText="To"
                                container="inline"
                                name="to_date"
                                defaultDate={filterObject.end_date}
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
