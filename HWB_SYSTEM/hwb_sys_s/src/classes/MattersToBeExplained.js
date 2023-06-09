"use strict";
exports.__esModule = true;
exports.MattersToBeExplained = exports.MattersToBeExplainedWhereSet = exports.MattersToBeExplainedFields = void 0;
// 数据库表matters_to_be_explained 属性枚举
var MattersToBeExplainedFields;
(function (MattersToBeExplainedFields) {
    MattersToBeExplainedFields["b_no"] = "b_no";
    MattersToBeExplainedFields["things"] = "things"; // 需要说明的事项
})(MattersToBeExplainedFields = exports.MattersToBeExplainedFields || (exports.MattersToBeExplainedFields = {}));
var MattersToBeExplainedWhereSet = /** @class */ (function () {
    /**
     *
     * @param field 字段名
     * @param value 对应的值
     * @param compare 比较符
     */
    function MattersToBeExplainedWhereSet(field, value, compare) {
        this.field = field;
        this.value = value;
        this.compare = compare;
    }
    /**
     * @override
     */
    MattersToBeExplainedWhereSet.prototype.toString = function () {
        if (typeof this.value === 'number') {
            return "".concat(this.field).concat(this.compare).concat(this.value);
        }
        else {
            return "".concat(this.field).concat(this.compare, "'").concat(this.value, "'");
        }
    };
    return MattersToBeExplainedWhereSet;
}());
exports.MattersToBeExplainedWhereSet = MattersToBeExplainedWhereSet;
// 数据库表[matters_to_be_explained]映射类
var MattersToBeExplained = /** @class */ (function () {
    function MattersToBeExplained(b_no, things) {
        this.b_no = b_no;
        this.things = things;
    }
    //用于查询的字段
    MattersToBeExplained.fields = function () {
        return [
            MattersToBeExplainedFields.b_no,
            MattersToBeExplainedFields.things
        ];
    };
    // 数据库表名
    MattersToBeExplained.table = function () {
        return 'matters_to_be_explained';
    };
    // 主键
    MattersToBeExplained.key = function () {
        return 'b_no';
    };
    // 插入SQL
    MattersToBeExplained.insertSQL = function (basic) {
        var fields = MattersToBeExplained.fields();
        var table = MattersToBeExplained.table();
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
    MattersToBeExplained.updateSQL = function (basic, fields) {
        if (fields === void 0) { fields = MattersToBeExplained.fields(); }
        var table = MattersToBeExplained.table();
        var key = MattersToBeExplained.key();
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
    MattersToBeExplained.deleteSQL = function (which) {
        var table = MattersToBeExplained.table();
        var key = MattersToBeExplained.key();
        if (typeof which == 'string') {
            return "delete from ".concat(table, " where ").concat(key, "='").concat(which, "'");
        }
        else {
            return "delete from ".concat(table, " where ").concat(key, "='").concat(which[key], "'");
        }
    };
    // 查询所有SQL
    MattersToBeExplained.selectAllSQL = function () {
        var table = MattersToBeExplained.table();
        return "select * from ".concat(table);
    };
    // 查询SQL 函数参数包括：字段数组，where条件数组
    MattersToBeExplained.selectSQL = function (fields, where) {
        var table = MattersToBeExplained.table();
        var w = where && where.length > 0 ? ' where ' + where.join(' and ') : '';
        var f = fields && fields.length > 0 ? fields.join(',') : '*';
        return "select ".concat(f, " from ").concat(table, " ").concat(w);
    };
    return MattersToBeExplained;
}());
exports.MattersToBeExplained = MattersToBeExplained;
