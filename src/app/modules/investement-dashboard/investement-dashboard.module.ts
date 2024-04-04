import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InvestementDashboardRoutingModule } from './investement-dashboard-routing.module';
import { InvestementDashboardComponent } from './investement-dashboard.component';
import { CompanyEssentialComponent } from 'src/app/components/company-essential/company-essential.component';
import { EvaluationComponent } from 'src/app/components/evaluation/evaluation.component';
import { PerfomanceCardComponent } from 'src/app/components/perfomance-card/perfomance-card.component';
import { RatingComponent } from 'src/app/components/rating/rating.component';


@NgModule({
  declarations: [InvestementDashboardComponent, PerfomanceCardComponent, EvaluationComponent, RatingComponent, CompanyEssentialComponent],
  imports: [CommonModule, InvestementDashboardRoutingModule],
})
export class InvestementDashboardModule {}
