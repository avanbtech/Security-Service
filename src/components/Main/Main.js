import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Main.scss';
import Link from '../Link';
import formicon from '../../../form.png';
import statusicon from '../../../status.png';
import lockicon from '../../../lock.png';
import exporticon from '../../../export.png';

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
          <div className = {s.box}>
            <div className={s.lockicon}>
              <img src={lockicon} height={165} width={165} />
            </div>
            <div className={s.description}>
              Restricted - authorization required.
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
                  //onclick here
                />
            </Link>
          </div>
        </div>
      </MuiThemeProvider>
    </div>
  </div>
);

export default withStyles(MainPage,s);
