import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Status.scss';
import Link from '../../components/Link';
import Form from '../../components/Form';
import Main from '../../components/Main';

function Status({ title }) {
  return (
    <div className={s.root}>
      <div className={s.container}>
        <h1>{title}</h1>
        <p>Check Status</p>
      </div>
      
    </div>
  );
}

Status.propTypes = { title: PropTypes.string.isRequired };

export default withStyles(Status, s);