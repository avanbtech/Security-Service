import React, { Component } from 'react'
import { Form } from 'semantic-ui-react'
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

  	render() {
	   	const { value } = this.state
	    return (
	      	<Form>
	      		
	      		<h2> Request Information </h2>
	        	<Form.Group widths='equal'>
	          		<Form.Input name='date' label='Date' placeholder='Date' onChange = {e => this.change(e)} />
	          		<Form.Select name='department' label='Department' options={options} placeholder='Department' />
	        	</Form.Group>
	        	<Form.Group widths='equal'>
	          		<Form.Input name='requestBy' label='Request By' placeholder='Request By' onChange = {e => this.change(e)} />
	          		<Form.Input name='id' label='SFU ID or BCDL' placeholder='SFU ID or BCDL' onChange = {e => this.change(e)} />
	        	</Form.Group>
	        	<Form.Group widths='equal'>
	          		<Form.Input name='phone' label='Phone' placeholder='Phone' onChange = {e => this.change(e)} />
	          		<Form.Input name='fax' label='Fax' placeholder='Fax' onChange = {e => this.change(e)} />
	          		<Form.Input name='email' label='Email' placeholder='Email' onChange = {e => this.change(e)} />
	        	</Form.Group>
	        	<Form.Input name='nameOfEvent' label='Type/Name of Event' placeholder='Type/Name of Event' onChange = {e => this.change(e)} />
	        	<Form.Group inline>
	        		{/* "value" in data package represent the state of this part */}
	          		<label>Licensed</label>
	          		<Form.Radio name='licensed' label='Yes' value='yes' checked={value === 'yes'} onChange={this.handleChange} />
	          		<Form.Radio name='licensed' label='No' value='no' checked={value === 'no'} onChange={this.handleChange} />
	        	</Form.Group>
	        	<Form.Group widths='equal'>
	          		<Form.Input name='location' label='Location of Event' placeholder='Location of Event' onChange = {e => this.change(e)} />
	          		<Form.Input name='numberOfAttendees' label='# of Attendees' placeholder='# of Attendees' onChange = {e => this.change(e)} />
	        	</Form.Group>
	        	<Form.Group widths='equal'>
	          		<Form.Input name='eventDate' label='Event Date' placeholder='Event Date' onChange = {e => this.change(e)} />
	          		<Form.Input name='time' label='Time(s)' placeholder='Time(s)' onChange = {e => this.change(e)} />
	        	</Form.Group>
	        	<Form.TextArea name='detail' label='Details' placeholder='Details of request(Please submit with photo of area and floor if applicable)' onChange = {e => this.change(e)}/>
	        	
	        	

	        	<h2> Payment Detail </h2>
	        	<Form.Input name='accountCode' label='Account Code' placeholder='Account Code' onChange = {e => this.change(e)} />
	        	<Form.Checkbox label='Please Invoice' /> {/* "did not intergrated into data package yet */}

	        	

	        	<h2> Authorization Detail </h2>
	        	<Form.Group widths='equal'>
	          		<Form.Input name='authorizedBy' label='Authorized By' placeholder='Authorized By' onChange = {e => this.change(e)} />
	          		<Form.Input name='authorizedID' label='SFU ID/BCDL' placeholder='SFU ID/BCDL' onChange = {e => this.change(e)} />
	        		<Form.Input name='authorizedDate' label='Date' placeholder='Date' onChange = {e => this.change(e)} />
	        	</Form.Group>
	        	<Form.Group widths='equal'>
	          		<Form.Input name='authorizedSignature' label='Signature' placeholder='Signature' onChange = {e => this.change(e)} />
	          		<Form.Input name='authorizedPhone' label='Phone' placeholder='Phone' onChange = {e => this.change(e)} />
	        	</Form.Group>

	        	<br></br>
	        	<Form.Checkbox label='I agree to the Terms and Conditions' />{/* "did not intergrated into data package yet */}
	        	<Form.Button onClick = {e => this.onSubmit(e)}>Submit</Form.Button>
	      	</Form>
    	)
  	}
}

export default FormExampleSubcomponentControl