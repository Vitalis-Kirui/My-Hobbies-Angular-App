import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Construction } from '../construction';

@Component({
  selector: 'app-hobbies-child1',
  templateUrl: './hobbies-child1.component.html',
  styleUrls: ['./hobbies-child1.component.css']
})
export class HobbiesChild1Component implements OnInit {

  @Input () singleHobby! : Construction;

  @Output () isComplete = new EventEmitter<boolean>();

  singleHobbyRemove(complete: boolean){

    this.isComplete.emit(complete);

  };

  constructor() { }

  ngOnInit(): void {
  }

}
