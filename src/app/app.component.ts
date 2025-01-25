import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
declare let AOS: any;
import { Router, NavigationEnd } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  constructor(private router: Router) {}
  title = 'Tms';
  ngOnInit(): void {
    // Initialize AOS for animations
    AOS.init({
      duration: 1200, // Animation duration (optional)
      easing: 'ease', // Animation easing (optional)
      once: true, // Run animation only once (optional)
      mirror: true, // Trigger animation when scrolling back (optional)
      offset: 200, // Set the trigger offset (optional)
    });

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        AOS.refresh();
      }
    });
  }
}


