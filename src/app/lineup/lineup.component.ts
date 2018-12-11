import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {LineupsService} from './lineups.service';
import {TimeModel} from '../shared/models/time-model';
import {IDFSPlayer} from '../shared/models/dfs-player';
import {IDFSLineup} from '../shared/models/dfs-lineup';

@Component({
  selector: 'app-lineup',
  templateUrl: './lineup.component.html',
  styleUrls: ['./lineup.component.css']
})
export class LineupComponent implements OnInit {
  @Input() sportID: number;
  @Input() modelID: number;
  @Input() modelName: string;

  @Output() retrievedLineupsForModel = new EventEmitter<IDFSLineup[]>();

  public dateForm: FormGroup;

  public timeForm: FormGroup;

  public numberForm: FormGroup;

  public timesForSport: TimeModel[];

  public lineupStore: IDFSLineup[];

  constructor(private lineupService: LineupsService) {
    this.timesForSport = [];
    this.lineupStore = [];

    this.dateForm = new FormGroup({
      date: new FormControl(new Date(), [Validators.required])
    });

    this.timeForm = new FormGroup({
      time: new FormControl('', [Validators.required])
    });

    this.numberForm = new FormGroup({
      number: new FormControl('', [Validators.required])
    });
  }

  ngOnInit() {
  }

  retrieveTimes() {
    this.lineupService.getTimesPerSport(this.sportID, this.dateForm.value.date).subscribe((val) => {
      this.timesForSport = val;
    });
  }

  retrieveLineups() {
    for (let i = 0; i < this.numberForm.value.number; ++i) {
      this.lineupService.getLineups(this.modelID, this.sportID, this.dateForm.value.date, this.timeForm.value.time, i).subscribe(
        (val) => {
          for (const lineup of val) {
            let sumPoints = 0;
            let sumSalary = 0;

            for (const player of lineup.players) {
              sumPoints += player.projPoints;
              sumSalary += player.salary;
            }

            lineup.totProjectedPoints = sumPoints;
            lineup.totSalary = sumSalary;

            this.lineupStore.push(lineup);
          }
        },
        (error) => {
        },
        () => {
          this.retrievedLineupsForModel.emit(this.lineupStore);
        });
    }

  }

}
