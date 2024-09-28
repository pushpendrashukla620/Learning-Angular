import { Component, computed, EventEmitter, Output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { newTaskData } from '../task/task.model';



@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})

export class NewTaskComponent {
  
  @Output() cancel =new EventEmitter();
  @Output() addTask=new EventEmitter<newTaskData>();
  enteredTitle=signal('');
  enteredSummary=signal('');
  enteredDate=signal('');

  onCancel(){
    this.cancel.emit();
  }
  onSubmit() {
    this.addTask.emit({
      title: this.enteredTitle(),   // Access signal value with ()
      summary: this.enteredSummary(),
      date: this.enteredDate()


    })
  }
}