import { Component } from '@angular/core';
import { Word } from '../model/word';

@Component({
  selector: 'app-trainieren',
  templateUrl: './trainieren.component.html',
  styleUrls: ['./trainieren.component.css'],
})
export class TrainierenComponent {
  storedData: any[] = [];
  words: Word[] = [];
  word: Word = new Word();
  randomWord: any = {};

  constructor() {
    const storedDataString = localStorage.getItem('words');

    if (storedDataString) {
      this.storedData = JSON.parse(storedDataString);
      console.log(this.storedData);
    } else {
      console.log('No data found in localStorage');
    }
  }

  nextRandomWord() {
    const randomIndex = Math.floor(Math.random() * this.storedData.length);
    this.randomWord = this.storedData[randomIndex];
  }

  isAnwserRight() {}
}
