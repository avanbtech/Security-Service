import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Contact.scss';

function Contact({ title }) {
  return (
    <div className={s.root}>
      <div className={s.container}>
        <h1>{title}</h1>

        {/*This part of the code can be encapsulated better in a loop. A lot of duplicate code.*/}
        <p><b>Raymond Huang</b>: <i>xiruih@sfu.ca</i></p>
        <p><b>Junru Tao</b>: <i>junrut@sfu.ca</i></p>
        <p><b>Alex Zhang</b>: <i>cwzhang@sfu.ca</i></p>
        <p><b>Angel Singh</b>: <i>asa179@sfu.ca</i></p>
        <p><b>Lester Chee</b>: <i>lochee@sfu.ca</i></p>
        <p><b>Sankait Kumar</b>: <i>sankaitk@sfu.ca</i></p>
        <p><b>Jeff Yan</b>: <i>mingjiey@sfu.ca</i></p>
        {/*Add Pharah's real full name here:*/}
        <p><b>Pharah</b>: <i>fnobakht@sfu.ca</i></p>
        <p><b>Contact Everyone</b>: <i>373-gamma@sfu.ca</i></p>
      </div>
    </div>
  );
}

Contact.propTypes = { title: PropTypes.string.isRequired };

export default withStyles(Contact, s);
