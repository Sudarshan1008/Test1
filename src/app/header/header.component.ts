import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor() { }
  ngOnInit (): void {
  }

  // isShowDivIf = true;
  // toggleDisplayDivIf() {
  //   this.isShowDivIf = !this.isShowDivIf;
  // }
  
 
  public  isVisible: boolean = false;
  header_variable=false;
  @HostListener("document:scroll")
  scrollfuncion(){
    if(document.body.scrollTop > 0 || document.documentElement.scrollTop > 0){
      this.header_variable=true;
    }
    else{
      this.header_variable=false;
    }
  }
  hideList(){
    this.isVisible = ! this.isVisible;
  
  }

//  for Drop Down
  showMenu = false;

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }

  

}
