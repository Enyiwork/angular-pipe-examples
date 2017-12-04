import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myPipesEmojify'
})
export class MyPipesEmojifyPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
