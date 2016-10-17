import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { IState, TOOLS_NAMES } from '../model';

import { setActiveTool, TSetActiveTool } from '../actions/tools';

import {
	ToolButton, IToolButtonStateProps, IToolButtonDispatchProps, IToolButtonOwnProps,
} from '../components';

const createContainer = (name: string) => (
	connect<IToolButtonStateProps, IToolButtonDispatchProps, IToolButtonOwnProps>(
		(state: IState) => ({
			isActive: state.tools.activeTool === name
		}),
		(dispatch: Redux.Dispatch<TSetActiveTool>) => bindActionCreators({
			onClick: () => setActiveTool(name)
		}, dispatch)
	)(ToolButton)
);

export const CrossToolButton = createContainer(TOOLS_NAMES.CROSS);

export const ForkToolButton = createContainer(TOOLS_NAMES.FORK);

export const TextToolButton = createContainer(TOOLS_NAMES.TEXT);

export const ShapeToolButton = createContainer(TOOLS_NAMES.SHAPE);

export const BrushToolButton = createContainer(TOOLS_NAMES.BRUSH);
