import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Login.scss';

function Login({ title }) {
  return (
    <div className={s.root}>
      <div className={s.container}>
        <h1>{title}</h1>
        <p>Currently do not have SFU API for Logging in</p>
      </div>
    </div>
  );
}

Login.propTypes = { title: PropTypes.string.isRequired };

export default withStyles(Login, s);
