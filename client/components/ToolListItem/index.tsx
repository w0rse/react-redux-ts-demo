import * as React from 'react';
import * as CSSModules from 'react-css-modules';


// Styles
const styles = require('./styles');


// Types and Interfaces
interface IToolListItemProps {
	icon: any,
	children?: React.ReactChild
};


// Component
export const ToolListItem = CSSModules(({
	icon,
	children = null,
}: IToolListItemProps) => (
	<div styleName="tool-list-item">
		<div styleName="icon">{ React.createElement(icon) }</div>
		<div>{ children }</div>
	</div>
), styles);
