import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})    
export class FilterPipe implements PipeTransform {

  transform(paint: any[], searchText: string):  any[] {
    if(!paint) return [];
if(!searchText) return paint;
searchText = searchText.toLowerCase();
return paint.filter( it => {
return it.Name.toLowerCase().includes(searchText) || it.artist.toLowerCase().includes(searchText)
 || it.price.toLowerCase().includes(searchText) || it.info.toLowerCase().includes(searchText)
 || it.year.toLowerCase().includes(searchText);
});
  }

}
