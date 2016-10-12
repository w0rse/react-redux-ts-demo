import * as React from 'react';
import { Component } from 'react';
import * as CSSModules from 'react-css-modules';
import * as classNames from 'classnames';


// Styles
const styles = require('./styles');


// Types and Interfaces
interface IToolButtonProps {
	onClick?: () => void,
	active?: boolean,
	children?: React.ReactChild,
};


// Component
export const ToolButton = CSSModules(({
	active = false,
	children = null,
	onClick = () => {},
}: IToolButtonProps) => (
	<div onClick={ onClick } styleName={ classNames('tool-button', { 'i-active': active }) }>
		{ children }
	</div>
), styles, { allowMultiple: true });
