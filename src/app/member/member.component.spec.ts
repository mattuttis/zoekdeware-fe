import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberComponent } from './member.component';
import {Member} from "../model/member";

describe('MemberComponent', () => {
  let component: MemberComponent;
  let fixture: ComponentFixture<MemberComponent>;
  let expectedMember: Member;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MemberComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MemberComponent);
    component = fixture.componentInstance;
    expectedMember = {
      id: '1',
      first_name: 'John',
      last_name: 'Doe'}
    component.member = expectedMember;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should renter the title', () => {
    const memberElement: HTMLElement = fixture.nativeElement;
    expect(memberElement.querySelector('mat-card-title')?.textContent).toContain('John Doe');
  });
});
