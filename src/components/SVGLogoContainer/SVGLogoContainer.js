import React from 'react';

import './SVGLogoContainer.css';

function SVGLogoContainer(props) {
	const { svg, isActive, action, addClass } = props;
	const defaultClassName = (
		addClass
			? 'SVGLogoContainer SVGLogoContainer--bgWhite'
			: 'SVGLogoContainer'
	)
	
	const className = (
		isActive 
			? `${defaultClassName} SVGLogoContainer__active`
			: defaultClassName
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