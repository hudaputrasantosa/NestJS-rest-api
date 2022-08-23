import { Injectable } from '@nestjs/common';
import { PostModel } from './post.interface';

@Injectable()
export class PostService {
   private post : Array<PostModel> = [];
  
   public findAll(): Array<PostModel> {
      return this.post;
    }

}  
