import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stringImageReplace'
})
export class StringImageReplacePipe implements PipeTransform {

  transform(value: string): string {
    if(value != undefined)
      return value.replace(/[ :]/g, "_");
    return value;
  }

}
