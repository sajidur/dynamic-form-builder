import {
    Entity,
    Column,
    GeneratedUUidColumn,
  } from '@iaminfinity/express-cassandra';
  
  @Entity({
    table_name: 'forms',
    key: [['app_id'],'id'],
    indexes:['is_active','is_published'],
    options: {
      timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at',
      },
      versions: {
        key: '__v1',
      },
    },
  })
  export class forms {
    @GeneratedUUidColumn()
    id: any;
  
    @Column({
      type: 'text',
    })
    form_name: string;

      @Column({
        type: 'text',
      })
      descriptions: string;

    @Column({
      type: 'int',
    })
    questions_per_page: number;

    @Column({
        type: 'text',
      })
    header_image: string;

  @Column({
        type: 'boolean',
      })
    is_active: boolean;

    @Column({
        type: 'boolean',
      })
    is_published: boolean;
    
    @Column({
        type: 'uuid',
      })
      app_id: any;
    
    @Column({
        type: 'uuid',
      })
      company_id: any;
  }
  