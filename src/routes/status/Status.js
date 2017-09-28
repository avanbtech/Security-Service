import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

{/*Imports the scss page used to style this page*/}
import s from './Status.scss';

{/*Imports some components used in this page*/}
import Link from '../../components/Link';
import Form from '../../components/Form';
import Main from '../../components/Main';

{/*Status page to check the current status of a request that a user has submitted? URL: /status */}
function Status({ title }) {
  return (
    <div className={s.root}>
      <div className={s.container}>
        <h1>{title}</h1>

{/*Create a loop to display each request the user has submitted so far*/}
        <ul>

        <li><p><Link className={s.link} to="/StatusForm">Check status of 1st request</Link></p></li>
        <li><p><Link className={s.link} to="/StatusForm">Check status of 2nd request</Link></p></li>
        <li><p><Link className={s.link} to="/StatusForm">Check status of 3rd request</Link></p></li>

        </ul>
      </div>

    </div>
  );
}

Status.propTypes = { title: PropTypes.string.isRequired };

export default withStyles(Status, s);
