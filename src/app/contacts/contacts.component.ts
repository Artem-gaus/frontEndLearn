import { ContactsService } from './../contacts.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  contacts: any[];

  constructor(
    private contactsService: ContactsService,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.contacts = this.contactsService.getContacts();
  }

  add(){
    let dialogRef = this.dialog.open(AddContactDialog);

    dialogRef.afterClosed().subscribe(contact => {
      if(contact){
        this.contacts.push(contact);
      }
    });
  }

  delete(contact){
    this.contacts.splice(this.contacts.indexOf(contact) , 1);
  }
}

@Component({
  selector: 'add-contact-dialog',
  template: `
    <h1 mat-dialog-title>Add contact</h1>
    
    <form>
      <mat-form-field>
        <input matInput #contactName placeholder="Contact name">
      </mat-form-field>
      <mat-form-field>
        <input matInput #contactNumber placeholder="Contact number">
      </mat-form-field>
    </form>

    <button class="margin-button" mat-raised-button color="primary"
      (click)="dialogRef.close({
        name: contactName.value,
        number: contactNumber.value
      })">Save</button>
    <button mat-raised-button (click)="dialogRef.close()">
      Close dialog</button>
  `
})
export class AddContactDialog{
  constructor(
    public dialogRef: MatDialogRef<AddContactDialog>
  ){}
}
