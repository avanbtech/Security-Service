import React, { Component } from 'react'
import { Button, 	Form, Message } from 'semantic-ui-react'
import TextField from "material-ui/TextField"
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import DatePicker from 'material-ui/DatePicker';

const options = [
  { key: 'y', text: 'Yes', value: 'yes' },
  { key: 'n', text: 'No', value: 'no' },
]



class FormExampleSubcomponentControl extends Component {
  state = {
    date:'',
    dateError:'',
		department:'',
    departmentError:'',
		requestBy:'',
    requestByError:'',
		id:'',
    idError:'',
		phone:'',
    phoneError:'',
		fax:'',
    faxError:'',
		email:'',
    emailError:'',
		nameOfEvent:'',
    nameOfEventError:'',
		location:'',
    locationError:'',
		numberOfAttendees:'',
    numberOfAttendeesError:'',
		eventDate:'',
    eventDateEroor:'',
		time:'',
    timeError:'',
		detail:'',
    detailError:'',
		accountCode:'',
    accountCodeError:'',
		authorizedBy:'',
    authorizedByError:'',
		authorizedID:'',
    authorizedIDError:'',
		authorizedDate:'',
    authorizedDateError:'',
		authorizedSignature:'',
    authorizedSignatureError:'',
		authorizedPhone:'',
    authorizedPhoneError:''
	}


	change = e =>{
    console.log("OnChange called");
    this.props.onChange({[e.target.name]: e.target.value});
		this.setState({
			[e.target.name]: e.target.value
		});
	}

	validate = () => {
    let isError = false;
    const errors = {};

    if (this.state.requestBy.length < 3 ){
      isError = true;
      errors.requestByError = "Full name should be provided";
    }

    // TODO: validate date, request date shoud be equal or bigger than today

    // TODO: validate SFU ID

    if (this.state.phone.length < 10){
      isError = true;
      errors.phoneError = "Phone number should be a 10 digit number";
    }

    if (isError){
      console.log('setting state');
      this.setState({
        ...this.state,
        ...errors
      });
      console.log(this.state);
    }
    return isError;
  };

	onSubmit = e =>{
		e.preventDefault();
		const error = this.validate();
		if (!error){
      console.log(this.state);
    }
	};


	handleChange = (e, { value }) => this.setState({ value })

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


