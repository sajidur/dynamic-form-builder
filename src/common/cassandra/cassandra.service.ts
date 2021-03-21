import { Injectable } from '@nestjs/common';
import {
    ExpressCassandraOptionsFactory,
    ExpressCassandraModuleOptions,
    auth
  } from '@iaminfinity/express-cassandra';

@Injectable()
export class CassandraService  implements ExpressCassandraOptionsFactory {
    createExpressCassandraOptions():
    | ExpressCassandraModuleOptions
    | Promise<ExpressCassandraModuleOptions> {
    return this.dbConfig();
  }    
    dbConfig(): any {
        return {
          clientOptions: {
            contactPoints: ['116.68.207.82'],
            keyspace: 'form_builder',
            protocolOptions: {
              port: 9042,
            },
            queryOptions: {
              consistency: 1,
            },
            authProvider: new auth.PlainTextAuthProvider('cassandra', 'C@$$andrA'),
          },
          ormOptions: {
            createKeyspace: true,
            defaultReplicationStrategy: {
              class: 'SimpleStrategy',
              replication_factor: 1,
            },
            migration: 'alter',
          },
        };
      }
}