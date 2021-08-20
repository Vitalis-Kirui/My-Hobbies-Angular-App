import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Construction } from '../construction';

@Component({
  selector: 'app-form-child',
  templateUrl: './form-child.component.html',
  styleUrls: ['./form-child.component.css']
})
export class FormChildComponent implements OnInit {

  newHobby = new Construction( 0, "", "", new Date () )  ;

  @Output () addHobby = new EventEmitter <Construction>();

  submitConstruction (){

    this.addHobby.emit(this.newHobby);

  }

  constructor() { }

  ngOnInit(): void {
  }

}
