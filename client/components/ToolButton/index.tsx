import * as React from 'react';
import { Component } from 'react';
import * as classNames from 'classnames';


// Styles
const styles = require('./styles');


// Types and Interfaces
export interface IToolButtonStateProps {
	isActive?: boolean,
};

export interface IToolButtonDispatchProps {
	onClick?: () => void,
};

export interface IToolButtonOwnProps {
	name?: string,
	children?: React.ReactChild,
};

export type IToolButtonProps = IToolButtonStateProps & IToolButtonDispatchProps & IToolButtonOwnProps;


// Component
export const ToolButton = ({
	name,
	isActive = false,
	children = null,
	onClick = () => {},
}: IToolButtonProps) => (
	<div onClick={ onClick } className={ classNames(styles.button, { [styles.isActive]: isActive }) }>
		{ children }
	</div>
);
