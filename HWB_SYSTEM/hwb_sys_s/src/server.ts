import { Request, Application, Express, Response } from 'express';
import express = require('express');
import * as http from 'http';
import * as path from 'path';
import { readFile, writeFile } from './promises/fs';
import { _connection_pool_init, get_connection } from './mysql';

//导入数据库操作类
import { Bridge, BridgeFields, BridgeWhereSet } from "./classes/Bridge";
import { InitialCheck, InitialCheckFields, InitialCheckWhereSet } from './classes/InitialCheck';
import { RegularCheck, RegularCheckFields, RegularCheckWhereSet } from './classes/RegularCheck';
import { BArchives, BArchivesFields, BArchivesWhereSet } from './classes/BArchives';
import { HistoryOfBridgeInspection, HistoryOfBridgeInspectionFields, HistoryOfBridgeInspectionWhereSet } from './classes/HistoryOfBridgeInspection';
import { MaintenanceAndTreatmentRecords, MaintenanceAndTreatmentRecordsFields, MaintenanceAndTreatmentRecordsWhereSet } from './classes/MaintenanceAndTreatmentRecords';
import { MattersToBeExplained, MattersToBeExplainedFields, MattersToBeExplainedWhereSet } from './classes/MattersToBeExplained';
import { Other, OtherFields, OtherWhereSet } from './classes/Other';
import { BElevation, BElevationFields, BElevationWhereSet } from './classes/BElevation';
import { BTechIndex, BTechIndexFields, BTechIndexWhereSet } from './classes/BTechIndex';

const pool = _connection_pool_init('hwb_sys');

const app: Application = express();

const server = http.createServer(app);

server.listen(8000, () => {
  console.log(`Server on\nPort: 8000`);
});

app.use(express.static(path.resolve(__dirname, 'dist')));

app.get('/', (req: Request, res: Response) => {
  res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
});

app.get('/login', (req: Request, res: Response) => {
  get_connection(pool).then((connection) => {
    connection.query(`SELECT * FROM user WHERE username = '${req.query.user}' AND password = '${req.query.password}';`, (err, result) => {
      connection.release();
      if (err) console.log(err);
      else {
        console.log(result);

        if (result.length === 0) {
          res.send({ code: 0, msg: '用户名或密码错误' });
        } else {
          res.send({ code: 1, msg: '登录成功' });
        }
      }
    })
  }).catch((err) => {
    console.log(err);
  })
});

app.get('/get/bridges', (req: Request, res: Response) => {
  get_connection(pool).then((connection) => {
    connection.query(Bridge.selectAllSQL(), (err, result) => {
      connection.release();
      if (err) console.log(err);
      else {
        res.send({ code: 1, msg: '查询成功', data: result });
      }
    })
  }).catch((err) => {
    console.log(err);
  })
});

app.get('/select/bridge', (req: Request, res: Response) => {
  const { b_no } = req.query;
  get_connection(pool).then(connection => {
    connection.query(Bridge.selectSQL(Bridge.fields(), [new BridgeWhereSet(BridgeFields.b_no, b_no, '=')]), (err, result) => {
      connection.release();
      if (err) console.log(err);
      else {
        console.log(result);
        if (result.length === 0) {
          res.send({ code: 0, msg: '查询失败' })
        }
        else {
          res.send({ code: 1, msg: '查询成功', data: result[0] })
        }
      }
    })
  })
})

app.get('/delete/bridge', (req: Request, res: Response) => {
  const { b_no } = req.query;
  get_connection(pool).then((connection) => {
    connection.query(Bridge.deleteSQL(new Bridge(undefined, undefined, undefined, b_no === undefined ? 'undefined' : b_no.toString())), (err, result) => {
      connection.release();
      if (err) console.log(err);
      else {
        if (result.affectedRows === 0) {
          res.send({ code: 0, msg: '删除失败' });
        } else {
          res.send({ code: 1, msg: '删除成功' });
        }

      }
    })
  }).catch((err) => {
    console.log(err);
  })
});

