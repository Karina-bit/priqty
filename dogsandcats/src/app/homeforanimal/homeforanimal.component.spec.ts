import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeforanimalComponent } from './homeforanimal.component';

describe('HomeforanimalComponent', () => {
  let component: HomeforanimalComponent;
  let fixture: ComponentFixture<HomeforanimalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeforanimalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeforanimalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
