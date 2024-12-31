import {Inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Member} from "../model/member";

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  constructor(private readonly http: HttpClient) { }

  findAllMembers(): Observable<Member[]>{
    return this.http.get<Member[]>('http://localhost:8000/members');
  }
}
