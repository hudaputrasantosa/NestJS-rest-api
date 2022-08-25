import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { PostModel } from './post.interface';
import { PostService } from './post.service';

@Controller('post')
export class PostController {
   constructor(private readonly postsService: PostService) {}
   @Get()
   public findAll(): Array<PostModel>{
      return this.postsService.findAll();
   }

   @Get(':id')
   public findOne(@Param('id', ParseIntPipe) id: number): PostModel{
      return this.postsService.findOne(id);
   }

   @Post('/create')
   public createPost(@Body() post: PostModel): PostModel{
      return this.postsService.create(post);
   }

   @Delete(':id')
   public deletePost(@Param('id', ParseIntPipe) id : number) : void{
      return this.postsService.delete(id);
   }
}
