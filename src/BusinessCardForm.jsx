import { Component } from "react";


export default class BusinessCardForm extends Component {
	constructor(props){
		super(props);

		this.state = {
			name: this.props.name,
			email: this.props.email
		}
	}

	handleChangeInput = (event) => {
		// pass in the form input data 
		// call the parent setState function 

		this.props.setParentState(event.target.name, event.target.value);
	}

	render(){
		return(
			<form>
				{/* htmlFor instead of for for the JSX compiler */}
				<label htmlFor="name" >Name:</label>
				<input type="text" name="name" id="nameInput" 
				value={this.props.name} 
				onChange={this.handleChangeInput}
				/>
			</form>
		)
	}
}