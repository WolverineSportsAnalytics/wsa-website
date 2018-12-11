import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {TimeModel} from '../shared/models/time-model';
import { from } from 'rxjs';
import {filter} from 'rxjs/operators';
import {Data} from '@angular/router';
import {IDFSPlayer} from '../shared/models/dfs-player';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {IDFSLineup} from '../shared/models/dfs-lineup';
import {CommonDataService} from '../shared/services/common-data.service';

@Injectable({
  providedIn: 'root'
})
export class LineupsService {

  constructor(private dataService: CommonDataService) {
  }

  getLineups(modelID: number, sportID: number, date: Date, time: string, rank: number): Observable<IDFSLineup[]> {
    return this.dataService.getLineups(modelID, sportID, rank, date.getFullYear(),
      date.getMonth() + 1, date.getDate(), time);
  }

  getTimesPerSport(sportID: number, date: Date): Observable<TimeModel[]> {
    return this.dataService.getTimesPerDFSLineup(sportID, date.getFullYear(),
      date.getMonth() + 1, date.getDate());
  }
}

