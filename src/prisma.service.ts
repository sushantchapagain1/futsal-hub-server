import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient {
  // The onModuleInit is optional — if you leave it out, Prisma will connect lazily on its first call to the database.
}
