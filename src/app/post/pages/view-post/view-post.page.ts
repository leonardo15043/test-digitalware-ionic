import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { forkJoin } from 'rxjs';

import { PostService } from '../../services/post.service';
import { IonLoaderService } from '../../../core/services/ion-loader.service';
import { UserService } from '../../../user/services/user.service';
import { CommentService } from '../../../comment/services/comment.service';

import { User } from '../../../user/models/user.interface';
import { Post } from '../../models/post.interface';
import { Comment } from '../../../comment/models/comment.interface';


@Component({
  selector: 'app-view-post',
  templateUrl: './view-post.page.html',
})
export class ViewPostPage implements OnInit {

  @Input() idPost: number;
  @Input() idUser: number;

  post:Post;
  user:User;
  comments:Comment;

  loadData = false;

  constructor(
    public modalController: ModalController,
    private _postService: PostService,
    private _userService: UserService,
    private _commentService: CommentService,
    private _ionLoaderService:IonLoaderService
  ) { 
    this._ionLoaderService.loader("Cargando ...");
   }

   ngOnInit() {

      forkJoin(
        this._postService.getPost(this.idPost),
        this._userService.getUser(this.idUser),
        this._commentService.getAllComments(this.idPost)
        ).subscribe((res)=>{

          this.post = res[0];
          this.user = res[1];
          this.comments = res[2];

          this.loadData = true;
          this._ionLoaderService.loading.dismiss();

        })

   }

}
