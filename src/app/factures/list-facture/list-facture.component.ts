import { Component, OnInit, OnDestroy } from '@angular/core';
import { FactureService } from '../../services/facture.service';
import { Facture } from '../../models/facture.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-list-facture',
  templateUrl: './list-facture.component.html',
})
export class ListFactureComponent implements OnInit, OnDestroy {
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

  // Supprimer une facture
  deleteFacture(numero: number): void {
    this.factureService.deleteFacture(numero);
  }

  ngOnDestroy(): void {
    if (this.facturesSubscription) {
      this.facturesSubscription.unsubscribe();
    }
  }
}
