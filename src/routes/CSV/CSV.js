import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Home.scss';
import Link from '../../components/Link';
import Main from '../../components/Main';



function CSV() {
  return (
    <div className="CSV">
      <div className={s.root}>
        <div className={s.container}>
          
          <CSV />
        </div>
      </div>
    </div>
  );
}

export default withStyles(CSV, s);
