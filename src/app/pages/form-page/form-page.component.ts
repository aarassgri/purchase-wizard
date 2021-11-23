import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CountriesService } from 'src/app/service/countries/countries.service';
import { FormDataService } from 'src/app/service/form-data.service';

@Component({
  selector: 'app-form-page',
  templateUrl: './form-page.component.html',
  styleUrls: ['./form-page.component.css'],
})
export class FormPageComponent implements OnInit {
  cardType: string;
  countryList: string[] = [];
  listOfCountires: string[] = [];

  constructor(
    private countriesService: CountriesService,
    private formDataService: FormDataService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.listOfCountires = this.countriesService.getAllCountires();
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

  onSubmit(form: NgForm) {
    let fullCardNumber = form.value.cardNumber1
      .toString()
      .concat(
        ' ',
        form.value.cardNumber2.toString(),
        ' ',
        form.value.cardNumber3.toString(),
        ' ',
        form.value.cardNumber4.toString()
      );
    this.formDataService.setCardNumber(fullCardNumber);
    this.formDataService.setCardType(this.cardType);
    this.router.navigate(['/order-preview']);
  }

  // test(form: NgForm) {
  //   console.log(form);
  // }
}
