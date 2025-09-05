import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgCommands } from './ng-commands.component';

describe('NgCommands', () => {
  let component: NgCommands;
  let fixture: ComponentFixture<NgCommands>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgCommands],
    }).compileComponents();

    fixture = TestBed.createComponent(NgCommands);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
