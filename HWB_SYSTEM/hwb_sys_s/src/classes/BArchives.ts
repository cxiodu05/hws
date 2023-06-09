// 数据库表b_archives 属性枚举
export enum BArchivesFields {
  b_no = 'b_no', // 桥梁编号
  design_drawings = 'design_drawings', // 设计图纸
  design_files = 'design_files', // 设计文件
  asbuilt_drawings = 'asbuilt_drawings', // 竣工图纸
  construction_documents = 'construction_documents', // 施工文件（含施工缺陷处理）
  acceptance_files = 'acceptance_files', // 验收文件
  administrative_approval_documents = 'administrative_approval_documents', // 行政审批文件
  regular_inspection_data = 'regular_inspection_data', // 定期检查资料
  special_check = 'special_check', // 特殊检查资料
  previous_maintenance = 'previous_maintenance', // 历次维修、加固资料固资料
  other_files = 'other_files', // 其他档案
  file_form = 'file_form', // 档案形式
  archicing_time = 'archicing_time', // 建档时间（年/月）
  release_time = 'release_time' // 交工时间
}

export class BArchivesWhereSet {
  public field: BArchivesFields;
  public value: any;
  public compare: string;

  /**
   * 
   * @param field 字段名
   * @param value 对应的值
   * @param compare 比较符
   */
  constructor(field: BArchivesFields, value: any, compare: string) {
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

// 数据库表[b_archives]映射类

export class BArchives {
  [field: string]: string | number | Date | undefined;

  public b_no: string | undefined; // 桥梁编号 
  public design_drawings: string | undefined; // 设计图纸 
  public design_files: string | undefined; // 设计文件 
  public asbuilt_drawings: string | undefined; // 竣工图纸 
  public construction_documents: string | undefined; // 施工文件（含施工缺陷处理） 
  public acceptance_files: string | undefined; // 验收文件 
  public administrative_approval_documents: string | undefined; // 行政审批文件 
  public regular_inspection_data: string | undefined; // 定期检查资料 
  public special_check: string | undefined; // 特殊检查资料 
  public previous_maintenance: string | undefined; // 历次维修、加固资料固资料 
  public other_files: string | undefined; // 其他档案 
  public file_form: string | undefined; // 档案形式 
  public archicing_time: Date | undefined; // 建档时间（年/月） 
  public release_time: Date | undefined; //交工时间

  constructor(b_no?: string, design_drawings?: string, design_files?: string, asbuilt_drawings?: string, construction_documents?: string, acceptance_files?: string, administrative_approval_documents?: string, regular_inspection_data?: string, special_check?: string, previous_maintenance?: string, other_files?: string, file_form?: string, archicing_time?: Date, release_time?: Date) {
    this.b_no = b_no;
    this.design_drawings = design_drawings;
    this.design_files = design_files;
    this.asbuilt_drawings = asbuilt_drawings;
    this.construction_documents = construction_documents;
    this.acceptance_files = acceptance_files;
    this.administrative_approval_documents = administrative_approval_documents;
    this.regular_inspection_data = regular_inspection_data;
    this.special_check = special_check;
    this.previous_maintenance = previous_maintenance;
    this.other_files = other_files;
    this.file_form = file_form;
    this.archicing_time = archicing_time;
    this.release_time = release_time;
  }

  //用于查询的字段
  static fields(): BArchivesFields[] {
    return [
      BArchivesFields.b_no,
      BArchivesFields.design_drawings,
      BArchivesFields.design_files,
      BArchivesFields.asbuilt_drawings,
      BArchivesFields.construction_documents,
      BArchivesFields.acceptance_files,
      BArchivesFields.administrative_approval_documents,
      BArchivesFields.regular_inspection_data,
      BArchivesFields.special_check,
      BArchivesFields.previous_maintenance,
      BArchivesFields.other_files,
      BArchivesFields.file_form,
      BArchivesFields.archicing_time,
      BArchivesFields.release_time
    ];
  }

  // 数据库表名
  static table(): string {
    return 'b_archives';
  }

  // 主键
  static key(): string {
    return 'b_no';
  }

  // 插入SQL
  static insertSQL(basic: BArchives): string {
    const fields = BArchives.fields();
    const table = BArchives.table();
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
  static updateSQL(basic: BArchives, fields: BArchivesFields[] = BArchives.fields()): string {
    const table = BArchives.table();
    const key = BArchives.key();
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
  static deleteSQL(basic: BArchives): string

  static deleteSQL(which: string | BArchives): string {
    const table = BArchives.table();
    const key = BArchives.key();
    if (typeof which == 'string') {
      return `delete from ${table} where ${key}='${which}'`;
    } else {
      return `delete from ${table} where ${key}='${which[key]}'`;
    }
  }

  // 查询所有SQL
  static selectAllSQL(): string {
    const table = BArchives.table();
    return `select * from ${table}`;
  }


  // 查询SQL 函数参数包括：字段数组，where条件数组
  static selectSQL(fields: BArchivesFields[], where?: BArchivesWhereSet[]): string {
    const table = BArchives.table();
    const w = where && where.length > 0 ? ' where ' + where.join(' and ') : '';
    const f = fields && fields.length > 0 ? fields.join(',') : '*';
    return `select ${f} from ${table} ${w}`;
  }
}
