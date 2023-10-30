import { LoggerOptions as Options, format, transports } from "winston";

export const LoggerOptions: Options = {
  level: process.env.NODE_ENV === "production" ? "info" : "debug",
  format: format.combine(
    format.colorize(),
    format.json(),
    format.errors({ stack: true }),
    format.printf((info) => {
      const timestamp = new Date().toUTCString();
      const context = info.context || "Logger";

      return `${timestamp} | ${context} | ${info.level} | ${info.message}`;
    })
  ),
  transports: [new transports.Console()],
};
