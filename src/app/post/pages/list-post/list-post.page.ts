import { Component, ViewChild } from '@angular/core';
import { IonList, ModalController } from '@ionic/angular';
import { ActionPostPage } from '../action-post/action-post.page';
import { ViewPostPage } from '../view-post/view-post.page';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-list-post',
  templateUrl: './list-post.page.html',
})
export class ListPostPage {

  @ViewChild('list') list: IonList;
  posts:any = [];

  constructor(
    public modalController: ModalController,
    private _postService: PostService
  ) { 
    this._postService.getAllPost().subscribe( data =>{
      this.posts = data;
    });
  }

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
