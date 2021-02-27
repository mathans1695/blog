import React, { Component } from 'react';

import SVGLogoContainer from '../../Atoms/SVGLogoContainer/SVGLogoContainer';

import { divider } from '../../../assets/inlineSVG/inlineSVG';

import './DividerButton.css';

class DividerButton extends Component {
	constructor(props) {
		super(props);
		this.state = {
			className: 'DividerButton__before'
		}
		this.handleClick = this.handleClick.bind(this);
	}
	
	componentDidMount() {
		const self = this;
		setTimeout(() => {
			self.setState({
				className: 'DividerButton__after'
			});
		}, 0);
	}

	handleClick(e) {
		e.preventDefault();
	}
	
	render() {
		const { isClosed } = this.props;
		const className = `DividerButton ${this.state.className}`;
		
		return (
			<div 
				className={className}
				onClick={this.handleClick}
			>
				<SVGLogoContainer 
					svg={divider.svgsrc} 
					isActive={this.state.isActive}
					toolbar="side"
				/>
			</div>
		)
	}
}

export default DividerButton;