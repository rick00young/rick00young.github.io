// =============================================
// AI游乐场 · 静态数据文件
// 包含所有游戏、评论、成就数据
// =============================================

const GAMES = [
/*
  {
    "id": 1,
    "game_name": "🧩 量子拼图",
    "game_cover": "",
    "game_star": 4.8,
    "game_type": "益智",
    "create_time": "2024-11-15",
    "play_count": 15234,
    "game_tag": [
      "脑力",
      "逻辑",
      "AI生成"
    ],
    "description": "由AI动态生成的无限拼图，每一局都独一无二。量子算法确保难度智能匹配你的水平！",
    "game_file": "1",
    "game_intro": "🧩 玩法说明\n\n游戏规则\n每个拼图由9个方块组成，其中一个是空位。点击与空位相邻的方块，即可将其移动到空位。通过反复移动，将所有方块按顺序排列即为通关。\n\n游戏目标\n将打乱的方块按编号顺序还原，完成拼图。AI会根据你的完成时间给出评分（1-5星）。\n\n游戏结束\n当所有方块按顺序排列完成时，游戏结束并显示你的成绩。点击「打乱重来」即可开始新的一局。\n\n特色\n🧩 AI 动态生成布局，每局不同\n🎯 计时挑战，考验你的速度\n🧠 难度自适应，AI 根据你的水平调整\n\n小技巧\n先还原第一行和第一列，再处理剩下的部分，这样可以大大降低拼图难度。"
  },
*/
/*
  {
    "id": 2,
    "game_name": "🎨 神笔马良AI",
    "game_cover": "",
    "game_star": 4.9,
    "game_type": "创意",
    "create_time": "2024-12-01",
    "play_count": 28341,
    "game_tag": [
      "绘画",
      "AI创作",
      "想象力"
    ],
    "description": "用文字描述你的想象，AI实时生成游戏世界。你的创意就是游戏的主角！",
    "game_file": null,
    "game_intro": "🎨 玩法说明\n\n游戏规则\n在输入框中用文字描述你想要的画面，AI 会实时将你的描述转化为画作。你可以调整风格、色彩和细节，AI 会根据你的反馈不断优化作品。\n\n游戏目标\n发挥想象力，创作出最惊艳的 AI 画作。收集不同风格的作品，打造属于你自己的画廊。\n\n特色\n🎨 支持多种艺术风格（水彩、油画、像素风等）\n🖌️ 实时生成，所见即所得\n🌈 可迭代修改，AI 理解你的想法\n\n小技巧\n描述越具体，AI 生成的效果越精准。尝试加入光线、视角、氛围等关键词，让你的画作更出彩！"
  },
*/
/*
  {
    "id": 3,
    "game_name": "🤖 代码大冒险",
    "game_cover": "",
    "game_star": 4.7,
    "game_type": "教育",
    "create_time": "2024-10-20",
    "play_count": 9876,
    "game_tag": [
      "编程",
      "学习",
      "AI导师"
    ],
    "description": "AI导师陪你一起写代码闯关，从Python到AI算法，边玩边学！",
    "game_file": null,
    "game_intro": "🤖 玩法说明\n\n游戏规则\n每一关都是一个编程挑战，你需要编写代码来解决问题。AI 导师会实时检查你的代码，给出提示和反馈。完成任务即可解锁下一关。\n\n游戏目标\n从零基础开始，逐步掌握编程基础知识，最终能够独立解决复杂的算法问题。\n\n特色\n💻 AI 导师实时辅导，耐心解答\n🐍 从 Python 基础到 AI 算法，循序渐进\n🏆 每关都有星级评价，挑战满分\n\n小技巧\n遇到困难时，先尝试自己思考，实在不行再向 AI 导师求助。独立解决问题是学习编程最好的方式！"
  },
*/
/*
  {
    "id": 4,
    "game_name": "🌌 星际漫游者",
    "game_cover": "",
    "game_star": 4.6,
    "game_type": "冒险",
    "create_time": "2024-09-10",
    "play_count": 21567,
    "game_tag": [
      "探索",
      "宇宙",
      "AI剧情"
    ],
    "description": "AI驱动的无限宇宙探索游戏。每个星球都有独特的生态系统和故事等待发现！",
    "game_file": null,
    "game_intro": "🌌 玩法说明\n\n游戏规则\n驾驶你的星际飞船探索未知星系。每到达一个新星球，你都可以探索其独特的生态环境、与外星生物互动、收集资源和线索。\n\n游戏目标\n探索尽可能多的星球，完成每个星球上的任务，解锁宇宙的奥秘。\n\n特色\n🚀 无限生成的宇宙，每次探索都是全新的\n🌍 每个星球都有独特的生态系统和故事\n📖 AI 驱动的分支剧情，你的选择影响故事走向\n\n小技巧\n留意每个星球上的线索，它们可能会指引你发现隐藏的稀有星球和宝藏！"
  },
*/
/*
  {
    "id": 5,
    "game_name": "🎵 旋律战争",
    "game_cover": "",
    "game_star": 4.5,
    "game_type": "音乐",
    "create_time": "2024-08-05",
    "play_count": 18452,
    "game_tag": [
      "音乐",
      "节奏",
      "AI作曲"
    ],
    "description": "AI实时作曲，你的操作决定音乐走向。每一局都是一场独一无二的视听盛宴！",
    "game_file": null,
    "game_intro": "🎵 玩法说明\n\n游戏规则\n跟随 AI 实时生成的音乐节奏，点击或滑动屏幕击中音符。你的操作精准度会影响音乐的情绪和走向 - 操作越好，音乐越激昂！\n\n游戏目标\n获得更高的分数，解锁更多曲风和难度等级。\n\n特色\n🎶 AI 实时作曲，每局音乐都不同\n🔥 操作影响音乐走向，你的演奏独一无二\n🎧 多种音乐风格解锁\n\n小技巧\n不要只盯着音符，试着感受音乐的节奏。放松的状态下反而更容易获得高分！"
  },
*/
/*
  {
    "id": 6,
    "game_name": "🔮 梦境编织者",
    "game_cover": "",
    "game_star": 4.9,
    "game_type": "角色扮演",
    "create_time": "2024-12-10",
    "play_count": 34521,
    "game_tag": [
      "RPG",
      "梦幻",
      "AI叙事"
    ],
    "description": "AI叙事引擎驱动的角色扮演游戏。你的每个选择都会改变梦境世界的命运！",
    "game_file": null,
    "game_intro": "🔮 玩法说明\n\n游戏规则\n进入梦境世界，扮演一位「织梦者」。在旅途中你会遇到各种角色和事件，每个选择都会推动剧情向不同的方向发展。AI 叙事引擎会根据你的决策实时生成后续故事。\n\n游戏目标\n探索梦境世界的所有可能性，解锁不同的剧情结局。\n\n特色\n📜 AI 叙事引擎，剧情分支无限\n🎭 每个选择都有意义，命运由你决定\n🌙 梦幻唯美的视觉风格\n\n小技巧\n同一个选择在不同情境下可能带来不同的结果。多周目游玩会有新的发现！"
  },
*/
/*
  {
    "id": 7,
    "game_name": "🧪 化学工坊",
    "game_cover": "",
    "game_star": 4.4,
    "game_type": "模拟",
    "create_time": "2024-07-18",
    "play_count": 12389,
    "game_tag": [
      "科学",
      "实验",
      "AI模拟"
    ],
    "description": "AI物理引擎模拟真实化学反应，安全地探索科学奇迹！",
    "game_file": null,
    "game_intro": "🧪 玩法说明\n\n游戏规则\n在虚拟实验室中，选择不同的化学物质进行混合实验。AI 物理引擎会实时模拟化学反应，呈现真实的实验现象。\n\n游戏目标\n发现所有化学反应配方，解锁成就，成为最伟大的炼金术士！\n\n特色\n🔬 AI 物理引擎，模拟真实化学反应\n⚗️ 安全的实验环境，不用担心爆炸\n🧠 从简单到复杂，循序渐进\n\n小技巧\n大胆尝试各种组合！有些隐藏反应需要特定的顺序或条件才能触发。建议做好实验记录。"
  },
*/
/*
  {
    "id": 8,
    "game_name": "🏃 无尽跑酷AI",
    "game_cover": "",
    "game_star": 4.3,
    "game_type": "动作",
    "create_time": "2024-06-22",
    "play_count": 42108,
    "game_tag": [
      "跑酷",
      "刺激",
      "AI关卡"
    ],
    "description": "AI实时生成跑酷关卡，难度自适应你的反应速度，永远不会有重复的关卡！",
    "game_file": null,
    "game_intro": "🏃 玩法说明\n\n游戏规则\n控制角色在无尽的赛道上奔跑，通过跳跃、滑铲和左右移动来避开障碍物。AI 会根据你的表现实时调整关卡难度，确保既有挑战性又不至于太难。\n\n游戏目标\n跑得越远越好！收集途中的宝石来解锁新角色和皮肤。\n\n特色\n🏃 AI 实时生成关卡，永不重复\n⚡ 难度自适应，越玩越刺激\n💎 收集宝石，解锁丰富角色\n\n小技巧\n保持节奏比追求速度更重要。熟悉障碍物的规律后，再逐步提升速度。善用滑铲通过低矮障碍！"
  },
*/
/*
  {
    "id": 9,
    "game_name": "🧠 思维迷宫",
    "game_cover": "",
    "game_star": 4.7,
    "game_type": "益智",
    "create_time": "2024-11-28",
    "play_count": 16784,
    "game_tag": [
      "迷宫",
      "策略",
      "AI挑战"
    ],
    "description": "AI不断学习你的思维方式，设计出越来越巧妙的迷宫挑战！",
    "game_file": null,
    "game_intro": "🧠 玩法说明\n\n游戏规则\n在 AI 生成的迷宫中，从起点走到终点。迷宫的复杂度和设计风格会根据你的历史表现动态调整。\n\n游戏目标\n以最快的速度走出迷宫，挑战更高的难度等级。\n\n特色\n🗺️ AI 不断学习你的思维模式，设计更具挑战的迷宫\n⏱️ 计时挑战，考验你的方向感\n🧠 难度逐步提升，让你的大脑保持活跃\n\n小技巧\n尝试使用「右手法则」—— 始终沿着右手边的墙走，这种方法可以走出任何简单连通迷宫。"
  },
*/
/*
  {
    "id": 10,
    "game_name": "🎭 戏精AI",
    "game_cover": "",
    "game_star": 4.8,
    "game_type": "社交",
    "create_time": "2024-12-20",
    "play_count": 39215,
    "game_tag": [
      "表演",
      "搞笑",
      "AI互动"
    ],
    "description": "AI搭戏伙伴，各种角色随意切换。即兴表演，笑到停不下来！",
    "game_file": null,
    "game_intro": "🎭 玩法说明\n\n游戏规则\n选择一个场景或角色设定，AI 会扮演你的对手戏角色。你们将即兴展开对话和互动，AI 会根据你的表演风格实时调整反应。\n\n游戏目标\n享受即兴表演的乐趣，解锁更多角色和场景，成为真正的「戏精」！\n\n特色\n🎪 海量角色和场景选择\n🤖 AI 即兴反应，完全接得住你的梗\n😂 支持多人围观，派对神器的\n\n小技巧\n入戏越深，AI 的表现越精彩！尝试不同的角色口吻和表演风格，AI 会给你意想不到的惊喜。"
  },
*/
/*
  {
    "id": 11,
    "game_name": "🌿 绿洲建造者",
    "game_cover": "",
    "game_star": 4.6,
    "game_type": "模拟",
    "create_time": "2024-10-05",
    "play_count": 14567,
    "game_tag": [
      "建造",
      "自然",
      "AI生态"
    ],
    "description": "AI模拟完整生态系统，你的每一个决定都会影响这片绿洲的兴衰！",
    "game_file": null,
    "game_intro": "🌿 玩法说明\n\n游戏规则\n在一片荒芜的土地上，从种植第一棵树开始，逐步建造你的绿洲。你需要合理规划水资源、植被和建筑，维护生态系统的平衡。\n\n游戏目标\n打造一个繁荣、自给自足的生态系统，吸引更多生物前来栖息。\n\n特色\n🌳 AI 生态模拟，真实的环境反馈\n🌊 水资源管理系统，合理规划至关重要\n🏡 丰富的建筑和装饰元素\n\n小技巧\n先确保水源充足，再大规模种植植被。不同植物对水分的需求不同，合理搭配才能让生态更稳定。"
  },
*/
/*
  {
    "id": 12,
    "game_name": "📖 故事生成器",
    "game_cover": "",
    "game_star": 4.9,
    "game_type": "创意",
    "create_time": "2024-12-15",
    "play_count": 25678,
    "game_tag": [
      "写作",
      "想象",
      "AI生成"
    ],
    "description": "和AI一起创作属于你的互动故事！每个选择都会衍生出全新的剧情分支。",
    "game_file": null,
    "game_intro": "📖 玩法说明\n\n游戏规则\n选择一个故事主题或自己设定开场，AI 会与你轮流续写故事。你写完一段后，AI 会根据你的内容生成接下来的剧情发展。\n\n游戏目标\n创作出精彩纷呈的互动故事，与社区分享你的作品。\n\n特色\n✍️ AI 合作写作，灵感源源不断\n📚 支持多种题材（奇幻、科幻、悬疑等）\n🌟 社区展示，让你的故事被更多人看到\n\n小技巧\n给故事制造冲突和悬念，AI 会更精彩地延续你的剧情。意想不到的情节转折往往能带来最好的故事！"
  },
*/
/*
  {
    "id": 13,
    "game_name": "2048",
    "game_cover": "",
    "game_star": 4.2,
    "game_type": "益智",
    "create_time": "2026-03-12",
    "play_count": 45478,
    "game_tag": [
      "益智",
      "数学",
      "AI生成"
    ],
    "description": "经典数字合并游戏！AI 生成初始布局，挑战你的极限分数。",
    "game_file": "13",
    "game_intro": "2048 玩法说明\n\n游戏规则\n使用键盘方向键（↑ ↓ ← →）或在手机屏幕上滑动，移动所有方块。相同数字的方块碰到一起会合并成一个数字翻倍的方块，同时你的得分会增加合并后的数值。每次移动后，空白格子会随机出现一个新的数字方块（2 或 4）。\n\n游戏目标\n不断合并数字，挑战自己的最高分！游戏没有终点，你可以一直玩下去，看看能否突破 2048、4096 甚至更高数字。\n\n游戏结束\n当棋盘被填满，且任意相邻方块都无法合并时，游戏结束。点击「新游戏」按钮即可重新挑战。\n\n特色\n🎨 经典配色 + 圆润卡片设计\n📱 支持鼠标 / 键盘 / 触摸滑动\n🏆 自动保存历史最高分（浏览器本地存储）\n⚡ 流畅的移动与合并动画\n\n小技巧\n尽量把最大的数字固定在角落，保持行或列有序排列，避免棋盘过早被填满。"
  },
*/
/*
  {
    "id": 14,
    "game_name": "五子棋",
    "game_cover": "",
    "game_star": 4.5,
    "game_type": "益智",
    "create_time": "2026-01-15",
    "play_count": 22364,
    "game_tag": [
      "益智",
      "策略",
      "AI生成"
    ],
    "description": "经典五子棋对弈，AI 对手智能多变，锻炼你的棋艺！",
    "game_file": "14",
    "game_intro": "五子棋 玩法说明\n\n游戏规则\n黑白双方轮流在棋盘交叉点上落子。黑方先行，白方后行。先在横线、竖线或斜线上形成连续五子的一方获胜。\n\n游戏目标\n在对手之前完成五子连线，战胜 AI。AI 有多个难度等级，从初级到高级，适合不同水平的玩家。\n\n游戏结束\n任意一方完成五子连线即获胜，游戏结束。如果棋盘下满仍未分出胜负，则为平局。\n\n特色\n🎯 多个 AI 难度等级，从入门到精通\n🧠 AI 对手风格多变，接近真人体验\n📱 支持鼠标点击落子\n\n小技巧\n进攻是最好的防守！在尝试连成五子的同时，也要留意 AI 的布局，及时堵住对手的活三和冲四。"
  },
*/
  {
    "id": 15,
    "game_name": "扫清黑洞",
    "game_cover": "games/15/game.png",
    "game_star": 4.9,
    "game_type": "益智",
    "create_time": "2026-05-10",
    "play_count": 29868,
    "game_tag": [
      "益智",
      "策略",
      "AI生成"
    ],
    "description": "避开黑洞，点亮数字——用逻辑扫清每一寸未知。",
    "game_file": "15",
    "game_intro": "扫清黑洞 玩法说明\n\n游戏规则\n在网格中找出所有安全的格子，避开每一个隐藏的黑洞。点击格子揭开数字，数字代表周围8格中的黑洞数量。通过逻辑推理标记黑洞位置，直到所有非黑洞格子被安全翻开。\n\n游戏目标\n在有限步数内推理出所有安全格，避免触发任何黑洞，完成棋盘清理。\n\n游戏结束\n触碰到黑洞即失败，游戏结束。成功翻开所有非黑洞格子则获胜。如果棋盘下满仍未分出胜负？不，此游戏无平局。\n\n特色\n🎮 首次点击绝对安全，系统智能迁移黑洞\n🔊 动态音效反馈：点击、胜利、失败各有不同\n⚙️ 可自定义棋盘大小（5x5至20x20）与黑洞数量\n⏱️ 计时器与剩余黑洞计数器，挑战最快解谜\n\n小技巧\n利用数字逐层推理，优先翻开数字0的区域可以快速展开大片安全区。不要盲目猜测，当推理陷入僵局时，尝试从边界或数字密集区寻找突破口。"
  },
/*
  {
    "id": 16,
    "game_name": "糖果连连看",
    "game_cover": "",
    "game_star": 4.0,
    "game_type": "益智",
    "create_time": "2026-05-10",
    "play_count": 56868,
    "game_tag": [
      "益智",
      "策略",
      "AI生成"
    ],
    "description": "🍭 一口甜蜜，连连惊喜；甜蜜连连看，快乐不加糖",
    "game_file": "16",
    "game_intro": "糖果连连看 玩法说明\n\n游戏规则\n点击选中一颗糖果，再点击另一颗相同图案的糖果。两颗糖果之间的连接路径最多只能拐两个弯，且路径必须畅通无阻（不被其他糖果挡住）。\n\n游戏目标\n消除所有糖果，获得最高分！每成功消除一对 +10 分，全部消除即胜利！\n\n游戏结束\n当棋盘上所有糖果被消除时游戏胜利。如果当前无解，可以使用洗牌功能重新排列。\n\n特色\n🎯 提示功能高亮可消除的糖果对\n🌀 洗牌功能打破僵局\n🍬 可爱的糖果主题与清脆音效\n\n小技巧\n多观察拐角路径，优先消除孤立糖果，让局面更清晰。进攻与防守兼顾，注意规划消除顺序。"
  },
*/
/*
  {
    "id": 17,
    "game_name": "开心斗地主",
    "game_cover": "",
    "game_star": 4.6,
    "game_type": "卡牌",
    "create_time": "2026-05-10",
    "play_count": 59868,
    "game_tag": [
      "益智",
      "策略",
      "AI生成"
    ],
    "description": "智勇双全，抢地主赢欢乐！",
    "game_file": "17",
    "game_intro": "开心斗地主 玩法说明\n\n游戏目标 \n 您是地主，手中20张牌；两位农民AI各17张牌。谁先把手牌全部出完，即为胜利。\n\n出牌规则 \n - 支持 单张、对子、三带一、炸弹 四种牌型（暂不支持顺子等复杂组合，易上手）。 \n - 每轮必须出比上一家 更大 的同类型牌，炸弹可以压制任意普通牌型。 \n - 如果无法或不愿出牌，点击 “不要” 跳过；连续两人不要则开始新轮次，任意牌型均可出。\n\n操作方式 \n - 选牌：点击手牌中的卡牌，牌会升起表示选中（可多选，自动按牌型组合）。 \n - 出牌：选好牌后点击 “出牌” 按钮，系统会校验牌型与大小是否合法。 \n - 重开：任何时候点击“重开牌局”即可开始新的一局。\n\n回合顺序 \n 地主（玩家）先出 → 东村老农民 → 西村李大伯 → 回到玩家，依次循环。\n\n小提示 \n - 炸弹威力强大，但不要轻易浪费。 \n - 观察场上剩余手牌张数，合理规划出牌顺序。 \n - 发牌与出牌自带生动音效，带来欢乐牌桌氛围。\n\n祝您运筹帷幄，智取胜利！🎉"
  }
*/
];

