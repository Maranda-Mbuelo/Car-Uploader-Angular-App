import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() {

  }

  brand: string = 'Tshindolo Park';
  time: number = Date.now();

  myLinks: any = [
    {
      name: 'Home',
      path: 'home'
    },
    {
      name: 'Home',
      path: 'home'
    },
    {
      name: 'Home',
      path: 'home'
    },
  ];
  

  ngOnInit() {

  }


  getElement(){
    return document.querySelector<HTMLElement>('.brand');
  }

  dismiss(): void {
    window.location.href = "Home/Mbuelo/Maranda";
  }

}
