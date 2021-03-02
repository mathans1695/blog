export function determineToolbarPosition() {
	const selection = document.getSelection();
	const range = selection.getRangeAt(0);
	
	// Get selection width and position
	const selectionDOMRect = range.getBoundingClientRect();
	const selectionPosX = selectionDOMRect.x;
	const selectionPosY = selectionDOMRect.y;
	const selectionWidth = selectionDOMRect.width;
	const selectionHeight = selectionDOMRect.height;
	
	// Get editor width, height and font_size
	const editor = document.querySelector('.DraftEditor');
	const editorDOMRect = editor.getBoundingClientRect();
	const editorPosX = editorDOMRect.x;
	const editorPosY = editorDOMRect.y;
	const editorWidth = editorDOMRect.width;
	const editorHeight = editorDOMRect.height;
	
	// Get topToolbar width and height
	const topToolbar = document.querySelector('.TopToolbar');
	const topToolbarStyle = window.getComputedStyle(topToolbar);
	const toolbarWidth = parseInt(topToolbarStyle.getPropertyValue('width'));
	const toolbarHeight = parseInt(topToolbarStyle.getPropertyValue('height'));
	
	
	// Get toolbar bottom arrow width and height
	const arrow = topToolbar.querySelector('.TopToolbar__arrow');
	const arrowStyle = window.getComputedStyle(arrow);
	const arrowWidth = parseInt(arrowStyle.getPropertyValue('width'));
	const arrowHeight = parseInt(arrowStyle.getPropertyValue('height'));
	
	// Determine the total height of topToolbar
	const toolbarTotalHeight = toolbarHeight + arrowHeight / 2;
	
	const tempHeight = 22;
	
	// Determine the position
	let posX;
	const posY = selectionPosY - toolbarTotalHeight;
	
	if (selectionHeight > tempHeight) {
		posX = (editorWidth / 2) - (toolbarWidth / 2);
		
	} else {
		const leftLimit = editorPosX + toolbarWidth / 2;
		const rightLimit = editorWidth - toolbarWidth / 2;
		
		const selectionMidPosX = selectionPosX + selectionWidth / 2;
		
		if (selectionMidPosX < leftLimit) {
			posX = selectionPosX;
		} else if(selectionMidPosX > rightLimit) {
			posX = selectionPosX + selectionWidth - toolbarWidth;
		} else {
			posX = selectionPosX + (selectionWidth / 2) - (toolbarWidth / 2);
		}
	}
	return [posX, posY];
}