const COMMENTS = [
  {
    "id": 1,
    "game_id": 1,
    "user_id": 0,
    "username": "🧑‍🚀 星际玩家",
    "avatar": "",
    "content": "太好玩了！AI生成的关卡每次都不一样，强烈推荐🔥",
    "created_at": "2小时前"
  },
  {
    "id": 2,
    "game_id": 1,
    "user_id": 0,
    "username": "🤖 像素巫师",
    "avatar": "",
    "content": "陪玩助手的提示恰到好处，没有破坏沉浸感。",
    "created_at": "昨天"
  },
  {
    "id": 3,
    "game_id": 1,
    "user_id": 0,
    "username": "🌟 星辰探险家",
    "avatar": "",
    "content": "和朋友们一起玩太开心了，AI会根据我们的水平调整难度！",
    "created_at": "3天前"
  },
  {
    "id": 4,
    "game_id": 1,
    "user_id": 0,
    "username": "🎯 量子迷",
    "avatar": "",
    "content": "拼图模式太赞了，每局都让人上瘾。难度曲线很平滑。",
    "created_at": "5天前"
  },
  {
    "id": 5,
    "game_id": 1,
    "user_id": 0,
    "username": "🧪 逻辑大师",
    "avatar": "",
    "content": "作为解谜爱好者，这款游戏让我玩了整整一个周末！",
    "created_at": "1周前"
  },
  {
    "id": 6,
    "game_id": 2,
    "user_id": 0,
    "username": "🎨 色彩魔法师",
    "avatar": "",
    "content": "用文字描述就能生成画面，太神奇了！孩子特别喜欢。",
    "created_at": "1小时前"
  },
  {
    "id": 7,
    "game_id": 2,
    "user_id": 0,
    "username": "🖌️ 创意达人",
    "avatar": "",
    "content": "AI对我的理解越来越精准了，画出来的东西超出预期！",
    "created_at": "昨天"
  },
  {
    "id": 8,
    "game_id": 2,
    "user_id": 0,
    "username": "🌈 彩虹使者",
    "avatar": "",
    "content": "这个创意工坊功能太棒了，我已经创作了30多幅作品。",
    "created_at": "2天前"
  },
  {
    "id": 9,
    "game_id": 3,
    "user_id": 0,
    "username": "💻 码农探险家",
    "avatar": "",
    "content": "学编程从未如此有趣！AI导师的反馈很及时。",
    "created_at": "3小时前"
  },
  {
    "id": 10,
    "game_id": 3,
    "user_id": 0,
    "username": "🐍 Python猎手",
    "avatar": "",
    "content": "从零基础到写出第一个函数，成就感满满！",
    "created_at": "昨天"
  },
  {
    "id": 11,
    "game_id": 3,
    "user_id": 0,
    "username": "🤓 算法行者",
    "avatar": "",
    "content": "难度循序渐进，每关都有新知识点，比看书高效多了。",
    "created_at": "4天前"
  },
  {
    "id": 12,
    "game_id": 4,
    "user_id": 0,
    "username": "🚀 深空旅人",
    "avatar": "",
    "content": "每个星球都美到窒息！AI生成的生态太丰富了。",
    "created_at": "30分钟前"
  },
  {
    "id": 13,
    "game_id": 4,
    "user_id": 0,
    "username": "🌌 银河捕手",
    "avatar": "",
    "content": "探索了20多个星球，每个都有独特的生物和故事。",
    "created_at": "昨天"
  },
  {
    "id": 14,
    "game_id": 4,
    "user_id": 0,
    "username": "🔭 天文爱好者",
    "avatar": "",
    "content": "配乐和画面绝配，沉浸感满分！",
    "created_at": "3天前"
  },
  {
    "id": 15,
    "game_id": 5,
    "user_id": 0,
    "username": "🎵 节拍武士",
    "avatar": "",
    "content": "AI作曲太强了，每次战斗的音乐都让人热血沸腾！",
    "created_at": "1小时前"
  },
  {
    "id": 16,
    "game_id": 5,
    "user_id": 0,
    "username": "🎧 音律探险家",
    "avatar": "",
    "content": "操作决定音乐走向这个设计太有创意了。",
    "created_at": "2天前"
  },
  {
    "id": 17,
    "game_id": 6,
    "user_id": 0,
    "username": "💤 梦想家",
    "avatar": "",
    "content": "RPG爱好者的天堂！AI叙事引擎每次都带来惊喜。",
    "created_at": "昨天"
  },
  {
    "id": 18,
    "game_id": 6,
    "user_id": 0,
    "username": "📖 故事收集者",
    "avatar": "",
    "content": "已经玩了30小时，每个分支剧情都让人欲罢不能。",
    "created_at": "3天前"
  },
  {
    "id": 19,
    "game_id": 6,
    "user_id": 0,
    "username": "🧙 梦境法师",
    "avatar": "",
    "content": "选择影响命运的设计非常棒，真正做到了千人千面。",
    "created_at": "1周前"
  },
  {
    "id": 20,
    "game_id": 6,
    "user_id": 0,
    "username": "🌙 月夜行者",
    "avatar": "",
    "content": "画面梦幻，剧情深刻，AI的文案水平令人惊叹。",
    "created_at": "2周前"
  },
  {
    "id": 21,
    "game_id": 7,
    "user_id": 0,
    "username": "🧪 实验室助手",
    "avatar": "",
    "content": "安全地进行化学实验，再也不用担心搞砸了哈哈。",
    "created_at": "5小时前"
  },
  {
    "id": 22,
    "game_id": 7,
    "user_id": 0,
    "username": "🔬 科学探索者",
    "avatar": "",
    "content": "AI物理引擎很真实，可以用来辅助教学！",
    "created_at": "昨天"
  },
  {
    "id": 23,
    "game_id": 8,
    "user_id": 0,
    "username": "🏃 风之子",
    "avatar": "",
    "content": "太刺激了！AI生成的关卡永远不会重复。",
    "created_at": "10分钟前"
  },
  {
    "id": 24,
    "game_id": 8,
    "user_id": 0,
    "username": "⚡ 闪电侠",
    "avatar": "",
    "content": "难度自适应很智能，每次都能恰到好处的挑战。",
    "created_at": "1小时前"
  },
  {
    "id": 25,
    "game_id": 8,
    "user_id": 0,
    "username": "🎯 跑酷达人",
    "avatar": "",
    "content": "排行榜系统让人上头，为了第一名拼了！",
    "created_at": "昨天"
  },
  {
    "id": 26,
    "game_id": 9,
    "user_id": 0,
    "username": "🧠 脑力冠军",
    "avatar": "",
    "content": "AI学习我的思维方式后设计的迷宫越来越巧妙了！",
    "created_at": "2小时前"
  },
  {
    "id": 27,
    "game_id": 9,
    "user_id": 0,
    "username": "🗺️ 迷宫探险家",
    "avatar": "",
    "content": "策略性强，每一步都要深思熟虑，非常烧脑。",
    "created_at": "3天前"
  },
  {
    "id": 28,
    "game_id": 10,
    "user_id": 0,
    "username": "🎭 即兴演员",
    "avatar": "",
    "content": "AI搭戏太有趣了，各种角色随意切换，笑到肚子疼！",
    "created_at": "30分钟前"
  },
  {
    "id": 29,
    "game_id": 10,
    "user_id": 0,
    "username": "😂 欢乐使者",
    "avatar": "",
    "content": "聚会必备！每个人轮流和AI搭戏，能笑一整晚。",
    "created_at": "昨天"
  },
  {
    "id": 30,
    "game_id": 10,
    "user_id": 0,
    "username": "🎪 马戏团之星",
    "avatar": "",
    "content": "AI的即兴反应能力令人惊叹，每次对话都是全新的体验。",
    "created_at": "2天前"
  },
  {
    "id": 31,
    "game_id": 10,
    "user_id": 0,
    "username": "🎬 戏精本精",
    "avatar": "",
    "content": "演对手戏太爽了，AI完全能接住你的每一个梗。",
    "created_at": "5天前"
  },
  {
    "id": 32,
    "game_id": 11,
    "user_id": 0,
    "username": "🌿 绿色建筑师",
    "avatar": "",
    "content": "建造自己的生态系统，看着绿洲一点点繁荣，太有成就感了！",
    "created_at": "1小时前"
  },
  {
    "id": 33,
    "game_id": 11,
    "user_id": 0,
    "username": "🌳 自然守护者",
    "avatar": "",
    "content": "AI生态模拟很真实，每个决策都要考虑长远影响。",
    "created_at": "昨天"
  },
  {
    "id": 34,
    "game_id": 11,
    "user_id": 0,
    "username": "🏡 田园梦想家",
    "avatar": "",
    "content": "解压神作！听着鸟鸣水流声建造绿洲，心情都变好了。",
    "created_at": "4天前"
  },
  {
    "id": 35,
    "game_id": 12,
    "user_id": 0,
    "username": "📚 故事收藏家",
    "avatar": "",
    "content": "和AI一起写故事太有趣了！每次选择都会开启全新的剧情线。",
    "created_at": "20分钟前"
  },
  {
    "id": 36,
    "game_id": 12,
    "user_id": 0,
    "username": "✍️ 文字魔法师",
    "avatar": "",
    "content": "AI的文学素养很高，生成的剧情分支逻辑严密又充满想象力。",
    "created_at": "昨天"
  },
  {
    "id": 37,
    "game_id": 12,
    "user_id": 0,
    "username": "📖 阅读爱好者",
    "avatar": "",
    "content": "已经写了3篇互动小说了，这个工具让创作变得如此简单。",
    "created_at": "3天前"
  },
  {
    "id": 38,
    "game_id": 12,
    "user_id": 0,
    "username": "🎭 剧情控",
    "avatar": "",
    "content": "每个选择都让我纠结好久，这才是好故事该有的效果！",
    "created_at": "1周前"
  },
  {
    "id": 39,
    "game_id": 13,
    "user_id": 0,
    "username": "💯 数字猎人",
    "avatar": "",
    "content": "根本停不下来！从128到2048，每一步都心惊肉跳。",
    "created_at": "10分钟前"
  },
  {
    "id": 40,
    "game_id": 13,
    "user_id": 0,
    "username": "🧩 拼图爱好者",
    "avatar": "",
    "content": "AI生成的初始布局每次都不同，可玩性极高！",
    "created_at": "1小时前"
  },
  {
    "id": 41,
    "game_id": 13,
    "user_id": 0,
    "username": "🎯 高分玩家",
    "avatar": "",
    "content": "终于合出2048了！成就感爆棚，接下来挑战4096！",
    "created_at": "昨天"
  },
  {
    "id": 42,
    "game_id": 13,
    "user_id": 0,
    "username": "📊 数据控",
    "avatar": "",
    "content": "滑动丝滑，AI会根据你的水平推荐不同难度，太贴心了。",
    "created_at": "2天前"
  },
  {
    "id": 43,
    "game_id": 13,
    "user_id": 0,
    "username": "🌟 星辰挑战者",
    "avatar": "",
    "content": "经典玩法加上AI优化，比传统2048好玩十倍！",
    "created_at": "3天前"
  },
  {
    "id": 44,
    "game_id": 14,
    "user_id": 0,
    "username": "♟ 棋道中人",
    "avatar": "",
    "content": "AI对手很智能，从初级到高级梯度合理，适合练棋。",
    "created_at": "5分钟前"
  },
  {
    "id": 45,
    "game_id": 14,
    "user_id": 0,
    "username": "♔ 黑白大师",
    "avatar": "",
    "content": "和AI下了50盘，终于赢了一次！太有成就感了。",
    "created_at": "1小时前"
  },
  {
    "id": 46,
    "game_id": 14,
    "user_id": 0,
    "username": "🏠 休闲玩家",
    "avatar": "",
    "content": "界面简洁美观，下班后来几局很解压。",
    "created_at": "昨天"
  },
  {
    "id": 47,
    "game_id": 14,
    "user_id": 0,
    "username": "🧠 策略大师",
    "avatar": "",
    "content": "AI的棋风多变，时而激进时而稳健，非常接近真人对手。",
    "created_at": "2天前"
  },
  {
    "id": 48,
    "game_id": 14,
    "user_id": 0,
    "username": "⚔️ 黑白骑士",
    "avatar": "",
    "content": "可以调整AI难度这点太棒了，适合不同水平的玩家。",
    "created_at": "4天前"
  },
  {
    "id": 49,
    "game_id": 15,
    "user_id": 0,
    "username": "💡 逻辑之光",
    "avatar": "",
    "content": "黑洞机制太有趣了！每一步都要精心计算，根本停不下来。",
    "created_at": "10分钟前"
  },
  {
    "id": 50,
    "game_id": 15,
    "user_id": 0,
    "username": "🌌 星际探险家",
    "avatar": "",
    "content": "AI生成的关卡越来越巧妙，难度曲线非常完美。",
    "created_at": "1小时前"
  },
  {
    "id": 51,
    "game_id": 15,
    "user_id": 0,
    "username": "🧠 谜题大师",
    "avatar": "",
    "content": "在黑洞旁边点亮数字的感觉太爽了，强烈推荐给逻辑爱好者！",
    "created_at": "昨天"
  },
  {
    "id": 52,
    "game_id": 15,
    "user_id": 0,
    "username": "✨ 星辰之光",
    "avatar": "",
    "content": "画面特效很酷，黑洞吞噬方块时的动画做得太精致了。",
    "created_at": "2天前"
  },
  {
    "id": 53,
    "game_id": 15,
    "user_id": 0,
    "username": "🎯 挑战达人",
    "avatar": "",
    "content": "高难度模式下的谜题设计非常精妙，能玩一整天！",
    "created_at": "4天前"
  },
  {
    "id": 54,
    "game_id": 16,
    "user_id": 0,
    "username": "🍬 糖果猎人",
    "avatar": "",
    "content": "太甜了！8种糖果的消除效果非常流畅，根本停不下来！",
    "created_at": "5分钟前"
  },
  {
    "id": 55,
    "game_id": 16,
    "user_id": 0,
    "username": "🌟 星星收集者",
    "avatar": "",
    "content": "AI生成的关卡布局每次都不同，策略性很强，不是无脑消消乐。",
    "created_at": "30分钟前"
  },
  {
    "id": 56,
    "game_id": 16,
    "user_id": 0,
    "username": "🧠 逻辑达人",
    "avatar": "",
    "content": "洗牌和提示功能设计得很贴心，卡关时帮了大忙。",
    "created_at": "1小时前"
  },
  {
    "id": 57,
    "game_id": 16,
    "user_id": 0,
    "username": "🎶 音效控",
    "avatar": "",
    "content": "消除时的音效太治愈了！胜利旋律也很带感。",
    "created_at": "昨天"
  },
  {
    "id": 58,
    "game_id": 16,
    "user_id": 0,
    "username": "💭 休闲玩家",
    "avatar": "",
    "content": "界面太可爱了，8x8棋盘大小刚好，地铁上玩一把很解压。",
    "created_at": "2天前"
  },
  {
    "id": 59,
    "game_id": 17,
    "user_id": 0,
    "username": "🎴 牌桌霸主",
    "avatar": "",
    "content": "AI对手很智能，抢地主的时候要仔细算牌，不然会被农民吊打！",
    "created_at": "2分钟前"
  },
  {
    "id": 60,
    "game_id": 17,
    "user_id": 0,
    "username": "🧠 策略大师",
    "avatar": "",
    "content": "炸弹的时机很重要，好几次靠一手炸弹翻盘，太刺激了！",
    "created_at": "15分钟前"
  },
  {
    "id": 61,
    "game_id": 17,
    "user_id": 0,
    "username": "♠️ 黑桃A",
    "avatar": "",
    "content": "音效很棒，出牌很有牌桌氛围。AI的出牌逻辑也很合理。",
    "created_at": "1小时前"
  },
  {
    "id": 62,
    "game_id": 17,
    "user_id": 0,
    "username": "🏆 欢乐斗士",
    "avatar": "",
    "content": "斗地主经典玩法加上AI优化，比普通斗地主好玩。农民AI还会配合，太真实了！",
    "created_at": "昨天"
  },
  {
    "id": 63,
    "game_id": 17,
    "user_id": 0,
    "username": "☕ 休闲时光",
    "avatar": "",
    "content": "界面设计很清爽，一局时间刚好，午休时间来两把很惬意。",
    "created_at": "3天前"
  }
];

