import * as React from 'react';


// Styles
const s = require('./styles');


// Types and Interfaces
interface IMenuListItemProps {
	icon?: React.ReactChild;
	children?: React.ReactChild;
};


// Component
export function MenuListItem({
	icon,
	children,
}: IMenuListItemProps) {
	return (
		<div className={ s.item }>
			{ icon &&
				<div className={ s.icon }>{ icon }</div>
			}
			<div>{ children }</div>
		</div>
	);
};
