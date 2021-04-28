import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarBfComponent } from './navbar-bf.component';

describe('NavbarBfComponent', () => {
  let component: NavbarBfComponent;
  let fixture: ComponentFixture<NavbarBfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarBfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarBfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
