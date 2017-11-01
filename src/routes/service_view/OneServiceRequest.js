import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './ServiceView.scss';

function OneServiceRequest({serviceRequest}) {

  return (
    <tr>
      <td><a href={'/ServiceView/' + serviceRequest.requestId}>{serviceRequest.requestId}</a></td>
      <td>{serviceRequest.date}</td>
      <td>{serviceRequest.status}</td>
      <td>{serviceRequest.requestBy}</td>
      <td>{serviceRequest.sfu_id}</td>
      <td>{serviceRequest.location}</td>
      <td>{serviceRequest.event_date}</td>
    </tr>
  );
}

export default withStyles(OneServiceRequest, s);
