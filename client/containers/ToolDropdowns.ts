import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { IState, TOOLS_NAMES } from '../model';

import { setActiveTool, TSetActiveTool } from '../actions/tools';

import {
	ToolDropdown, IToolDropdownStateProps, IToolDropdownDispatchProps, IToolDropdownOwnProps,
} from '../components';

const createContainer = (names: Array<string>) => (
	connect<IToolDropdownStateProps, IToolDropdownDispatchProps, IToolDropdownOwnProps>(
		(state: IState) => ({
			isActive: names.indexOf(state.tools.activeTool) !== -1
		}),
		(dispatch: Redux.Dispatch<TSetActiveTool>) => bindActionCreators({
			onSelect: (name) => setActiveTool(name)
		}, dispatch)
	)(ToolDropdown)
);

export const LinesToolsDropdown = createContainer([
	TOOLS_NAMES.TREND_LINE,
	TOOLS_NAMES.TREND_ANGLE,
	TOOLS_NAMES.HORIZONTAL_LINE,
	TOOLS_NAMES.HORIZONTAL_RAY,
	TOOLS_NAMES.VERTICAL_LINE,
	TOOLS_NAMES.ARROW,
	TOOLS_NAMES.RAY,
	TOOLS_NAMES.EXTENDED,
	TOOLS_NAMES.PARALLEL_CHANNEL,
]);
