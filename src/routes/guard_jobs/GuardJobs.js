import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './GuardJobs.scss';
import OneJob from './OneJob';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Icon, Label, Menu, Table } from 'semantic-ui-react';

function GuardsJobs({guardJobs}) {
    var rows = [];

     if(guardJobs != null){
        for(var i = 0; i < guardJobs.length; i++) {
            rows.push(<OneJob guardJob={
                guardJobs[i]
            }/>);
        }
        console.log(rows);
    }
  return (

    <div className={s.root}>
        <div className={s.container}>
        <h1 className={s.title}>Jobs</h1>
        <link rel="stylesheet"
        href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css"
        />
      <MuiThemeProvider>
        <Table celled>
        <Table.Header>
            <Table.Row>
            <Table.HeaderCell>Reference ID</Table.HeaderCell>
            <Table.HeaderCell>Location</Table.HeaderCell>
            <Table.HeaderCell>Start Date</Table.HeaderCell>
            <Table.HeaderCell>End Date</Table.HeaderCell>
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
export default withStyles(GuardsJobs, s);
