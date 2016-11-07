import * as React from 'react';
import * as classNames from 'classnames';
import { MenuListItem } from '../MenuListItem';

// Styles
const styles = require('./styles');


// Types and Interfaces
export type TDropdownMenuName = string | number;

export type TDropdownMenuItem = { name: TDropdownMenuName, icon: React.ReactChild, label: React.ReactChild };

interface IDropdownMenuProps {
	items: TDropdownMenuItem[];
	isOpened: boolean;
	onSelect?: (name: TDropdownMenuName) => void;
};


// Component
export class DropdownMenu extends React.Component<IDropdownMenuProps, null> {
	/**
	 * Handle click event
	 */
	onClick = (index: number) => () => {
		this.props.onSelect(index);
	}

	/**
	 * Render the component
	 */
	render() {
		const { items, isOpened } = this.props;
		return (
			<div className={ classNames(styles.menu, { [styles.isOpened]: isOpened }) }>
				{ items.map((item, i) => (
					<div
						key={ i.toString() + item.name.toString() }
						onClick={ this.onClick(i) }
						className={ styles.item }
					>
						<MenuListItem icon={ item.icon }>{ item.label }</MenuListItem>
					</div>
				)) }
			</div>
		);
	}
}
