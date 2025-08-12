# 汉字游戏 - PowerShell部署脚本
Write-Host "========================================" -ForegroundColor Green
Write-Host "汉字游戏 - 快速部署脚本" -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Green
Write-Host ""

Write-Host "1. 检查Git是否安装..." -ForegroundColor Yellow
$gitInstalled = $false
try {
    $gitVersion = git --version 2>$null
    if ($gitVersion) {
        Write-Host "✓ Git已安装: $gitVersion" -ForegroundColor Green
        $gitInstalled = $true
    }
}
catch {
    Write-Host "✗ Git未找到" -ForegroundColor Red
}

if (-not $gitInstalled) {
    Write-Host "请先安装Git: https://git-scm.com/download/win" -ForegroundColor Red
    Read-Host "按回车键退出"
    exit
}

Write-Host "2. 初始化Git仓库..." -ForegroundColor Yellow
git init

Write-Host "3. 添加所有文件到Git..." -ForegroundColor Yellow
git add .

Write-Host "4. 创建初始提交..." -ForegroundColor Yellow
git commit -m "Initial commit: 汉字识字涂色游戏"

Write-Host "5. 设置主分支为main..." -ForegroundColor Yellow
git branch -M main

Write-Host ""
Write-Host "========================================" -ForegroundColor Green
Write-Host "接下来请手动执行以下步骤：" -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Green
Write-Host "1. 在GitHub上创建一个新仓库" -ForegroundColor Cyan
Write-Host "2. 复制仓库的HTTPS地址" -ForegroundColor Cyan
Write-Host "3. 执行以下命令（替换为你的仓库地址）：" -ForegroundColor Cyan
Write-Host "   git remote add origin https://github.com/你的用户名/你的仓库名.git" -ForegroundColor White
Write-Host "   git push -u origin main" -ForegroundColor White
Write-Host ""
Write-Host "4. 然后访问 https://vercel.com/ 进行部署" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Green
Write-Host ""
Read-Host "按回车键继续"