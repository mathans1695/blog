import React, { Component } from 'react';

import BoldButton from '../../Buttons/BoldButton/BoldButton';
import ItalicButton from '../../Buttons/ItalicButton/ItalicButton';
import LinkEntityButton from '../../Buttons/LinkEntityButton/LinkEntityButton';
import HeadingButton4 from '../../Buttons/HeadingButton4/HeadingButton4';
import HeadingButton3 from '../../Buttons/HeadingButton3/HeadingButton3';
import BlockQuoteButton from '../../Buttons/BlockQuoteButton/BlockQuoteButton';
import NotesButton from '../../Buttons/NotesButton/NotesButton';
import VerticalDivider from '../../Atoms/VerticalDivider/VerticalDivider';

import './TopToolbar.css';

class TopToolbar extends Component {
	constructor(props) {
		super(props);
	}
	
	render() {
		const { toggleInlineStyle } = this.props;
		
		return (
			<div className='TopToolbar'>
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
				<VerticalDivider />
				<NotesButton />
			</div>
		)
	}
}

export default TopToolbar;