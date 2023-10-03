import { Component, ElementRef, EventEmitter, Input, Output, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { Subject, Subscription, debounceTime, pipe } from 'rxjs';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: [
  ]
})
export class SearchBoxComponent implements OnInit, OnDestroy  {

  private debouncer:Subject<string> = new Subject<string>
  private debouncerSuscription?: Subscription;

  // @ViewChild('txtInput')
  // public searchTag!: ElementRef<HTMLInputElement>;

  @Output ()
  public onValue:EventEmitter<string> = new EventEmitter();
  @Output ()
  public onDebounce:EventEmitter<string> = new EventEmitter();

  @Input()
  public placeholder: string = '';

  @Input()
  public initialValue:string = '';

  ngOnInit(): void {

    this.debouncerSuscription = this.debouncer
    .pipe(
      debounceTime(1000)
      )
      .subscribe(value => {
        this.onDebounce.emit(value)
      });
    }
    ngOnDestroy(): void {
      // this.debouncer.unsubscribe();
      this.debouncerSuscription?.unsubscribe()
    }


  searchByCapital(value: string):void {

    this.onValue.emit(value);

    // console.log(this.placeholder)
    // if (this.placeholder.length === 0) return

    // const newTag = this.searchTag.nativeElement.value;

    // this.onValue.emit(this.placeholder)

    // console.log({newTag})

    // this.placeholder = ''
  }
  onKeyPress(searchTerm:string):void {
    this.debouncer.next(searchTerm);
  }
}
