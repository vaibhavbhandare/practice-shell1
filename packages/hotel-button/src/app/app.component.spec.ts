import {
  async,
  ComponentFixture,
  TestBed
} from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CultureModule } from '@orxe-culture/angular';
import { SharedModule } from '@shared/shared.module';
import { AppComponent } from './app.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CoreModule } from './core/core.module';


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

  test('should exist', () => {
    expect(component).toBeDefined();
  });

  test('should have a default name', () => {
    expect(component.title).toBe('hotel-App');
  });

  test('should have call ngOnInit method', () => {
    fixture.detectChanges();
    expect(component.ngOnInit()).toBeUndefined();
  });
});
