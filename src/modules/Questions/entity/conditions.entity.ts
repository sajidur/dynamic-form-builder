import {
    Entity,
    Column,
    GeneratedUUidColumn,
  } from '@iaminfinity/express-cassandra';
  
  @Entity({
    table_name: 'conditions',
    key: [['target_id'],'id'],
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
  export class conditions {
    @GeneratedUUidColumn()
    id: any;
  
    @Column({
      type: 'text',
    })
    name: string;

      @Column({
        type: 'int',
      })
      compare_value_to: number;

      @Column({
        type: 'uuid',
      })
      form_id: string;
      @Column({
        type: 'uuid',
      })
      question_id: string;

    @Column({
      type: 'int',
    })
    order_no: number;

    @Column({
        type: 'text',
      })
      logical_operator: string;

  @Column({
        type: 'int',
      })
      compare_value_with: number;

      @Column({
        type: 'int',
      })
      action_type: number;
    @Column({
        type: 'uuid',
      })
      target_id: string;

      @Column({
        type: 'text',
      })
      app_id: string;
    
    @Column({
        type: 'text',
      })
      company_id: string;
  }
  