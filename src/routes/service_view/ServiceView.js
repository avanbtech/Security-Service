import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './ServiceView.scss';
import OneServiceRequest from './OneServiceRequest';

function ServiceView({serviceRequests}) {

  /*
  var rows = [];
  rows.push(<OneServiceRequest serviceRequest={
    {
      requestBy: 'John',
      date: '2017-10-12'
    }
  }/>);
  rows.push(<OneServiceRequest serviceRequest={
    {
      requestBy: 'Mary',
      date: '2016-08-12'
    }
  }/>);
  */
  var rows = [];
  for(var i = 0; i < serviceRequests.length; i++) {
    rows.push(<OneServiceRequest serviceRequest={
      serviceRequests[i]
    }/>);
  }
  return (
    <div className={s.root}>
      <div className={s.container}>
        <h1 className={s.title}>Service View</h1>
        <div>{rows}</div>
      </div>
    </div>
  );
}

export default withStyles(ServiceView, s);
