import React, { Component } from 'react';
import { Icon, Label, Menu, Table } from 'semantic-ui-react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const TableExamplePagination = () => (
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
        <Table.Cell></Table.Cell>
        <Table.Cell></Table.Cell>
        <Table.Cell></Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>
  </MuiThemeProvider>
)

export default TableExamplePagination
