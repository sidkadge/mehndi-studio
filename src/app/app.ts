import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Navbar } from './components/navbar/navbar';
import { Hero } from './components/hero/hero';
import { Gallery } from './components/gallery/gallery';
import { Services } from './components/services/services';
import { Packages } from './components/packages/packages';
import { Testimonials } from './components/testimonials/testimonials';
import { Contact } from './components/contact/contact';
import { Footer } from './components/footer/footer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    
    FormsModule,
    Navbar,
    Hero,
    Gallery,
    Services,
    Packages,
    Testimonials,
    Contact,
    Footer
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  title = 'mehndi-studio';
}
