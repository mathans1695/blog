import React, { Component } from 'react';

import SVGLogoContainer from '../../Atoms/SVGLogoContainer/SVGLogoContainer';

import { embedIcon } from '../../../assets/inlineSVG/inlineSVG';

import './EmbedButton.css';

class EmbedButton extends Component {
	constructor(props) {
		super(props);
		this.state = {
			className: 'EmbedButton__before'
		}
		this.handleClick = this.handleClick.bind(this);
	}
	
	componentDidMount() {
		const self = this;
		setTimeout(() => {
			self.setState({
				className: 'EmbedButton__after'
			});
		}, 0);
	}

	handleClick(e) {
		e.preventDefault();
	}
	
	render() {
		const { isClosed } = this.props;
		const className = `EmbedButton ${this.state.className}`;
		
		return (
			<div 
				className={className}
				onClick={this.handleClick}
			>
				<SVGLogoContainer 
					svg={embedIcon.svgsrc} 
					isActive={this.state.isActive}
					toolbar="side"
				/>
			</div>
		)
	}
}

export default EmbedButton;