import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-kaiju',
  templateUrl: './kaiju.component.html',
  styleUrls: ['./kaiju.component.css']
})
export class KaijuComponent implements OnInit {
  constructor() {}

  @Input() kaiju: any;
  @Output() delete = new EventEmitter<string>();

  ngOnInit() {}
}
