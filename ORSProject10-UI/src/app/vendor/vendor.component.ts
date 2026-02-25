import { Component, OnInit } from '@angular/core';
import { BaseCtl } from '../base.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-vendor',
  templateUrl: './vendor.component.html',
  styleUrls: ['./vendor.component.css']
})
export class VendorComponent extends BaseCtl implements OnInit {

  errorMessageName: string = '';

  constructor(public locator: ServiceLocatorService, public route: ActivatedRoute) {
    super(locator.endpoints.VENDOR, locator, route);
  }

   onUpload(userform: FormData) {
    this.submit();
    console.log(this.form.data.id + '---- after submit');

  }

  

  validateForm(form) {
    let flag = true;
    let validator = this.serviceLocator.dataValidator;
    flag = flag && validator.isNotNullObject(form.vendorCode);
    flag = flag && validator.isNotNullObject(form.vendorName);
    flag = flag && validator.isNotNullObject(form.serviceType);
    flag = flag && validator.isNotNullObject(form.contactNumber);

    return flag;
  }

  populateForm(form, data) {
    form.id = data.id;
    form.vendorCode = data.vendorCode;
    form.vendorName = data.vendorName;
    form.serviceType = data.serviceType;
    form.contactNumber = data.contactNumber;
  }

  validateName(event: KeyboardEvent): void {

  const inputElement = event.target as HTMLInputElement;
  const inputChar = event.key;


  const alphaNumericPattern = /^[a-zA-Z0-9]$/;

  const allowedKeys = ['Backspace', 'Delete', 'Tab', 'ArrowLeft', 'ArrowRight'];

  if (!alphaNumericPattern.test(inputChar) && !allowedKeys.includes(inputChar)) {
    event.preventDefault();
    this.errorMessageName = 'Only alphabets and numbers are allowed.';
    return;
  }

  setTimeout(() => {
    const value = inputElement.value;

    if (value.length < 3) {
      this.errorMessageName = 'FullName must be at least 3 characters long.';
    } 
    else if (value.length > 15) {
      this.errorMessageName = 'FullName must not exceed 15 characters.';
    } 
    else {
      this.errorMessageName = '';
    }
  }, 0);
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
