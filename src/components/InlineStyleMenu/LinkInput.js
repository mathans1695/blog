import React, { Component } from 'react';

import './LinkInput.css';

class LinkInput extends Component {
	constructor(props) {
		super(props);
		this.state = {
			value: ''
		}
		this.linkInputRef = React.createRef();
		this.onChange = this.onChange.bind(this);
		this.handleKeyDown = this.handleKeyDown.bind(this);
	}
	
	componentDidMount() {
		this.linkInputRef.current.focus();
	}
	
	onChange(e) {
		this.setState({
			value: e.target.value
		});
	}
	
	handleKeyDown(e) {
		const value = this.state.value;
		if (e.keyCode === 27) {
			this.props.toggleMenu(e);
		}
		
		if (e.keyCode === 13 && value) {
			const data = {
				url: `http://${value}`
			}
			
			this.props.toggleMenu(e);
			this.props.applyEntity('LINK', 'MUTABLE', data);
		}
	}
	
	render() {
		return (
			<input
				type='text'
				className='LinkInput'
				value={this.state.value}
				onChange={this.onChange}
				placeholder='Paste or Enter a link...'
				onKeyDown={this.handleKeyDown}
				ref={this.linkInputRef}
			/>
		)
	}
}

export default LinkInput;