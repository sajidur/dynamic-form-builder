import {
    Entity,
    Column,
    GeneratedUUidColumn,
  } from '@iaminfinity/express-cassandra';
  
  @Entity({
    table_name: 'questions',
    key: [['form_id'],'id'],
    indexes:['parent_questions_id','code'],
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
  export class questions {
    @GeneratedUUidColumn()
    id: any;
  
    @Column({
      type: 'text',
    })
    code: string;

    @Column({
        type: 'text',
      })
      descriptions: string;

      @Column({
        type: 'int',
      })
      section_id: number;

      @Column({
        type: 'int',
      })
      controlTypeId: number;

      @Column({
        type: 'text',
      })
      controlTypeName: string;

    @Column({
      type: 'int',
    })
    parent_questions_id: number;

    @Column({
        type: 'int',
      })
      questions_level: number;

  @Column({
        type: 'boolean',
      })
      is_mandatory: boolean;

      @Column({
        type: 'text',
      })
      inputvalidation: string;
    @Column({
        type: 'boolean',
      })
      is_condition: boolean;

      @Column({
        type: 'boolean',
      })
      is_active: boolean;
      @Column({
        type: 'int',
      })
      order_no: number;
      @Column({
        type: 'text',
      })
      set_formula: string;

      @Column({
        type: 'boolean',
      })
      is_enable_score: boolean;
      @Column({
        type: 'boolean',
      })
      each_item_calculation: boolean;

      @Column({
        type: 'int',
      })
      weight_value: number;

      @Column({
        type: 'uuid',
      })
      app_id: any;
    @Column({
        type: 'uuid',
      })
      form_id: any;
    
    @Column({
        type: 'text',
      })
      company_id: any;
  }
  