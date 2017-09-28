import React, { PropTypes } from 'react';
import cx from 'classnames';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Main.scss';
import Link from '../Link';

function Main({ className }) {
  return (
    <div className={cx(s.root, className)} role="Main">
    <ul>

    <li><Link className={s.link} to="/Customer">Security Request Form</Link></li>

      {/*To be moved potentially depending where this will be used*/}
      <li><Link className={s.link} to="/Status">Check Security Requests</Link></li> 

      </ul>
    </div>
  );
}

Main.propTypes = {
  className: PropTypes.string,
};

export default withStyles(Main, s);
