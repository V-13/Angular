import { Component, OnInit } from '@angular/core';
import{NgForm} from '@angular/forms';
@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUSComponent implements OnInit {

    getname='';
    getemail='';
    getmessage='';


    onSubmit(data:NgForm){
      console.log(data.value);


      this.getname=data.value.name;
      console.log(data.value.name);


      this.getemail=data.value.email;
      console.log(data.value.email);

      this.getmessage=data.value.message;
      console.log(data.value.message);
    }

  constructor() { }

  ngOnInit() {
  }

}
