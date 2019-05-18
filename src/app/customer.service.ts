import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Interface } from './interface';
import { MessageService } from './message.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({ providedIn: 'root' })
export class CustomerService {

  private customerUrl = 'api/customers';  // URL to web api

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  /** GET Customer from the server */
  getCustomers (): Observable<Interface[]> {
    return this.http.get<Interface[]>(this.customerUrl)
      .pipe(
        tap(_ => this.log('fetched customer')),
        catchError(this.handleError<Interface[]>('getCustomers', []))
      );
  }

  /** GET Customer by id. Return `undefined` when id not found */
  getCustomerNo404<Data>(id: number): Observable<Interface> {
    const url = `${this.customerUrl}/?id=${id}`;
    return this.http.get<Interface[]>(url)
      .pipe(
        map(customer => customer[0]), // returns a {0|1} element array
        tap(h => {
          const outcome = h ? `fetched` : `did not find`;
          this.log(`${outcome} customer id=${id}`);
        }),
        catchError(this.handleError<Interface>(`getCustomer id=${id}`))
      );
  }

  /** GET customer by id. Will 404 if id not found */
  getCustomer(id: number): Observable<Interface> {
    const url = `${this.customerUrl}/${id}`;
    return this.http.get<Interface>(url).pipe(
      tap(_ => this.log(`fetched customer id=${id}`)),
      catchError(this.handleError<Interface>(`getCustomer id=${id}`))
    );
  }

  /* GET customers whose name contains search term */
  searchCustomers(term: string): Observable<Interface[]> {
    if (!term.trim()) {
      // if not search term, return empty Customer array.
      return of([]);
    }
    return this.http.get<Interface[]>(`${this.customerUrl}/?name=${term}`).pipe(
      tap(_ => this.log(`found customers matching "${term}"`)),
      catchError(this.handleError<Interface[]>('searchCustomers', []))
    );
  }

  //////// Save methods //////////

  /** POST: add a new customer to the server */
  addCustomer (customer: Interface): Observable<Interface> {
    return this.http.post<Interface>(this.customerUrl, customer, httpOptions).pipe(
      tap((newCustomer: Interface) => this.log(`added customer w/ id=${newCustomer.id}`)),
      catchError(this.handleError<Interface>('addCustomer'))
    );
  }

  /** DELETE: delete the customer from the server */
  deleteCustomer (customer: Interface | number): Observable<Interface> {
    const id = typeof customer === 'number' ? customer : customer.id;
    const url = `${this.customerUrl}/${id}`;

    return this.http.delete<Interface>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted customer id=${id}`)),
      catchError(this.handleError<Interface>('deleteCustomer'))
    );
  }

  /** PUT: update the customer on the server */
  updateCustomer (customer: Interface): Observable<any> {
    return this.http.put(this.customerUrl, customer, httpOptions).pipe(
      tap(_ => this.log(`updated customer id=${customer.id}`)),
      catchError(this.handleError<any>('updateCustomer'))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a CustomerService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`CustomerService: ${message}`);
  }
}