app.get('/update/bridge', (req: Request, res: Response) => {
  const { route_no, route_name, route_level, b_no, b_name, b_pile, feature_type, crossed_name, crossed_pile, design_loads, b_slope, b_radius, compl_time, design_unit, building_unit, sup_unit, owner_unit, custody_unit } = req.query;
  get_connection(pool).then((connection) => {
    connection.query(Bridge.updateSQL(new Bridge(
      route_no === undefined ? 'undefined' : route_no.toString(),
      route_name === undefined ? 'undefined' : route_name.toString(),
      route_level === undefined ? 'undefined' : route_level.toString(),
      b_no === undefined ? 'undefined' : b_no.toString(),
      b_name === undefined ? 'undefined' : b_name.toString(),
      b_pile === undefined ? 'undefined' : b_pile.toString(),
      feature_type === undefined ? 'undefined' : feature_type.toString(),
      crossed_name === undefined ? 'undefined' : crossed_name.toString(),
      crossed_pile === undefined ? 'undefined' : crossed_pile.toString(),
      design_loads === undefined ? 'undefined' : design_loads.toString(),
      b_slope === undefined ? undefined : Number(b_slope),
      b_radius === undefined ? undefined : Number(b_radius),
      compl_time === undefined ? 'undefined' : compl_time.toString(),
      design_unit === undefined ? 'undefined' : design_unit.toString(),
      building_unit === undefined ? 'undefined' : building_unit.toString(),
      sup_unit === undefined ? 'undefined' : sup_unit.toString(),
      owner_unit === undefined ? 'undefined' : owner_unit.toString(),
      custody_unit === undefined ? 'undefined' : custody_unit.toString()
    )), (err, result) => {
      connection.release();
      if (err) console.log(err);
      else {
        if (result.affectedRows === 0) {
          res.send({ code: 0, msg: '更新失败' });
        } else {
          res.send({ code: 1, msg: '更新成功' });
        }

      }
    })
  }).catch((err) => {
    console.log(err);
  })
});

app.get('/insert/bridge', (req: Request, res: Response) => {
  const { route_no, route_name, route_level, b_no, b_name, b_pile, feature_type, crossed_name, crossed_pile, design_loads, b_slope, b_radius, compl_time, design_unit, building_unit, sup_unit, owner_unit, custody_unit } = req.query;
  get_connection(pool).then((connection) => {
    connection.query(Bridge.insertSQL(new Bridge(
      route_no === undefined ? 'undefined' : route_no.toString(),
      route_name === undefined ? 'undefined' : route_name.toString(),
      route_level === undefined ? 'undefined' : route_level.toString(),
      b_no === undefined ? 'undefined' : b_no.toString(),
      b_name === undefined ? 'undefined' : b_name.toString(),
      b_pile === undefined ? 'undefined' : b_pile.toString(),
      feature_type === undefined ? 'undefined' : feature_type.toString(),
      crossed_name === undefined ? 'undefined' : crossed_name.toString(),
      crossed_pile === undefined ? 'undefined' : crossed_pile.toString(),
      design_loads === undefined ? 'undefined' : design_loads.toString(),
      b_slope === undefined ? undefined : Number(b_slope),
      b_radius === undefined ? undefined : Number(b_radius),
      compl_time === undefined ? 'undefined' : compl_time.toString(),
      design_unit === undefined ? 'undefined' : design_unit.toString(),
      building_unit === undefined ? 'undefined' : building_unit.toString(),
      sup_unit === undefined ? 'undefined' : sup_unit.toString(),
      owner_unit === undefined ? 'undefined' : owner_unit.toString(),
      custody_unit === undefined ? 'undefined' : custody_unit.toString()
    )), (err, result) => {
      connection.release();
      if (err) {
        console.log(err);
        res.send({ code: 0, msg: '插入失败' });
      }
      else {
        if (result.affectedRows === 0) {
          res.send({ code: 0, msg: '插入失败' });
        } else {
          res.send({ code: 1, msg: '插入成功' });
        }
      }
    })
  }).catch((err) => {
    console.log(err);
  })
})


app.get('/select/btechindex', (req: Request, res: Response) => {
  const { b_no } = req.query;
  get_connection(pool).then(connection => {
    connection.query(BTechIndex.selectSQL(BTechIndex.fields(), [new BTechIndexWhereSet(BTechIndexFields.b_no, b_no, '=')]), (err, result) => {
      if (err) {
        connection.release();
        console.log(err);
        res.send({ code: 0, msg: '获取桥梁技术指标失败' })
      }
      else {
        console.log(result);
        if (result.length === 0) {
          connection.release();
          res.send({ code: 0, msg: '获取桥梁技术指标失败' })
        }
        else {
          connection.query(BElevation.selectSQL(BElevation.fields(), [new BElevationWhereSet(BElevationFields.b_no, b_no, '=')]), (err, result2) => {
            connection.release();
            if (err) {
              console.log(err);
              res.send({ code: 0, msg: '获取桥面高程失败' })
            }
            else {
              console.log(result2);
              res.send({ code: 1, msg: '获取桥面高程成功', data: { bTechIndex: result[0], bElevation: result2 } })
            }
          })
        }
      }
    })
  })
})

