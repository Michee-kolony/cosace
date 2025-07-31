import { AfterViewInit, Component } from '@angular/core';
import Splide from '@splidejs/splide';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrl: './accueil.component.css'
})
export class AccueilComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    new Splide('#splide', {
  type: 'loop',
  perPage: 2,
  rewind: true,
  gap: '1rem',
  autoplay: true,
  focus: 'center',
  breakpoints: {
    1024: {
      perPage: 2,
    },
    768: {
      perPage: 1,
      gap: '0.5rem',
    },
  },
}).mount();

 new Splide('#splide1', {
  type: 'loop',
  perPage: 4,
  rewind: true,
  gap: '1rem',
  pagination:false,
  autoplay: true,
  focus: 'center',
  arrows: false,
  breakpoints: {
    1024: {
      perPage: 4,
    },
    768: {
      perPage: 2,
      gap: '0.5rem',
    },
  },
}).mount();

  }
}
