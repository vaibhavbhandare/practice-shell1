import { ActionReducerMap } from '@ngrx/store';
import { IAppState } from '../state/app.state';
import { userReducers } from './user.reducers';


/**
 * App reducers combines multiple reducers with a key
 */
export const appReducers: ActionReducerMap<IAppState, any> = {
  user: userReducers
};

