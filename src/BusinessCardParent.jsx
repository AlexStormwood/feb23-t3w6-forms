import {Component} from "react";

import BusinessCardDisplay from "./BusinessCardDisplay";

export default class BusinessCardParent extends Component {
	constructor(){
		super();
	}

	render(){
		return(
			<div>
				<BusinessCardDisplay></BusinessCardDisplay>
			</div>
		)
	}
}

// import elephant from "react";
// class BlahBlah extends elephant.Component {
// 	constructor(){

// 	}
// }
