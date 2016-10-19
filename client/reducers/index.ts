import { combineReducers } from 'redux';
import { IState } from '../model';
import { activeTool } from './activeTool';

export const rootReducer = combineReducers<IState>({
	activeTool,
});
