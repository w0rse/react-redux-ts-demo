import * as React from 'react';


// Styles
const styles = require('./styles');


// Types and Interfaces
interface IPageProps {
	children?: React.ReactChild;
};


// Component
export function Page({
	children,
}: IPageProps) {
	return (
		<div className={ styles.app }>
			{ children }
		</div>
	);
};
