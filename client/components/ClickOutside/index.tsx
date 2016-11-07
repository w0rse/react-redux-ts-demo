import * as React from 'react';
import * as ReactDOM from 'react-dom';


// Types and Interfaces
interface IClickOutsideProps {
	children?: React.ReactChild;
	onClickOutside?: () => void;
};


// Component
export class ClickOutside extends React.Component<IClickOutsideProps, null> {
	/**
	 * Component did mount
	 */
	componentDidMount() {
		document.addEventListener('click', this.handleDocumentClick, false);
		document.addEventListener('touchend', this.handleDocumentClick, false);
	}

	/**
	 * Component will unmount
	 */
	componentWillUnmount() {
		document.removeEventListener('click', this.handleDocumentClick, false);
		document.removeEventListener('touchend', this.handleDocumentClick, false);
	}

	/**
	 * Handle document click event
	 */
	handleDocumentClick = (e: MouseEvent | TouchEvent) => {
		if (!ReactDOM.findDOMNode(this).contains(e.target as Node)) {
			this.props.onClickOutside();
		}
	}

	/**
	 * Render component
	 */
	render() {
		const { children } = this.props;
		return <span>{ children }</span>;
	}
}
