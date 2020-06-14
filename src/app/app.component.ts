import { Component } from '@angular/core';
import * as $ from "jquery";
declare var $: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'easyfullcalendar';

ngOnInit(){
       setTimeout(() => {
        $("#calendar").fullCalendar({  
                        header: {
                            left   : 'prev,next today',
                            center : 'title',
                            right  : 'month,agendaWeek,agendaDay'
                        },
                        navLinks   : true,
                        editable   : true,
                        eventLimit : true,
                        events: [
                            {
                                title : 'Your birth day',
                                start : '2020-06-03T12:30:00',
                                color : '#13e81a' // override!
                            },
                            {
                                title : 'Exam date',
                                start : '2020-06-08T12:30:00',
                                color : '#8513e8' // override!
                            },
                            {
                                title : 'Your birth day',
                                start : '2020-07-03T12:30:00',
                                color : '#13e81a' // override!
                            },
                            {
                                title : 'Exam date',
                                start : '2020-07-08T12:30:00',
                                color : '#8513e8' // override!
                            },
                            {
                                title  : 'journy date',
                                start  : '2020-06-12T12:30:00',
                                allDay : false, // will make the time show,
                                color  : "#57cd5f"
                            }
                        ],  // request to load current events
                    });

     }, 100);
   }
}