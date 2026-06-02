// =============================================
// AI游乐场 · 共享组件和工具函数
// =============================================

// ---------- 导航栏渲染 ----------
function renderNavBar(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = `
        <nav class="navbar">
            <a href="index.html" class="logo" style="text-decoration:none;">
                <h1>🎮 AI游乐场</h1>
                <span>无限AI小游戏市场</span>
            </a>
            <div class="search-bar">
                <form onsubmit="doSearch(event)" style="display:flex;flex:1;">
                    <input type="text" id="searchInput" placeholder="搜索AI游戏..." />
                    <button type="submit"><i class="fas fa-search"></i></button>
                </form>
            </div>
            <div class="nav-actions">
                <a href="index.html" title="首页"><i class="fas fa-home"></i></a>
                <a href="games.html" title="全部游戏"><i class="fas fa-th-large"></i></a>
                <a href="about.html" title="关于我们"><i class="fas fa-info-circle"></i></a>
            </div>
        </nav>
    `;
}

function doSearch(e) {
    e.preventDefault();
    const kw = document.getElementById('searchInput')?.value?.trim();
    if (kw) {
        window.location.href = 'games.html?search=' + encodeURIComponent(kw);
    }
}

// ---------- Footer渲染 ----------
function renderFooter(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    container.innerHTML = `
        <footer>
            <div>© 2025 AI游乐场 · 无限想象力 | 由 AI 驱动的小游戏生态</div>
            <div>
                <a href="about.html" style="color:inherit;"><i class="fas fa-info-circle"></i> 关于我们</a> &nbsp;&nbsp;
                <i class="fab fa-discord"></i> 加入社区
            </div>
        </footer>
    `;
}

// ---------- GameCard渲染 ----------
function renderGameCards(games, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    container.innerHTML = games.map(game => `
        <a href="${getGameUrl(game.id)}" class="game-card">
            <div class="game-img">
                ${game.game_cover
                    ? `<img src="${game.game_cover}" alt="${game.game_name}" />`
                    : `<span>${getGameEmoji(game.id)}</span>`
                }
                <span class="ai-badge"><i class="fas fa-microchip"></i> ${(game.game_tag && game.game_tag.length > 0) ? game.game_tag[0] : 'AI驱动'}</span>
            </div>
            <div class="game-title">${game.game_name}</div>
            <div class="game-desc">${truncateDesc(game.description, 60)}</div>
            <div class="game-meta">
                <span><i class="fas fa-star" style="color:#ffd700;"></i> ${game.game_star}</span>
                <span><i class="fas fa-fire" style="color:#ff6b6b;"></i> ${formatNumber(game.play_count)}</span>
                <span><i class="fas fa-tag"></i> ${game.game_type}</span>
            </div>
        </a>
    `).join('');
}

// ---------- 面包屑渲染 ----------
function renderBreadcrumb(items, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    container.innerHTML = items.map((item, i) => {
        if (i === items.length - 1) return `<span>${item.label}</span>`;
        return `<a href="${item.link}">${item.label}</a> &gt; `;
    }).join('');
}

// ---------- 获取URL参数 ----------
function getUrlParam(name) {
    const params = new URLSearchParams(window.location.search);
    return params.get(name) || '';
}

// ---------- 游戏统计图标列表 ----------
const iconList = ['ghost', 'cubes', 'dragon', 'microphone', 'chart-simple', 'wand-sparkles'];

// ---------- 简易评论ID生成 ----------
let nextCommentId = 1000;
function getNextCommentId() {
    return nextCommentId++;
}

// ---------- 游戏详情页 URL ----------
function getGameUrl(gameId) {
    return "games/" + gameId + "/index.html";
}
