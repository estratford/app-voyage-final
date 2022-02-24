import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { ForfaitService } from './forfait.service';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';


import { AppComponent } from './app.component';
import { ForfaitsComponent } from './components/forfaits/forfaits.component';
import { ForfaitItemComponent } from './components/forfait-item/forfait-item.component';
import { MiniForfaitsComponent } from './components/mini-forfaits/mini-forfaits.component';
import { MiniForfaitItemComponent } from './components/mini-forfait-item/mini-forfait-item.component';
import { StoreModule } from '@ngrx/store';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StarComponent } from './components/star/star.component';
import { BoutonCtaComponent } from './components/bouton-cta/bouton-cta.component';
import { FormulaireRechercheComponent } from './components/formulaire-recherche/formulaire-recherche.component';
import { FormulaireForfaitsComponent } from './components/formulaire-forfaits/formulaire-forfaits.component';
import { HeaderComponent } from './components/header/header.component';
import { ForfaitYComponent } from './components/forfait-y/forfait-y.component';
import { ForfaitXComponent } from './components/forfait-x/forfait-x.component';
import { AboutComponent } from './components/about/about.component';
import { TableForfaitsComponent } from './components/table-forfaits/table-forfaits.component';
import { DialogFormulaireForfaitsComponent } from './components/dialog-formulaire-forfaits/dialog-formulaire-forfaits.component';
import { NgChartsModule } from 'ng2-charts';
import { Graphique1Component } from './components/graphique1/graphique1.component';
import { Graphique2Component } from './components/graphique2/graphique2.component';
import { AccueilComponent } from './components/accueil/accueil.component';
import { FooterComponent } from './components/footer/footer.component';



@NgModule({
  declarations: [
    AppComponent,
    ForfaitsComponent,
    ForfaitItemComponent,
    MiniForfaitsComponent,
    MiniForfaitItemComponent,
    StarComponent,
    BoutonCtaComponent,
    FormulaireRechercheComponent,
    FormulaireForfaitsComponent,
    HeaderComponent,
    ForfaitYComponent,
    ForfaitXComponent,
    AboutComponent,
    TableForfaitsComponent,
    DialogFormulaireForfaitsComponent,
    Graphique1Component,
    Graphique2Component,
    AccueilComponent,
    FooterComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatCardModule, 
    MatButtonModule,
    NgChartsModule,
    MatIconModule, StoreModule.forRoot({}, {}), NgbModule,
  ],
  providers: [ForfaitService],
  bootstrap: [AppComponent]
})
export class AppModule { }
