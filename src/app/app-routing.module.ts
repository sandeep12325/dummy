import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FromeventComponent } from './rxjs/fromevent/fromevent.component';
import { FormComponent } from './form/form.component';
import { EnumComponent } from './enum/enum.component';
import { FlipcardComponent } from './flipcard/flipcard.component';
import { NavComponent } from './nav/nav.component';
import { UploadComponent } from './file/upload/upload.component';
import { TableComponent } from './mat/table/table.component';
import { UserFormComponent } from './mat/user-form/user-form.component';

const routes: Routes = [
  { path: 'from', component: FromeventComponent },
  { path: 'nav', component: NavComponent },
  { path: 'form', component: FormComponent },
  { path: 'enum', component: EnumComponent, data: { 'name': "mr_singh" } },
  { path: "table", loadChildren: () => import('./table/table.module').then(m => m.TableModule) },
  { path: 'flipcard', component: FlipcardComponent },
  { path: 'file', component: UploadComponent },
  { path: 'matTable', component: TableComponent },
  { path: 'userform', component: UserFormComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
