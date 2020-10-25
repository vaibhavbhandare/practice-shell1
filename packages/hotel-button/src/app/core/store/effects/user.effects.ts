
import { Injectable } from '@angular/core';
import { Effect, ofType, Actions } from '@ngrx/effects';
import { switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

import { IUser } from '@core/interfaces/index';
import { UserService } from '@core/services/index';
import { EUserActions, GetUser, GetUserSuccess } from '../actions/user.actions';

/**
 * Effects listen for Action changes and reacts.
 */
@Injectable()
export class UserEffects {
  @Effect()
  getUser$ = this._actions$.pipe(
    ofType<GetUser>(EUserActions.GetUser),
    switchMap(() => this._userService.getUser()),
    switchMap((user: IUser) => {
      console.log('log effect 1');
      return of(new GetUserSuccess(user));
    })
  );

  constructor(
    private _userService: UserService,
    private _actions$: Actions) {}
}
