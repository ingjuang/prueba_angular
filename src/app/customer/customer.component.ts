import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  @Input() customer: any = null;
  @Input() refresh!: Subject<any>;
  @Output() errorLoadEvent = new EventEmitter<string>();

  ngOnInit(): void {
    this.refresh.subscribe({
      next: (change) => this.onRefresh(change),
      error: (err) => this.errorLoadEvent.emit(`Error al refrescar: ${err}`)
    });
  }

  onRefresh(change: any): void {
    this.customer = change;
  }
}
