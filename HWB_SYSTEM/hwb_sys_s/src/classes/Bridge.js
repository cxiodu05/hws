"use strict";
exports.__esModule = true;
exports.Bridge = exports.BridgeWhereSet = exports.BridgeFields = void 0;
// 数据库表bridge 属性枚举
var BridgeFields;
(function (BridgeFields) {
    BridgeFields["route_no"] = "route_no";
    BridgeFields["route_name"] = "route_name";
    BridgeFields["route_level"] = "route_level";
    BridgeFields["b_no"] = "b_no";
    BridgeFields["b_name"] = "b_name";
    BridgeFields["b_pile"] = "b_pile";
    BridgeFields["feature_type"] = "feature_type";
    BridgeFields["crossed_name"] = "crossed_name";
    BridgeFields["crossed_pile"] = "crossed_pile";
    BridgeFields["design_loads"] = "design_loads";
    BridgeFields["b_slope"] = "b_slope";
    BridgeFields["b_radius"] = "b_radius";
    BridgeFields["compl_time"] = "compl_time";
    BridgeFields["design_unit"] = "design_unit";
    BridgeFields["building_unit"] = "building_unit";
    BridgeFields["sup_unit"] = "sup_unit";
    BridgeFields["owner_unit"] = "owner_unit";
    BridgeFields["custody_unit"] = "custody_unit";
})(BridgeFields = exports.BridgeFields || (exports.BridgeFields = {}));
var BridgeWhereSet = /** @class */ (function () {
    /**
     *
     * @param field 字段名
     * @param value 对应的值
     * @param compare 比较符
     */
    function BridgeWhereSet(field, value, compare) {
        this.field = field;
        this.value = value;
        this.compare = compare;
    }
    /**
     * @override
     */
    BridgeWhereSet.prototype.toString = function () {
        if (typeof this.value === 'number') {
            return "".concat(this.field).concat(this.compare).concat(this.value);
        }
        else {
            return "".concat(this.field).concat(this.compare, "'").concat(this.value, "'");
        }
    };
    return BridgeWhereSet;
}());
exports.BridgeWhereSet = BridgeWhereSet;
// 数据库表[bridge_basic]映射类
var Bridge = /** @class */ (function () {
    function Bridge(route_no, route_name, route_level, b_no, b_name, b_pile, feature_type, crossed_name, crossed_pile, design_loads, b_slope, b_radius, compl_time, design_unit, building_unit, sup_unit, owner_unit, custody_unit) {
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
    Bridge.fields = function () {
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
    };
    // 数据库表名
    Bridge.table = function () {
        return 'bridge';
    };
    // 主键
    Bridge.key = function () {
        return 'b_no';
    };
    // 插入SQL
    Bridge.insertSQL = function (basic) {
        var fields = Bridge.fields();
        var table = Bridge.table();
        var values = fields.map(function (field) {
            if (basic[field] === undefined) {
                return 'null';
            }
            else {
                return "'".concat(basic[field], "'");
            }
        });
        return "insert into ".concat(table, " (").concat(fields.join(','), ") values (").concat(values.join(','), ")");
    };
    // 更新SQL
    Bridge.updateSQL = function (basic, fields) {
        if (fields === void 0) { fields = Bridge.fields(); }
        var table = Bridge.table();
        var key = Bridge.key();
        var values = fields.map(function (field) {
            if (basic[field] === undefined || basic[field] === 'undefined') {
                return "undefined";
            }
            else {
                if (typeof basic[field] === 'string') {
                    return "".concat(field, "='").concat(basic[field], "'");
                }
                else if (typeof basic[field] === 'number') {
                    return "".concat(field, "=").concat(basic[field]);
                }
            }
        });
        var Values = values.filter(function (value) { return value != "undefined"; });
        console.log(Values);
        return "update ".concat(table, " set ").concat(Values.join(','), " where ").concat(key, "='").concat(basic[key], "'");
    };
    Bridge.deleteSQL = function (which) {
        var table = Bridge.table();
        var key = Bridge.key();
        if (typeof which == 'string') {
            return "delete from ".concat(table, " where ").concat(key, "='").concat(which, "'");
        }
        else {
            return "delete from ".concat(table, " where ").concat(key, "='").concat(which[key], "'");
        }
    };
    // 查询所有SQL
    Bridge.selectAllSQL = function () {
        var table = Bridge.table();
        return "select * from ".concat(table);
    };
    // 查询SQL 函数参数包括：字段数组，where条件数组
    Bridge.selectSQL = function (fields, where) {
        var table = Bridge.table();
        var w = where && where.length > 0 ? ' where ' + where.join(' and ') : '';
        var f = fields && fields.length > 0 ? fields.join(',') : '*';
        return "select ".concat(f, " from ").concat(table, " ").concat(w);
    };
    return Bridge;
}());
exports.Bridge = Bridge;
