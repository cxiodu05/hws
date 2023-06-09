"use strict";
exports.__esModule = true;
exports.Other = exports.OtherWhereSet = exports.OtherFields = void 0;
// 数据库表other 属性枚举
var OtherFields;
(function (OtherFields) {
    OtherFields["b_no"] = "b_no";
    OtherFields["b_overall_photo"] = "b_overall_photo";
    OtherFields["b_front_photo"] = "b_front_photo";
    OtherFields["b_engineer"] = "b_engineer";
    OtherFields["cardholder"] = "cardholder";
    OtherFields["card_date"] = "card_date"; // 填卡日期
})(OtherFields = exports.OtherFields || (exports.OtherFields = {}));
var OtherWhereSet = /** @class */ (function () {
    /**
     *
     * @param field 字段名
     * @param value 对应的值
     * @param compare 比较符
     */
    function OtherWhereSet(field, value, compare) {
        this.field = field;
        this.value = value;
        this.compare = compare;
    }
    /**
     * @override
     */
    OtherWhereSet.prototype.toString = function () {
        if (typeof this.value === 'number') {
            return "".concat(this.field).concat(this.compare).concat(this.value);
        }
        else {
            return "".concat(this.field).concat(this.compare, "'").concat(this.value, "'");
        }
    };
    return OtherWhereSet;
}());
exports.OtherWhereSet = OtherWhereSet;
// 数据库表[other]映射类
var Other = /** @class */ (function () {
    function Other(b_no, b_overall_photo, b_front_photo, b_engineer, cardholder, card_date) {
        this.b_no = b_no;
        this.b_overall_photo = b_overall_photo;
        this.b_front_photo = b_front_photo;
        this.b_engineer = b_engineer;
        this.cardholder = cardholder;
        this.card_date = card_date;
    }
    //用于查询的字段
    Other.fields = function () {
        return [
            OtherFields.b_no,
            OtherFields.b_overall_photo,
            OtherFields.b_front_photo,
            OtherFields.b_engineer,
            OtherFields.cardholder,
            OtherFields.card_date
        ];
    };
    // 数据库表名
    Other.table = function () {
        return 'other';
    };
    // 主键
    Other.key = function () {
        return 'b_no';
    };
    // 插入SQL
    Other.insertSQL = function (basic) {
        var fields = Other.fields();
        var table = Other.table();
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
    Other.updateSQL = function (basic, fields) {
        if (fields === void 0) { fields = Other.fields(); }
        var table = Other.table();
        var key = Other.key();
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
    Other.deleteSQL = function (which) {
        var table = Other.table();
        var key = Other.key();
        if (typeof which == 'string') {
            return "delete from ".concat(table, " where ").concat(key, "='").concat(which, "'");
        }
        else {
            return "delete from ".concat(table, " where ").concat(key, "='").concat(which[key], "'");
        }
    };
    // 查询所有SQL
    Other.selectAllSQL = function () {
        var table = Other.table();
        return "select * from ".concat(table);
    };
    // 查询SQL 函数参数包括：字段数组，where条件数组
    Other.selectSQL = function (fields, where) {
        var table = Other.table();
        var w = where && where.length > 0 ? ' where ' + where.join(' and ') : '';
        var f = fields && fields.length > 0 ? fields.join(',') : '*';
        return "select ".concat(f, " from ").concat(table, " ").concat(w);
    };
    return Other;
}());
exports.Other = Other;
