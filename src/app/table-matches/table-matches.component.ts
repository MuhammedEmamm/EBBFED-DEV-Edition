import { Component, OnInit, ChangeDetectionStrategy, ViewChild, TemplateRef } from '@angular/core';
import { DatePipe } from '@angular/common'
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { startOfDay, endOfDay, subDays, addDays, endOfMonth, isSameDay, isSameMonth, addHours } from 'date-fns';
import { Subject } from 'rxjs';
import { CalendarEvent, CalendarEventAction, CalendarEventTimesChangedEvent, CalendarView } from 'angular-calendar';
import * as jQuery from 'jquery';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-table-matches',
  templateUrl: './table-matches.component.html',
  styleUrls: ['./table-matches.component.css'],
  providers: [DatePipe]
})
export class TableMatchesComponent implements OnInit {
  Table: any;
  NMatches: any;
  Matches: any;
  FilteredMatches: any;
  Age: any; Div: any;
  Clubs: any;
  events: CalendarEvent[];
  refresh: Subject<any> = new Subject();
  activeDayIsOpen: boolean = false;
  Ages: any;
  Divs: any;
  view: CalendarView;
  CalendarView: any;
  viewDate: Date = new Date();
  @ViewChild('modalContent')
  modalContent: TemplateRef<any>;
  modalData: {
    action: string;
    event: CalendarEvent;
  };



