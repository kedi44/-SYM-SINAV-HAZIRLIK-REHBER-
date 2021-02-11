/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { YksComponent } from './yks.component';

describe('YksComponent', () => {
  let component: YksComponent;
  let fixture: ComponentFixture<YksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
