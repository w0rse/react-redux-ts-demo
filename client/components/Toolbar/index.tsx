import * as React from 'react';


// Styles
const s = require('./styles');


// Types and Interfaces
interface IToolbarProps {
	children?: React.ReactChild;
};


// Component
export function Toolbar({
	children,
}: IToolbarProps) {
	return (
		<div className={ s.toolbar }>
			{ children }
		</div>
	);
};
