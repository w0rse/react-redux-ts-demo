import { createAction } from 'redux-actions';
import { SET_ACTIVE_TOOL } from '../constants/tools'; 

export type TSetActiveTool = string;

export type TToolsPayload = TSetActiveTool;

export const setActiveTool = createAction(SET_ACTIVE_TOOL, toolName => toolName);
