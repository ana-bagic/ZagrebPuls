import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { SERVER_URL } from '../app.config';
import { Event } from '../models/event';
@Injectable({ providedIn: 'root' })

export class EventsService {
    constructor(
        @Inject(SERVER_URL) private serverUrl: string, 
        private http: HttpClient
      ) {}

    getApiEndpoint() {
        console.log('Server URL:', this.serverUrl);
        return `${this.serverUrl}/api/endpoint`;
      }

  getEvents(): Observable<Event[]>  {
    const url = `${this.serverUrl}/events`;
    return this.http.get<Event[]>(url); // Makes a real GET request
  }

}