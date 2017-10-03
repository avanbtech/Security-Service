import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Home.scss';
import Link from '../../components/Link';
import Main from '../../components/Main';

function Home() {
  return (
    <div className={s.root}>
      <div className={s.container}>
        <h1 className={s.title}>Security Request System</h1>
        <Main className={s.main} />
      </div>
    </div>
  );
}

export default withStyles(Home, s);
