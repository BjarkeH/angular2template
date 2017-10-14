import {NgModule} from '@angular/core';

import {RouterModule, Routes} from '@angular/router';

import {HomeComponent} from './HomeComponent/home.component';
import {ErrorComponent} from './ErrorComponent/error.component';

const routes:Routes = [
  {path: 'home', component: HomeComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', component: ErrorComponent}  
]

@NgModule({
  imports: [    
    RouterModule.forRoot(routes, {useHash: true})
  ],
  declarations: [
    HomeComponent,
    ErrorComponent
  ],
  exports: [HomeComponent, ErrorComponent]  
})
export class WebsiteModule {}
