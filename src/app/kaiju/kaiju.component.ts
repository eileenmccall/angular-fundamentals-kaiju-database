import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-kaiju',
  templateUrl: './kaiju.component.html',
  styleUrls: ['./kaiju.component.css']
})
export class KaijuComponent implements OnInit {
  constructor() {}

  @Input() kaiju: any;

  ngOnInit() {}
}
