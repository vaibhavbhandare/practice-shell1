import { IUser } from '@core/interfaces/index';

export interface IUserState {
  currentUser: IUser;
}

export const initialUserState: IUserState = {
  currentUser: null
};
