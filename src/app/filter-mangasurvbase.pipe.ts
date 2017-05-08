import { Pipe, PipeTransform } from '@angular/core';
import { Manga } from "./mangas/manga.model";

@Pipe({
  name: 'filterMangaSurvBase'
})
export class FilterMangaSurvBasePipe implements PipeTransform {

  transform(value: Manga[], args?: string): Manga[] {
    let mangas: Manga[] = [];

    value.forEach(manga => {
      if(manga != undefined && manga.name != undefined && args != undefined)
      {
          if(manga.name.toUpperCase().indexOf(args.toUpperCase()) >= 0)
            mangas.push(manga);
      }
    });

    return mangas;
  }
}
