// 游戏状态变量
let currentChar = '';
let targetCount = 3;
let foundCount = 0;
let charactersArray = [];
let isCustomGame = false;

// 汉字数据配置
const gameData = {
    '花': {
        targetCount: 3,
        confusers: ['化', '华', '草', '朵', '开', '红', '美', '香', '叶', '桃', '梅', '兰', '竹', '芳', '彩', '艳', '鲜', '园', '春', '夏'],
        image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDMwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJmbG93ZXIiIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiNmZjY5YjQiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiNmZjM0NzciLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCIgZmlsbD0idXJsKCNmbG93ZXIpIi8+PHRleHQgeD0iMTUwIiB5PSIxNzAiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxMDAiIGZpbGw9IndoaXRlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj7wn4y6PC90ZXh0Pjwvc3ZnPg==',
        meaning: '花 (huā)',
        description: '植物开放的美丽部分，有各种颜色和香味'
    },
    '草': {
        targetCount: 3,
        confusers: ['早', '操', '花', '叶', '绿', '青', '苗', '田', '芽', '茎', '根', '木', '林', '森', '植', '生', '长', '野', '地', '原'],
        image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDMwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJncmFzcyIgeDE9IjAlIiB5MT0iMCUiIHgyPSIxMDAlIiB5Mj0iMTAwJSI+PHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzIyYzU1ZSIvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iIzE2YTM0YSIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIiBmaWxsPSJ1cmwoI2dyYXNzKSIvPjx0ZXh0IHg9IjE1MCIgeT0iMTcwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+8J+MvzwvdGV4dD48L3N2Zz4=',
        meaning: '草 (cǎo)',
        description: '绿色的小植物，长在地上，很常见'
    },
    '树': {
        targetCount: 3,
        confusers: ['村', '对', '寸', '木', '林', '森', '枝', '叶', '根', '干', '果', '花', '绿', '高', '大', '老', '小', '新', '春', '秋'],
        image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDMwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJ0cmVlIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdG9wLWNvbG9yPSIjNjU5OTU5Ii8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjNGY3OTQyIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PHJlY3Qgd2lkdGg9IjMwMCIgaGVpZ2h0PSIzMDAiIGZpbGw9InVybCgjdHJlZSkiLz48dGV4dCB4PSIxNTAiIHk9IjE3MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjEwMCIgZmlsbD0id2hpdGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiPvCfjLM8L3RleHQ+PC9zdmc+',
        meaning: '树 (shù)',
        description: '高大的木本植物，有树干和树冠'
    },
    '鸟': {
        targetCount: 3,
        confusers: ['马', '乌', '岛', '飞', '翅', '羽', '蛋', '巢', '唱', '叫', '天', '空', '云', '风', '美', '小', '大', '白', '黑', '红'],
        image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDMwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJiaXJkIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdG9wLWNvbG9yPSIjNjM5NmZmIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjMzc3NWZmIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PHJlY3Qgd2lkdGg9IjMwMCIgaGVpZ2h0PSIzMDAiIGZpbGw9InVybCgjYmlyZCkiLz48dGV4dCB4PSIxNTAiIHk9IjE3MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjEwMCIgZmlsbD0id2hpdGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiPvCfkKY8L3RleHQ+PC9zdmc+',
        meaning: '鸟 (niǎo)',
        description: '有羽毛会飞的动物，很多种类很美丽'
    },
    '水': {
        targetCount: 3,
        confusers: ['永', '冰', '河', '海', '湖', '雨', '雪', '云', '清', '蓝', '流', '波', '滴', '泉', '井', '池', '洗', '游', '喝', '渴'],
        image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDMwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJ3YXRlciIgeDE9IjAlIiB5MT0iMCUiIHgyPSIxMDAlIiB5Mj0iMTAwJSI+PHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzA2YjZkNCIvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iIzA4OTFhNSIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIiBmaWxsPSJ1cmwoI3dhdGVyKSIvPjx0ZXh0IHg9IjE1MCIgeT0iMTcwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+8J+SpzwvdGV4dD48L3N2Zz4=',
        meaning: '水 (shuǐ)',
        description: '无色无味的液体，生命必需的物质'
    },
    '火': {
        targetCount: 3,
        confusers: ['灯', '光', '热', '红', '烧', '煮', '炒', '烤', '暖', '亮', '太', '阳', '星', '灿', '烂', '焰', '炎', '燃', '温', '暑'],
        image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDMwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJmaXJlIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdG9wLWNvbG9yPSIjZmY1NzIyIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjZGMzNjI2Ii8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PHJlY3Qgd2lkdGg9IjMwMCIgaGVpZ2h0PSIzMDAiIGZpbGw9InVybCgjZmlyZSkiLz48dGV4dCB4PSIxNTAiIHk9IjE3MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjEwMCIgZmlsbD0id2hpdGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiPvCfkqU8L3RleHQ+PC9zdmc+',
        meaning: '火 (huǒ)',
        description: '燃烧时发出光和热的现象'
    },
    '山': {
        targetCount: 3,
        confusers: ['岩', '石', '峰', '岭', '坡', '谷', '高', '大', '绿', '美', '爬', '登', '顶', '云', '雾', '林', '树', '花', '鸟', '风'],
        image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDMwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJtb3VudGFpbiIgeDE9IjAlIiB5MT0iMCUiIHgyPSIxMDAlIiB5Mj0iMTAwJSI+PHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzY2Njc2YiIvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iIzRiNWU2MyIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIiBmaWxsPSJ1cmwoI21vdW50YWluKSIvPjx0ZXh0IHg9IjE1MCIgeT0iMTcwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+8J+PlzwvdGV4dD48L3N2Zz4=',
        meaning: '山 (shān)',
        description: '地面上高起的土石堆'
    },
    '月': {
        targetCount: 3,
        confusers: ['日', '星', '夜', '亮', '圆', '弯', '白', '银', '光', '照', '美', '静', '空', '天', '云', '明', '暗', '晚', '梦', '思'],
        image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDMwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJtb29uIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdG9wLWNvbG9yPSIjOGI1Y2Y2Ii8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjNzc0OGVjIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PHJlY3Qgd2lkdGg9IjMwMCIgaGVpZ2h0PSIzMDAiIGZpbGw9InVybCgjbW9vbikiLz48dGV4dCB4PSIxNTAiIHk9IjE3MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjEwMCIgZmlsbD0id2hpdGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiPvCfjJk8L3RleHQ+PC9zdmc+',
        meaning: '月 (yuè)',
        description: '地球的天然卫星，夜晚发光的天体'
    }
};