const ACHIEVEMENTS = [
  {
    "id": 1,
    "game_id": 1,
    "user_id": 0,
    "icon": "🧩",
    "name": "初拼",
    "description": "完成第一块拼图"
  },
  {
    "id": 2,
    "game_id": 1,
    "user_id": 0,
    "icon": "⏱️",
    "name": "极速挑战",
    "description": "30秒内完成一局"
  },
  {
    "id": 3,
    "game_id": 1,
    "user_id": 0,
    "icon": "🧠",
    "name": "拼图大师",
    "description": "完成100局拼图"
  },
  {
    "id": 4,
    "game_id": 1,
    "user_id": 0,
    "icon": "🌟",
    "name": "量子突破",
    "description": "解锁4x4难度模式"
  },
  {
    "id": 5,
    "game_id": 2,
    "user_id": 0,
    "icon": "🎨",
    "name": "初露锋芒",
    "description": "完成第一幅AI画作"
  },
  {
    "id": 6,
    "game_id": 2,
    "user_id": 0,
    "icon": "🌈",
    "name": "色彩大师",
    "description": "使用10种不同风格作画"
  },
  {
    "id": 7,
    "game_id": 2,
    "user_id": 0,
    "icon": "🖼️",
    "name": "画廊主人",
    "description": "创作50幅作品"
  },
  {
    "id": 8,
    "game_id": 2,
    "user_id": 0,
    "icon": "🤖",
    "name": "AI知音",
    "description": "AI对你的风格理解度达到90%"
  },
  {
    "id": 9,
    "game_id": 3,
    "user_id": 0,
    "icon": "💻",
    "name": "Hello World",
    "description": "写下第一行代码"
  },
  {
    "id": 10,
    "game_id": 3,
    "user_id": 0,
    "icon": "🐍",
    "name": "Python捕手",
    "description": "完成Python入门章节"
  },
  {
    "id": 11,
    "game_id": 3,
    "user_id": 0,
    "icon": "⚡",
    "name": "算法达人",
    "description": "连续通过10个算法挑战"
  },
  {
    "id": 12,
    "game_id": 3,
    "user_id": 0,
    "icon": "🏆",
    "name": "代码王者",
    "description": "完成所有关卡"
  },
  {
    "id": 13,
    "game_id": 4,
    "user_id": 0,
    "icon": "🚀",
    "name": "初次升空",
    "description": "探索第一个星球"
  },
  {
    "id": 14,
    "game_id": 4,
    "user_id": 0,
    "icon": "🌍",
    "name": "星际旅人",
    "description": "探索10个不同星球"
  },
  {
    "id": 15,
    "game_id": 4,
    "user_id": 0,
    "icon": "📖",
    "name": "博物学家",
    "description": "收集50种外星生物图鉴"
  },
  {
    "id": 16,
    "game_id": 4,
    "user_id": 0,
    "icon": "👑",
    "name": "银河霸主",
    "description": "完成所有星球的探索"
  },
  {
    "id": 17,
    "game_id": 5,
    "user_id": 0,
    "icon": "🎵",
    "name": "初试啼声",
    "description": "完成第一场战斗"
  },
  {
    "id": 18,
    "game_id": 5,
    "user_id": 0,
    "icon": "🎶",
    "name": "节奏大师",
    "description": "达成100连击"
  },
  {
    "id": 19,
    "game_id": 5,
    "user_id": 0,
    "icon": "🔥",
    "name": "不灭之音",
    "description": "连续战斗30分钟"
  },
  {
    "id": 20,
    "game_id": 5,
    "user_id": 0,
    "icon": "👑",
    "name": "旋律之王",
    "description": "排行榜登顶"
  },
  {
    "id": 21,
    "game_id": 6,
    "user_id": 0,
    "icon": "💤",
    "name": "入梦",
    "description": "进入梦境世界"
  },
  {
    "id": 22,
    "game_id": 6,
    "user_id": 0,
    "icon": "📜",
    "name": "故事旅人",
    "description": "完成10条剧情分支"
  },
  {
    "id": 23,
    "game_id": 6,
    "user_id": 0,
    "icon": "🎭",
    "name": "命运编织者",
    "description": "解锁所有结局"
  },
  {
    "id": 24,
    "game_id": 6,
    "user_id": 0,
    "icon": "🌟",
    "name": "造梦师",
    "description": "游戏时长超过100小时"
  },
  {
    "id": 25,
    "game_id": 7,
    "user_id": 0,
    "icon": "🧪",
    "name": "学徒",
    "description": "完成第一次实验"
  },
  {
    "id": 26,
    "game_id": 7,
    "user_id": 0,
    "icon": "⚗️",
    "name": "炼金术士",
    "description": "成功合成50种物质"
  },
  {
    "id": 27,
    "game_id": 7,
    "user_id": 0,
    "icon": "🔬",
    "name": "科学家",
    "description": "发现隐藏化学反应"
  },
  {
    "id": 28,
    "game_id": 7,
    "user_id": 0,
    "icon": "🏅",
    "name": "诺贝尔奖",
    "description": "完成所有实验课题"
  },
  {
    "id": 29,
    "game_id": 8,
    "user_id": 0,
    "icon": "🏃",
    "name": "起跑",
    "description": "跑完100米"
  },
  {
    "id": 30,
    "game_id": 8,
    "user_id": 0,
    "icon": "⚡",
    "name": "风驰电掣",
    "description": "连续奔跑5分钟"
  },
  {
    "id": 31,
    "game_id": 8,
    "user_id": 0,
    "icon": "💎",
    "name": "宝石猎人",
    "description": "收集1000颗宝石"
  },
  {
    "id": 32,
    "game_id": 8,
    "user_id": 0,
    "icon": "🏆",
    "name": "跑酷之神",
    "description": "获得全球排行榜第一名"
  },
  {
    "id": 33,
    "game_id": 9,
    "user_id": 0,
    "icon": "🗺️",
    "name": "第一步",
    "description": "走出第一个迷宫"
  },
  {
    "id": 34,
    "game_id": 9,
    "user_id": 0,
    "icon": "🧠",
    "name": "思维敏锐",
    "description": "连续破解5个高级迷宫"
  },
  {
    "id": 35,
    "game_id": 9,
    "user_id": 0,
    "icon": "⏳",
    "name": "速度之星",
    "description": "1分钟内破解迷宫"
  },
  {
    "id": 36,
    "game_id": 9,
    "user_id": 0,
    "icon": "👑",
    "name": "迷宫之王",
    "description": "完成100个AI生成的迷宫"
  },
  {
    "id": 37,
    "game_id": 10,
    "user_id": 0,
    "icon": "🎭",
    "name": "初次登台",
    "description": "完成第一次AI即兴表演"
  },
  {
    "id": 38,
    "game_id": 10,
    "user_id": 0,
    "icon": "😂",
    "name": "笑场冠军",
    "description": "让AI笑得失控"
  },
  {
    "id": 39,
    "game_id": 10,
    "user_id": 0,
    "icon": "🎪",
    "name": "百变戏精",
    "description": "切换10种不同角色"
  },
  {
    "id": 40,
    "game_id": 10,
    "user_id": 0,
    "icon": "🌟",
    "name": "奥斯卡得主",
    "description": "获得100次观众掌声"
  },
  {
    "id": 41,
    "game_id": 11,
    "user_id": 0,
    "icon": "🌱",
    "name": "播种者",
    "description": "种下第一棵树"
  },
  {
    "id": 42,
    "game_id": 11,
    "user_id": 0,
    "icon": "🌊",
    "name": "水源开拓者",
    "description": "开辟第一片水域"
  },
  {
    "id": 43,
    "game_id": 11,
    "user_id": 0,
    "icon": "🏡",
    "name": "建筑师",
    "description": "建造10座建筑"
  },
  {
    "id": 44,
    "game_id": 11,
    "user_id": 0,
    "icon": "🌳",
    "name": "生态大师",
    "description": "生态系统达到完美平衡"
  },
  {
    "id": 45,
    "game_id": 12,
    "user_id": 0,
    "icon": "📖",
    "name": "开篇",
    "description": "开始第一个故事"
  },
  {
    "id": 46,
    "game_id": 12,
    "user_id": 0,
    "icon": "✍️",
    "name": "多产作家",
    "description": "完成5篇互动故事"
  },
  {
    "id": 47,
    "game_id": 12,
    "user_id": 0,
    "icon": "🌟",
    "name": "最佳编剧",
    "description": "故事获得100个点赞"
  },
  {
    "id": 48,
    "game_id": 12,
    "user_id": 0,
    "icon": "👑",
    "name": "文学大师",
    "description": "累计创作10万字"
  },
  {
    "id": 49,
    "game_id": 13,
    "user_id": 0,
    "icon": "💡",
    "name": "初识2048",
    "description": "成功合成第一块64"
  },
  {
    "id": 50,
    "game_id": 13,
    "user_id": 0,
    "icon": "🌟",
    "name": "小有成就",
    "description": "成功合成512"
  },
  {
    "id": 51,
    "game_id": 13,
    "user_id": 0,
    "icon": "👑",
    "name": "2048之王",
    "description": "成功合成2048"
  },
  {
    "id": 52,
    "game_id": 13,
    "user_id": 0,
    "icon": "🌌",
    "name": "无限挑战",
    "description": "总分超过50000"
  },
  {
    "id": 53,
    "game_id": 14,
    "user_id": 0,
    "icon": "♟",
    "name": "初学乍练",
    "description": "完成第一局对弈"
  },
  {
    "id": 54,
    "game_id": 14,
    "user_id": 0,
    "icon": "⚔️",
    "name": "小试牛刀",
    "description": "连胜AI 3局"
  },
  {
    "id": 55,
    "game_id": 14,
    "user_id": 0,
    "icon": "🏆",
    "name": "棋艺精湛",
    "description": "在高级难度下击败AI"
  },
  {
    "id": 56,
    "game_id": 14,
    "user_id": 0,
    "icon": "👑",
    "name": "棋圣",
    "description": "累计获胜100局"
  },
  {
    "id": 57,
    "game_id": 15,
    "user_id": 0,
    "icon": "💡",
    "name": "初识黑洞",
    "description": "完成第一关"
  },
  {
    "id": 58,
    "game_id": 15,
    "user_id": 0,
    "icon": "🌌",
    "name": "星际旅者",
    "description": "通过 10 个 AI 生成的关卡"
  },
  {
    "id": 59,
    "game_id": 15,
    "user_id": 0,
    "icon": "👑",
    "name": "黑洞克星",
    "description": "累计扫清 50 个黑洞"
  },
  {
    "id": 60,
    "game_id": 15,
    "user_id": 0,
    "icon": "✨",
    "name": "无尽挑战",
    "description": "在无尽模式下得分超过 10000"
  },
  {
    "id": 61,
    "game_id": 16,
    "user_id": 0,
    "icon": "🍬",
    "name": "甜蜜初尝",
    "description": "完成第一局消除"
  },
  {
    "id": 62,
    "game_id": 16,
    "user_id": 0,
    "icon": "⭐",
    "name": "连连高手",
    "description": "连续消除 20 对糖果"
  },
  {
    "id": 63,
    "game_id": 16,
    "user_id": 0,
    "icon": "👑",
    "name": "糖果大师",
    "description": "累计消除 500 对糖果"
  },
  {
    "id": 64,
    "game_id": 16,
    "user_id": 0,
    "icon": "⏱️",
    "name": "极速王者",
    "description": "在 60 秒内完成一局"
  },
  {
    "id": 65,
    "game_id": 17,
    "user_id": 0,
    "icon": "🎴",
    "name": "初登牌桌",
    "description": "完成第一局对弈"
  },
  {
    "id": 66,
    "game_id": 17,
    "user_id": 0,
    "icon": "👑",
    "name": "地主之王",
    "description": "作为地主获胜 10 次"
  },
  {
    "id": 67,
    "game_id": 17,
    "user_id": 0,
    "icon": "🌟",
    "name": "农民之星",
    "description": "作为农民获胜 10 次"
  },
  {
    "id": 68,
    "game_id": 17,
    "user_id": 0,
    "icon": "💥",
    "name": "炸弹专家",
    "description": "累计打出 50 个炸弹"
  }
];


