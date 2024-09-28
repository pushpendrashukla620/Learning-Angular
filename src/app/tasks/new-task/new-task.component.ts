import { Component, EventEmitter, Output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
onSubmit() {
  throw new Error('Method not implemented.');
}
  @Output() cancel =new EventEmitter();
  enteredTitle=signal('');
  entereSummary=signal('');
  enteredDate=signal('');

  onCancel(){
    this.cancel.emit();
  }
}