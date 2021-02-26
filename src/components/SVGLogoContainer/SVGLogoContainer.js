import React from 'react';

import './SVGLogoContainer.css';

function SVGLogoContainer(props) {
	const { svg, isActive } = props;
	
	return (
		isActive
			? (
				<div className='SVGLogoContainer SVGLogoContainer__active'>
					{ svg }
				</div> 
			)
			: (
				<div className='SVGLogoContainer'>
					{ svg }
				</div>
			)
	)
}

export default SVGLogoContainer;