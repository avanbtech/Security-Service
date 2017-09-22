import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Header.scss';
import Link from '../Link';
import Navigation from '../Navigation';

function Header() {
  return (
    <div className={s.root}>
      <div className={s.container}>
        <Navigation className={s.nav} />
        <Link className={s.brand} to="/">
          <img />
          <span className={s.brandTxt}>SFU</span>
        </Link>
        <div className={s.banner}>
          <h1 className={s.bannerTitle}>Security Request System</h1>
          <p className={s.bannerDesc}>Some startup page</p>
        </div>
      </div>
    </div>
  );
}

export default withStyles(Header, s);
