import { Component, ViewChild } from '@angular/core';
import { IonList, ModalController } from '@ionic/angular';

import { ActionPostPage } from '../action-post/action-post.page';
import { ViewPostPage } from '../view-post/view-post.page';

import { PostService } from '../../services/post.service';
import { IonLoaderService } from '../../../core/services/ion-loader.service';

import { Post } from '../../models/post.interface';


@Component({
  selector: 'app-list-post',
  templateUrl: './list-post.page.html',
})
export class ListPostPage  {

  @ViewChild('list') list: IonList;
  posts:Post[];

  constructor(
    public modalController: ModalController,
    private _postService: PostService,
    private _ionLoaderService:IonLoaderService
  ) { 
    this._ionLoaderService.loader("Cargando ...").then(()=>{
      this._postService.getAllPosts().subscribe( data =>{
        this.posts = data;
        this._ionLoaderService.loading.dismiss();
      });  
    });
  }

  async viewPost( post:Post ){
    const { id,userId} = post;
    const modal = await this.modalController.create({
      component: ViewPostPage,
      id: 'view_post',
      componentProps: {
        'idPost': id,
        'idUser': userId
      }
    });

    this.list.closeSlidingItems();

    return await modal.present();
  }

  async editPost( data ){
    const modal = await this.modalController.create({
      component: ActionPostPage,
      id: 'edit_post',
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
