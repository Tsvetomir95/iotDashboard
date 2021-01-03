import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatButtonToggle } from '@angular/material';

@Component({
  selector: 'app-card-template',
  templateUrl: './card-template.component.html',
  styleUrls: ['./card-template.component.scss']
})
export class CardTemplateComponent implements OnInit {
  @Output() toggleOnOff = new EventEmitter<string>();
  @Input() title: string;
  @Input() subTitle: string;
  @Input() image: string;
  @Input() showImage: boolean = false;
  @Input() turnOnGauge: boolean;
  @Input() toggle: boolean;
  @Input() gaugeType: string = 'semi';
  @Input() gaugeValue: number = 70;
  @Input() gaugeLabel: string;
  @Input() gaugeAppendText: string = "%";
  colorScala = {
    '0': {color: 'green'},
    '40': {color: 'orange'},
    '75.5': {color: 'red'}
};

  constructor() { }

  ngOnInit() {
  }

  toggleOff() {
    this.toggleOnOff.emit('OFF');
  }

  toggleOn() {
    this.toggleOnOff.emit('ON');
  }
}
