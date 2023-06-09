"use strict";
exports.__esModule = true;
exports.MaintenanceAndTreatmentRecords = exports.MaintenanceAndTreatmentRecordsWhereSet = exports.MaintenanceAndTreatmentRecordsFields = void 0;
// 数据库表maintenance_and_treatment_records 属性枚举
var MaintenanceAndTreatmentRecordsFields;
(function (MaintenanceAndTreatmentRecordsFields) {
    MaintenanceAndTreatmentRecordsFields["b_no"] = "b_no";
    MaintenanceAndTreatmentRecordsFields["time"] = "time";
    MaintenanceAndTreatmentRecordsFields["treatment_category"] = "treatment_category";
    MaintenanceAndTreatmentRecordsFields["treatment_reson"] = "treatment_reson";
    MaintenanceAndTreatmentRecordsFields["treatment_scope"] = "treatment_scope";
    MaintenanceAndTreatmentRecordsFields["engineering_cost"] = "engineering_cost";
    MaintenanceAndTreatmentRecordsFields["fund_source"] = "fund_source";
    MaintenanceAndTreatmentRecordsFields["treatment_quality_evaluation"] = "treatment_quality_evaluation";
    MaintenanceAndTreatmentRecordsFields["build_unit"] = "build_unit";
    MaintenanceAndTreatmentRecordsFields["design_unit"] = "design_unit";
    MaintenanceAndTreatmentRecordsFields["construction_unit"] = "construction_unit";
    MaintenanceAndTreatmentRecordsFields["supervision_unit"] = "supervision_unit"; // 监理单位
})(MaintenanceAndTreatmentRecordsFields = exports.MaintenanceAndTreatmentRecordsFields || (exports.MaintenanceAndTreatmentRecordsFields = {}));
var MaintenanceAndTreatmentRecordsWhereSet = /** @class */ (function () {
    /**
     *
     * @param field 字段名
     * @param value 对应的值
     * @param compare 比较符
     */
    function MaintenanceAndTreatmentRecordsWhereSet(field, value, compare) {
        this.field = field;
        this.value = value;
        this.compare = compare;
    }
    /**
     * @override
     */
    MaintenanceAndTreatmentRecordsWhereSet.prototype.toString = function () {
        if (typeof this.value === 'number') {
            return "".concat(this.field).concat(this.compare).concat(this.value);
        }
        else {
            return "".concat(this.field).concat(this.compare, "'").concat(this.value, "'");
        }
    };
    return MaintenanceAndTreatmentRecordsWhereSet;
}());
exports.MaintenanceAndTreatmentRecordsWhereSet = MaintenanceAndTreatmentRecordsWhereSet;
// 数据库表[maintenance_and_treatment_records]映射类
var MaintenanceAndTreatmentRecords = /** @class */ (function () {
    function MaintenanceAndTreatmentRecords(b_no, time, treatment_category, treatment_reson, treatment_scope, engineering_cost, fund_source, treatment_quality_evaluation, build_unit, design_unit, construction_unit, supervision_unit) {
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
    MaintenanceAndTreatmentRecords.fields = function () {
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
    };
    // 数据库表名
    MaintenanceAndTreatmentRecords.table = function () {
        return 'maintenance_and_treatment_records';
    };
    // 主键
    MaintenanceAndTreatmentRecords.key = function () {
        return 'b_no';
    };
    // 插入SQL
    MaintenanceAndTreatmentRecords.insertSQL = function (basic) {
        var fields = MaintenanceAndTreatmentRecords.fields();
        var table = MaintenanceAndTreatmentRecords.table();
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
    MaintenanceAndTreatmentRecords.updateSQL = function (basic, fields) {
        if (fields === void 0) { fields = MaintenanceAndTreatmentRecords.fields(); }
        var table = MaintenanceAndTreatmentRecords.table();
        var key = MaintenanceAndTreatmentRecords.key();
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
    MaintenanceAndTreatmentRecords.deleteSQL = function (which) {
        var table = MaintenanceAndTreatmentRecords.table();
        var key = MaintenanceAndTreatmentRecords.key();
        if (typeof which == 'string') {
            return "delete from ".concat(table, " where ").concat(key, "='").concat(which, "'");
        }
        else {
            return "delete from ".concat(table, " where ").concat(key, "='").concat(which[key], "'");
        }
    };
    // 查询所有SQL
    MaintenanceAndTreatmentRecords.selectAllSQL = function () {
        var table = MaintenanceAndTreatmentRecords.table();
        return "select * from ".concat(table);
    };
    // 查询SQL 函数参数包括：字段数组，where条件数组
    MaintenanceAndTreatmentRecords.selectSQL = function (fields, where) {
        var table = MaintenanceAndTreatmentRecords.table();
        var w = where && where.length > 0 ? ' where ' + where.join(' and ') : '';
        var f = fields && fields.length > 0 ? fields.join(',') : '*';
        return "select ".concat(f, " from ").concat(table, " ").concat(w);
    };
    return MaintenanceAndTreatmentRecords;
}());
exports.MaintenanceAndTreatmentRecords = MaintenanceAndTreatmentRecords;
