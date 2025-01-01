import {ComponentFixture, TestBed} from '@angular/core/testing';

import {HomeComponent} from './home.component';
import {MemberService} from "../service/member.service";
import {of} from "rxjs";

const memberServiceStub = {
  getMembers: () => of([
    {"id": "1", first_name: "John", last_name: "Doe"},
    {"id": "2", first_name: "Jane", last_name: "Doe"}
  ])
}

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeComponent],
      providers: [{provide: MemberService, useValue: memberServiceStub}],
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have rendered the received members', () => {
    const memberElement: HTMLElement = fixture.nativeElement;
    const allAppMemberElements = memberElement.querySelectorAll('app-member');

    expect(allAppMemberElements.length).toBe(2);
    expect(allAppMemberElements[0].querySelector('mat-card-title')?.textContent).toContain('John Doe');
    expect(allAppMemberElements[1].querySelector('mat-card-title')?.textContent).toContain('Jane Doe');
  });
});
