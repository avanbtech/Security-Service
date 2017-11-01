import React, { PropTypes, Component } from 'react';
import { Table } from 'semantic-ui-react'
import _ from 'lodash'
import OneServiceRequest from './OneServiceRequest';

export default class ServiceViewTable extends Component {

  constructor(props) {
    super(props);

    this.sortData = this.sortData.bind(this);

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

  sortData(fieldName) {
    return function (a,b) {
      if(!fieldName in a.props.serviceRequest){
        console.log('Field ' + fieldName + ' not found in object');
        console.log(a.props.serviceRequest);
        return -1;
      }
      return (a.props.serviceRequest[fieldName] < b.props.serviceRequest[fieldName]) ?
        -1 :
        (a.props.serviceRequest[fieldName] > b.props.serviceRequest[fieldName]) ? 1 : 0;
    }
  }

  handleSort = clickedColumn => () => {
    const { column, data, direction } = this.state

    if (column !== clickedColumn) {
      console.log('Sorting by ' + clickedColumn);
     /*
      const newData = _.sortBy(this.state.data, [function (item) {
        console.log('Item state: item.states[column]');
        return item.state[column];
      }]);
      */
      const newData = data.sort(this.sortData(clickedColumn));
      console.log('New data: ');
      console.log(newData);
      this.setState({
        column: clickedColumn,
        data: newData,
        direction: 'ascending',
      })
      return;
    }

    console.log('Data: ');
    console.log(data);
    this.setState({
      data: data.reverse(),
      direction: direction === 'ascending' ? 'descending' : 'ascending',
    })
  }

/*TODO: Object properties not mapping correctly - need to fix*/
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

