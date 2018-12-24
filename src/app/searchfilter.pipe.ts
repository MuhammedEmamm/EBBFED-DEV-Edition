import { Pipe, PipeTransform  , Injectable} from '@angular/core';

@Pipe({
  name: 'searchfilter'
})
export class SearchfilterPipe implements PipeTransform {

  transform(items: any[], field:string , value:string): any[]{
    if(!value) return items ;
    return items.filter(it => it[field].search(value) != -1 );
  }

}
