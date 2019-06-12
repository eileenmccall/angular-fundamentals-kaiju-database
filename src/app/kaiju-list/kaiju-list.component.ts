import { Component, OnInit, OnDestroy, OnChanges } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-kaiju-list',
  templateUrl: './kaiju-list.component.html',
  styleUrls: ['./kaiju-list.component.css']
})
export class KaijuListComponent implements OnInit, OnChanges, OnDestroy {
  constructor() {}

  form = new FormGroup({
    name: new FormControl(''),
    location: new FormControl(''),
    temperment: new FormControl('')
  });

  onAdd() {}

  kaiju = [
    {
      id: 1,
      name: 'Godzilla',
      temperment: 'good',
      location: 'Japan'
    },
    {
      id: 2,
      name: 'Mothra',
      temperment: 'good',
      location: 'China'
    },
    {
      id: 3,
      name: 'Rodan',
      temperment: 'evil',
      location: 'Mexico'
    },
    {
      id: 4,
      name: 'Ghidorah',
      temperment: 'evil',
      location: 'Antarctica'
    }
  ];

  onDelete(id: number): void {
    this.kaiju = this.kaiju.filter(x => x.id !== id);
  }

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