  	render() {
	   	const { value } = this.state
	    return (
        <MuiThemeProvider>
	      	<Form action="/customer"
                method="post">
	      		<h2> Request Information </h2>
	        	<Form.Group widths='equal'>
	        		<Form.Field required>
	        			<label> Date </label>
	          			<DatePicker
                    fullWidth={true}
                    type="text"
                    placeholder='Date'
                    onChange = {e => this.change(e)}
                    errorText={this.state.dateError}/>
	          		</Form.Field>
	          		<Form.Field required>
	        			<label> Department </label>
	          			<Form.Select
                    name='department'
                    options={options}
                    placeholder='Department'
                    errorText={this.state.departmentError} />
	          		</Form.Field>
	        	</Form.Group>
	        	<Form.Group widths='equal'>
	        		<Form.Field required>
	        			<label> Request By </label>
	          			<TextField
                    fullWidth={true}
                    type="text"
                    name='requestBy'
                    value={this.state.requestBy}
                    placeholder='Request By'
                    onChange = {e => this.change(e)}
                    errorText={this.state.requestByError}/>
	          		</Form.Field>
	          		<Form.Field required>
	        			<label> SFU ID or BCDL </label>
	          			<TextField
                    fullWidth={true}
                    type="text"
                    name='id'
                    placeholder='SFU ID or BCDL'
                    onChange = {e => this.change(e)}
                    errorText={this.state.idError} />
	          		</Form.Field>
	        	</Form.Group>
	        	<Form.Group widths='equal'>
	        		<Form.Field required>
	        			<label> Phone </label>
	          			<TextField
                    fullWidth={true}
                    name='phone'
                    placeholder='Phone'
                    onChange = {e => this.change(e)}
                    errorText={this.state.phoneError} />
	          		</Form.Field>
              <Form.Field>
              <label> Fax </label>
	          		<TextField
                  fullWidth={true}
                  name='fax'
                  label='Fax'
                  placeholder='Fax'
                  onChange = {e => this.change(e)}
                  errorText={this.state.faxError} />
              </Form.Field>
	          		<Form.Field required>
	        			<label> Email </label>
	          			<TextField
                    fullWidth={true}
                    name='email'
                    placeholder='Email'
                    onChange = {e => this.change(e)}
                    errorText={this.state.emailError} />
	          		</Form.Field>
	        	</Form.Group>
	        	<Form.Field required>
	        		<label>  Type/Name of Event </label>
	        		<TextField
                fullWidth={true}
                name='nameOfEvent'
                placeholder='Type/Name of Event'
                onChange = {e => this.change(e)}
                errorText={this.state.nameOfEventError} />
	        	</Form.Field>
	        	<Form.Field required>
	        		<Form.Group inline>
	        		{/* "value" in data package represent the state of this part */}
		          		<label> Licensed </label>
		          		<Form.Radio name='licensed' label='Yes' value='yes' checked={value === 'yes'} onChange={this.handleChange} />
		          		<Form.Radio name='licensed' label='No' value='no' checked={value === 'no'} onChange={this.handleChange} />
		       		</Form.Group>
		       	</Form.Field>
	        	<Form.Group widths='equal'>
	        		<Form.Field required>
		          		<label> Location of Event </label>
	          			<TextField
                    fullWidth={true}
                    name='location'
                    placeholder='Location of Event'
                    onChange = {e => this.change(e)}
                    errorText={this.state.locationError} />
	          		</Form.Field>
	          		<Form.Field required>
		          		<label> # of Attendees </label>
	          			<TextField
                    fullWidth={true}
                    name='numberOfAttendees'
                    placeholder='# of Attendees'
                    onChange = {e => this.change(e)}
                    errorText={this.state.numberOfAttendeesError} />
	          		</Form.Field>
	        	</Form.Group>
	        	<Form.Group widths='equal'>
	        		<Form.Field required>
		          		<label> Event Date </label>
	          			<DatePicker
                    fullWidth={true}
                    name='eventDate'
                    placeholder='Event Date'
                    onChange = {e => this.change(e)}
                    errorText={this.state.eventDateEroor} />
	          		</Form.Field>
	          		<Form.Field required>
		          		<label> Time(s) </label>
	          			<TextField
                    fullWidth={true}
                    name='time'
                    placeholder='Time(s)'
                    onChange = {e => this.change(e)}
                    errorText={this.state.timeError} />
	          		</Form.Field>
	        	</Form.Group>
	        	<Form.TextArea
              name='detail'
              label='Details'
              placeholder='Details of request(Please submit with photo of area and floor if applicable)'
              onChange = {e => this.change(e)}
              errorText={this.state.detailError} />
	        	<h2> Payment Detail </h2>
	        	<Form.Field required>
		          	<label> Account Code </label>
	        		<TextField
                fullWidth={true}
                name='accountCode'
                placeholder='Account Code'
                onChange = {e => this.change(e)}
                errorText={this.state.accountCodeError} />
	        	</Form.Field>
	        	<Form.Checkbox label='Please Invoice' /> {/* "did not intergrated into data package yet */}



	        	<h2> Authorization Detail </h2>
	        	<Form.Group widths='equal'>
	        		<Form.Field required>
		          		<label> Authorized By </label>
	          			<TextField
                    fullWidth={true}
                    name='authorizedBy'
                    placeholder='Authorized By'
                    onChange = {e => this.change(e)}
                    errorText={this.state.authorizedByError} />
	          		</Form.Field>
	          		<Form.Field required>
		          		<label> SFU ID/BCDL </label>
	          			<TextField
                    fullWidth={true}
                    name='authorizedID'
                    placeholder='SFU ID/BCDL'
                    onChange = {e => this.change(e)}
                    errorText={this.state.authorizedIDError} />
	          		</Form.Field>
					<Form.Field required>
		          		<label> Date </label>
	        			<TextField
                  fullWidth={true}
                  name='authorizedDate'
                  placeholder='Date'
                  onChange = {e => this.change(e)}
                  errorText={this.state.authorizedDateError} />
	        		</Form.Field>
	        	</Form.Group>
	        	<Form.Group widths='equal'>
	        		<Form.Field required>
		          		<label> Signature </label>
	          			<TextField
                    fullWidth={true}
                    name='authorizedSignature'
                    placeholder='Signature'
                    onChange = {e => this.change(e)}
                    errorText={this.state.authorizedSignatureError} />
	          		</Form.Field>
	          		<Form.Field required>
		          		<label> Phone </label>
	          			<TextField
                    fullWidth={true}
                    name='authorizedPhone'
                    placeholder='Phone'
                    onChange = {e => this.change(e)}
                    errorText={this.state.authorizedPhoneError} />
	          		</Form.Field>
	        	</Form.Group>

	        	<br></br>
	        	<Form.Field required>
	        		<Form.Group inline>
	        			<Form.Checkbox />
		          		<label> I agree to the Terms and Conditions </label>
	        			{/* "did not intergrated into data package yet */}
	        		</Form.Group>
	        	</Form.Field>
	        	<Form.Button onClick = {e => this.onSubmit(e)} onChange = {this.FormExampleSuccess}>Submit</Form.Button>


	      	</Form>
        </MuiThemeProvider>
    	)
  	}
}

export default FormExampleSubcomponentControl
