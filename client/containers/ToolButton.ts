import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { IState, IActiveTool } from '../model';
import { setActiveTool } from '../actions';
import {
	ToolButton, IToolButtonStateProps, IToolButtonDispatchProps, IToolButtonOwnProps,
} from '../components';

export const ToolButtonContainer = connect<IToolButtonStateProps, IToolButtonDispatchProps, IToolButtonOwnProps>(
	(state: IState, ownProps: IToolButtonOwnProps) => (
		{
			isActive: state.activeTool === ownProps.name,
		}
	),
	(dispatch: Redux.Dispatch<IActiveTool>, ownProps: IToolButtonOwnProps) => bindActionCreators(
		{
			onClick: () => setActiveTool(ownProps.name),
		},
		dispatch
	)
)(ToolButton);
