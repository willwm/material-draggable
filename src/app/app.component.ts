import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Assignment } from './assignment';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  assignments: Assignment[] = [
    { Id: '12345', Name: 'Practice Assessment 5th Grade', Language: 'EN', SortOrder: 1 },
    { Id: '12345', Name: 'Home Row: Home Row F and J', Language: 'EN', SortOrder: 2 },
    { Id: '12345', Name: 'Adaptive Keyboarding: The Great Keyboarding Adventure', Language: 'EN', SortOrder: 3 },
    { Id: '12345', Name: 'Online Communication: Using Digital Collaboration Tools', Language: 'EN', SortOrder: 4 },
    { Id: '12345', Name: 'Group Story (Updated!)', Language: 'EN', SortOrder: 5 },
    { Id: '12345', Name: 'Patterns and Directions Unit Quiz', Language: 'EN', SortOrder: 6 },
    { Id: '12345', Name: 'Touch Keyboarding', Language: 'EN', SortOrder: 7 },
    { Id: '12345', Name: 'Keyboarding: Drill 1', Language: 'EN', SortOrder: 8 },
  ];

  drop(event: CdkDragDrop<Assignment[]>) {
    moveItemInArray(this.assignments, event.previousIndex, event.currentIndex);

    let sortOrder = 1;
    for (const assignment of this.assignments) {
      assignment.SortOrder = sortOrder++;
    }

    const logObject = {
      assignments: this.assignments,
      previousIndex: event.previousIndex,
      currentIndex: event.currentIndex,
      itemMoved: this.assignments[event.currentIndex].Name
    };
    console.log(logObject);
  }
}
