import { IUser } from '@libs/interfaces';
import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

@Injectable()
export class UsersService {
  getUsers(): Promise<IUser[]> {
    return prisma.user.findMany();
  }
}
