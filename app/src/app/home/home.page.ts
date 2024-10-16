import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  text ='Default Text'
  persons: string[] = ['Mugiwara','Zoro','Sanji']
  constructor() {}

  onChangeText(){
    this.text="This Text is change it"
  }

}
