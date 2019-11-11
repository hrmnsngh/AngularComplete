import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from '../app/home/home.component';import { from } from 'rxjs';
import { PageNotFoundComponent } from '../app/page-not-found/page-not-found.component';

@NgModule({
    imports:[
        RouterModule.forRoot([        {path: 'home', component: HomeComponent},
        {path: '', redirectTo: 'home', pathMatch: 'full'},
        {path: '**', component: PageNotFoundComponent}])
    ],
    exports: [RouterModule]
})

export class AppRoutingModule{}