import {
  async,
  ComponentFixture,
  TestBed
} from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { toHaveNoViolations, axe } from '@orxe-devkit/axe';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { CultureModule } from '@orxe-culture/angular';
import { SharedModule } from './shared/shared.module';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

expect.extend(toHaveNoViolations);

describe('AppComponent', () => {
  let component: AppComponent;
  let dom: any;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [RouterTestingModule,
        CoreModule,
        CultureModule,
        SharedModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    });
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    dom = fixture.nativeElement;
  }));

  test('should support WCAG Web Accessibility Guidelines', async () => {
    // fixture = TestBed.createComponent(AppComponent);
    // component = fixture.componentInstance;
    // dom = fixture.nativeElement;
    // expect(true).toBeTruthy();
    expect(await axe(dom)).toHaveNoViolations();
  });
});
