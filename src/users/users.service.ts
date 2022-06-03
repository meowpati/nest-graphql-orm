import { Injectable } from '@nestjs/common';
import { User } from './models/user.model';

@Injectable()
export class UsersService {
  public findAll(): User[] {
    return [
      {
        userId: 1,
        userName: 'John',
      },
      {
        userId: 2,
        userName: 'Nancy',
      },
    ];
  }

  public findAll(): User[] {
    return [
      {
        userId: 1,
        firstName: 'John',
        lastName: 'Milk',
        nickName: 'John Milk',
      },
      {
        userId: 2,
        firstName: 'Mighty',
        lastName: 'Might',
        nickName: 'Mighty Might',
      },
    ];
  }

  public findOne(id) {
    if (id === 1) {
      return {
        userId: 1,
        firstName: 'John',
        lastName: 'Milk',
        nickName: 'John Milk',
      };
    } else if (id === 2) {
      return {
        userId: 2,
        firstName: 'Mighty',
        lastName: 'Might',
        nickName: 'Mighty Might',
      };
    }
  }

  public async;
}
