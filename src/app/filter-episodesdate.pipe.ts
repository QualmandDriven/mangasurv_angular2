import { Pipe, PipeTransform } from '@angular/core';
import { Anime } from "./animes/anime.model";

@Pipe({
  name: 'filterEpisodeDatePipe'
})
export class FilterEpisodeDatePipe implements PipeTransform {

  transform(value: Anime[], args?: string): Anime[] {
    let animes: Anime[] = [];

    if(args == undefined)
      return animes;

    let currentDate = this.getCurrentDate(+args);
    value.forEach(anime => {
      let ds = anime.episodes[0].enterDate.toString().split("T");
      // if(anime != undefined && anime.name != undefined && anime.episodes.length > 0 && currentDate == this.getDateAsString(anime.episodes[0].enterDate))
      if(anime != undefined && anime.name != undefined && anime.episodes.length > 0 && currentDate == ds[0])
      {
          animes.push(anime);
      }
    });

    return animes;
  }

  protected getDateAsString(date : Date) : String {
      var dd = date.getDate().toString();
      var mm : String = (date.getMonth()+1).toString(); //January is 0!
      var yyyy : String  = date.getFullYear().toString();

      if(date.getDate()<10) {
          dd='0'+dd
      } 

      if(date.getMonth()+1<10) {
          mm='0'+mm
      } 
      
      return yyyy + '-' + mm +'-' + dd;
  }

  protected getCurrentDate(addDays : number) : String {
    var today = new Date();
    today.setDate(today.getDate() + addDays);

    return this.getDateAsString(today);
  }
}
