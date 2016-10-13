import * as React from 'react';
import { Component } from 'react';
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
	isActive?: boolean,
	onSelect?: (value: TToolDropdownSelectValue) => void,
};

interface IToolDropdownState {
	current?: number,
	isOpened?: boolean,
};


// Component
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
			current: 0,
			isOpened: false,
		};
	}

	/**
	 * Select tool
	 */
	select = (index: number) => {
		const item = this.props.items[index];
		this.props.onSelect(item.value);
		this.setState({ current: index });
		this.onCloseDropdown();
	}

	/**
	 * Handle button click event
	 */
	onClickButton = () => {
		
	}

	/**
	 * Handle arrow click event
	 */
	onClickArrow = () => {
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
		const { current, isOpened } = this.state;
		const { isActive, items } = this.props;
		const currentItem: TToolDropdownItem = items[current];
		return (	
			<ClickOutside onClickOutside={ this.onCloseDropdown }>
				<div className={ classNames(styles.dropdown, { [styles.isOpened]: isOpened }) }>
					<div className={ styles.button }>
						<div className={ styles.arrow } onClick={ this.onClickArrow }></div>
						<ToolButton onClick={ this.onClickButton } isActive={ isActive }>{ currentItem.icon }</ToolButton>
					</div>
					<div className={ styles.dropdownHolder }>
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
