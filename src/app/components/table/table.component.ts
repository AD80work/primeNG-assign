import { Component, OnInit } from '@angular/core';
import { Event } from '../../domain/event';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  events: Event[];
  cols: any[];

  constructor() { }

  ngOnInit() {
    this.cols = [
      { field: 'description', header: 'Description' },
      { field: 'date', header: 'Date' },
      { field: 'address', header: 'Location' }
  ];
  }

}