// 自定义游戏数据
let customGameData = {
    targetCount: 3,
    confusers: [],
    image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDMwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJjdXN0b20iIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiNmYmJmMjQiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiNmNTk3MjAiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCIgZmlsbD0idXJsKCNjdXN0b20pIi8+PHRleHQgeD0iMTUwIiB5PSIxNzAiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxMDAiIGZpbGw9IndoaXRlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj7inKg8L3RleHQ+PC9zdmc+',
    meaning: '',
    description: '自定义汉字学习'
};

// 错误音效播放函数
function playErrorSound() {
    try {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        oscillator.frequency.setValueAtTime(200, audioContext.currentTime);
        oscillator.frequency.setValueAtTime(150, audioContext.currentTime + 0.1);
        
        gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);
        
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 0.3);
    } catch (error) {
        console.log('音效播放失败:', error);
    }
}

// 语音合成函数
function speak(text) {
    if ('speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'zh-CN';
        utterance.rate = 0.8;
        speechSynthesis.speak(utterance);
    }
}

// 页面切换函数
function showPage(pageId) {
    const pages = ['startPage', 'customPage', 'gamePage', 'completePage'];
    pages.forEach(id => {
        document.getElementById(id).classList.add('hidden');
    });
    document.getElementById(pageId).classList.remove('hidden');
}

