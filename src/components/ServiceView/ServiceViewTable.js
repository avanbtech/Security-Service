import React, { PropTypes, Component } from 'react';
import { Table } from 'semantic-ui-react'
import _ from 'lodash'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import OneServiceRequest from '../../routes/service_view/OneServiceRequest';

var ROWS = [];

export default class ServiceViewTable extends Component {

	state = {
    column: null,
    data: null,
    direction: null,
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

 //  ServiceView ({serviceRequests}) {
	//   for(var i = 0; i < serviceRequests.length; i++) {
	//     ROWS.push(<OneServiceRequest serviceRequest={
	//       serviceRequests[i]
	//     }/>);
	//   }

	//   this.setState({
	//   	data: ROWS,
	//   })

	//   return
	// }

  render() {
  	// this.ServiceView()
    const { column, data, direction } = this.state
    var serviceRequests = {serviceRequests}
    // ServiceView({serviceRequests}) {
		  // var rows = [];
		  for(var i = 0; i < serviceRequests.length; i++) {
		    ROWS.push(<OneServiceRequest serviceRequest={
		      serviceRequests[i]
		    }/>);
		    this.setState({
		      data: ROWS,
   		 	})
		  }
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
	          {_.map(data, ({ requestId, date, requestBy, sfu_id, location, event_date }) => (
	            <Table.Row key={requestId}>
	            	{ROWS}
	            </Table.Row>
	          ))}
	        </Table.Body>
	      </Table>
	    )
	}
}

/*
<Table.Cell>{requestId}</Table.Cell>
<Table.Cell>{date}</Table.Cell>
<Table.Cell>{requestBy}</Table.Cell>
<Table.Cell>{sfu_id}</Table.Cell>
<Table.Cell>{location}</Table.Cell>
<Table.Cell>{event_date}</Table.Cell>
export default ServiceViewTable */