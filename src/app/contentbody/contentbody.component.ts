import { Component, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-contentbody',
  templateUrl: './contentbody.component.html',
  styleUrls: ['./contentbody.component.css']
})
export class ContentbodyComponent implements OnInit {


  widthSize:number=0;
  heightSize:number=0;
  url:string="";
  

  constructor(private router:Router,private renderer:Renderer2) { }

  ngOnInit() {
    this.resize();
    console.log(this.router.url);
    this.url = this.router.url;
  }

  onResize() {
    this.resize();
  }

  resize():void{
    this.widthSize= window.innerWidth;
    this.heightSize = window.innerHeight-108;
    document.getElementById("containerx").style.height=this.heightSize+"px";
  }
}