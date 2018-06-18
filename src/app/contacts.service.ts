import { Injectable } from '@angular/core';

interface IContact{
  name: string;
  number: string;
}

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  constructor() { }

  getContacts(){
    let contacts: IContact[] = [{
        name:'Janez',
        number:'8317502949'
      },
      {
        name:'John',
        number:'3649286289'
      },
      {
        name:'Mary',
        number:'9764582168'
      },
      {
        name:'Jasmine',
        number:'1348679254'
      }
    ];

    return contacts;
  }
}
