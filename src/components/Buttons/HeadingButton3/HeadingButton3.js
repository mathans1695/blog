import React, { Component } from 'react';

import SVGLogoContainer from '../../Atoms/SVGLogoContainer/SVGLogoContainer';

import { heading_3 } from '../../../assets/inlineSVG/inlineSVG';

import './HeadingButton3.css';

class HeadingButton3 extends Component {
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
				className='HeadingButton3'
				onClick={this.handleClick}
			>
				<SVGLogoContainer 
					svg={heading_3.svgsrc}
					isActive={this.state.isActive}
					action='heading-three'
				/>
			</button>
		)
	}
}

export default HeadingButton3;