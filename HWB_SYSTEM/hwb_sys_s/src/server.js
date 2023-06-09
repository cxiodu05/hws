"use strict";
exports.__esModule = true;
var express = require("express");
var http = require("http");
var path = require("path");
var mysql_1 = require("./mysql");
//导入数据库操作类
var Bridge_1 = require("./classes/Bridge");
var BElevation_1 = require("./classes/BElevation");
var BTechIndex_1 = require("./classes/BTechIndex");
var pool = (0, mysql_1._connection_pool_init)('hwb_sys');
var app = express();
var server = http.createServer(app);
server.listen(8000, function () {
    console.log("Server on\nPort: 8000");
});
app.use(express.static(path.resolve(__dirname, 'dist')));
app.get('/', function (req, res) {
    res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
});
app.get('/login', function (req, res) {
    (0, mysql_1.get_connection)(pool).then(function (connection) {
        connection.query("SELECT * FROM user WHERE username = '".concat(req.query.user, "' AND password = '").concat(req.query.password, "';"), function (err, result) {
            connection.release();
            if (err)
                console.log(err);
            else {
                console.log(result);
                if (result.length === 0) {
                    res.send({ code: 0, msg: '用户名或密码错误' });
                }
                else {
                    res.send({ code: 1, msg: '登录成功' });
                }
            }
        });
    })["catch"](function (err) {
        console.log(err);
    });
});
app.get('/get/bridges', function (req, res) {
    (0, mysql_1.get_connection)(pool).then(function (connection) {
        connection.query(Bridge_1.Bridge.selectAllSQL(), function (err, result) {
            connection.release();
            if (err)
                console.log(err);
            else {
                res.send({ code: 1, msg: '查询成功', data: result });
            }
        });
    })["catch"](function (err) {
        console.log(err);
    });
});
app.get('/select/bridge', function (req, res) {
    var b_no = req.query.b_no;
    (0, mysql_1.get_connection)(pool).then(function (connection) {
        connection.query(Bridge_1.Bridge.selectSQL(Bridge_1.Bridge.fields(), [new Bridge_1.BridgeWhereSet(Bridge_1.BridgeFields.b_no, b_no, '=')]), function (err, result) {
            connection.release();
            if (err)
                console.log(err);
            else {
                console.log(result);
                if (result.length === 0) {
                    res.send({ code: 0, msg: '查询失败' });
                }
                else {
                    res.send({ code: 1, msg: '查询成功', data: result[0] });
                }
            }
        });
    });
});
app.get('/delete/bridge', function (req, res) {
    var b_no = req.query.b_no;
    (0, mysql_1.get_connection)(pool).then(function (connection) {
        connection.query(Bridge_1.Bridge.deleteSQL(new Bridge_1.Bridge(undefined, undefined, undefined, b_no === undefined ? 'undefined' : b_no.toString())), function (err, result) {
            connection.release();
            if (err)
                console.log(err);
            else {
                if (result.affectedRows === 0) {
                    res.send({ code: 0, msg: '删除失败' });
                }
                else {
                    res.send({ code: 1, msg: '删除成功' });
                }
            }
        });
    })["catch"](function (err) {
        console.log(err);
    });
});
app.get('/update/bridge', function (req, res) {
    var _a = req.query, route_no = _a.route_no, route_name = _a.route_name, route_level = _a.route_level, b_no = _a.b_no, b_name = _a.b_name, b_pile = _a.b_pile, feature_type = _a.feature_type, crossed_name = _a.crossed_name, crossed_pile = _a.crossed_pile, design_loads = _a.design_loads, b_slope = _a.b_slope, b_radius = _a.b_radius, compl_time = _a.compl_time, design_unit = _a.design_unit, building_unit = _a.building_unit, sup_unit = _a.sup_unit, owner_unit = _a.owner_unit, custody_unit = _a.custody_unit;
    (0, mysql_1.get_connection)(pool).then(function (connection) {
        connection.query(Bridge_1.Bridge.updateSQL(new Bridge_1.Bridge(route_no === undefined ? 'undefined' : route_no.toString(), route_name === undefined ? 'undefined' : route_name.toString(), route_level === undefined ? 'undefined' : route_level.toString(), b_no === undefined ? 'undefined' : b_no.toString(), b_name === undefined ? 'undefined' : b_name.toString(), b_pile === undefined ? 'undefined' : b_pile.toString(), feature_type === undefined ? 'undefined' : feature_type.toString(), crossed_name === undefined ? 'undefined' : crossed_name.toString(), crossed_pile === undefined ? 'undefined' : crossed_pile.toString(), design_loads === undefined ? 'undefined' : design_loads.toString(), b_slope === undefined ? undefined : Number(b_slope), b_radius === undefined ? undefined : Number(b_radius), compl_time === undefined ? 'undefined' : compl_time.toString(), design_unit === undefined ? 'undefined' : design_unit.toString(), building_unit === undefined ? 'undefined' : building_unit.toString(), sup_unit === undefined ? 'undefined' : sup_unit.toString(), owner_unit === undefined ? 'undefined' : owner_unit.toString(), custody_unit === undefined ? 'undefined' : custody_unit.toString())), function (err, result) {
            connection.release();
            if (err)
                console.log(err);
            else {
                if (result.affectedRows === 0) {
                    res.send({ code: 0, msg: '更新失败' });
                }
                else {
                    res.send({ code: 1, msg: '更新成功' });
                }
            }
        });
    })["catch"](function (err) {
        console.log(err);
    });
});
app.get('/insert/bridge', function (req, res) {
    var _a = req.query, route_no = _a.route_no, route_name = _a.route_name, route_level = _a.route_level, b_no = _a.b_no, b_name = _a.b_name, b_pile = _a.b_pile, feature_type = _a.feature_type, crossed_name = _a.crossed_name, crossed_pile = _a.crossed_pile, design_loads = _a.design_loads, b_slope = _a.b_slope, b_radius = _a.b_radius, compl_time = _a.compl_time, design_unit = _a.design_unit, building_unit = _a.building_unit, sup_unit = _a.sup_unit, owner_unit = _a.owner_unit, custody_unit = _a.custody_unit;
    (0, mysql_1.get_connection)(pool).then(function (connection) {
        connection.query(Bridge_1.Bridge.insertSQL(new Bridge_1.Bridge(route_no === undefined ? 'undefined' : route_no.toString(), route_name === undefined ? 'undefined' : route_name.toString(), route_level === undefined ? 'undefined' : route_level.toString(), b_no === undefined ? 'undefined' : b_no.toString(), b_name === undefined ? 'undefined' : b_name.toString(), b_pile === undefined ? 'undefined' : b_pile.toString(), feature_type === undefined ? 'undefined' : feature_type.toString(), crossed_name === undefined ? 'undefined' : crossed_name.toString(), crossed_pile === undefined ? 'undefined' : crossed_pile.toString(), design_loads === undefined ? 'undefined' : design_loads.toString(), b_slope === undefined ? undefined : Number(b_slope), b_radius === undefined ? undefined : Number(b_radius), compl_time === undefined ? 'undefined' : compl_time.toString(), design_unit === undefined ? 'undefined' : design_unit.toString(), building_unit === undefined ? 'undefined' : building_unit.toString(), sup_unit === undefined ? 'undefined' : sup_unit.toString(), owner_unit === undefined ? 'undefined' : owner_unit.toString(), custody_unit === undefined ? 'undefined' : custody_unit.toString())), function (err, result) {
            connection.release();
            if (err) {
                console.log(err);
                res.send({ code: 0, msg: '插入失败' });
            }
            else {
                if (result.affectedRows === 0) {
                    res.send({ code: 0, msg: '插入失败' });
                }
                else {
                    res.send({ code: 1, msg: '插入成功' });
                }
            }
        });
    })["catch"](function (err) {
        console.log(err);
    });
});
app.get('/select/btechindex', function (req, res) {
    var b_no = req.query.b_no;
    (0, mysql_1.get_connection)(pool).then(function (connection) {
        connection.query(BTechIndex_1.BTechIndex.selectSQL(BTechIndex_1.BTechIndex.fields(), [new BTechIndex_1.BTechIndexWhereSet(BTechIndex_1.BTechIndexFields.b_no, b_no, '=')]), function (err, result) {
            if (err) {
                connection.release();
                console.log(err);
                res.send({ code: 0, msg: '获取桥梁技术指标失败' });
            }
            else {
                console.log(result);
                if (result.length === 0) {
                    connection.release();
                    res.send({ code: 0, msg: '获取桥梁技术指标失败' });
                }
                else {
                    connection.query(BElevation_1.BElevation.selectSQL(BElevation_1.BElevation.fields(), [new BElevation_1.BElevationWhereSet(BElevation_1.BElevationFields.b_no, b_no, '=')]), function (err, result2) {
                        connection.release();
                        if (err) {
                            console.log(err);
                            res.send({ code: 0, msg: '获取桥面高程失败' });
                        }
                        else {
                            console.log(result2);
                            res.send({ code: 1, msg: '获取桥面高程成功', data: { bTechIndex: result[0], bElevation: result2 } });
                        }
                    });
                }
            }
        });
    });
});
app.get('/update/btechindex', function (req, res) {
    var _a = req.query, b_no = _a.b_no, b_length = _a.b_length, b_width = _a.b_width, b_car_width = _a.b_car_width, b_man_width = _a.b_man_width, guard_height = _a.guard_height, center_width = _a.center_width, b_standard_clear = _a.b_standard_clear, b_actual_clear = _a.b_actual_clear, b_understandard_level = _a.b_understandard_level, b_underactual_clear = _a.b_underactual_clear, approach_width = _a.approach_width, approach_radius = _a.approach_radius, design_waterlevel = _a.design_waterlevel, historical_waterlevel = _a.historical_waterlevel, design_peak_acceleration = _a.design_peak_acceleration, max_pan = _a.max_pan;
    (0, mysql_1.get_connection)(pool).then(function (connection) {
        connection.query(BTechIndex_1.BTechIndex.updateSQL(new BTechIndex_1.BTechIndex(b_no === undefined ? 'undefined' : b_no.toString(), b_length === undefined ? undefined : Number(b_length), b_width === undefined ? undefined : Number(b_width), b_car_width === undefined ? undefined : Number(b_car_width), b_man_width === undefined ? undefined : Number(b_man_width), guard_height === undefined ? undefined : Number(guard_height), center_width === undefined ? undefined : Number(center_width), b_standard_clear === undefined ? undefined : Number(b_standard_clear), b_actual_clear === undefined ? undefined : Number(b_actual_clear), b_understandard_level === undefined ? undefined : Number(b_understandard_level), b_underactual_clear === undefined ? undefined : Number(b_underactual_clear), approach_width === undefined ? undefined : Number(approach_width), approach_radius === undefined ? undefined : Number(approach_radius), design_waterlevel === undefined ? 'undefined' : design_waterlevel.toString(), historical_waterlevel === undefined ? 'undefined' : historical_waterlevel.toString(), design_peak_acceleration === undefined ? undefined : Number(design_peak_acceleration), max_pan === undefined ? undefined : Number(max_pan))), function (err, result) {
            if (err) {
                connection.release();
                console.log(err);
                res.send({ code: 0, msg: '更新失败' });
            }
            else {
                if (result.affectedRows === 0) {
                    connection.release();
                    res.send({ code: 0, msg: '更新失败' });
                }
                else {
                    connection.release();
                    res.send({ code: 1, msg: '更新成功' });
                }
            }
        });
    });
});
app.get('/delete/btechindex', function (req, res) {
    var b_no = req.query.b_no;
    (0, mysql_1.get_connection)(pool).then(function (connection) {
        connection.query(BTechIndex_1.BTechIndex.deleteSQL(b_no === undefined ? 'undefined' : b_no.toString()), function (err, result) {
            if (err) {
                connection.release();
                console.log(err);
                res.send({ code: 0, msg: '删除失败' });
            }
            else {
                if (result.affectedRows === 0) {
                    connection.release();
                    res.send({ code: 0, msg: '删除失败' });
                }
                else {
                    connection.release();
                    res.send({ code: 1, msg: '删除成功' });
                }
            }
        });
    });
});
app.get('/insert/btechindex', function (req, res) {
    var _a = req.query, b_no = _a.b_no, b_length = _a.b_length, b_width = _a.b_width, b_car_width = _a.b_car_width, b_man_width = _a.b_man_width, guard_height = _a.guard_height, center_width = _a.center_width, b_standard_clear = _a.b_standard_clear, b_actual_clear = _a.b_actual_clear, b_understandard_level = _a.b_understandard_level, b_underactual_clear = _a.b_underactual_clear, approach_width = _a.approach_width, approach_radius = _a.approach_radius, design_waterlevel = _a.design_waterlevel, historical_waterlevel = _a.historical_waterlevel, design_peak_acceleration = _a.design_peak_acceleration, max_pan = _a.max_pan;
    console.log(design_waterlevel, historical_waterlevel);
    (0, mysql_1.get_connection)(pool).then(function (connection) {
        connection.query(BTechIndex_1.BTechIndex.insertSQL(new BTechIndex_1.BTechIndex(b_no === undefined ? 'undefined' : b_no.toString(), b_length === undefined ? undefined : Number(b_length), b_width === undefined ? undefined : Number(b_width), b_car_width === undefined ? undefined : Number(b_car_width), b_man_width === undefined ? undefined : Number(b_man_width), guard_height === undefined ? undefined : Number(guard_height), center_width === undefined ? undefined : Number(center_width), b_standard_clear === undefined ? undefined : Number(b_standard_clear), b_actual_clear === undefined ? undefined : Number(b_actual_clear), b_understandard_level === undefined ? undefined : Number(b_understandard_level), b_underactual_clear === undefined ? undefined : Number(b_underactual_clear), approach_width === undefined ? undefined : Number(approach_width), approach_radius === undefined ? undefined : Number(approach_radius), design_waterlevel === undefined ? 'undefined' : design_waterlevel.toString(), historical_waterlevel === undefined ? 'undefined' : historical_waterlevel.toString(), design_peak_acceleration === undefined ? undefined : Number(design_peak_acceleration), max_pan === undefined ? undefined : Number(max_pan))), function (err, result) {
            if (err) {
                connection.release();
                console.log(err);
                res.send({ code: 0, msg: '已经存在' });
            }
            else {
                if (result.affectedRows === 0) {
                    connection.release();
                    res.send({ code: 0, msg: '添加失败' });
                }
                else {
                    connection.release();
                    res.send({ code: 1, msg: '添加成功' });
                }
            }
        });
    });
});
