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
					payload: TOOLS.LINE_ARROW,
					type: SET_ACTIVE_TOOL,
				}
			)
		).toEqual(TOOLS.LINE_ARROW);

		// Set BRUSH
		expect(
			reducer(
				TOOLS.LINE_ARROW,
				{
					payload: TOOLS.BRUSH,
					type: SET_ACTIVE_TOOL,
				}
			)
		).toEqual(TOOLS.BRUSH);

	});

});