// =============================================
// Helper Functions
// =============================================

/** 获取所有游戏 */
function getAllGames() {
    return GAMES;
}

/** 根据ID获取游戏 */
function getGameById(id) {
    return GAMES.find(g => g.id === id) || null;
}

/** 根据类型获取游戏 */
function getGamesByType(type) {
    return GAMES.filter(g => g.game_type === type);
}

/** 获取所有游戏类型 */
function getGameTypes() {
    const types = [...new Set(GAMES.map(g => g.game_type))];
    return types.sort();
}

/** 搜索游戏（名称、描述、标签） */
function searchGames(keyword) {
    const kw = keyword.toLowerCase();
    return GAMES.filter(g =>
        g.game_name.toLowerCase().includes(kw) ||
        g.description.toLowerCase().includes(kw) ||
        (g.game_tag || []).some(tag => tag.toLowerCase().includes(kw))
    );
}

/** 热门游戏排行 */
function getHotGames(limit) {
    const sorted = [...GAMES].sort((a, b) => (b.play_count || 0) - (a.play_count || 0));
    return limit ? sorted.slice(0, limit) : sorted;
}

/** 最新游戏 */
function getNewGames(limit) {
    const sorted = [...GAMES].sort((a, b) => (b.create_time || '').localeCompare(a.create_time || ''));
    return limit ? sorted.slice(0, limit) : sorted;
}

