import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { IAppState } from '@store/state/app.state';
import { GetUser } from '@store/actions/user.actions';
import { selectUser } from '@store/selectors/user.selectors';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public title = 'hotel-App';
  public headerTitle = 'cxLoyality';

  // Gets updated automatically when GetUserSuccess action completes by the effect
  user$ = this._store.pipe(select(selectUser));

  constructor(private _store: Store<IAppState>,
              private router: Router) {}

  ngOnInit() {

    // Calls GetUser action to fetch user from service, in turn invoking an effect
    this._store.dispatch(new GetUser());
    this.loadDefaultTabs();
  }

  loadDefaultTabs() {
      this.router.navigateByUrl('/flight');
  }
}
