import React, { Component } from 'react';

import SVGLogoContainer from '../../Atoms/SVGLogoContainer/SVGLogoContainer';

import { camera } from '../../../assets/inlineSVG/inlineSVG';

import './ImageButton.css';

class ImageButton extends Component {
	constructor(props) {
		super(props);
		this.state = {
			className: 'ImageButton__before'
		}
		this.handleClick = this.handleClick.bind(this);
	}
	
	componentDidMount() {
		const self = this;
		setTimeout(() => {
			self.setState({
				className: 'ImageButton__after'
			});
		}, 0);
	}

	handleClick(e) {
		e.preventDefault();
	}
	
	render() {
		const { isClosed } = this.props;
		const className = `ImageButton ${this.state.className}`;
		
		return (
			<div
				className={className}
				onClick={this.handleClick}
			>
				<SVGLogoContainer 
					svg={camera.svgsrc}
					toolbar="side"
				/>
			</div>
		)
	}
}

export default ImageButton;