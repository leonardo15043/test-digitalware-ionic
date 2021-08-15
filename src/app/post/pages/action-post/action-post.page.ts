import { Component, Input, OnInit } from '@angular/core';

import { NgForm } from '@angular/forms';
import { ModalController } from '@ionic/angular';


import { Post } from '../../models/post.interface';
import { PostService } from '../../services/post.service';
import { AlertModule } from '../../../core/modules/toast/alert.module';

@Component({
  selector: 'app-action-post',
  templateUrl: './action-post.page.html',
})
export class ActionPostPage implements OnInit {

  @Input() post:Post;
  @Input() type:String;

  constructor(
    public modalController: ModalController,
    public alertModule:AlertModule,
    private _postService: PostService,
  ) { }

  ngOnInit() {
  }

   save( form:NgForm){

    if(this.type == 'edit'){
      this._postService.editPost(form.value).subscribe((data)=>{
        this.modalController.dismiss();
        this.alertModule.toast("Datos editados correctamente.",3000,"dark");
      },(err)=>{
        this.alertModule.toast("Ocurrio un error , intente más tarde.",3000,"danger");
      });
    }else if(this.type == 'add'){
      this._postService.addPost(form.value).subscribe((data)=>{
        this.post.push(data);
        this.modalController.dismiss();
        this.alertModule.toast("Datos agregados correctamente.",3000,"dark");
      }, (err)=>{
        this.alertModule.toast("Ocurrio un error , intente más tarde.",3000,"danger");
      });
    }

  }

}
