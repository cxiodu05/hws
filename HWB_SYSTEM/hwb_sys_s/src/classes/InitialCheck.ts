// 数据库表initial_check 属性枚举
export enum InitialCheckFields {
  b_no = 'b_no', // 桥梁编号
  up_down_struc_from = 'up_down_struc_from', // 上、下部结构形式
  b_conne_span_combi = 'b_conne_span_combi', // 桥梁分联及跨径组合
  b_constr_method = 'b_constr_method', // 桥梁施工方法
  rework_mainte_reinforce = 'rework_mainte_reinforce', // 新建桥梁在施工过程中的返工、维修或加固情况
  after_reinfor_rescons = 'after_reinfor_rescons', // 加固改造后的桥梁，加固改造情况
  archives_incom_b = 'archives_incom_b', // 档案资料不齐全的桥梁，维修加固情况
  initial_check_time = 'initial_check_time', // 初始检查（年 月 日）
  initial_check_climate = 'initial_check_climate', // 初始检查时的气候及环境温度
  Attribute_116 = 'Attribute_116', // 静载试验结果
  dynamic_load_test_results = 'dynamic_load_test_results', // 动载试验结果
  record_people = 'record_people', // 记录人
  b_initial_check_mech = 'b_initial_check_mech' // 桥梁初始检查机构
}

export class InitialCheckWhereSet {
  public field: InitialCheckFields;
  public value: any;
  public compare: string;

  /**
   * 
   * @param field 字段名
   * @param value 对应的值
   * @param compare 比较符
   */
  constructor(field: InitialCheckFields, value: any, compare: string) {
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

// 数据库表[initial_check]映射类

export class InitialCheck {
  [field: string]: string | number | Date | undefined;
  public b_no: string | undefined; // 桥梁编号
  public up_down_struc_from: string | undefined; // 上、下部结构形式
  public b_conne_span_combi: string | undefined; // 桥梁分联及跨径组合
  public b_constr_method: string | undefined; // 桥梁施工方法
  public rework_mainte_reinforce: string | undefined; // 新建桥梁在施工过程中的返工、维修或加固情况
  public after_reinfor_rescons: string | undefined; // 加固改造后的桥梁，加固改造情况
  public archives_incom_b: string | undefined; // 档案资料不齐全的桥梁，维修加固情况
  public initial_check_time: Date | undefined; // 初始检查（年 月 日）
  public initial_check_climate: string | undefined; // 初始检查时的气候及环境温度
  public Attribute_116: string | undefined; // 静载试验结果
  public dynamic_load_test_results: string | undefined; // 动载试验结果
  public record_people: string | undefined; // 记录人
  public b_initial_check_mech: string | undefined; // 桥梁初始检查机构


  constructor(b_no?: string, up_down_struc_from?: string, b_conne_span_combi?: string, b_constr_method?: string, rework_mainte_reinforce?: string, after_reinfor_rescons?: string, archives_incom_b?: string, initial_check_time?: Date, initial_check_climate?: string, Attribute_116?: string, dynamic_load_test_results?: string, record_people?: string, b_initial_check_mech?: string) {
    this.b_no = b_no;
    this.up_down_struc_from = up_down_struc_from;
    this.b_conne_span_combi = b_conne_span_combi;
    this.b_constr_method = b_constr_method;
    this.rework_mainte_reinforce = rework_mainte_reinforce;
    this.after_reinfor_rescons = after_reinfor_rescons;
    this.archives_incom_b = archives_incom_b;
    this.initial_check_time = initial_check_time;
    this.initial_check_climate = initial_check_climate;
    this.Attribute_116 = Attribute_116;
    this.dynamic_load_test_results = dynamic_load_test_results;
    this.record_people = record_people;
    this.b_initial_check_mech = b_initial_check_mech;
  }

  // 用于查询的字段
  static fields(): InitialCheckFields[] {
    return [
      InitialCheckFields.b_no,
      InitialCheckFields.up_down_struc_from,
      InitialCheckFields.b_conne_span_combi,
      InitialCheckFields.b_constr_method,
      InitialCheckFields.rework_mainte_reinforce,
      InitialCheckFields.after_reinfor_rescons,
      InitialCheckFields.archives_incom_b,
      InitialCheckFields.initial_check_time,
      InitialCheckFields.initial_check_climate,
      InitialCheckFields.Attribute_116,
      InitialCheckFields.dynamic_load_test_results,
      InitialCheckFields.record_people,
      InitialCheckFields.b_initial_check_mech
    ];
  }

  // 数据库表名
  static table(): string {
    return 'initial_check';
  }

  // 主键
  static key(): string {
    return 'b_no';
  }

  // 插入SQL
  static insertSQL(basic: InitialCheck): string {
    const fields = InitialCheck.fields();
    const table = InitialCheck.table();
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
  static updateSQL(basic: InitialCheck, fields: InitialCheckFields[] = InitialCheck.fields()): string {
    const table = InitialCheck.table();
    const key = InitialCheck.key();
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
  static deleteSQL(basic: InitialCheck): string

  static deleteSQL(which: string | InitialCheck): string {
    const table = InitialCheck.table();
    const key = InitialCheck.key();
    if (typeof which == 'string') {
      return `delete from ${table} where ${key}='${which}'`;
    } else {
      return `delete from ${table} where ${key}='${which[key]}'`;
    }
  }

  // 查询所有SQL
  static selectAllSQL(): string {
    const table = InitialCheck.table();
    return `select * from ${table}`;
  }


  // 查询SQL 函数参数包括：字段数组，where条件数组
  static selectSQL(fields: InitialCheckFields[], where?: InitialCheckWhereSet[]): string {
    const table = InitialCheck.table();
    const w = where && where.length > 0 ? ' where ' + where.join(' and ') : '';
    const f = fields && fields.length > 0 ? fields.join(',') : '*';
    return `select ${f} from ${table} ${w}`;
  }
}