/** 推荐游戏（按评分） */
function getRecommendedGames(limit) {
    const sorted = [...GAMES].sort((a, b) => (b.game_star || 0) - (a.game_star || 0));
    return limit ? sorted.slice(0, limit) : sorted;
}

/** 获取游戏统计数据 */
function getGameStats() {
    const totalPlays = GAMES.reduce((sum, g) => sum + (g.play_count || 0), 0);
    return {
        total_games: GAMES.length,
        total_plays: totalPlays >= 1000 ? Math.floor(totalPlays / 1000) + 'k' : String(totalPlays),
        game_types: getGameTypes()
    };
}

/** 获取游戏评论 */
function getCommentsByGame(gameId) {
    return COMMENTS.filter(c => c.game_id === gameId);
}

/** 获取游戏成就 */
function getAchievementsByGame(gameId) {
    return ACHIEVEMENTS.filter(a => a.game_id === gameId);
}

/** 格式化数字为带千分位的字符串 */
function formatNumber(num) {
    return Number(num || 0).toLocaleString();
}

/** 获取游戏对应的emoji */
function getGameEmoji(gameId) {
    const emojiList = ['🎮', '🤖', '🧩', '🎨', '🌌', '🎵', '🔮', '🧪', '🏃', '🧠', '🎭', '🌿', '📖', '🐉', '👻', '🎯'];
    const idx = ((gameId || 1) - 1) % emojiList.length;
    return emojiList[idx];
}

