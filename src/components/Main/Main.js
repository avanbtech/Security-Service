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
<<<<<<< 02971620e8a1fc650757ce1ad5de67d72f968d6a
<<<<<<< 5aff6323e1f694aa8a740cea36c64f04e737dbc1
=======
>>>>>>> little design of main page
 margin: 12,
 height : 50 ,
 labelAlign: 'right',
  
<<<<<<< 02971620e8a1fc650757ce1ad5de67d72f968d6a
=======
  margin: 12,
>>>>>>> change the main part css
=======
>>>>>>> little design of main page
};

const RaisedButtonExampleSimple = () => (
  <div>
    <MuiThemeProvider>
      <div>
<<<<<<< 09ff345ed40aac4f6244c79b5e39e5427685949a
<<<<<<< 5aff6323e1f694aa8a740cea36c64f04e737dbc1
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
=======
=======
        <br />
        <br />
>>>>>>> add background and afjust button
        <Link className={s.link} to="/Customer">
          <RaisedButton label="Fill in Request Page" style={style} fullWidth={true} backgroundColor='#B71C1C' labelStyle ={{color: '#FFEBEE'}}/>
        </Link>
        <Link className={s.link} to="/Status">
          <RaisedButton label="Check Request Page" style={style} fullWidth={true} backgroundColor='#B71C1C' labelStyle ={{color: '#FFEBEE'}}/>
        </Link>
        <Link className={s.link} to="/ServiceView">
<<<<<<< 09ff345ed40aac4f6244c79b5e39e5427685949a
          <RaisedButton label="Service View" style={style} fullWidth={true}/>
>>>>>>> change the main part css
=======
          <RaisedButton label="Service View" style={style} fullWidth={true} backgroundColor='#B71C1C' labelStyle ={{color: '#FFEBEE'}}/>
>>>>>>> add background and afjust button
        </Link>
        <FlatButton 
            label="explore as csv" 
            style={style} fullWidth={true} 
            backgroundColor='#B71C1C' 
            labelStyle ={{color: '#FFEBEE'}}
            hoverColor = '#F44336'
            //onclick here
            
          />
      </div>
    </MuiThemeProvider>
  </div>
);

export default RaisedButtonExampleSimple;