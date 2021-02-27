import React from 'react';

import { determineClassName } from './helper/determineClassName';

import './SVGLogoContainer.css';

function SVGLogoContainer(props) {
	const { 
		svg,
		isActive,
		action,
		changeBackground,
		toolbar
	} = props;
	
	const className = determineClassName(toolbar, changeBackground, isActive);
	
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