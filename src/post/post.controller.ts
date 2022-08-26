import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { ApiCreatedResponse, ApiNotFoundResponse, ApiOkResponse, ApiTags, ApiUnprocessableEntityResponse } from '@nestjs/swagger';
import { PostModel } from './post.interface';
import { PostService } from './post.service';

@Controller('posts')
@ApiTags('posts')
export class PostController {
   constructor(private readonly postsService: PostService) {}
   
   @Get()
   @ApiOkResponse({ description: 'Post Retrieve Succesfully'})
   public findAll(): Array<PostModel>{
      return this.postsService.findAll();
   }

   @Get(':id')
   @ApiOkResponse({description:'Post Retrieve Succesfully'})
   @ApiNotFoundResponse({description:'Post not found!'})
   public findOne(@Param('id', ParseIntPipe) id: number): PostModel{
      return this.postsService.findOne(id);
   }

   @Post()
   @ApiCreatedResponse({description:'post successfully created'})
   @ApiUnprocessableEntityResponse({description:'Post title already exist!'})
   public createPost(@Body() post: PostModel): PostModel{
      return this.postsService.create(post);
   }

   @Delete(':id')
   @ApiOkResponse({description:'Post delete Succesfully'})
   @ApiNotFoundResponse({description:'this post not found!'})
   public deletePost(@Param('id', ParseIntPipe) id : number) : void{
      return this.postsService.delete(id);
   }

   @Put(':id')
   @ApiOkResponse({description:'Post update Succesfully'})
   @ApiNotFoundResponse({description:'this post not found!'})
   @ApiUnprocessableEntityResponse({description:'Post title already exist!'})
   public updatePost(@Param('id', ParseIntPipe) id : number, @Body() post : PostModel) : PostModel{
      return this.postsService.update(id, post);
   }
}
