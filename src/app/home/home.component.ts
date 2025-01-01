import {Component} from '@angular/core';
import {MemberComponent} from "../member/member.component";
import {AsyncPipe} from "@angular/common";
import {MemberService} from "../service/member.service";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MemberComponent,
    AsyncPipe
  ],
  template: `
    <h1>Laatste leden</h1>
    @if (members$ | async; as members) {
      @for (member of members; track member.id) {
        <app-member [member]="member"></app-member>
      }
    } @else {
      Geen leden gevonden!
    }
  `,
  styles: ``
})
export class HomeComponent {
  members$ = this.memberService.getMembers();

  constructor(private memberService: MemberService) {
  }
}
