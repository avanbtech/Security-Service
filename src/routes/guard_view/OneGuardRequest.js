import React, { PropTypes, Component } from 'react';
import { Table } from 'semantic-ui-react'

export default class OneGuardRequest extends Component {
  render(){
    return (
      <Table.Row>
        <Table.Cell><a href={'/GuardView/' + this.props.guardRequest.dispatchNumber}>{this.props.guardRequest.dispatchNumber}</a></Table.Cell>
        <Table.Cell>{this.props.guardRequest.name}</Table.Cell>
        <Table.Cell>{this.props.guardRequest.telephone}</Table.Cell>
      </Table.Row>
    );
  }
}
