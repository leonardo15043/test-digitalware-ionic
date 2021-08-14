import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-action-post',
  templateUrl: './action-post.page.html',
})
export class ActionPostPage implements OnInit {

  @Input() data:any;
  post: any = {};

  constructor(
    public modalController: ModalController
  ) { }

  ngOnInit() {
  }

}
