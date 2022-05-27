import { Directive, ElementRef, AfterViewInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import tippy from 'tippy.js';

@Directive({
  selector: '[appToolTip]'
})
export class ToolTipDirective implements AfterViewInit, OnChanges{

  @Input('appToolTip') tooltipContent: string;

   public tippyInstance: any;

  constructor(private elRef: ElementRef) { }

  ngAfterViewInit(): void {
    this.tippyInstance = tippy(this.elRef.nativeElement, {
      content: this.tooltipContent
    })
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['tooltipContent']) {
      this.updateToolTipContent

    }
  }

  updateToolTipContent() {
    if (this.tippyInstance)
    this.tippyInstance.setContent(this.tooltipContent)

  }

}