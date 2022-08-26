import { PostModel } from './post.interface';
export declare class PostService {
    private posts;
    private readonly logger;
    findAll(): Array<PostModel>;
    findOne(id: number): PostModel;
    create(post: PostModel): PostModel;
    delete(id: number): void;
    update(id: number, post: PostModel): PostModel;
}
