# 🎮 AI游乐场 · 无限AI小游戏市场

前后端分离的 AI 小游戏平台，前端 Vue 3 + Vite，后端 Python Flask + SQLite。

---

## 📁 项目结构

```
game_market_vue/
├── backend/                  # Python Flask 后端
│   ├── app.py                # Flask 应用工厂
│   ├── config.py             # 配置项
│   ├── init_db.py            # SQLite 数据库初始化
│   ├── mock_data.py          # Mock 数据源
│   ├── requirements.txt      # Python 依赖
│   ├── models/               # 数据模型（dataclass）
│   │   ├── game.py
│   │   ├── user.py
│   │   ├── comment.py
│   │   └── achievement.py
│   ├── routes/               # API 路由
│   │   ├── api.py            # 游戏、评论、成就接口
│   │   └── auth.py           # 注册、登录、用户信息接口
│   ├── services/             # 业务逻辑层
│   │   ├── game_service.py
│   │   ├── user_service.py
│   │   └── counter_service.py
│   └── auth/                 # JWT 认证模块
│       ├── jwt_utils.py
│       └── decorators.py
├── frontend/                 # Vue 3 前端
│   ├── index.html
│   ├── vite.config.js
│   ├── package.json
│   └── src/
│       ├── main.js
│       ├── App.vue
│       ├── router/index.js
│       ├── stores/auth.js    # 认证状态管理
│       ├── utils/analytics.js# 百度统计
│       ├── api/index.js      # API 请求封装
│       ├── assets/           # 样式、图片
│       ├── components/       # 通用组件
│       │   ├── NavBar.vue
│       │   ├── Footer.vue
│       │   ├── GameCard.vue
│       │   └── UserMenu.vue
│       └── views/            # 页面
│           ├── HomePage.vue
│           ├── GameList.vue
│           ├── GameDetail.vue
│           ├── LoginPage.vue
│           ├── RegisterPage.vue
│           ├── AboutPage.vue
│           └── NotFound.vue
├── run.py                    # 统一启动入口
├── .env.dev              # 环境变量配置模板
└── data/                     # SQLite 数据库文件（gitignore）
```

---

## 🚀 快速开始

### 环境要求
- Python >= 3.10
- Node.js >= 18（推荐 v20 LTS）
- npm >= 9（安装 Node.js 时会自动附带）
- 生产服务器：Ubuntu 20.04 / 22.04 / 24.04

### 安装 Python

**方式一：Ubuntu（生产环境）**

Ubuntu 20.04+ 自带 Python 3，但版本可能较旧。推荐使用 deadsnakes PPA 安装较新版本：

```bash
# 安装 Python 3.12
sudo apt update
sudo apt install -y software-properties-common
sudo add-apt-repository -y ppa:deadsnakes/ppa
sudo apt install -y python3.12 python3.12-venv python3.12-dev
sudo apt install -y python3-pip

# 设置 python3 指向新版本
sudo update-alternatives --install /usr/bin/python3 python3 /usr/bin/python3.12 1

# 验证
python3 --version    # 应输出 Python 3.12.x
pip3 --version
```

**方式二：macOS Homebrew**

```bash
brew install python@3.12
python3 --version
```

**方式三：使用 pyenv 版本管理（推荐开发者，macOS / Linux 通用）**

```bash
# 安装 pyenv
curl https://pyenv.run | bash

# 按提示将 pyenv 添加到 shell 配置（~/.zshrc 或 ~/.bashrc）
echo 'export PYENV_ROOT="$HOME/.pyenv"' >> ~/.zshrc
echo '[[ -d $PYENV_ROOT/bin ]] && export PATH="$PYENV_ROOT/bin:$PATH"' >> ~/.zshrc
echo 'eval "$(pyenv init -)"' >> ~/.zshrc

# 重新打开终端后，安装 Python
pyenv install 3.12.5
pyenv global 3.12.5
python3 --version
```

### 安装 Node.js

**方式一：官网下载（推荐新手）**

前往 https://nodejs.org 下载 **LTS 版本**（左侧按钮），安装后打开终端验证：

```bash
node --version   # 应输出 v18.x.x 或 v20.x.x
npm --version    # 应输出 9.x.x 或 10.x.x
```

**方式二：使用 nvm 版本管理（推荐开发者）**

```bash
# 安装 nvm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash

# 重新打开终端后，安装 Node.js LTS
nvm install --lts

# 使用该版本
nvm use --lts

# 验证
node --version
npm --version
```

**方式三：macOS Homebrew**

```bash
brew install node@20
brew link --overwrite node@20
node --version
```

### 1. 创建 Python 虚拟环境

```bash
# 在项目根目录创建 .venv
python3 -m venv .venv

# 激活虚拟环境
source .venv/bin/activate      # macOS / Linux
# 或
.venv\Scripts\activate         # Windows

# 安装后端依赖
pip install -r backend/requirements.txt
```

### 2. 安装前端依赖

```bash
cd frontend
npm install
cd ..
```

### 3. 配置环境变量（可选）

```bash
cp .env.dev .env
# 根据需要编辑 .env，默认配置即可直接运行
```

### 4. 配置环境文件

项目自带三个环境配置文件，按需编辑即可：

```bash
# 开发环境（默认）
vim .env.dev

# 预生产环境
# vim .env.pre

# 生产环境
# vim .env.prod
```

