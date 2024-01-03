import { Component, OnInit } from '@angular/core';
import Contact from '../../models/contact';
import { ContactService } from '../../contact.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrl: './contact-list.component.scss'
})
export class ContactListComponent implements OnInit{

  //defining array of contacts
  contacts: any[] = [];
  


  constructor (
    private contactService: ContactService,

    private router: Router
    ) {}


  //after entire component loaded, then ngOnInit code is executed
  ngOnInit(): void {
    this.contactService.getContacts()
      .subscribe((contacts: any) => this.contacts = contacts);
    console.log('Contact:', this.contactService);

 
  }

  deleteContact(contact: Contact){
    this.contactService.deleteContact(contact._id)
      .subscribe((contact: any) => this.contacts = this.contacts.filter(t => t._id != contact._id))
  }

}
