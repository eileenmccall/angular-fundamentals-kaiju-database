import { Component, OnInit, OnDestroy, OnChanges } from '@angular/core';

@Component({
  selector: 'app-kaiju-list',
  templateUrl: './kaiju-list.component.html',
  styleUrls: ['./kaiju-list.component.css']
})
export class KaijuListComponent implements OnInit, OnChanges, OnDestroy {
  constructor() {}

  kaiju = [
    {
      name: 'Godzilla',
      temperment: 'good',
      location: 'Japan'
    },
    {
      name: 'Mothra',
      temperment: 'good',
      location: 'China'
    },
    {
      name: 'Rodan',
      temperment: 'Mexico'
    },
    {
      name: 'Ghidorah',
      temperment: 'evil',
      location: 'Antarctica'
    }
  ];

  ngOnInit() {
    console.log('onInit fired!');
  }

  ngOnChanges() {
    console.log('onChanges fired!');
  }

  ngOnDestroy() {
    console.log('onDestroy fired!');
  }
}
