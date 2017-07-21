import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class EmployeeService{
       constructor(private http:Http){
        this.http = http;
    }
    getPosts(){
        return this.http.get('assets/colors.json').map(res => res.json());
    }
} 