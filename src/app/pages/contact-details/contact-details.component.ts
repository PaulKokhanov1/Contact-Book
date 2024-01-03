import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ContactService } from '../../contact.service';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrl: './contact-details.component.scss'
})
export class ContactDetailsComponent implements OnInit{

  contact: any;

  constructor(
    private contactService: ContactService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {


    this.route.params.subscribe((params: Params) =>{
      
      const contactId = params._id;
      console.log('Contact:', this.contactService);
      if (!contactId) return;
      this.contactService.getContact(contactId).subscribe((contact: any) => this.contact = contact);
      
    });
  }

}
