import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CountriesService } from 'src/app/service/countries/countries.service';

@Component({
  selector: 'app-form-page',
  templateUrl: './form-page.component.html',
  styleUrls: ['./form-page.component.css'],
})
export class FormPageComponent implements OnInit {
  cardType: string;
  countryList: string[] = [];
  listOfCountires: string[] = [];

  constructor(private countriesService: CountriesService) {}

  ngOnInit(): void {
    this.listOfCountires = this.countriesService.getAllCountires();
  }

  onSubmit(form: NgForm) {
    console.log(form);
  }

  detectCardType(number: number) {
    var re = {
      electron: /^(4026|417500|4405|4508|4844|4913|4917)/,
      maestro: /^(5018|5020|5038|5612|5893|6304|6759|6761|6762|6763|0604|6390)/,
      dankort: /^(5019)/,
      interpayment: /^(636)/,
      unionpay: /^(62|88)/,
      visa: /^4/,
      mastercard: /^5/,
      amex: /^3/,
      discover: /^6(?:011|5[0-9]{2})[0-9]{12}$/,
      jcb: /^(?:2131|1800|35\d{3})/,
    };

    for (var key in re) {
      if (re[key].test(number)) {
        return key.toUpperCase();
      }
    }
  }

  cardNumberEntered(form: NgForm, event) {
    let lastPressedKey = event.key;
    let cardNumber = form.value.cardNumber1;
    cardNumber = cardNumber + lastPressedKey;
    if (cardNumber.length === 4) {
      this.cardType = this.detectCardType(cardNumber);
    }
  }

  // test(form) {
  //   console.log(form.value.country);
  // }
}
