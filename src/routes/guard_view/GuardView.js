import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './GuardView.scss';
import OneGuardRequest from './OneGuardRequest';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Icon, Label, Menu, Table } from 'semantic-ui-react';

function Guards({guardRequests}) {
    var rows = [];
     if(guardRequests != null){
        for(var i = 0; i < guardRequests.length; i++) {
            rows.push(<OneGuardRequest guardRequest={
                guardRequests[i]
            }/>);
        }
    }
  return (


    <div className={s.root}>
        <div className={s.container}>
        <h1 className={s.title}>Guards</h1>
        <link rel="stylesheet"
        href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css"
        />
      <MuiThemeProvider>
        <Table celled>
        <Table.Header>
            <Table.Row>
            <Table.HeaderCell>Dispatch Number</Table.HeaderCell>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>Telephone</Table.HeaderCell>
            </Table.Row>
        </Table.Header>

        <Table.Body>
        {rows}
        </Table.Body>
        </Table>
        </MuiThemeProvider>

        </div>

    </div>
  );
}
export default withStyles(Guards, s);
