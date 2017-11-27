/* Navigation.js
** Holds the logic and base HTML and JavaScript for the Navigation pane above the main page
*/

import React, { PropTypes } from 'react';
import cx from 'classnames';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Navigation.scss';
import Link from '../Link';

function Navigation({ className }) {
  return (
    <div className={cx(s.root, className)} role="navigation">
      <Link className={s.link} to="/contact">Contact</Link>
      <span className={s.spacer}> | </span>
      <a href = "https://cas.sfu.ca/cas/login?service=http://localhost:3000/login">HELLO </a>
      <Link className={cx(s.link, s.highlight)} to="/casredirect">Security Management Staff Login</Link>
    </div>
  );
}

Navigation.propTypes = {
  className: PropTypes.string,
};

export default withStyles(Navigation, s);
