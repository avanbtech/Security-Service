import React, { Component } from 'react'
import { Button,  Form, Icon } from 'semantic-ui-react'
import TextField from "material-ui/TextField"
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import FlatButton from 'material-ui/FlatButton';

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
    const error = this.validate();
    if (error){
      e.preventDefault();
    }
  };


  render() {
      const { value } = this.state
      return (
        <MuiThemeProvider>
          <Form action="/status"
                method="post">
            <h2> Request Information </h2>
            <Form.Group widths='equal'>
              <TextField
                name='referenceID'
                placeholder='Reference ID'
                onChange={this.handleChange}
                errorText={this.state.referenceIDError}
              />
              <Form.Button onClick = {e => this.onSubmit(e)} animated >
                <Button.Content visible>Search</Button.Content>
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
