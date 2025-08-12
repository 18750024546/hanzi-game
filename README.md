# 识字涂色游戏

一个有趣的汉字学习游戏，帮助儿童通过游戏的方式学习和识别汉字。

## 🎮 游戏特色

### 预设汉字学习
- **8个常用汉字**：花、草、树、鸟、水、火、山、月
- **智能混淆字符**：每个汉字配备20个相似或相关的混淆字符
- **精确难度控制**：每个汉字固定3个目标字符，确保游戏平衡
- **美观的主题色彩**：每个汉字都有独特的渐变背景色

### 自定义汉字功能
- **自由输入目标汉字**：支持任意单个汉字
- **自定义混淆字符**：用户可以输入自己的混淆字符列表
- **灵活的目标数量**：可选择2-5个目标字符
- **智能验证**：确保输入的有效性和游戏可玩性

### 游戏体验
- **双圈布局系统**：最多16个字符按钮的智能排列
- **浮动动效**：字符按钮带有上下浮动动画和随机延迟
- **错误反馈**：错误点击时的震动动画和音效
- **语音播报**：支持汉字发音功能
- **进度显示**：实时显示游戏进度和完成状态

### 界面设计
- **响应式布局**：完美适配桌面和移动设备
- **现代化UI**：使用Tailwind CSS构建的美观界面
- **流畅动画**：丰富的CSS动画效果
- **直观操作**：简单易懂的用户界面

## 🚀 快速开始

### 在线体验
项目已部署到Vercel，支持全球访问（包括中国大陆）：
- **主要访问地址**：[https://your-project.vercel.app](https://your-project.vercel.app)
- **备用访问地址**：[GitHub Pages](https://your-username.github.io/your-repo-name/)

### 本地运行

1. 克隆项目到本地：
```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
```

2. 启动本地服务器：
```bash
# 使用Python
python -m http.server 8000

# 或使用Node.js
npx serve .

# 或使用Live Server扩展（VS Code）
npx serve .

# 或使用PHP
php -S localhost:8000
```

3. 在浏览器中访问 `http://localhost:8000`

## 🌐 部署到线上

### 使用Vercel部署（推荐）

Vercel是最适合静态网站部署的平台，在中国大陆访问速度快，完全免费。

#### 步骤1：准备GitHub仓库
1. 在GitHub上创建一个新仓库
2. 将项目文件上传到仓库：
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/你的用户名/你的仓库名.git
   git push -u origin main
   ```

#### 步骤2：部署到Vercel
1. 访问 [Vercel官网](https://vercel.com/)
2. 点击「Continue with GitHub」使用GitHub账号登录
3. 点击「Import Project」导入项目
4. 选择你刚创建的GitHub仓库
5. 保持默认设置，点击「Deploy」
6. 等待部署完成，获得免费的 `.vercel.app` 域名

#### 步骤3：自定义域名（可选）
1. 在Vercel项目设置中点击「Domains」
2. 添加你的自定义域名
3. 按照提示配置DNS解析（CNAME记录指向 `cname.vercel-dns.com`）
4. 等待SSL证书自动配置完成

### 其他部署选项

#### GitHub Pages
1. 在仓库设置中启用GitHub Pages
2. 选择部署分支（通常是main分支）
3. 访问 `https://你的用户名.github.io/你的仓库名/`

#### Netlify
1. 访问 [Netlify](https://www.netlify.com/)
2. 连接GitHub仓库
3. 自动部署并获得免费域名

## 📁 项目结构

```
识字涂色游戏/
├── index.html          # 主页面文件
├── styles.css          # 样式文件
├── script.js           # JavaScript逻辑
└── README.md           # 项目说明文档
```

## 🎯 游戏玩法

### 预设汉字模式
1. 在首页选择想要学习的汉字
2. 在圆形布局中找到并点击所有目标汉字
3. 正确点击会有蓝色高亮效果
4. 错误点击会有红色震动效果和错误音效
5. 找到所有目标汉字后显示完成页面

### 自定义汉字模式
1. 点击"自定义汉字"按钮
2. 输入目标汉字（单个字符）
3. 输入混淆字符（用空格分隔，至少10个）
4. 选择目标字符数量（2-5个）
5. 点击"开始游戏"开始自定义游戏

## 🛠️ 技术栈

- **HTML5**：页面结构
- **CSS3**：样式和动画效果
- **JavaScript (ES6+)**：游戏逻辑和交互
- **Tailwind CSS**：现代化CSS框架
- **Web Audio API**：错误音效
- **Speech Synthesis API**：语音播报

## 📱 浏览器兼容性

- Chrome 60+
- Firefox 55+
- Safari 11+
- Edge 79+
- 移动端浏览器

## 🚀 部署到GitHub Pages

1. 将项目推送到GitHub仓库
2. 在仓库设置中启用GitHub Pages
3. 选择主分支作为源
4. 访问生成的GitHub Pages链接

## 🤝 贡献指南

欢迎提交Issue和Pull Request来改进这个项目！

### 开发建议
- 添加更多预设汉字
- 改进游戏动画效果
- 增加难度等级设置
- 添加学习进度记录
- 支持多人游戏模式

## 📄 许可证

MIT License - 详见 [LICENSE](LICENSE) 文件

## 🙏 致谢

感谢所有为这个项目做出贡献的开发者和用户！

---

**享受学习汉字的乐趣！** 🎉