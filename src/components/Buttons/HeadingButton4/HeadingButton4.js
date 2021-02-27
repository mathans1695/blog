import React, { Component } from 'react';

import SVGLogoContainer from '../../Atoms/SVGLogoContainer/SVGLogoContainer';

import { heading_4 } from '../../../assets/inlineSVG/inlineSVG';

import './HeadingButton4.css';

class HeadingButton4 extends Component {
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
				className='HeadingButton4'
				onClick={this.handleClick}
			>
				<SVGLogoContainer 
					svg={heading_4.svgsrc} 
					isActive={this.state.isActive}
					action='heading-four'
					toolbar="top"
				/>
			</button>
		)
	}
}

export default HeadingButton4;