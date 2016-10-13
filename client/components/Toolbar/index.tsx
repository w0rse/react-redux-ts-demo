import * as React from 'react';


// Styles
const styles = require('./styles');


// Types and Interfaces
interface IToolbarProps {
	children?: React.ReactChild
};


// Component
export const Toolbar = ({
	children = null
}: IToolbarProps) => (
	<div className={ styles.toolbar }>
		{ children }
	</div>
);
