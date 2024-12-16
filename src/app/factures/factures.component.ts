import { Component, OnInit, OnDestroy } from '@angular/core';
import { FactureService } from '../services/facture.service';
import { Facture } from '../models/facture.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-factures',
  templateUrl: './factures.component.html',
})
export class FacturesComponent implements OnInit, OnDestroy {
  factures: Facture[] = []; // Liste des factures
  private facturesSubscription: Subscription | null = null; // Initialisation avec null

  constructor(private factureService: FactureService) {}

  ngOnInit(): void {
    // S'abonner à l'Observable pour récupérer les factures
    this.facturesSubscription = this.factureService
      .getFactures()
      .subscribe((factures) => {
        this.factures = factures; // Mettre à jour les factures à chaque émission
      });
  }

  // Méthode pour supprimer une facture
  deleteFacture(numero: number): void {
    this.factureService.deleteFacture(numero); // Supprimer la facture via le service
  }

  // Se désabonner lors de la destruction du composant
  ngOnDestroy(): void {
    if (this.facturesSubscription) {
      this.facturesSubscription.unsubscribe(); // Se désabonner pour éviter les fuites de mémoire
    }
  }
}