// 显示自定义页面
function showCustomPage() {
    showPage('customPage');
}

// 返回开始页面
function backToStart() {
    showPage('startPage');
    isCustomGame = false;
}

// 开始预设游戏
function startGame(char) {
    currentChar = char;
    isCustomGame = false;
    const data = gameData[char];
    targetCount = data.targetCount;
    
    // 设置游戏页面主题
    const gamePage = document.getElementById('gamePage');
    gamePage.setAttribute('data-char', char);
    
    initializeGame(data.confusers);
}

// 智能混淆字符生成器
function generateSmartConfusers(targetChar, existingConfusers = []) {
    // 常用汉字库，按偏旁部首和相似度分类
    const confuserDatabase = {
        // 木字旁相关
        '木': ['林', '森', '树', '枝', '叶', '根', '果', '桃', '梅', '柳', '松', '竹', '村', '材', '板'],
        '树': ['村', '对', '寸', '木', '林', '森', '枝', '叶', '根', '干', '果', '花', '绿', '高', '大'],
        '花': ['化', '华', '草', '朵', '开', '红', '美', '香', '叶', '桃', '梅', '兰', '竹', '芳', '彩'],
        
        // 草字头相关
        '草': ['早', '操', '花', '叶', '绿', '青', '苗', '田', '芽', '茎', '根', '木', '林', '森', '植'],
        
        // 水相关
        '水': ['永', '冰', '河', '海', '湖', '雨', '雪', '云', '清', '蓝', '流', '波', '滴', '泉', '井'],
        '河': ['何', '可', '哥', '水', '流', '江', '湖', '海', '波', '浪', '清', '洗', '游', '泳', '渡'],
        '海': ['每', '母', '毒', '水', '洋', '波', '浪', '鱼', '船', '岛', '蓝', '深', '广', '大', '无'],
        
        // 火相关
        '火': ['灯', '光', '热', '红', '烧', '煮', '炒', '烤', '暖', '亮', '太', '阳', '星', '灿', '烂'],
        '灯': ['丁', '订', '钉', '火', '光', '亮', '明', '照', '电', '红', '黄', '白', '夜', '晚', '暗'],
        
        // 鸟相关
        '鸟': ['马', '乌', '岛', '飞', '翅', '羽', '蛋', '巢', '唱', '叫', '天', '空', '云', '风', '美'],
        '飞': ['非', '费', '肥', '鸟', '机', '天', '空', '高', '快', '远', '翅', '羽', '风', '云', '行'],
        
        // 山相关
        '山': ['岩', '石', '峰', '岭', '坡', '谷', '高', '大', '绿', '美', '爬', '登', '顶', '云', '雾'],
        '石': ['右', '古', '吉', '山', '岩', '硬', '重', '白', '黑', '灰', '块', '头', '子', '料', '材'],
        
        // 日月相关
        '月': ['日', '星', '夜', '亮', '圆', '弯', '白', '银', '光', '照', '美', '静', '空', '天', '云'],
        '日': ['目', '白', '百', '月', '明', '晴', '晚', '早', '时', '间', '光', '亮', '热', '暖', '阳'],
        
        // 人相关
        '人': ['入', '八', '大', '天', '个', '今', '令', '全', '会', '从', '众', '他', '她', '们', '你'],
        '大': ['太', '天', '夫', '人', '小', '少', '多', '好', '美', '高', '长', '宽', '广', '深', '厚'],
        
        // 心相关
        '心': ['必', '忙', '快', '慢', '想', '思', '念', '爱', '情', '感', '觉', '意', '志', '愿', '望'],
        '爱': ['受', '友', '爱', '心', '情', '感', '喜', '欢', '好', '美', '亲', '近', '关', '怀', '护'],
        
        // 手相关
        '手': ['才', '打', '拍', '拿', '持', '握', '抱', '推', '拉', '提', '放', '收', '给', '取', '做'],
        
        // 口相关
        '口': ['古', '可', '号', '吃', '喝', '说', '话', '叫', '唱', '笑', '哭', '问', '答', '听', '声'],
        
        // 通用混淆字符（形似或音似）
        'default': ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '百', '千', '万', '年', '月', '日', '时', '分', '秒', '春', '夏', '秋', '冬', '东', '南', '西', '北', '上', '下', '左', '右', '前', '后', '里', '外', '中', '间', '大', '小', '多', '少', '高', '低', '长', '短', '新', '旧', '好', '坏', '美', '丑', '红', '黄', '蓝', '绿', '白', '黑', '亮', '暗', '来', '去', '走', '跑', '飞', '游', '站', '坐', '躺', '睡', '醒', '看', '听', '说', '笑', '哭', '唱', '跳', '玩', '学', '教', '读', '写', '画', '做', '吃', '喝', '穿', '洗', '买', '卖', '给', '拿', '放', '开', '关', '推', '拉', '抱', '亲', '爱', '想', '知', '懂', '会', '能', '要', '有', '没', '是', '不', '很', '真', '假', '对', '错', '好', '坏', '快', '慢', '早', '晚', '今', '明', '昨', '先', '后', '这', '那', '哪', '什', '谁', '怎', '为', '因', '所', '但', '和', '或', '也', '都', '只', '就', '还', '再', '又', '才', '刚', '正', '在', '了', '着', '过', '的', '得', '地']
    };
    
    let smartConfusers = [...existingConfusers];
    
    // 首先尝试从目标字符的专用混淆字符中选择
    if (confuserDatabase[targetChar]) {
        const specificConfusers = confuserDatabase[targetChar].filter(c => 
            c !== targetChar && !smartConfusers.includes(c)
        );
        smartConfusers.push(...specificConfusers);
    }
    
    // 如果还不够，从相关字符的混淆字符中选择
    if (smartConfusers.length < 15) {
        for (const [key, confusers] of Object.entries(confuserDatabase)) {
            if (key !== 'default' && key !== targetChar) {
                const relatedConfusers = confusers.filter(c => 
                    c !== targetChar && !smartConfusers.includes(c)
                );
                smartConfusers.push(...relatedConfusers);
                if (smartConfusers.length >= 15) break;
            }
        }
    }
    
    // 最后从通用字符中补充
    const defaultConfusers = confuserDatabase.default.filter(c => 
        c !== targetChar && !smartConfusers.includes(c)
    );
    smartConfusers.push(...defaultConfusers);
    
    // 打乱顺序并返回
    return shuffleArray(smartConfusers);
}

