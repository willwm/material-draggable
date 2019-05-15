import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  assignments = [
    'Practice Assessment 5th Grade',
    'Home Row: Home Row F and J',
    'Adaptive Keyboarding: The Great Keyboarding Adventure',
    'Online Communication: Using Digital Collaboration Tools',
    'Group Story (Updated!)',
    'Patterns and Directions Unit Quiz',
    'Touch Keyboarding',
    'Keyboarding: Drill 1',
  ];

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.assignments, event.previousIndex, event.currentIndex);
  }
}
