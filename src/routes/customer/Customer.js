import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Customer.scss';
import Link from '../../components/Link';

function Customer({ title }) {
  return (
    <div className={s.root}>
      <div className={s.container}>
        <h1>{title}</h1>
        <p>Security System Form</p>
      </div>
    </div>
  );
}

Customer.propTypes = { title: PropTypes.string.isRequired };

export default withStyles(Customer, s);
