import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Todo } from '../models/todo.model';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import * as actions from '../todo.actions';



@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() todo: Todo;
  @ViewChild('refInput') refInput: ElementRef;  // acceso a las propiedades del elemento html físico
  chkCompleted: FormControl;
  txtInput: FormControl;
  editing: boolean = false;

  constructor( private store: Store<AppState>) {
  }

  ngOnInit(): void {
    //this.todo.completed = true;
    console.log('todo:' , this.todo);
    this.chkCompleted = new FormControl( this.todo.completed );
    this.txtInput = new FormControl( this.todo.text , Validators.required );

    this.chkCompleted.valueChanges.subscribe(
      value => {
        console.log('value:' , value, 'id:' , this.todo.id);
        this.store.dispatch( actions.todoToggle( {id: this.todo.id}) );
      } );

  }

  edit() {
    this.editing = true;
    // 202 Aqui controlamos que cuando se esté editando no se pierda el contenido y siempre esté visible
    //     Si no hay cambios se reestablece el valor.
    //     Observar que lo que ocurre es que cuando hacemos clic, se borra todo. Por tanto, lo borro pero si luego no cambio
    //     es donde el reestablecimiento hace que vuelva a aparecer.
    this.txtInput.setValue( this.todo.text );

    //setTimeout( () => { this.refInput.nativeElement.focus(); } , 1);
    setTimeout( () => { this.refInput.nativeElement.select(); } , 1);
  }

  // Controla salida del objeto. En ese momento lanzo la acción de actualizar
  exit() {
    this.editing = false;
    // 200 mando el id de item seleccionado y el valor nuevo que tiene la caja
    if( this.txtInput.invalid) {
       return; // hay una validación de dato obligatorio. Si no cumple, salimos.
    }
    // 201 comprobar que si no hay cambios sobre el contenido no se lanzar la actualización
    if ( this.txtInput.value === this.todo.text ) {
      return; // no hay cambios
    }
    // 199
    this.store.dispatch( actions.todoEdit( {id: this.todo.id , text: this.txtInput.value}) );
  }

  delete() {
    // 204
    this.store.dispatch( actions.todoDelete( {id: this.todo.id }) );
  }

}
