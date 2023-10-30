import { NestFactory } from "@nestjs/core";

import { WinstonModule, WINSTON_MODULE_NEST_PROVIDER } from "nest-winston";
import { LoggerOptions } from "@/utils/Logger";

import {
  NestFastifyApplication,
  FastifyAdapter,
} from "@nestjs/platform-fastify";

import { AppModule } from "@/modules/AppModule";

const bootstrap = async () => {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
    {
      logger: WinstonModule.createLogger(LoggerOptions),
    }
  );

  const logger = app.get(WINSTON_MODULE_NEST_PROVIDER);
  app.useLogger(logger);

  app.enableCors({
    origin: true,
    credentials: true,
  });

  app.listen(4000, "0.0.0.0", () => {
    logger.log(`API Started on port 4000, href: http://localhost:4000`);
  });
};

bootstrap();
