import React, { Component } from 'react'
import { Button,  Form, Message } from 'semantic-ui-react'
import TextField from "material-ui/TextField"
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';
import IconButton from 'material-ui/IconButton';
import ActionHome from 'material-ui/svg-icons/action/find-in-page';
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
          <Form action={"/StatusForm/"+ this.state.referenceID}
                method="post"
                keyboar>
            <Form.Group widths='equal'>
                <Form.Field required>
                  <label> Check Status </label>
                  <TextField
                    name='referenceID'
                    placeholder='Reference ID'
                    onChange={this.handleChange}
                    errorText={this.state.referenceIDError}
                  />
                </Form.Field>
            </Form.Group>
            <IconButton 
              tooltip="Search"
              onClick = {e => this.onSubmit(e)}
              href={"/StatusForm/"+ this.state.referenceID}
              method="post">
              Search
              <ActionHome />
            </IconButton>
          </Form>
        </MuiThemeProvider>
      )
  }
}
export default checkStatus