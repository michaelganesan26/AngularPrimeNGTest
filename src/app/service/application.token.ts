import {InjectionToken} from '@angular/core';

//This is a sample of how to use tokens

//Use global tokens
export interface IAppConfig{
    name:string;
}

export let APP_CONFIG = new InjectionToken<IAppConfig>("app.config");

export let appConfig:IAppConfig = {name:'Michael\'s First App'};