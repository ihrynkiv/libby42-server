import { Injectable } from '@nestjs/common';
import { PrismaService } from '@prisma/prisma.service';

@Injectable()
export class UsersService {
    constructor(private prisma: PrismaService) {}

    async createUser(data: { first_name: string; last_name: string; email: string; password: string }) {
        return this.prisma.user.create({
            data: {
                first_name: data.first_name,
                last_name: data.last_name,
                email: data.email,
                password: data.password,
                role: 'user',
            },
        });
    }

    async getAllUsers() {
        return this.prisma.user.findMany();
    }
}
