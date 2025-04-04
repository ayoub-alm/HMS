import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import {NavBarComponent} from '../nav-bar/nav-bar.component';
import {FooterComponent} from '../footer/footer.component';
import {MatCard, MatCardContent} from '@angular/material/card';
import {MatIcon} from '@angular/material/icon';
import {MatDivider} from '@angular/material/divider';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [
    NavBarComponent,
    FooterComponent,
    MatCard,
    MatIcon,
    MatCardContent,
    MatDivider
  ],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css'
})
export class AboutUsComponent implements AfterViewInit {
  @ViewChild('autoScroll') autoScroll!: ElementRef;

  ngAfterViewInit(): void {
    this.startAutoScroll();
  }

  startAutoScroll() {
    setInterval(() => {
      const container = this.autoScroll.nativeElement;
      container.scrollBy({ left: 50, behavior: 'auto' });

      // إعادة التمرير للأعلى عند النهاية
      if (container.scrollTop + container.clientHeight >= container.scrollHeight) {
        container.scrollTo({ top: 0, behavior: 'auto' });
      }
    }, 100);
  }
}
