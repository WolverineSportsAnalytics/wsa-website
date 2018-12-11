import {IDFSPlayer} from './dfs-player';

export interface IDFSLineup {
  sportID: number;
  modelID: number;
  time: string;
  year: number;
  month: number;
  day: number;
  rank: number;
  totSalary?: number;
  totProjectedPoints?: number;
  players: IDFSPlayer[];
}
