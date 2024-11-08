import { Controller, Get, Post, Body } from '@nestjs/common';
import { UsersService } from '@services/users/users.service';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Post()
    async create(@Body() data: { first_name: string; last_name: string; email: string; password: string }) {
        return this.usersService.createUser(data);
    }

    @Get()
    async getAll() {
        return this.usersService.getAllUsers();
    }
}
