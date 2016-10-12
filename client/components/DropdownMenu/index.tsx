import * as React from 'react';
import { Component } from 'react';
import * as ReactDOM from 'react-dom';
import * as CSSModules from 'react-css-modules';
import * as classNames from 'classnames';


// Styles
const styles = require('./styles');


// Types and Interfaces
export type TDropdownMenuValue = string | number; 

export type TDropdownMenuItem = { value: TDropdownMenuValue, label: React.ReactChild }; 

interface IDropdownMenuProps {
	items: TDropdownMenuItem[],
	isOpened: boolean,
	onSelect?: (value: TDropdownMenuValue) => void,
};


// Component
@CSSModules(styles, { allowMultiple: true })
export class DropdownMenu extends Component<IDropdownMenuProps, null> {
	static defaultProps = {
		onSelect: () => {},
	}

	/**
	 * Handle click event
	 */
	onClick = (value: TDropdownMenuValue) => () => {
		this.props.onSelect(value);
	}

	/**
	 * Render the component
	 */
	render() {
		const { items, isOpened } = this.props;
		return (
			<div styleName={ classNames('dropdown-menu', { 'i-opened': isOpened }) }>
				{ items.map((item, i) => (
					<div
						key={ i.toString() + item.value.toString() }
						onClick={ this.onClick(item.value) }
						styleName="item"
					>
						{ item.label }
					</div>
				)) }
			</div>
		);
	}
}
