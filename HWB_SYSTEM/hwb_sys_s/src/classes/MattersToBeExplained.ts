// 数据库表matters_to_be_explained 属性枚举
export enum MattersToBeExplainedFields {
  b_no = 'b_no', // 桥梁编号
  things = 'things' // 需要说明的事项
}

export class MattersToBeExplainedWhereSet {
  public field: MattersToBeExplainedFields;
  public value: any;
  public compare: string;

  /**
   * 
   * @param field 字段名
   * @param value 对应的值
   * @param compare 比较符
   */
  constructor(field: MattersToBeExplainedFields, value: any, compare: string) {
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

// 数据库表[matters_to_be_explained]映射类

export class MattersToBeExplained {
  [field: string]: string | number | Date | undefined;

  public b_no: string | undefined; // 桥梁编号 
  public things: string | undefined; // 需要说明的事项

  constructor(b_no?: string, things?: string) {
    this.b_no = b_no;
    this.things = things;
  }

  //用于查询的字段
  static fields(): MattersToBeExplainedFields[] {
    return [
      MattersToBeExplainedFields.b_no,
      MattersToBeExplainedFields.things
    ];
  }

  // 数据库表名
  static table(): string {
    return 'matters_to_be_explained';
  }

  // 主键
  static key(): string {
    return 'b_no';
  }

  // 插入SQL
  static insertSQL(basic: MattersToBeExplained): string {
    const fields = MattersToBeExplained.fields();
    const table = MattersToBeExplained.table();
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
  static updateSQL(basic: MattersToBeExplained, fields: MattersToBeExplainedFields[] = MattersToBeExplained.fields()): string {
    const table = MattersToBeExplained.table();
    const key = MattersToBeExplained.key();
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
  static deleteSQL(basic: MattersToBeExplained): string

  static deleteSQL(which: string | MattersToBeExplained): string {
    const table = MattersToBeExplained.table();
    const key = MattersToBeExplained.key();
    if (typeof which == 'string') {
      return `delete from ${table} where ${key}='${which}'`;
    } else {
      return `delete from ${table} where ${key}='${which[key]}'`;
    }
  }

  // 查询所有SQL
  static selectAllSQL(): string {
    const table = MattersToBeExplained.table();
    return `select * from ${table}`;
  }


  // 查询SQL 函数参数包括：字段数组，where条件数组
  static selectSQL(fields: MattersToBeExplainedFields[], where?: MattersToBeExplainedWhereSet[]): string {
    const table = MattersToBeExplained.table();
    const w = where && where.length > 0 ? ' where ' + where.join(' and ') : '';
    const f = fields && fields.length > 0 ? fields.join(',') : '*';
    return `select ${f} from ${table} ${w}`;
  }
}
