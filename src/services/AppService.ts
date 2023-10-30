import { Injectable } from "@nestjs/common";

@Injectable()
export class AppService {
  public getInfo() {
    return {
      success: true,
      timestamp: Date.now().toString(),
    };
  }
}
