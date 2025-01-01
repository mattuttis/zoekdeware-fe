import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Member} from "../model/member";

@Injectable({
  providedIn: 'root'
})
export class MemberService {
  members$ = this.http.get<Member[]>('http://localhost:8000/members');

  constructor(private readonly http: HttpClient) { }
  //
  // findAllMembers(): Observable<Member[]>{
  //   return ;
  // }
}
