import React from 'react';
import Main from '../../components/Main';

export default class From extends React.Component{
	state={
		firstName: '',
		lastName:'',
		userName:'',
		email:'',
	}

	change = e =>{
		this.setState({
			[e.target.name]: e.target.value
		});
	};

	onSubmit = e =>{
		e.preventDefault();
		console.log(this.state);
	}

	render() {
		return (
			<form>
					<input 
						name = "firstName"
						placeholder = "First name" 
						value = {this.state.firstName} 
						onChange = {e => this.change(e)}
					/>
					<input 
						name = "lastName"
						placeholder = "Last name" 
						value = {this.state.lastName} 
						onChange = {e => this.change(e)}
					/>
					<input 
						name = "userName"
						placeholder = "User name"
						value = {this.state.firstName} 
						onChange = {e => this.change(e)}
					/>
					<input 
						name = "email"
						placeholder="Email"
						value={this.state.email} 
						onChange={e => this.change(e)}
					/>
					<br />
					<button onClick = {e => this.onSubmit(e)}>Submit </button>
				</form>
		);
	}
}
