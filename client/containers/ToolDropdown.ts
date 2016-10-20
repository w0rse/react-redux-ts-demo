import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { IState, IActiveTool } from '../model';
import { setActiveTool } from '../actions';
import {
	ToolDropdown, IToolDropdownStateProps, IToolDropdownDispatchProps, IToolDropdownOwnProps,
} from '../components';

export const ToolDropdownContainer = connect<IToolDropdownStateProps, IToolDropdownDispatchProps, IToolDropdownOwnProps>(
	(state: IState, ownProps: IToolDropdownOwnProps) => ({
		isActive: ownProps.items.map(item => item.name).indexOf(state.activeTool) !== -1
	}),
	(dispatch: Redux.Dispatch<IActiveTool>, ownProps: IToolDropdownOwnProps) => bindActionCreators({
		onSelect: (name) => setActiveTool(name)
	}, dispatch)
)(ToolDropdown);
