import { createSelector } from '@ngrx/store';
import { IAppState } from '../state/app.state';
import { IUserState } from '../state/user.state';


const userState = (state: IAppState) => state.user;

/**
 * Selector functions help query the state easily. Multiple selectors can be combined to pick a desired state
 */
export const selectUser = createSelector(
  userState,
  (state: IUserState) => state.currentUser
);
