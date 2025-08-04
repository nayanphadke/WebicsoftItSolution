import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerLeaveApprovalsComponent } from './manager-leave-approvals.component';

describe('ManagerLeaveApprovalsComponent', () => {
  let component: ManagerLeaveApprovalsComponent;
  let fixture: ComponentFixture<ManagerLeaveApprovalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManagerLeaveApprovalsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagerLeaveApprovalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
