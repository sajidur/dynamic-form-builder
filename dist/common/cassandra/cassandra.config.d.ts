import { ExpressCassandraModuleOptions, ExpressCassandraOptionsFactory } from '@iaminfinity/express-cassandra';
import { ConfigService } from '@nestjs/config';
export declare class CassandraConfig implements ExpressCassandraOptionsFactory {
    private readonly configService;
    private readonly contactpoints;
    private readonly keyspace;
    private readonly isAuthEnable;
    private readonly dbUser;
    private readonly dbPassword;
    constructor(configService: ConfigService);
    createExpressCassandraOptions(): ExpressCassandraModuleOptions | Promise<ExpressCassandraModuleOptions>;
}
