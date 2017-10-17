import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './ServiceView.scss';

function ServiceView() {
  var text = "Services are viewed here";
  return (
    <div className={s.root}>
      <div className={s.container}>
        <h1 className={s.title}>Service View</h1>
        <h3>{text}</h3>
      </div>
    </div>
  );
}

export default withStyles(ServiceView, s);
