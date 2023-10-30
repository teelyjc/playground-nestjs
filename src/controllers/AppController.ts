import { Controller, Get, Post, Delete, Param, Body } from "@nestjs/common";
import { AppService } from "@/services/AppService";

@Controller()
export class AppController {
  private readonly appService: AppService;

  public constructor(appService: AppService) {
    this.appService = appService;
  }
}
