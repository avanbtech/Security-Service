
import React, {Component} from 'react';
import FontIcon from 'material-ui/FontIcon';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import IconLocationOn from 'material-ui/svg-icons/communication/location-on';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';
 import Footer from 'grommet/components/Footer';

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
	   

		<Footer justify='between'>
		  <Title>
		    <s />
		     Title
		  </Title>
		  <Box direction='row'
		    align='center'
		    pad={{"between": "medium"}}>
		    <Paragraph margin='none'>
		      © 2016 Grommet Labs
		    </Paragraph>
		    <Menu direction='row'
		      size='small'
		      dropAlign={{"right": "right"}}>
		      <Anchor href='#'>
		        Support
		      </Anchor>
		      <Anchor href='#'>
		        Contact
		      </Anchor>
		      <Anchor href='#'>
		        About
		      </Anchor>
		    </Menu>
		  </Box>
		</Footer>
    );
  }
}

export default BottomNavigationExampleSimple;