import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gallery.html',
  styleUrls: ['./gallery.css']
})
export class Gallery {
  galleryImages = [
    { url: 'https://images.unsplash.com/photo-1609640580803-122d9b18abd6?w=600&auto=format&fit=crop&q=60', title: 'Royal Bridal' },
    { url: 'https://images.unsplash.com/photo-1563962750531-039b9b25dca2?w=600&auto=format&fit=crop&q=60', title: 'Party Glam' },
    { url: 'https://plus.unsplash.com/premium_photo-1682091989037-bec54be9afa7?w=600&auto=format&fit=crop&q=60', title: 'Traditional Art' },
    { url: 'https://plus.unsplash.com/premium_photo-1661862397518-8e50332b6e97?w=600&auto=format&fit=crop&q=60', title: 'Engagement Elegance' }
  ];
}
