import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowLeaveHistoryComponent } from './show-leave-history.component';

describe('ShowLeaveHistoryComponent', () => {
  let component: ShowLeaveHistoryComponent;
  let fixture: ComponentFixture<ShowLeaveHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowLeaveHistoryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowLeaveHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
