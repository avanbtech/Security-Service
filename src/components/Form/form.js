import React, { Component } from 'react'
import { Button, 	Form, Message } from 'semantic-ui-react'
import s from './form.scss'

const options = [
  { key: 'y', text: 'Yes', value: 'yes' },
  { key: 'n', text: 'No', value: 'no' },
]



class FormExampleSubcomponentControl extends Component {
  state = {
  		date:'',
		department:'',
		requestBy:'',
		id:'',
		phone:'',
		fax:'',
		email:'',
		nameOfEvent:'',
		location:'',
		numberOfAttendees:'',
		eventDate:'',
		time:'',
		detail:'',
		accountCode:'',
		authorizedBy:'',
		authorizedID:'',
		authorizedDate:'',
		authorizedSignature:'',
		authorizedPhone:''
	}
	

	change = e =>{
		this.setState({
			[e.target.name]: e.target.value
		});
	}
	

	onSubmit = e =>{
		e.preventDefault();
		console.log(this.state);
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
	      	<Form>
	      		
	      		<h2> Request Information </h2>
	        	<Form.Group widths='equal'>
	        		<Form.Field required>
	        			<label> Date </label>
	          			<Form.Input name='date' placeholder='Date' onChange = {e => this.change(e)} />
	          		</Form.Field>
	          		<Form.Field required>
	        			<label> Department </label>
	          			<Form.Select name='department' options={options} placeholder='Department' />
	          		</Form.Field>
	        	</Form.Group>
	        	<Form.Group widths='equal'>
	        		<Form.Field required>
	        			<label> Request By </label>
	          			<Form.Input name='requestBy' placeholder='Request By' onChange = {e => this.change(e)} />
	          		</Form.Field>
	          		<Form.Field required>
	        			<label> SFU ID or BCDL </label>
	          			<Form.Input name='id' placeholder='SFU ID or BCDL' onChange = {e => this.change(e)} />
	          		</Form.Field>	
	        	</Form.Group>
	        	<Form.Group widths='equal'>
	        		<Form.Field required>
	        			<label> Phone </label>
	          			<Form.Input name='phone' placeholder='Phone' onChange = {e => this.change(e)} />
	          		</Form.Field>
	          		<Form.Input name='fax' label='Fax' placeholder='Fax' onChange = {e => this.change(e)} />
	          		<Form.Field required>
	        			<label> Email </label>
	          			<Form.Input name='email' placeholder='Email' onChange = {e => this.change(e)} />
	          		</Form.Field>
	        	</Form.Group>
	        	<Form.Field required>
	        		<label>  Type/Name of Event </label>
	        		<Form.Input name='nameOfEvent' placeholder='Type/Name of Event' onChange = {e => this.change(e)} />
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
	          			<Form.Input name='location' placeholder='Location of Event' onChange = {e => this.change(e)} />
	          		</Form.Field>
	          		<Form.Field required>
		          		<label> # of Attendees </label>
	          			<Form.Input name='numberOfAttendees' placeholder='# of Attendees' onChange = {e => this.change(e)} />
	          		</Form.Field>
	        	</Form.Group>
	        	<Form.Group widths='equal'>
	        		<Form.Field required>
		          		<label> Event Date </label>
	          			<Form.Input name='eventDate' placeholder='Event Date' onChange = {e => this.change(e)} />
	          		</Form.Field>
	          		<Form.Field required>
		          		<label> Time(s) </label>
	          			<Form.Input name='time' placeholder='Time(s)' onChange = {e => this.change(e)} />
	          		</Form.Field>
	        	</Form.Group>
	        	<Form.TextArea name='detail' label='Details' placeholder='Details of request(Please submit with photo of area and floor if applicable)' onChange = {e => this.change(e)}/>
	        	
	        	

	        	<h2> Payment Detail </h2>
	        	<Form.Field required>
		          	<label> Account Code </label>
	        		<Form.Input name='accountCode' placeholder='Account Code' onChange = {e => this.change(e)} />
	        	</Form.Field>
	        	<Form.Checkbox label='Please Invoice' /> {/* "did not intergrated into data package yet */}

	        	

	        	<h2> Authorization Detail </h2>
	        	<Form.Group widths='equal'>
	        		<Form.Field required>
		          		<label> Authorized By </label>
	          			<Form.Input name='authorizedBy' placeholder='Authorized By' onChange = {e => this.change(e)} />
	          		</Form.Field>
	          		<Form.Field required>
		          		<label> SFU ID/BCDL </label>
	          			<Form.Input name='authorizedID' placeholder='SFU ID/BCDL' onChange = {e => this.change(e)} />
	          		</Form.Field>
					<Form.Field required>
		          		<label> Date </label>
	        			<Form.Input name='authorizedDate' placeholder='Date' onChange = {e => this.change(e)} />
	        		</Form.Field>
	        	</Form.Group>
	        	<Form.Group widths='equal'>
	        		<Form.Field required>
		          		<label> Signature </label>
	          			<Form.Input name='authorizedSignature' placeholder='Signature' onChange = {e => this.change(e)} />
	          		</Form.Field>
	          		<Form.Field required>
		          		<label> Phone </label>
	          			<Form.Input name='authorizedPhone' placeholder='Phone' onChange = {e => this.change(e)} />
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
    	)
  	}
}

export default FormExampleSubcomponentControl