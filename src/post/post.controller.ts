import { Controller, Get } from '@nestjs/common';
import { PostModel } from './post.interface';
import { PostService } from './post.service';

@Controller('post')
export class PostController {
   constructor(private readonly postsService: PostService) {}
   @Get()
   public findAll(): Array<PostModel>{
      return this.postsService.findAll();
   }
}
