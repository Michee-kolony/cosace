import { AfterViewInit, Component } from '@angular/core';
import Splide from '@splidejs/splide';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements AfterViewInit{
  
  ngAfterViewInit(): void {
    new Splide('#splide', {
  type: 'loop',
  perPage: 3,
  rewind: true,
  gap: '1rem',
  autoplay: true,
  breakpoints: {
    1024: {
      perPage: 3,
    },
    768: {
      perPage: 1,
      gap: '0.5rem',
    },
  },
}).mount();

  }
}
