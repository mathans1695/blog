import React, {useState} from 'react';
import Menu from '../Menu/Menu';
import ContentEditable from 'react-contenteditable';
import './Paragraph.css';

function Paragraph(props) {
	const [paraText, setParaText]  = useState('hello and welcome to kalaka povathu aaru endru negal sollungal');
	
	function handleSelect(e) {
		const selection = document.getSelection();
		
		console.log(e.selectionStart);
		
		if (!selection.isCollapsed) {
			const range = selection.getRangeAt(0).cloneRange();
			
			determinePosition(true, range, props);
		} else {
			props.positionMenu(false, 0, 0);
		}
	}
	
	return (
		<div 
			className='Paragraph'
			onSelect={handleSelect}
			contentEditable={true}
		>
			<p
				className='Paragraph__text'
			>
				{paraText}
			</p>
		</div>
	)
}

function determinePosition(isSelected, range, { positionMenu, menuWidth }) {
	// get caret position and innerWidth
	const rect = range.getClientRects()[0];
	let {left, top} = rect;
	const innerWidth = window.innerWidth;
	
	// get selected text width using the function textWidth
	const fontInfo = {
		family: "times new roman",
		size: 1.5 * 20
	};
	const selectedTextWidth = textWidth(range.toString(), fontInfo);
	
	// position the menu using the calculated position
	if (left <= menuWidth/2) {
		left = left;
	} else if (left + menuWidth/2 >= innerWidth) {
		left = left - menuWidth;
	} else {
		left = left - (menuWidth/2) + (selectedTextWidth/2);
	}
	
	positionMenu(isSelected, left, top);
	
	return true;
}

function textWidth(text, fontInfo) {
	const span = document.createElement('span');
	document.body.appendChild(span);
	
	span.innerHTML = text;
	
	span.style.fontFamily = fontInfo.family;
	span.style.fontSize = fontInfo.size + "px";
	span.style.width = "auto";
	span.style.height = "auto";
	span.style.position = "absolute";
	span.style.top = "-50px";
	
	const width = span.clientWidth;
	document.body.removeChild(span);
	
	return width;
}

export default Paragraph;