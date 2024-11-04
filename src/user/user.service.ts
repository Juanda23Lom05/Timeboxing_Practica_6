import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { User, Prisma } from '@prisma/client';

@Injectable()
export class UserService {
  getAllUsers() {
    throw new Error('Method not implemented.');
  }
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<User[]> {
    try {
      return await this.prisma.user.findMany();
    } catch (error) {
      console.error('Error in UserService.findAll:', error);
      throw error;
    }
  }
}