// 开始自定义游戏
function startCustomGame() {
    const charInput = document.getElementById('customChar');
    const confusersInput = document.getElementById('customConfusers');
    const confuserCountSelect = document.getElementById('customConfuserCount');
    
    const char = charInput.value.trim();
    const confusersText = confusersInput.value.trim();
    const selectedConfuserCount = parseInt(confuserCountSelect.value);
    
    // 验证输入
    if (!char) {
        alert('请输入目标汉字！');
        return;
    }
    
    if (char.length !== 1) {
        alert('请输入单个汉字！');
        return;
    }
    
    // 解析用户输入的混淆字符
    let confusers = [];
    if (confusersText) {
        confusers = confusersText.split(/\s+/).filter(c => c.length === 1 && c !== char);
    }
    
    // 验证用户输入的混淆字符数量
    if (confusers.length > selectedConfuserCount) {
        alert(`输入的混淆字符数量(${confusers.length}个)超过了设置的数量(${selectedConfuserCount}个)，请减少输入的混淆字符！`);
        return;
    }
    
    // 如果输入的混淆字符数量少于设置的数量，则自动补足
    let finalConfusers = [...confusers];
    if (confusers.length < selectedConfuserCount) {
        const smartConfusers = generateSmartConfusers(char, confusers);
        const neededCount = selectedConfuserCount - confusers.length;
        
        // 从智能生成的字符中筛选出不重复的字符
        const availableConfusers = smartConfusers.filter(c => !confusers.includes(c));
        const additionalConfusers = availableConfusers.slice(0, neededCount);
        
        if (additionalConfusers.length < neededCount) {
            alert(`无法生成足够的混淆字符！需要补充${neededCount}个，但只能生成${additionalConfusers.length}个。请手动输入更多混淆字符！`);
            return;
        }
        
        finalConfusers.push(...additionalConfusers);
        
        // 系统自动补全了字符，直接开始游戏
        console.log(`系统已自动补全了${additionalConfusers.length}个混淆字符`);
    }
    
    // 计算目标字符数量（总共16个按钮 - 混淆字符数量）
    const targetCharCount = 16 - selectedConfuserCount;
    
    // 设置自定义游戏数据
    currentChar = char;
    isCustomGame = true;
    targetCount = targetCharCount;
    customGameData.targetCount = targetCharCount;
    customGameData.confusers = finalConfusers;
    customGameData.meaning = `${char} (自定义)`;
    
    // 设置游戏页面主题
    const gamePage = document.getElementById('gamePage');
    gamePage.setAttribute('data-char', 'custom');
    
    initializeGame(finalConfusers);
}

