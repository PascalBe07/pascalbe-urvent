import {Component, OnInit} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {IEvent} from "../../models/event";

@Component({
  selector: 'page-singleEvent',
  templateUrl: 'singleEvent.html'
})
export class SingleEventPage implements OnInit {

  public event: IEvent;

  constructor(public navCtrl: NavController, private navParams: NavParams) {

  }

  ngOnInit(): void {
    this.event = this.navParams.get("event");
    if (!this.event)
      this.navCtrl.pop();
  }
}
