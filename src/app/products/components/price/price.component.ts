import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'products-price',
  templateUrl: './price.component.html',
  styles: ``
})
export class PriceComponent implements OnInit, OnChanges, OnDestroy {
  @Input()
  price: number = 0

  interval$?: Subscription;


  ngOnInit(): void {
    console.log('Child: ngOnInit')

    this.interval$ = interval(1000).subscribe(value => console.log('TIckt', value))
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('Child: ngOnChanges')
    console.log({changes})
  }

  ngOnDestroy(): void {
    this.interval$?.unsubscribe()
  }
}
