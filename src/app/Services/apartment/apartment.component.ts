import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Title,Meta} from '@angular/platform-browser';

@Component({
  selector: 'app-apartment',
  templateUrl: './apartment.component.html',
  styleUrls: ['./apartment.component.css']
})
export class ApartmentComponent implements OnInit{
  title = 'Apartment  Interior Design';
  constructor( 
    public router: Router,
    private titleService: Title,
    private meta: Meta
    ) {}
  ngOnInit(){
    this.titleService.setTitle(this.title);
  	this.meta.updateTag({name: 'keywords', content: 'this.page.meta_keyworda'});
    this.meta.addTag({name: 'description', content: ' Gyanika Interior Design on  www.gyanikainfra.co.in '});
    this.meta.addTag({name: 'author', content: 'rsgitech'});
    this.meta.addTag({name: 'robots', content: 'index, follow'});
  }
}
