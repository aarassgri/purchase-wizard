import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Tab } from 'src/app/model/tab-model';
import { TabDataService } from 'src/app/service/tab-data.service';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css'],
})
export class TabComponent implements OnInit {
  @Input() tab: Tab;

  constructor(private tabDataService: TabDataService, private router: Router) {}

  ngOnInit(): void {}

  onClick() {
    this.tabDataService.selectTab(this.tab);
  }
}
