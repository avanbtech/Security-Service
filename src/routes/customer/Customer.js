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
        <link rel="stylesheet"
        href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css"
        />
        <h1>Security Request Form</h1>
        <Form />
      </div>

    </div>
  );
}

Customer.propTypes = { title: PropTypes.string.isRequired };

export default withStyles(Customer, s);
