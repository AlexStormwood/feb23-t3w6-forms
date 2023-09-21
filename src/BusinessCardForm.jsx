import { Component } from "react";


export default class BusinessCardForm extends Component {
	constructor(){
		super();

		this.state = {
			name: this.props.name,
			email: this.props.email
		}
	}

	render(){
		return(
			<form>
				<label for="nameInput" >Name:</label>
				<input type="text" name="nameInput" id="nameInput" />
			</form>
		)
	}
}