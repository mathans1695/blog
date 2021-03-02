import React, { Component } from 'react';

import Navbar from '.././Navbar/Navbar';
import DraftEditor from '.././DraftEditor/DraftEditor';
import TopToolbar from '.././Toolbar/TopToolbar/TopToolbar';

import { 
	determineToolbarPosition
} from '../.././helper/helper';

import './Main.css';

class Main extends Component {
	constructor(props) {
		super(props);
		this.state = {
			topToolbarPosX: 0,
			topToolbarPosY: 0,
			showTopToolbar: false
		}
		this.setTopToolbar = this.setTopToolbar.bind(this);
	}
	
	componentDidMount() {
		const self = this;
		
		// listener will take of enabling and disabling top tool bar on selection and no text is selected respectively
		document.addEventListener('mouseup', () => {
			const selection = document.getSelection();
			if (!selection.isCollapsed) {
				const [x, y] = determineToolbarPosition();
				self.setTopToolbar(true, x, y);
			} else {
				self.setTopToolbar(false, 0, 0);
			}
		});
	}
	
	setTopToolbar(show, x, y) {
		this.setState({
			topToolbarPosX: x,
			topToolbarPosY: y,
			showTopToolbar: show
		});
	}
	
	render() {
		const { 
			topToolbarPosX, 
			topToolbarPosY, 
			showTopToolbar 
		} = this.state;
		
		return (
			<div className='Main'>
				<Navbar />
				<DraftEditor 
					setTopToolbar={this.setTopToolbar}
				/>
				<TopToolbar 
					x={topToolbarPosX} 
					y={topToolbarPosY} 
					showTopToolbar={showTopToolbar}
				/>
			</div>
		)
	}
}

export default Main;