import * as React from 'react';


// Styles
const styles = require('./styles');


// Types and Interfaces
interface IToolbarProps {
	children?: React.ReactChild;
};


// Component
export function Toolbar({
	children,
}: IToolbarProps) {
	return (
		<div className={ styles.toolbar }>
			{ children }
		</div>
	);
};
