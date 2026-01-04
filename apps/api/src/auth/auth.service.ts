/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';
import * as bcrypt from 'bcrypt';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from '../../schemas/user.schema';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
    @InjectModel(User.name) private userModel: Model<UserDocument>,
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

  async googleLogin(req) {
    if (!req.user) {
      throw new Error('Google login failed: No user information received.');
    }
    const { googleId, email, name, picture } = req.user;
    let user = await this.userModel.findOne({ Email: email });
    console.log('Searching for user with email:', user);

    if (!user) {
      user = new this.userModel({
        Email: email,
        Name: name,
        Profile_Img: picture,
        Google_id: googleId,
      });
      await user.save();
    }

    const payload = { Email: user.Email };

    return {
      accessToken: this.jwtService.sign(payload),
    };
  }
}
