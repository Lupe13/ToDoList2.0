import { Todo } from './../shared/todo.model';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, Inject, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit-todo-dialog',
  templateUrl: './edit-todo-dialog.component.html',
  styleUrls: ['./edit-todo-dialog.component.scss']
})
export class EditTodoDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<EditTodoDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public todo: Todo) { }
  ngOnInit(): void {
  }

  close () {
    this.dialogRef.close()
  }

  onFormSubmit(form: NgForm) {
   const updatedTodo = {

      ...this.todo,
      ...form.value
    }
    this.dialogRef.close(updatedTodo)
  }

}