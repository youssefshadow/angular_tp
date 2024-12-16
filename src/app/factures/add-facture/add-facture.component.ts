// src/app/factures/add-facture/add-facture.component.ts
import { Component } from '@angular/core';
import { FactureService } from '../../services/facture.service';
import { Facture } from '../../models/facture.model';

@Component({
  selector: 'app-add-facture',
  templateUrl: './add-facture.component.html',
})
export class AddFactureComponent {
  // Déclaration des propriétés de la facture
  numero: number = 0;
  montant: number = 0;
  nomClient: string = '';
  villeClient: string = '';

  constructor(private factureService: FactureService) {}

  // Méthode pour ajouter une facture
  addFacture() {
    const newFacture: Facture = {
      numero: this.numero,
      montant: this.montant,
      nomClient: this.nomClient,
      villeClient: this.villeClient,
    };

    this.factureService.addFacture(newFacture);
    console.log('Facture ajoutée localement', newFacture);
  }

  // Méthode pour supprimer une facture
  deleteFacture(numero: number) {
    this.factureService.deleteFacture(numero);
    console.log(`Facture avec numéro ${numero} supprimée.`);
  }
}
