import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { IState } from '../model';

import { setActiveTool, TSetActiveTool } from '../actions/tools';

import {
	ToolDropdown, IToolDropdownStateProps, IToolDropdownDispatchProps, IToolDropdownOwnProps,
} from '../components';



const createContainer = (names: Array<string>) => (
	connect<IToolDropdownStateProps, IToolDropdownDispatchProps, IToolDropdownOwnProps>(
		(state: IState) => ({ isActive: names.indexOf(state.tools.activeTool) !== -1 }),
		(dispatch: Redux.Dispatch<TSetActiveTool>) => bindActionCreators({ onSelect: (name) => setActiveTool(name) }, dispatch)
	)(ToolDropdown)
);

export const LinesToolsDropdown = createContainer([
	'trend-line',
	'trend-angle',
	'horizontal-line',
	'horizontal-ray',
	'vertical-line',
	'arrow',
	'ray',
	'extended',
	'parallel-channel',
]);
