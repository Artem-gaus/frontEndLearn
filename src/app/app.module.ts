import { ContactsService } from './contacts.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material.module';
import { Routes, RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { ContactsComponent, AddContactDialog } from './contacts/contacts.component';
import { PopularComponent } from './popular/popular.component';

const routes: Routes = [
  { path: '', component: PopularComponent },
  { path: 'contacts', component: ContactsComponent },
  { path: 'popular', component: PopularComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    PopularComponent,
    AddContactDialog
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule
  ],
  providers: [
    ContactsService
  ],
  bootstrap: [AppComponent],
  entryComponents: [AddContactDialog]
})
export class AppModule { }
