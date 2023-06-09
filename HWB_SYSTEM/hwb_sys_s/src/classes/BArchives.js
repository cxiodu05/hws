"use strict";
exports.__esModule = true;
exports.BArchives = exports.BArchivesWhereSet = exports.BArchivesFields = void 0;
// 数据库表b_archives 属性枚举
var BArchivesFields;
(function (BArchivesFields) {
    BArchivesFields["b_no"] = "b_no";
    BArchivesFields["design_drawings"] = "design_drawings";
    BArchivesFields["design_files"] = "design_files";
    BArchivesFields["asbuilt_drawings"] = "asbuilt_drawings";
    BArchivesFields["construction_documents"] = "construction_documents";
    BArchivesFields["acceptance_files"] = "acceptance_files";
    BArchivesFields["administrative_approval_documents"] = "administrative_approval_documents";
    BArchivesFields["regular_inspection_data"] = "regular_inspection_data";
    BArchivesFields["special_check"] = "special_check";
    BArchivesFields["previous_maintenance"] = "previous_maintenance";
    BArchivesFields["other_files"] = "other_files";
    BArchivesFields["file_form"] = "file_form";
    BArchivesFields["archicing_time"] = "archicing_time";
    BArchivesFields["release_time"] = "release_time"; // 交工时间
})(BArchivesFields = exports.BArchivesFields || (exports.BArchivesFields = {}));
var BArchivesWhereSet = /** @class */ (function () {
    /**
     *
     * @param field 字段名
     * @param value 对应的值
     * @param compare 比较符
     */
    function BArchivesWhereSet(field, value, compare) {
        this.field = field;
        this.value = value;
        this.compare = compare;
    }
    /**
     * @override
     */
    BArchivesWhereSet.prototype.toString = function () {
        if (typeof this.value === 'number') {
            return "".concat(this.field).concat(this.compare).concat(this.value);
        }
        else {
            return "".concat(this.field).concat(this.compare, "'").concat(this.value, "'");
        }
    };
    return BArchivesWhereSet;
}());
exports.BArchivesWhereSet = BArchivesWhereSet;
// 数据库表[b_archives]映射类
var BArchives = /** @class */ (function () {
    function BArchives(b_no, design_drawings, design_files, asbuilt_drawings, construction_documents, acceptance_files, administrative_approval_documents, regular_inspection_data, special_check, previous_maintenance, other_files, file_form, archicing_time, release_time) {
        this.b_no = b_no;
        this.design_drawings = design_drawings;
        this.design_files = design_files;
        this.asbuilt_drawings = asbuilt_drawings;
        this.construction_documents = construction_documents;
        this.acceptance_files = acceptance_files;
        this.administrative_approval_documents = administrative_approval_documents;
        this.regular_inspection_data = regular_inspection_data;
        this.special_check = special_check;
        this.previous_maintenance = previous_maintenance;
        this.other_files = other_files;
        this.file_form = file_form;
        this.archicing_time = archicing_time;
        this.release_time = release_time;
    }
    //用于查询的字段
    BArchives.fields = function () {
        return [
            BArchivesFields.b_no,
            BArchivesFields.design_drawings,
            BArchivesFields.design_files,
            BArchivesFields.asbuilt_drawings,
            BArchivesFields.construction_documents,
            BArchivesFields.acceptance_files,
            BArchivesFields.administrative_approval_documents,
            BArchivesFields.regular_inspection_data,
            BArchivesFields.special_check,
            BArchivesFields.previous_maintenance,
            BArchivesFields.other_files,
            BArchivesFields.file_form,
            BArchivesFields.archicing_time,
            BArchivesFields.release_time
        ];
    };
    // 数据库表名
    BArchives.table = function () {
        return 'b_archives';
    };
    // 主键
    BArchives.key = function () {
        return 'b_no';
    };
    // 插入SQL
    BArchives.insertSQL = function (basic) {
        var fields = BArchives.fields();
        var table = BArchives.table();
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
    BArchives.updateSQL = function (basic, fields) {
        if (fields === void 0) { fields = BArchives.fields(); }
        var table = BArchives.table();
        var key = BArchives.key();
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
    BArchives.deleteSQL = function (which) {
        var table = BArchives.table();
        var key = BArchives.key();
        if (typeof which == 'string') {
            return "delete from ".concat(table, " where ").concat(key, "='").concat(which, "'");
        }
        else {
            return "delete from ".concat(table, " where ").concat(key, "='").concat(which[key], "'");
        }
    };
    // 查询所有SQL
    BArchives.selectAllSQL = function () {
        var table = BArchives.table();
        return "select * from ".concat(table);
    };
    // 查询SQL 函数参数包括：字段数组，where条件数组
    BArchives.selectSQL = function (fields, where) {
        var table = BArchives.table();
        var w = where && where.length > 0 ? ' where ' + where.join(' and ') : '';
        var f = fields && fields.length > 0 ? fields.join(',') : '*';
        return "select ".concat(f, " from ").concat(table, " ").concat(w);
    };
    return BArchives;
}());
exports.BArchives = BArchives;
