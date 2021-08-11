import { Pipe, PipeTransform } from '@angular/core';
​
@Pipe({
  name: 'FilterPipe'
})
export class FilterPipe implements PipeTransform {
​
  transform(value: any, input: any): any {
​
    if(!value || !input){
      return value;
    }
​
    return value.filter(val =>
      /* --------- Filter ---------*/
      val.Name?.toLocaleLowerCase().includes(input.toLocaleLowerCase())
    );
  }
}