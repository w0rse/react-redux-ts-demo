import * as React from 'react';
import { Component } from 'react';
import * as classNames from 'classnames';

import { ClickOutside } from '../ClickOutside';
import { TDropdownMenuName, TDropdownMenuItem, DropdownMenu } from '../DropdownMenu';
import { ToolButton } from '../ToolButton';


// Styles
const s = require('./styles');


// Types and Interfaces
type TToolDropdownItem = TDropdownMenuItem;

type TToolDropdownSelectValue = TDropdownMenuName;

export interface IToolDropdownStateProps {
	current?: number | false;
	isActive?: boolean;
};

export interface IToolDropdownDispatchProps {
	onSelect?: (index: TToolDropdownSelectValue) => void;
};

export interface IToolDropdownOwnProps {
	items: TToolDropdownItem[];
};

export type IToolDropdownProps = IToolDropdownStateProps & IToolDropdownDispatchProps & IToolDropdownOwnProps;

interface IToolDropdownState {
	current?: number;
	isOpened?: boolean;
};


// Component
export class ToolDropdown extends Component<IToolDropdownProps, IToolDropdownState> {
	/**
	 * Class constructor
	 */
	constructor(props: IToolDropdownProps) {
		super(props);
		this.state = {
			current: this.props.current || 0,
			isOpened: false,
		};
	}

	/**
	 * Select tool
	 */
	handleSelect = (index: number) => {
		const item = this.props.items[index];
		this.props.onSelect(item.name);
		this.setState({ current: index });
		this.onCloseDropdown();
	}

	/**
	 * Handle button click event
	 */
	handleClickButton = () => {
		this.props.onSelect(this.props.items[this.state.current].name);
		if (this.state.isOpened) {
			this.onCloseDropdown();
		}
	}

	/**
	 * Handle arrow click event
	 */
	handleClickArrow = () => {
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
				<div className={ classNames(s.dropdown, { [s.isOpened]: isOpened }) }>
					<div className={ s.button }>
						<div className={ s.arrow } onClick={ this.handleClickArrow }></div>
						<ToolButton onClick={ this.handleClickButton } isActive={ isActive }>{ currentItem.icon }</ToolButton>
					</div>
					<div className={ s.dropdownHolder }>
						<DropdownMenu
							items={ items }
							isOpened={ isOpened }
							onSelect={ this.handleSelect }
						/>
					</div>
				</div>
			</ClickOutside>
		);
	}
}
