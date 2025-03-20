import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { CustomerComponent } from "./customer/customer.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [CustomerComponent]

})
export class AppComponent {
  selectedCustomer = { id: 1, name: 'Juan David Gómez' };
  refreshSubject = new Subject<any>();

  refreshCustomer(): void {
    const newCustomer = { id: 2, name: 'Ana Gómez' };
    this.refreshSubject.next(newCustomer);
  }

  handleError(errorMessage: string): void {
    console.error('Error recibido:', errorMessage);
  }
}
