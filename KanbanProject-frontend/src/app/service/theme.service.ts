import { Injectable } from '@angular/core';
import { KanbanService } from './kanban.service';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

 
  constructor(private service:KanbanService) { }

  // theme="rgb(0,0,0)";

  getSideNavTheme(){
   
    return this.sideNavBackgroundColor;
  }


  textColor:string="white"
  // sideNavBackgroundColorProject:string="rgb(0,0,0)"
  sideNavBackgroundColor:string="rgb(0,0,0)";
  headerBackgroundColor:string="rgb(0,0,0)";
  sidenavColor:string="rgba(0,0,0,0.7)";
  themeIcon:string="wb_sunny"
  backgroundUrl:string="assets/galaxy_planet_light_stars_rays_63575_1280x1024.jpg"
  isDarkTheme:boolean=true;

  lightThemeActive(){
    this.textColor="black"
    // this.sideNavBackgroundColorProject="white"
    this.sideNavBackgroundColor="white"
    this.headerBackgroundColor="rgb(240,240,240)"
    // this.backgroundUrl="assets/bank_eiffel_tower_balls_67508_1920x1080.jpg" 
    this.backgroundUrl="assets/ship_sea_sky_sail_wave_96342_1920x1080.jpg" 
    this.themeIcon="brightness_3";
  }

  darkThemeActive(){
    this.textColor="white"
    // this.sideNavBackgroundColorProject="rgb(0,0,0)"
    this.sideNavBackgroundColor="rgb(0,0,0)"
    this.headerBackgroundColor="rgb(0,0,0)"
    // this.backgroundUrl="assets/hourglass_stones_blur_120797_1920x1020.jpg"
    this.backgroundUrl="assets/galaxy_planet_light_stars_rays_63575_1280x1024.jpg"
    this.themeIcon="wb_sunny"
  }

  changeTheme(){
    if(this.isDarkTheme){
      this.lightThemeActive()
      this.isDarkTheme=false;
    }
    else{
      this.darkThemeActive();
      this.isDarkTheme=true;
    }
  }
}
