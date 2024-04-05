import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-investement-dashboard',
  templateUrl: './investement-dashboard.component.html',
  styleUrls: ['./investement-dashboard.component.scss'],
})
export class InvestementDashboardComponent {
  constructor(private location: Location) {}

  goBack(): void {
    // Use the back method of the Location service to go back to the previous page
    this.location.back();
  }
}
