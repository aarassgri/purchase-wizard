import { Component, OnInit } from '@angular/core';
import { Tab } from 'src/app/model/tab-model';
import { TabDataService } from 'src/app/service/tab-data.service';

@Component({
  selector: 'app-plan-selector',
  templateUrl: './plan-selector.component.html',
  styleUrls: ['./plan-selector.component.css'],
})
export class PlanSelectorComponent implements OnInit {
  allTabs: Tab[] = [];
  personalTabs: Tab[] = [];
  enterpriseTabs: Tab[] = [];

  constructor(private tabDataService: TabDataService) {}

  ngOnInit(): void {
    this.allTabs = this.tabDataService.getAllTabs();
    this.allTabs.forEach((value) => {
      if (value.heading.substr(0, 8) === 'PERSONAL') {
        this.personalTabs.push(value);
      } else {
        this.enterpriseTabs.push(value);
      }
    });
  }
}
