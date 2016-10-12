import * as React from 'react';
import { Component } from 'react';
import * as CSSModules from 'react-css-modules';
import * as classNames from 'classnames';

import { ClickOutside } from '../ClickOutside';
import { TDropdownMenuValue, TDropdownMenuItem, DropdownMenu } from '../DropdownMenu';
import { ToolButton } from '../ToolButton';


// Styles
const styles = require('./styles');


// Types and Interfaces
type TToolDropdownItem = TDropdownMenuItem;

type TToolDropdownSelectValue = TDropdownMenuValue;

interface IToolDropdownProps {
	items: TToolDropdownItem[],
	active?: boolean,
	children?: React.ReactChild,
	onSelect?: (value: TToolDropdownSelectValue) => void,
};

interface IToolDropdownState {
	isOpened?: boolean,
};


// Component
@CSSModules(styles, { allowMultiple: true })
export class ToolDropdown extends Component<IToolDropdownProps, IToolDropdownState> {
	static defaultProps = {
		onSelect: () => {},
	}

	/**
	 * Class constructor
	 */
	constructor() {
		super();
		this.state = {
			isOpened: false,
		};
	}

	/**
	 * Select the value
	 */
	select = (value: TToolDropdownSelectValue) => {
		this.props.onSelect(value);
		this.onCloseDropdown();
	}

	/**
	 * Handle click event
	 */
	onClick = () => {
		if (!this.state.isOpened) {
			this.onOpenDropdown();
		} else {
			this.onCloseDropdown();
		}
	}

	/**
	 * Handle dropdown open event
	 */
	onOpenDropdown = () => {
		this.setState({ isOpened: true });
	}

	/**
	 * Handle dropdown close event
	 */
	onCloseDropdown = () => {
		this.setState({ isOpened: false });
	}

	/**
	 * Render the component
	 */
	render() {
		const { isOpened } = this.state;
		const { active, items, children } = this.props;
		return (	
			<ClickOutside onClickOutside={ this.onCloseDropdown }>
				<div styleName={ classNames('tool-dropdown', { 'i-opened': isOpened }) }>
					<div styleName="button">
						<div styleName="arrow"></div>
						<ToolButton onClick={ this.onClick } active={ active }>{ children }</ToolButton>
					</div>
					<div styleName="dropdown">
						<DropdownMenu
							items={ items }
							isOpened={ isOpened }
							onSelect={ this.select }
						/>
					</div>
				</div>
			</ClickOutside>
		);
	}
}
