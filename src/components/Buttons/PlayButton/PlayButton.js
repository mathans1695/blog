import React, { Component } from 'react';

import SVGLogoContainer from '../../Atoms/SVGLogoContainer/SVGLogoContainer';

import { play } from '../../../assets/inlineSVG/inlineSVG';

import './PlayButton.css';

class PlayButton extends Component {
	constructor(props) {
		super(props);
		this.state = {
			className: 'PlayButton__before'
		}
		this.handleClick = this.handleClick.bind(this);
	}
	
	componentDidMount() {
		const self = this;
		setTimeout(() => {
			self.setState({
				className: 'PlayButton__after'
			});
		}, 0);
	}

	handleClick(e) {
		e.preventDefault();
	}
	
	render() {
		const { isClosed } = this.props;
		const className = `PlayButton ${this.state.className}`;
		
		return (
			<div
				className={className}
				onClick={this.handleClick}
			>
				<SVGLogoContainer 
					svg={play.svgsrc}
					isActive={this.state.isActive}
					toolbar="side"
				/>
			</div>
		)
	}
}

export default PlayButton;