// 初始化游戏
function initializeGame(confusers) {
    foundCount = 0;
    
    // 生成字符数组
    charactersArray = [];
    
    // 添加混淆字符（最多13个，为目标字符留出空间）
    const maxConfusers = Math.min(16 - targetCount, confusers.length);
    for (let i = 0; i < maxConfusers; i++) {
        charactersArray.push(confusers[i]);
    }
    
    // 添加目标字符
    for (let i = 0; i < targetCount; i++) {
        charactersArray.push(currentChar);
    }
    
    // 打乱数组
    charactersArray = shuffleArray(charactersArray);
    
    // 更新UI
    updateUI();
    generateCircleLayout();
    showPage('gamePage');
}

// 数组打乱函数
function shuffleArray(array) {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
}

// 更新UI
function updateUI() {
    document.getElementById('targetChar').textContent = currentChar;
    document.getElementById('foundCount').textContent = foundCount;
    document.getElementById('totalCount').textContent = targetCount;
    document.getElementById('centerChar').textContent = currentChar;
    
    const progress = (foundCount / targetCount) * 100;
    document.getElementById('progressBar').style.width = progress + '%';
}

// 生成圆形布局
function generateCircleLayout() {
    const gameArea = document.getElementById('gameArea');
    const existingSurrounding = gameArea.querySelectorAll('.surrounding-char');
    existingSurrounding.forEach(el => el.remove());
    
    const totalChars = charactersArray.length;
    const radius = 150;
    const centerX = 200;
    const centerY = 200;
    
    // 如果字符数量超过10个，使用内外两圈布局
    if (totalChars > 10) {
        const innerCount = Math.min(8, totalChars - 8);
        const outerCount = totalChars - innerCount;
        
        // 内圈
        for (let i = 0; i < innerCount; i++) {
            const angle = (i / innerCount) * 2 * Math.PI;
            const x = centerX + Math.cos(angle) * (radius * 0.6);
            const y = centerY + Math.sin(angle) * (radius * 0.6);
            createCharacterButton(charactersArray[i], x, y, i);
        }
        
        // 外圈
        for (let i = 0; i < outerCount; i++) {
            const angle = (i / outerCount) * 2 * Math.PI;
            const x = centerX + Math.cos(angle) * radius;
            const y = centerY + Math.sin(angle) * radius;
            createCharacterButton(charactersArray[innerCount + i], x, y, innerCount + i);
        }
    } else {
        // 单圈布局
        for (let i = 0; i < totalChars; i++) {
            const angle = (i / totalChars) * 2 * Math.PI;
            const x = centerX + Math.cos(angle) * radius;
            const y = centerY + Math.sin(angle) * radius;
            createCharacterButton(charactersArray[i], x, y, i);
        }
    }
}

