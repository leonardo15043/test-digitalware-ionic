import { Component, ViewChild } from '@angular/core';
import { IonList, ModalController } from '@ionic/angular';
import { ActionPostPage } from '../action-post/action-post.page';
import { ViewPostPage } from '../view-post/view-post.page';

@Component({
  selector: 'app-list-post',
  templateUrl: './list-post.page.html',
  styleUrls: ['./list-post.page.scss'],
})
export class ListPostPage {

  @ViewChild('list') list: IonList;

  constructor(
    public modalController: ModalController
  ) { }

  async viewPost( data ){
    const modal = await this.modalController.create({
      component: ViewPostPage,
      id: 'modal_post',
      componentProps: {
        'data': data
      }
    });

    this.list.closeSlidingItems();

    return await modal.present();
  }

  async editPost( data ){
    const modal = await this.modalController.create({
      component: ActionPostPage,
      id: 'modal_post',
      componentProps: {
        'data': data
      }
    });

    this.list.closeSlidingItems();

    return await modal.present();
  }

  detailPost(){
    
  }

  deletePost(){

  }

}
