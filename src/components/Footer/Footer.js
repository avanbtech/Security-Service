
import React, {Component} from 'react';
import FontIcon from 'material-ui/FontIcon';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import IconLocationOn from 'material-ui/svg-icons/communication/location-on';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';

const recentsIcon = <FontIcon className="material-icons">restore</FontIcon>;
const favoritesIcon = <FontIcon className="material-icons">favorite</FontIcon>;
const nearbyIcon = <IconLocationOn />;

class BottomNavigationExampleSimple extends Component {
  state = {
    selectedIndex: 0,
  };

  select = (index) => this.setState({selectedIndex: index});

  render() {
    return (
	    <MuiThemeProvider> 
	     	<Paper zDepth={1}>
		        <BottomNavigation selectedIndex={this.state.selectedIndex}>
		          <BottomNavigationItem
		            label="Recents"
		            icon={recentsIcon}
		            onClick={() => this.select(0)}
		          />
		          <BottomNavigationItem
		            label="Favorites"
		            icon={favoritesIcon}
		            onClick={() => this.select(1)}
		          />
		          <BottomNavigationItem
		            label="Nearby"
		            icon={nearbyIcon}
		            onClick={() => this.select(2)}
		          />
		        </BottomNavigation>
      		</Paper>
	    </MuiThemeProvider> 
    );
  }
}

export default BottomNavigationExampleSimple;