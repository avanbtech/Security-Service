import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './RequestView.scss';

function NotFound() {
  return (
    <div>
      <p>Request not found.</p>
    </div>
  );
}

export default withStyles(NotFound, s);
