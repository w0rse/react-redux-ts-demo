import { handleActions, Action } from 'redux-actions';
import { IActiveTool } from '../model';
import { SET_ACTIVE_TOOL, TOOLS } from '../constants';

const INITIAL_STATE: IActiveTool = TOOLS.CROSS;

export const activeTool = handleActions<IActiveTool, IActiveTool>(
	{
		[SET_ACTIVE_TOOL]: (state: IActiveTool, action: Action<IActiveTool>): IActiveTool => action.payload,
	},
	INITIAL_STATE
);
