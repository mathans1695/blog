import React, { Component } from 'react';

import SVGLogoContainer from '../../Atoms/SVGLogoContainer/SVGLogoContainer';

import { link } from '../../../assets/inlineSVG/inlineSVG';

import './LinkEntityButton.css';

class LinkEntityButton extends Component {
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
				className='LinkEntityButton'
				onClick={this.handleClick}
			>
				<SVGLogoContainer 
					svg={link.svgsrc} 
					isActive={this.state.isActive}
					action='LINK'
					toolbar="top"
				/>
			</button>
		)
	}
}

export default LinkEntityButton;