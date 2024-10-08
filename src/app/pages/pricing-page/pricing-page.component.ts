import {Component, inject, OnInit, PLATFORM_ID} from '@angular/core';
import {Meta, Title} from "@angular/platform-browser";
import {isPlatformBrowser, isPlatformServer} from "@angular/common";

@Component({
  standalone: true,
  imports: [],
  templateUrl: './pricing-page.component.html',
  styleUrl: './pricing-page.component.css'
})
export default class PricingPageComponent implements OnInit {
  private title = inject(Title);
  private meta = inject(Meta);
  private platform = inject(PLATFORM_ID);

  ngOnInit(): void {
    this.title.setTitle('Pricing Page');
    this.meta.updateTag({ name: 'description', content: 'Este es mi Pricing Page'});
    this.meta.updateTag({ name: 'og:title', content: 'Pricing Page'});
    this.meta.updateTag({ name: 'keywords', content: 'Hola Mundo, German Udaeta, Angular, Angular 18, SSR'});
  }
}
