import { Directive, Input, OnDestroy, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { ViewportSizeService } from './viewport-size.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Directive({
  selector: '[ifViewportSize]'
})
export class ViewportSizeDirective implements OnInit, OnDestroy {

  private unsubscribe: Subject<void> = new Subject();
  private size: string;

  constructor(
    private readonly templateRef: TemplateRef<any>,
    private readonly viewContainer: ViewContainerRef,
    private readonly viewportSizeService: ViewportSizeService
  ) {}

  ngOnInit(): void {
    this.viewportSizeService.width$
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(() => {
        this.render();
      })
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  @Input()
  set ifViewportSize(size: string) {
    this.size = size;
    this.render();
  }

  private render() {
    this.viewContainer.clear();
    if (this.viewportSizeService.isSizeEqualWindowSize(this.size)) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    }
  }
}
