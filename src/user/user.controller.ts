import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  // Endpoint para obtener todos los usuarios
  @Get()
  async getAllUsers() {
    return this.userService.getAllUsers();
  }
}