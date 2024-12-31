import {Component, Inject, inject, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MemberService} from "./service/member.service";
import {Member} from "./model/member";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  providers: [MemberService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'zoekdeware'
  members!: Member[];

  constructor(private readonly memberService: MemberService) {
  }

  ngOnInit(): void {
    this.memberService.findAllMembers()
      .subscribe(result => {
        console.log("Got", result.length, "members"
        )
        this.members = result
      })
  }
}
