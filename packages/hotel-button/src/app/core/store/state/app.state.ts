import { initialUserState, IUserState } from './user.state';

/**
 * AppState is colleciton of all the states, acts like a database and each reducer is like a table
 */
export interface IAppState {
  user: IUserState;
}

/**
 * Initial state of the application, can combine all available default states
 */
export const initialAppState: IAppState = {
  user: initialUserState,
};


export function getInitialState(): IAppState {
  return initialAppState;
}
