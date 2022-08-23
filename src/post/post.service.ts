import { Injectable, NotFoundException } from '@nestjs/common';
import { PostModel } from './post.interface';

@Injectable()
export class PostService {
   private post : Array<PostModel> = [];
  
   public findAll(): Array<PostModel> {
      return this.post;
    }

    public findOne(id: number): PostModel{
      const post : PostModel = this.post.find(post => post.id === id);
      if(!post){
         throw new NotFoundException('Post not found!');
      }
      return post;
    }

}  
