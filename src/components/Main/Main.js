import React, { Component } from 'react';

import Navbar from '.././Navbar/Navbar';
import DraftEditor from '.././DraftEditor/DraftEditor';

import './Main.css';

class Main extends Component {
	constructor(props) {
		super(props);
	}
	
	render() {
		return (
			<div className='Main'>
				<Navbar />
				<DraftEditor />
			</div>
		)
	}
}

export default Main;