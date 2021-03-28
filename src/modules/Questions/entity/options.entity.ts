import {
    Entity,
    Column,
    GeneratedUUidColumn,
  } from '@iaminfinity/express-cassandra';
  
  @Entity({
    table_name: 'options',
    key: [['question_id'],'id'],
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
  export class options {
    @GeneratedUUidColumn()
    id: any;
  
    @Column({
      type: 'text',
    })
    name: string;

      @Column({
        type: 'text',
      })
      value: string;

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
        type: 'int',
      })
      score_value: number;

  @Column({
        type: 'boolean',
      })
      is_mandatory: boolean;

      @Column({
        type: 'boolean',
      })
      is_condition: boolean;
    @Column({
        type: 'boolean',
      })
      is_pre_slected: boolean;

      @Column({
        type: 'text',
      })
      app_id: string;
    
    @Column({
        type: 'text',
      })
      company_id: string;
  }
  