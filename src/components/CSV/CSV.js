import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Header.scss';
import Link from '../Link';
import Navigation from '../Navigation';
import RaisedButton from 'material-ui/RaisedButton';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import ActionAndroid from 'material-ui/svg-icons/action/android';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';
import cx from 'classnames';
import withStyles from 'isomorphic-style-loader/lib/withStyles';


class CSVControl extends Component {

	render(){
		return(
			<MuiThemeProvider> 
		     	<Paper zDepth={1}>
			        <Link className={s.link} to="/Customer">
			          <FlatButton 
			            label="Fill in Request Page" 
			            style={style} fullWidth={true} 
			            backgroundColor='#B71C1C' 
			            labelStyle ={{color: '#FFEBEE'}}
			            hoverColor = '#F44336'
			          />
			        </Link>
	      		</Paper>
		    </MuiThemeProvider
		);
	}
}

export default CSVControl;