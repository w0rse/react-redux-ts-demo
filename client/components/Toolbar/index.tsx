import * as React from 'react';
import * as CSSModules from 'react-css-modules';


// Styles
const styles = require('./styles');


// Types and Interfaces
interface IToolbarProps {
	children?: React.ReactChild
};


// Component
export const Toolbar = CSSModules(({
	children = null
}: IToolbarProps) => (
	<div styleName="toolbar">
		{ children }
	</div>
), styles);
