// 数据库表history_of_bridge_inspection 属性枚举
export enum HistoryOfBridgeInspectionFields {
  b_no = 'b_no', // 桥梁编号
  evaluation_time = 'evaluation_time', // 评定时间
  category = 'category', // 检测类别
  b_techical_condition = 'b_techical_condition', // 桥梁技术状况评定结果/特殊检查结论
  treatment_measures = 'treatment_measures', // 处治对策
  next_detection_time = 'next_detection_time' // 下次检测时间
}

export class HistoryOfBridgeInspectionWhereSet {
  public field: HistoryOfBridgeInspectionFields;
  public value: any;
  public compare: string;

  /**
   * 
   * @param field 字段名
   * @param value 对应的值
   * @param compare 比较符
   */
  constructor(field: HistoryOfBridgeInspectionFields, value: any, compare: string) {
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

// 数据库表[history_of_bridge_inspection]映射类

export class HistoryOfBridgeInspection {
  [field: string]: string | number | Date | undefined;

  public b_no: string | undefined; // 桥梁编号 
  public evaluation_time: Date | undefined; //评定时间 
  public category: string | undefined; //检测类别 
  public b_techical_condition: string | undefined; //桥梁技术状况评定结果/特殊检查结论 
  public treatment_measures: string | undefined; //处治对策 
  public next_detection_time: Date | undefined; //下次检测时间

  constructor(b_no?: string, evaluation_time?: Date, category?: string, b_techical_condition?: string, treatment_measures?: string, next_detection_time?: Date) {
    this.b_no = b_no;
    this.evaluation_time = evaluation_time;
    this.category = category;
    this.b_techical_condition = b_techical_condition;
    this.treatment_measures = treatment_measures;
    this.next_detection_time = next_detection_time;
  }

  //用于查询的字段
  static fields(): HistoryOfBridgeInspectionFields[] {
    return [
      HistoryOfBridgeInspectionFields.b_no,
      HistoryOfBridgeInspectionFields.evaluation_time,
      HistoryOfBridgeInspectionFields.category,
      HistoryOfBridgeInspectionFields.b_techical_condition,
      HistoryOfBridgeInspectionFields.treatment_measures,
      HistoryOfBridgeInspectionFields.next_detection_time
    ];
  }

  // 数据库表名
  static table(): string {
    return 'history_of_bridge_inspection';
  }

  // 主键
  static key(): string {
    return 'b_no';
  }

  // 插入SQL
  static insertSQL(basic: HistoryOfBridgeInspection): string {
    const fields = HistoryOfBridgeInspection.fields();
    const table = HistoryOfBridgeInspection.table();
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
  static updateSQL(basic: HistoryOfBridgeInspection, fields: HistoryOfBridgeInspectionFields[] = HistoryOfBridgeInspection.fields()): string {
    const table = HistoryOfBridgeInspection.table();
    const key = HistoryOfBridgeInspection.key();
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
  static deleteSQL(basic: HistoryOfBridgeInspection): string

  static deleteSQL(which: string | HistoryOfBridgeInspection): string {
    const table = HistoryOfBridgeInspection.table();
    const key = HistoryOfBridgeInspection.key();
    if (typeof which == 'string') {
      return `delete from ${table} where ${key}='${which}'`;
    } else {
      return `delete from ${table} where ${key}='${which[key]}'`;
    }
  }

  // 查询所有SQL
  static selectAllSQL(): string {
    const table = HistoryOfBridgeInspection.table();
    return `select * from ${table}`;
  }


  // 查询SQL 函数参数包括：字段数组，where条件数组
  static selectSQL(fields: HistoryOfBridgeInspectionFields[], where?: HistoryOfBridgeInspectionWhereSet[]): string {
    const table = HistoryOfBridgeInspection.table();
    const w = where && where.length > 0 ? ' where ' + where.join(' and ') : '';
    const f = fields && fields.length > 0 ? fields.join(',') : '*';
    return `select ${f} from ${table} ${w}`;
  }
}
