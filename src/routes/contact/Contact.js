import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Contact.scss';

function Contact({ title }) {
  return (
    <div className={s.root}>
      <div className={s.container}>
        <h1>{title}</h1>
        <p>Raymond Huang xiruih@sfu.ca</p>
        <p>Junru Tao junrut@sfu.ca</p>
      </div>
    </div>
  );
}

Contact.propTypes = { title: PropTypes.string.isRequired };

export default withStyles(Contact, s);
