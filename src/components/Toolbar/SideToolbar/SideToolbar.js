import React, { Component } from 'react';

import PlusButton from '../../Buttons/PlusButton/PlusButton';
import ImageButton from '../../Buttons/ImageButton/ImageButton';
import SearchButton from '../../Buttons/SearchButton/SearchButton';
import PlayButton from '../../Buttons/PlayButton/PlayButton';
import EmbedButton from '../../Buttons/EmbedButton/EmbedButton';
import DividerButton from '../../Buttons/DividerButton/DividerButton';

import './SideToolbar.css';

class TopToolbar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isClosed: true
		}
		this.toggleToolbar = this.toggleToolbar.bind(this);
	}
	
	toggleToolbar(e) {
		this.setState({
			isClosed: !this.state.isClosed
		});
	}
	
	render() {
		const { isClosed } = this.state;
		
		return (
			<div className='SideToolbar'>
				<div className='SideToolbar__opener'>
					<PlusButton 
						toggleToolbar={this.toggleToolbar}
						isClosed={isClosed}
					/>
				</div>
				{
					!isClosed && (
						<div className='SideToolbar__Menu'>
							<ImageButton 
								isClosed={isClosed}
							/>
							<SearchButton />
							<PlayButton />
							<EmbedButton />
							<DividerButton />
						</div>
					)
				}
			</div>
		)
	}
}

export default TopToolbar;