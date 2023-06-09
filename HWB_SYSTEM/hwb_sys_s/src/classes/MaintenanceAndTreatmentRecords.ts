// 数据库表maintenance_and_treatment_records 属性枚举
export enum MaintenanceAndTreatmentRecordsFields {
  b_no = 'b_no', // 桥梁编号
  time = 'time', // 时间（段）
  treatment_category = 'treatment_category', // 处治类别（维修、加固、改造）
  treatment_reson = 'treatment_reson', // 处治原因
  treatment_scope = 'treatment_scope', // 处治范围
  engineering_cost = 'engineering_cost', // 工程费用(万元)
  fund_source = 'fund_source', // 经费来源
  treatment_quality_evaluation = 'treatment_quality_evaluation', // 处治质量评定
  build_unit = 'build_unit', // 建设单位
  design_unit = 'design_unit', // 设计单位
  construction_unit = 'construction_unit', // 施工单位
  supervision_unit = 'supervision_unit' // 监理单位
}

export class MaintenanceAndTreatmentRecordsWhereSet {
  public field: MaintenanceAndTreatmentRecordsFields;
  public value: any;
  public compare: string;

  /**
   * 
   * @param field 字段名
   * @param value 对应的值
   * @param compare 比较符
   */
  constructor(field: MaintenanceAndTreatmentRecordsFields, value: any, compare: string) {
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

// 数据库表[maintenance_and_treatment_records]映射类

export class MaintenanceAndTreatmentRecords {
  [field: string]: string | number | Date | undefined;

  public b_no: string | undefined; // 桥梁编号 
  public time: Date | undefined; // 时间（段） 
  public treatment_category: string | undefined; // 处治类别（维修、加固、改造） 
  public treatment_reson: string | undefined; // 处治原因 
  public treatment_scope: string | undefined; // 处治范围 
  public engineering_cost: number | undefined; // 工程费用(万元) 
  public fund_source: string | undefined; // 经费来源 
  public treatment_quality_evaluation: string | undefined; // 处治质量评定 
  public build_unit: string | undefined; // 建设单位 
  public design_unit: string | undefined; // 设计单位 
  public construction_unit: string | undefined; // 施工单位 
  public supervision_unit: string | undefined; // 监理单位

  constructor(b_no?: string, time?: Date, treatment_category?: string, treatment_reson?: string, treatment_scope?: string, engineering_cost?: number, fund_source?: string, treatment_quality_evaluation?: string, build_unit?: string, design_unit?: string, construction_unit?: string, supervision_unit?: string) {
    this.b_no = b_no;
    this.time = time;
    this.treatment_category = treatment_category;
    this.treatment_reson = treatment_reson;
    this.treatment_scope = treatment_scope;
    this.engineering_cost = engineering_cost;
    this.fund_source = fund_source;
    this.treatment_quality_evaluation = treatment_quality_evaluation;
    this.build_unit = build_unit;
    this.design_unit = design_unit;
    this.construction_unit = construction_unit;
    this.supervision_unit = supervision_unit;
  }

  //用于查询的字段
  static fields(): MaintenanceAndTreatmentRecordsFields[] {
    return [
      MaintenanceAndTreatmentRecordsFields.b_no,
      MaintenanceAndTreatmentRecordsFields.time,
      MaintenanceAndTreatmentRecordsFields.treatment_category,
      MaintenanceAndTreatmentRecordsFields.treatment_reson,
      MaintenanceAndTreatmentRecordsFields.treatment_scope,
      MaintenanceAndTreatmentRecordsFields.engineering_cost,
      MaintenanceAndTreatmentRecordsFields.fund_source,
      MaintenanceAndTreatmentRecordsFields.treatment_quality_evaluation,
      MaintenanceAndTreatmentRecordsFields.build_unit,
      MaintenanceAndTreatmentRecordsFields.design_unit,
      MaintenanceAndTreatmentRecordsFields.construction_unit,
      MaintenanceAndTreatmentRecordsFields.supervision_unit
    ];
  }

  // 数据库表名
  static table(): string {
    return 'maintenance_and_treatment_records';
  }

  // 主键
  static key(): string {
    return 'b_no';
  }

  // 插入SQL
  static insertSQL(basic: MaintenanceAndTreatmentRecords): string {
    const fields = MaintenanceAndTreatmentRecords.fields();
    const table = MaintenanceAndTreatmentRecords.table();
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
  static updateSQL(basic: MaintenanceAndTreatmentRecords, fields: MaintenanceAndTreatmentRecordsFields[] = MaintenanceAndTreatmentRecords.fields()): string {
    const table = MaintenanceAndTreatmentRecords.table();
    const key = MaintenanceAndTreatmentRecords.key();
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
  static deleteSQL(basic: MaintenanceAndTreatmentRecords): string

  static deleteSQL(which: string | MaintenanceAndTreatmentRecords): string {
    const table = MaintenanceAndTreatmentRecords.table();
    const key = MaintenanceAndTreatmentRecords.key();
    if (typeof which == 'string') {
      return `delete from ${table} where ${key}='${which}'`;
    } else {
      return `delete from ${table} where ${key}='${which[key]}'`;
    }
  }

  // 查询所有SQL
  static selectAllSQL(): string {
    const table = MaintenanceAndTreatmentRecords.table();
    return `select * from ${table}`;
  }


  // 查询SQL 函数参数包括：字段数组，where条件数组
  static selectSQL(fields: MaintenanceAndTreatmentRecordsFields[], where?: MaintenanceAndTreatmentRecordsWhereSet[]): string {
    const table = MaintenanceAndTreatmentRecords.table();
    const w = where && where.length > 0 ? ' where ' + where.join(' and ') : '';
    const f = fields && fields.length > 0 ? fields.join(',') : '*';
    return `select ${f} from ${table} ${w}`;
  }
}
