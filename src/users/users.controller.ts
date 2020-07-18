import { Controller, Post, Body, Get, Put, Param, UseGuards } from '@nestjs/common';
import { UsersService} from './users.service';
import { ApiTags } from '@nestjs/swagger';
import { UserModel } from 'src/models/user.model';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@ApiTags('users')
@Controller('users')
export class UsersController {

    constructor(private userService: UsersService) {

    }

    @Get()
    getUsers() {
        return this.userService.findAll();
    }

    @Post()
    createUser(@Body() user: UserModel) {
        this.userService.createUser(user);
    }

    @Put()
    updateUser(@Body() user: UserModel) {

    }

    @Get(':id') 
    getUserById(@Param() params) {
        return this.userService.findByUsername(params.id);
    }
}
