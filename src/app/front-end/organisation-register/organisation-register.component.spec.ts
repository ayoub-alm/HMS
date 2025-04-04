import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganisationRegisterComponent } from './organisation-register.component';

describe('OrganisationRegisterComponent', () => {
  let component: OrganisationRegisterComponent;
  let fixture: ComponentFixture<OrganisationRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrganisationRegisterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrganisationRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