  constructor(public http: HttpClient, public Route: ActivatedRoute, private modal: NgbModal, private date: DatePipe, public Routee: Router) {
    this.Table = [
      {
        "ID": "",
        "ClubName": "",
        "NumberOfMatches": "",
        "Winner": "",
        "Lose": "",
        "Points": "",
        "INGoals": "",
        "OutGoals": ""
      }];
    this.NMatches = [{
      "ClubA": "",
      "ClubB": "",
      "Date": "",
      "LiveLink": "",
      "Age": "",
      "Place": "",
      "Gender": "",
      "Division": ""
    }];
    this.Clubs = [{
      "ID": "",
      "NameA": "",
      "NameE": "",
      "DescriptionA": "",
      "DescriptionE": "",
      "EstablishedYear": "",
      "NumberTitles": "",
      "Division": "",
      "Logo": ""
    }];
    this.events = [];
    this.FilteredMatches = [];
    this.Matches = [{
      "ClubA": "",
      "ClubB": "",
      "Date": "",
      "ScoreA": "",
      "ScoreB": "",
      "LiveLink": "",
      "Ages": "",
      "Place": "",
      "Gender": "",
      "Division": ""
    }]
    if (this.Routee.url === '/matches-table') {
      this.GetAllClubs();
      this.GetMatchesMonth();
    }
    else
      this.GetNMatchesMonth();

    this.view = CalendarView.Month;
    this.CalendarView = CalendarView;
    this.Ages = [{
      "ID": "",
      "NameA": "",
      "NameE": ""
    }];
    this.Divs = [{
      "ID": "",
      "NameA": "",
      "NameE": ""
    }];

  }
  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    if (isSameMonth(date, this.viewDate)) {
      this.viewDate = date;
      if (
        (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
        events.length === 0
      ) {
        this.activeDayIsOpen = false;
      } else {
        this.activeDayIsOpen = true;
      }
    }
  }
  eventTimesChanged({
    event,
    newStart,
    newEnd
  }: CalendarEventTimesChangedEvent): void {
    event.start = newStart;
    event.end = newEnd;
    this.handleEvent('Dropped or resized', event);
    this.refresh.next();
  }
  handleEvent(action: string, event: CalendarEvent): void {
    this.modalData = { event, action };
    this.refresh.next();


  }
  NextMatches() {
    this.http.get('http://yakensolution.cloudapp.net/EBBFED/api/Matches/NextMatche').subscribe((res: any) => {
      if (res.isSuccess) {
        this.NMatches = res.Response.NextMatche;
        //(this.NMatches);
      }

    });
  }
  GetLeagueTable() {
    this.http.get('http://yakensolution.cloudapp.net/EBBFED/api/Matches/TableMatches').subscribe((res: any) => {
      if (res.isSuccess) {
        this.Table = res.Response.TableMatches;
        //(this.Table);
      }

    });

  }
  GetAllClubs() {
    this.http.get('http://yakensolution.cloudapp.net/EBBFED/api/Clubs/AllClubs').subscribe((res: any) => {
      if (res.isSuccess) {
        this.Clubs = res.Response.Players;
        //(this.Clubs);
      }
    });

  }
  GetNLeagueTable() {
    this.http.get('http://yakensolution.cloudapp.net/EBBFED/api/NationalMatches/TableMatches').subscribe((res: any) => {
      if (res.isSuccess) {
        this.Table = res.Response.TableMatches;
        //(this.Table);
      }

    });

  }
  GetMatchesMonth() {
    this.http.get('http://yakensolution.cloudapp.net/EBBFED/api/Matches/AllMatches').subscribe((res: any) => {
      if (res.isSuccess) {
        this.Matches = res.Response.AllMatchesMonth;
        this.FilteredMatches = this.Matches;
        let s = 'VS';
        //(this.Matches);
        for (var i = 0; this.Matches !== undefined && i < this.Matches.length; i++) {
          let Club1, Club2;
          for (var j = 0; this.Clubs != undefined && j < this.Clubs.length; j++) {
            //(this.Clubs[j].ID);
            //(this.Matches[i].ClubA);

            if (this.Matches[i].ClubA === this.Clubs[j].ID) {
              //('a');

              this.Matches[i].ClubA = this.Clubs[j].NameA;
            }
          }
          for (var j = 0; this.Clubs != undefined && j < this.Clubs.length; j++) {
            if (this.Matches[i].ClubB === this.Clubs[j].ID) {
              //('aa');

              this.Matches[i].ClubB = this.Clubs[j].NameA;
            }
          }
          // //(new Date(this.Matches[i].Date));
          this.events.push({
            start: startOfDay(new Date(this.Matches[i].Date)),
            end: endOfDay(new Date(this.Matches[i].Date)),
            title: `<div class="widget widget_matches">
            <ul>
              <li class="text-center">
                <div class="row">
                  <div class="col-md-4">
                    <div class="text-center">
                      <h6><a>${this.Matches[i].ClubA}<img src="http://yakensolution.cloudapp.net/EBBFED/Content/Images/${this.Matches[i].LogoA}"></a></h6>
                    </div>

                  </div>

                  <div class="col-md-4"><h4><a target="blank" href="${this.Matches[i].LiveLink}">Live</a></h4><h2>VS</h2></div>

                  <div class="col-md-4">
                    <div class="text-center">
                      <h6><a>${this.Matches[i].ClubB}<img src="http://yakensolution.cloudapp.net/EBBFED/Content/Images/${this.Matches[i].LogoB}"></a></h6>
                    </div>

                  </div>

                </div>

                <h6 class="text-center">${this.date.transform(this.Matches[i].Date)}</h6>
                <h6 class="text-center">${this.Matches[i].DivisionName}</h6>
                <h6 class="text-center">${this.Matches[i].AgeName}</h6>
                
              </li>

            </ul>
          </div>
            
`,
            allDay: true,

          });

        }
        this.refresh.next();

      }

    });


  }
  GetNMatchesMonth() {
    this.http.get('http://yakensolution.cloudapp.net/EBBFED/api/NationalMatches/MonthlyMatches').subscribe((res: any) => {
      if (res.isSuccess) {
        this.Matches = res.Response.AllMatchesMonth;
        this.FilteredMatches = this.Matches;
        let s = 'VS';
        //(this.Matches);
        for (var i = 0; this.Matches !== undefined && i < this.Matches.length; i++) {
          ////(new Date(this.Matches[i].Date));
          for (var j = 0; this.Clubs != undefined && j < this.Clubs.length; j++) {
            //   //(this.Clubs[j].ID) ; 
            //   //(this.Matches[i].ClubA) ; 

            if (this.Matches[i].ClubA === this.Clubs[j].ID) {
              //       //('a') ;

              this.Matches[i].ClubA = this.Clubs[j].NameA;
            }
          }
          for (var j = 0; this.Clubs != undefined && j < this.Clubs.length; j++) {
            if (this.Matches[i].ClubB === this.Clubs[j].ID) {
              //   //('aa') ;

              this.Matches[i].ClubB = this.Clubs[j].NameA;
            }
          }
          this.events.push({
            start: startOfDay(new Date(this.Matches[i].Date)),
            end: endOfDay(new Date(this.Matches[i].Date)),
            title: `<div class="widget widget_matches">
            <ul>
              <li class="text-center">
                <div class="row">
                  <div class="col-md-4">
                    <div class="text-center">
                      <h6><a>${this.Matches[i].ClubA}<img src="http://yakensolution.cloudapp.net/EBBFED/Content/Images/${this.Matches[i].LogoA}"></a></h6>
                    </div>

                  </div>

                  <div class="col-md-4"><h4><a target="blank" href="${this.Matches[i].LiveLink}">Live</a></h4><h2>VS</h2></div>

                  <div class="col-md-4">
                    <div class="text-center">
                      <h6><a>${this.Matches[i].ClubB}<img src="http://yakensolution.cloudapp.net/EBBFED/Content/Images/${this.Matches[i].LogoB}"></a></h6>
                    </div>

                  </div>

                </div>

                <h6 class="text-center">${this.date.transform(this.Matches[i].Date)}</h6>
                <h6 class="text-center">${this.Matches[i].DivisionName}</h6>
                <h6 class="text-center">${this.Matches[i].AgeName}</h6>
                
              </li>

            </ul>
          </div>
            
`,
            allDay: true,

          });

        }
        this.refresh.next();

      }

    });


  }
  GetAges() {
    this.http.get('http://yakensolution.cloudapp.net/EBBFED/api/Settings/AllAges').subscribe((res: any) => {
      if (res.isSuccess) {
        this.Ages = res.Response.Ages;
        //(this.Ages);
      }

    });
  }
  GetDivs() {
    this.http.get('http://yakensolution.cloudapp.net/EBBFED/api/Settings/AllDivisions').subscribe((res: any) => {
      if (res.isSuccess) {
        this.Divs = res.Response.Divisions;
        //(this.Divs);
      }

    });
  }
  FilterMatches(x, y) {
    this.FilteredMatches = [];
    //(x);
    //(y);

    if ((x == undefined || x == '') && (y == undefined || y == '')) {
      this.FilteredMatches = this.Matches;
    }
    else if ((x != undefined && x != '') && (y == undefined || y == '')) {
      //('aa');

      for (var i = 0; this.Matches != undefined && i < this.Matches.length; i++) {
        if (this.Matches[i].AgeID == x) {
          this.FilteredMatches.push(this.Matches[i]);
        }
      }

    }
    else if ((x == undefined || x == '') && (y != undefined || y != '')) {
      for (var i = 0; this.Matches != undefined && i < this.Matches.length; i++) {
        if (this.Matches[i].DivisionID === y)
          this.FilteredMatches.push(this.Matches[i]);
      }

    }
    else {
      for (var i = 0; this.Matches != undefined && i < this.Matches.length; i++) {
        if (this.Matches[i].DivisionID === y && this.Matches[i].AgeID === x)
          this.FilteredMatches.push(this.Matches[i]);
      }
    }

    let s = 'VS';
    console.log(this.FilteredMatches);
    this.events = [];
    for (var i = 0; this.FilteredMatches !== undefined && i < this.FilteredMatches.length; i++) {
      //    //(new Date(this.FilteredMatches[i].Date));
      for (var j = 0; this.Clubs != undefined && j < this.Clubs.length; j++) {
      //  //(this.Clubs[j].ID);
       // //(this.FilteredMatches[i].ClubA);

        if (this.FilteredMatches[i].ClubA === this.Clubs[j].ID) {
       //   //('a');

          this.FilteredMatches[i].ClubA = this.Clubs[j].NameA;
        }
      }
      for (var j = 0; this.Clubs != undefined && j < this.Clubs.length; j++) {
        if (this.FilteredMatches[i].ClubB === this.Clubs[j].ID) {
          //('aa');

          this.FilteredMatches[i].ClubB = this.Clubs[j].NameA;
        }
      }
      this.events.push({
        start: startOfDay(new Date(this.FilteredMatches[i].Date)),
        end: endOfDay(new Date(this.FilteredMatches[i].Date)),
        title: `<div class="widget widget_matches">
        <ul>
          <li class="text-center">
            <div class="row">
              <div class="col-md-4">
                <div class="text-center">
                  <h6><a>${this.FilteredMatches[i].ClubA}<img src="http://yakensolution.cloudapp.net/EBBFED/Content/Images/${this.FilteredMatches[i].LogoA}"></a></h6>
                </div>

              </div>

              <div class="col-md-4"><h4><a target="blank" href="${this.FilteredMatches[i].LiveLink}">Live</a></h4><h2>VS</h2></div>

              <div class="col-md-4">
                <div class="text-center">
                  <h6><a>${this.FilteredMatches[i].ClubB}<img src="http://yakensolution.cloudapp.net/EBBFED/Content/Images/${this.FilteredMatches[i].LogoB}"></a></h6>
                </div>

              </div>

            </div>

            <h6 class="text-center">${this.date.transform(this.FilteredMatches[i].Date)}</h6>
            <h6 class="text-center">${this.FilteredMatches[i].DivisionName}</h6>
            <h6 class="text-center">${this.FilteredMatches[i].AgeName}</h6>
            
          </li>

        </ul>
      </div>
        
`,
        allDay: true,

      });

    }
    this.activeDayIsOpen = false;
    this.refresh.next();

  }
  ngOnInit() {
    if (this.Routee.url === '/matches-table') {
      this.NextMatches();
      this.GetLeagueTable();
      this.GetAges();
      this.GetDivs();

    }
    else {
      this.NextMatches();
      this.GetLeagueTable();
      this.GetAges();
      this.GetDivs();

    }

  }

}
