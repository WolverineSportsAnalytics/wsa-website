import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {WsaResponse} from '../models/wsa-response';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonDataService {


  constructor(private http: HttpClient) {

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
