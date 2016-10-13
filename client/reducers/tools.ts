import { Tools } from '../model';
import { handleActions, Action } from 'redux-actions';
import { SET_ACTIVE_TOOL } from '../constants/tools';
import { TSetActiveTool, TToolsPayload } from '../actions/tools';

const INITIAL_STATE: Tools = {
	activeTool: 'cross',
};

export const tools = handleActions<Tools, TToolsPayload>({
	[SET_ACTIVE_TOOL]: (state: Tools, action: Action<TSetActiveTool>): Tools => (
		Object.assign({}, state, {
				activeTool: action.payload
		})
	)
}, INITIAL_STATE);
