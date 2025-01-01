import {Component} from '@angular/core';
import {MemberComponent} from "../member/member.component";
import {AsyncPipe, NgForOf} from "@angular/common";
import {MemberService} from "../service/member.service";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MemberComponent,
    NgForOf,
    AsyncPipe
  ],
  template: `
    <h1>Laatste leden</h1>
    <app-member *ngFor="let member of members$ | async" [member]="member"></app-member>
  `,
  styles: ``
})
export class HomeComponent {
  members$ = this.memberService.members$

  constructor(private memberService: MemberService) {
  }
}
