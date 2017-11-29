/* SecurityViewHome.js
  Home page for security
*/

import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './SecurityViewHome.scss';
import SecurityViewMain from './SecurityViewMain.js';

function SecurityViewHome() {
  return (
    <div className={s.root}>
			<link rel="stylesheet"
				href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css"
			/>
      <div className={s.blur}>
      </div>
      <div className={s.container}>
        <SecurityViewMain className={s.main} />
      </div>
    </div>
  );
}

export default withStyles(SecurityViewHome, s);
