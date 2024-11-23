import { Component, OnInit } from '@angular/core';
import { Event } from '../../models/event';
import { EventsService } from '../../services/events.service';
import { CommonModule } from '@angular/common'; // Import CommonModule

@Component({
    selector: 'events',
    templateUrl: './events.component.html',
    imports: [CommonModule], // Add CommonModule here
  })
  export class EventListComponent implements OnInit {
    events: Event[] = [];
    loading: boolean = false;
    error: string | null = null;
  
    constructor(private eventApiService: EventsService) {}
  
    ngOnInit() {
      this.loading = true;
      this.eventApiService.getEvents().subscribe({
        next: (data) => {
          this.events = data;
          this.loading = false;
        },
        error: (err) => {
          this.error = 'Failed to fetch events. Please try again later.';
          this.loading = false;
        },
      });
    }
  }