app.get('/update/btechindex', (req: Request, res: Response) => {
  const { b_no, b_length, b_width, b_car_width, b_man_width, guard_height, center_width, b_standard_clear, b_actual_clear, b_understandard_level, b_underactual_clear, approach_width, approach_radius, design_waterlevel, historical_waterlevel, design_peak_acceleration, max_pan } = req.query;
  get_connection(pool).then(connection => {
    connection.query(BTechIndex.updateSQL(new BTechIndex(
      b_no === undefined ? 'undefined' : b_no.toString(),
      b_length === undefined ? undefined : Number(b_length),
      b_width === undefined ? undefined : Number(b_width),
      b_car_width === undefined ? undefined : Number(b_car_width),
      b_man_width === undefined ? undefined : Number(b_man_width),
      guard_height === undefined ? undefined : Number(guard_height),
      center_width === undefined ? undefined : Number(center_width),
      b_standard_clear === undefined ? undefined : Number(b_standard_clear),
      b_actual_clear === undefined ? undefined : Number(b_actual_clear),
      b_understandard_level === undefined ? undefined : Number(b_understandard_level),
      b_underactual_clear === undefined ? undefined : Number(b_underactual_clear),
      approach_width === undefined ? undefined : Number(approach_width),
      approach_radius === undefined ? undefined : Number(approach_radius),
      design_waterlevel === undefined ? 'undefined' : design_waterlevel.toString(),
      historical_waterlevel === undefined ? 'undefined' : historical_waterlevel.toString(),
      design_peak_acceleration === undefined ? undefined : Number(design_peak_acceleration),
      max_pan === undefined ? undefined : Number(max_pan)
    )), (err, result) => {
      if (err) {
        connection.release();
        console.log(err);
        res.send({ code: 0, msg: '更新失败' });
      }
      else {
        if (result.affectedRows === 0) {
          connection.release();
          res.send({ code: 0, msg: '更新失败' });
        } else {
          connection.release();
          res.send({ code: 1, msg: '更新成功' });
        }
      }
    })
  })
})

app.get('/delete/btechindex', (req: Request, res: Response) => {
  const { b_no } = req.query;
  get_connection(pool).then(connection => {
    connection.query(BTechIndex.deleteSQL(b_no === undefined ? 'undefined' : b_no.toString()), (err, result) => {
      if (err) {
        connection.release();
        console.log(err);
        res.send({ code: 0, msg: '删除失败' });
      }
      else {
        if (result.affectedRows === 0) {
          connection.release();
          res.send({ code: 0, msg: '删除失败' });
        } else {
          connection.release();
          res.send({ code: 1, msg: '删除成功' });
        }
      }
    })
  })
})

app.get('/insert/btechindex', (req: Request, res: Response) => {
  const { b_no, b_length, b_width, b_car_width, b_man_width, guard_height, center_width, b_standard_clear, b_actual_clear, b_understandard_level, b_underactual_clear, approach_width, approach_radius, design_waterlevel, historical_waterlevel, design_peak_acceleration, max_pan } = req.query;
  console.log(design_waterlevel, historical_waterlevel);
  
  get_connection(pool).then(connection => {
    connection.query(BTechIndex.insertSQL(new BTechIndex(
      b_no === undefined ? 'undefined' : b_no.toString(),
      b_length === undefined ? undefined : Number(b_length),
      b_width === undefined ? undefined : Number(b_width),
      b_car_width === undefined ? undefined : Number(b_car_width),
      b_man_width === undefined ? undefined : Number(b_man_width),
      guard_height === undefined ? undefined : Number(guard_height),
      center_width === undefined ? undefined : Number(center_width),
      b_standard_clear === undefined ? undefined : Number(b_standard_clear),
      b_actual_clear === undefined ? undefined : Number(b_actual_clear),
      b_understandard_level === undefined ? undefined : Number(b_understandard_level),
      b_underactual_clear === undefined ? undefined : Number(b_underactual_clear),
      approach_width === undefined ? undefined : Number(approach_width),
      approach_radius === undefined ? undefined : Number(approach_radius),
      design_waterlevel === undefined ? 'undefined' : design_waterlevel.toString(),
      historical_waterlevel === undefined ? 'undefined' : historical_waterlevel.toString(),
      design_peak_acceleration === undefined ? undefined : Number(design_peak_acceleration),
      max_pan === undefined ? undefined : Number(max_pan)
    )), (err, result) => {
      if (err) {
        connection.release();
        console.log(err);
        res.send({ code: 0, msg: '已经存在' });
      }
      else {
        if (result.affectedRows === 0) {
          connection.release();
          res.send({ code: 0, msg: '添加失败' });
        } else {
          connection.release();
          res.send({ code: 1, msg: '添加成功' });
        }
      }
    })
  })
})