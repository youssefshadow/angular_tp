import { Component, OnInit, OnDestroy } from '@angular/core';
import { FactureService } from '../services/facture.service';
import { Facture } from '../models/facture.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-factures2',
  templateUrl: './factures2.component.html',
})
export class Factures2Component implements OnInit, OnDestroy {
  factures: Facture[] = [];
  private facturesSubscription: Subscription | null = null;

  constructor(private factureService: FactureService) {}

  ngOnInit(): void {
    this.facturesSubscription = this.factureService
      .getFactures()
      .subscribe((factures) => {
        this.factures = factures;
      });
  }

  ngOnDestroy(): void {
    if (this.facturesSubscription) {
      this.facturesSubscription.unsubscribe();
    }
  }
}
