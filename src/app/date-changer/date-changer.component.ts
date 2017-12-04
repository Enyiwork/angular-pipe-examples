import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-changer',
  templateUrl: './date-changer.component.html',
  styleUrls: ['./date-changer.component.css']
})
export class DateChangerComponent implements OnInit {
  rightNow: Date = new Date();

  constructor() { }

  ngOnInit() {
  }

  addOneHour() {
    // make a copy of the date so that Angulat detects the change
    const dateCopy = new Date(this.rightNow);

   // get the new hours by adding q to the old hours
    const newHours = this.rightNow.getHours() + 1;

    // set the new hours in the coppied date objects
    dateCopy.setHours(newHours);

    // save the copy as the new date
    this.rightNow = dateCopy;

  } // addOneHour()

  addDays(amountOfDays) {
     // make a copy of the date so that angular detect the change
     const dateCopy = new Date(this.rightNow);

     // get the new day by adding to the old day
     const newDay = this.rightNow.getDate() + amountOfDays;

     // set the new day in the copied dat object
     dateCopy.setDate(newDay);

     // replace the old date with the copy
     this.rightNow = dateCopy;
  } // addDays()

}
