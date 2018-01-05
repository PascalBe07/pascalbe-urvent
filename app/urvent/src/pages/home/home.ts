import {Component, OnInit} from '@angular/core';
import { NavController } from 'ionic-angular';
import {AngularFireDatabase} from "angularfire2/database";
import {Observable} from "rxjs/Observable";
import "rxjs/add/operator/do";
import {IEvent} from "../../models/event";
import {SingleEventPage} from "../singleEvent/singleEvent";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {

  public events: Observable<any[]>;

  constructor(public navCtrl: NavController, private db: AngularFireDatabase) {

  }

  ngOnInit(): void {
    this.events = this.db.list<IEvent>("/events").valueChanges()
      .map(events => events.sort((first, second) => first.date > second.date ? 1 : -1));
  }


  public async openEvent(event: IEvent): Promise<void> {
    await this.navCtrl.push(SingleEventPage, {event: event});
  }
}
