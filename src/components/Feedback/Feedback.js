/* Feedback.js
** Holds the logic and base HTML and JavaScript for the feedback page
*/

import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Feedback.scss';

function Feedback() {
  return (
    <div className={s.root}>
      <div className={s.container}>
        <a
          className={s.link}
          href="http://www.sfu.ca/srs/security.html"
        >SFU Security</a>
        <span className={s.spacer}>|</span>
        <a
          className={s.link}
          href="https://csil-git1.cs.surrey.sfu.ca/sankaitk/CMPT373-Gamma"
        >GitLab</a>
      </div>
    </div>
  );
}

export default withStyles(Feedback, s);
