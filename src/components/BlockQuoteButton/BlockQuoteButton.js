import React, { Component } from 'react';

import SVGLogoContainer from '../SVGLogoContainer/SVGLogoContainer';

import { blockquote } from '../../assets/inlineSVG/inlineSVG';

import './BlockQuoteButton.css';

class BlockQuoteButton extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isActive: false
		}
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(e) {
		e.preventDefault();
		
		this.setState({
			isActive: !this.state.isActive
		})
	}
	
	render() {
		return (
			<button
				className='BlockQuoteButton'
				onClick={this.handleClick}
			>
				<SVGLogoContainer 
					svg={blockquote.svgsrc}
					isActive={this.state.isActive}
					action='blockquote'
				/>
			</button>
		)
	}
}

export default BlockQuoteButton;