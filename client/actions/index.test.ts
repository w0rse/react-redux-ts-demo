import * as actions from './';
import * as types from '../constants/actions';
import { TOOLS } from '../constants/tools';

describe('Actions', () => {
	it('Should create an action to set active tool', () => {
		const tool = TOOLS.LINE_ARROW;
		const expectedAction = {
			payload: tool,
			type: types.SET_ACTIVE_TOOL,
		};

		expect(actions.setActiveTool(tool)).toEqual(expectedAction);
	});
});
