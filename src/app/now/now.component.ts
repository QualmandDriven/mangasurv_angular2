import { Component, OnInit, Attribute, Input } from '@angular/core';

@Component({
  selector: 'app-now',
  templateUrl: './now.component.html',
  styleUrls: ['./now.component.css']
})
export class NowComponent implements OnInit {

  ngOnInit() {
  }

   date: Date;
   format: String;
   private addDays: number;
   
  constructor(@Attribute("format") format, @Attribute("addDays") addDays) { 
    this.addDays = +addDays;
    this.format = format;

    this.date =  new Date();
    if(this.addDays != 0) {
      this.date.setDate(this.date.getDate() + this.addDays);
    }
    
    // Würde die Zeit im Browser updaten jede Sekunden (Timer)
    // setInterval(() => {
    //     this.date =  new Date();
    //  }, 1000);
  }

}
