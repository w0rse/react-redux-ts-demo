import * as React from 'react';


// Styles
const styles = require('./styles');


// Types and Interfaces
interface IMenuListItemProps {
	icon?: React.ReactChild,
	children?: React.ReactChild
};


// Component
export const MenuListItem = ({
	icon,
	children = null,
}: IMenuListItemProps) => (
	<div className={ styles.item }>
		{ icon ?
			<div className={ styles.icon }>{ icon }</div>
		: null }
		<div>{ children }</div>
	</div>
);
