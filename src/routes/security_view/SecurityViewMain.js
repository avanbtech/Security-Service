/* SecurityViewMain.js
  Holds the logic and base HTML and JavaScript for the Main/Default page on the security side
*/

import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './SecurityViewMain.scss';
import Link from '../../components/Link';
import lockicon from '../../components/Main/res/lock.png';
import exporticon from '../../components/Main/res/export.png';

const SecurityViewMain = () => (
  <div className={s.root}>
    <link rel="stylesheet"
        href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css"
    />
    <div className={s.gradientBG}>
      <MuiThemeProvider>
        <div className={s.container1}>
          <div className = {s.box}>
            <div className={s.lockicon}>
              <img src={lockicon} height={165} width={165} />
            </div>
            <div className={s.description}>
              View all requests.
            </div>
            <Link className = {s.link} to="/ServiceView">
              <FlatButton
                label = "Service View"
                backgroundColor = 'rgba(0, 0, 0, 0)'
                labelStyle = {{color: '#FFEBEE'}}
                hoverColor = 'rgba(116, 21, 27, 0.6)'
                width = {100}
              />
            </Link>
          </div>
          <div className={s.box}>
            <div className={s.exporticon}>
              <img src={exporticon} height={170} width={170} />
            </div>
            <div className={s.description}>
              Export a single request's information in CSV format.
            </div>
            <Link className={s.link} to="/CSV">
              <FlatButton
                  label = "Export Data"
                  backgroundColor = 'rgba(0, 0, 0, 0)'
                  labelStyle ={{color: '#FFEBEE'}}
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

export default withStyles(SecurityViewMain,s);
