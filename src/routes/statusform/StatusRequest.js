import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './StatusForm.scss';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Icon, Label, Menu, Table } from 'semantic-ui-react';
function StatusRequest({statusRequest}) {

  return (
    <MuiThemeProvider>
    <Table celled>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Reference ID</Table.HeaderCell>
          <Table.HeaderCell>SFU ID</Table.HeaderCell>
          <Table.HeaderCell>Status</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        <Table.Row>
          <Table.Cell>{statusRequest.requestID}</Table.Cell>
          <Table.Cell>{statusRequest.sfu_id}</Table.Cell>
          <Table.Cell>{statusRequest.status}</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
    </MuiThemeProvider>
  );
}
export default withStyles(StatusRequest, s);
