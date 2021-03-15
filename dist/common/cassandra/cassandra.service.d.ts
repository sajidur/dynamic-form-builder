import { Client, mapping } from 'cassandra-driver';
export declare class CassandraService {
    client: Client;
    mapper: mapping.Mapper;
    private createClient;
    createMapper(mappingOptions: mapping.MappingOptions): mapping.Mapper;
}
