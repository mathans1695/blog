import React, { Component } from 'react';

import SVGLogoContainer from '../../Atoms/SVGLogoContainer/SVGLogoContainer';

import { plus } from '../../../assets/inlineSVG/inlineSVG';

import './PlusButton.css';

class PlusButton extends Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(e) {
		e.preventDefault();
		
		this.props.toggleToolbar(e);
	}
	
	render() {
		const { isClosed } = this.props;
		const className = (
			!isClosed
			? 'PlusButton PlusButton__open'
			: 'PlusButton'
		);
		
		return (
			<div
				className={ className }
				onClick={this.handleClick}
			>
				<SVGLogoContainer 
					svg={plus.svgsrc}
					toolbar="side"
				/>
			</div>
		)
	}
}

export default PlusButton;