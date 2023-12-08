import {FormControl} from "@angular/forms";

export class Validator 
{
  static restrictedEmails(control: FormControl): 
  {[key: string]: boolean } 
  {
    if ((control.value).includes('.ru') ){return  {restrictedRusEmail: true};}
    return null as any;
  }
}