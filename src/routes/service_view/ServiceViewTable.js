import React, { PropTypes, Component } from 'react';
import { Table } from 'semantic-ui-react'
import _ from 'lodash'
import OneServiceRequest from './OneServiceRequest';

export default class ServiceViewTable extends Component {

  constructor(props) {
    super(props);

    const serviceRequests = props.serviceRequests;
    const rows = [];
    for (let i = 0; i < serviceRequests.length; i++) {
      rows.push(<OneServiceRequest serviceRequest={
        serviceRequests[i]
      } />);
    }
    this.state = {
      column: null,
      data: rows,
      direction: null,
    };
  }

  handleSort = clickedColumn => () => {
    const { column, data, direction } = this.state

    if (column !== clickedColumn) {
      this.setState({
        column: clickedColumn,
        data: _.sortBy(data, [clickedColumn]),
        direction: 'ascending',
      })

      return
    }

    this.setState({
      data: data.reverse(),
      direction: direction === 'ascending' ? 'descending' : 'ascending',
    })
  }

  render() {
    const { column, data, direction } = this.state
	    return (
	      <Table sortable celled fixed>
	        <Table.Header>
	          <Table.Row>
	            <Table.HeaderCell sorted={column === 'requestId' ? direction : null} onClick={this.handleSort('requestId')}>
	              Request ID
	            </Table.HeaderCell>
	            <Table.HeaderCell sorted={column === 'date' ? direction : null} onClick={this.handleSort('date')}>
	              Date
	            </Table.HeaderCell>
	             <Table.HeaderCell sorted={column === 'status' ? direction : null} onClick={this.handleSort('status')}>
	              Status
	            </Table.HeaderCell>
	            <Table.HeaderCell sorted={column === 'requestBy' ? direction : null} onClick={this.handleSort('requestBy')}>
	              Request By
	            </Table.HeaderCell>
	            <Table.HeaderCell sorted={column === 'sfu_id' ? direction : null} onClick={this.handleSort('sfu_id')}>
	              SFU ID
	            </Table.HeaderCell>
	            <Table.HeaderCell sorted={column === 'location' ? direction : null} onClick={this.handleSort('location')}>
	              Location
	            </Table.HeaderCell>
	            <Table.HeaderCell sorted={column === 'event_date' ? direction : null} onClick={this.handleSort('event_date')}>
	              Event Date
	            </Table.HeaderCell>
	          </Table.Row>
	        </Table.Header>
	        <Table.Body>
            {this.state.data}
	        </Table.Body>
	      </Table>
	    )
	}
}