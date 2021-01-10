import { combineReducers } from '@reduxjs/toolkit';

const createReducer = asyncReducers =>
	combineReducers({
		...asyncReducers
	});

export default createReducer;
