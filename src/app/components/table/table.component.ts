import { Component, OnInit } from '@angular/core';
import { Event } from '../../domain/event';
import { EventService } from "../../services/eventService/event-service.service";
import { TableModule } from "primeng/table";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  events: Event[];
  cols: any[];

  constructor(private eventService: EventService) { }

  ngOnInit() {
    this.eventService.getEvents().then(events => this.events = events);
    this.cols = [
      { field: 'description', header: 'Description' },
      { field: 'date', header: 'Date' },
      { field: 'address', header: 'Location' }
    ];
  }

}
