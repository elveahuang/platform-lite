import { SequenceService } from '@/commons/service/sequence.service';
import { BaseController } from '@/commons/web/base.controller';
import { RequestContext } from '@/commons/web/request-context';
import { AppService } from '@/modules/main/app.service';
import { ConfigService } from '@nestjs/config';
export declare class AppController extends BaseController {
    private readonly configService;
    private readonly sequenceService;
    private readonly appService;
    constructor(configService: ConfigService, sequenceService: SequenceService, appService: AppService);
    index(context: RequestContext): string | bigint | unknown;
}
