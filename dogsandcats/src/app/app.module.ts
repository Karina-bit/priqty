import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { BlogComponent } from './blog/blog.component';

import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { VideoComponent } from './video/video.component';
import { WhyComponent } from './why/why.component';
import { EffectsComponent } from './effects/effects.component';
import { HomeforanimalComponent } from './homeforanimal/homeforanimal.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    BlogComponent,
    FooterComponent,
    HeaderComponent,
    VideoComponent,
    WhyComponent,
    EffectsComponent,
    HomeforanimalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: '', component: MainComponent },
      { path: 'blog', component: BlogComponent },
      { path: 'effects', component: EffectsComponent },
      { path: 'homeforanimal', component: HomeforanimalComponent },
      { path: 'why', component: WhyComponent },
      { path: 'video', component: VideoComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