// 创建字符按钮
function createCharacterButton(char, x, y, index) {
    const button = document.createElement('button');
    button.className = 'surrounding-char float-animation';
    button.textContent = char;
    button.style.left = (x - 30) + 'px';
    button.style.top = (y - 30) + 'px';
    button.style.animationDelay = (Math.random() * 2) + 's';
    
    button.onclick = () => clickCharacter(button, char);
    
    document.getElementById('gameArea').appendChild(button);
}

// 字符点击处理
function clickCharacter(element, char) {
    if (element.classList.contains('found')) {
        return;
    }
    
    if (char === currentChar) {
        // 正确点击
        element.classList.add('correct');
        foundCount++;
        updateUI();
        
        setTimeout(() => {
            element.classList.remove('correct');
            element.classList.add('found');
            
            if (foundCount >= targetCount) {
                setTimeout(() => {
                    showCompletePage();
                }, 500);
            }
        }, 600);
    } else {
        // 错误点击
        element.classList.add('error-shake');
        element.style.backgroundColor = '#ff6b6b';
        playErrorSound();
        
        setTimeout(() => {
            element.classList.remove('error-shake');
            element.style.backgroundColor = '';
        }, 500);
    }
}

// 显示完成页面
function showCompletePage() {
    const data = isCustomGame ? customGameData : gameData[currentChar];
    
    document.getElementById('completionImage').src = data.image;
    document.getElementById('charMeaning').textContent = data.meaning;
    document.getElementById('charDescription').textContent = data.description;
    
    showPage('completePage');
}

// 重新开始游戏
function restartGame() {
    if (isCustomGame) {
        initializeGame(customGameData.confusers);
    } else {
        startGame(currentChar);
    }
}

// 换字功能
function changeCharacter() {
    if (isCustomGame) {
        showCustomPage();
    } else {
        backToStart();
    }
}

// 页面加载完成后的初始化
document.addEventListener('DOMContentLoaded', function() {
    // 为自定义汉字输入框添加输入验证
    const customCharInput = document.getElementById('customChar');
    customCharInput.addEventListener('input', function(e) {
        const value = e.target.value;
        if (value.length > 1) {
            e.target.value = value.slice(0, 1);
        }
    });
    
    // 为混淆字符输入框添加提示
    const customConfusersInput = document.getElementById('customConfusers');
    const customConfuserCountSelect = document.getElementById('customConfuserCount');
    
    function validateConfusers() {
        const confusers = customConfusersInput.value.trim().split(/\s+/).filter(c => c.length === 1);
        const requiredCount = parseInt(customConfuserCountSelect.value);
        
        // 移除之前的错误和成功信息
        const existingError = customConfusersInput.parentNode.querySelector('.error-message');
        if (existingError) {
            existingError.remove();
        }
        const existingSuccess = customConfusersInput.parentNode.querySelector('.success-message');
        if (existingSuccess) {
            existingSuccess.remove();
        }
        
        if (confusers.length > requiredCount && customConfusersInput.value.trim()) {
            const errorMsg = document.createElement('div');
            errorMsg.className = 'error-message';
            errorMsg.textContent = `输入的混淆字符数量(${confusers.length}个)超过了设置的数量(${requiredCount}个)`;
            customConfusersInput.parentNode.appendChild(errorMsg);
        } else if (confusers.length > 0 && confusers.length < requiredCount && customConfusersInput.value.trim()) {
            const successMsg = document.createElement('div');
            successMsg.className = 'success-message';
            successMsg.textContent = `当前输入${confusers.length}个字符，系统将自动补全到${requiredCount}个`;
            customConfusersInput.parentNode.appendChild(successMsg);
        }
    }
    
    customConfusersInput.addEventListener('blur', validateConfusers);
    customConfuserCountSelect.addEventListener('change', validateConfusers);
});