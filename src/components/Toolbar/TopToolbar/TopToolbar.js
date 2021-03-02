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
	
	componentDidUpdate() {
		const { x, y } = this.props;
		const topToolbar = document.querySelector('.TopToolbar');
		
		topToolbar.style.setProperty('--left', x+'px');
		topToolbar.style.setProperty('--top', y+'px');
	}
	
	render() {
		const { showTopToolbar } = this.props;
		
		const className = (
			showTopToolbar
			? 'TopToolbar'
			: 'TopToolbar TopToolbar__hide'
		)
		
		return (
			<div className={className}>
				<BoldButton 
					
				/>
				<ItalicButton 
					
				/>
				<LinkEntityButton />
				<VerticalDivider />
				<HeadingButton4 />
				<HeadingButton3 />
				<BlockQuoteButton />
				<VerticalDivider />
				<NotesButton />
				<div className='TopToolbar__arrow'></div>
			</div>
		)
	}
}

export default TopToolbar;