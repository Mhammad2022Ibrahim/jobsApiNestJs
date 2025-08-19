import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.SECRET_KEY || 'supersecretkey', // same as in JwtModule.register
    });
  }

  // async validate(payload: any) {
  //   // This object gets attached to `req.user`
  //   return await { username: payload.username };
  // }
  async validate(payload: any) {
    return await { userId: payload.sub, username: payload.username };
  }
}
