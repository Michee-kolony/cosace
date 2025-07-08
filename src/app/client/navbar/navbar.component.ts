import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  mobile = false;

  launchmenu() {
    this.mobile = !this.mobile;
    // Empêche le scroll de fond si menu ouvert
    document.body.style.overflow = this.mobile ? 'hidden' : 'auto';
  }

  // Pour fermer le menu quand on redimensionne en desktop
  @HostListener('window:resize')
  onResize() {
    if (window.innerWidth >= 1024 && this.mobile) {
      this.mobile = false;
      document.body.style.overflow = 'auto';
    }
  }
}
