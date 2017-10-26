import React, { PropTypes, Component } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './ServiceView.scss';
import OneServiceRequest from './OneServiceRequest';
import { Table } from 'semantic-ui-react'
import _ from 'lodash'

var ROWS = [];

function ServiceViewReq ({serviceRequests}) {
  // var rows = [];
  for(var i = 0; i < serviceRequests.length; i++) {
    ROWS.push(<OneServiceRequest serviceRequest={
      serviceRequests[i]
    }/>);
  }
}

export default class ServiceView extends React.Component {
  state = {
    column: null,
    data: ROWS,
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

  render() {
    const { column, data, direction } = this.state

    return (
      <div className={s.root}>
        <div className={s.container}>
          <h1 className={s.title}>Service View</h1>
            <Table sortable celled fixed>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell sorted={column === 'requestId' ? direction : null} onClick={this.handleSort('requestId')}>
                    Request ID
                  </Table.HeaderCell>
                  <Table.HeaderCell sorted={column === 'date' ? direction : null} onClick={this.handleSort('date')}>
                    Date
                  </Table.HeaderCell>
                  <Table.HeaderCell sorted={column === 'requestedBy' ? direction : null} onClick={this.handleSort('requestedBy')}>
                    Requested By
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
                {_.map(data, ({ requestId, date, requestedBy, sfu_id, location, event_date }) => (
                  <Table.Row key={requestId}>
                    <Table.Cell>{requestId}</Table.Cell>
                    <Table.Cell>{date}</Table.Cell>
                    <Table.Cell>{requestedBy}</Table.Cell>
                    <Table.Cell>{sfu_id}</Table.Cell>
                    <Table.Cell>{location}</Table.Cell>
                    <Table.Cell>{event_date}</Table.Cell>
                  </Table.Row>
                ))}
              </Table.Body>
            </Table>
        </div>
      </div>
    )
  }
}

// function ServiceView({serviceRequests}) {
//   var rows = [];
//   for(var i = 0; i < serviceRequests.length; i++) {
//     rows.push(<OneServiceRequest serviceRequest={
//       serviceRequests[i]
//     }/>);
//   }
//   return (
//     <div className={s.root}>
//       <div className={s.container}>
//         <h1 className={s.title}>Service View</h1>
//         <table className={s.service_request_table}>
//           <tr>
//             <th>Request ID</th>
//             <th>Date</th>
//             <th>Requested By</th>
//             <th>SFU ID</th>
//             <th>Location</th>
//             <th>Event Date</th>
//           </tr>
//           {rows}
//         </table>
//       </div>
//     </div>
//   );
// }

// export default withStyles(ServiceView, s);
