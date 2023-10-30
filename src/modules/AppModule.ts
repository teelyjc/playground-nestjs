import { Module } from "@nestjs/common";

import { WinstonModule } from "nest-winston";
import { LoggerOptions } from "@/utils/Logger";

import { AppController } from "@/controllers/AppController";
import { AppService } from "@/services/AppService";

@Module({
  imports: [WinstonModule.forRoot(LoggerOptions)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
