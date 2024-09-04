import { Component, EventEmitter, Input, Output} from '@angular/core';
import { DUMMY_USERS } from './dummy-users';

const randomIndex=Math.floor(Math.random()*DUMMY_USERS.length)

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  @Input({required:true}) id!:string;
  @Input() avatar!: string;      //1.@Input will mark this property settable from outside  2. !: tells ts that this value will be definitely set in future
  @Input() name!:string;

  @Output() select=new EventEmitter();

  get imagePath(){
    return "assets/users/"+this.avatar;
  }



  onSelectUser(){
    this.select.emit(this.id)
  }

}
