/* Main.js
** Holds the logic and base HTML and JavaScript for the Main/Default page
*/

import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Main.scss';
import Link from '../Link';
import formicon from './res/form.png';
import statusicon from './res/status.png';
import lockicon from './res/lock.png';
import exporticon from './res/export.png';

const MainPage = () => (
  <div className={s.root}>
    <link rel="stylesheet"
        href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css"
    />
    <div className={s.gradientBG}>
      <MuiThemeProvider>
        <div className={s.container1}>
          <div className={s.box}>
            <div className={s.formicon}>
              <img src={formicon} height={165} width={165} />
            </div>
            <div className={s.description}>
              Complete an online application form to request security services.
            </div>
            <Link className={s.link} to="/Customer">
              <FlatButton
                label = "Make a Request"
                backgroundColor = 'rgba(0, 0, 0, 0)'
                labelStyle = {{color: '#FFEBEE'}}
                hoverColor = 'rgba(116, 21, 27, 0.6)'
                width = {100}
              />
            </Link>
          </div>
          <div className = {s.box}>
            <div className={s.statusicon}>
              <img src={statusicon} height={159} width={160} />
            </div>
            <div className={s.description}>
              Check the current status of a previously submitted request. <br /> (Accepted, Rejected, Pending)
            </div>
            <Link className = {s.link} to="/Status">
              <FlatButton
                label ="Check Status"
                backgroundColor = 'rgba(0, 0, 0, 0)'
                labelStyle = {{color: '#FFEBEE'}}
                hoverColor = 'rgba(116, 21, 27, 0.6)'
                width = {100}
              />
            </Link>
          </div>
        </div>
      </MuiThemeProvider>
    </div>
  </div>
);

export default withStyles(MainPage,s);
