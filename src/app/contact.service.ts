import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactService {


  private ROOT_URL = 'http://localhost:3000/contacts';
  constructor(private http: HttpClient) { }


  getContacts(){
    return this.http.get(this.ROOT_URL);
  }

  getContact(id: string){
    return this.http.get(`${this.ROOT_URL}/${id}`);
  }

  addContact(contact: string){
    return this.http.post(this.ROOT_URL, contact);
  }
  
  updateContact(id: string, contact: string){
    return this.http.put(`${this.ROOT_URL}/${id}`, contact);
  }

  deleteContact(id: string){
    return this.http.delete(`${this.ROOT_URL}/${id}`);
  }
}
