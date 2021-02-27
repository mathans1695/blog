import React, { Component } from 'react';
import {
	Editor,
	EditorState,
	RichUtils,
	Modifier,
	CompositeDecorator
} from 'draft-js';

import TopToolbar from '.././Toolbar/TopToolbar/TopToolbar';

import './DraftEditor.css';

class DraftEditor extends Component {
	constructor(props) {
		super(props);
		const compositeDecorator = new CompositeDecorator([
			{
				strategy: linkStrategy,
				component: linkSpan
			}
		]);
		
		this.state = {
			editorState: EditorState.createEmpty(compositeDecorator)
		}
		
		this.onChange = (editorState) => {
			this.setState({editorState}, () => {
				setTimeout(() => this.focus(), 0);
			})
		};
		this.toggleInlineStyle = this.toggleInlineStyle.bind(this);
		this.handleKeyCommand = this.handleKeyCommand.bind(this);
		this.applyEntity = this.applyEntity.bind(this);
		this.setDomEditorRef = ref => this.domEditor = ref;
		this.focus = () => this.domEditor.focus();
	}
	
	componentDidMount() {
		this.domEditor.focus();
	}
	
	toggleInlineStyle(e) {
		const command = e.target.getAttribute('data-action');
		
		const newState = RichUtils.toggleInlineStyle(this.state.editorState, command);
		
		this.onChange(newState);
	}
	
	handleKeyCommand(command, editorState) {
		const newState = RichUtils.handleKeyCommand(editorState, command);
		
		this.onChange(newState);
	}
	
	applyEntity(type, mutability, data) {
		const editorState = this.state.editorState;
		const contentState = editorState.getCurrentContent();
		const selectionState = editorState.getSelection();
		const contentStateWithEntity = contentState.createEntity(type, mutability, data);
		const entityKey = contentStateWithEntity.getLastCreatedEntityKey();
		const contentStateWithLink = Modifier.applyEntity(
			contentStateWithEntity,
			selectionState,
			entityKey
		);
		
		const newEditorState = EditorState.set(editorState, {
			currentContent: contentStateWithLink
		});
		
		this.onChange(newEditorState);
	}
	
	render() {
		return (
			<div className='DraftEditor'>
				<div className='DraftEditor__editor'>
					<Editor 
						editorState={this.state.editorState}
						onChange={this.onChange}
						handleKeyCommand={this.handleKeyCommand}
						ref={this.setDomEditorRef}
					/>
				</div>
				<TopToolbar 
					toggleInlineStyle={this.toggleInlineStyle}
				/>
			</div>
		)
	}
}


const linkStrategy = (contentBlock, callback, contentState) => {
	contentBlock.findEntityRanges(
		(character) => {
			const entityKey = character.getEntity();
			return (
				entityKey !== null &&
				contentState.getEntity(entityKey).getType() === 'LINK'
			);
		},
		callback
	)	
}

const linkSpan = (props) => {
	const handleMouseOver = (e) => {
		const linkInstance = props.contentState.getEntity(props.entityKey);
		const { url } = linkInstance.getData();
		console.log(url);
	}
	
	return (
		<span 
			className='linkSpan'
			onMouseOver={handleMouseOver}
		>
			{props.children}
		</span>
	)
}

export default DraftEditor;