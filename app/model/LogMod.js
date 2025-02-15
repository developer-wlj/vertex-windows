const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');
const logger = require('../libs/logger');

class LogMod {
  get (options) {
    const logFile = path.join(__dirname, `../../logs/app-${options.type}.log`);
    // const log = execSync(`tail -n 2000 ${logFile}`).toString();
    // return log;
    return fs.readFileSync(logFile, { encoding: 'utf8' }, (err, data) => {
      if (err) throw err;
      const lines = data.toString().split('\n');
      const last100Lines = lines.length>100?lines.slice(-100):lines;
      return last100Lines.join('\n')
    });
  };

  clear () {
    const files = fs.readdirSync(path.join(__dirname, '../../logs'));
    for (const file of files) {
      if (path.extname(file) === '.gz') {
        logger.info('删除日志文件', file);
        fs.unlinkSync(path.join(__dirname, '../../logs', file));
      }
    }
    return '删除日志文件成功, 详细情况查看日志';
  };
}

module.exports = LogMod;
