import { Component, OnInit } from '@angular/core';
import { ProgressVerticalComponent } from '../../../../shared/components/progress-vertical/progress-vertical.component';
import { TypePropertyComponent } from './type-property/type-property.component';

@Component({
  selector: 'app-property-details',
  imports: [ProgressVerticalComponent, TypePropertyComponent],
  templateUrl: './property-details.component.html',
  styleUrl: './property-details.component.css',
})
export class PropertyDetailsComponent implements OnInit {
  currentStep: number = 1;
  constructor() {}

  ngOnInit(): void {}

  nextStep() {
    this.currentStep++;
  }

  backStep() {
    this.currentStep--;
  }
}
