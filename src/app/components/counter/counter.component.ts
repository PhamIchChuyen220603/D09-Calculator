import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Counter } from 'src/models/counter.model';
import * as CounterActions from '../../../actions/counter.action';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent {

  count$!: Observable<Counter>;

  constructor(private store: Store<{ counter: Counter }>){
    this.count$ = store.select('counter');
  }

  enterKey(key: string,type: string) {
    this.store.dispatch(
      CounterActions.EnterKey({ key: key, keyType: type })
    );
  }

}
