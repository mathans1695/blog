import React, { Component } from 'react';

import './ItalicButton.css';

class ItalicButton extends Component {
	constructor(props) {
		super(props);
		this.handleMouseDown = this.handleMouseDown.bind(this);
	}
	
	handleMouseDown(e) {
		e.preventDefault();
		this.props.toggleInlineStyle(e);
	}
	
	render() {
		return (
			<div 
				className='ItalicButton'
				onMouseDown={this.handleMouseDown}
				data-command='ITALIC'
			>
				<svg 
					className='ItalicButton__svg'
					viewBox="0 0 525.1 525.1"
				>
					<path d="M375.5 0.2c-13.3 1.7-26.8 2.9-40.5 3.6 -15.7 0.8-28 1.2-36.7 1.2 -10.1 0-22.1-0.5-36.1-1.6 -12.2-0.9-25.3-2-39.2-3.4 -3.4-0.3-7 2-7.8 5.3 -1.1 4.1-1.6 7.4-1.6 10 0 6.9 4.8 11.1 14.4 12.7 12.7 1.6 20.7 5 23.9 10.3 3.3 5.3 4 12.7 2.3 22.2l-64.3 403.4c-1.8 10-5.5 17.6-11.2 22.6 -5.7 5-14.2 8.6-25.6 10.7 -4.8 1.1-8 2.7-9.5 4.8 -1.5 2.1-2.3 5.3-2.3 9.5 0 2.6 0.2 5.3 0.7 8.3 0.5 3.3 4 5.7 7.3 5.4 12.7-1.3 25.3-2.4 37.5-3.3 14.2-1.1 25.7-1.6 34.4-1.6 10.1 0 23 0.5 38.7 1.6 13.8 0.9 27.7 2.1 41.8 3.4 3.4 0.3 6.8-2.1 7.3-5.4 0.5-3 0.7-5.7 0.7-8.3 0-7.4-4.2-12.1-12.5-14.3 -11.8-2.6-19.9-5.9-24.3-9.9 -4.4-4-5.7-11.2-3.9-21.8L332.4 62.1c1.7-10.6 5.1-18.2 10.2-23 5-4.8 13.7-8.2 25.9-10.3 6.1-1.1 10.2-2.6 12.1-4.8 2-2.1 3-5.3 3-9.5 0-2.7-0.3-5.7-0.8-9.1C382.2 2.1 378.9-0.2 375.5 0.2z"/>
				</svg>
			</div>
		)
	}
}

export default ItalicButton;