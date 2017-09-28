import React, { PropTypes } from 'react';
import cx from 'classnames';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Main.scss';
import Link from '../Link';

function Main({ className }) {
  return (
    <div className={cx(s.root, className)} role="Main">
      <Link className={s.link} to="/Customer">Security Request Form</Link>
      <Link className={s.link} to="/Status">Check Request</Link>
    </div>
  );
}

Main.propTypes = {
  className: PropTypes.string,
};

export default withStyles(Main, s);
