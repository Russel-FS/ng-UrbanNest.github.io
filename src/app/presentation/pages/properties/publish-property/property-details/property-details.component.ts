import { Component, OnInit } from '@angular/core';
import { ProgressVerticalComponent } from '../../../../shared/components/progress-vertical/progress-vertical.component';
import { TypePropertyComponent } from './type-property/type-property.component';
import { LocationComponent } from './location/location.component';
import { CommonModule } from '@angular/common';
import { CharacteristicsComponent } from './characteristics/characteristics.component';
import { ProgressTrackerServiceService } from '../../../../../core/services/progress-tracker-service.service';

@Component({
  selector: 'app-property-details',
  imports: [
    ProgressVerticalComponent,
    TypePropertyComponent,
    LocationComponent,
    CommonModule,
    CharacteristicsComponent,
  ],
  templateUrl: './property-details.component.html',
  styleUrls: ['./property-details.component.css'],
})
export class PropertyDetailsComponent implements OnInit {
  currentStep: number = 1;
  constructor(private progressTrackerService: ProgressTrackerServiceService) {}

  ngOnInit(): void {}

  nextStep(): void {
    this.currentStep++;
  }

  backStep(): void {
    if (this.currentStep > 1) {
      this.currentStep--;
    }
  }

  continue(): void {
    this.progressTrackerService.nextStep();
  }
}
