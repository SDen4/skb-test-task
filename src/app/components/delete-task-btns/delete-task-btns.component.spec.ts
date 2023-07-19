import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteTaskBtnsComponent } from './delete-task-btns.component';

describe('DeleteTaskBtnsComponent', () => {
  let component: DeleteTaskBtnsComponent;
  let fixture: ComponentFixture<DeleteTaskBtnsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteTaskBtnsComponent]
    });
    fixture = TestBed.createComponent(DeleteTaskBtnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
