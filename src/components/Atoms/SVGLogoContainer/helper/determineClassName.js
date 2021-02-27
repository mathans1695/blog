export function determineClassName(toolbar, changeBackground, isActive) {
	let defaultClassName;
	
	if(toolbar === "top") {
		if(changeBackground) {
			defaultClassName = "TopToolbarStyle TopToolbarStyle--bgWhite";
		} else {
			defaultClassName = "TopToolbarStyle";
		}
	} else if(toolbar === 'side') {
		if(changeBackground) {
			defaultClassName = "SideToolbarStyle SideToolbarStyle--bgWhite";
		} else {
			defaultClassName = "SideToolbarStyle";
		}
	}
	
	return (
		isActive 
			? `${defaultClassName} TopToolbarStyle__active`
			: defaultClassName
	)
}