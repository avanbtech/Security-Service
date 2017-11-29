import React, { Component } from 'react';
import { Button,  Form, Message } from 'semantic-ui-react';
import TextField from "material-ui/TextField";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import DatePicker from 'material-ui/DatePicker';
import TimePicker from 'material-ui/TimePicker';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import SelectField from 'material-ui/SelectField';

const styles = {
  customWidth: {
    width: 600,
  },
};

class rejectionFormComponent extends Component {

  state = {

    reason:'';
    authorityPeople:'';
  }

    change = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  validate = () =>{

    if(this.state.reason.length < 0 )
    {
      isError = true;
      errors.rejectError = "please provide Rejection Reason";
    }
    else
    {
      errors.rejectError = "";
    }


    if(this.state.authorityPeople.length < 0 )
    {
      isError = true;
      errors.authorityPeopleError = "please enter name of authority";
    }
    else
    {
      errors.authorityPeopleError = "";
    }

  }

  handleChange = (e, { value }) => this.setState({ value })

  onSubmit = e =>{
    const error = this.validate();
    if (error){
      e.preventDefault();
    }
  };

  FormExampleSuccess = () => (
    <Form success>
      <Form.Input label='Email' placeholder='joe@schmoe.com' />
      <Message
        success
        header='Form Completed'
        content="You're all signed up for the newsletter"
      />
      <Button>Submit</Button>
    </Form>
  )

  render(){
    const { value } = this.state
    return{
      <MuiThemeProvider>
        <h2> Rejection Information </h2>
        <Form>
        <Form.Group widths='equal'>
              <Form.Field required>
                <label> Phone </label>
                  <TextField
                    fullWidth={true}
                    name='phone'
                    placeholder='XXX-XXX-XXXX'
                    onChange = {e => this.change(e)}
                    errorText={this.state.phoneError} />
                </Form.Field>
              <Form.Field>
              <label> Fax </label>
                <TextField
                  fullWidth={true}
                  name='fax'
                  label='Fax'
                  placeholder='XXX-XXX-XXXX'
                  onChange = {e => this.change(e)}
                  errorText={this.state.faxError} />
              </Form.Field>
          </Form.Group>
          <Form.Button onClick = {e => this.onSubmit(e)} onChange = {this.FormExampleSuccess}>Submit</Form.Button>
        </Form>
      </MuiThemeProvider>
    }
  }

}

export default rejectionFormComponent
