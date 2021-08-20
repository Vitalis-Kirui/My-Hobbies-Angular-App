import { Component, OnInit } from '@angular/core';
import { Construction } from '../construction';


@Component({
  selector: 'app-hobbies-parent',
  templateUrl: './hobbies-parent.component.html',
  styleUrls: ['./hobbies-parent.component.css']
})
export class HobbiesParentComponent implements OnInit {

  title = "Kipyegon Kirui Vitalis Hobbies"

  hobbiesArray : Construction [] = [

    new Construction(1, "Nature and Wildlife", "I was born next to Masai Mara, so from the day I was born, I have been in love nature and Wildlife.", new Date(2021, 3, 14)),
    new Construction(2, "Technology", "This begun when I was in  class 8 of my primary education, this was when I first got my hands on my brother's laptop. Ever since! I love you Tech!", new Date(2021, 8, 20)),
    new Construction(3, "Travelling", "I enjoy a long travel a lot. As long as there is a good luck and new look outside the travelling means! I don't fall asleep for more 72 hours.", new Date(2022, 3, 14))

  ];

  toggleDetails(index : number) {

    this.hobbiesArray[index].showDetails = !this.hobbiesArray[index].showDetails;

  };

  removeConstruction(isComplete : any, index : number){

    if (isComplete) {

      let toDelete = confirm(`Are you sure you want to delete ${this.hobbiesArray[index].name}?`)

      if (toDelete) {

        this.hobbiesArray.splice(index, 1)

      }

    }

  };

  addNewConstruction (singleHobby : any){

    let singleHobbyLength = this.hobbiesArray.length;
    singleHobby.id = singleHobbyLength + 1;
    singleHobby.dueDate = new Date (singleHobby.dueDate);
    this.hobbiesArray.push(singleHobby);

  };

  constructor() { }

  ngOnInit(): void {
  }

}
