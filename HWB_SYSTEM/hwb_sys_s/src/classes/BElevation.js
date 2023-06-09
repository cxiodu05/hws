"use strict";
exports.__esModule = true;
exports.BElevation = exports.BElevationWhereSet = exports.BElevationFields = void 0;
// 数据库表b_elevation 属性枚举
var BElevationFields;
(function (BElevationFields) {
    BElevationFields["b_no"] = "b_no";
    BElevationFields["lines_no"] = "lines_no";
    BElevationFields["b_elevation"] = "b_elevation";
})(BElevationFields = exports.BElevationFields || (exports.BElevationFields = {}));
var BElevationWhereSet = /** @class */ (function () {
    /**
     *
     * @param field 字段名
     * @param value 对应的值
     * @param compare 比较符
     */
    function BElevationWhereSet(field, value, compare) {
        this.field = field;
        this.value = value;
        this.compare = compare;
    }
    /**
     * @override
     */
    BElevationWhereSet.prototype.toString = function () {
        if (typeof this.value === 'number') {
            return "".concat(this.field).concat(this.compare).concat(this.value);
        }
        else {
            return "".concat(this.field).concat(this.compare, "'").concat(this.value, "'");
        }
    };
    return BElevationWhereSet;
}());
exports.BElevationWhereSet = BElevationWhereSet;
// 数据库表[b_elevation]映射类
var BElevation = /** @class */ (function () {
    function BElevation(b_no, lines_no, b_elevation) {
        this.b_no = b_no;
        this.lines_no = lines_no;
        this.b_elevation = b_elevation;
    }
    // 用于查询的字段
    BElevation.fields = function () {
        return [BElevationFields.b_no, BElevationFields.lines_no, BElevationFields.b_elevation];
    };
    // 数据库表名
    BElevation.table = function () {
        return 'b_elevation';
    };
    // 主键
    BElevation.key = function () {
        return 'b_no';
    };
    // 插入SQL
    BElevation.insertSQL = function (basic) {
        var fields = BElevation.fields();
        var table = BElevation.table();
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
    BElevation.updateSQL = function (basic, fields) {
        if (fields === void 0) { fields = BElevation.fields(); }
        var table = BElevation.table();
        var key = BElevation.key();
        var values = fields.map(function (field) {
            if (basic[field] === undefined || basic[field] === 'undefined') {
                return 'undefined';
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
        var Values = values.filter(function (value) {
            return value != 'undefined';
        });
        console.log(Values);
        return "update ".concat(table, " set ").concat(Values.join(','), " where ").concat(key, "='").concat(basic[key], "'");
    };
    BElevation.deleteSQL = function (which) {
        var table = BElevation.table();
        var key = BElevation.key();
        if (typeof which == 'string') {
            return "delete from ".concat(table, " where ").concat(key, "='").concat(which, "'");
        }
        else {
            return "delete from ".concat(table, " where ").concat(key, "='").concat(which[key], "'");
        }
    };
    // 查询所有SQL
    BElevation.selectAllSQL = function () {
        var table = BElevation.table();
        return "select * from ".concat(table);
    };
    // 查询SQL 函数参数包括：字段数组，where条件数组
    BElevation.selectSQL = function (fields, where) {
        var table = BElevation.table();
        var w = where && where.length > 0 ? ' where ' + where.join(' and ') : '';
        var f = fields && fields.length > 0 ? fields.join(',') : '*';
        return "select ".concat(f, " from ").concat(table, " ").concat(w);
    };
    return BElevation;
}());
exports.BElevation = BElevation;
