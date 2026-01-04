/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { Controller, Post, UseGuards, Request, Res, Get } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './local-auth.guard';
import type { Response } from 'express';
import { GoogleAuthGuard } from './google-auth.guard';
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req, @Res({ passthrough: true }) res: Response) {
    console.log(req.user);
    const { access_token } = await this.authService.login(req.user);
    res.cookie('access_token', access_token, {
      httpOnly: true,
    });
    return { message: 'Successfully logged in' };
  }

  @Get('google')
  @UseGuards(GoogleAuthGuard)
  // eslint-disable-next-line @typescript-eslint/require-await
  async googleAuth(@Request() req) {
    return {
      message: 'User information from google',
      user: req.user,
    };
  }

  @Get('google/callback')
  @UseGuards(GoogleAuthGuard)
  async googleAuthRedirect(@Request() req, @Res() res: Response) {
    const { accessToken } = await this.authService.googleLogin(req);
    res.cookie('access_token', accessToken, {
      httpOnly: true,
    });
    res.redirect('/user/profile');
  }

  @Get('logout')
  // eslint-disable-next-line @typescript-eslint/require-await
  async logout(@Request() req, @Res() res: Response) {
    res.clearCookie('access_token', {
      httpOnly: true,
    });
    return res.json({ message: 'Successfully logged out' });
  }
}
