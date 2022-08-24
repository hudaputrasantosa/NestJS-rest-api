import { PostModel } from './post.interface';
export declare class PostService {
    private posts;
    findAll(): Array<PostModel>;
    findOne(id: number): PostModel;
    create(post: PostModel): PostModel;
}
