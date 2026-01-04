/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from '../auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    super({ usernameField: 'Email', passwordField: 'Password' });
  }

  async validate(Email: string, Password: string): Promise<any> {
    const user = await this.authService.validateUser(Email, Password);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
