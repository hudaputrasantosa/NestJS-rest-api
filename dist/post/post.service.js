"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var PostService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostService = void 0;
const common_1 = require("@nestjs/common");
let PostService = PostService_1 = class PostService {
    constructor() {
        this.posts = [];
        this.logger = new common_1.Logger(PostService_1.name);
    }
    findAll() {
        this.logger.log('return all post');
        return this.posts;
    }
    findOne(id) {
        const post = this.posts.find(post => post.id === id);
        if (!post) {
            throw new common_1.NotFoundException('Post not found!');
        }
        return post;
    }
    create(post) {
        const titleExist = this.posts.some((item) => item.title === post.title);
        if (titleExist) {
            throw new common_1.UnprocessableEntityException("Post title already exist!");
        }
        const maxId = Math.max(...this.posts.map((post) => post.id), 0);
        const id = maxId + 1;
        const blogPost = Object.assign(Object.assign({}, post), { id });
        this.posts.push(blogPost);
        return blogPost;
    }
    delete(id) {
        const index = this.posts.findIndex(post => post.id === id);
        if (index === -1) {
            throw new common_1.NotFoundException('this post not found!');
        }
        this.posts.splice(index, 1);
    }
    update(id, post) {
        this.logger.log('updating post with id : ${id}');
        const index = this.posts.findIndex(post => post.id === id);
        if (index == -1) {
            throw new common_1.NotFoundException('this post not found!');
        }
        const titleExist = this.posts.some((item) => item.title == post.title && item.id !== id);
        if (titleExist) {
            throw new common_1.UnprocessableEntityException('Post title already exist!');
        }
        const blogPost = Object.assign(Object.assign({}, post), { id });
        this.posts[index] = blogPost;
        return blogPost;
    }
};
PostService = PostService_1 = __decorate([
    (0, common_1.Injectable)()
], PostService);
exports.PostService = PostService;
//# sourceMappingURL=post.service.js.map