// Show a button that people can click to choose when they get redirected
// Keep track of state so we can a variable for control flow of the redirection 
// ONLY render the <Navigate /> component when that variable is true 

import { Component } from "react";
import { Navigate } from "react-router-dom";

export default class RedirectHomeButton extends Component {
	constructor(props){
		super(props);

		this.state = {
			shouldRedirect: false
		}
	}

	render(){
		return(
			<div>
				<button onClick={() => this.setState({shouldRedirect: true})}>
					Return Home 
				</button>
				{this.state.shouldRedirect && <Navigate to="/" /> }
			</div>
		)
	}
}