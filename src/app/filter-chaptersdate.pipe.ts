import { Pipe, PipeTransform } from '@angular/core';
import { Manga } from "./mangas/manga.model";

@Pipe({
  name: 'filterChapterDatePipe'
})
export class FilterChapterDatePipe implements PipeTransform {

  transform(value: Manga[], args?: string): Manga[] {
    let mangas: Manga[] = [];

    if(args == undefined)
      return mangas;

    let currentDate = this.getCurrentDate(+args);
    value.forEach(manga => {
      let ds = manga.chapters[0].enterDate.toString().split("T");
      // if(manga != undefined && manga.name != undefined && manga.chapters.length > 0 && currentDate == this.getDateAsString(manga.chapters[0].enterDate))
      if(manga != undefined && manga.name != undefined && manga.chapters.length > 0 && currentDate == ds[0])
      {
          mangas.push(manga);
      }
    });

    return mangas;
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
