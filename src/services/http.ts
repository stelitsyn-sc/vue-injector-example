import { Injectable, Inject } from "@scandltd/vue-injector";
import * as Observable from "rxjs/internal/observable/fromPromise";
import { map } from "rxjs/operators";

import Client from "./client";

export const URL =
  "https://api.punkapi.com/v2/beers?brewed_before=11-2012&abv_gt=6";

@Injectable
export class Http {
  @Inject client: Client;

  observableFactory(promise): Observable<any> {
    return Observable.fromPromise(promise).pipe(map(({ data }) => data));
  }

  get(url, params = {}): Observable<any> {
    return this.observableFactory(this.client.get(url, { params }));
  }
}
