import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { IState } from '../model';

import { setActiveTool, TSetActiveTool } from '../actions/tools';

import {
	ToolButton, IToolButtonStateProps, IToolButtonDispatchProps, IToolButtonOwnProps,
} from '../components';

const createContainer = (name: string) => (
	connect<IToolButtonStateProps, IToolButtonDispatchProps, IToolButtonOwnProps>(
		(state: IState) => ({ isActive: state.tools.activeTool === name }),
		(dispatch: Redux.Dispatch<TSetActiveTool>) => bindActionCreators({ onClick: () => setActiveTool(name) }, dispatch)
	)(ToolButton)
);

export const CrossToolButton = createContainer('cross');

export const ForkToolButton = createContainer('fork');

export const TextToolButton = createContainer('text');

export const ShapeToolButton = createContainer('shape');

export const BrushToolButton = createContainer('brush');
