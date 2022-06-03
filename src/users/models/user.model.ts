import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Post } from '../../posts/models/post.model';

@ObjectType()
export class User {
  @Field((type) => Int, { description: 'userId' })
  userId: number;

  @Field({ description: 'User First Name' })
  firstName: string;

  @Field({ description: 'User Last Name' })
  lastName: string;

  @Field({ description: 'User Nickname', nullable: true })
  nickName: string;

  @Field((type) => [Post], { description: 'User posts' })
  posts: Post[];
}

@ObjectType()
export class User {
  @Field((type) => Int, { description: 'userId' })
  userId: number;

  @Field({ description: 'User Name' })
  userName: string;

  @Field((type) => [Post], { description: 'User posts' })
  posts: Post[];
}

@ObjectType()
export class Post {
  @Field((type) => Int, { description: 'Post ID' })
  postId: number;

  @Field({ description: 'Author of the Post' })
  author: string;

  @Field({ description: 'Post Title' })
  title: string;

  @Field({ description: 'Post Content', nullable: true })
  content?: string;
}
