import { ExpressCassandraOptionsFactory, ExpressCassandraModuleOptions } from '@iaminfinity/express-cassandra';
export declare class CassandraService implements ExpressCassandraOptionsFactory {
    createExpressCassandraOptions(): ExpressCassandraModuleOptions | Promise<ExpressCassandraModuleOptions>;
    dbConfig(): any;
}
