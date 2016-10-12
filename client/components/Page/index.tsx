import * as React from 'react';
import * as CSSModules from 'react-css-modules';


// Styles
const styles = require('./styles');


// Types and Interfaces
interface IPageProps {
	children?: React.ReactChild
};


// Component
export const Page = CSSModules(({
	children = null
}: IPageProps) => (
	<div styleName="app">
		{ children }
	</div>
), styles);
