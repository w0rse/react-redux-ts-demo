import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { IState, IActiveTool } from '../model';
import { setActiveTool } from '../actions';
import {
	ToolDropdown, IToolDropdownStateProps, IToolDropdownDispatchProps, IToolDropdownOwnProps,
} from '../components';

export const ToolDropdownContainer = connect<IToolDropdownStateProps, IToolDropdownDispatchProps, IToolDropdownOwnProps>(
	(state: IState, ownProps: IToolDropdownOwnProps) => {
		const toolIndex: number = ownProps.items.map(item => item.name).indexOf(state.activeTool);
		return {
			current: toolIndex !== -1 ? toolIndex : (false as false),
			isActive: toolIndex !== -1,
		};
	},
	(dispatch: Redux.Dispatch<IActiveTool>, ownProps: IToolDropdownOwnProps) => bindActionCreators(
		{
			onSelect: (name) => setActiveTool(name),
		},
		dispatch
	)
)(ToolDropdown);
