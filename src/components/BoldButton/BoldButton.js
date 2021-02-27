import React, { Component } from 'react';

import SVGLogoContainer from '../SVGLogoContainer/SVGLogoContainer';

import { bold } from '../../assets/inlineSVG/inlineSVG';

import './BoldButton.css';

class BoldButton extends Component {
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
				className='BoldButton'
				onClick={this.handleClick}
			>
				<SVGLogoContainer 
					svg={bold.svgsrc} 
					isActive={this.state.isActive}
					action='BOLD'
				/>
			</button>
		)
	}
}

export default BoldButton;