/** 解析玩法介绍文本 */
function parseIntro(intro) {
    if (!intro) return [];
    const sections = [];
    const lines = intro.split('\n');
    let currentTitle = '';
    let currentBody = '';
    
    for (const line of lines) {
        const trimmed = line.trim();
        if (!trimmed) continue;
        
        // Check if line looks like a title (ends with identifier like 玩法说明, 游戏规则, etc.)
        if (trimmed.endsWith('说明') || trimmed.endsWith('规则') || 
            trimmed.endsWith('目标') || trimmed.endsWith('结束') ||
            trimmed.endsWith('特色') || trimmed.endsWith('技巧') ||
            trimmed.endsWith('提示') || trimmed.match(/^[\w\s]+$/)) {
            if (currentTitle) {
                sections.push({ title: currentTitle, body: currentBody.trim() });
            }
            currentTitle = trimmed;
            currentBody = '';
        } else {
            currentBody += trimmed + '\n';
        }
    }
    if (currentTitle) {
        sections.push({ title: currentTitle, body: currentBody.trim() });
    }
    return sections.length > 0 ? sections : [{ title: '介绍', body: intro }];
}

/** 截断描述文本 */
function truncateDesc(desc, maxLen) {
    if (!desc) return '';
    return desc.length > maxLen ? desc.substring(0, maxLen) + '...' : desc;
}
