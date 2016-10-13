import * as React from 'react';
import { Component } from 'react';
import * as classNames from 'classnames';


// Styles
const styles = require('./styles');


// Types and Interfaces
interface IToolButtonProps {
	onClick?: () => void,
	isActive?: boolean,
	children?: React.ReactChild,
};


// Component
export const ToolButton = ({
	isActive = false,
	children = null,
	onClick = () => {},
}: IToolButtonProps) => (
	<div onClick={ onClick } className={ classNames(styles.button, { [styles.isActive]: isActive }) }>
		{ children }
	</div>
);
