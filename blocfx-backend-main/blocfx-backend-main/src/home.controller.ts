import { Controller, Get } from '@nestjs/common';

@Controller('/')
export class HomeController {
  @Get()
  get() {
    return 'ok';
  }
}
