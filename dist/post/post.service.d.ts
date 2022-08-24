import { PostModel } from './post.interface';
export declare class PostService {
    private post;
    findAll(): Array<PostModel>;
    findOne(id: number): PostModel;
}
