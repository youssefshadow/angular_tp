import { Component, OnInit, OnDestroy } from '@angular/core';
import { FactureService } from '../../services/facture.service';
import { Facture } from '../../models/facture.model';
import { Subscription } from 'rxjs'; // Importation de Subscription pour gérer l'abonnement

@Component({
  selector: 'app-list-facture',
  templateUrl: './list-facture.component.html',
})
export class ListFactureComponent implements OnInit, OnDestroy {
  factures: Facture[] = []; // Liste des factures
  private facturesSubscription: Subscription | null = null;
  constructor(private factureService: FactureService) {}

  ngOnInit(): void {
    this.facturesSubscription = this.factureService
      .getFactures()
      .subscribe((factures) => {
        this.factures = factures; // Mettre à jour les factures chaque fois qu'elles changent
      });
  }

  // Supprimer une facture
  deleteFacture(numero: number): void {
    this.factureService.deleteFacture(numero); // Supprimer la facture via le service
    // Pas besoin d'appeler loadFactures() ici, car l'Observable se mettra à jour automatiquement
  }

  // Se désabonner lors de la destruction du composant
  ngOnDestroy(): void {
    if (this.facturesSubscription) {
      this.facturesSubscription.unsubscribe(); // Se désabonner pour éviter les fuites de mémoire
    }
  }
}
