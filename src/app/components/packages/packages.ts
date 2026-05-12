import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-packages',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './packages.html',
  styleUrls: ['./packages.css']
})
export class Packages {
  sendWhatsApp(packageName?: string, price?: string, details?: string) {
    const message = packageName
      ? `Hello! I would like to book the ${packageName} package (${price}). Details: ${details}`
      : 'Hello! I would like to inquire about your mehndi services.';

    if (typeof window !== 'undefined') {
      window.open(
        `https://wa.me/917588525387?text=${encodeURIComponent(message)}`,
        '_blank'
      );
    }
  }
}