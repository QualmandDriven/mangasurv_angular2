import { Headers } from "@angular/http";

import { environment } from '../environments/environment';

export class AppService {
    
    protected getBaseUrl() : String {
        if(!environment.production) {
            return "https://mangasurv.com";
            //return "https://localhost:5000";
        }

        var pathArray = location.href.split( '/' );
        var protocol = pathArray[0];
        var host = pathArray[2];
        var url = protocol + '//' + host;
        return url;
    }

    public getApiUrl() : String {
        return this.getBaseUrl() + '/api';
    }

    protected getHeaders() : Headers {
        let headers = new Headers();
        headers.append('Accept', 'application/json');
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', 'Bearer ' + localStorage.getItem('id_token'));
        return headers;
    }

    protected getCurrentDate(addDays : number) : String {
        var today = new Date();
        today.setDate(today.getDate() + addDays);
        var dd = today.getDate().toString();
        var mm : String = (today.getMonth()+1).toString(); //January is 0!
        var yyyy : String  = today.getFullYear().toString();

        if(today.getDate()<10) {
            dd='0'+dd
        } 

        if(today.getMonth()+1<10) {
            mm='0'+mm
        } 

        return yyyy + '-' + mm +'-' + dd;
    }
}