import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DispayOrgComponent } from './dispay-org.component';

describe('DispayOrgComponent', () => {
  let component: DispayOrgComponent;
  let fixture: ComponentFixture<DispayOrgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DispayOrgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DispayOrgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
