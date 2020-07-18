import { Controller, Get, UseGuards, Post, Request, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthGuard } from '@nestjs/passport';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { AuthService } from './auth/auth.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags("auth")
@Controller()
export class AppController {

  constructor(private authService: AuthService) {

  }

  @Post('auth/login')
  async login(@Body() req) {
    return this.authService.login(req);
  }

}
