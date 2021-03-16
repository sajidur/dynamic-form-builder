import { Injectable } from '@nestjs/common';
import { Client, mapping, auth } from 'cassandra-driver';

@Injectable()
export class CassandraService {
    client: Client;
    mapper: mapping.Mapper;
    private createClient() {
        this.client = new Client({
            contactPoints: ['116.68.207.82'],
            keyspace: 'form_builder',
            localDataCenter: 'datacenter1',
            authProvider: new auth.PlainTextAuthProvider('cassandra', 'C@$$andrA')
        });
    }
    
    createMapper(mappingOptions: mapping.MappingOptions) {
     if(this.client == undefined) {
         this.createClient();
     }   
     return new mapping.Mapper(this.client, mappingOptions);
    }
}