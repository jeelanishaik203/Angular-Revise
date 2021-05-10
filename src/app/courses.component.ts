import {Component} from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
    selector: 'courses',
    template: `<h2>{{no_courses+" Courses"}}</h2>
                <ul >
                    <li *ngFor="let i of courses">{{i}}</li>
                </ul>
                <img [src]="imageUrl"/><br>
                <span class="glyphicon" [class.glyphicon-star-empty]="starStatus" [class.glyphicon-star]="!starStatus" (click)="changeStarSTatus()">kam</span>
                <br>
               <input [(ngModel)]="freeText" >
               <h1>{{freeText | titleCase}} </h1>
                `,
    
})
export class CoursesComponent{
    title="Courses";
    starStatus: boolean=true;
    courses;
    no_courses;
    imageUrl="https://images.ctfassets.net/hrltx12pl8hq/3MbF54EhWUhsXunc5Keueb/60774fbbff86e6bf6776f1e17a8016b4/04-nature_721703848.jpg?fit=fill&w=480&h=270"
    freeText="";
    constructor(service: CoursesService) {
      
        this.courses= service.getCourses();
        this.no_courses = this.courses.length;
    }
    changeStarSTatus()
    {
        this.starStatus=!this.starStatus;
    }
    getName()
    {
        return "List of Courses";
    }
}