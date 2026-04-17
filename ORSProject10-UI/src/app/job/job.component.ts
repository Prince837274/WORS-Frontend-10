import { Component, OnInit } from '@angular/core';
import { BaseCtl } from '../base.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.css']
})
export class JobComponent extends BaseCtl {

  errorMessageName: string = '';

  constructor(public locator: ServiceLocatorService, public route: ActivatedRoute) {
    super(locator.endpoints.JOB, locator, route);
  }

   onUpload(userform: FormData) {
    this.submit();
    console.log(this.form.data.id + '---- after submit');

  }

  

  validateForm(form) {
    let flag = true;
    let validator = this.serviceLocator.dataValidator;
    flag = flag && validator.isNotNullObject(form.applicantName);
    flag = flag && validator.isNotNullObject(form.companyName);
    flag = flag && validator.isNotNullObject(form.position);
    flag = flag && validator.isNotNullObject(form.applicationdate);

    return flag;
  }

  populateForm(form, data) {
    form.id = data.id;
    form.applicantName = data.applicantName;
    form.companyName = data.companyName;
    form.position = data.position;
    form.applicationdate = data.applicationdate;
  }
 parseDate(dateString: string): Date {
    if (dateString) {
      return new Date(dateString);
    }
    return null;
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

