import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from '@src/database/database.service';

@Injectable()
export class UsersService {
  constructor(private databaseService: DatabaseService) {}
  async create(user: Prisma.UserCreateInput) {
    return this.databaseService.user.create({
      data: user,
    });
  }

  findAll() {
    return this.databaseService.user.findMany();
  }

  findOne(id: number) {
    return this.databaseService.user.findUnique({
      where: { id },
    });
  }

  update(id: number, user: Prisma.UserUpdateInput) {
    return this.databaseService.user.update({
      where: { id },
      data: user,
    });
  }

  remove(id: number) {
    return this.databaseService.user.delete({
      where: { id },
    });
  }
}
