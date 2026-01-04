/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(Email: string, pass: string): Promise<any> {
    const user = await this.userService.findByEmail(Email);
    if (user && (await bcrypt.compare(pass, user.Password))) {
      const { Password, ...result } = user.toObject();
      return result;
    }
    return null;
  }

  // eslint-disable-next-line @typescript-eslint/require-await
  async login(user: any) {
    const payload = { email: user.Email || user.email, sub: user._id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
