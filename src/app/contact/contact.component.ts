import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  contact = {
    name: '',
    email: '',
    message: '',
  };

  onSubmit() {
    // Juste pour tester si le formulaire fonctionne
    console.log('Formulaire soumis', this.contact);
  }
}
