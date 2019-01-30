import {NgModule, Pipe} from '@angular/core';
import {CommonModule} from '@angular/common';

import {FooterComponent} from './footer/footer.component';
import {HeaderComponent} from './header/header.component';
import {SearchBoxComponent} from './search-box/search-box.component';
import {RouterModule} from '@angular/router';
import {MediaCardComponent} from './media-card/media-card.component';
import {BannerDetailsComponent} from './banner-details/banner-details.component';
import {TopCastComponent} from './top-cast/top-cast.component';
import {VideoTrailerComponent} from './video-trailer/video-trailer.component';
import {RecommendationsDetailsComponent} from './recommendations-details/recommendations-details.component';
import {FormsModule} from '@angular/forms';
import {ContentDetailsComponent} from './content-details/content-details.component';
import { SafePipe } from './safe.pipe';
import {InfoDetailsComponent} from './info-details/info-details.component';
import { PersonCardComponent } from './person-card/person-card.component';
import { PersonInfoComponent } from './person-info/person-info.component';
import { PersonOverviewComponent } from './person-overview/person-overview.component';
import { AppShortcutNavComponent } from './app-shortcut-nav/app-shortcut-nav.component';

@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    MediaCardComponent,
    SearchBoxComponent,
    BannerDetailsComponent,
    TopCastComponent,
    VideoTrailerComponent,
    RecommendationsDetailsComponent,
    ContentDetailsComponent,
    SafePipe,
    InfoDetailsComponent,
    PersonCardComponent,
    PersonInfoComponent,
    PersonOverviewComponent,
    AppShortcutNavComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SearchBoxComponent,
    MediaCardComponent,
    BannerDetailsComponent,
    TopCastComponent,
    VideoTrailerComponent,
    RecommendationsDetailsComponent,
    InfoDetailsComponent,
    PersonCardComponent,
    PersonInfoComponent,
    PersonOverviewComponent,
    AppShortcutNavComponent
  ]
})
export class SharedModule {
  static forRoot() {
    return {
      ngModule: SharedModule,
      providers: [],
    };
  }
}

