
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// REDUX
import { StoreModule } from '@ngrx/store';  // añadirlo a los módulos
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment'; // Angular CLI environment
// MODULO PRINCIPAL
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
// MODULO AGRUPADOR DE MÓDULOS
import { TodoModule } from './todos/todo.module';
import { todoReducer } from './todos/todo.reducer';
// FORMULARIOS REACTIVOS
import { ReactiveFormsModule } from '@angular/forms';
// MODULO DE REDUCERS
import { appReducers } from './app.reducer';


@NgModule({
  declarations: [
    AppComponent , FooterComponent
  ],
  imports: [
    BrowserModule,
    TodoModule,
    ReactiveFormsModule,
    // 225. Generalizar y centralizar configuración de nuevos reducers ... StoreModule.forRoot( {todos: todoReducer}),
    StoreModule.forRoot( appReducers ),
    // Instrumentation must be imported after importing StoreModule (config is optional)
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
