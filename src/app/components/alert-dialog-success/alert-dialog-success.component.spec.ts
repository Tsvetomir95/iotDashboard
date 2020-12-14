import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertDialogSuccessComponent } from './alert-dialog-success.component';

describe('AlertDialogSuccessComponent', () => {
  let component: AlertDialogSuccessComponent;
  let fixture: ComponentFixture<AlertDialogSuccessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlertDialogSuccessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertDialogSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
