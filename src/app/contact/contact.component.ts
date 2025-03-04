import { Component } from '@angular/core'; 
import {FormsModule} from  '@angular/forms'

@Component({
  selector: 'app-contact',
  imports: [FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
 
 text:string='';
 age:string='';
 email:string='';
 pass:string='';
}
