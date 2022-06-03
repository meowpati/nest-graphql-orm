import {
  Resolver,
  Query,
  Args,
  ResolveField,
  Parent,
  Int,
} from '@nestjs/graphql';
import { User } from './models/user.model';
import { Post } from '../posts/models/post.model';
import { UsersService } from './users.service';
import { PostsService } from '../posts/posts.service';

@Resolver((of) => User)
export class UsersResolver {
  constructor(
    private readonly usersService: UsersService,
    private readonly postsService: PostsService,
  ) {}

  @Query((returns) => [User], { name: 'users' })
  public async getUsers() {
    return this.usersService.findAll();
  }

  @Query((returns) => User, { name: 'user' })
  public async getUser(@Args('id', { type: () => Int }) id: number) {
    return this.usersService.findOne(id);
  }

  @ResolveField('posts', (returns) => [Post])
  async getPosts(@Parent() user: User) {
    const { userId } = user;
    return await this.postsService.findPostsByUserId(userId);
  }
}
