import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// FormsModule is required to use "ngModel"
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CryptoTrackerComponent } from './crypto-tracker/crypto-tracker.component';
import { DateChangerComponent } from './date-changer/date-changer.component';
import { EmojifyPipe } from './my-pipes/emojify.pipe';
import { RaulFilterComponent } from './raul-filter/raul-filter.component';
import { MyPipesComponent } from './my-pipes/my-pipes.component';
import { SearchByNamePipe } from './my-pipes/search-by-name.pipe';


@NgModule({
  declarations: [
    AppComponent,
    CryptoTrackerComponent,
    DateChangerComponent,
    EmojifyPipe,
    RaulFilterComponent,
    MyPipesComponent,
    SearchByNamePipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
