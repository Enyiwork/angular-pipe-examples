import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// FormsModule is required to use "ngModel"
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CryptoTrackerComponent } from './crypto-tracker/crypto-tracker.component';
import { DateChangerComponent } from './date-changer/date-changer.component';
import { MyPipesEmojifyPipe } from './my-pipes-emojify.pipe';


@NgModule({
  declarations: [
    AppComponent,
    CryptoTrackerComponent,
    DateChangerComponent,
    MyPipesEmojifyPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
