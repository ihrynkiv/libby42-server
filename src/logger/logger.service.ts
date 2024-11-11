import { Injectable, ConsoleLogger } from '@nestjs/common';

@Injectable()
export class LoggerService extends ConsoleLogger {
  log(message: any, context?: string) {
    if (context) {
      super.log(message, context);
    }
    super.log(message);
  }

  error(message: any, stackOrContext?: string) {
    super.error(message, stackOrContext);
  }

  warn(message: any, context?: string) {
    if (context) {
      super.warn(message, context);
    }
    super.warn(message);
  }

  verbose(message: any, context?: string) {
    if (context) {
      super.verbose(message, context);
    }
    super.verbose(message);
  }

  debug(message: any, context?: string) {
    if (context) {
      super.debug(message, context);
    }
    super.debug(message);
  }
}
