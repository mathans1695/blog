import React, { Component } from 'react';

import SVGLogoContainer from '../../Atoms/SVGLogoContainer/SVGLogoContainer';

import { search } from '../../../assets/inlineSVG/inlineSVG';

import './SearchButton.css';

class SearchButton extends Component {
	constructor(props) {
		super(props);
		this.state = {
			className: 'SearchButton__before'
		}
		this.handleClick = this.handleClick.bind(this);
	}
	
	componentDidMount() {
		const self = this;
		setTimeout(() => {
			self.setState({
				className: 'SearchButton__after'
			});
		}, 0);
	}

	handleClick(e) {
		e.preventDefault();
	}
	
	render() {
		const { isClosed } = this.props;
		const className = `SearchButton ${this.state.className}`;
		
		return (
			<div
				className={className}
				onClick={this.handleClick}
			>
				<SVGLogoContainer 
					svg={search.svgsrc}
					isActive={this.state.isActive}
					toolbar="side"
				/>
			</div>
		)
	}
}

export default SearchButton;