import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsEmail, Length } from "class-validator";

export class CreateUserDto {
  @ApiProperty({ example: "email@email.com", description: "Почтовый адрес" })
  @IsString({ message: "Должно быть строкой" })
  @IsEmail({}, { message: "Некорректный email" })
  readonly email: string;
  @ApiProperty({ example: "qwerty", description: "Пароль" })
  @IsString({ message: "Должно быть строкой" })
  @Length(4, 16, { message: "Неверная длина пароля" })
  readonly password: string;
}
