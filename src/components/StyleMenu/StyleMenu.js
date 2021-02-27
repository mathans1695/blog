import React, { Component } from 'react';

import BoldButton from '.././BoldButton/BoldButton';
import ItalicButton from '.././ItalicButton/ItalicButton';
import LinkEntityButton from '.././LinkEntityButton/LinkEntityButton';
import HeadingButton4 from '.././HeadingButton4/HeadingButton4';
import HeadingButton3 from '.././HeadingButton3/HeadingButton3';
import BlockQuoteButton from '.././BlockQuoteButton/BlockQuoteButton';
import VerticalDivider from '.././VerticalDivider/VerticalDivider';

import './StyleMenu.css';

class StyleMenu extends Component {
	constructor(props) {
		super(props);
	}
	
	render() {
		const { toggleInlineStyle } = this.props;
		
		return (
			<div className='StyleMenu'>
				<BoldButton 
					toggleInlineStyle={toggleInlineStyle}
				/>
				<ItalicButton 
					toggleInlineStyle={toggleInlineStyle}
				/>
				<LinkEntityButton />
				<VerticalDivider />
				<HeadingButton4 />
				<HeadingButton3 />
				<BlockQuoteButton />
			</div>
		)
	}
}

export default StyleMenu;