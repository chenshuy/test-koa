// config.js
const config = {
  database: 'todo', // 使用哪个数据库
  username: 'root', // 用户名
  password: '123456', // 口令
  host: 'localhost', // 主机名
  port: 3306, // 端口号，MySQL默认3306
  secret: 'jwt-secret' // jwt 验证
}

module.exports = config
