import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { inject } from '@angular/core';
import { HeaderComponent } from '../components/header/header.component';
import { DelegacyCardComponent } from '../shared/delegacy-card.component';
import { DelegacyService, DelegacyData } from '../shared/delegacy.service';

@Component({
  selector: 'app-redeapoio',
  standalone: true,
  imports: [HeaderComponent, CommonModule, DelegacyCardComponent],
  templateUrl: './redeapoio.component.html',
  styleUrl: './redeapoio.component.css',
})
export class RedeapoioComponent {
  private delegacyService = inject(DelegacyService);
  natalDelegacies: DelegacyData[] = this.delegacyService.getNatalDelegacies();
  interiorDelegacies: DelegacyData[] =
    this.delegacyService.getInteriorDelegacies();
}
