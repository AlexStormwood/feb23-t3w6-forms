// 3 pages to link:
// / -- homepage 
// /about -- about page 
// /about/contact - contact page 

import { Link } from "react-router-dom";

export default function Navbar(props){
	return (
		<nav>
			<h3>Navbar</h3>
			<ul>
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/about">About</Link>
				</li>
				<li>
					<Link to="/about/contact">Contact</Link>
				</li>
			</ul>
		</nav>
	)
}