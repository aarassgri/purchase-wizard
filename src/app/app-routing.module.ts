import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormPageComponent } from './pages/form-page/form-page.component';
import { OrderPreviewComponent } from './pages/order-preview/order-preview.component';
import { PlanSelectorComponent } from './pages/plan-selector/plan-selector.component';

const routes: Routes = [
  { path: '', component: PlanSelectorComponent },
  { path: 'form', component: FormPageComponent },
  { path: 'order-preview', component: OrderPreviewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
