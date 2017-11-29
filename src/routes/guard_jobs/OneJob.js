import React, { PropTypes, Component } from 'react';
import { Table } from 'semantic-ui-react';

export default class OneGuardRequest extends Component {
  render(){
    return (
      <Table.Row>
        <Table.Cell>{this.props.guardJob.accessID}</Table.Cell>
        <Table.Cell>{this.props.guardJob.location}</Table.Cell>
      
      </Table.Row>
    );
  }
}
