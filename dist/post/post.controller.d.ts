import { PostModel } from './post.interface';
import { PostService } from './post.service';
export declare class PostController {
    private readonly postsService;
    constructor(postsService: PostService);
    findAll(): Array<PostModel>;
    findOne(id: number): PostModel;
    createPost(post: PostModel): PostModel;
    deletePost(id: number): void;
    updatePost(id: number, post: PostModel): PostModel;
}
