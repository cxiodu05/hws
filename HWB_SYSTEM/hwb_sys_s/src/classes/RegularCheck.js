"use strict";
exports.__esModule = true;
exports.RegularCheck = exports.RegularCheckWhereSet = exports.RegularCheckFields = void 0;
// 数据库表regular_check 属性枚举
var RegularCheckFields;
(function (RegularCheckFields) {
    RegularCheckFields["b_no"] = "b_no";
    RegularCheckFields["main_spain_struc"] = "main_spain_struc";
    RegularCheckFields["last_repair_time"] = "last_repair_time";
    RegularCheckFields["last_inspection_time"] = "last_inspection_time";
    RegularCheckFields["the_inspection_time"] = "the_inspection_time";
    RegularCheckFields["the_inspection_climate"] = "the_inspection_climate";
    RegularCheckFields["parts"] = "parts";
    RegularCheckFields["parts_name"] = "parts_name";
    RegularCheckFields["score"] = "score";
    RegularCheckFields["defect_types"] = "defect_types";
    RegularCheckFields["defect_location"] = "defect_location";
    RegularCheckFields["defect_range"] = "defect_range";
    RegularCheckFields["defect_photo"] = "defect_photo";
    RegularCheckFields["defect_most_unfavor_comp"] = "defect_most_unfavor_comp";
    RegularCheckFields["maintenance_recommendations"] = "maintenance_recommendations";
    RegularCheckFields["whether_special_inspection"] = "whether_special_inspection";
    RegularCheckFields["full_b_cleaning"] = "full_b_cleaning";
    RegularCheckFields["prevention_repair_status"] = "prevention_repair_status";
    RegularCheckFields["record_person"] = "record_person";
    RegularCheckFields["charge_person"] = "charge_person";
    RegularCheckFields["next_check_time"] = "next_check_time"; // 下次检查时间
})(RegularCheckFields = exports.RegularCheckFields || (exports.RegularCheckFields = {}));
var RegularCheckWhereSet = /** @class */ (function () {
    /**
     *
     * @param field 字段名
     * @param value 对应的值
     * @param compare 比较符
     */
    function RegularCheckWhereSet(field, value, compare) {
        this.field = field;
        this.value = value;
        this.compare = compare;
    }
    /**
     * @override
     */
    RegularCheckWhereSet.prototype.toString = function () {
        if (typeof this.value === 'number') {
            return "".concat(this.field).concat(this.compare).concat(this.value);
        }
        else {
            return "".concat(this.field).concat(this.compare, "'").concat(this.value, "'");
        }
    };
    return RegularCheckWhereSet;
}());
exports.RegularCheckWhereSet = RegularCheckWhereSet;
// 数据库表[regular_check]映射类
var RegularCheck = /** @class */ (function () {
    function RegularCheck(b_no, main_spain_struc, last_repair_time, last_inspection_time, the_inspection_time, the_inspection_climate, parts, parts_name, score, defect_types, defect_location, defect_range, defect_photo, defect_most_unfavor_comp, maintenance_recommendations, whether_special_inspection, full_b_cleaning, prevention_repair_status, record_person, charge_person, next_check_time) {
        this.b_no = b_no;
        this.main_spain_struc = main_spain_struc;
        this.last_repair_time = last_repair_time;
        this.last_inspection_time = last_inspection_time;
        this.the_inspection_time = the_inspection_time;
        this.the_inspection_climate = the_inspection_climate;
        this.parts = parts;
        this.parts_name = parts_name;
        this.score = score;
        this.defect_types = defect_types;
        this.defect_location = defect_location;
        this.defect_range = defect_range;
        this.defect_photo = defect_photo;
        this.defect_most_unfavor_comp = defect_most_unfavor_comp;
        this.maintenance_recommendations = maintenance_recommendations;
        this.whether_special_inspection = whether_special_inspection;
        this.full_b_cleaning = full_b_cleaning;
        this.prevention_repair_status = prevention_repair_status;
        this.record_person = record_person;
        this.charge_person = charge_person;
        this.next_check_time = next_check_time;
    }
    // 用于查询的字段
    RegularCheck.fields = function () {
        return [
            RegularCheckFields.b_no,
            RegularCheckFields.main_spain_struc,
            RegularCheckFields.last_repair_time,
            RegularCheckFields.last_inspection_time,
            RegularCheckFields.the_inspection_time,
            RegularCheckFields.the_inspection_climate,
            RegularCheckFields.parts,
            RegularCheckFields.parts_name,
            RegularCheckFields.score,
            RegularCheckFields.defect_types,
            RegularCheckFields.defect_location,
            RegularCheckFields.defect_range,
            RegularCheckFields.defect_photo,
            RegularCheckFields.defect_most_unfavor_comp,
            RegularCheckFields.maintenance_recommendations,
            RegularCheckFields.whether_special_inspection,
            RegularCheckFields.full_b_cleaning,
            RegularCheckFields.prevention_repair_status,
            RegularCheckFields.record_person,
            RegularCheckFields.charge_person,
            RegularCheckFields.next_check_time
        ];
    };
    // 数据库表名
    RegularCheck.table = function () {
        return 'regular_check';
    };
    // 主键
    RegularCheck.key = function () {
        return 'b_no';
    };
    // 插入SQL
    RegularCheck.insertSQL = function (basic) {
        var fields = RegularCheck.fields();
        var table = RegularCheck.table();
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
    RegularCheck.updateSQL = function (basic, fields) {
        if (fields === void 0) { fields = RegularCheck.fields(); }
        var table = RegularCheck.table();
        var key = RegularCheck.key();
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
    RegularCheck.deleteSQL = function (which) {
        var table = RegularCheck.table();
        var key = RegularCheck.key();
        if (typeof which == 'string') {
            return "delete from ".concat(table, " where ").concat(key, "='").concat(which, "'");
        }
        else {
            return "delete from ".concat(table, " where ").concat(key, "='").concat(which[key], "'");
        }
    };
    // 查询所有SQL
    RegularCheck.selectAllSQL = function () {
        var table = RegularCheck.table();
        return "select * from ".concat(table);
    };
    // 查询SQL 函数参数包括：字段数组，where条件数组
    RegularCheck.selectSQL = function (fields, where) {
        var table = RegularCheck.table();
        var w = where && where.length > 0 ? ' where ' + where.join(' and ') : '';
        var f = fields && fields.length > 0 ? fields.join(',') : '*';
        return "select ".concat(f, " from ").concat(table, " ").concat(w);
    };
    return RegularCheck;
}());
exports.RegularCheck = RegularCheck;
