import React, { PropTypes, Component } from 'react';
import { Table } from 'semantic-ui-react'

export default class OneServiceRequest extends Component {
  render(){
    let exportGuardList = <p></p>;
    if(this.props.serviceRequest.status === 'Accepted') {
      exportGuardList =
        <a href={'/ServiceView/export_guard_list/' + this.props.serviceRequest.requestId}>
          PDF
        </a>;
    }
    return (
      <Table.Row>
        <Table.Cell><a href={'/ServiceView/' + this.props.serviceRequest.requestId}>{this.props.serviceRequest.requestId}</a></Table.Cell>
        <Table.Cell>{this.props.serviceRequest.date}</Table.Cell>
        <Table.Cell>{this.props.serviceRequest.status}</Table.Cell>
        <Table.Cell>{this.props.serviceRequest.requestBy}</Table.Cell>
        <Table.Cell>{this.props.serviceRequest.sfu_id}</Table.Cell>
        <Table.Cell>{this.props.serviceRequest.location}</Table.Cell>
        <Table.Cell>{this.props.serviceRequest.event_date}</Table.Cell>
        <Table.Cell>{exportGuardList}</Table.Cell>
      </Table.Row>
    );
  }
}
