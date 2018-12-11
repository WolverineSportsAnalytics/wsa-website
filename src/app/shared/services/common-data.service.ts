import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {WsaResponse} from '../models/wsa-response';
import {Observable, of} from 'rxjs';
import {IDFSLineup} from '../models/dfs-lineup';
import {environment} from '../../../environments/environment';
import {catchError, tap} from 'rxjs/operators';
import {TimeModel} from '../models/time-model';

@Injectable({
  providedIn: 'root'
})
export class CommonDataService {
  baseURL: string = environment.serverURL;
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) {

  }

  /** Log a WSA message to Console */
  private log(message: string) {
    console.log(`Common WSA Data Service: ${message}`);
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

  public getLineups(modelID: number, sportID: number, rank: number, year: number, month: number, day: number,
                    time: string): Observable<IDFSLineup[]> {
    const lineupEndpoint = 'lineups';
    const lineupQuery = lineupEndpoint + '/?' + `modelID=${modelID}` + '&'
      + `sportID=${sportID}` + '&' + `rank=${rank}` + '&' + `time=${time}` + '&' + `year=${year}`
      + '&' + `month=${month}` + '&' + `day=${day}`;
    return this.http.get<IDFSLineup[]>(this.baseURL + '/' + lineupQuery)
      .pipe(
        tap(_ => this.log('fetched lineups')),
        catchError(this.handleError('getLineups', []))
      );
  }

  public getTimesPerDFSLineup(sportID: number, year: number, month: number, day: number): Observable<TimeModel[]> {
    const timeEndpoint = 'times';
    const timeQuery = timeEndpoint + '/?' + `sportID=${sportID}` + '&' + `year=${year}`
      + '&' + `month=${month}` + '&' + `day=${day}`;

    return this.http.get<TimeModel[]>(this.baseURL + '/' + timeQuery)
      .pipe(
        tap(_ => this.log('fetched times')),
        catchError(this.handleError('getTimes', []))
      );
  }

  public authUser(username: string, password: string) {
    const authEndpoint = 'auth';
    const authQuery = authEndpoint;
    return this.http.get(this.baseURL + '/' + authQuery)
      .pipe(
        tap(_ => this.log('auth user')),
        catchError(this.handleError('auth user', []))
      );
  }

  /**
   * Convert Observable to a Promise
   *
   * Get entire response
   */

  // public static getEntireResponse<T> (wsaObservableResp: Observable<WsaResponse<T>>): Promise<T> {
  //   return wsaObservableResp
  //     .toPromise()
  //     .then(wsaResponse => {
  //       return wsaResponse;
  //     });
  // }
  //
  // /**
  //  * Convert Observable to Promise
  //  *
  //  * Get only data
  //  */
  //
  // public static getResponseData<T> (wsaObservableResp: Observable<WsaResponse<T>>): Promise<T> {
  //   return wsaObservableResp
  //     .toPromise()
  //     .then(wsaResponse => {
  //       return wsaResponse.data;
  //     });
  // }
  //
  // /**
  //  * Convert Observable to Promise
  //  *
  //  * Get status of the response
  //  */
  //
  // public static getResponseStatus<T> (wsaObservableResp: Observable<WsaResponse<T>>): Promise<T> {
  //   return wsaObservableResp
  //     .toPromise()
  //     .then(wsaResponse => {
  //       return wsaResponse.status;
  //     });
  // }
  //
  // /**
  //  * Convert Observable to Promise
  //  *
  //  * Get message of a ressponse
  //  */
  //
  // public static getResponseMessage<T> (wsaObservableResp: Observable<WsaResponse<T>>): Promise<T> {
  //   return wsaObservableResp
  //     .toPromise()
  //     .then(wsaResponse => {
  //       return wsaResponse.message;
  //     });
  // }
}
