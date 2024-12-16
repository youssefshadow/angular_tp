import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs'; // Importation de BehaviorSubject
import { Facture } from '../models/facture.model';

@Injectable({
  providedIn: 'root',
})
export class FactureService {
  private facturesSubject: BehaviorSubject<Facture[]> = new BehaviorSubject<
    Facture[]
  >([]); // Observable qui contient la liste des factures
  private factures: Facture[] = []; // Tableau interne pour stocker les factures (optionnel)

  constructor() {}

  // Méthode pour récupérer les factures en tant qu'Observable
  getFactures() {
    return this.facturesSubject.asObservable(); // Retourne un Observable des factures
  }

  // Méthode pour ajouter une facture
  addFacture(facture: Facture): void {
    this.factures.push(facture);
    this.facturesSubject.next([...this.factures]); // Émet la nouvelle liste de factures
    console.log('Facture ajoutée:', facture);
  }

  // Méthode pour supprimer une facture par son numéro
  deleteFacture(numero: number): void {
    const index = this.factures.findIndex(
      (facture) => facture.numero === numero
    );
    if (index !== -1) {
      const deletedFacture = this.factures.splice(index, 1)[0];
      this.facturesSubject.next([...this.factures]); // Émet la nouvelle liste après suppression
      console.log('Facture supprimée:', deletedFacture);
    } else {
      console.log(`Facture avec numéro ${numero} introuvable.`);
    }
  }

  // Méthode pour mettre à jour une facture existante
  updateFacture(numero: number, updatedFacture: Facture): void {
    const index = this.factures.findIndex(
      (facture) => facture.numero === numero
    );
    if (index !== -1) {
      this.factures[index] = updatedFacture;
      this.facturesSubject.next([...this.factures]); // Émet la nouvelle liste après mise à jour
      console.log('Facture mise à jour:', updatedFacture);
    } else {
      console.log(
        `Facture avec numéro ${numero} introuvable pour mise à jour.`
      );
    }
  }
}
