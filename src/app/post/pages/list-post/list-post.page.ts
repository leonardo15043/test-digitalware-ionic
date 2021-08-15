import { Component, ViewChild } from '@angular/core';
import { IonList, ModalController } from '@ionic/angular';

import { ActionPostPage } from '../action-post/action-post.page';
import { ViewPostPage } from '../view-post/view-post.page';

import { PostService } from '../../services/post.service';
import { IonLoaderService } from '../../../core/services/ion-loader.service';

import { Post } from '../../models/post.interface';
import { AlertModule } from 'src/app/core/modules/toast/alert.module';
import { ActivatedRoute } from '@angular/router';


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
    private _ionLoaderService:IonLoaderService,
    public alertModule:AlertModule,
    private activatedRoute:ActivatedRoute,
  ) { 

    this.activatedRoute.params.subscribe((params)=>{
      if(params.hasOwnProperty("favorites")){
          
      }else{
        this._ionLoaderService.loader("Cargando ...").then(()=>{
          this._postService.getAllPosts().subscribe( data =>{
            this.posts = data;
            
            this._ionLoaderService.loading.dismiss();
          });  
        });
      }
    });
   
  }

  async viewPost( post:Post ){
    post.view = true
    const { id,userId } = post;
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

  async actionPost( data ,type ){

    if(type != "delete"){

      const modal = await this.modalController.create({
        component: ActionPostPage,
        id: 'action_post',
        componentProps: {
          'post': data,
          'type':type
        }
      });
  
      this.list.closeSlidingItems();
      return await modal.present();

    }else{

      const { id } = data.post;
      const { index } = data;

      this._postService.deletePost(id).subscribe((data)=>{
        delete this.posts[index];
        this.alertModule.toast("Post Eliminado correctamente",3000,"dark");
      },(err)=>{
        this.alertModule.toast("Ocurrio un error , intente más tarde.",3000,"danger");
      });

    }
    
  }

  updateFavorite( post:Post){
      post.favorite = !post.favorite;
      this._postService.editPost(post);
  }

}
