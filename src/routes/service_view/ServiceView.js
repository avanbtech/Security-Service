import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './ServiceView.scss';
import OneServiceRequest from './OneServiceRequest';
import ServiceViewTable from './ServiceViewTable';
import FilterForm from './FilterForm';
import {Form} from 'semantic-ui-react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import DatePicker from 'material-ui/DatePicker';


function ServiceViewReq({serviceRequests, filterObject}) {
  var rows = [];
  for(var i = 0; i < serviceRequests.length; i++) {
    rows.push(<OneServiceRequest serviceRequest={
      serviceRequests[i]
    }/>);
  }
  return (
    <div className={s.root}>
      <div className={s.filter_container}>
        <FilterForm
          filterObject={filterObject}
        />
      </div>
      <div className={s.container}>
        <h1 className={s.title}>Service View</h1>
         <link rel="stylesheet"
          href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css"
        />
        <ServiceViewTable serviceRequests={serviceRequests} />
      </div>
    </div>
  );
}
export default withStyles(ServiceViewReq, s);

