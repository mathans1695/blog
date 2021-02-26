import React, { Component } from 'react';

import BoldButton from './BoldButton';
import ItalicButton from './ItalicButton';
import LinkButton from './LinkButton';
import LinkInput from './LinkInput';

import './InlineStyleMenu.css';

class InlineStyleMenu extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showInlineStyleMenu: true,
			showLinkInput: false
		}
		this.toggleMenu = this.toggleMenu.bind(this);
	}
	
	toggleMenu(e) {
		this.setState({
			showInlineStyleMenu: !this.state.showInlineStyleMenu,
			showLinkInput: !this.state.showLinkInput
		})
	}
	
	render() {
		return (
			<div className='InlineStyleMenu'>
				{
					this.state.showInlineStyleMenu &&
					<div className='InlineStyleMenu__menu'>
						<BoldButton 
							toggleInlineStyle={this.props.toggleInlineStyle}
						/>
						<ItalicButton 
							toggleInlineStyle={this.props.toggleInlineStyle}
						/>	
						<LinkButton 
							toggleMenu={this.toggleMenu}
						/>
					</div>
				}
				{
					this.state.showLinkInput &&
					<LinkInput 
						applyEntity={this.props.applyEntity}
						toggleMenu={this.toggleMenu}
					/>
				}
			</div>
		)
	}
}

export default InlineStyleMenu;