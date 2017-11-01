import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './StatusForm.scss';
import Link from '../../components/Link';
import StatusTable from '../../components/StatusTable';
import Main from '../../components/Main';
import FlatButton from 'material-ui/FlatButton';

function Status({ title }) {
  return (
    <div className={s.root}>
      <div className={s.container}>
        <h1 className={s.title}>Check Request Status</h1>
        <link rel="stylesheet"
        href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css"
        />
        <StatusTable />
      </div>

    </div>
  );
}

Status.propTypes = { title: PropTypes.string.isRequired };

export default withStyles(Status, s);
