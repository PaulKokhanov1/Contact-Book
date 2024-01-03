import { Component, OnInit } from '@angular/core';
import { ContactService } from '../../contact.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms'

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss'
})
export class ContactFormComponent implements OnInit {

  FormData: FormGroup;


  constructor( 
    private contactService: ContactService,
    private router: Router,
    private route: ActivatedRoute,
    private builder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.FormData = this.builder.group({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required,Validators.email]),
      phone: new FormControl('', [Validators.required])


    });
  }


  //NEED TO FINISH IMPLEMENTING ADD CONTACT, incorporating all parts of a contact, i.e name, email, phone
  addContact(value: string){
    this.contactService.addContact(value)
        .subscribe(() => this.router.navigate(['../'], {relativeTo: this.route }))
  }

}
