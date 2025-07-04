import { IsString, Length } from 'class-validator'

export class ChangePasswordDto {
  @IsString({ message: 'La contraseña debe ser una cadena de texto' })
  @Length(8, 20, {
    message: 'La contraseña debe tener entre 8 y 20 caracteres.',
  })
  newPassword: string
}
