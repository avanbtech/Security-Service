import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './CSV.scss';
import Link from '../../components/Link';
import Main from '../../components/Main';
import CSV from '../../components/CSV';


function CSVfunc() {
  return (
    <div className="CSV">
      <div className={s.root}>
        <div className={s.container}>
          <link rel="stylesheet"
                href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css"
          />
          <CSV />
        </div>
      </div>
    </div>
  );
}

export default withStyles(CSVfunc, s);
