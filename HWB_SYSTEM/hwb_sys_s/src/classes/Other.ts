// 数据库表other 属性枚举
export enum OtherFields {
  b_no = 'b_no', // 桥梁编号
  b_overall_photo = 'b_overall_photo', // 桥梁总体照片
  b_front_photo = 'b_front_photo', // 桥梁正面照片
  b_engineer = 'b_engineer', // 桥梁工程师
  cardholder = 'cardholder', // 填卡人
  card_date = 'card_date' // 填卡日期
}

export class OtherWhereSet {
  public field: OtherFields;
  public value: any;
  public compare: string;

  /**
   * 
   * @param field 字段名
   * @param value 对应的值
   * @param compare 比较符
   */
  constructor(field: OtherFields, value: any, compare: string) {
    this.field = field;
    this.value = value;
    this.compare = compare;
  }

  /**
   * @override
   */
  public toString(): string {
    if (typeof this.value === 'number') {
      return `${this.field}${this.compare}${this.value}`
    } else {
      return `${this.field}${this.compare}'${this.value}'`
    }
  }
}

// 数据库表[other]映射类

export class Other {
  [field: string]: string | number | Date | undefined;

  public b_no: string | undefined; // 桥梁编号 
  public b_overall_photo: any | undefined; // 桥梁总体照片 
  public b_front_photo: any | undefined; // 桥梁正面照片 
  public b_engineer: string | undefined; // 桥梁工程师 
  public cardholder: string | undefined; // 填卡人 
  public card_date: Date | undefined; // 填卡日期

  constructor(b_no?: string, b_overall_photo?: any, b_front_photo?: any, b_engineer?: string, cardholder?: string, card_date?: Date) {
    this.b_no = b_no;
    this.b_overall_photo = b_overall_photo;
    this.b_front_photo = b_front_photo;
    this.b_engineer = b_engineer;
    this.cardholder = cardholder;
    this.card_date = card_date;
  }

  //用于查询的字段
  static fields(): OtherFields[] {
    return [
      OtherFields.b_no,
      OtherFields.b_overall_photo,
      OtherFields.b_front_photo,
      OtherFields.b_engineer,
      OtherFields.cardholder,
      OtherFields.card_date
    ];
  }

  // 数据库表名
  static table(): string {
    return 'other';
  }

  // 主键
  static key(): string {
    return 'b_no';
  }

  // 插入SQL
  static insertSQL(basic: Other): string {
    const fields = Other.fields();
    const table = Other.table();
    const values = fields.map(field => {
      if (basic[field] === undefined) {
        return 'null';
      } else {
        return `'${basic[field]}'`;
      }
    });
    return `insert into ${table} (${fields.join(',')}) values (${values.join(',')})`;
  }

  // 更新SQL
  static updateSQL(basic: Other, fields: OtherFields[] = Other.fields()): string {
    const table = Other.table();
    const key = Other.key();
    const values = fields.map(field => {
      if (basic[field] === undefined || basic[field] === 'undefined') {
        return "undefined";
      } else {
        if (typeof basic[field] === 'string') {
          return `${field}='${basic[field]}'`;
        } else if (typeof basic[field] === 'number') {
          return `${field}=${basic[field]}`;
        }
      }
    });
    const Values = values.filter(value => { return value != "undefined" })

    return `update ${table} set ${Values.join(',')} where ${key}='${basic[key]}'`;
  }

  // 删除SQL
  static deleteSQL(b_no: string): string
  static deleteSQL(basic: Other): string

  static deleteSQL(which: string | Other): string {
    const table = Other.table();
    const key = Other.key();
    if (typeof which == 'string') {
      return `delete from ${table} where ${key}='${which}'`;
    } else {
      return `delete from ${table} where ${key}='${which[key]}'`;
    }
  }

  // 查询所有SQL
  static selectAllSQL(): string {
    const table = Other.table();
    return `select * from ${table}`;
  }


  // 查询SQL 函数参数包括：字段数组，where条件数组
  static selectSQL(fields: OtherFields[], where?: OtherWhereSet[]): string {
    const table = Other.table();
    const w = where && where.length > 0 ? ' where ' + where.join(' and ') : '';
    const f = fields && fields.length > 0 ? fields.join(',') : '*';
    return `select ${f} from ${table} ${w}`;
  }
}
