import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import {CommonModule} from '@angular/common';
import { HttpClientModule ,HttpClientJsonpModule } from '@angular/common/http';
import { FilterPipeModule } from 'ngx-filter-pipe';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ShareButtonsModule } from '@ngx-share/buttons';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory  } from 'angular-calendar/date-adapters/date-fns';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';
import { NewsDetailsComponent } from './news-details/news-details.component';
import { TableMatchesComponent } from './table-matches/table-matches.component';
import { PlayersComponent } from './players/players.component';
import { PlayerDetailsComponent } from './player-details/player-details.component';
import { RRComponent } from './rr/rr.component';
import { MatchResultsComponent } from './match-results/match-results.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { UnionHistoryComponent } from './union-history/union-history.component';
import { UnionDecsComponent } from './union-decs/union-decs.component';
import { UnionDecDetailsComponent } from './union-dec-details/union-dec-details.component';
import { UnionPresidentsComponent } from './union-presidents/union-presidents.component';
import { SearchfilterPipe } from './searchfilter.pipe';
import { ClubComponent } from './club/club.component';
import { ClubDetailsComponent } from './club-details/club-details.component';
import { RulersComponent } from './rulers/rulers.component';
import { CoachesComponent } from './coaches/coaches.component';
import { CoachesDetailsComponent } from './coaches-details/coaches-details.component';
import { ArticlesComponent } from './articles/articles.component';
import { ArticlesDetailsComponent } from './articles-details/articles-details.component';
import { CoursesComponent } from './courses/courses.component';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { GalleryComponent } from './gallery/gallery.component';

const appRoutes: Routes = [
  { path: '' , component: HomeComponent },
  { path: 'news' , component: NewsComponent },
  { path: 'gallery' , component: GalleryComponent },
  { path: 'courses' , component: CoursesComponent },
  { path: 'course-details/:id' , component: CourseDetailsComponent },
  { path: 'articles' , component: ArticlesComponent },
  { path: 'national-news' , component: NewsComponent },
  { path: 'news-details/:id' , component: NewsDetailsComponent },
  { path: 'articles-details/:id' , component: ArticlesDetailsComponent },
  { path: 'news-details/:id' , component: NewsDetailsComponent },
  
  { path: 'matches-table' , component: TableMatchesComponent },
  { path: 'match-result' , component:MatchResultsComponent },
  { path: 'national-matches-table' , component: TableMatchesComponent },
  { path: 'national-match-result' , component:MatchResultsComponent },
  
  { path: 'rules&regulations' , component:RRComponent },
  { path: 'players' , component:PlayersComponent },
  { path: 'clubs' , component:ClubComponent },
  { path: 'club-details/:id' , component:ClubDetailsComponent },
  { path: 'coaches' , component:CoachesComponent },
  { path: 'coache-details/:id' , component:CoachesDetailsComponent },
  { path: 'rulers' , component:RulersComponent },
  { path: 'contact-us' , component:ContactUsComponent },
  { path: 'player-details/:id' , component:PlayerDetailsComponent },
  { path: 'union-history' , component:UnionHistoryComponent },
  { path: 'union-decisions' , component:UnionDecsComponent },
  { path: 'union-decision-details/:id' , component:UnionDecDetailsComponent },
  { path: 'union-presidents' , component:UnionPresidentsComponent },

]  ; 


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NewsComponent,
    NewsDetailsComponent,
    TableMatchesComponent,
    PlayersComponent,
    PlayerDetailsComponent,
    RRComponent,
    MatchResultsComponent,
    ContactUsComponent,
    UnionHistoryComponent,
    UnionDecsComponent,
    UnionDecDetailsComponent,
    UnionPresidentsComponent,
    SearchfilterPipe,
    ClubComponent,
    ClubDetailsComponent,
    RulersComponent,
    CoachesComponent,
    CoachesDetailsComponent,
    ArticlesComponent,
    ArticlesDetailsComponent,
    CoursesComponent,
    CourseDetailsComponent,
    GalleryComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientJsonpModule,
    CommonModule ,
    FormsModule,
    BrowserAnimationsModule,
    FilterPipeModule,
    RouterModule.forRoot(
      appRoutes,
      { useHash: true , enableTracing: false , scrollPositionRestoration: 'enabled'}) , 
      CalendarModule.forRoot({
        provide: DateAdapter,
        useFactory: adapterFactory
      }) , 
      NgbModule , 
      ShareButtonsModule.forRoot() 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
