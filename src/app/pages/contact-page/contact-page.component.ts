import {Component, inject, OnInit} from '@angular/core';
import {Meta, Title} from "@angular/platform-browser";

@Component({
  standalone: true,
  imports: [],
  templateUrl: './contact-page.component.html',
  styleUrl: './contact-page.component.css'
})
export default class ContactPageComponent implements OnInit {

  private title = inject(Title);
  private meta = inject(Meta);

  ngOnInit(): void {
    this.title.setTitle('Contact Page');
    this.meta.updateTag({ name: 'description', content: 'Este es mi Contact Page'});
    this.meta.updateTag({ name: 'og:title', content: 'Contact Page'});
    this.meta.updateTag({ name: 'keywords', content: 'Hola Mundo, German Udaeta, Angular, Angular 18, SSR'});
  }
}
