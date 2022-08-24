import { Injectable, NotFoundException, UnprocessableEntityException } from '@nestjs/common';
import { PostModel } from './post.interface';

@Injectable()
export class PostService {
   private posts : Array<PostModel> = [];
  
   public findAll(): Array<PostModel> {
      return this.posts;
    }

    public findOne(id: number): PostModel{
      const post : PostModel = this.posts.find(post => post.id === id);
      if(!post){
         throw new NotFoundException('Post not found!');
      }
      return post;
    }

    public create(post : PostModel) : PostModel{
      const titleExist : Boolean = this.posts.some(
         (item) => item.title === post.title,
      );

      if(titleExist){
         throw new UnprocessableEntityException("Post title already exist!");
      }
      
      const maxId : number = Math.max(...this.posts.map((post)=> post.id),0);
      const id : number = maxId+1;

      const blogPost : PostModel = {
         ...post,
         id,
      }

      this.posts.push(blogPost);
      return blogPost;
    }

}  
