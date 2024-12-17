import { Component, OnInit, OnDestroy } from '@angular/core';
import { FactureService } from '../services/facture.service';
import { Facture } from '../models/facture.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-factures',
  templateUrl: './factures.component.html',
})
export class FacturesComponent implements OnInit, OnDestroy {
  factures: Facture[] = [];
  private facturesSubscription: Subscription | null = null;

  constructor(private factureService: FactureService) {}

  ngOnInit(): void {
    // l'Observable pour récupérer les factures
    this.facturesSubscription = this.factureService
      .getFactures()
      .subscribe((factures) => {
        this.factures = factures;
      });
  }

  // Méthode pour supprimer une facture
  deleteFacture(numero: number): void {
    this.factureService.deleteFacture(numero);
  }

  ngOnDestroy(): void {
    if (this.facturesSubscription) {
      this.facturesSubscription.unsubscribe();
    }
  }
}
