import { InMemoryDbService } from 'angular-in-memory-web-api';
import {IDFSPlayer} from '../models/dfs-player';
import {IDFSLineup} from '../models/dfs-lineup';
import {TimeModel} from '../models/time-model';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const lineups: IDFSLineup[] = [];

    const player: IDFSPlayer = {
      id: 1,
      salary: 9000,
      name: 'LeBron James',
      team: 'LAL',
      pos: 'SF',
      projPoints: 50,
    };

    const playersInLineup: IDFSPlayer[] = [];

    for (let i = 0; i < 9; ++i) {
      playersInLineup.push(player);
    }

    for (let i = 0; i < 5; ++i) {
      lineups.push({
        sportID: 0,
        modelID: 0,
        rank: i,
        time: '7:00',
        year: 2018,
        month: 12,
        day: 11,
        players: playersInLineup
      });
    }

    for (let i = 5; i < 10; ++i) {
      lineups.push({
        sportID: 0,
        modelID: 0,
        rank: i,
        time: '7:30',
        year: 2018,
        month: 12,
        day: 11,
        players: playersInLineup
      });
    }

    const playerTwo: IDFSPlayer = {
      id: 1,
      salary: 9000,
      name: 'Bronny James Jr.',
      team: 'LAL',
      pos: 'SF',
      projPoints: 50,
    };

    const playersInLinupTwo: IDFSPlayer[] = [];

    for (let i = 0; i < 9; ++i) {
      playersInLinupTwo.push(playerTwo);
    }

    for (let i = 0; i < 10; ++i) {
      lineups.push({
        sportID: 0,
        modelID: 1,
        time: '7:00',
        rank: i,
        year: 2018,
        month: 12,
        day: 11,
        players: playersInLinupTwo
      });
    }

    const randomPlayer: IDFSPlayer = {
      id: 1,
      salary: 9000,
      name: 'Paul Goldschmidt',
      team: 'STL',
      pos: '1B',
      projPoints: 50,
    };

    const randomSportPlayers: IDFSPlayer[] = [];

    for (let i = 0; i < 9; ++i) {
      randomSportPlayers.push(randomPlayer);
    }

    for (let i = 0; i < 10; ++i) {
      lineups.push({
        sportID: 1,
        modelID: 0,
        rank: i,
        time: '7:00',
        year: 2018,
        month: 12,
        day: 11,
        players: randomSportPlayers
      });
    }
    const times: TimeModel[] = [
      {
        time: '7:00',
        year: 2018,
        month: 12,
        day: 11,
        id: 0,
        sportID: 0
      },
      {
        time: '7:30',
        year: 2018,
        month: 12,
        day: 12,
        id: 1,
        sportID: 0
      },
      {
        time: '8:00',
        year: 2018,
        month: 12,
        day: 13,
        id: 2,
        sportID: 0
      },
      {
        time: '9:00',
        year: 2018,
        month: 12,
        day: 14,
        id: 3,
        sportID: 0
      },
      {
        time: '7:15',
        year: 2018,
        month: 12,
        day: 11,
        id: 4,
        sportID: 1
      },
    ];

    const auth = {
      user: 'WSA',
      pass: 'WSA'
    };

    return {
      lineups: lineups,
      times: times
    };
  }
}
