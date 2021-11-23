import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormDataService } from 'src/app/service/form-data.service';
import { TabDataService } from 'src/app/service/tab-data.service';

@Component({
  selector: 'app-order-preview',
  templateUrl: './order-preview.component.html',
  styleUrls: ['./order-preview.component.css'],
})
export class OrderPreviewComponent implements OnInit {
  cardNumber: string;
  hiddenCarnNumber: string;
  cardType: string;
  subscription: string;
  price: number;

  constructor(
    private formDataService: FormDataService,
    private tabDataService: TabDataService
  ) {}

  ngOnInit(): void {
    this.cardNumber = this.formDataService.getCardNumber();
    this.hiddenCarnNumber = this.hideDigits(this.cardNumber);
    this.cardType = this.formDataService.getCardType();
    this.subscription = this.tabDataService.selectedTab.heading;
    this.price = this.tabDataService.selectedTab.price;
  }

  hideDigits(number: string) {
    var pattern = /\d/g;
    return (
      number.substring(0, 15).replace(pattern, '*') + number.substring(-4, 4)
    );
  }

  onClick() {}
}
