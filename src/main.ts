// Core JS allows the browser to use ecmascript2015 features 
// import 'core-js';
// Reflect-metadata allows the meta descriptions angular components
// Zone.js is a technology that is also developed by the angular team, but can be implemented in other setups. 
// import 'rxjs'
// import 'reflect-metadata';
// import 'zone.js/dist/zone';

// Import the platform-browser-dynamics
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {AppModule} from './MainModule/app.module';
// Bootstrap the main/parent module for the application
platformBrowserDynamic().bootstrapModule(AppModule)