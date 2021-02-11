import React, { useState } from 'react';
import Menu from '../Menu/Menu';
import Paragraph from '../Paragraph/Paragraph';

function Editor() {
	const [isSelected, setIsSelected] = useState(false);
	const [left, setLeft] = useState(0);
	const [top, setTop] = useState(0);
	const [width, setWidth] = useState(250);
	
	function positionMenu(selected, left, top) {
		setIsSelected(selected);
		setLeft(left);
		setTop(top-57.5);
	}
	
	return (
		<div className='Editor'>
			<Paragraph 
				positionMenu={positionMenu} 
				menuWidth={width}
			/>
			{isSelected && 
				<Menu 
					left={left} 
					top={top} 
					width={width} 
				/>
			}
		</div>
	)
}

export default Editor;