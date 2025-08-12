@echo off
chcp 65001 >nul
echo ========================================
echo 汉字游戏 - 快速部署脚本
echo ========================================
echo.

echo 1. 初始化Git仓库...
git init

echo 2. 添加所有文件到Git...
git add .

echo 3. 创建初始提交...
git commit -m "Initial commit: 汉字识字涂色游戏"

echo 4. 设置主分支为main...
git branch -M main

echo.
echo ========================================
echo 接下来请手动执行以下步骤：
echo ========================================
echo 1. 在GitHub上创建一个新仓库
echo 2. 复制仓库的HTTPS地址
echo 3. 执行以下命令（替换为你的仓库地址）：
echo    git remote add origin https://github.com/你的用户名/你的仓库名.git
echo    git push -u origin main
echo.
echo 4. 然后访问 https://vercel.com/ 进行部署
echo ========================================
echo.
pause