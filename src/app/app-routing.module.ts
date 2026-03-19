import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FromeventComponent } from './rxjs/fromevent/fromevent.component';
import { FormComponent } from './form/form.component';
import { EnumComponent } from './enum/enum.component';
import { FlipcardComponent } from './flipcard/flipcard.component';

const routes: Routes = [
  { path: 'from', component: FromeventComponent },
  { path: 'form', component: FormComponent },
  { path: 'enum', component: EnumComponent, data: { 'name': "mr_singh" } },
  { path: "table", loadChildren: () => import('./table/table.module').then(m => m.TableModule) },
  { path: 'flipcard', component: FlipcardComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
