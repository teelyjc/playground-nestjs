import { Controller, Get } from "@nestjs/common";
import { AppService } from "@/services/AppService";

import os from "os";

@Controller()
export class AppController {
  private readonly appService: AppService;

  public constructor(appService: AppService) {
    this.appService = appService;
  }

  @Get("healthcheck")
  public async healthCheck() {
    return {
      success: true,
      hostname: os.hostname()
    }
  }
}
