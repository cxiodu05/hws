// 数据库表bridge 属性枚举
export enum BridgeFields {
  route_no = 'route_no', // 路线编号
  route_name = 'route_name', // 路线名称
  route_level = 'route_level', // 路线等级
  b_no = 'b_no', // 桥梁编号
  b_name = 'b_name', // 桥梁名称
  b_pile = 'b_pile', // 桥梁桩号
  feature_type = 'feature_type', // 结构类型
  crossed_name = 'crossed_name', // 跨越名称
  crossed_pile = 'crossed_pile', // 跨越桩号
  design_loads = 'design_loads', // 设计荷载
  b_slope = 'b_slope', // 桥梁坡度
  b_radius = 'b_radius', // 桥梁半径
  compl_time = 'compl_time', // 竣工时间
  design_unit = 'design_unit', // 设计单位
  building_unit = 'building_unit', // 施工单位
  sup_unit = 'sup_unit', // 监理单位
  owner_unit = 'owner_unit', // 业主单位
  custody_unit = 'custody_unit', // 管养单位
}

export class BridgeWhereSet {
  public field: BridgeFields
  public value: any
  public compare: string

  /**
   * 
   * @param field 字段名
   * @param value 对应的值
   * @param compare 比较符
   */
  constructor(field: BridgeFields, value: any, compare: string) {
    this.field = field
    this.value = value
    this.compare = compare
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

// 数据库表[bridge_basic]映射类

export class Bridge {
  [field: string]: string | number | Date | undefined;
  public route_no: string | undefined; // 路线编号
  public route_name: string | undefined; // 路线名称
  public route_level: string | undefined; // 路线等级
  public b_no: string | undefined; // 桥梁编号
  public b_name: string | undefined; // 桥梁名称
  public b_pile: string | undefined; // 桥梁桩号
  public feature_type: string | undefined; // 结构类型
  public crossed_name: string | undefined; // 跨越名称
  public crossed_pile: string | undefined; // 跨越桩号
  public design_loads: string | undefined; // 设计荷载
  public b_slope: number | undefined; // 桥梁坡度
  public b_radius: number | undefined; // 桥梁半径
  public compl_time: string | undefined; // 竣工时间
  public design_unit: string | undefined; // 设计单位
  public building_unit: string | undefined; // 施工单位
  public sup_unit: string | undefined; // 监理单位
  public owner_unit: string | undefined; // 业主单位
  public custody_unit: string | undefined; // 管养单位
  
  constructor(route_no?: string, route_name?: string, route_level?: string, b_no?: string, b_name?: string, b_pile?: string, feature_type?: string, crossed_name?: string, crossed_pile?: string, design_loads?: string, b_slope?: number, b_radius?: number, compl_time?: string, design_unit?: string, building_unit?: string, sup_unit?: string, owner_unit?: string, custody_unit?: string) {
    this.route_no = route_no;
    this.route_name = route_name;
    this.route_level = route_level;
    this.b_no = b_no;
    this.b_name = b_name;
    this.b_pile = b_pile;
    this.feature_type = feature_type;
    this.crossed_name = crossed_name;
    this.crossed_pile = crossed_pile;
    this.design_loads = design_loads;
    this.b_slope = b_slope;
    this.b_radius = b_radius;
    this.compl_time = compl_time;
    this.design_unit = design_unit;
    this.building_unit = building_unit;
    this.sup_unit = sup_unit;
    this.owner_unit = owner_unit;
    this.custody_unit = custody_unit;
  }

  // 用于查询的字段
  static fields(): BridgeFields[] {
    return [
      BridgeFields.route_no,
      BridgeFields.route_name,
      BridgeFields.route_level,
      BridgeFields.b_no,
      BridgeFields.b_name,
      BridgeFields.b_pile,
      BridgeFields.feature_type,
      BridgeFields.crossed_name,
      BridgeFields.crossed_pile,
      BridgeFields.design_loads,
      BridgeFields.b_slope,
      BridgeFields.b_radius,
      BridgeFields.compl_time,
      BridgeFields.design_unit,
      BridgeFields.building_unit,
      BridgeFields.sup_unit,
      BridgeFields.owner_unit,
      BridgeFields.custody_unit
    ];
  }

  // 数据库表名
  static table(): string {
    return 'bridge';
  }

  // 主键
  static key(): string {
    return 'b_no';
  }

  // 插入SQL
  static insertSQL(basic: Bridge): string {
    const fields = Bridge.fields();
    const table = Bridge.table();
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
  static updateSQL(basic: Bridge, fields: BridgeFields[] = Bridge.fields()): string {
    const table = Bridge.table();
    const key = Bridge.key();
    const values = fields.map(field => {
      if (basic[field] === undefined || basic[field] === 'undefined') {
        return "undefined";
      } else {
        if (typeof basic[field] === 'string') {
          return `${field}='${basic[field]}'`;
        } else if(typeof basic[field] === 'number') {
          return `${field}=${basic[field]}`;
        }
      }
    });
    const Values = values.filter(value => { return value != "undefined" })
    console.log(Values);
    
    return `update ${table} set ${Values.join(',')} where ${key}='${basic[key]}'`;
  }

  // 删除SQL
  static deleteSQL(b_no: string): string 
  static deleteSQL(basic: Bridge): string 

  static deleteSQL(which: string | Bridge): string {
    const table = Bridge.table();
    const key = Bridge.key();
    if (typeof which == 'string') {
      return `delete from ${table} where ${key}='${which}'`;
    } else {
      return `delete from ${table} where ${key}='${which[key]}'`;
    }
  }

  // 查询所有SQL
  static selectAllSQL(): string {
    const table = Bridge.table();
    return `select * from ${table}`;
  }


  // 查询SQL 函数参数包括：字段数组，where条件数组
  static selectSQL(fields: BridgeFields[], where?: BridgeWhereSet[]): string {
    const table = Bridge.table();
    const w = where && where.length > 0 ? ' where ' + where.join(' and ') : '';
    const f = fields && fields.length > 0 ? fields.join(',') : '*';
    return `select ${f} from ${table} ${w}`;
  }
}