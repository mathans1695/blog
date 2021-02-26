import React, { Component } from 'react';

import SVGLogoContainer from '../SVGLogoContainer/SVGLogoContainer';

import { bold } from '../../assets/inlineSVG/inlineSVG';

import './BoldButton.css';

class BoldButton extends Component {
	constructor(props) {
		super(props);
	}
	
	render() {
		return (
			<div className='BoldButton'>
				<SVGLogoContainer 
					svg={bold.svgsrc} 
					isActive={false}
				/>
			</div>
		)
	}
}

export default BoldButton;