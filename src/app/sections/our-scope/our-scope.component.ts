import {Component, ElementRef, Renderer2, ViewChild} from '@angular/core';
import {TranslatePipe} from '@ngx-translate/core';

@Component({
  selector: 'app-our-scope',
  imports: [
    TranslatePipe
  ],
  templateUrl: './our-scope.component.html',
  standalone: true,
  styleUrl: './our-scope.component.scss'
})
export class OurScopeComponent {
  @ViewChild('slider', {static: true}) slider!: ElementRef<HTMLDivElement>;

  private isDown = false;
  private startX = 0;
  private scrollLeft = 0;

  constructor(private renderer: Renderer2) {
  }

  ngAfterViewInit(): void {
    const sliderEl = this.slider.nativeElement;

    this.renderer.listen(sliderEl, 'mousedown', (e: MouseEvent) => {
      this.isDown = true;
      sliderEl.classList.add('active');
      this.startX = e.pageX - sliderEl.offsetLeft;
      this.scrollLeft = sliderEl.scrollLeft;
    });

    this.renderer.listen(sliderEl, 'mouseleave', () => {
      this.isDown = false;
      sliderEl.classList.remove('active');
    });

    this.renderer.listen(sliderEl, 'mouseup', () => {
      this.isDown = false;
      sliderEl.classList.remove('active');
    });

    this.renderer.listen(sliderEl, 'mousemove', (e: MouseEvent) => {
      if (!this.isDown) return;
      e.preventDefault();
      const x = e.pageX - sliderEl.offsetLeft;
      const walk = (x - this.startX) * 1.5; // drag sensitivity
      sliderEl.scrollLeft = this.scrollLeft - walk;
    });

    // Touch support
    this.renderer.listen(sliderEl, 'touchstart', (e: TouchEvent) => {
      this.isDown = true;
      this.startX = e.touches[0].pageX - sliderEl.offsetLeft;
      this.scrollLeft = sliderEl.scrollLeft;
    });

    this.renderer.listen(sliderEl, 'touchend', () => {
      this.isDown = false;
    });

    this.renderer.listen(sliderEl, 'touchmove', (e: TouchEvent) => {
      if (!this.isDown) return;
      const x = e.touches[0].pageX - sliderEl.offsetLeft;
      const walk = (x - this.startX) * 1.5;
      sliderEl.scrollLeft = this.scrollLeft - walk;
    });
  }

  scrollLeftClick(): void {
    const cardWidth = this.slider.nativeElement.querySelector('.scope-slider__card')?.clientWidth || 300;
    this.slider.nativeElement.scrollBy({left: -(cardWidth + 16), behavior: 'smooth'});
  }

  scrollRightClick(): void {
    const cardWidth = this.slider.nativeElement.querySelector('.scope-slider__card')?.clientWidth || 300;
    this.slider.nativeElement.scrollBy({left: cardWidth + 16, behavior: 'smooth'});
  }

  formatIndex(index: number): string {
    return index.toString().padStart(2, '0');
  }

  // scrollLeft(): void {
  //   const cardWidth = this.slider.nativeElement.querySelector('.scope-slider__card')?.clientWidth || 300;
  //   this.slider.nativeElement.scrollBy({left: -cardWidth - 16, behavior: 'smooth'});
  // }
  //
  // scrollRight(): void {
  //   const cardWidth = this.slider.nativeElement.querySelector('.scope-slider__card')?.clientWidth || 300;
  //   this.slider.nativeElement.scrollBy({left: cardWidth + 16, behavior: 'smooth'});
  // }

}
