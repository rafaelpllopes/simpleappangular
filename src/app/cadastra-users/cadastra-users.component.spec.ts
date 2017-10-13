import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastraUsersComponent } from './cadastra-users.component';

describe('CadastraUsersComponent', () => {
  let component: CadastraUsersComponent;
  let fixture: ComponentFixture<CadastraUsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastraUsersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastraUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
