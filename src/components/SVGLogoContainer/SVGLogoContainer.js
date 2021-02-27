import React from 'react';

import './SVGLogoContainer.css';

function SVGLogoContainer(props) {
	const { svg, isActive, action } = props;
	const className = (
		isActive 
			? 'SVGLogoContainer SVGLogoContainer__active' 
			: 'SVGLogoContainer'
	)
	
	return (
		<div 
			className={className}
			data-action={action}
		>
			{ svg }
		</div>
	)
}

export default SVGLogoContainer;