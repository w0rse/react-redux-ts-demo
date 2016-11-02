import * as actions from './';
import * as types from '../constants/actions';
import { TOOLS } from '../constants/tools';

describe('actions', () => {
	it('Should create an action to set active tool', () => {
		const tool = TOOLS.ARROW;
		const expectedAction = {
			type: types.SET_ACTIVE_TOOL,
			payload: tool
		};

		expect(actions.setActiveTool(tool)).toEqual(expectedAction);
	});
});
