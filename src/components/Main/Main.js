import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import ActionAndroid from 'material-ui/svg-icons/action/android';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';
import cx from 'classnames';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import Paper from 'material-ui/Paper';

import s from './Main.scss';
import Link from '../Link';

import formicon from '../../../form.png';
import statusicon from '../../../status.png';
import lockicon from '../../../lock.png';
import exporticon from '../../../export.png';


const style = {
  height: 450,
  width: 320,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
};

const MainPage = () => (
  <div className={s.root}>
    <link rel="stylesheet"
        href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css"
    />
    <MuiThemeProvider>
      <div>
        <br />
        <br />
        <div className={s.box}>
          <div className={s.icon}>
            <img src={formicon} height={165} width={165} />
          </div>
          <div className={s.description}>
            Complete an online application form to request security services.
          </div>
          <Link className={s.link} to="/Customer">
            <FlatButton
              label = "Make a Request"
              backgroundColor = 'rgba(0, 0, 0, 0.1)'
              labelStyle = {{color: '#FFEBEE'}}
              hoverColor = 'rgba(116, 21, 27, 0.6)'
            />
          </Link>
        </div>
        <div className = {s.box}>
          <div className={s.icon}>
            <img src={statusicon} height={160} width={160} paddingLeft={2} />
          </div>
          <div className={s.description}>
            Check the current status of a previously submitted request (Accepted, Rejected, Pending).
          </div>
          <Link className = {s.link} to="/Status">
            <FlatButton
              label ="Check Your Request"
              backgroundColor = 'rgba(0, 0, 0, 0.39)'
              labelStyle = {{color: '#FFEBEE'}}
              hoverColor = '#a6192e'
            />
          </Link>
        </div>
        <div className = {s.box}>
          <div className={s.icon}>
            <img src={lockicon} height={155} width={155} />
          </div>
          <div className={s.description}>
            Restricted - authorization required.
          </div>
          <Link className = {s.link} to="/ServiceView">
            <FlatButton
              label = "Service View"
              backgroundColor = 'rgba(0, 0, 0, 0.39)'
              labelStyle = {{color: '#FFEBEE'}}
              hoverColor = 'rgba(116, 21, 27, 0.78)'
            />
          </Link>
        </div>
        <div className={s.box}>
          <div className={s.icon}>
            <img src={exporticon} height={145} width={145} />
          </div>
          <div className={s.description}>
            Export a request information in CSV format.
          </div>
          <Link className={s.link} to="/CSV">
            <FlatButton
                label = "Export Data Demo"
                backgroundColor = 'rgba(0, 0, 0, 0.39)'
                labelStyle ={{color: '#FFEBEE'}}
                hoverColor = 'rgba(116, 21, 27, 0.78)'
                //onclick here
              />
          </Link>
        </div>
      </div>
    </MuiThemeProvider>
  </div>
);

export default withStyles(MainPage,s);
