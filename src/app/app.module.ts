import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlanSelectorComponent } from './pages/plan-selector/plan-selector.component';
import { TabComponent } from './components/tab/tab.component';
import { FormPageComponent } from './pages/form-page/form-page.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PlanSelectorComponent,
    TabComponent,
    FormPageComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
