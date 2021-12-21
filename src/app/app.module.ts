import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonComponent } from './components/_master-components/buttons/button.component';
import { ButtonExamplesComponent } from './components/button-examples/button-examples.component';
import { ButtonBaseComponent } from './components/button-examples/button-base/button-base.component';
import { ButtonOutlineComponent } from './components/button-examples/button-outline/button-outline.component';
import { ButtonWithIconComponent } from './components/button-examples/button-with-icon/button-with-icon.component';
import { CardsComponent } from './components/_master-components/cards/cards.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    ButtonExamplesComponent,
    ButtonBaseComponent,
    ButtonOutlineComponent,
    ButtonWithIconComponent,
    CardsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
