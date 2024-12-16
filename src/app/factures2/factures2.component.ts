import { Component, OnInit, OnDestroy } from '@angular/core';
import { FactureService } from '../services/facture.service';
import { Facture } from '../models/facture.model';
import { Subscription } from 'rxjs'; // Importation de Subscription pour gérer l'abonnement

@Component({
  selector: 'app-factures2',
  templateUrl: './factures2.component.html',
})
export class Factures2Component implements OnInit, OnDestroy {
  factures: Facture[] = []; // Liste des factures
  private facturesSubscription: Subscription | null = null; // Initialisation avec null

  constructor(private factureService: FactureService) {}

  ngOnInit(): void {
    // S'abonner à l'Observable des factures
    this.facturesSubscription = this.factureService
      .getFactures()
      .subscribe((factures) => {
        this.factures = factures; // Mettre à jour les factures chaque fois qu'elles changent
      });
  }

  // Se désabonner lors de la destruction du composant
  ngOnDestroy(): void {
    if (this.facturesSubscription) {
      this.facturesSubscription.unsubscribe(); // Se désabonner pour éviter les fuites de mémoire
    }
  }
}
