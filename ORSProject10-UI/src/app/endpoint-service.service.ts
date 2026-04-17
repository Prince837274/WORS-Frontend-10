import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class EndpointServiceService {

  constructor() { }

  public SERVER_URL = "http://localhost:8084";
  public MESSAGE = this.SERVER_URL + "/Message";
  public USER = this.SERVER_URL + "/User";
  public ROLE = this.SERVER_URL + "/Role";
  public COLLEGE = this.SERVER_URL + "/College";
  public MARKSHEET = this.SERVER_URL + "/Marksheet";
  public STUDENT = this.SERVER_URL + "/Student";
  public SUBJECT = this.SERVER_URL + "/Subject";
  public FACULTY = this.SERVER_URL + "/Faculty";
  public COURSE = this.SERVER_URL + "/Course";
  public TIMETABLE = this.SERVER_URL + "/TimeTable";
  public JASPERREPORT = this.SERVER_URL + "/Jasper";

  

  public CUSTOMER = this.SERVER_URL + "/Customer"
 
  public DEVICE= this.SERVER_URL + "/device"

  public EMPLOYEE= this.SERVER_URL + "/Employee"

  public VENDOR= this.SERVER_URL + "/Vendor"

  public LIBRARY= this.SERVER_URL + "/Library"

  public BANK= this.SERVER_URL + "/Bank"
 
  public EVENT = this.SERVER_URL + "/Event"

  public CHARITY = this.SERVER_URL + "/Charity"

    public JOB = this.SERVER_URL + "/Job"

    public VACCINE = this.SERVER_URL + "/Vaccine"

    public PIPELINE = this.SERVER_URL + "/Pipeline"

    public MEDIA = this.SERVER_URL + "/Media"







 

 
 
 
 
 
 
 
 
 
 
 
 
 
 
 



 


}
