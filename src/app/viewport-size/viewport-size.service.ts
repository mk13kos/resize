import { Inject, Injectable } from '@angular/core';
import { VIEWPORT_SIZE_CONFIG, VSConfigInterface } from './viewport-size.config';
import { BehaviorSubject, Observable } from 'rxjs';
import { EventManager } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class ViewportSizeService {

  private widthSubject = new BehaviorSubject<number>(window.innerWidth);
  width$: Observable<number> = this.widthSubject.asObservable();

  constructor(
    @Inject(VIEWPORT_SIZE_CONFIG)
    private readonly viewportSizeConfig: VSConfigInterface,
    private readonly eventManager: EventManager
  ) {
    this.eventManager.addGlobalEventListener('window', 'resize', this.changeWidth.bind(this));
  }

  changeWidth(event) {
    console.log('width', event.target.innerWidth);
    this.widthSubject.next(event.target.innerWidth);
  }

  isSizeEqualWindowSize(size: string): boolean {
    return size === this.detectSize();
  }

  detectSize(): string {
    const width = this.widthSubject.getValue();

    if (width < this.viewportSizeConfig.medium) {
      return 'small';
    } else if (width >= this.viewportSizeConfig.medium && width < this.viewportSizeConfig.large) {
      return 'medium';
    } else {
      return 'large';
    }
  }
}
