import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class FormDataService {
  cardType: string;
  cardNumber: string;
  // firstName: string;
  // lastName: string;
  // phone: number;
  // email: string;
  // country: string;
  // state: string;
  // city: string;
  // street1: string;
  // street2: string;
  // zipCode: string;
  // CCV: string;
  // expiratiomMont: number;
  // expirationYeaar: number;
  // formData: NgForm;

  constructor() {}

  setCardNumber(cardNumber: string) {
    this.cardNumber = cardNumber;
  }

  setCardType(cardType: string) {
    this.cardType = cardType;
  }

  getCardNumber() {
    return this.cardNumber;
  }

  getCardType() {
    return this.cardType;
  }
}
