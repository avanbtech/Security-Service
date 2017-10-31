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

import s from './Main.scss';
import Link from '../Link';






const style = {
 margin: 12,
 height : 50 ,
 labelAlign: 'right',

};

const RaisedButtonExampleSimple = () => (
  <div>
    <MuiThemeProvider>
      <div>
        <br />
        <br />
        <Link className={s.link} to="/Customer">
          <FlatButton 
            label="Fill in Request Page" 
            style={style} fullWidth={true} 
            backgroundColor='#B71C1C' 
            labelStyle ={{color: '#FFEBEE'}}
            hoverColor = '#F44336'
          />
        </Link>
        <Link className={s.link} to="/Status">
          <FlatButton 
            label="Check Request Page" 
            style={style} fullWidth={true} 
            backgroundColor='#B71C1C' 
            labelStyle ={{color: '#FFEBEE'}}
            hoverColor = '#F44336'
          />
        </Link>
        <Link className={s.link} to="/ServiceView">
          <FlatButton 
            label="Service View" 
            style={style} fullWidth={true} 
            backgroundColor='#B71C1C' 
            labelStyle ={{color: '#FFEBEE'}}
            hoverColor = '#F44336'
          />
        </Link>
        <Link className={s.link} to="/CSV">
          <FlatButton 
              label="explore as csv" 
              style={style} fullWidth={true} 
              backgroundColor='#B71C1C' 
              labelStyle ={{color: '#FFEBEE'}}
              hoverColor = '#F44336'
              //onclick here
            />
          </Link>

      </div>
    </MuiThemeProvider>
  </div>
);

export default RaisedButtonExampleSimple;