import {Component, OnInit} from '@angular/core';
import { NavController } from 'ionic-angular';
import {AngularFireDatabase} from "angularfire2/database";
import {Observable} from "rxjs/Observable";
import "rxjs/add/operator/do";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {

  public events: Observable<any[]>;

  constructor(public navCtrl: NavController, private db: AngularFireDatabase) {

  }

  ngOnInit(): void {
    this.events = this.db.list("/events").valueChanges();
  }

}
