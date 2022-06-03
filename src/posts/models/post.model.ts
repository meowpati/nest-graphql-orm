import { ObjectType, Field, Int } from '@nestjs/graphql';

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
