import { Injectable } from '@nestjs/common';
import { Post } from './models/post.model';

@Injectable()
export class PostsService {
  public async findPostsByUserId(id): Promise<Post[]> {
    if (id === 1) {
      return [
        {
          postId: 1,
          author: 'John Milk',
          title: 'About 0001',
          content: 'There was a great person',
        },
        {
          postId: 2,
          author: 'John Milk',
          title: 'About 0002',
          content: 'There was a great guy',
        },
        {
          postId: 3,
          author: 'John Milk',
          title: 'About 0003',
        },
      ];
    } else if (id === 2) {
      return [
        {
          postId: 91,
          author: 'Mighty Might',
          title: 'About the mighty power',
          content: 'It does not exist',
        },
      ];
    } else {
      throw new Error('ID is not either 1 or 2');
    }
  }
}
