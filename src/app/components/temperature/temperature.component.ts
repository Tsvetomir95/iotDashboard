import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSlider } from '@angular/material';

@Component({
  selector: 'app-temperature',
  templateUrl: './temperature.component.html',
  styleUrls: ['./temperature.component.scss']
})
export class TemperatureComponent implements OnInit {
  @ViewChild('slider', {static: false}) slider: MatSlider;
  sliderValue = 1; 
  gaugeType = "semi";
  gaugeValue = 0;
  gaugeLabel = "Gradus Celsius";
  gaugeAppendText = "°C";
  constructor() { }

  ngOnInit() {
  }
  sliderValueHasChange(value: MatSlider) {
    this.gaugeValue = value.value;
  }
  sliderCheck() {
    this.gaugeValue -= 1;
    this.slider.value = this.gaugeValue;
    console.log(this.slider.value);
  }

  sliderCheckAdd() {
    this.gaugeValue += 1;
    this.slider.value = this.gaugeValue;
  }
}
