import React, { Component } from 'react';

import SVGLogoContainer from '../SVGLogoContainer/SVGLogoContainer';

import { italic } from '../../assets/inlineSVG/inlineSVG';

import './ItalicButton.css';

class ItalicButton extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isActive: false
		}
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(e) {
		e.preventDefault();
		
		this.props.toggleInlineStyle(e);
		this.setState({
			isActive: !this.state.isActive
		})
	}
	
	render() {
		return (
			<button 
				className='ItalicButton'
				onClick={this.handleClick}
			>
				<SVGLogoContainer 
					svg={italic.svgsrc} 
					isActive={this.state.isActive}
					action='ITALIC'
				/>
			</button>
		)
	}
}

export default ItalicButton;