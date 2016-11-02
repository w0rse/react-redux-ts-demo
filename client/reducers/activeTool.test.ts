import { activeTool as reducer } from './activeTool';
import { SET_ACTIVE_TOOL } from '../constants/actions';
import { TOOLS } from '../constants/tools';

describe('Active Tool Reducer', () => {

	it('Should handle SET_ACTIVE_TOOL', () => {

		// Set ARROW
		expect(
			reducer(
				'',
				{
					type: SET_ACTIVE_TOOL,
					payload: TOOLS.ARROW
				}
			)
		).toEqual(TOOLS.ARROW);

		// Set BRUSH
		expect(
			reducer(
				TOOLS.ARROW,
				{
					type: SET_ACTIVE_TOOL,
					payload: TOOLS.BRUSH
				}
			)
		).toEqual(TOOLS.BRUSH);

	});

});
