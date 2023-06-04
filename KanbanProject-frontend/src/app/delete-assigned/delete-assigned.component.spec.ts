import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteAssignedComponent } from './delete-assigned.component';

describe('DeleteAssignedComponent', () => {
  let component: DeleteAssignedComponent;
  let fixture: ComponentFixture<DeleteAssignedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteAssignedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteAssignedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
