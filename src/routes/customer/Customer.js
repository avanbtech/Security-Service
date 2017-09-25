import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Customer.scss';
import Link from '../../components/Link';
import Form from '../../components/Form';
import Main from '../../components/Main';

function Customer({ title }) {
  return (
    <div className={s.root}>
      <div className={s.container}>
        <h1>{title}</h1>
        <p>Security System Form</p>
        <p><Form /></p>
      </div>
      
    </div>
  );
}

Customer.propTypes = { title: PropTypes.string.isRequired };

export default withStyles(Customer, s);
