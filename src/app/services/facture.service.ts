import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Facture } from '../models/facture.model';

@Injectable({
  providedIn: 'root',
})
export class FactureService {
  private facturesSubject: BehaviorSubject<Facture[]> = new BehaviorSubject<
    Facture[]
  >([]);
  private factures: Facture[] = [];

  constructor() {}

  // Méthode pour récupérer les factures Observable
  getFactures() {
    return this.facturesSubject.asObservable();
  }

  // Méthode pour ajouter une facture
  addFacture(facture: Facture): void {
    this.factures.push(facture);
    this.facturesSubject.next([...this.factures]);
    console.log('Facture ajoutée:', facture);
  }

  // Méthode pour supprimer une facture par son numéro
  deleteFacture(numero: number): void {
    const index = this.factures.findIndex(
      (facture) => facture.numero === numero
    );
    if (index !== -1) {
      const deletedFacture = this.factures.splice(index, 1)[0];
      this.facturesSubject.next([...this.factures]);
      // le console.log pour confifmer le process
      console.log('Facture supprimée:', deletedFacture);
    } else {
      console.log(`Facture avec numéro ${numero} introuvable.`);
    }
  }
}
