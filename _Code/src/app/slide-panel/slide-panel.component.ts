import { Component, OnInit, Input } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-slide-panel',
  templateUrl: './slide-panel.component.html',
  styleUrls: ['./slide-panel.component.css'],
  animations: [
    trigger('showState', [
      state('true', style({transform: 'translateX(0)'})),
      state('false', style({visibility: 'hidden'})),
      transition('false => true', [
        style({transform: 'translateX(-100%)'}),
        animate('0.5s ease-in')
      ]),
      transition('true => false', [
        animate('0.5s ease-out', style({transform: 'translateX(100%)'}))
      ])
    ])
  ]
})
export class SlidePanelComponent implements OnInit {
  // Input Members
  @Input()
  show = false;

  constructor() { }

  ngOnInit() {
  }

}
