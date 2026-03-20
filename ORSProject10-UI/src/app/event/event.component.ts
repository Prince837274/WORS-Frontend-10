import { Component, OnInit } from '@angular/core';
import { BaseCtl } from '../base.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent extends BaseCtl implements OnInit {

  errorMessageName: string = '';

  constructor(public locator: ServiceLocatorService, public route: ActivatedRoute) {
    super(locator.endpoints.EVENT, locator, route);
  }


  }

  

  validateForm(form) {
    let flag = true;
    let validator = this.serviceLocator.dataValidator;
    flag = flag && validator.isNotNullObject(form.eventName);
    flag = flag && validator.isNotNullObject(form.bookingDate);
    flag = flag && validator.isNotNullObject(form.seats);
    

    return flag;
  }

  populateForm(form, data) {
    form.id = data.id;
    form.eventName = data.eventName;
    form.bookingDate = data.bookingDate;
    form.seats = data.seats;
  }

  validateName(event: KeyboardEvent): void {
    const inputValue = (event.target as HTMLInputElement).value;
    const inputChar = event.key;
    const alphabetPattern = /^[a-zA-Z]*$/;  // Pattern to match only alphabetic characters

    if (!alphabetPattern.test(inputChar) && !['Backspace', 'Delete', 'Tab'].includes(inputChar)) {
      event.preventDefault();
      this.errorMessageName = 'Only alphabets are allowed.';
      return;
    }

    if (inputValue.length < 3) {
      this.errorMessageName = 'fullName must be at least 3 characters long.';
    } else if (inputValue.length > 15) {
      this.errorMessageName= 'fullName must not exceed 15 characters.';
    } else {
      this.errorMessageName= '';  // Clear error message if valid
    }
  }

  validateAlphabetInput(event) {
    const charCode = event.which || event.keyCode;
    const charStr = String.fromCharCode(charCode);

    // Regular expression to test if the character is a letter
    if (!/^[a-zA-Z]+$/.test(charStr)) {
      event.preventDefault();
    }
  }

}


