"use strict";
exports.__esModule = true;
exports.BTechIndex = exports.BTechIndexWhereSet = exports.BTechIndexFields = void 0;
// 数据库表b_tech_index 属性枚举
var BTechIndexFields;
(function (BTechIndexFields) {
    BTechIndexFields["b_no"] = "b_no";
    BTechIndexFields["b_length"] = "b_length";
    BTechIndexFields["b_width"] = "b_width";
    BTechIndexFields["b_car_width"] = "b_car_width";
    BTechIndexFields["b_man_width"] = "b_man_width";
    BTechIndexFields["guard_height"] = "guard_height";
    BTechIndexFields["center_width"] = "center_width";
    BTechIndexFields["b_standard_clear"] = "b_standard_clear";
    BTechIndexFields["b_actual_clear"] = "b_actual_clear";
    BTechIndexFields["b_understandard_level"] = "b_understandard_level";
    BTechIndexFields["b_underactual_clear"] = "b_underactual_clear";
    BTechIndexFields["approach_width"] = "approach_width";
    BTechIndexFields["approach_radius"] = "approach_radius";
    BTechIndexFields["design_waterlevel"] = "design_waterlevel";
    BTechIndexFields["historical_waterlevel"] = "historical_waterlevel";
    BTechIndexFields["design_peak_acceleration"] = "design_peak_acceleration";
    BTechIndexFields["max_pan"] = "max_pan"; // 最大跨径（m）
})(BTechIndexFields = exports.BTechIndexFields || (exports.BTechIndexFields = {}));
var BTechIndexWhereSet = /** @class */ (function () {
    /**
     *
     * @param field 字段名
     * @param value 对应的值
     * @param compare 比较符
     */
    function BTechIndexWhereSet(field, value, compare) {
        this.field = field;
        this.value = value;
        this.compare = compare;
    }
    /**
     * @override
     */
    BTechIndexWhereSet.prototype.toString = function () {
        if (typeof this.value === 'number') {
            return "".concat(this.field).concat(this.compare).concat(this.value);
        }
        else {
            return "".concat(this.field).concat(this.compare, "'").concat(this.value, "'");
        }
    };
    return BTechIndexWhereSet;
}());
exports.BTechIndexWhereSet = BTechIndexWhereSet;
// 数据库表[b_tech_index]映射类
var BTechIndex = /** @class */ (function () {
    function BTechIndex(b_no, b_length, b_width, b_car_width, b_man_width, guard_height, center_width, b_standard_clear, b_actual_clear, b_understandard_level, b_underactual_clear, approach_width, approach_radius, design_waterlevel, historical_waterlevel, design_peak_acceleration, max_pan) {
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
    BTechIndex.fields = function () {
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
    };
    // 数据库表名
    BTechIndex.table = function () {
        return 'b_tech_index';
    };
    // 主键
    BTechIndex.key = function () {
        return 'b_no';
    };
    // 插入SQL
    BTechIndex.insertSQL = function (basic) {
        var fields = BTechIndex.fields();
        var table = BTechIndex.table();
        var values = fields.map(function (field) {
            if (basic[field] === undefined) {
                return 'null';
            }
            else {
                return "'".concat(basic[field], "'");
            }
        });
        console.log(values);
        return "insert into ".concat(table, " (").concat(fields.join(','), ") values (").concat(values.join(','), ")");
    };
    // 更新SQL
    BTechIndex.updateSQL = function (basic, fields) {
        if (fields === void 0) { fields = BTechIndex.fields(); }
        var table = BTechIndex.table();
        var key = BTechIndex.key();
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
        return "update ".concat(table, " set ").concat(Values.join(','), " where ").concat(key, "='").concat(basic[key], "'");
    };
    BTechIndex.deleteSQL = function (which) {
        var table = BTechIndex.table();
        var key = BTechIndex.key();
        if (typeof which == 'string') {
            return "delete from ".concat(table, " where ").concat(key, "='").concat(which, "'");
        }
        else {
            return "delete from ".concat(table, " where ").concat(key, "='").concat(which[key], "'");
        }
    };
    // 查询所有SQL
    BTechIndex.selectAllSQL = function () {
        var table = BTechIndex.table();
        return "select * from ".concat(table);
    };
    // 查询SQL 函数参数包括：字段数组，where条件数组
    BTechIndex.selectSQL = function (fields, where) {
        var table = BTechIndex.table();
        var w = where && where.length > 0 ? ' where ' + where.join(' and ') : '';
        var f = fields && fields.length > 0 ? fields.join(',') : '*';
        return "select ".concat(f, " from ").concat(table, " ").concat(w);
    };
    return BTechIndex;
}());
exports.BTechIndex = BTechIndex;
