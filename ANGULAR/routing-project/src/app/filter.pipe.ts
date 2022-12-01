import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
    name: 'filter'
    })
    export class FilterPipe implements PipeTransform {
    transform(items: any[], searchText: string): any[] {
    if(!items) return [];
    if(!searchText) return items;
    //searchText = searchText.toLowerCase();return items.filter( it => {
    //return it.toString().toLowerCase().includes(searchText);
    return items.filter(v=>v.item_name.toLowerCase().includes(searchText.toLowerCase()));
    }}