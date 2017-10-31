import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './ServiceView.scss';
import { Table } from 'semantic-ui-react'

function OneServiceRequest({serviceRequest}) {

  return (
    <Table.Row>
      <Table.Cell><a href={'/ServiceView/' + serviceRequest.requestId}>{serviceRequest.requestId}</a></Table.Cell>
      <Table.Cell>{serviceRequest.date}</Table.Cell>
      <Table.Cell>{serviceRequest.requestBy}</Table.Cell>
      <Table.Cell>{serviceRequest.sfu_id}</Table.Cell>
      <Table.Cell>{serviceRequest.location}</Table.Cell>
      <Table.Cell>{serviceRequest.event_date}</Table.Cell>
    </Table.Row>
  );
}

export default withStyles(OneServiceRequest);
