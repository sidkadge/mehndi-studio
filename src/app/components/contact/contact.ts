import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.html',
  styleUrls: ['./contact.css']
})
export class Contact {
  sendWhatsApp() {
    window.open('https://wa.me/917588525387?text=Hello!%20I%20am%20interested%20in%20your%20Mehndi%20services.', '_blank');
  }
}
