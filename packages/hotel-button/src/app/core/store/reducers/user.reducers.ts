import { UserActions, EUserActions } from '../actions/user.actions';
import { initialUserState, IUserState } from './../state/user.state';

export const userReducers = (
  state = initialUserState,
  action: UserActions
): IUserState => {
  switch (action.type) {
    case EUserActions.GetUserSuccess: {
      console.log('log reducer 2');
      return {
        ...state,
        currentUser: action.payload
      };
    }

    default:
      return state;
  }
};
