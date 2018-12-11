import {IDFSLineup} from './dfs-lineup';

export interface IDFSModel {
  name: string;
  id: number;
  sportID: number;
  lineups?: IDFSLineup[];
}
