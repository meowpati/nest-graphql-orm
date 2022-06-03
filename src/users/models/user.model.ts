import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Post } from '../posts/models/post.model';

@ObjectType()
export class User {
  @Field((type) => Int, { description: 'userId' })
  userId: number;

  @Field({ description: 'something on here', nullable: true })
  name: string;

  @Field({ description: 'user posts' })
  posts: Post[];
}
