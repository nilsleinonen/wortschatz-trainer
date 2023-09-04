import { Component, Input, OnInit } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Word } from '../model/word';
import { sampleData } from '../model/sampleData';

@Component({
  selector: 'app-erfassen',
  templateUrl: './erfassen.component.html',
  styleUrls: ['./erfassen.component.css'],
})
export class ErfassenComponent implements OnInit {
  todoForm!: FormGroup;
  words: Word[] = [];
  isEditEnabled: boolean = false;
  updateIndex!: any;
  constructor(private fb: FormBuilder) {}
  dataSource = [];

  isGerSortEnabled: boolean = true;
  isEngSortEnabled: boolean = false;

  word: Word = new Word();

  ngOnInit(): void {
    const storedWords = localStorage.getItem('words');
    if (storedWords) {
      this.words = JSON.parse(storedWords);
    }

    this.todoForm = this.fb.group({
      words: ['', Validators.required],
    });
  }

  addWord() {
    this.words.push({
      german: this.word.german,
      english: this.word.english,
      localeCompare: function (b: Word): number {
        throw new Error('Function not implemented.');
      },
    });
    this.sortWordsAlphabeticallyGerman();
    this.word = new Word(); // Reset the word object

    localStorage.setItem('words', JSON.stringify(this.words));
  }

  onEdit(word: Word, i: number) {
    this.word.german = word.german;
    this.word.english = word.english;
    this.updateIndex = i;
    this.isEditEnabled = true;
  }

  updateWord() {
    this.words[this.updateIndex].german = this.word.german;
    this.words[this.updateIndex].english = this.word.english;
    this.word = new Word(); // Reset the word object
    this.updateIndex = undefined;
    this.isEditEnabled = false;
    this.sortWordsAlphabeticallyGerman();
    localStorage.setItem('words', JSON.stringify(this.words));
  }

  deleteWord(i: number) {
    this.words.splice(i, 1);
  }

  drop(event: CdkDragDrop<Word[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

  sortWordsAlphabeticallyGerman() {
    this.words.sort((a, b) => {
      const germanA = a.german || '';
      const germanB = b.german || '';
      return germanA.localeCompare(germanB);
    });

    this.isGerSortEnabled = true;
    this.isEngSortEnabled = false;
  }

  sortWordsAlphabeticallyEnglish() {
    this.words.sort((a, b) => {
      const englishA = a.english || '';
      const englishB = b.english || '';
      return englishA.localeCompare(englishB);
    });

    this.isGerSortEnabled = false;
    this.isEngSortEnabled = true;
  }

  deleteAllWords() {
    localStorage.clear();
    window.location.reload();
  }

  addSampleData() {
    this.words.push(...sampleData); // Append sampleData to the words array
    this.sortWordsAlphabeticallyGerman(); // Sort the words array
    localStorage.setItem('words', JSON.stringify(this.words)); // Save updated data
  }
}
