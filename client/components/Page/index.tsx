import * as React from 'react';


// Styles
const styles = require('./styles');


// Types and Interfaces
interface IPageProps {
	children?: React.ReactChild;
};


// Component
export const Page = ({
	children,
}: IPageProps) => (
	<div className={ styles.app }>
		{ children }
	</div>
);
