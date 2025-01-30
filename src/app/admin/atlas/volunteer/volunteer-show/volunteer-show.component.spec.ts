import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VolunteerShowComponent } from './volunteer-show.component';

describe('VolunteerShowComponent', () => {
  let component: VolunteerShowComponent;
  let fixture: ComponentFixture<VolunteerShowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VolunteerShowComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VolunteerShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
