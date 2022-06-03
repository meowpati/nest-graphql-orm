import { Resolver, Query, Args, ResolveField } from '@nestjs/graphql';
import { User } from './models/user.model';
import { UsersService } from './users.service';

@Resolver((of) => User)
export class UsersResolver {
  constructor(
    private readonly usersService: UsersService,
    private readonly postsService: PostsService,
  ) {}

  @Query((returns) => User, { name: 'user' })
  public async getUser() {
    const { id, name } = args;
  }

  @ResolveField('posts', (returns) => [Post])
  async getPosts() {
    return await this.postsService.findAll();
  }
}
