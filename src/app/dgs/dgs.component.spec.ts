/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DgsComponent } from './dgs.component';

describe('DgsComponent', () => {
  let component: DgsComponent;
  let fixture: ComponentFixture<DgsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DgsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DgsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
