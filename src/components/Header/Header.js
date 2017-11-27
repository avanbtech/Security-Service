/* Header.js
** Holds the logic and base HTML and JavaScript for the header of the main page
*/

import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Header.scss';
import Link from '../Link';
import Navigation from '../Navigation';
import redbg from './res/textured-red-01-small.png'
import logo from './res/sfu-logo@2x.png'
import headerStrip from './res/header-strip.png'

function Header() {
  return (
    <div className={s.root}>
      <div className={s.container}>
        <Navigation className={s.nav} />
        <Link className={s.brand} to="/">
          <span className={s.brandTxt}>
            <img src={logo} style={ {width: 300, height: 46 } }/>
          </span>
        </Link>
        <div className={s.banner}>
          <h1 className={s.bannerTitle}>Security Request System</h1>
        </div>
        <div className={s.headerstrip}>
        </div>
        <div className={s.headerstripBG}>
        </div>
      </div>
    </div>
  );
}

export default withStyles(Header, s);
