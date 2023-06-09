import fs = require('fs');
import { resolve } from 'path';

export function readFile(path: string): Promise<Buffer> {
  return new Promise((resolve, reject) => {
    fs.readFile(path, (err, data) => {
      if (err) reject(err);
      else resolve(data);
    });
  });
}

export function writeFile(path: string, data: Buffer): Promise<Buffer> {
  return new Promise((resolve, reject) => {
    fs.writeFile(path, data, (err) => {
      if (err) reject(err);
      else resolve(data);
    });
  });
}