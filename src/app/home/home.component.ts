import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
//   public slides = [
//     { src: '/assets/images/carousel/ignite-ui-angular-indigo-design.png' },
//     { src: '/assets/images/carousel/slider-image-chart.png' },
//     { src: '/assets/images/carousel/ignite-ui-angular-charts.png' }
// ];

// public showMyMessage = false

// showMessageSoon() {
//   setTimeout(() => {
//     this.showMyMessage = true
//   }, 300)
// }

isCollapsed1 : boolean = false;
toggleCollased1(){
  this.isCollapsed1 = !this.isCollapsed1;
}

isCollapsed2 : boolean = true;
toggleCollased2(){
  this.isCollapsed2 = !this.isCollapsed2;
}

isCollapsed3 : boolean = true;
toggleCollased3(){
  this.isCollapsed3 = !this.isCollapsed3;
}
isCollapsed4 : boolean = true;
toggleCollased4(){
  this.isCollapsed4 = !this.isCollapsed4;
}
}
