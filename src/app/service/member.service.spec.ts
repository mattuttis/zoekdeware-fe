import {TestBed} from '@angular/core/testing';

import {MemberService} from './member.service';
import {HttpClient} from "@angular/common/http";
import {Member} from "../model/member";
import {of} from "rxjs";

describe('MemberService', () => {
  let service: MemberService;
  let httpSpy: jasmine.SpyObj<HttpClient>;

  beforeEach(() => {
    const spy = jasmine.createSpyObj('HttpClient', ['get']);

    TestBed.configureTestingModule({
      providers: [MemberService, {provide: HttpClient, useValue: spy}]
    });
    service = TestBed.inject(MemberService);
    httpSpy = TestBed.inject(HttpClient) as jasmine.SpyObj<HttpClient>;
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get members', () => {
    const stubMembers: Member[] = [
      {"id": "1", first_name: "John", last_name: "Doe"},
      {"id": "2", first_name: "Jane", last_name: "Doe"}
    ];
    httpSpy.get.and.returnValue(of(stubMembers));

    service.getMembers().subscribe(members => {
      expect(members.length).toBe(2);
    });
    expect(httpSpy.get).toHaveBeenCalled()
  });
});
