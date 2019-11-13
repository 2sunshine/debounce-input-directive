import { Directive, HostListener, ElementRef, Input, Output, EventEmitter } from '@angular/core';
import { Subject, Subscription, Observable } from 'rxjs';

import {debounceTime, distinctUntilChanged, switchMap} from 'rxjs/operators';

@Directive({
  selector: '[appDebounceInput]'
})
export class DebounceInputDirective {
  searchText$ = new Subject<string>();
  subscription:Subscription

  @Input('time') waitingTime = 500; //等待时间
  @Output() emitTargetValue = new EventEmitter(); //将数据传递出去

  constructor(private _elementRef:ElementRef) { 

  }

  @HostListener('keyup', ['$event']) onKeyDown(ev) {
    ev.preventDefault(); //阻止元素发生默认行为
    ev.stopPropagation() //阻止事件冒泡到父元素
    const value = ev.target.value;
    this.searchText$.next(value);
  }

  ngOnInit(): void {
    this.subscription = this.searchText$.pipe(
      debounceTime(this.waitingTime),
      distinctUntilChanged()
    ).subscribe(val=>{
      this.emitTargetValue.emit(val);
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
