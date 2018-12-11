import { Component, OnInit } from '@angular/core';
import {IDFSModel} from '../../shared/models/dfs-model';
import {IDFSPlayer} from '../../shared/models/dfs-player';
import {IDFSLineup} from '../../shared/models/dfs-lineup';

@Component({
  selector: 'app-nba',
  templateUrl: './nba.component.html',
  styleUrls: ['./nba.component.css']
})
export class NBAComponent implements OnInit {

  public models: IDFSModel[];
  public lineupColumns: string[];
  public sportID: number;
  public layoutWidth: number;

  public nbaLineupContainers: any;

  constructor() {
    this.sportID = 0;
    this.nbaLineupContainers = [];

    this.models = [
      { name: 'LeBron Model', id: 0, sportID: this.sportID},
      { name: 'Simmons Model', id: 1, sportID: this.sportID},
      { name: 'Lonzo Model', id: 2, sportID: this.sportID}
    ];

    this.lineupColumns = ['pos', 'name', 'salary', 'team', 'projPoints']

    this.layoutWidth = Math.round(100 / this.models.length);
  }

  ngOnInit() {
  }

  onGetLineup(lineup: IDFSLineup[]) {
    const modelID = lineup[0].modelID;
    const modelStore: IDFSModel = this.models.find((mod) => {
      return mod.id === modelID;
    });

    modelStore.lineups = lineup;
  }
}
