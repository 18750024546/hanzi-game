# 汉字游戏部署指南

本指南将帮助您将汉字识字涂色游戏部署到线上，支持全球访问（包括中国大陆）。

## 🚀 推荐部署方案：Vercel

**为什么选择Vercel？**
- ✅ 完全免费
- ✅ 中国大陆访问速度快
- ✅ 自动HTTPS证书
- ✅ 支持自定义域名
- ✅ 自动部署（代码更新后自动重新部署）
- ✅ 全球CDN加速

## 📋 部署前准备

### 1. 确保已安装Git
```bash
# 检查Git是否已安装
git --version
```

### 2. 拥有GitHub账号
如果没有，请访问 [GitHub](https://github.com/) 注册账号。

## 🔧 详细部署步骤

### 步骤1：创建GitHub仓库

1. 登录GitHub，点击右上角的「+」→「New repository」
2. 填写仓库信息：
   - **Repository name**: `hanzi-game`（或其他你喜欢的名字）
   - **Description**: `汉字识字涂色游戏 - 儿童学习汉字的有趣游戏`
   - 选择「Public」（公开仓库）
   - ✅ 勾选「Add a README file」
3. 点击「Create repository」

### 步骤2：上传项目代码

#### 方法A：使用Git命令行（推荐）

1. 在项目文件夹中打开命令行/终端
2. 运行部署脚本：
   ```bash
   # Windows用户
   deploy.bat
   
   # Mac/Linux用户
   chmod +x deploy.sh && ./deploy.sh
   ```
3. 按照脚本提示，执行以下命令（替换为你的仓库地址）：
   ```bash
   git remote add origin https://github.com/你的用户名/hanzi-game.git
   git push -u origin main
   ```

#### 方法B：直接上传文件

1. 在GitHub仓库页面，点击「uploading an existing file」
2. 将所有项目文件拖拽到上传区域
3. 填写提交信息：`Initial commit: 汉字识字涂色游戏`
4. 点击「Commit changes」

### 步骤3：部署到Vercel

1. **访问Vercel官网**
   - 打开 [https://vercel.com/](https://vercel.com/)
   - 点击「Continue with GitHub」

2. **授权GitHub**
   - 使用GitHub账号登录
   - 授权Vercel访问你的GitHub仓库

3. **导入项目**
   - 在Vercel控制台，点击「Import Project」
   - 选择「Import Git Repository」
   - 找到并选择你刚创建的`hanzi-game`仓库
   - 点击「Import」

4. **配置项目**
   - **Project Name**: 保持默认或自定义
   - **Framework Preset**: 选择「Other」
   - **Root Directory**: 保持默认（./）
   - **Build and Output Settings**: 保持默认
   - 点击「Deploy」

5. **等待部署完成**
   - 部署过程通常需要1-3分钟
   - 完成后会显示庆祝动画🎉
   - 获得免费的访问地址：`https://你的项目名.vercel.app`

### 步骤4：测试访问

1. 点击Vercel提供的链接
2. 确认游戏能正常运行
3. 测试各项功能：
   - 预设汉字游戏
   - 自定义汉字功能
   - 响应式布局

## 🌐 自定义域名（可选）

如果你有自己的域名，可以绑定到Vercel：

1. **在Vercel中添加域名**
   - 进入项目设置 → Domains
   - 点击「Add」，输入你的域名
   - 例如：`hanzi.yourdomain.com`

2. **配置DNS解析**
   - 在你的域名服务商控制台中
   - 添加CNAME记录：
     - **Name**: `hanzi`（或你想要的子域名）
     - **Value**: `cname.vercel-dns.com`
   - 保存设置

3. **等待生效**
   - DNS解析通常需要几分钟到几小时
   - Vercel会自动配置SSL证书
   - 完成后即可通过自定义域名访问

## 🔄 自动更新部署

配置完成后，每次你更新代码并推送到GitHub，Vercel都会自动重新部署：

```bash
# 修改代码后
git add .
git commit -m "更新游戏功能"
git push
```

几分钟后，线上网站就会自动更新！

## 🛠️ 其他部署选项

### GitHub Pages
- **优点**: 与GitHub深度集成
- **缺点**: 在中国大陆访问较慢
- **适用**: 开源项目展示

### Netlify
- **优点**: 功能丰富，支持表单处理
- **缺点**: 在中国大陆访问一般
- **适用**: 需要高级功能的项目

### Cloudflare Pages
- **优点**: 全球CDN，安全性高
- **缺点**: 在中国大陆访问不稳定
- **适用**: 对安全性要求高的项目

## 📊 访问统计

部署完成后，你可以在Vercel控制台查看：
- 访问量统计
- 性能指标
- 部署历史
- 错误日志

## 🆘 常见问题

### Q: 部署失败怎么办？
A: 检查以下几点：
- 确保所有文件都已上传到GitHub
- 检查文件名是否正确（index.html必须存在）
- 查看Vercel的部署日志

### Q: 网站访问很慢？
A: 
- Vercel在中国大陆访问速度通常很快
- 如果仍然较慢，可以考虑使用Cloudflare加速
- 检查网络连接和DNS设置

### Q: 如何更新网站内容？
A: 
- 修改本地文件
- 提交并推送到GitHub
- Vercel会自动重新部署

### Q: 可以使用免费版本吗？
A: 
- Vercel免费版本完全够用
- 支持无限静态网站
- 每月100GB流量
- 无需信用卡

## 🎉 部署完成

恭喜！你的汉字游戏现在已经可以在全球访问了。

**分享你的游戏：**
- 复制Vercel提供的链接
- 分享给朋友、家人或学生
- 在社交媒体上展示你的作品

**持续改进：**
- 根据用户反馈优化游戏
- 添加新的汉字和功能
- 定期更新和维护

---

如果在部署过程中遇到任何问题，欢迎查看项目的GitHub Issues或联系开发者。