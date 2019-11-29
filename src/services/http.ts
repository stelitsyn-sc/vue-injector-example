import { Injectable, Inject } from '@scandltd/vue-injector';
import * as PromiseObservable from 'rxjs/internal/observable/fromPromise';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';

import Client from './client';

export const URL =
  'https://api.punkapi.com/v2/beers?brewed_before=11-2012&abv_gt=6';

@Injectable
export class Http {
  @Inject private client: Client;

  private observableFactory<T>(promise): Observable<T> {
    return PromiseObservable.fromPromise(promise).pipe(map(({ data }) => data));
  }

  get<T extends any>(url, params = {}): Observable<T> {
    return this.observableFactory<T>(this.client.get(url, { params }));
  }
}