### 5. 启动项目

```bash
# 开发环境（默认，Mock 模式 + Vite 热更新）
python run.py

# 预生产环境
python run.py --env pre --dev

# 生产环境（构建 + 启动）
python run.py --env prod

# 仅启动后端 API
python run.py --env pre
```

访问 `http://localhost:5173` 即可看到前端页面。

---

## 🎮 启动模式

| 命令 | 环境 | 说明 |
|---|---|---|
| `python run.py` | dev | 后端 API + Vite 热更新（默认），Mock 模式 |
| `python run.py --env pre` | pre | 仅后端 API（默认），SQLite 持久化 |
| `python run.py --api` | dev | 仅后端 API，Mock 模式 |
| `python run.py --env pre --dev` | pre | 后端 + Vite 热更新，SQLite 持久化 |
| `python run.py --env prod` | prod | 构建前端 + Flask 生产部署 |
| `python run.py --env prod --dev` | prod | 生产环境配置 + Vite 热更新（调试用） |

### 环境配置说明

各环境的配置差异（通过 `.env.dev` / `.env.pre` / `.env.prod` 控制）：

| 配置项 | dev | pre | prod |
|---|---|---|---|
| `USE_MOCK_DATA` | `true` | `false` | `false` |
| `USE_MOCK_REDIS` | `true` | `false` | `false` |
| `FLASK_DEBUG` | `1` | `0` | `0` |
| 默认端口 | 5001 | 5002 | 5001 |
| SQLite 数据库 | `data/app.db` | `data/pre.db` | `data/prod.db` |

首次运行时，`init_db.py` 会自动创建数据库并灌入种子数据。

---

## 🔐 演示账号

| 邮箱 | 密码 | 说明 |
|---|---|---|
| `demo@playground.ai` | `demo123` | 演示用户，预置在种子数据中 |

---

## 📡 API 概览

| 方法 | 路径 | 说明 | 认证 |
|---|---|---|---|
| GET | `/api/games` | 游戏列表（支持分页、搜索、筛选） | — |
| GET | `/api/games/<id>` | 游戏详情 | — |
| GET | `/api/games/hot` | 热门游戏 | — |
| GET | `/api/games/new` | 最新游戏 | — |
| GET | `/api/games/recommended` | 推荐游戏 | — |
| GET | `/api/games/types` | 游戏分类 | — |
| GET | `/api/games/stats` | 平台统计 | — |
| POST | `/api/games/<id>/play` | 记录试玩 | — |
| GET | `/api/games/<id>/comments` | 游戏评论列表 | — |
| POST | `/api/games/<id>/comments` | 发表评论 | 可选（登录后关联用户） |
| GET | `/api/games/<id>/achievements` | 游戏成就列表 | — |
| POST | `/api/auth/register` | 用户注册 | — |
| POST | `/api/auth/login` | 用户登录（邮箱+密码） | — |
| GET | `/api/auth/profile` | 获取用户信息 | Bearer Token |
| PUT | `/api/auth/profile` | 更新用户资料 | Bearer Token |

---

## 🧩 游戏存储

游戏 HTML 文件存放在外部目录，通过环境变量 `GAMES_STORAGE_DIR` 配置：

```bash
# 默认路径
# /Users/shareit/work_space/www/ai_code/game_store

# 自定义路径
export GAMES_STORAGE_DIR=/path/to/your/game/store
python scripts/init_storage.py --path /path/to/your/game/store
```

---

## 📊 百度统计

生产环境构建时自动启用，在 `frontend/.env.production` 中配置站点 ID：

```env
VITE_BAIDU_ANALYTICS_ID=your_site_id
```

支持功能：
- 页面访问 PV 追踪（SPA 路由切换自动上报）
- 游戏试玩事件追踪（开始试玩 / 退出试玩 / 试玩时长）
- 用户身份关联（登录后自动关联 `user_id` 自定义维度）

---

## ⚠️ 注意事项

### Python 虚拟环境

- 虚拟环境创建在项目根目录的 `.venv/` 下（已在 `.gitignore` 中排除）
- 如果使用 IDE（PyCharm / VSCode），确保将 `.venv/bin/python` 设为项目解释器
- 添加新依赖后，同步更新 `backend/requirements.txt`
- `.venv` 中的 `flask-cors` 和 `pyjwt` 需手动确认安装成功（`pip list` 显示不等于可 import，需检查 `site-packages` 目录）

### SQLite 数据库

- 数据库文件位于 `data/app.db`（已在 `.gitignore` 中排除）
- 如需重置数据库：`rm -f data/app.db && python backend/init_db.py`
- Mock 模式下不会读写 SQLite 文件

### 前端

- 使用 `createWebHistory()` 路由模式，生产部署需 Web 服务器配置 fallback（所有路径指向 `index.html`）
- Vite 开发服务器默认 `localhost:5173`，API 请求通过 proxy 转发到 `localhost:5001`

### 安全

- `SECRET_KEY` 用于 JWT 签名，生产环境请修改为足够长的随机字符串（建议 32 字节以上）
- 当前无 HTTPS 配置，微信分享等功能需要 HTTPS 支持
- 用户密码使用 `werkzeug.security` 的 `generate_password_hash` 加密存储
