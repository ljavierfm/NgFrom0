import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';



import { AppComponent } from './app.component';
import { FechaActualComponent } from './fecha-actual/fecha-actual.component';
import { CopyrightComponent } from './copyright/copyright.component';
import { ViewmodeloSpecComponent } from './viewmodelo-spec/viewmodelo-spec.component';
import { EjmetodoComponent } from './ejmetodo/ejmetodo.component';
import { EjpropertybindingComponent } from './ejpropertybinding/ejpropertybinding.component';
import { EventbindingComponent } from './eventbinding/eventbinding.component';
import { Ej2waybindingComponent } from './ej2waybinding/ej2waybinding.component';
import { EjdirectivagifComponent } from './ejdirectivagif/ejdirectivagif.component';
import { EjdirectivastyleComponent } from './ejdirectivastyle/ejdirectivastyle.component';
import { EjdirectivangclassComponent } from './ejdirectivangclass/ejdirectivangclass.component';
import { EjdirectivangforComponent } from './ejdirectivangfor/ejdirectivangfor.component';
import { ArrayobjetosComponent } from './arrayobjetos/arrayobjetos.component';
import { EjdirectivangswitchComponent } from './ejdirectivangswitch/ejdirectivangswitch.component';
import { MenuitemDirective } from './menuitem.directive';
import { EjmidirectivaComponent } from './ejmidirectiva/ejmidirectiva.component';
import { PadreComponent } from './padre/padre.component';
import { HijoComponent } from './hijo/hijo.component';
import { EuroPipe } from './euro.pipe';


@NgModule({
  declarations: [
    AppComponent,
    FechaActualComponent,
    CopyrightComponent,
    ViewmodeloSpecComponent,
    EjmetodoComponent,
    EjpropertybindingComponent,
    EventbindingComponent,
    Ej2waybindingComponent,
    EjdirectivagifComponent,
    EjdirectivastyleComponent,
    EjdirectivangclassComponent,
    EjdirectivangforComponent,
    ArrayobjetosComponent,
    EjdirectivangswitchComponent,
    MenuitemDirective,
    EjmidirectivaComponent,
    PadreComponent,
    HijoComponent,
    EuroPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
