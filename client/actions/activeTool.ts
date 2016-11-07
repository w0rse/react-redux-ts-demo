import { createAction } from 'redux-actions';
import { IActiveTool } from '../model';
import { SET_ACTIVE_TOOL } from '../constants';

export const setActiveTool = createAction<IActiveTool, IActiveTool>(SET_ACTIVE_TOOL, (toolName: IActiveTool) => toolName);
