import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchByName'
})
export class SearchByNamePipe implements PipeTransform {

  transform(fullArray: any[], searchTerm: string): any[] {
    //return empty array if there is no  array (just in case)
    if (!fullArray) {
    return [];
  }

    //return the full array if there's no search term
    if (!searchTerm) {
      return fullArray;
    }

    searchTerm = searchTerm.toLowerCase();

    const filteredArray = [];

    fullArray.forEach((oneItem) => {
      if (oneItem.name.toLowerCase().includes(searchTerm)) {
        filteredArray.push(oneItem);
      }
    });

    return filteredArray;

    //PRO WAY
    // retrun fullArray.filter(oneItem => oneItem.name.includes(serachTerm))
  } // transform()

}
