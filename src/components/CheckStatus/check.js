import React, { Component } from 'react'
import { Button,  Form, Message, Icon } from 'semantic-ui-react'
import TextField from "material-ui/TextField"
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';
import IconButton from 'material-ui/IconButton';
import ActionHome from 'material-ui/svg-icons/action/find-in-page';

class checkStatus extends Component {
  state = {
    referenceID: '',
    referenceIDError:'',
    email:'',
    emailError:''
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
    if(this.state.email.length == 0){
      isError = true;
      errors.emailError = "Email should be provided";
    } else{
      errors.emailError = "";
    }
    this.setState({
        ...this.state,
        ...errors
    });
    return isError;
  }
  /*handleChange = (event) => {
    this.setState({
      referenceID: event.target.value,
      email: event.target.value
    });
  };
  */
  handleChange = e =>{
    this.setState({
      [e.target.name]: e.target.value
    });
  }
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
          <Form action={"/StatusForm/"+ this.state.referenceID + "/" +this.state.email}
                method="post"
                keyboar>
            <Form.Group widths='equal'>
                <Form.Field required>
                  <label> Reference ID </label>
                  <TextField
                    name='referenceID'
                    placeholder='Reference ID'
                    onChange={this.handleChange}
                    errorText={this.state.referenceIDError}
                  />

                </Form.Field>
                <Form.Field required>
                <label> email </label>
                  <TextField
                  name='email'
                  placeholder='email'
                  onChange={this.handleChange}
                  errorText={this.state.emailError}
                />

                </Form.Field>


            </Form.Group>
            <Form.Button onClick = {e => this.onSubmit(e)} animated >
              <Button.Content visible>Search</Button.Content>
              <Button.Content hidden>
                <Icon name='search' />
              </Button.Content>
            </Form.Button>
          </Form>
        </MuiThemeProvider>
      )
  }
}
export default checkStatus
