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
      temperment: 'evil',
      location: 'Mexico'
    },
    {
      name: 'Ghidorah',
      temperment: 'evil',
      location: 'Antarctica'
    }
  ];

  onAdd() {
    const kaijuToAdd = this.form.value;
    this.kaiju.unshift(kaijuToAdd);
    this.form.reset();
  }

  onDelete(name: string): void {
    this.kaiju = this.kaiju.filter(x => x.name !== name);
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
