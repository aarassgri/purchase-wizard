import { Injectable } from '@angular/core';
import { Tab } from '../model/tab-model';

@Injectable({
  providedIn: 'root',
})
export class TabDataService {
  allTabs: Tab[] = [];
  selectedTab: Tab;

  constructor() {
    let tabP1 = new Tab(
      'Personal-1',
      ['Reason to choose1', 'Reason to choose2', 'Reason to choose3'],
      100
    );
    let tabP2 = new Tab(
      'Personal-2',
      [
        'Reason to choose1',
        'Reason to choose2',
        'Reason to choose3',
        'Reason to choose4',
      ],
      200
    );
    let tabP3 = new Tab(
      'Personal-3',
      [
        'Reason to choose1',
        'Reason to choose2',
        'Reason to choose3',
        'Reason to choose4',
        'Reason to choose5',
      ],
      300
    );
    let tabE1 = new Tab(
      'Enterprise-1',
      ['Reason to choose1', 'Reason to choose2', 'Reason to choose3'],
      1000
    );
    let tabE2 = new Tab(
      'Enterprise-2',
      [
        'Reason to choose1',
        'Reason to choose2',
        'Reason to choose3',
        'Reason to choose4',
      ],
      2000
    );
    let tabE3 = new Tab(
      'Enterprise-3',
      [
        'Reason to choose1',
        'Reason to choose2',
        'Reason to choose3',
        'Reason to choose4',
        'Reason to choose5',
      ],
      3000
    );

    this.allTabs.push(tabP1, tabP2, tabP3, tabE1, tabE2, tabE3);
  }

  getAllTabs() {
    return this.allTabs;
  }

  selectTab(tab: Tab) {
    this.selectedTab = tab;
  }
}
