import withStyles from 'isomorphic-style-loader/lib/withStyles';
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
import TextField from "material-ui/TextField"

import React, { Component } from 'react'
import { Button,  Form, Icon } from 'semantic-ui-react'


class checkStatus extends Component {

  state = {
    referenceID: '',
    referenceIDError:''
  }

  validate = () => {
    let isError = false;
    const errors = {};

    var validId = /^\d{2,}-\d{4}$/;
    if(this.state.referenceID.replace(/\s/g, "").length == 0 || !this.state.referenceID.match(validId)){
      isError = true;
      errors.referenceIDError = "Reference ID should be provided";
    }
    else {
      errors.referenceIDError = "";
    }

    this.setState({
      ...this.state,
      ...errors
    });
    return isError;
  }

  handleChange = (event) => {
    this.setState({
      referenceID: event.target.value,
    });
  };

  onSubmit = e =>{
    const error = false;
    if (error){
      e.preventDefault();
    }
  };


  render() {
    const { value } = this.state
    return (
      <MuiThemeProvider>
        <Form action="/CSV"
              method="post">
          <h2>Export Request</h2>
          <Form.Group widths='equal'>
            <TextField
              name='referenceID'
              placeholder='Request Reference ID'
              onChange={this.handleChange}
              errorText={this.state.referenceIDError}
            />
            <Form.Button onClick = {e => this.onSubmit(e)} animated >
              <Button.Content visible>Export Data</Button.Content>
              <Button.Content hidden>
                <Icon name='search' />
              </Button.Content>
            </Form.Button>
          </Form.Group>
        </Form>
      </MuiThemeProvider>
    )
  }
}

export default checkStatus
