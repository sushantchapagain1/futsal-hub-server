import { Controller, Get, Post } from '@nestjs/common';

@Controller('futsals')
export class FutsalsController {
  @Get()
  findAll() {
    return 'futsals';
  }

  @Post()
  create() {
    return 'create futsal';
  }
}
