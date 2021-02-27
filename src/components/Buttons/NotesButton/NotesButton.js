import React, { Component } from 'react';

import SVGLogoContainer from '../../Atoms/SVGLogoContainer/SVGLogoContainer';

import { notes } from '../../../assets/inlineSVG/inlineSVG';

import './NotesButton.css';

class NotesButton extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isActive: false
		}
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(e) {
		e.preventDefault();
		
		this.setState({
			isActive: !this.state.isActive
		})
	}
	
	render() {
		return (
			<button
				className='NotesButton'
				onClick={this.handleClick}
			>
				<SVGLogoContainer 
					svg={notes.svgsrc}
					isActive={this.state.isActive}
					action='notes'
					addClass={true}
				/>
			</button>
		)
	}
}

export default NotesButton;