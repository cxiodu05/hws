// 数据库表b_elevation 属性枚举
export enum BElevationFields {
  b_no = 'b_no', // 桥梁编号
  lines_no = 'lines_no', // 测点编号
  b_elevation = 'b_elevation', // 桥面高程（m）
}

export class BElevationWhereSet {
  public field: BElevationFields;
  public value: any;
  public compare: string;

  /**
   * 
   * @param field 字段名
   * @param value 对应的值
   * @param compare 比较符
   */
  constructor(field: BElevationFields, value: any, compare: string) {
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

// 数据库表[b_elevation]映射类

export class BElevation {
  [field: string]: string | number | Date | undefined;
  public b_no: string | undefined; // 桥梁编号
  public lines_no: string | undefined; // 测点编号
  public b_elevation: number | undefined; // 桥面高程（m）

  constructor(b_no?: string, lines_no?: string, b_elevation?: number) {
    this.b_no = b_no;
    this.lines_no = lines_no;
    this.b_elevation = b_elevation;
  }

  // 用于查询的字段
  static fields(): BElevationFields[] {
    return [BElevationFields.b_no, BElevationFields.lines_no, BElevationFields.b_elevation];
  }

  // 数据库表名
  static table(): string {
    return 'b_elevation';
  }

  // 主键
  static key(): string {
    return 'b_no';
  }

  // 插入SQL
  static insertSQL(basic: BElevation): string {
    const fields = BElevation.fields();
    const table = BElevation.table();
    const values = fields.map((field) => {
      if (basic[field] === undefined) {
        return 'null';
      } else {
        return `'${basic[field]}'`;
      }
    });
    return `insert into ${table} (${fields.join(',')}) values (${values.join(',')})`;
  }

  // 更新SQL
  static updateSQL(basic: BElevation, fields: BElevationFields[] = BElevation.fields()): string {
    const table = BElevation.table();
    const key = BElevation.key();
    const values = fields.map((field) => {
      if (basic[field] === undefined || basic[field] === 'undefined') {
        return 'undefined';
      } else {
        if (typeof basic[field] === 'string') {
          return `${field}='${basic[field]}'`;
        } else if (typeof basic[field] === 'number') {
          return `${field}=${basic[field]}`;
        }
      }
    });
    const Values = values.filter((value) => {
      return value != 'undefined';
    });
    console.log(Values);

    return `update ${table} set ${Values.join(',')} where ${key}='${basic[key]}'`;
  }

  // 删除SQL
  static deleteSQL(b_no: string): string;
  static deleteSQL(basic: BElevation): string;

  static deleteSQL(which: string | BElevation): string {
    const table = BElevation.table();
    const key = BElevation.key();
    if (typeof which == 'string') {
      return `delete from ${table} where ${key}='${which}'`;
    } else {
      return `delete from ${table} where ${key}='${which[key]}'`;
    }
  }

  // 查询所有SQL
  static selectAllSQL(): string {
    const table = BElevation.table();
    return `select * from ${table}`;
  }


  // 查询SQL 函数参数包括：字段数组，where条件数组
  static selectSQL(fields: BElevationFields[], where?: BElevationWhereSet[]): string {
    const table = BElevation.table();
    const w =
      where && where.length > 0 ? ' where ' + where.join(' and ') : '';
    const f =
      fields && fields.length > 0 ? fields.join(',') : '*';
    return `select ${f} from ${table} ${w}`;
  }
}
