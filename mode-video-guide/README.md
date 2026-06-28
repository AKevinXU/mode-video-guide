# 模式视频号深度拆解

> 模式策划 & 系统开发服务商专用的视频号营销知识库
> 包含算法拆解、制作流程、内容矩阵、引流策略、脚本模板、合规指南、系统展示等8大模块

## 🚀 快速部署到 GitHub Pages

### 步骤1：创建 GitHub 仓库

1. 登录 [GitHub](https://github.com)
2. 点击右上角 `+` → `New repository`
3. 仓库名称填写：`mode-video-guide`（或你喜欢的名称）
4. 选择 `Public`（公开仓库才能使用 GitHub Pages 免费托管）
5. 点击 `Create repository`

### 步骤2：上传文件

**方法A：直接上传（推荐新手）**

1. 在新创建的仓库页面，点击 `uploading an existing file`
2. 将本项目的所有文件拖拽到上传区域
3. 点击 `Commit changes`

**方法B：Git 命令行（推荐开发者）**

```bash
git clone https://github.com/你的用户名/mode-video-guide.git
cd mode-video-guide
# 复制本项目所有文件到仓库目录
git add .
git commit -m "Initial commit"
git push origin main
```

### 步骤3：启用 GitHub Pages

1. 进入仓库的 `Settings` → `Pages`
2. Source 选择 `Deploy from a branch`
3. Branch 选择 `main`，文件夹选择 `/ (root)`
4. 点击 `Save`
5. 等待 1-2 分钟，访问：`https://你的用户名.github.io/mode-video-guide`

## 🔐 修改访问密码

默认密码是 `mode2026`，建议修改：

打开 `static/app.js`，找到第2行：
```javascript
const CORRECT_PASSWORD = 'mode2026';
```

## 📁 项目结构

```
mode-video-guide/
├── index.html              # 登录页（密码保护）
├── dashboard.html          # 仪表板
├── upload.html            # 上传文档页
├── *.html                 # 8个文档页面
├── static/
│   ├── style.css          # 样式
│   └── app.js             # 交互逻辑
├── docs/
│   └── *.md               # Markdown 文档（可下载编辑）
└── README.md
```

## 📝 添加自己的模式文档

1. 将文档放入 `docs/` 文件夹
2. 在 `upload.html` 页面添加文档链接
3. 提交到 GitHub，自动部署

## 🔒 权限说明

- 所有文档需要登录才能查看
- 密码存储在 `static/app.js` 中（前端验证）
- 登录状态通过 localStorage 保存（24小时有效）
- 适合内容保护，不适合高安全场景

## 🛠️ 技术栈

- 纯 HTML + CSS + JavaScript（无框架）
- GitHub Pages 免费托管
- 深色商务风设计

---

*模式策划 & 系统开发 · 一站式交付*
