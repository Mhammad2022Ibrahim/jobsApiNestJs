import { IsString, MinLength, Matches } from 'class-validator';

export class SignupDto {
  @IsString()
  username!: string;

  @IsString()
  @MinLength(6)
  @Matches(/^(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>]).*$/, {
    message: 'Password must contain at least one capital letter and one symbol',
  })
  password!: string;
}
