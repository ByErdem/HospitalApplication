import { Component, OnInit } from '@angular/core';
import { AlertifyService } from '../services/alertify.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private alertify:AlertifyService, private router:Router) { }

  ngOnInit() {
  }

  btnpatient_click():void{
    this.router.navigateByUrl("/patients");
     this.alertify.success("Clicked to Patient Button");
  }

  btndoctor_click():void{
    this.router.navigateByUrl("/doctors");
    this.alertify.success("Clicked to Doctor Button");
 }

 btnappointment_click():void{
  this.router.navigateByUrl("/appointments");
  this.alertify.success("Clicked to Appointment Button");
}

}
