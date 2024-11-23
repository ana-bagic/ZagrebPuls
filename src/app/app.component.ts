import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { EventCardComponent } from './event-card/event-card.component';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-root',
  imports: [MatIconModule, RouterOutlet, EventCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'zagrebpuls';
}
