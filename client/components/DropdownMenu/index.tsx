import * as React from 'react';
import * as classNames from 'classnames';
import { MenuListItem } from '../MenuListItem';
import { OpaqueConfig, Motion, spring } from 'react-motion';

// Styles
const s = require('./styles');
const eases = require('eases');


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
	handleClick = (index: number) => () => {
		this.props.onSelect(index);
	}

	/**
	 * Get Menu Animating Styles
	 */
	get menuStyles(): { opacity: OpaqueConfig, scaleX: OpaqueConfig, scaleY: OpaqueConfig } {
		const { isOpened } = this.props;
		return {
			opacity: isOpened
				? spring(1, { damping: 35, stiffness: 400 })
				: spring(0, { damping: 40, stiffness: 400 }),
			scaleX: isOpened
				? spring(1,   { damping: 35, stiffness: 400 })
				: spring(0.85, { damping: 25, stiffness: 250 }),
			scaleY: isOpened
				? spring(1,   { damping: 35, stiffness: 400 })
				: spring(0.75, { damping: 55, stiffness: 250 }),
		};
	}

	/**
	 * Render the component
	 */
	render() {
		const { items, isOpened } = this.props;
		return (
			<Motion defaultStyle={{ opacity: 0, scaleX: 0.85, scaleY: 0.75 }} style={ this.menuStyles }>
				{ (interpolatingStyle: { opacity: number, scaleX: number, scaleY: number }) => (
					<div
						className={ classNames({
							[s.menu]: true,
							[s.isOpening]: interpolatingStyle.opacity !== 0 && isOpened,
							[s.isOpened]: isOpened,
							[s.isClosing]: interpolatingStyle.opacity !== 0 && !isOpened,
							[s.isItemsShowing]: (interpolatingStyle.opacity > 0.85) && isOpened,
						}) }
						style={{
							opacity: interpolatingStyle.opacity,
							transform: `scale(${ interpolatingStyle.scaleX }, ${ interpolatingStyle.scaleY })`,
						}}
					>
						{ items.map((item, i) => (
							<div
								key={ i }
								className={ s.item }
								onClick={ this.handleClick(i) }
								style={{ transitionDelay: (eases.quadIn(i / items.length) * 150) + 'ms' }}
							>
								<MenuListItem icon={ item.icon }>{ item.label }</MenuListItem>
							</div>
						)) }
					</div>
				) }
			</Motion>
		);
	}
}
