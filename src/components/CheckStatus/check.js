import React, { Component } from 'react'
import { Button,  Form, Message } from 'semantic-ui-react'
import TextField from "material-ui/TextField"
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';
import IconButton from 'material-ui/IconButton';
import ActionHome from 'material-ui/svg-icons/action/find-in-page';

class checkStatus extends Component {

  render() {
      return (
        <MuiThemeProvider>
          <Form action="/customer"
                method="post">
            <Form.Group widths='equal'>
                <Form.Field required>
                  <label> Check Status </label>
                  <TextField
                    name='referenceID'
                    placeholder='Reference ID'
                  />
                </Form.Field>
            </Form.Group>
            <IconButton 
              tooltip="Search"
              href="http://localhost:3001/StatusForm">
              <ActionHome />
            </IconButton>
          </Form>
        </MuiThemeProvider>
      )
  }
}

export default checkStatus
