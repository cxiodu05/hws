// 数据库表regular_check 属性枚举
export enum RegularCheckFields {
  b_no = 'b_no', // 桥梁编号
  main_spain_struc = 'main_spain_struc', // 主跨结构
  last_repair_time = 'last_repair_time', // 上次修复养护时间
  last_inspection_time = 'last_inspection_time', // 上次检查时间
  the_inspection_time = 'the_inspection_time', // 本次检查时间
  the_inspection_climate = 'the_inspection_climate', // 本次检查时气候及环境温度
  parts = 'parts', // 部位
  parts_name = 'parts_name', // 部件名称
  score = 'score', // 评分
  defect_types = 'defect_types', // 缺损类型
  defect_location = 'defect_location', // 缺损位置
  defect_range = 'defect_range', // 缺损范围
  defect_photo = 'defect_photo', // 缺损照片
  defect_most_unfavor_comp = 'defect_most_unfavor_comp', // 缺损最不利构件
  maintenance_recommendations = 'maintenance_recommendations', // 养护建议（维修范围、 方式、时间）
  whether_special_inspection = 'whether_special_inspection', // 是否需特殊检查类型位置范围
  full_b_cleaning = 'full_b_cleaning', // 全桥清洁状况
  prevention_repair_status = 'prevention_repair_status', // 预防及修复养护状况
  record_person = 'record_person', // 记录人
  charge_person = 'charge_person', // 负责人
  next_check_time = 'next_check_time' // 下次检查时间
}

export class RegularCheckWhereSet {
  public field: RegularCheckFields;
  public value: any;
  public compare: string;

  /**
   * 
   * @param field 字段名
   * @param value 对应的值
   * @param compare 比较符
   */
  constructor(field: RegularCheckFields, value: any, compare: string) {
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

// 数据库表[regular_check]映射类

export class RegularCheck {
  [field: string]: string | number | Date | undefined;

  public b_no: string | undefined; // 桥梁编号
  public main_spain_struc: string | undefined; // 主跨结构
  public last_repair_time: Date | undefined; // 上次修复养护时间
  public last_inspection_time: Date | undefined; // 上次检查时间
  public the_inspection_time: Date | undefined; // 本次检查时间
  public the_inspection_climate: Date | undefined; //本次检查时气候及环境温度 
  public parts: string | undefined; // 部位 
  public parts_name: string | undefined; // 部件名称 
  public score: string | undefined; //评分 
  public defect_types: string | undefined; //缺损类型 
  public defect_location: string | undefined; //缺损位置 
  public defect_range: string | undefined; //缺损范围 
  public defect_photo: any | undefined; //缺损照片 
  public defect_most_unfavor_comp: string | undefined; //缺损最不利构件 
  public maintenance_recommendations: string | undefined; //养护建议（维修范围、 方式、时间） 
  public whether_special_inspection: string | undefined; //是否需特殊检查类型位置范围 
  public full_b_cleaning: string | undefined; //全桥清洁状况 
  public prevention_repair_status: string | undefined; //预防及修复养护状况 
  public record_person: string | undefined; //记录人 
  public charge_person: string | undefined; //负责人 
  public next_check_time: Date | undefined; //下次检查时间

  constructor(b_no?: string, main_spain_struc?: string, last_repair_time?: Date, last_inspection_time?: Date, the_inspection_time?: Date, the_inspection_climate?: Date, parts?: string, parts_name?: string, score?: string, defect_types?: string, defect_location?: string, defect_range?: string, defect_photo?: any, defect_most_unfavor_comp?: string, maintenance_recommendations?: string, whether_special_inspection?: string, full_b_cleaning?: string, prevention_repair_status?: string, record_person?: string, charge_person?: string, next_check_time?: Date) {
    this.b_no = b_no;
    this.main_spain_struc = main_spain_struc;
    this.last_repair_time = last_repair_time;
    this.last_inspection_time = last_inspection_time;
    this.the_inspection_time = the_inspection_time;
    this.the_inspection_climate = the_inspection_climate;
    this.parts = parts;
    this.parts_name = parts_name;
    this.score = score;
    this.defect_types = defect_types;
    this.defect_location = defect_location;
    this.defect_range = defect_range;
    this.defect_photo = defect_photo;
    this.defect_most_unfavor_comp = defect_most_unfavor_comp;
    this.maintenance_recommendations = maintenance_recommendations;
    this.whether_special_inspection = whether_special_inspection;
    this.full_b_cleaning = full_b_cleaning;
    this.prevention_repair_status = prevention_repair_status;
    this.record_person = record_person;
    this.charge_person = charge_person;
    this.next_check_time = next_check_time;
  }

  // 用于查询的字段
  static fields(): RegularCheckFields[] {
    return [
      RegularCheckFields.b_no,
      RegularCheckFields.main_spain_struc,
      RegularCheckFields.last_repair_time,
      RegularCheckFields.last_inspection_time,
      RegularCheckFields.the_inspection_time,
      RegularCheckFields.the_inspection_climate,
      RegularCheckFields.parts,
      RegularCheckFields.parts_name,
      RegularCheckFields.score,
      RegularCheckFields.defect_types,
      RegularCheckFields.defect_location,
      RegularCheckFields.defect_range,
      RegularCheckFields.defect_photo,
      RegularCheckFields.defect_most_unfavor_comp,
      RegularCheckFields.maintenance_recommendations,
      RegularCheckFields.whether_special_inspection,
      RegularCheckFields.full_b_cleaning,
      RegularCheckFields.prevention_repair_status,
      RegularCheckFields.record_person,
      RegularCheckFields.charge_person,
      RegularCheckFields.next_check_time
    ];
  }

  // 数据库表名
  static table(): string {
    return 'regular_check';
  }

  // 主键
  static key(): string {
    return 'b_no';
  }

  // 插入SQL
  static insertSQL(basic: RegularCheck): string {
    const fields = RegularCheck.fields();
    const table = RegularCheck.table();
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
  static updateSQL(basic: RegularCheck, fields: RegularCheckFields[] = RegularCheck.fields()): string {
    const table = RegularCheck.table();
    const key = RegularCheck.key();
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
  static deleteSQL(basic: RegularCheck): string

  static deleteSQL(which: string | RegularCheck): string {
    const table = RegularCheck.table();
    const key = RegularCheck.key();
    if (typeof which == 'string') {
      return `delete from ${table} where ${key}='${which}'`;
    } else {
      return `delete from ${table} where ${key}='${which[key]}'`;
    }
  }

  // 查询所有SQL
  static selectAllSQL(): string {
    const table = RegularCheck.table();
    return `select * from ${table}`;
  }


  // 查询SQL 函数参数包括：字段数组，where条件数组
  static selectSQL(fields: RegularCheckFields[], where?: RegularCheckWhereSet[]): string {
    const table = RegularCheck.table();
    const w = where && where.length > 0 ? ' where ' + where.join(' and ') : '';
    const f = fields && fields.length > 0 ? fields.join(',') : '*';
    return `select ${f} from ${table} ${w}`;
  }
}
