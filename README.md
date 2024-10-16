# 前排提醒
- 基于批处理转exe制作
- 后续升级,会覆盖安装,因此需要备份data、db、torrents文件夹,可以使用vertex自带的备份功能(需要提前安装好7z)
- 安装成功, 需手动打开浏览器 http://127.0.0.1:4000  
  默认用户名: `admin`  
  密码: `admin`

# VERTEX

<img src="https://raw.githubusercontent.com/vertex-app/vertex/stable/webui/public/assets/images/logo.svg" width="144"/>

#### 适用于 PT 玩家的追剧刷流一体化综合管理工具

#### 交流群组

[VERTEX](https://t.me/group\_vertex)

#### 特别事项

Vertex 目前已处于不新增功能，仅做问题修复的状态。

#### Wiki
[https://wiki.vertex-app.top](https://wiki.vertex-app.top)

#### 打赏，如果你觉得这个项目对你有帮助，可以对我打赏，感谢！

<figure><img src="https://lswl.in/assets/images/alipay_qrcode.png" alt="" width="375"><figcaption></figcaption></figure>

### Contribute
#### 开发环境
Node.js v14.17.0  
npm 6.14.13

#### 拉取代码
Fork 本仓库后拉取到本地

#### 安装依赖
``` bash
cd vertex
npm i --save-dev
cd webui
npm i --save-dev --legacy-peer-deps
```

#### 目录结构
```
.
├── app                   # 后端
│   ├── app.js            # 程序入口
│   ├── common            # 基本类
│   ├── config            # 配置文件
│   ├── controller        # Controller
│   ├── data              # 持久数据存放目录 （具体生成逻辑参考 docker/start.sh）
│   ├── libs              # 工具文件夹
│   ├── model             # Model
│   ├── routes            # 路由
│   └── script            # 脚本文件夹 （已弃用）
├── docker                # docker 相关
│   ├── Dockerfile
│   └── start.sh
├── LICENSE
├── nodemon.json
├── package.json
├── package-lock.json
├── README.md
├── webhook               # Webhook 资源相关
│   └── EmbySXPackage
└── webui                 # 前端
    ├── babel.config.js
    ├── cyber.js
    ├── dark.js
    ├── light.js
    ├── package.json
    ├── package-lock.json
    ├── public
    │   ├── assets
    │   └── index.html
    ├── src
    │   ├── api           # 请求 api
    │   ├── App.vue       #
    │   ├── main.js       # 入口
    │   ├── pages         # 页面 .vue
    │   ├── routes        # 路由
    │   ├── style         # 主题相关
    │   └── util          # 工具类
    └── vue.config.js
```

#### 启动
``` bash
# 安装 nodemon
npm i -g nodemon

# 终端 1 启动后端
cd vertex
npm run app

# 终端 2 启动 vue-server
cd webui
npm run serve
```
