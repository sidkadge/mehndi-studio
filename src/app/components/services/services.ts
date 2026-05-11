import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.html',
  styleUrls: ['./services.css']
})
export class Services {
  services = [
    { icon: 'fa-ring', title: 'Bridal Mehndi', description: 'Intricate full-hand & feet designs with rich arabic & indo-western patterns for your big day.' },
    { icon: 'fa-calendar-alt', title: 'Party & Events', description: 'Quick, elegant and stylish mehndi for festive nights, sangeet, and get-togethers.' },
    { icon: 'fa-hand-peace', title: 'Custom Arabic', description: 'Flowing florals & bold outlines – modern arabic designs that capture attention.' }
  ];
}
