import { ComponentFixture, TestBed } from '@angular/core/testing';
import {of} from 'rxjs';

import { HeroDetailComponent } from './hero-detail.component';
import { ActivatedRoute } from '@angular/router';

describe('HeroDetailComponent', () => {
  let component: HeroDetailComponent;
  let fixture: ComponentFixture<HeroDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroDetailComponent ],
      providers: [{provide: ActivatedRoute, useValue: {snapshot: {params: of({id: 11})}}}]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
