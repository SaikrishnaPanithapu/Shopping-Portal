import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchName'
})
export class SearchNamePipe implements PipeTransform {

  transform(shoesInfo: any[], searchNameText: string): any {
    if (!shoesInfo) {
      return [];
    }
    if (!searchNameText) {
      return shoesInfo;
    }
    return shoesInfo.filter(
      singleItem => singleItem.name.toLowerCase().includes(searchNameText.toLowerCase())
    );
  }

}
