import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './ServiceView.scss';

function OneServiceRequest({serviceRequest}) {

  return (
    <div>
      <h4>{serviceRequest.requestBy}</h4>
      <p>{serviceRequest.date}</p>
    </div>
  );
}

export default withStyles(OneServiceRequest, s);
