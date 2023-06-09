"use strict";
exports.__esModule = true;
exports.InitialCheck = exports.InitialCheckWhereSet = exports.InitialCheckFields = void 0;
// 数据库表initial_check 属性枚举
var InitialCheckFields;
(function (InitialCheckFields) {
    InitialCheckFields["b_no"] = "b_no";
    InitialCheckFields["up_down_struc_from"] = "up_down_struc_from";
    InitialCheckFields["b_conne_span_combi"] = "b_conne_span_combi";
    InitialCheckFields["b_constr_method"] = "b_constr_method";
    InitialCheckFields["rework_mainte_reinforce"] = "rework_mainte_reinforce";
    InitialCheckFields["after_reinfor_rescons"] = "after_reinfor_rescons";
    InitialCheckFields["archives_incom_b"] = "archives_incom_b";
    InitialCheckFields["initial_check_time"] = "initial_check_time";
    InitialCheckFields["initial_check_climate"] = "initial_check_climate";
    InitialCheckFields["Attribute_116"] = "Attribute_116";
    InitialCheckFields["dynamic_load_test_results"] = "dynamic_load_test_results";
    InitialCheckFields["record_people"] = "record_people";
    InitialCheckFields["b_initial_check_mech"] = "b_initial_check_mech"; // 桥梁初始检查机构
})(InitialCheckFields = exports.InitialCheckFields || (exports.InitialCheckFields = {}));
var InitialCheckWhereSet = /** @class */ (function () {
    /**
     *
     * @param field 字段名
     * @param value 对应的值
     * @param compare 比较符
     */
    function InitialCheckWhereSet(field, value, compare) {
        this.field = field;
        this.value = value;
        this.compare = compare;
    }
    /**
     * @override
     */
    InitialCheckWhereSet.prototype.toString = function () {
        if (typeof this.value === 'number') {
            return "".concat(this.field).concat(this.compare).concat(this.value);
        }
        else {
            return "".concat(this.field).concat(this.compare, "'").concat(this.value, "'");
        }
    };
    return InitialCheckWhereSet;
}());
exports.InitialCheckWhereSet = InitialCheckWhereSet;
// 数据库表[initial_check]映射类
var InitialCheck = /** @class */ (function () {
    function InitialCheck(b_no, up_down_struc_from, b_conne_span_combi, b_constr_method, rework_mainte_reinforce, after_reinfor_rescons, archives_incom_b, initial_check_time, initial_check_climate, Attribute_116, dynamic_load_test_results, record_people, b_initial_check_mech) {
        this.b_no = b_no;
        this.up_down_struc_from = up_down_struc_from;
        this.b_conne_span_combi = b_conne_span_combi;
        this.b_constr_method = b_constr_method;
        this.rework_mainte_reinforce = rework_mainte_reinforce;
        this.after_reinfor_rescons = after_reinfor_rescons;
        this.archives_incom_b = archives_incom_b;
        this.initial_check_time = initial_check_time;
        this.initial_check_climate = initial_check_climate;
        this.Attribute_116 = Attribute_116;
        this.dynamic_load_test_results = dynamic_load_test_results;
        this.record_people = record_people;
        this.b_initial_check_mech = b_initial_check_mech;
    }
    // 用于查询的字段
    InitialCheck.fields = function () {
        return [
            InitialCheckFields.b_no,
            InitialCheckFields.up_down_struc_from,
            InitialCheckFields.b_conne_span_combi,
            InitialCheckFields.b_constr_method,
            InitialCheckFields.rework_mainte_reinforce,
            InitialCheckFields.after_reinfor_rescons,
            InitialCheckFields.archives_incom_b,
            InitialCheckFields.initial_check_time,
            InitialCheckFields.initial_check_climate,
            InitialCheckFields.Attribute_116,
            InitialCheckFields.dynamic_load_test_results,
            InitialCheckFields.record_people,
            InitialCheckFields.b_initial_check_mech
        ];
    };
    // 数据库表名
    InitialCheck.table = function () {
        return 'initial_check';
    };
    // 主键
    InitialCheck.key = function () {
        return 'b_no';
    };
    // 插入SQL
    InitialCheck.insertSQL = function (basic) {
        var fields = InitialCheck.fields();
        var table = InitialCheck.table();
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
    InitialCheck.updateSQL = function (basic, fields) {
        if (fields === void 0) { fields = InitialCheck.fields(); }
        var table = InitialCheck.table();
        var key = InitialCheck.key();
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
    InitialCheck.deleteSQL = function (which) {
        var table = InitialCheck.table();
        var key = InitialCheck.key();
        if (typeof which == 'string') {
            return "delete from ".concat(table, " where ").concat(key, "='").concat(which, "'");
        }
        else {
            return "delete from ".concat(table, " where ").concat(key, "='").concat(which[key], "'");
        }
    };
    // 查询所有SQL
    InitialCheck.selectAllSQL = function () {
        var table = InitialCheck.table();
        return "select * from ".concat(table);
    };
    // 查询SQL 函数参数包括：字段数组，where条件数组
    InitialCheck.selectSQL = function (fields, where) {
        var table = InitialCheck.table();
        var w = where && where.length > 0 ? ' where ' + where.join(' and ') : '';
        var f = fields && fields.length > 0 ? fields.join(',') : '*';
        return "select ".concat(f, " from ").concat(table, " ").concat(w);
    };
    return InitialCheck;
}());
exports.InitialCheck = InitialCheck;
