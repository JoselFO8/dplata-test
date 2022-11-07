import { Component } from '@angular/core';
import { CLIENT_PROFILE_ITEMS } from '@data/constants/client-profile/client-profile.const'

@Component({
  selector: 'app-client-profile',
  templateUrl: './client-profile.component.html',
  styleUrls: ['./client-profile.component.scss']
})
export class ClientProfileComponent{
 public data = CLIENT_PROFILE_ITEMS;
 public slides: number[];
//  public currentSlides: ICataloge[];
 public currentSlides: any;

 constructor() {
  this.slides = this.calcSlides(this.data.catalogs);
  console.log('Prueba', this.slides);
  this.currentSlides = []
  this.carousel(0)
  console.log('Prueba', this.currentSlides.current);
  
  
 }

 calcSlides(array: any[]) {
  let arr = []
  for (let i = 0; i < array.length/4; i++) {
    arr.push(i)
  }
  return arr;
 }

 parseNumber(e: any) {
  return Number(e)
 }

 carousel(e: any | number) {
  let current = typeof e === 'number' ? e * 4 : Number(e.srcElement.value) * 4;
  let array = this.data.catalogs.slice(current, (current+ 4));
  console.log(array)
  return this.currentSlides = {current, array};
 }
}
