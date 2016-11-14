import * as React from 'react';


// Styles
const s = require('./styles');


// Types and Interfaces
interface IPageProps {
	children?: React.ReactChild;
};


// Component
export function Page({
	children,
}: IPageProps) {
	return (
		<div className={ s.app }>
			{ children }
		</div>
	);
};
