import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtlsDashboardComponent } from './atls-dashboard.component';

describe('AtlsDashboardComponent', () => {
  let component: AtlsDashboardComponent;
  let fixture: ComponentFixture<AtlsDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AtlsDashboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtlsDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
