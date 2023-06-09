// 数据库表b_tech_index 属性枚举
export enum BTechIndexFields {
  b_no = 'b_no', // 桥梁编号
  b_length = 'b_length', // 桥梁全长(m)
  b_width = 'b_width', // 桥面总宽(m)
  b_car_width = 'b_car_width', // 车道宽度(m)
  b_man_width = 'b_man_width', // 人行道宽度(m)
  guard_height = 'guard_height', // 护栏或防撞墙高度(m)
  center_width = 'center_width', // 中央分隔带宽度(m)
  b_standard_clear = 'b_standard_clear', // 桥面标准净空(m)
  b_actual_clear = 'b_actual_clear', // 桥面实际净空(m)
  b_understandard_level = 'b_understandard_level', // 桥下通航等级及标准净空(m)
  b_underactual_clear = 'b_underactual_clear', // 桥下实际净空(m)
  approach_width = 'approach_width', // 引道总宽(m)
  approach_radius = 'approach_radius', // 引道线形或曲线半径(m)
  design_waterlevel = 'design_waterlevel', // 设计洪水频率及其水位
  historical_waterlevel = 'historical_waterlevel', // 历史洪水位
  design_peak_acceleration = 'design_peak_acceleration', // 设计地震动峰值加速度系数
  max_pan = 'max_pan' // 最大跨径（m）
}

export class BTechIndexWhereSet {
  public field: BTechIndexFields;
  public value: any;
  public compare: string;

  /**
   * 
   * @param field 字段名
   * @param value 对应的值
   * @param compare 比较符
   */
  constructor(field: BTechIndexFields, value: any, compare: string) {
    this.field = field;
    this.value = value;
    this.compare = compare;
  }

  /**
   * @override
   */
  public toString(): string {
    if (typeof this.value === 'number') {
      return `${this.field}${this.compare}${this.value}`;
    } else {
      return `${this.field}${this.compare}'${this.value}'`;
    }
  }
}

// 数据库表[b_tech_index]映射类

export class BTechIndex {
  [field: string]: string | number | Date | undefined;

  public b_no: string | undefined; // 桥梁编号
  public b_length: number | undefined; // 桥梁全长(m)
  public b_width: number | undefined; // 桥面总宽(m)
  public b_car_width: number | undefined; // 车道宽度(m)
  public b_man_width: number | undefined; // "人行道宽度\n(m)"
  public guard_height: number | undefined; // "护栏或防撞墙高度\n(m)"
  public center_width: number | undefined; // 中央分隔带宽度(m)
  public b_standard_clear: number | undefined; // "桥面标准净空\n(m)"
  public b_actual_clear: number | undefined; // 桥面实际净空(m)
  public b_understandard_level: number | undefined; // "桥下通航等级及标\n准净空(m)"
  public b_underactual_clear: number | undefined; // "桥下实际净空\n(m)"
  public approach_width: number | undefined; // 引道总宽(m)
  public approach_radius: number | undefined; // "引道线形或曲线半\n径(m)"
  public design_waterlevel: string | undefined; // "设计洪水频率\n及其水位"
  public historical_waterlevel: string | undefined; // 历史洪水位
  public design_peak_acceleration: number | undefined; // "设计地震动峰值加\n速度系数"
  public max_pan: number | undefined; // 最大跨径（m）

  constructor(b_no?: string, b_length?: number, b_width?: number, b_car_width?: number, b_man_width?: number, guard_height?: number, center_width?: number, b_standard_clear?: number, b_actual_clear?: number, b_understandard_level?: number, b_underactual_clear?: number, approach_width?: number, approach_radius?: number, design_waterlevel?: string, historical_waterlevel?: string, design_peak_acceleration?: number, max_pan?: number) {
    this.b_no = b_no;
    this.b_length = b_length;
    this.b_width = b_width;
    this.b_car_width = b_car_width;
    this.b_man_width = b_man_width;
    this.guard_height = guard_height;
    this.center_width = center_width;
    this.b_standard_clear = b_standard_clear;
    this.b_actual_clear = b_actual_clear;
    this.b_understandard_level = b_understandard_level;
    this.b_underactual_clear = b_underactual_clear;
    this.approach_width = approach_width;
    this.approach_radius = approach_radius;
    this.design_waterlevel = design_waterlevel;
    this.historical_waterlevel = historical_waterlevel;
    this.design_peak_acceleration = design_peak_acceleration;
    this.max_pan = max_pan;
  }

  // 用于查询的字段
  static fields(): BTechIndexFields[] {
    return [
      BTechIndexFields.b_no,
      BTechIndexFields.b_length,
      BTechIndexFields.b_width,
      BTechIndexFields.b_car_width,
      BTechIndexFields.b_man_width,
      BTechIndexFields.guard_height,
      BTechIndexFields.center_width,
      BTechIndexFields.b_standard_clear,
      BTechIndexFields.b_actual_clear,
      BTechIndexFields.b_understandard_level,
      BTechIndexFields.b_underactual_clear,
      BTechIndexFields.approach_width,
      BTechIndexFields.approach_radius,
      BTechIndexFields.design_waterlevel,
      BTechIndexFields.historical_waterlevel,
      BTechIndexFields.design_peak_acceleration,
      BTechIndexFields.max_pan
    ];
  }

  // 数据库表名
  static table(): string {
    return 'b_tech_index';
  }

  // 主键
  static key(): string {
    return 'b_no';
  }

  // 插入SQL
  static insertSQL(basic: BTechIndex): string {
    const fields = BTechIndex.fields();
    const table = BTechIndex.table();
    const values = fields.map(field => {
      if (basic[field] === undefined) {
        return 'null';
      } else {
        return `'${basic[field]}'`;
      }
    });
    console.log(values);
    
    return `insert into ${table} (${fields.join(',')}) values (${values.join(',')})`;
  }

  // 更新SQL
  static updateSQL(basic: BTechIndex, fields: BTechIndexFields[] = BTechIndex.fields()): string {
    const table = BTechIndex.table();
    const key = BTechIndex.key();
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
  static deleteSQL(basic: BTechIndex): string

  static deleteSQL(which: string | BTechIndex): string {
    const table = BTechIndex.table();
    const key = BTechIndex.key();
    if (typeof which == 'string') {
      return `delete from ${table} where ${key}='${which}'`;
    } else {
      return `delete from ${table} where ${key}='${which[key]}'`;
    }
  }

  // 查询所有SQL
  static selectAllSQL(): string {
    const table = BTechIndex.table();
    return `select * from ${table}`;
  }


  // 查询SQL 函数参数包括：字段数组，where条件数组
  static selectSQL(fields: BTechIndexFields[], where?: BTechIndexWhereSet[]): string {
    const table = BTechIndex.table();
    const w = where && where.length > 0 ? ' where ' + where.join(' and ') : '';
    const f = fields && fields.length > 0 ? fields.join(',') : '*';
    return `select ${f} from ${table} ${w}`;
  }
}