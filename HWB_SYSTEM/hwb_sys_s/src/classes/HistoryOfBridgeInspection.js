"use strict";
exports.__esModule = true;
exports.HistoryOfBridgeInspection = exports.HistoryOfBridgeInspectionWhereSet = exports.HistoryOfBridgeInspectionFields = void 0;
// 数据库表history_of_bridge_inspection 属性枚举
var HistoryOfBridgeInspectionFields;
(function (HistoryOfBridgeInspectionFields) {
    HistoryOfBridgeInspectionFields["b_no"] = "b_no";
    HistoryOfBridgeInspectionFields["evaluation_time"] = "evaluation_time";
    HistoryOfBridgeInspectionFields["category"] = "category";
    HistoryOfBridgeInspectionFields["b_techical_condition"] = "b_techical_condition";
    HistoryOfBridgeInspectionFields["treatment_measures"] = "treatment_measures";
    HistoryOfBridgeInspectionFields["next_detection_time"] = "next_detection_time"; // 下次检测时间
})(HistoryOfBridgeInspectionFields = exports.HistoryOfBridgeInspectionFields || (exports.HistoryOfBridgeInspectionFields = {}));
var HistoryOfBridgeInspectionWhereSet = /** @class */ (function () {
    /**
     *
     * @param field 字段名
     * @param value 对应的值
     * @param compare 比较符
     */
    function HistoryOfBridgeInspectionWhereSet(field, value, compare) {
        this.field = field;
        this.value = value;
        this.compare = compare;
    }
    /**
     * @override
     */
    HistoryOfBridgeInspectionWhereSet.prototype.toString = function () {
        if (typeof this.value === 'number') {
            return "".concat(this.field).concat(this.compare).concat(this.value);
        }
        else {
            return "".concat(this.field).concat(this.compare, "'").concat(this.value, "'");
        }
    };
    return HistoryOfBridgeInspectionWhereSet;
}());
exports.HistoryOfBridgeInspectionWhereSet = HistoryOfBridgeInspectionWhereSet;
// 数据库表[history_of_bridge_inspection]映射类
var HistoryOfBridgeInspection = /** @class */ (function () {
    function HistoryOfBridgeInspection(b_no, evaluation_time, category, b_techical_condition, treatment_measures, next_detection_time) {
        this.b_no = b_no;
        this.evaluation_time = evaluation_time;
        this.category = category;
        this.b_techical_condition = b_techical_condition;
        this.treatment_measures = treatment_measures;
        this.next_detection_time = next_detection_time;
    }
    //用于查询的字段
    HistoryOfBridgeInspection.fields = function () {
        return [
            HistoryOfBridgeInspectionFields.b_no,
            HistoryOfBridgeInspectionFields.evaluation_time,
            HistoryOfBridgeInspectionFields.category,
            HistoryOfBridgeInspectionFields.b_techical_condition,
            HistoryOfBridgeInspectionFields.treatment_measures,
            HistoryOfBridgeInspectionFields.next_detection_time
        ];
    };
    // 数据库表名
    HistoryOfBridgeInspection.table = function () {
        return 'history_of_bridge_inspection';
    };
    // 主键
    HistoryOfBridgeInspection.key = function () {
        return 'b_no';
    };
    // 插入SQL
    HistoryOfBridgeInspection.insertSQL = function (basic) {
        var fields = HistoryOfBridgeInspection.fields();
        var table = HistoryOfBridgeInspection.table();
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
    HistoryOfBridgeInspection.updateSQL = function (basic, fields) {
        if (fields === void 0) { fields = HistoryOfBridgeInspection.fields(); }
        var table = HistoryOfBridgeInspection.table();
        var key = HistoryOfBridgeInspection.key();
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
    HistoryOfBridgeInspection.deleteSQL = function (which) {
        var table = HistoryOfBridgeInspection.table();
        var key = HistoryOfBridgeInspection.key();
        if (typeof which == 'string') {
            return "delete from ".concat(table, " where ").concat(key, "='").concat(which, "'");
        }
        else {
            return "delete from ".concat(table, " where ").concat(key, "='").concat(which[key], "'");
        }
    };
    // 查询所有SQL
    HistoryOfBridgeInspection.selectAllSQL = function () {
        var table = HistoryOfBridgeInspection.table();
        return "select * from ".concat(table);
    };
    // 查询SQL 函数参数包括：字段数组，where条件数组
    HistoryOfBridgeInspection.selectSQL = function (fields, where) {
        var table = HistoryOfBridgeInspection.table();
        var w = where && where.length > 0 ? ' where ' + where.join(' and ') : '';
        var f = fields && fields.length > 0 ? fields.join(',') : '*';
        return "select ".concat(f, " from ").concat(table, " ").concat(w);
    };
    return HistoryOfBridgeInspection;
}());
exports.HistoryOfBridgeInspection = HistoryOfBridgeInspection;
