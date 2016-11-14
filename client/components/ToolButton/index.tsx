import * as React from 'react';
import * as classNames from 'classnames';


// Styles
const s = require('./styles.less');


// Types and Interfaces
export interface IToolButtonStateProps {
	isActive?: boolean;
};

export interface IToolButtonDispatchProps {
	onClick?: () => void;
};

export interface IToolButtonOwnProps {
	name?: string;
	children?: React.ReactChild;
};

export type IToolButtonProps = IToolButtonStateProps & IToolButtonDispatchProps & IToolButtonOwnProps;


// Component
export function ToolButton({
	name,
	children,
	isActive = false,
	onClick,
}: IToolButtonProps) {
	return (
		<div onClick={ onClick } className={ classNames(s.button, { [s.isActive]: isActive }) }>
			{ children }
		</div>
	);
};
