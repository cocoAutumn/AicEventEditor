# 《Alice in Cradle》技术二创完全指南之哈语言篇
> Pitiable does NOT imply Adorable. ⸺ Stella M.

《Alice in Cradle》（下称 AiC）是由 [Hinayua](https://fantia.jp/fanclubs/24531/posts) 开发的一款基于 Unity 引擎（编程语言为 C#）的横版 2D ARPG（平面动作类角色扮演游戏），该作者的虚拟主播形象称为 Hashino Mizuha（哈酱）。

自从该游戏于 2023 年发布了带有 F7 控制台功能的 0.22 版后，有一定计算机技术的厨圣们（本游戏玩家群体的昵称）就开始着手研究如何建立一个完整的工具链（技术栈），来让缺乏技术的二创作者以较低的门槛进行<b>基于游戏本体运行时</b>的二创。
> 其他二创领域如纸笔书画、音视频编辑等不在本指南的讨论范围内。

在这期间，[2023](https://www.bilibili.com/video/BV1yd4y1p7Jq/) 和 [2024](https://www.bilibili.com/video/BV117421N7Fu/) 的两次 AiC 拜年纪展示了这方面的很多进展。2024 年 5 月发布的 0.25 版（6 月更新至 0.25f）是二创门槛空前低的版本，本指南将教会读者尽可能多的二创本领。
> 目录中不会完整列出所有哈语言指令的名称，请善用 Ctrl+F 或 Command+F 搜索。

<font size=7>目录</font>
- [《Alice in Cradle》技术二创完全指南之哈语言篇](#alice-in-cradle技术二创完全指南之哈语言篇)
  - [前置知识与准备工作](#前置知识与准备工作)
    - [0.25 的游戏目录结构](#025-的游戏目录结构)
    - [resources.assets 文件的详情](#resourcesassets-文件的详情)
    - [F7 控制台](#f7-控制台)
    - [自由行动时 F7 控制台的命令](#自由行动时-f7-控制台的命令)
    - [PixelLiner 与图片修改](#pixelliner-与图片修改)
    - [系统需求](#系统需求)
    - [m2d 和 evt 文件夹、cmd 文件和哈语言](#m2d-和-evt-文件夹cmd-文件和哈语言)
    - [角色标识符](#角色标识符)
    - [图层参数和位置参数](#图层参数和位置参数)
    - [哈语言的指令分类](#哈语言的指令分类)
  - [对话类指令](#对话类指令)
    - [TX\_BOARD: 书信/告示牌](#tx_board-书信告示牌)
    - [MSG: 对话/独白](#msg-对话独白)
    - [MSG\_PREFIX: 对话/独白前缀](#msg_prefix-对话独白前缀)
    - [TALKER、TALKER\_REPLACE: 更改立绘位置、绑定姓名音效](#talkertalker_replace-更改立绘位置绑定姓名音效)
    - [HKDS: 对话框样式设置](#hkds-对话框样式设置)
  - [EvDrawerContainer.cs 的图片类指令](#evdrawercontainercs-的图片类指令)
    - [PIC: 更改立绘差分、显示图片](#pic-更改立绘差分显示图片)
    - [PIC\_B: 带纯色背景显示图片](#pic_b-带纯色背景显示图片)
    - [PIC\_MP, MIC\_MP2: 立绘表情符号](#pic_mp-mic_mp2-立绘表情符号)
    - [PIC\_MOVEA, PIC\_MVA, PIC\_MVA\_WHOLE: 立绘抖动](#pic_movea-pic_mva-pic_mva_whole-立绘抖动)
    - [PIC\_FILL, PIC\_FADEIN, PIC\_FADEOUT: 画面淡入淡出](#pic_fill-pic_fadein-pic_fadeout-画面淡入淡出)
    - [PIC\_FLASH: 画面纯色闪烁](#pic_flash-画面纯色闪烁)
    - [PIC\_FLIP: 图片翻转](#pic_flip-图片翻转)
    - [PIC\_HIDE, PIC\_HIDE\_ALL: 隐藏立绘或图片](#pic_hide-pic_hide_all-隐藏立绘或图片)
    - [PIC\_MOVE, PIC\_MOVE2: 平移立绘或图片](#pic_move-pic_move2-平移立绘或图片)
    - [PIC\_RADIATION, PIC\_SWAP: 万箭穿心、交换图层](#pic_radiation-pic_swap-万箭穿心交换图层)
    - [PIC\_SWIN: 显示单张提示图片](#pic_swin-显示单张提示图片)
    - [PIC\_SILHOUETTE: 显示立绘剪影](#pic_silhouette-显示立绘剪影)
    - [PIC\_TFADE: 图片特殊渐变](#pic_tfade-图片特殊渐变)
    - [PIC\_TEMP\_REPLACE\_TERM, PIC\_CLEAR\_TERM\_CACHE: 立绘替换规则](#pic_temp_replace_term-pic_clear_term_cache-立绘替换规则)
    - [其他 PIC 系列指令](#其他-pic-系列指令)
  - [延迟类、子过程类指令](#延迟类子过程类指令)
    - [WAIT, WAIT\_BUTTON: 阻塞指定帧数](#wait-wait_button-阻塞指定帧数)
    - [MTL, TL: 延迟修饰符](#mtl-tl-延迟修饰符)
    - [DOTL, DOMTL, CLEARTL, CLEARMTL: 取消延迟](#dotl-domtl-cleartl-clearmtl-取消延迟)
    - [CHANGE\_EVENT, CHANGE\_EVENT2: 跳转到另一事件](#change_event-change_event2-跳转到另一事件)
    - [MODULE, @id: 执行宏](#module-id-执行宏)
  - [流程控制类指令](#流程控制类指令)
    - [SELECT: 固定数量选项列表](#select-固定数量选项列表)
    - [SELECTARRAY: 可变数量选项列表](#selectarray-可变数量选项列表)
    - [=, =~: 临时变量赋值](#--临时变量赋值)
    - [IF: 条件分歧](#if-条件分歧)
    - [LABEL, GOTO: 跳转与循环](#label-goto-跳转与循环)
    - [SEEK\_END: 终止当前事件](#seek_end-终止当前事件)
  - [主角操作类指令](#主角操作类指令)
    - [PR\_OUTFIT: 换装](#pr_outfit-换装)
    - [PR\_BETO: 动态立绘玷污](#pr_beto-动态立绘玷污)
    - [PR\_OMORASHI: 失禁](#pr_omorashi-失禁)
    - [PR\_CURE: 全回复](#pr_cure-全回复)
    - [PR\_GACHA: 进行 QTE 挑战](#pr_gacha-进行-qte-挑战)
    - [PR\_KEY\_SIMULATE: 模拟按键](#pr_key_simulate-模拟按键)
    - [PR\_VOICE: 诺艾儿语音](#pr_voice-诺艾儿语音)
    - [SER\_APPLY, SER\_APPLY\_NEAR\_PEE: 获得异常状态](#ser_apply-ser_apply_near_pee-获得异常状态)
  - [EV.cs 的有用指令](#evcs-的有用指令)
    - [MSG\_XXX: 对话框额外操作](#msg_xxx-对话框额外操作)
    - [TUTO\_XXX: 操作提示](#tuto_xxx-操作提示)
    - [ALLOW\_XXX, DENY\_XXX: 允许/禁止某功能](#allow_xxx-deny_xxx-允许禁止某功能)
    - [WAIT\_XXX: 其他类型的等待指令](#wait_xxx-其他类型的等待指令)
  - [其他的字母开头指令](#其他的字母开头指令)
    - [//: 注释](#-注释)
    - [MGFARM, MG\_DOJO, MGM\_4ASCEND: 小游戏相关](#mgfarm-mg_dojo-mgm_4ascend-小游戏相关)
    - [NEL.cs: 诺艾儿相关指令](#nelcs-诺艾儿相关指令)
    - [BGM.cs: 音频类指令](#bgmcs-音频类指令)
    - [GF.cs: 开关和变量类指令](#gfcs-开关和变量类指令)
    - [UIBase.cs 的界面类指令](#uibasecs-的界面类指令)
    - [NelItem.cs 和 M2DBase.cs 的冷门指令](#nelitemcs-和-m2dbasecs-的冷门指令)
    - [M2EventCommand.cs 中的部分指令](#m2eventcommandcs-中的部分指令)
    - [NelM2DBase.cs 中的上百条指令](#nelm2dbasecs-中的上百条指令)
  - [非字母开头的像素小人类指令](#非字母开头的像素小人类指令)
    - [向地图中添加 NPC](#向地图中添加-npc)
    - [像素小人移动（MoveScript）](#像素小人移动movescript)
    - [诺艾儿的所有姿势](#诺艾儿的所有姿势)

## 前置知识与准备工作
这部分内容理论性较强，初学者建议先通读一遍来初步了解，如有疑惑可暂时搁置以待后续回顾。

### 0.25 的游戏目录结构
AiC 是同时支持「微软 Windows 64 位」和「苹果 macOS」两种操作系统的 Unity 游戏，两者的目录结构也有着细微的差别。
> 目前游戏还只有免费体验版，正式版会追加 Linux 和任天堂 Switch 的版本，但没有针对触屏设备的开发计划。

在 Windows 版中，游戏本体 exe 文件同目录下有一个 AliceInCradle_Data 文件夹，而在 macOS 版中则是游戏本体 app 文件（右击后选择「显示包内容」）下的 Contents/Resources/Data 文件夹，该文件夹最重要的三个部分如下。

Managed 子文件夹下有大量 dll 文件，是游戏本体的 C# 语言程序被编译后得到的动态链接库，可以被 dnSpy、ILSpy、dotPeek 等工具反编译。
> 本游戏的去马赛克补丁就是修改其中的 Assembly-CSharp.dll 所得。

resources.assets 文件封装了一些纯文本的内容，可以用十六进制编辑器在不增加文本长度的情况下进行微调，也可以被 AssetStudio 等工具解包。

StreamingAssets 子文件夹是整个 AiC 的核心，具体包括但不限于以下内容：
1. *.acb, *.awb: 已被哈酱加密的音频文件，无法被 AssetStudio 等工具解包。
2. localization: 翻译文本，分为 tx 类（XX_tx*.txt，XX 为语言代码，下同）和 ev 类（ev_*.txt）。
3. m2d: 地图文件，包括 tmap（地形）和 cmd（物件）两类。
4. evt: 事件文件，即后文所说的「哈语言」，本指南的主要讲解对象。
5. Enemies: 魔族素材，但不包括红框，也许可以用来制作友方魔族。
6. EvImg: 静态立绘（`__ev_x`）和事件用图片（`__events_xxx`），可在 F7 控制台用 VP 命令预览。
7. Fatal: 全屏 CG 动画素材，如土蛇/森之领主战败、休息室初体验、南丁格尔吃禁果。
8. MapChars: NPC 像素小人（`sub_x`），哈语言 MoveScript 部分的主要操作对象。
9. MapChips: 地形素材（`mapchip_xxx`），F7 控制台 EXPORT_IMAGE 命令的输出内容。
10. PxlNoel: 诺艾儿像素小人（`noel_xxx`），根据服装种类和破损情况有不同的素材。
11. SpineAnim: 诺艾儿动态立绘，根据受伤种类有不同的素材，注意这个不按长方形切分。
12. Pxl: 图标素材，localization 中`<img mesh="图标名"/>`语法的显示内容。

此外，还有一切二创工作的起点 _debug.txt，该文件中有很多取值为 0 或 1 的开关，其中下面前三个开关务必设置为 1:
- reloadmtr: 为 1 时游戏中（标题画面除外）按下 F9 键可以热重载 localization 文件夹，换言之修改其中的 txt 文件后请务必按下 F9 键刷新。
- timestamp: 为 1 时游戏中左下角会显示当前时间和帧率。
- announce: 和 timestamp 同时为 1 时游戏中（标题画面除外）按下 F7 键可以打开控制台。
- supercyclone: 为 1 时诺艾儿的「旋风斩击」技能没有冷却时间，请按需设置。

笔记本电脑用户请注意 Fn 组合键的默认行为。  
关于 localization 的说明详见[《Alice in Cradle 的 localization 语法》](https://aliceincradle.org/localization.html)，本指南不再赘述。

### resources.assets 文件的详情
AssetStudio 是一款只有 Windows 版且已经很久没有被维护的开源工具，现在一般用 AssetRipper 代替，后者可是有 macOS 版哦。

上述工具解包 resources.assets 文件可以得到很多类型的资源，其中 TextAsset 类型的资源对自定义事件很有用，具体分为以下几种：
1. fatal: 全屏 CG 动画的作法，如土蛇/森之领主战败、休息室初体验、南丁格尔吃禁果。
2. particle: 粒子特效。
3. store: 商店，详见 ITEMSTORE 和 LUNCHSTORE 指令的说明。
4. summon: 战斗点，除 puppetrevenge_0 和 puppetrevenge_debug 以外，其他的都以 forest_ 开头且可以在 XX_tx_enemy.txt 中找到（下面四个除外）。
- forest_tutorial 穿林日光之庭
- forest_coroseum 迷途者
- forest_darkpot 黄昏骤雨
- forest_thorn_cage 鸟笼

此外还有一堆没有后缀名的文件，见下面的表格。
|文件名|内容|
|---|---|
|ConfigAssetsFolder|一句英文|
|__tx_list|（重要）tx 类 txt 文件名|
|_bgm|详见 LOAD_BGM 指令|
|_curs|光标形状|
|_magic_kind|六种魔法|
|_puzz_matoate|浮空移动靶|
|_snd|音频但不是 SND 指令的参数|
|body_noel|动态立绘各部位|
|dojo_basic|道场小游戏|
|enhancer|强化插件|
|forest_rwood_column|存在同名 summon 文件但内容有出入|
|item|物品|
|itemreel|物品宝箱转轮|
|quest|任务|
|recipe|饮食、炼金、香薰的配方|
|reel|宝箱效果转轮（强烈建议修改）|
|reel_supply|各战斗点掉落的宝箱|
|skill|技能|
|trm_data|香薰五种效果|
|uipic_fader_noel|动态立绘切换|
|voice_ixia|伊夏语音|
|voice_noel|诺艾儿语音（详见 PR_VOICE 指令）|
|weather|天气|
|workbench|炼金工作台（不是炉）|

### F7 控制台
F7 控制台有两种形态，一种是自由行动时，一种是事件运行中。

事件运行中的 F7 控制台只占屏幕右侧的四分之一，会显示正在执行的事件 id 和哈语言指令组，并有以下功能：
1. 滚动查看屏幕外的指令，点击行号强制跳转。
2. 点击下面的四个圆形按钮来继续事件、暂停事件、单步调试、强制终止（比如不小心写了死循环）。
4. 点击两个勾选框来设置是否在 IF 和`<BREAK>`指令处自动暂停。
3. 拖拽最下面的水平滚动条来调节（F7 开启下的）执行速度。
5. 长按 V 或 F 键查看变量值，因此不建议游戏键位设置中使用这两个键。

自由行动时的 F7 控制台占屏幕左侧四分之三，且有多种页面：
1. ESC: 默认界面，可以临时修改 _debug.txt 的四个开关（不影响文件），查看最近一个事件 id 并触发它。
2. Recipe: 饮食调试，可以强制食用一份效果和饱腹度都完全自定义的「调试沙拉」（注意不要连续点击 Apply），也可以清空诺艾儿的肠胃。
3. Item: 物品调试，可以修改金币数量，也可以获取任何物品（背包已满会出现在地上），注意 Grade 的取值范围是 0 到 4（对应 1 到 5 星），以诺艾儿汁为例：
    ```
    // ノエルジュースのグレード別特定呼称
    &&noel_juice_grade0 &1
    &&noel_juice_grade1 热乎乎的&1
    &&noel_juice_grade2 鲜榨的&1
    &&noel_juice_grade3 品质优良的&1
    &&noel_juice_grade4 &1・初酿
    ```
4. HP/MP: 战斗调试，可以设置诺艾儿和魔族的生命、魔力、坐标，还可以秒杀它们和她。
5. Danger: 危险度与天气调试，详情如下。

在 Danger 页面下，Current Map 会显示当前的地图 id。  
下方的 Danger 为战斗增加的危险度，可被哈语言的 DANGER n 0/1 指令更改。  
D:Juice 为丢弃诺艾儿汁增加的危险度，最大为 45。  
Reel max 也会随着战斗而增加，数值越大越容易获得高等级的宝箱效果转轮。  
勾选框 Lock Dangerousness 可以锁定危险度。  
勾选框 Allow fast travel in night time 可以在夜间和雨天在长椅之间快速移动。  
勾选框 Lock weather 可以锁定天气，点击其上方的各个天气图标可以设置天气。

### 自由行动时 F7 控制台的命令
自由行动时 F7 控制台最上面有一个短条和一个长条，在短条中输入百分号 % 敲回车后会显示 GFB 开关和 GFC 变量的调试界面，在长条中则可以输入以下「命令」（不同于哈语言的「指令」）。

（重要）`evt id`执行某个 id 的事件，其中 id 为事件的 cmd 文件在 evt 文件夹下的相对路径，如`evt 105/main_classroom`会执行教室的上课事件。

（重要）`vp`预览 EvImg 文件夹下的所有图片，包括但不限于静态立绘。在该模式下可以进一步点击各个角色标识符的按钮来切换角色，点击 & 则可以在 selector 栏搜索所需图片。

`GFB_SET x 0/1`或`GFB_PUT x 0/1`将开关 x 的值改为 0 或 1。  
`GFC_SET x y`或`GFC_PUT x y`将变量 x 的值改为 y。  
`GFC_SET_MX x y`或`GFC_PUT_MX x y`将变量 x 的值增加到 y，如果 x 的值本来就不小于 y 则没有效果。

`EXPORT_IMAGE`将当前地图的 png 素材导出到游戏根目录下（macOS 在游戏本体 .app 文件外）的 Capture 文件夹内。  
`EXPORT_IMAGE n`将当前地图第 n 个 png 图层导出到游戏根目录下（macOS 在游戏本体 .app 文件内）的 Capture 文件夹内。

`LOAD_SND id`加载某个 id 的音频。

`MAP id`传送到某个 id 的地图，所有地图的 id 都是 m2d 文件夹下的 tmap 文件名（不含后缀），部分地图的 id 与名称的对应关系见 XX_tx_map_name.txt（每行 &&MAP_ 后的内容）。

`MAXFPS n`将游戏最大帧率设为 144 和 n 之中的较小值，且临时开启垂直同步。

`PXL_PROGRESS v`将 pxls 素材的加载<b>速度</b>设为 v。

`REMAKE_MAP`重新加载当前地图的 pxls 素材。

`TXCHECK x y`检查 localization 文件夹中语言代码 y 的词条是否是语言代码 x 的词条的子集，如果 x 中某个词条在 y 中不存在则会将这一情况记录在日志文件中，但是词条名是 Input_ 或 PadInput_ 开头的话则会被忽略。

`AUTOSAVE`或`AUTO_SAVE`强制自动存档，无视玩家设置。

`BENCH HP0`令长椅的「恢复 HP」强制触发濒死书页。  
`BENCH EP0`令长椅的「抚慰自己」即使为灰色（兴奋度低于 500）也可以被选中。  
`BENCH EP1`令长椅的「抚慰自己」在兴奋度不低于 500 时强制触发 ev_book.txt 的另一组书页，但兴奋度低于 500 时则无法被选中（优先级高于 EP0）。  
`BENCH`取消上述三种效果。

`COFFEEMAKER`, `NIGHTINGALE`, `PUPPETNPC`, `TILDENPC`随机刷新森林里四位功能 NPC 的位置。

`DANGER n`将危险度设为 n（有渐变过程），同时将 Reel max 设为 64。

`FADER key`令诺艾儿的动态立绘播放一个动作，动作 key 的取值范围在 resources.assets 解包出的 uipic_fader_noel 文件内，具体如下：  
`bench, burned, crouch, cuts_cow_0, cuts_cow_1, cuts_cow_1_licking, cuts_cow_1_licking_2, damage, damage_gas, damage_gas_hit, damage_thunder, damage_thunder_big, down, down_b, insected, laying_egg, masturbate, masturbate_orgasm, pajama, shrimp, torture_drilln, torture_drilln_2, torture_golem_inject, torture_groundbury, torture_ketsudasi, torture_ketsudasi_finish, torture_mkb, torture_mkb_urchin, torture_romero, torture_slime_0, torture_slime_1, torture_snake_0, torture_snake_1, torture_swallowed, torture_tentacle_0, torture_tentacle_1, torture_tentacle_2, wetten, wetten_milk, wetten_osgm`

`FLUSH_MATERIAL`刷新地图的采集点，`FLUSH_MAP`在此基础上进一步刷新所有内容，详情不明。

`GATHER_ITEM`捡起周围的所有掉落物，比如玩家丢弃的或者魔族尸块。

`GETSKILL id`习得某个 id 的技能，id 的取值范围如下：  
`punch, shotgun, sliding, wheel, comet, dashpunch, airpunch, sp_bird, guard, evade, ukemi, guard_bush, guard_lariat, evade_dancing, burst, hp10_forest_0, hp20_forest_senzyo_rt, hp10_forest_ct, hp20_store_0, hp20_forest_wood_extender, hp10_forest_ruin_hall, mp10_forest_0, mp20_store_0, mp20_forest_lava_secret, mp20_forest_athletic_ladder, sp_difficulty0, sp_map_forest`

`GET_ALL_ITEM`获得所有物品各一个，但背包装不下所有消耗品，因此请务必在据点内操作。

`HIDENOEL`隐藏诺艾儿的像素小人，切换地图后失效，建议捏着魔法霰弹以防找不到她。

`NOELJUICE`强制令诺艾儿失禁，类似哈语言的 PR_OMORASHI 指令。

`PRPOS pos`将诺艾儿传送到当前地图的 pos 锚点，但 pos 的写法不明。

`STOREFLUSH id`（既是 F7 控制台命令也是哈语言指令）刷新某个商店的库存，如果不填 id 则刷新除魔女杂货店外的所有商店，id 的取值范围见 ITEMSTORE 和 LUNCHSTORE 指令的说明。

`UIDAMAGE n`令诺艾儿的动态立绘播放一个受伤动作，n 为 0~13, 100~104, 200~208 的整数，但部分数值的效果相同。

`WALKCOUNT n`将诺艾儿的步数（？）设为 n。

`WEATHER id`按照 id 设置天气，不填 id 则根据当前危险度随机设置。id 的范围为 wind, thunder, mist, mist_dense, plague, drought。

### PixelLiner 与图片修改
AiC 的图片素材基本上全部由 Hinayua 自研的 [PixelLiner](https://pixelliner.sakura.ne.jp) 引擎组织起来。
> PixelLiner 的样板工程就含有 0.25 道场的天使「菲奥蕾特」，详见[这篇专栏](https://www.bilibili.com/read/cv35926341/)。

具体而言，一组素材由一到两张 png 大图和一个用来描述图片如何切分的 pxls 文件组成。

可供 PixelLiner 直接编辑的则是将两者合在一起的 pxl 文件（后缀名可能仍为 pxls），合成方法见 AicToolBox。

StreamingAssets 文件夹下的 EvImg, MapChars, MapChips, PxlNoel, SpineAnim 子文件夹中有大量的 xxx.pxls.bytes.texture_0.dat（个别为 _1.dat，而 SpineAnim 文件夹下则为 xxx.dat）和 xxx.pxls.dat 两类文件，可分别被 AssetStudio 解包为 png 和 pxls 文件。
> Enemies 文件夹的部分 xxx.pxls.dat 文件被解包后得到的实际上是后缀名为 pxls 的 pxl 文件，莫要因为找不到对应的 png 文件而惊慌。

PixelLiner 是一款基于过时的 Adobe Air 技术的像素画绘图软件（在苹果自研芯片的 macOS 设备上甚至需要借助 Rosetta 兼容层才能运行），安装步骤如下：
1. 安装 [Adobe Air](https://airsdk.harman.com/runtime)
2. 安装 [PixelLiner](https://zenpo-huchui.com/wiki/index.php)
3. 可能要面对满屏幕看不懂的日语而去到处找翻译补丁（替换某个 pxl.swf 文件即可）。

目前只有 UABE (UnityAssetBundleExtractor) 和其改进版 UABEA (UABE Avalonia) 这两个 Windows 专属的开源工具可以修改图片的 dat 文件（通过替换其封装的 png 资源）。

UABE 的 2.2 稳定版因为缺少运行库已无法在 Windows 10 开箱即用，而最新的 3.0 测试版没有压缩 dat 文件的功能，会导致修改后的文件比原来大很多。

UABEA 需要安装 .Net 6.0 运行库，且压缩功能正常（但仍然比修改前大几倍），但操作步骤中需要多次关闭文件重新打开，容易出错。
> 不管用其中哪种修改图片，都要注意将 Texture format 改为 ARGB32，否则会有程序报错/闪退或写入 dat 静默失败的问题。

具体步骤可以参考[这个视频](https://www.bilibili.com/video/BV1Eb421n7go/)，注意只修改图片的 dat 文件的话不可以修改图片的宽高。此外部分图片如标题画面被多张一起封装在 StreamingAssets 文件夹根目录下的 mti_xxx.dat 中，不要因为找不到与批量解包出的 png 同名的 dat 文件而惊慌。

pxls 的 dat 文件也可以进行类似的操作，只不过需要将编辑后的 pxls 文件重命名为 .txt 后缀才能被这两个工具导入进 dat 文件。

不管怎么说，这一套流程都太麻烦了，除非是要给「不能使用下述的 BepInEx 插件管理器」的用户（比如苹果自研芯片的 macOS）制作补丁包，否则还是建议直接用下述的 AicUtils 插件。

### 系统需求
Windows 用户最好使用 Windows 10 或 11，而不是已经停止支持的 Windows 8.1 或更早版本。旧版本不支持 chromium 内核的浏览器且记事本也有 bug，会造成很多麻烦。

二创需要同时读写大量后缀名不统一的文本文件，强烈推荐微软 [Visual Studio Code](https://code.visualstudio.com)（注意不是 Visual Studio）。
> 不要被其官网和刚安装好的英文界面吓退，官方语言包很容易安装的。它的跨文件正则搜索和替换功能极强，和版本管理软件 Git 的联动也很棒（Git 有一点学习门槛但很好用），还有大量社区扩展。

PixelLiner 及其所依赖的 Adobe Air 对于不编辑图片素材的二创作者不是必须的，但它们本身是很轻量级的绿色软件，可以安装以备不时之需。

自定义地图相关的开发（比如 tmap 文件的编辑）需要用到 Python3 编程语言，它在 macOS Ventura 或更高版本是自带的，在 Windows 则可从微软商店安装。

DnSpy、ILSpy、dotPeek 等反编译工具和仅限 Windows 使用的 AssetStudio 解包工具不是必须的，因为它们的工作是一劳永逸的，读者可以直接加入下述 SNS 同人社的群聊获取所需文件。

域名 https://aliceincradle.org 目前由非官方组织「AliceInCradle 玩家服务站」所持有，其外围组织「[Stop New Sameness 同人社](https://space.bilibili.com/3537106030824346)」欢迎有志厨圣加入，该组织将持续维护各种工具链和技术文档，具体如下。

AiC 玩家服务站的运营人员之一 e9ae9933 用 Java 编程语言编写了两个工具可供使用，它们都需要安装 [Java 21](https://www.oracle.com/cn/java/technologies/downloads/) 或更高版本才能运行。

第一个工具是 PixelPreviewer，该工具可以读取单个 pxl 文件（或读取 pxls 文件后弹窗选择相应的 png 文件，多次弹窗则每次都选 texture_0 的），来预览某个像素小人的所有动作（工具所在目录下会生成两到三个供参考的 test 文件），还可以一键复制该动作的 pose 单词供 cmd 文件使用。
> 可以说，该工具对像素小人的意义与 F7 控制台的 VP 命令对静态立绘的意义相当。

第二个工具是 AicToolBox，该工具在 0.25 进行了重构且尚未完工，已完工的部分主要有两个功能。  
第一个功能是将 pxls 和 png 合成为可供 PixelLiner 直接编辑的 pxl 文件，使用时需要选择一些 xxx.pxls 文件，工具会自动读取同目录下所需的 xxx.texture_0.png 文件（个别的如伊夏还需要 _1.png）来合成出 xxx.pxl 文件。
> 从 pxl 到 pxls+png 的拆分功能不由 AicToolBox 提供（PixelPreviewer 生成的 test.png 文件不算），请直接通过 PixelLiner 的「文件」菜单「混合 PXLS 格式导出」（在「AVI 保存」下方）选项完成。在弹出的页面中不要勾选任何「则合并」，但请选中「无剪裁、导出为 Unity、将 PNG 放在文件外」。

AicToolBox 的第二个功能是将 localization 文件夹中的 tx 和 ev 类 txt 文件以「tx 类按语言合并，ev 类按事件拆分」的方式导出为 yml 格式，使用时需要选中 AliceInCradle.exe 文件。  
具体而言，它会从该 exe 文件出发以相对路径读取 AliceInCradle_Data/direct_resources/__tx_list 文件，然后依次读取 AliceInCradle_Data/StreamingAssets/localization 文件夹下的各个语言中的 txt 文件。  
对于 tx 类文件，它会严格读取 __tx_list 中列出的那些（如果以叹号开头则会统一使用日本语文件夹`_`下的文件）。  
最终它会生成一个 AliceInCradle_Data/aicutils_l10n 文件夹，其下是所有 yml 格式的翻译文本。  
对于 macOS，可以将不含有 __AdditionalFonts 子文件夹的整个 localization 文件夹复制到某个空的 StreamingAssets 文件夹下，再将这个 StreamingAssets 文件夹与一个空的 direct_resources 文件夹放在同一个空的 AliceInCradle_Data 文件夹下，然后在这个空的 direct_resources 文件夹下新建一个 __tx_list 文件（比如通过终端的 vi 命令）并输入下面的内容，最后在这个 AliceInCradle_Data 文件夹外新建一个空的 AliceInCradle.exe 文件就可以使用此功能了。
```
_tx
_tx2
_tx3
_tx4
_tx2_ep
_tx_magic
_tx_enemy
_tx_skill
_tx_enhancer
_tx_event
_tx_tuto
_tx_item
_tx_scenario
_tx_config
_tx_ev_whole
_tx_map_name
_tx_mgm_ttr
!_tx_whole
```
对于 Windows，可以使用类似的办法（终端使用 notepad 命令代替 vi 命令），也可以直接用下面的 AicUtils 插件生成所需的 direct_resources 文件夹和其下的全部文件。

在 Windows 以及 Intel 芯片的旧款 macOS（新款苹果自研芯片的不行），民间广泛流传着一款用于各种 Unity 游戏的插件管理器 BepInEx，SNS 同人社的另一位大佬「凌空の猫」曾在 0.22 基于此开发了一个能够用外部文件夹内的文件在运行时覆盖 resources.assets 中内容的插件 AnyInCradle。该插件在 0.25 的功能很有限，目前在 Windows 基本上已被 e9ae9933 的 AicUtils 插件取代。

AicUtils 具有类似 AssetStudio 的解包功能，但解出的资源文件命名有所不同且会直接放在原目录下（resources.assets 文件的解包结果则会放在前述的 direct_resources 文件夹下），如果是 png 文件则可以直接修改其各个像素点的颜色（如需修改尺寸则必须先与对应的 pxls 文件合成为 pxl 文件再用 PixelLiner 修改后重新导出）。

AicUtils 还可以配合前述的 aicutils_l10n 文件夹下的 yml 文件来实现翻译文本的重定向（与 F9 刷新 txt 不同，刷新 yml 要用 F11），yml 是一种兼容 json 语法的格式，SNS 同人社正在开发能够同时导出 cmd 和 yml 文件的事件编辑器。

### m2d 和 evt 文件夹、cmd 文件和哈语言
m2d 和 evt 文件夹下都有很多 cmd 文件，这些文件并不是 Windows 下类似 bat 一样双击运行的批处理脚本。

m2d 文件夹下的 tmap 和 cmd 文件是成对存在的，其中 tmap 文件可被「凌空の猫」用 Python3 编写的工具来和 json 格式的文本文件（可手动编辑）互相转换。tmap 文件定义了地形元件的排布（比如哪里是荆棘、哪里是虫墙）和某些锚点，cmd 文件则定义了 NPC 像素小人的位置和姿态等。

未使用 AicUtils 插件时，m2d 文件夹下的 cmd 文件在修改后必须返回标题画面才会生效，单纯的切换地图或存读档是不行的。

evt 文件夹下的 cmd 文件的内容是哈酱自研的一种新的脚本语言，本指南称其为「哈语言」（HashCode），这类 cmd 文件修改后只需重新触发对应的事件，无需其他刷新操作。

在详细讲解哈语言的各类指令之前，下面先介绍一些常用的重要概念。

### 角色标识符
之前提到的 EvImg 和 MapChars 文件夹下分别有大量名为 __ev_x 和 sub_x 的素材文件，
这些 x 称为「角色标识符」。

对话类指令以及图片类中操作立绘的指令都需要通过角色标识符进行，所有的角色标识符在下面列出。
> <b>重要提醒</b>：  
> 立绘相关指令使用的角色标识符为一到两个专属小写字母，和 EvImg 文件夹相对应。  
> 可以通过 F7 控制台的 VP 命令或 evt 文件夹下的 __vp_person.dat 文件来确认。  
> 该 dat 实际是个文本文件，可被记事本等文本编辑器打开。  
> 而对话类指令则需要为没有立绘的 NPC 分配临时标识符。

a: 未使用，很可能会留给第二章的可操作角色「幽灵」爱丽丝。  
b: 序章中杂货店的两名客人，其中一名是休息室的顾客杰德先生。  
bt: 「三月兔」酒吧的酒保，barten 的音节缩写，但更建议理解为「变态」二字的首字母。  
cane: 诺艾儿的法杖（伊夏被土蛇抓去时收到求救信号）。  
cm: 0.24 新增的咖啡师，Coffee Maker 的首字母。  
d: 提尔德・柯涅尔（三哥），出自 tilDe。  
dj: 菲奥蕾特道场的二掌门，dojo 的音节缩写。  
e: 未使用。  
f: 德尔菲尼・柯涅尔（父亲），出自 delFini，但更建议理解为 Father 的首字母。  
fm: 牧场的奶农，farmer 的音节缩写。  
fm_cfg: OOC的奶农，居然知道诺艾儿开启了自动奔跑和摇杆奔跑。  
g: 梅法・格里亚德（蓝发队长），Gridyard 的首字母。  
i: 伊夏・波利斯塔切尔（短袖黄发同学），Ixia 的首字母。  
h, j, k: 未使用。  
l: 阿尔玛・奥普菲帕姆（长袖兜帽同桌），出自 aLma。  
ma, mb, mc, mb+数字: 格拉提亚城镇的各种 NPC，比如 mc 是一位认为「两周前是诺艾儿自己把魔族引到学校的」的同学。  
mob: 教室门口认识诺艾儿和阿尔玛的一位同学，并且认为诺艾儿的白色套装很可爱很合适。  
n: 诺艾儿・柯涅尔（自己），Noel 的首字母。  
nb：坐在马桶上的诺艾儿，Noel Bath 的首字母。  
noelcane, ixiacane: 诺艾儿和伊夏的法杖，伊夏被森之领主抓去时前者自动进行信号中继转发，随后梅法队长通过后者与诺艾儿通信。  
ow: 美术馆馆长（猫头鹰），初次见面会向诺艾儿索要九万枚金币，owl 的前两个字母。  
p: 普莉姆拉老师，Primula 的首字母。  
pp: 0.24 新增的小木偶采购员，虽然它只会说省略号，出自 puPPet。  
q, r: 未使用。  
s: 奥斯托利亚（白狗兽人），出自 oStrea。  
st: 菲奥蕾特道场的门徒，student 的前两个字母。  
t: 南丁格尔（编织者之森里的女精灵行商），出自 nighTingale。  
tc: 和阿尔玛一起上课时的学园老师，teacher 的音节缩写。  
u: 未使用。  
v: 丽薇歌塔・柯涅尔（二姐），出自 laeVigata。  
w: 瓦罗斯（黑狼兽人），Walross 的首字母。  
x: 魔女杂货店和编织者之森里的各位可调查 NPC，包括站在桥头没有立绘的梅法队长。  
y, z:未使用。

截至 0.25f，有立绘的角色有 bt, d, f, g, i, l, n, nb, p, s, t, v, w。

### 图层参数和位置参数
TALKER 等一些指令需要指定位置参数，它们可以在 evt 文件夹下的 __vp_talker_pos.dat 文件中被找到，该文件和 __vp_person.dat 一样是文本文件。

粗略地说，水平方向从左到右共有 9 个基本位置：LL L CL CCL C CCR CR R RR，每个位置后又可再加上 T 或 B 表示向上（Top）或向下（Bottom）偏移从而得到 27 个标准位置。

此外还有 23 个特殊位置（共计 50 个）：
1. LLH, RRH: 比 LL 和 RR 更靠左或更靠右，但不能上下偏移。
2. CLL, CRR: 介于 L 和 CL（或 CR 和 R）之间，但不能上下偏移。
3. T, B, TT, BB: 其中 T 和 B 就是 CT 和 CB，而 TT 和 BB 更靠上或更靠下。
4. LTOUT, LBOUT, RTOUT, RBOUT: 屏幕的四角之外。
5. LOUT, ROUT, BOUT: 屏幕的四边（上边除外，不要写 TOUT）之外。
6. LTT, RTT, BBL, BBR: 请自行理解，而且这里字母 L 和 R 的位置不统一，比较难记。
7. CCLCT, CCLCB, CCRBB, CRRTT: 这特么都是啥？

PIC 系列指令往往需要指定图层参数，一般为`#0`到`#9`（背景）以及`&0`到`&9`（前景），其中背景会被立绘遮挡，前景会遮挡立绘，同类之间则是数字大的遮挡数字小的。

### 哈语言的指令分类
哈语言每条指令的基本形式为`指令名 参数1 参数2 ... 参数n`，各部分之间用空格隔开，参数本身带有空格则要用一对单引号`'`包裹住（但也许不是每个指令都支持，请尽量避免）。

事件运行中的 F7 控制台会对部分哈语言指令用特殊的颜色显示，但分类并不全面。本指南采用多种分类方式，比如按照在二创中的功能或在 C# 源代码中所在的文件来分类。
1. 对话类：包括 <font color=#B98AB1>TX_BOARD, MSG_PREFIX</font>, <font color=#50FF6D>MSG</font>, <font color=#FFB47A>TALKER, TALKER_REPLACE, HKDS</font>，如果想做出视觉小说级别的二创作品，那么这类指令和 PIC 指令基本上就足够了。
2. 图片类：包括 <font color=#8BB6FF>PIC</font> 和 <font color=#8BB6FF>PIC_XX</font>，它们全部位于源代码的 EvDrawerContainer.cs 文件，在二创中非常有用但学习门槛要稍高于对话类指令。
4. 延迟类：包括阻塞指令 WAIT、WAIT_BUTTON，延迟修饰符 TL、MTL，以及取消延迟的指令 DOTL, DOMTL, CLEARTL, CLEARMTL，从而灵活实现「同步的」和「异步的」效果。
5. 子过程类：包括 <font color=#FF75AC><i>CHANGE_EVENT, CHANGE_EVENT2, MODULE</i></font> 和以`@`开头的宏调用，这类指令完美解释了什么叫 Stop New Sameness。
6. 流程控制类：包括 IF, IFSTR, IFDEF, IFNDEF, IFLANG 以及在它们开头加上 ELS 的版本，还有 ELSE, LABEL, GOTO, SEEK_END 以及二创最常用的 SELECT 系列指令。
7. 主角操作类：包括 PR_XX, SER_APPLY, SER_APPLY_NEAR_PEE，它们几乎全部位于 NelM2DBase.cs 文件，且必须在 #<%> 指令后使用。
8. 其他类：难以划入上面几类的指令，如开关/变量、物品/技能/魔法、音频等的控制，对于这一类的讲解如果不能满足读者需求（或读者有指正/补充）请联系 SNS 同人社。
9. `#XX`: 以井号开头的指令，它们全部位于 M2EventCommand.cs 文件（但该文件里也有不以井号开头的指令）。它们控制着像素小人和地图物件，二创最常用的是 MoveScript 相关指令。
10. `<XX>`: 用一对尖括号包裹住的指令，二创似乎完全用不到，它们全部位于 EV.cs 文件，目前只有`<NOLOAD>`, `<LOAD>`, `<LOADA>`, `<MODULE_LOAD>`, `<CLEAR_CACHE>`, `<DEBUG>`, `<CHECK>`, `<BREAK>`（在哈语言中添加断点）。
11. `%XX`: 以百分号开头的指令，它们似乎只会用于 m2d 而不是 evt 文件夹下的 cmd 文件，详情不明。

虽然类型很多，但都会被一一讲解。由于篇幅较长，读者可对以下内容先挑急用的和感兴趣的看，二创制作过程中遇到问题了再来随时查阅。

## 对话类指令
这个系列的指令一般要配合修改 localization 文件夹下的 txt 文件才能获得正确的显示效果。

### TX_BOARD: 书信/告示牌
语法为`TX_BOARD id n`，例如：
```
// 序章老师留在诺艾儿桌子上的信
TX_BOARD _eventboard_s01_letter 4
// 第一章伊夏让丽薇歌塔转交给诺艾儿的信
TX_BOARD _eventboard_s04_letter 4
// 小木偶的告示牌，根据所属事件不同内容会有变化
TX_BOARD *pp_board
```
id 不可省略且有两种写法：  
一种是 0.20~0.23 的写法（常用于路标牌），以下划线`_`开头且定义在 tx 类 txt 文件里；  
另一种是 0.24 以来的写法（常用于剧情事件），以星号`*`开头且定义在 ev 类 txt 文件里。

数字 n 表示显示特效：黑底（2）、花边黑底（3）、花边书信（4），不填视为 3。

### MSG: 对话/独白
基本语法为`MSG x_id`或`MSG ID*x_id`或`MSG $_key`或`MSG BOOK@p_id`，也可以追加第二个参数`R[y_id]`。

看上去有些复杂，下面逐一讲解：
1. `MSG x_id`: x 为一个角色标识符，id 一般为两位数字的编号（条件分歧时后面往往再加一个小写字母），该指令会从 ev 类 txt 文件中读取一条对话并显示，如`MSG n_01`。
    > 二创作者自己分配数字 id 的心智负担很重，目前 SNS 同人社正在研发能够直接书写对话内容并自动分配 id 的事件编辑器。
2. `MSG ID*x_id`: 有时会需要「显示来自另一个事件的对话」（比如没在车站和阿尔玛对话的情况下直接和她一起上课），这时需要用 ID 来指定来自哪个事件，如`MSG s12_2a*l_24`。
    > 但是，来自 ev_book.txt, ev_fatal_snake.txt, ev_trm_01.txt 的内容会因为没有 x 值而无法按预期显示。
3. `MSG $_key`: 有时需要根据条件分歧来显示不同对话，但不方便直接把 MSG 指令放在 IF-ELSE 指令块内（比如道场和牧场的小游戏中），这时就需要先在分歧中使用`_key=...`来预定，随后再使用`MSG $_key`来实际显示对话。此处 key 为任何自取的名字，例如下面的例子（节选自牧场小游戏，如果不采用 key 这种写法，两处省略号的指令怕是要抄三遍了）。
    ```
    IF $_grab'==0' {
        _msg_0=n_00
        _msg_1=n_01
        _gacha_c=4
        _gacha_image=still_city_cow/cow_lick_0
    } ELSIF $_grab'==1' {
        _msg_0=n_10
        _msg_1=n_11
        _gacha_c=8
        _gacha_image=still_city_cow/cow_lick_1
    } ELSE {
        _msg_0=n_20
        _msg_1=n_21
        _gacha_c=12
        _gacha_image=still_city_cow/cow_lick_2
    }
    ......
    MSG $_msg_0
    ......
    MSG $_msg_1
    ```
    这种用变量作为实际参数的做法在后面的指令中非常常用，学习时请循序渐进。
4. `MSG BOOK@p_id`: 此用法自 0.20 以来只用于在长椅上显示 ev_book.txt 的书页内容（濒死治疗、强制自慰），实际上可以被带有 BOOK 参数的 HKDS 指令所替代。  
    此处 p 为一个位置参数，id 为 b00~b09，例如`MSG BOOK@L_b00`。
5. `MSG x_id R[y_id]`: 0.25 的新增用法，x_id 代表显示的对话，y_id 代表对话记录（酒保的暗号效果）。此时角色标识符 y 被忽略，记录中仍为 x 的头像和背景色（即使 x 被绑定了别的姓名也一样）。另外如果 x_id 使用了`ID*x_id`来指定另一个事件，则 y_id 也会被视为来自该事件。

不同角色交替说话时，除正在说话的人以外，其他人的对话框会变为暗色并被立绘遮挡，默认按下 Ctrl 键可以暂时隐藏所有对话框。
> MSG 指令一般来说会阻塞事件的执行流程，直到玩家按下确定或取消键。这样的指令被称为「同步的」，后文中还会学习到「异步的」指令以及两者之间的转化。

### MSG_PREFIX: 对话/独白前缀
在 localization 文件夹中，ev 类 txt 的每条对话开头都可以使用`<xxx>`来进行各项调整（包括但不限于对话框样式）。为了方便，0.25 起可以在 cmd 文件中直接用`MSG_PREFIX x '<xxx>'`指令来将（此事件中？）角色 x 接下来的所有对话统一加上某种前缀（不会进入对话记录），再次使用此指令则可以更改此前缀。

如果用此指令更改了斜体、字号、颜色、特效，那么会因为缺少相匹配的结束标签`</xxx>`而导致对整条对话生效。

本指令最大的意义在于，我们终于可以在几乎不改动 txt 文件的情况下直接将对话的正文写在 cmd 文件中了。只要在某一个 ev 类 txt 文件（比如不影响游戏流程的 ev_debug.txt）中为所有角色各定义一条空对话，就可以通过在每条 MSG 指令前使用一条 MSG_PREFIX 指令来实现目的，即便有多国语言需求也可以配合 IFLANG 指令来做到。
> 但是，本指令输入的对话既不能换行也不能分页，往往需要配合 WIDE_TT 的对话框样式才能勉强说完一句话，或许需要修改 dll 文件来优化。

### TALKER、TALKER_REPLACE: 更改立绘位置、绑定姓名音效
`TALKER x p`更改立绘位置，其中 x 为角色标识符，p 为位置参数。

在一段对话中 TALKER 指令首次用于某角色时会让其立绘出现在指定位置，再次用于该角色时则会让立绘平移到新位置，如果是以 OUT 结尾的 7 个位置则会移出画面。

如果对角色 x 首次使用`TALKER x p`指定的位置 p 已经存在另一个角色 y，那么 y 的立绘将会消失，此时可以立刻更改 x 的立绘差分来做出换人的效果，例如下面的例子。
```
TALKER n L
PIC n a_1/a22__F1__f1__m1__b1__u0
WAIT_BUTTON
TALKER i L
PIC i i/a00L5R3__F1__f1__m1__b1_u0
WAIT_BUTTON
```
`TALKER_REPLACE x name talk_xxx`绑定姓名和音效，其中 x 为角色标识符，name 为角色姓名词条，talk_xxx 为对话音效。

所有的姓名词条都在 XX_tx_ev_whole.txt 中以 &&Talker_name 的形式定义，具体如下：
|name|姓名|备注|
|---|---|---|
|Alma|阿尔玛・奥普菲帕姆|长袖兜帽同桌|
|Barten|酒保|实为魔族|
|CoffeeMaker|咖啡师|0.24 新增|
|EnemyPuppet|木偶型魔族|0.24 新增|
|Ixia|伊夏・波利斯塔切尔|短袖黄发同学|
|IxiaCane|伊夏的法杖|发出噪音|
|Laevi|丽薇歌塔・柯涅尔|二姐|
|Mepha|梅法·格里亚德|蓝发队长|
|Nightingale|南丁格尔|精灵行商|
|Noel|诺艾儿・柯涅尔|自己|
|NoelCane|诺艾儿的法杖|中继转发|
|NoelDad|德尔菲尼・柯涅尔|父亲|
|Ostrea|奥斯托利亚|白狗兽人|
|Primula|普莉姆拉|狐狸老师|
|Tilde|提尔德・柯涅尔|三哥|
|Walross|瓦罗斯|黑狼兽人|
|Unknown|？？？|认识的人|
|Mob|＊|陌生人|
|Army|士兵|精灵之村的|
|army|军人|格拉提亚的|
|beastman|兽人山民|两位施工者|
|Customer|客人|杂货店顾客|
|dairy_farmer|奶农|牧场主|
|dojo_teacher|师傅|道场二掌门|
|dojo_student|门徒|道场学员|
|elf_man|精灵男性|面试者|
|elf_woman|精灵女性|初见南丁格尔|
|elf_madam|精灵大姐姐|清洁志愿者|
|elf_student|精灵学生|愚者的提示|
|engineer|工程师|结界修理工|
|Guard|村庄卫兵|杂货店卫兵|
|museum|馆长|美术馆馆长|
|Soldier|士兵|未使用|
|teacher|老师|教室里的|

有立绘的角色一般不需要特意设置对话音效（可在`__vp_person.dat`文件中看到默认音效），经过对 talk.acb 文件的拆解，目前认为总共有以下音效（都需要接在 talk_ 后面）：
1. alma, barten, ixia, nightingale, noel, tilde: 阿尔玛，酒保，伊夏，南丁格尔，诺艾儿，提尔德。
2. alice: 未使用，显然会是第二章的可操作角色「幽灵」爱丽丝。
3. cane: 法杖无线通信，诺艾儿和伊夏的法杖都可以用。
4. demon: 小木偶采购员，虽然它只会说省略号。
5. guard: 魔女杂货店卫兵。
6. levi, levi2: 丽薇歌塔（有两个，其中一个可能用于休息室？），注意不是 talk_laevi。
7. m1: 普莉姆拉，注意不是 talk_primula。
8. nodad: 德尔菲尼，注意不是 talk_noeldad 或 talk_delfini。
9. mob_w3_noise: 伊夏的法杖发出的噪音，建议所有`<noise>`样式的对话框都用它。
10. mob_m0s: 教室里的老师。
11. mob_mN: 男性 NPC，其中 N 为 0 到 8 的整数。
12. mob_wN: 女性 NPC，其中 N 为 0 到 9 的整数。
13. tigrina: 未知。

此外，偶尔要用到`TALKER_REPLACE n '=' ''`这样的写法来暂时取消诺艾儿的说话音效，并配合 HKDS 指令的 MONOLOGUE 参数来实现黑屏内心独白。
> 如果需要恢复某个角色的默认姓名音效，请只写`TALKER_REPLACE x`即可。

### HKDS: 对话框样式设置
`HKDS x pos from style`设置某个角色的对话框样式，各参数的意义如下：
1. x: 角色标识符，不可省略。
2. pos: 位置参数，表示「对话框所在位置」，默认为自动（多人对话时对话框会互相避让）。
3. from: 对话框尖角所指的位置，有立绘的角色默认指向立绘。  
    可以使用`@位置参数`表示绝对位置，也可以使用`#<npc>`表示指向某个 NPC 的像素小人。  
    初学者建议先熟悉`@位置参数`的写法，这是因为在`#<npc>`的写法中 npc 必须和 m2d 文件夹下与当前地图 id 同名的 cmd 文件中的定义相符，较难掌握。
    > 除了`#<%>`表示指向诺艾儿以外，这里给出一部分 npc 的写法（其中 owl 为美术馆馆长，请注意 farmer 没有 dairy_ 前缀，Nightingale 的 N 为大写）：  
    > alma, farmer, ixia, ixiacane, laevi, mepha, Nightingale, ostrea, owl, primula, tilde, walross, sihan（道场二掌门）
4. style: 对话框样式，有以下几种取值。
- 默认：宽度 420，高度 240，16 字 5 行的由来。
- TT: 宽度 420，高度 160，高度变为默认的 2/3，只够显示 2 行字。
- WIDE: 宽度 800，高度 240，宽度约为默认的 2 倍。
- WIDE_TT: 宽度 800，高度 160，上面两个的融合。
- MONOLOGUE: 在 WIDE_TT 的基础上去掉了姓名栏（因此至少可以显示 4 行字），且正文在横竖方向都居中，常用于黑屏内心独白。
- ONELINE: 宽度 346，高度 64，只够显示一行字且左右居中，用于伊夏的战斗中台词。
- BOOK: 宽度 870，高度 480，背景为书页。
    > BOOK 参数的存在意味着`MSG BOOK@L_b00`指令和 ev_book.txt 可以被取代。

pos, from, style 这三个参数都可以填`'='`表示保持不变，填`''`表示恢复默认，位于结尾的`''`不管有几个都可以省略，这种写法在其他指令中也会用到。

下面是一个完整的例子（包含了三条图片类指令）：
```
TALKER i L
PIC_FLIP i X
PIC i i/a00L1R1__F2__f2__m1__b1_u0
PIC_MP i ANG
HKDS n C #<%> ONELINE
MSG s11_2a_1*n_03 R[n_05]
```

## EvDrawerContainer.cs 的图片类指令
这类指令除 PIC 外全部以 PIC_ 开头，且在 F7 控制台右侧显示为蓝色。这里先列出所有指令：  
`PIC_B, PIC_CLEAR_TERM_CACHE, PIC_FADEIN, PIC_FADEOUT, PIC_FI, PIC_FILL, PIC_FINE, PIC_FINE_ALL, PIC_FLASH, PIC_FLIP, PIC_FO, PIC_FX, PIC_FY, PIC_HIDE, PIC_HIDE_ALL, PIC_MOVE, PIC_MOVE2, PIC_MOVEA, PIC_MP, PIC_MP2, PIC_MV, PIC_MV2, PIC_MVA, PIC_MVA_WHOLE, PIC_R, PIC_RADIATION, PIC_RECT, PIC_REM, PIC_RIDE, PIC_SILHOUETTE, PIC_SWAP, PIC_SWIN, PIC_SWIN2, PIC_SWIN_G, PIC_SWIN_PASTE, PIC_SWIN_SHADOW, PIC_TEMP_REPLACE_TERM, PIC_TFADE`

### PIC: 更改立绘差分、显示图片
`PIC x ...`更改一个角色的立绘差分，首次使用 TALKER 指令指定位置后必须用此指令才能看到立绘。

立绘差分由肢体姿势和面部表情两部分组成，极难记忆（比如上面例子中的伊夏）。建议使用 F7 控制台的 VP 命令进行选择，再用 Ctrl+C（Command+C）从左上角的命令栏里复制。

如果 x 不是角色标识符而是图层参数，就可以用来显示非立绘的图片，它们同样可以用 VP 命令选择，但请记得改掉`&0`参数。
> 家中卫生间的事件中用到了形如`%0`、`%1`、`%2`的图层参数，意义不明，一般用`#`或`&`加数字即可。

### PIC_B: 带纯色背景显示图片
有时会需要显示一张带有透明度的图片，如果直接使用 PIC 指令可能会不合适。这时候可以使用下面的语法。  
`PIC_B id ... '' color`  
例如`PIC_B #0 lunch_cutin/noel_lunchst '' RED`，请注意观察桌子下灰白色半透明阴影中透出的红色。  
其中 id 为图层参数，`''`为一对单引号（固定写法），color 为背景色，可以使用以下词汇或`FF:#66CCFF`这样的十六进制颜色（注意冒号左边的不透明度不能省略！）：  
WHITE, BLACK, RED, DARK, GREEN, YELLOW, SKY, PURPLE

### PIC_MP, MIC_MP2: 立绘表情符号
`PIC_MP x XXX`为一个立绘添加表情符号，有些符号是一次性的，有些则会循环播放直到下次立绘差分更改时（或再次使用此指令时）。可用的表情符号如下：  
QUE, AWK, EXC, SWT, SWT2, SWB, EXQ, PLE, BLS, DEP, KIR, ANG, LAG, HEA, HEA2, TTT, BSM, LIG, ONP, ONP2, PIY, PLE2, HOT

如果需要将多个表情符号叠加，可使用`|`（在退格键下面，英文状态用「Shift+顿号」输入）连接，如`PIC_MP n SWT2|BLS`。

0.25 新增了`PIC_MP2`指令用来同时给课桌前的诺艾儿和阿尔玛添加表情符号，其第一个参数为图层参数，第二个参数为 noel0 或 noel1 或 alma，第三个参数才是表情符号。  
换言之，`PIC_MP x y z`等价于`PIC_MP2 x _ y z`。

### PIC_MOVEA, PIC_MVA, PIC_MVA_WHOLE: 立绘抖动
`PIC_MOVEA x n XXX`（PIC_MOVEA 也可简写为 PIC_MVA）令一个立绘抖动 n 帧（1 秒等于 60 帧，-1 可能表示直到下次立绘差分更改前），可用的抖动类型如下（NONE 表示停止抖动）：  
NONE, HOP, SCARY, FLY, CAR, SCARY2, ANGER, LOVELY, BLINK, BLINK2, JUMP, JUMPB, WEEKHITL, WEEKHITR, SHAKE, ZOOM2, ZOOM3, ZOOM4, ALP50, DANCE, SIN_H, SIN_V, HANDSHAKE

此外，`PIC_MVA_WHOLE type n XXX`指令一次抖动同类图层的所有图片，其中 type 为`#`（背景）`T`（立绘）`&`（前景）`W`（窗口）`%`（未知）的字符组合（也可填`''`表示所有类型）。

### PIC_FILL, PIC_FADEIN, PIC_FADEOUT: 画面淡入淡出
连用以下两条指令可以让画面逐渐变成纯色：
```
PIC_FILL id color
PIC_FADEIN id n
```
其中 id 为图层参数，color 为颜色（不填视为 WHITE），n 为渐变的帧数（建议为 15 的倍数）。

`PIC_FADEOUT id n`让纯色的画面在 n 帧内逐渐退去（id 可以为角色标识符），其中 FADEIN 和 FADEOUT 可分别简写为 FI 和 FO。

### PIC_FLASH: 画面纯色闪烁
`PIC_FLASH id x y z color`让画面闪烁，各参数的意义如下：
1. id 和 color: 图层参数和颜色。
2. x: 开始执行此指令后 x 帧时画面突然变为纯色（不是渐变！不是渐变！不是渐变！）
3. y: 画面变为纯色后保持 y 帧。
4. z: 画面保持纯色 y 帧后在 z 帧内逐渐退去。
> 到目前为止我们已经接触到好几个带有帧数参数的指令，这些指令执行完虽然需要一定的时间，但不会像 MSG 指令一样阻塞事件流程，而是在开始执行的同时就立刻再去处理下一条指令了，像这样的指令被称为「异步的」。

### PIC_FLIP: 图片翻转
`PIC_FLIP id X/Y/XY`将一张图片（包括立绘）翻转，id 为图层参数或角色标识符，X 表示左右翻转，Y 表示上下翻转，XY 表示旋转 180°。对立绘使用时需要注意以下两点：
1. 立绘上下翻转或旋转 180° 后 PIC_MP 显示的表情符号位置就不在脸旁了。
2. 立绘只进行左右或上下之一的翻转后，角色原本的不对称特征也会被翻转，如诺艾儿会变为右手持法杖。

虽说`PIC_FLIP id X/Y`可简写为`PIC_FX id`或`PIC_FY id`，但没什么必要。

### PIC_HIDE, PIC_HIDE_ALL: 隐藏立绘或图片
`PIC_HIDE id 0/1`隐藏某个立绘或图片，id 为角色标识符或图层参数，0 或不填表示立绘平移出屏幕或图片原地淡出，1 表示原地突然消失（相当于`PIC_REM id`）。

`PIC_HIDE_ALL type 0/1`隐藏某个类型的所有图片，其中 type 为`#`（背景）`T`（立绘）`&`（前景）`W`（窗口）`%`（未知）的字符组合（也可填`''`表示所有类型），0/1 的含义同上。

### PIC_MOVE, PIC_MOVE2: 平移立绘或图片
`PIC_MOVE id x y n type`或`PIC_MOVE2 id x1 y1 x2 y2 n type`精确地平移某个立绘或图片，其中 id 为角色标识符或图层参数。

这两个指令非常复杂，使用时要注意以下几点：
1. 在 PIC_MOVE指令中 x y 表示<b>图片中心</b>要移动到的终点，在 PIC_MOVE2 指令中 x1 y1 和 x2 y2 分别表示平移时图片中心的起点和终点。  
    PIC_MOVE2 指令实际执行时会先瞬移到起点，再在 n 帧内逐渐平移到终点。
2. AiC 的画面逻辑大小是 1280×720，因此横坐标的范围是`[-640,640]`，纵坐标的范围是`[-360,360]`，0 表示在画面内居中。  
    在用这两个指令移动图片时 x 轴与 y 轴和中学数学一样，正方向分别朝右和朝上。
3. 坐标除了直接填写常数外，还支持填写`D-n`或`D+n`来表示相对图片原本位置的偏移量。  
    这里 n 为非负整数，减法偏左或偏下，加法偏右或偏上。
4. type 为移动模式，一般建议写 ZLINE 表示匀速运动。
> 横纵坐标在现有的 cmd 文件里有时会用逗号分隔，建议用空格而不要用逗号。  
> type 实际的取值范围是源代码 X.cs 文件中所有签名为`public static float NAME(float)`的函数名，一般为以 Z 开头的全大写，具体如下。

ZSIN, ZSIN2, ZSIN3  
ZSINV, ZSINV2, ZSINV3  
ZPOW, ZPOW3, ZPOWV  
ZCOS, ZLINE, ZEXPLODE

如果在这些函数名开头再加上 R（即以 RZ 开头）则会令起点和终点交换（不是把移动过程倒放），虽然这对 PIC_MOVE2（可简写为 PIC_MV2）来说意义不大但对 PIC_MOVE（可简写为 PIC_MV）来说很有意义。

确切地说，这些 Z 函数总是会计算出一个随时间变化但取值始终在 0 和 1 之间的权重（ RZ 函数则是 1 减去对应 Z 函数的值），而图片中心的实时位置则是起点和终点的加权平均，本质上是两点确定一条直线的参数方程。

### PIC_RADIATION, PIC_SWAP: 万箭穿心、交换图层
`PIC_RADIATION id color`实现纯色的万箭穿心动画；  
`PIC_SWAP id1 id2`交换两个图层，从而改变遮挡关系；
> PIC_RIDE 指令的参数与 PIC_SWAP 完全一致，但效果不明。

### PIC_SWIN: 显示单张提示图片
0.25 新增了一个探索编织者之森 5 个指定地点的支线任务，每次提示下个地点时会使用`PIC_SWIN treasurehunt/treasurehunt_000__N`，其中 N 为 0 到 5。

这种用法也可以用来显示其他尺寸不太大的图片，显示时会衬一个灰白色的圆角矩形作为背景。

这种图片同时只能显示一张，并且强制绑定`%W`作为图层参数，可以进一步用 PIC_MOVE 指令平移到不居中的位置。

图片显示后，会继续执行下面的指令，因此如果下一条指令不是对话，则往往会使用 WAIT_BUTTON 指令等待玩家按键。

本指令事实上可以再追加一个参数作为显示在图片下方的注解，但颜色强制为灰白色且只能写一行，还不支持翻译文本。因此即使写成`PIC_SWIN '' 这样写的话最多可以显示十八个全角字符`来显示纯文字，实用价值也很有限。

源代码中还存在 PIC_SWIN_G 和 PIC_SWIN2 指令但游戏中未使用，详情不明。  
源代码中还存在 PIC_SWIN_PASTE 和 PIC_SWIN_SHADOW 指令但没有效果。  
此外，evt 文件夹下的`___Other`子文件夹中有一个 swin.cmd 文件定义了一个相关的宏。

### PIC_SILHOUETTE: 显示立绘剪影
有时会需要一些长得都一样的群众演员，这显然没法用 TALKER 和 PIC 指令做到。

`PIC_SILHOUETTE id ...... p I`显示一个立绘剪影，各参数的含义如下：
1. id: 图层参数，每个剪影应当使用不同的图层。
2. ......: 图片名，虽说用的最多的就是`silhouette/mob_man2`（精灵）和`silhouette/mob_witchman`（持法杖者），但其他图片应该也没问题。
3. p: 位置参数，但是本指令似乎只支持下面例子中的 10 个位置以及位置 C。
4. I: 对于 C 以外的位置，不填 I 可以让图片从较近的左右边缘平移入画，填 I 则会和位置 C 一样突然出现。

下面是一个仿照梅法出场的例子：
```
PIC_SILHOUETTE #0 silhouette/mob_witchman LL
WAIT 20
PIC_SILHOUETTE #2 silhouette/mob_witchman L
WAIT 20
PIC_SILHOUETTE #4 silhouette/mob_witchman CLL
WAIT 20
PIC_SILHOUETTE #6 silhouette/mob_witchman CL
WAIT 20
PIC_SILHOUETTE #8 silhouette/mob_witchman CCL
WAIT 20
PIC_SILHOUETTE #9 silhouette/mob_witchman CCR
WAIT 20
PIC_SILHOUETTE #7 silhouette/mob_witchman CR
WAIT 20
PIC_SILHOUETTE #5 silhouette/mob_witchman CRR
WAIT 20
PIC_SILHOUETTE #3 silhouette/mob_witchman R
WAIT 20
PIC_SILHOUETTE #1 silhouette/mob_witchman RR
WAIT 20
TALKER g C
PIC g p1/a0L1R3__F1__e2__u2
HKDS g B @C WIDE_TT
MSG s13_4a*g_07b
```

### PIC_TFADE: 图片特殊渐变
在`PIC_FADEIN id n`或`PIC_FADEOUT id n`指令后紧跟`PIC_TFADE id type`令一个图片进行特殊渐变，其中 id 为图层参数，type 的取值范围如下：
1. L2R, R2L, T2B, B2T: 横竖渐变。
2. LT2RB, TR2BL, BL2TR, RB2LT: 斜向渐变，注意字母的书写顺序。
3. EYE_OPEN, EYE_CLOSE: 眨眼渐变。
4. DOOR_OPEN, DOOR_CLOSE: 开关门渐变。
5. EXPAND, CONTRACT: 伸缩渐变。
6. NANAMEDOOR_LT_RB, NANAMEDOOR_TR_BL: 可能是来自 Hinayua 其他作品的斜向渐变。
7. DISSOLVE: 碎片化渐变。
8. ARROW_L, ARROW_T, ARROW_R, ARROW_B: 单向渐变。

### PIC_TEMP_REPLACE_TERM, PIC_CLEAR_TERM_CACHE: 立绘替换规则
这是一对很有用的指令，它们用来对某个角色标识符的立绘添加或移除替换规则。

举例来说，医务室的伊夏同学在超健全模式下会穿着完整的学园制服，而在其他模式下则只穿内衣。

因此，可以使用`PIC_TEMP_REPLACE_TERM i '(a\\d+)(L\\d+R\\d+)?' '$1Nk' 'sensitive_level<2'`将非超健全模式的伊夏立绘替换为内衣立绘。

一般地，`PIC_TEMP_REPLACE_TERM x 'regex' 'replacement' 'condition'`施加一个替换规则。

其中 x 为角色标识符，regex 为被替换的「正则表达式」（字符串的一个重要概念，网上有大把的教程，只要注意`\\`的使用），replacement 为替换后的字符串（可以用`$1 $2`等来引用 regex 中圆括号内的部分），condition 为触发替换的条件（和 IF 指令的条件一致）。

`PIC_CLEAR_TERM_CACHE x`移除某个角色的所有替换规则。

### 其他 PIC 系列指令
由于水平有限，本帮助文档无法讲解 PIC 系列的以下指令：
1. PIC_R: 游戏中未使用，似乎不是哈语言指令而是 F7 控制台命令。
2. PIC_FINE, PIC_FINE_ALL: 游戏中使用过，前者带一个图层参数，后者无参数且在休息室的浴室和牧场用到，效果不明，可能和尺寸自适应有关。
3. PIC_RECT: 游戏中未使用，下面的源代码表明此指令参数很多，有待研究。
``` cs
case "PIC_RECT":
  EvDrawer evDrawer7;
  if ((evDrawer7 = this.Get(rER._1, no_make: false)) == null)
    return this.RnoDrwr(rER);
  if (evDrawer7.setGrp(rER._2 != "" ? rER._2 : "WHITE", "rI")) {
    evDrawer7.initPosition(rER._3, rER._4, rER._5, rER._6);
    evDrawer7.set_z((float) rER.Int(7, 1));
  }
  return true;
```

## 延迟类、子过程类指令
如前所述，指令分为同步的（sync）和异步的（async），二者有者不同的用法且可以相互转化。  
尽管在高级编程语言中子过程（procedure）是比流程控制更复杂的知识，但这里先行讲解，因为这是二创中「由现有事件触发自定义事件」最干净的方法。

### WAIT, WAIT_BUTTON: 阻塞指定帧数
`WAIT n`令事件流程阻塞 n 帧，其后的所有指令都会被推迟。  
当你使用了指定帧数的异步指令（如画面淡入淡出）时，就可以紧跟此指令来将其同步化。  
`WAIT_BUTTON n`令事件流程阻塞至多 n 帧，在阻塞期间玩家可以按键来解除阻塞。  
`WAIT_BUTTON`不带任何参数则必须通过按键来解除。
> WAIT_BUTTON 是事件测试的一大利器，本文档会在很多例子中用到，请善加学习。

### MTL, TL: 延迟修饰符
<b>这不是两个指令！</b>它们需要用来修饰其他指令来让该指令延迟执行（异步化）。
> 使用 F7 控制台调试事件时，右侧并不会显示出指令的修饰符，这可能会引起困扰。

`MTL ......`令一条指令延迟到「下一条对话显示完成时」，例如下面的例子：
```
HKDS l LB
HKDS n RB
TALKER l CLL
TALKER n CRR
PIC l l1/a0L2R3__F1__m6__b1_u2
PIC n a_1/a22__F1__f1__m1__b3__u0
MSG s12_2a*n_17 // 阿尔玛同学不必道歉哦。老师也说过是没办法的事情呀。
MTL MSG_SKIP // 重要！令 n_17_2 不等待玩家按键，从而被 l_18 打断
PIC n a_3/a0__F1__f3__m1__b3_u2
MSG s12_2a*n_17_2 // 所以，由我这个大家的眼中钉来承受袭击，帮助大家脱险，这样就足够⸺
PIC l l1/a0L3R2__F1__m1__b6_ua4 I // 这个 I 表示立绘差分瞬间切换完成，没有渐变
PIC_MP l SWB
MSG s12_2a*l_18 // 我可……没有这么想。虽然我不太清楚那些家里条件好的同学是怎么想的……
PIC l l1/a0L1R2__F1__m1__b5_u3
MSG s12_2a*l_18_2 // 但至少在我心里，柯涅尔同学你是一位勇敢的英雄。
PIC l l1/a0L3R1__F1__m1__b3_u2
MSG s12_2a*l_18_3 // ……真的，真的非常帅气。
```
`TL n ......`令一条指令延迟 n 帧执行，一般用来安排连续的音频效果，例如：
```
// 与梅法当面对话后的诺艾儿因为担心迟到而匆匆跑掉
      SND foot_sand
TL 20 SND foot_sand
TL 40 SND foot_sand
TL 60 SND foot_sand
```

### DOTL, DOMTL, CLEARTL, CLEARMTL: 取消延迟
这四个指令取消之前由 TL 或 MTL 修饰符创造的延迟。  
具体而言，以 DO 开头的会「停止等待，立刻执行」，而以 CLEAR 开头的则会「放弃执行」。

### CHANGE_EVENT, CHANGE_EVENT2: 跳转到另一事件
`CHANGE_EVENT id`或`CHANGE_EVENT2 id`跳转到另一个 id 的事件。

它们的区别是，CHANGE_EVENT 在执行完 id 事件后玩家会恢复自由行动，而 CHANGE_EVENT2 在执行完 id 事件后会返回原事件继续执行下一条指令。

这两个指令在 id 之后都可以再追加一些参数，在 id 事件中可以用 $1 $2 等来取用。

### MODULE, @id: 执行宏
CHANGE_EVENT2 插入事件时 F7 控制台右侧会自动刷新内容（返回时不会，需要按两次 F7 关掉重开），但对于一些短小且常用的事件来说这并不合适。

`MODULE id`或`@id`将一个短事件作为宏来执行（插入时控制台右侧不会自动刷新内容，但仍可按两次 F7 手动刷新），id 之后可以像 CHANGE_EVENT2 一样追加参数，下面是一个例子（`evt/___Other/swin.cmd`文件）：
```
// 1: Image
// 2: L or R or C
// 3: talker を与えると吹き出し位置調整
PIC_SWIN $1
IFSTR $2 IS L {
    PIC_MV %W C-170 C 0
    PIC_MV %W X Y+100 30 ZSIN
} ELSIFSTR $2 IS R {
    PIC_MV %W C+170 C 0
    PIC_MV %W X Y+100 30 ZSIN
} ELSE {
    PIC_MV %W C C 0
    PIC_MV %W X Y+100 30 ZSIN
}
IFSTR $3 ISNOT '' {
    IFSTR $2 IS L {
        HKDS $3 CLB
    } ELSIFSTR $2 IS R {
        HKDS $3 CRB
    }
}
```
本例定义了一个名为`___Other/swin`的宏，使用方法是`@___Other/swin img p x`，其中 img 为图片名，p 为位置参数 L C R 之一，x 为角色标识符。

具体效果是，先将 img 作为提示图片显示，再根据位置参数 p 将该图片平移（这里坐标表达式中的 X 和 Y 似乎和 D 一样），最后将角色 x 的对话框置于图片下方。

## 流程控制类指令
算法有三大基本结构：顺序、选择、循环。  
其中选择和循环都需要用到流程控制类指令，本板块将逐一讲解。

### SELECT: 固定数量选项列表
在 localization 文件夹的 XX_tx_ev_whole.txt 中可以找到大量以 &&Select_ 开头的词条，这些全都是「选项列表的选项」。

一般地，一个固定数量的选项列表可以用下面的片段来实现：
```
SELECT n
选项名1 跳转点1
选项名2 跳转点2
...
选项名n 跳转点n

LABEL 跳转点1
// 指令组1
GOTO 跳转点n+1
LABEL 跳转点2
// 指令组2
GOTO 跳转点n+1
...
LABEL 跳转点n
// 指令组n
GOTO 跳转点n+1
LABEL 跳转点n+1
```
可以看到，该片段由两大块组成，第一块为显示给玩家的选项列表，其中 n 为选项总个数，而 n 个选项名是玩家在列表中看到的选项名。

紧接在选项名后的跳转点必须与第二块中的 LABEL 一一对应，一般由字母、数字、下划线组成且以字母开头。

第二块为选择选项后执行的内容，共含有 n+1 个 LABEL，它们之间有 n 个指令组，每个指令组的结尾固定为`GOTO 跳转点n+1`指令。

整个片段的效果是，选择了第 k 个选项就<b>只执行</b>第 k 个指令组。
> 和 MSG x_id 指令的 id 一样，二创作者自己为跳转点取名的心智负担很重，且 LABEL 和 GOTO 写起来也很啰嗦，目前 SNS 同人社正在研发能够只书写选项名和指令组就自动生成完整片段的事件编辑器。

对于单一语言 mod，选项名可以直接书写而无需修改 txt 文件，但需注意 cmd 文件的编码必须是 UTF-8。  
对于多国语言 mod，选项名应当写成 &&Select_xxx 的形式，并在 tx 类 txt 文件中定义。
> 重要警告：不要在多个剧情事件的选项列表里使用同一个 &&Select_xxx 词条（即使文本一致），因为那样会导致该词条的各处译文也必须统一，难以兼顾上下文（下面是一个反面例子）。
```
*s12_2a l_03
你的身体，
已经不要紧了吗？

// &&Select_daijoubu: 触发 l_04
// &&Select_notgood: 根据序章战败与否触发 n_05 或 n_07

*l_04
是吗。太好了……
*n_05
还是稍微，感觉有点疼。
那一天的画面也仍然会闪过脑海。
*l_06
是吗……我能理解呢。
*n_07
还是稍微，感觉有点疼。
而且，昨天也不小心失败了……

// 以上为车站阿尔玛
// ========== 分割线 ==========
// 以下为休息室初体验

// 如果没做香薰就离开房间
*___Laevi/trm_003 v_00
诺艾儿~
你还好吗～？

// &&Select_daijoubu: 不触发 n_01
// &&Select_notgood: 触发 n_01 并离开休息室

*n_01
不、不好意思！
我身上的素材不太够，
好像没办法调制出香薰来……！
```
在这个例子中，由于哈酱偷懒使用了同一组词条，导致了以下后果：
1. 日本语原文分别是「大丈夫」和「あんまり...」
2. 英语原文分别是「I'm okay」和「Not quite...」
3. 在 0.20 简体中文分别被译为「不要紧了」和「感觉还不太好…」
4. 在 0.23 休息室功能实装后，该译文并不适合用于休息室，这时候就很难设计一组在两个场合都适用的统一译文了。

### SELECTARRAY: 可变数量选项列表
有时会需要列表中的选项在一定条件下才出现，比如格拉提亚城内长按「普攻+咏唱」的快速传送功能。

一般地，一个可变数量选项列表可以用下面几步来实现：
1. `SELECTARRAY_CLEAR`清空选项列表。
2. `SELECTARRAY 选项名 字符串 ''/C/S 0/1`添加一个选项，此指令往往放在 IF-ELSE 块内。  
    选项名会显示给玩家，字符串会在选中此项时被代入到下面所说的变量。  
    C 表示按取消键选择此项（有多个 C 会怎么样？）。  
    S 表示<del>禁止选择此项</del>，如超健全模式下的土蛇战败 CG。  
    1 表示此项已被选过（打上对勾）。
3. 全部选项添加完成后，`SELECT -1 变量名`展示选项列表。

这样一来，玩家选择了哪个选项，该选项的字符串就会被代入该变量，从而后续可以使用 IFSTR 指令来判断并执行不同内容。下面是一个非常经典的例子⸺酒保。
> 其实固定数量选项列表的第一块也可以写成`SELECT n 变量名`并将下面 n 行的跳转点改为要代入变量的字符串，从而省去第二块大量的 LABEL 和 GOTO 指令。
```
SELECTARRAY_CLEAR
SELECTARRAY &&Select_buy_order _ORDER_RESTAULANT // 点单
IF 'SerHas[DRUNK]' { // 如果已喝醉，则显示「…………？？」选项
    SELECTARRAY &&Select_drunker ___city_bar/_barten_t_drunk
} ELSE { // 如果未喝醉，则根据诺艾儿质疑酒保是魔族的次数显示不同选项
    IF 'GFC[BRT0]==0' { // 你是魔族吗？
        SELECTARRAY &&Select_ask_you_are_monster0 ___city_bar/_barten_t00
    }
    IF 'GFC[BRT0]==1' { // 你真的是兽人吗？
        SELECTARRAY &&Select_ask_you_are_monster1 ___city_bar/_barten_t01
    }
    IF 'GFC[BRT0]==2' { // 你果然是魔族吧
        SELECTARRAY &&Select_ask_you_are_monster2 ___city_bar/_barten_t02
    }
    IF 'GFC[BRT0]==3' { // …………
        SELECTARRAY &&Select_ask_you_are_monster3 ___city_bar/_barten_t03
    }
}
SELECTARRAY &&Cancel _CANCEL C
SELECT -1 _sres
IFSTR $_sres IS '_ORDER_RESTAULANT' {
    ...... // 点单
} ELSIFSTR $_sres IS '_CANCEL' {
    ...... // 离开
} ELSE {
    ......
    CHANGE_EVENT2 $_sres // 重要！根据选项触发不同对话
    ......
}
```
SELECT_FOCUS 通过参数设置光标默认选中第几项（但应该会受添加数量和顺序影响）。  
SELECT_FOCUS_RANDOM_TALK 也许是设置默认选中上次的选项（例如和姐姐连续对话时）。  
STOP_LOG_RECORD_SELECTION 关闭自动记录对话选项的行为（默认是开启的）。  
START_LOG_RECORD_SELECTION 重新开启上述行为。  
SELECT_RESULT_TO_LOG 也许是在关闭的情况下手动记录上次对话选项。
> LOG_RECORD 也是一个指令但一般用于 CHANGE_EVENT2 指令后，应该和日志文件有关。

### =, =~: 临时变量赋值
目前我们接触到一个新概念「变量」，不同于 GFB/GFC 这套会进入存档的开关/变量，哈语言中最常用的是所谓的临时变量，比如`MSG $_key`中的 _key 以及`SELECT -1 _sres`中的 _sres。

一般地，可以使用赋值指令`变量名='字符串'`将字符串代入变量。  
如果需要在字符串或指令参数中用到另一个变量，就要写成`$变量名`且出现在单引号外才行。  
试试下面的例子吧：
```
_noel='诺艾儿'
_ixia='伊夏'
_msg=$_ixia'最喜欢的精灵是'$_noel
PIC_SWIN '' $_msg
WAIT_BUTTON
```
一般地，可以使用赋值指令`变量名=~表达式`将表达式的数学运算结果代入变量。  
多试几次下面的例子吧（最后的乘法没有溢出，很神奇）：
```
LABEL loop
_die=~1+rand[6]
_msg='骰子的结果是'$_die
PIC_SWIN '' $_msg
WAIT_BUTTON 90
IF $_die'!=6' GOTO loop
PIC_SWIN '' ~641*6700417
WAIT_BUTTON
```
你也许已经注意到变量名都以下划线`_`开头，这是因为哈语言<b>允许使用纯数字作为变量名</b>，并且在使用子过程类指令时会将事件 id 之后的参数依次代入变量 1 2 3 等。但这样做会出现「等号两侧都是纯数字」的赋值指令，容易引起误解。
> 在后面讲到的 GFC_SET 指令中，`~`有其他含义，请勿混淆。

### IF: 条件分歧
不管是为可变数量选项列表添加选项，还是在玩家作出选择后进行不同处理，都必须用到条件分歧系列指令。条件分歧的基本写法为：
```
IFXXX 条件1 {
    指令组1
} ELSIFXXX 条件2 { // 注意 ELS 后面没有 E
    指令组2
} ... {
    ...
} ELSE {
    指令组n+1
}
```
<b>第一个</b>满足的条件下面的指令组会被执行，如果全都不满足则会执行 ELSE 后的指令组。
> 有时也会将`IFXXX 条件`作为 MTL 这样的修饰符来使用，被修饰的单条指令在条件满足时才执行。

IFXXX 有很多种形式，下面一一道来：
1. `IFLANG 'XX'`: 判定玩家设置的语言，XX 为<b>大写的</b>语言代码，截至 0.25f 共有`_ EN KO-KR TH ZH-CN ZH-TC`这 6 种。  
    这种做法只在 0.09 出现过（但对有文字的图片很有意义），不建议滥用它来造成不同语种玩家的内容体验差异。
2. `IFSTR 字符串1 运算符 字符串2`: 判定某两个字符串是否满足某种关系，这里两个字符串都可以使用`$变量名`或`'字符串常量'`或两者的拼接，而可用的运算符有以下这些：
    - IS, ISNOT: 两个字符串是否相等。
    - ISIN, ISNOTIN: 前者是否为后者的子串。
    - CONTAINS, NOTCONTAINS: 后者是否为前者的子串。
    - STARTS, NOTSTARTS: 后者是否为前者的前缀。
    - ENDS, NOTENDS: 后者是否为前者的后缀。
    > 其中最后四个的结尾可以加上 WITH，效果不变。
3. `IFDEF 数字`或`IFNDEF 数字`: 在定义会被子过程类指令跳转到的事件时，往往需要判断该指令传入了几个参数，如果没有传入某个参数则可能会需要代入一个默认值，比如下面这个牧场小游戏结算的例子。
    ```
    IFNDEF _grade {
        IFDEF 2
            _grade=~$2
        ELSE 
            _grade=0
    }
    IFNDEF _score {
        IFDEF 1
            _score=~$1
        ELSE 
            _score=30
    }
    ```
4. `IF '表达式'`: 这是最复杂的分歧条件，表达式里不但可以使用临时变量（用`$变量名`且写在单引号外）还可以使用四则运算（可以用圆括号调整优先级）、比较运算（`> >= < <= == !=`）、逻辑运算`&&`（且）`||`（或）`!`（非），下面会讲解它的一部分写法。

表达式中最常见的非临时变量是 PVV，它的百位表示章节（`GFC[PHASE]`，序章为 0，第一章为 1），后两位表示本章内主线剧情的进度（`GFC[PHASEV]`，十位为 0 时略去）。
> `PVV n`指令将此变量增加到 n，如果原本就不小于 n 则没有效果。

除此之外，表达式中还可以使用很多带参数（用方括号传入参数）或不带参数的「监听器」（listener），具体有以下这些（可能不完整）。

源代码 NEL.cs 文件中有 SER, SERBIT, cur_money 三个监听器，其中前两个和异常状态有关，而最后一个可以监听诺艾儿的三种货币数量，见下面的例子。
```
_gold=~cur_money[0]
_crafts=~cur_money[1]
_juice=~cur_money[2]
PIC_SWIN '' '金币='$_gold'，兑锭='$_crafts'，精萃='$_juice
WAIT_BUTTON
```
EV.cs 文件中有 DEF 和 game_stopping 两个监听器，前者监听某个临时变量是否存在，后者监听游戏进程是否已被特定指令暂停。
> 像这种「是/否」类型的监听器，会像开关一样取值 1 或 0，可以在其前面加上否定运算符`!`来反转，下同。

EvDrawerContainer.cs 文件中有 EVDRAWER_X, EVDRAWER_Y, pic_exists 三个监听器，其中前两个可以监听某个立绘（通过角色标识符）或图片（通过图层参数）的坐标，最后一个则可以监听某个立绘或图片是否存在。

M2DBase.cs 文件中有下列监听器：
1. Exist_mover: 是否存在某个可移动体（NPC 或物件）。
2. map_x[%], map_y[%]: 诺艾儿的坐标，和 F7 的 HP/MP 页面一致，似乎不能用其他参数。
3. lp_foc_x, lp_foc_y: 某个 LabelPoint 的坐标，此监听器可以带不止一个参数。
4. cam_x, cam_y: 镜头的坐标。
5. m2d_current_x, m2d_current_y: 某个 m2d 操作对象的坐标。
6. m2d_current_sizex, m2d_current_sizey: 某个 m2d 操作对象的宽高。
7. m2d_has_foot: 某个 m2d 操作对象是否有脚？
8. m2d_walkable_mpf: 和某个 m2d 操作对象的可移动情况有关，比较复杂。
9. CLEN: 未知，可能和某个姓 C 的东西的长度（length）有关。
10. warp_not_injectable: 是否不可插入瞬移事件。
11. blood_restrict: 血迹效果限制幅度，与玩家设置有关。取值范围为`[0,1]`，数值越大血迹效果越弱。

NelM2DBase.cs 文件中有下列最常用的监听器：
1. masturbate_count: 累计自慰次数（一定要高潮才算吗？）。
2. difficulty: 玩家设置的游戏难度，取值范围为 0（休闲）1（普通）2（噩梦）。
3. noel_torned: 诺艾儿是否爆衣。
4. noel_ep: 诺艾儿的兴奋度，取值范围为`[0,1000)`的整数。
5. noel_wetten: 诺艾儿是否弄脏了内裤（因为失禁或产卵）。
6. noel_cloth_dirty: 诺艾儿是否弄脏了外衣，序章不洗干净是不能见老师的。
7. noel_carrying_box: 诺艾儿是否正在搬运解谜石块。
8.  stomach: 诺艾儿的饱腹度，取值范围为`[0,28]`的整数。
9.  danger_level: 战斗危险度，不包括丢弃诺艾儿汁增加的，可以被 DANGER 指令更改。
10. is_night: 当前是否是黑夜，danger_level 除以 16 的余数大于 8 就是黑夜。
11. load_version: 读档内部版本号，二创用不到。
12. summoner_barrier_active: 当前战斗点是否启用边界，例如第一次打森之领主的话对其造成伤害前是不启用的，可以回到左边的长椅地图。
13. summoner_defeated_this_session: 当前战斗点是否刚被打完，刚打完的话就可以安全地采集魔力植物。
14. noel_bote[x]: 诺艾儿的怀卵量是否大于魔力上限的 x 倍，实数 x 的取值范围为`[0,1)`。不带参数的 noel_bote 取 x=0.5，怀卵大于 0.5 倍时诺艾儿的动态立绘会捂着肚子。
15. walk_xspeed[xxx]: 某个像素小人 xxx 的横向移动速度？
16. crouch[%]: 诺艾儿当前是否处于蹲姿/滑铲/爬行，理论上方括号里可以写别的 NPC 但似乎没有意义。
17. SF[xxx], SfEvt[xxx]: 读取 SF 变量 xxx 和 SF 变量 Ev_xxx，据说可以用来大幅优化拜年纪作品《普莉姆拉计算机》。
18. spcfg_enable[xxx]: 是否已解锁（？）「酒吧的秘密贮藏室」的某项隐藏设置。
19. fatal_watched[xxx]: 是否已观看某个全屏 CG 动画，如土蛇/森之领主战败、休息室初体验、南丁格尔吃禁果。
20. visitted[id]: 诺艾儿是否已到过某张地图，用于格拉提亚城内的快速移动，不要问我为什么有两个 t。
21. ItemHas[id]: 某种物品的持有数量（仓库的算吗？五种品质相加吗？）。
22. item_capacity[id]: 诺艾儿还能再装下多少个某物品，这取决于好几个方面。
23. SkillHas[id], SkillEnable[id]: 是否拥有某个技能，是否已启用某个技能。
24. MagicHas[ID]: 是否拥有某个魔法，魔法 ID 为 WHITEARROW, DROPBOMB, FIREBALL, PR_BURST, THUNDERBOLT 之一，注意要大写！
25. NoelCasting[ID]: 诺艾儿当前是否在吟唱某种魔法，魔法 ID 的取值同上。
26. SerHas[ID], SerLevel[ID]: 是否拥有某个异常状态，以及该异常状态的等级。异常状态 ID 的取值范围见 XX_tx(2/3/4).txt，但是要大写！
27. StoreItemCount[id]: 某个 id 的商店库存总种类数（界面的总行数），商店 id 的取值范围见 ITEMSTORE 和 LUNCHSTORE 指令的说明。
28. quest_progress[id]: 某个 id 的任务进度，初始为 -1，可以用指令`QUEST_PROGRESS id ...`来推进，二创不太能用到。
29. noelRPI[xxx]: 诺艾儿当前某个方面的饮食加成值，xxx 的取值范围见 XX_tx_item.txt 中所有 &&recipe_effect_xxx 词条。
30. trm_has_newer_item: 休息室是否有新客人，可能会影响门外挂着的心形牌子？
31. craft_ui_active: 当前是否处于烹饪/炼金/调香/煮茶/酿酒界面？
32. alchemy_lectured: 是否已有烹饪经验，会影响获得小瓶香料时的台词。
33. CFG[xxx]: 某个玩家设置项的值，xxx 为 autorun（自动奔跑）, stick_thresh（摇杆奔跑阈值）, bgm_volume（音乐音量） 之一，用于城镇小游戏。

TX.cs 文件定义了以下不太常用的监听器（sensitive_level 还算常用，但要注意它不同于后面的SENSITIVE）：
1. DEBUGALLSKILL: 是否开启了 allskill 调试开关。
2. FALSE, false: 常数 0，不建议使用。
3. TRUE, true: 常数 1，不建议使用。
4. PI, pi: 圆周率 3.14159。
5. PI2, pi2: 圆周率的两倍 6.283185。
6. PIH, pih: 圆周率的一半 1.570796。
7. pad_mode: 是否为手柄模式。
8. sensitive_level: 玩家设置的健全模式等级，取值为 0, 1, 2。

TxEvalListenerContainer.cs 文件定义了以下奇怪的监听器（其中 rand 比较常用）：
1. DEBUG: 是否在 _debug.txt 开启了第一行的`<DEBUG>`调试开关，二创制作必须全程开启。
2. SOUND_OFF: 是否同时开启了`<DEBUG>`和紧随其后的 nosnd 调试开关，都开启后游戏将无声运行。
3. BGM_VOL: 玩家设置的音乐音量。
4. SENSITIVE: 是否在 _debug.txt 最下面开启了 sensitive 调试开关，不建议改动此开关。
5. ENG_MODE: 是否为英语模式？此处 ENG 的含义不明。
6. randmpf: 随机得到 0 或 1？不建议使用
7. rand[N]: 随机得到一个小于 N 的非负整数。
8. abs[x], cos[x], sin[x]: 绝对值、余弦、正弦，后两者的自变量单位为弧度。
9. saturate[xxx]: 字面意思是 xxx 是否饱和，详情不明。
10. XD[xxx], YD[xxx]: CAim 的坐标？
11. GAR[x1][y1][x2][y2]: 求复数`(x2-x1)+(y2-y1)i`的辐角主值，范围为`[-π,π]`。之所以有 -π 是因为这两个减法可能得到不同于 0 的浮点数 -0。
12. comb_bits[N][M]: 随机生成一个含有 M 个 1 和 (N-M) 个 0 的 N 位二进制非负整数。

此外，还可以用`GFB[id]`或`GFC[id]`获取某个开关或变量的值。

### LABEL, GOTO: 跳转与循环
我们已经在固定数量选项列表中使用过这两种指令，`LABEL 跳转点`指令本身没有效果，而`GOTO 跳转点`指令则会跳转到与之对应的 LABEL 指令处（因此不同的 LABEL 指令一定要带不同的参数）。

向上或向下跳都可以，如果向上跳就可以实现循环效果：
```
LABEL loop
...... // 只要满足下面的条件，这段指令就会被反复执行（至少一遍）
IFXXX 条件 GOTO loop
```
你知道该如何实现「至少零遍」的循环吗？需要几个 LABEL 指令？

### SEEK_END: 终止当前事件
SEEK_END（不带参数）可以终止当前事件。  
对于 CHANGE_EVENT2 插入的事件，SEEK_END 就像高级编程语言中的 return 语句一样，会仅终止被插入的事件而回到原事件继续执行。

## 主角操作类指令
这类指令除 SER_APPLY 和 SER_APPLY_NEAR_PEE 以外全部以 PR_ 开头，除 PR_KEY_SIMULATE 以外全部位于源代码的 NelM2DBase.cs 文件内，且这类指令必须用在`#<%>`指令后。

### PR_OUTFIT: 换装
`PR_OUTFIT NORMAL/BABYDOLL/DOJO`让诺艾儿换装（0.26 可能会新增学园制服），试试下面的例子吧。
```
TUTO_MSG 要穿什么呢？
TUTO_POS '' T
SELECT 3
旧式治疗师制服 ch1
吊带睡裙（只能走跳） ch2
道场训练服（睡裙立绘） ch3
LABEL ch1
#<%>
PR_OUTFIT NORMAL
GOTO ch_end
LABEL ch2
#<%>
PR_OUTFIT BABYDOLL
GOTO ch_end
LABEL ch3
#<%>
PR_OUTFIT DOJO
GOTO ch_end // 这一行是多余的，但为了保持一致还是写上了
LABEL ch_end
TUTO_REMOVE
```

### PR_BETO: 动态立绘玷污
连用若干条`PR_BETO id`指令来玷污诺艾儿的动态立绘，id 的取值范围有以下五大类：
1. SMOKE: 默认，包括 Absorbed, Worm, Sperm, BigBite
2. LIQUID: 液体，包括 Mud, Sperm2, EggLay, Vore
3. STAIN: 色斑，包括 Ydrg, Ground, GroundHard, Blood, Lava, Thunder, Grab
4. CUTTED: 斩切，包括 SLASH, TORNADO, DarkTornado
5. FROZEN: 冻结，只有 FREEZE 这一种而且效果很难看，建议别用。

其中冒号右侧的那些单词就是 id，使用时要注意大小写。冒号左侧是源代码中的 BetoInfo.TYPE，了解一下即可。

由于事件运行过程中动态立绘默认是隐藏的，所以需要配合 XXX_LETTERBOX 系列指令将其显示出来才能看到多次玷污的逐步差分。下面是一个综合运用了多种指令的例子（其效果可参考[这个视频](https://www.bilibili.com/video/BV12z421B7AE/)，GroundHard 和 Lava 一次面积太大就不展示了）：
```
HIDE_LETTERBOX
#<%>
PR_CURE 0 0 0 0 1
IF 'is_night' {
    PR_OUTFIT DOJO
} ELSE {
    PR_OUTFIT NORMAL
}
TUTO_MSG '要玷污诺艾儿多少次？'
TUTO_POS '' T
NUMCOUNTER 1 99 80
TUTO_REMOVE
LABEL loop
_beto=~rand[16]
IF $_beto'==0' _beto='Absorbed'
IF $_beto'==1' _beto='Worm'
IF $_beto'==2' _beto='Sperm'
IF $_beto'==3' _beto='BigBite'
IF $_beto'==4' _beto='Mud'
IF $_beto'==5' _beto='Sperm2'
IF $_beto'==6' _beto='EggLay'
IF $_beto'==7' _beto='Vore'
IF $_beto'==8' _beto='Ydrg'
IF $_beto'==9' _beto='Ground'
IF $_beto'==10' _beto='Blood'
IF $_beto'==11' _beto='Thunder'
IF $_beto'==12' _beto='Grab'
IF $_beto'==13' _beto='SLASH'
IF $_beto'==14' _beto='TORNADO'
IF $_beto'==15' _beto='DarkTornado'
PIC_SWIN '' $_beto
PR_BETO $_beto
WAIT 15
_result=~$_result-1
IF $_result'>0' GOTO loop
```

### PR_OMORASHI: 失禁
`PR_OMORASHI flags`令诺艾儿失禁，其中 flags 可以不填也可以用字母 F N P 中的一到三个来组合，共八种写法。
1. F: 是否强制执行，没有 F 且花朵全空（见下）则本指令无效。
2. N: 是否禁用声效，没有 N 则会播放声效，但语音始终会播放。
3. P: 是否禁用像素喷射，没有 P 则会从诺艾儿的像素小人斜向上喷出黄色的像素点。

在「敏感的记录」中，尿意一栏右侧有一个百分比和一朵花（蹲姿小便雅称「摘花」，不分性别）。  
该百分比在 [72,92] 范围内会获得异常状态「尿意」，在 [93,100] 范围内会获得异常状态「尿意Lv.2」。  
那朵花共有五片可以被填充（叶子加四片花瓣），受到攻击（比如厨圣们喜爱的激光）或者在「尿意Lv.2」下摔倒都有可能填充花朵（具体概率可能受强化插件「濡湿预兆」影响）。  
五片被填满时就会自动失禁（清空花朵填充状态并减少 50% 的尿意），如果在格拉提亚城内还会触发被围观的剧情。  
另外，格拉提亚城的各处公共洗手间在「尿意」状态下进入都有概率触发「使用中」的 QTE 挑战，如果同时还有醉酒状态则挑战难度会进一步提高。

`PR_WATER_DRUNK_MX n`（此指令无需在`#<%>`后执行）将诺艾儿的尿意百分比增加到 n%，如果原来就不小于 n% 则没有效果。  
整数 n 的取值范围是 [0,2147483647]，下面是一个非常厨圣的例子：
```
HKDS n BB #<%> TT
MSG_PREFIX n '要喝多少毫升呢'
MTL MSG_SKIP
MSG 105/main_classroom*n_101
NUMCOUNTER 0 999999999 10000
MSG_HIDE
PR_WATER_DRUNK_MX ~2*$_result
#<%>
IF '('$_result'-3)%2>0' GOTO loop
_i=3
LABEL prime
IF $_i'*'$_i'<='$_result {
    IF $_result'%'$_i'==0' GOTO loop
    _i=~2+$_i
    GOTO prime
}
SER_APPLY MILKY // 这一行被执行的条件是？
LABEL loop
PR_OMORASHI F
WAIT 1 // 等待一帧才能再次获得 NEAR_PEE 状态
IF 'SerLevel[NEAR_PEE]>0' GOTO loop
PR_CURE 0 0 1
```

### PR_CURE: 全回复
`PR_CURE 0/1 0/1 0/1 0/1 0/1 n`令诺艾儿的部分状态全回复，六个参数的含义如下：
1. 是否回满 HP 并修复 HP 计量槽的破损（0.25 只有在「恩惠圣母之石」地图会发生破损）。
2. 是否回满 MP（且修复计量槽）并清空兴奋度，如果未处于「尿意」异常状态则也会清空尿意百分比，但不会清空尿意花朵的填充状态。
3. 是否解除所有能在长椅上解除的异常状态（不包括「服装损坏」）。
4. 是否解除怀卵状态。
5. 是否执行「修补衣服＋清洗身体」。
6. n 值表示解除醉酒状态的百分比，参考值有 200（失禁）、300（战败）、危险度×20（胜利）。

此外，即使处于「尿意」异常状态，只要前两个参数都为 1 就会将尿意百分比降低至 15，但不会清空尿意花朵的填充状态。

### PR_GACHA: 进行 QTE 挑战
QTE（Quick Time Event），即快速反应事件，在 AiC 中一般发生在被魔族擒拿时。

`PR_GACHA type n flags`进行一个 QTE 挑战，n 为成功所需的操作次数，type 的取值范围如下：
1. CANNOT_RELEASE: 无法挣脱，不要在事件中使用。
2. REP: 连击单个按键（Repeat 的前三个字母，常见于史莱姆）
3. REP_AFTER_ORGASM: 同上，但图案不同（贤者时间）
4. HOLD: 长按单个按键（战斗中未使用过，牧场的也不完全一样）
5. SEQUENCE: 依次敲击一系列按键（常见于土蛇和壁虎），但在事件中使用时全是确定键。
6. PENDULUM: 单摆模式（洗手间使用中）
7. PENDULUM_ONNIE: 同上，但图案不同（0721）

flags 由 F, P['xxx'], D[x], Da[y], Di[z] 中的一个或多个连接而成，各部分的含义如下：
1. F: 失败时是否放弃，如果没有 F 则会重试直到成功。
2. P['xxx']: QTE 期间诺艾儿的姿势，比如 'osigama' 或 'osigama_2'，可以省略。
    > 姿势的详细说明请查阅 MoveScript 一节。
3. D[x]: 单摆模式下周期的一半，单位为帧，之所以是一半是因为摆一个来回是 2x 帧。
4. Da[y]: 单摆模式下每个周期内正解时长的四分之一，单位为帧，y 值不能超过 x 值的一半。
    > 换言之，x=2y 时整个周期都是正解。
5. Di[z]: 单摆模式下首次操作前允许观察的周期个数的二倍，可以是奇数，至少为 2（因为最早的半个周期无法操作），没有此项则可以无限观察。
    > 但是，一旦开始操作，则每半个周期必须操作一次，否则直接失败。

QTE 结束后，成功（1）或失败（0，没有 F 时才有可能）会被代入临时变量 _result。

### PR_KEY_SIMULATE: 模拟按键
`PR_KEY_SIMULATE key`模拟按住某个按键，`PR_KEY_SIMULATE key 0`模拟松开某个按键。按键 key 的取值范围如下：
1. @: 按住时视为当前诺艾儿面朝的方向（L 或 R），松开时则同时松开 L 和 R。
2. L/LA, R/RA, T/TA, B/BA: 左、右、上、下。
3. Z, X, C, LSH, ESC: 普攻、魔法、品鉴、护盾/闪避、未知（已经有取消和菜单了）。
4. SUBMIT, CANCEL, LTAB, RTAB, MENU: 确定、取消、左翻页、右翻页、菜单。
5. MAP, ITEM, RUN, JUMP, SORT: 地图、快捷物品、奔跑、跳跃、物品排序。
6. ADD, REM, SHIFT, CHECK: 添加物品、移除物品、物品对照、调查。

### PR_VOICE: 诺艾儿语音
`PR_VOICE id`让诺艾儿发出语音，id 的取值范围如下：  
breath_sleep, breath_down, feared, breath_e, breath_aft, water_choked_release_b, heat, laying_s, laying_l, water_choked_release_a, near_orgasm, after_orgasm, must, must_mouth, es, dmgs, mouth, mouth_wk, mustl, awkx, awk, dmgl, dmga, dmg_hktb, el, arrest, cough, mustll, sxx_mouth, sxx_feared, mouthl, death, sleep_init, must_come, must_come_fatal, mouth_fin, dmgx, after_orgasm, dmg_elec, must_orgasm, sxx_awk, split, shield_break, after_pee, mouth_split, ev_awk, orgasm, must_orgasm, water_choked

### SER_APPLY, SER_APPLY_NEAR_PEE: 获得异常状态
> 这两个指令虽然不以 PR_ 开头，但也必须在 #<%> 指令后使用！

有时会需要在事件中获得异常状态，比如第一章首次在家洗完澡后裹着浴巾被父亲撞个满怀就会获得「羞耻」。

`SER_APPLY ID`获得一个除「尿意」外的大部分异常状态（连用 n+1 次则可叠到 Lv.n 级），id 的取值范围是 XX_tx(2/3/4).txt 中所有 &&SerTitle_id 词条的后缀，但是和`SerHas[ID]`监听器一样必须大写。请尝试下面的例子：
```
#<%>
SER_APPLY DRUNK
SER_APPLY DRUNK
SER_APPLY DRUNK
SER_APPLY DRUNK
SER_APPLY DRUNK
SER_APPLY DRUNK
SER_APPLY DRUNK
SER_APPLY DRUNK
SER_APPLY DRUNK // 醉酒
SER_APPLY FROZEN // 冻结
SER_APPLY FROZEN
SER_APPLY FROZEN
SER_APPLY FROZEN
SER_APPLY FORBIDDEN_ORGASM // 禁止高潮：未实装
SER_APPLY MILKY // 母乳体质：失禁会被替换为泌乳
PR_OMORASHI F
SER_APPLY_NEAR_PEE 1
```
对于「尿意」异常状态，因为还同时涉及到百分比的调节，因此需要使用指令`SER_APPLY_NEAR_PEE 0/1`，参数 0 和 1 会分别把百分比增加到 72 或 93。
> 存在 SER_CURE 指令但未在任何 cmd 文件中使用过。

## EV.cs 的有用指令
这个文件一看名字就知道跟事件有关系，其中的很多指令也确实很有用。

首先是已经讲解过的延迟类和子过程类指令，以及用途不明的`<NOLOAD>`, `<LOAD>`, `<LOADA>`, `<MODULE_LOAD>`, `<CLEAR_CACHE>`, `<DEBUG>`, `<CHECK>`, `<BREAK>`指令，其中只有`<BREAK>`是在哈语言中添加断点（需要勾选框启用）。

`START_GDRAW`, `START_GHANDLE`, `START_GMAIN`, `STOP_GDRAW`, `STOP_GHANDLE`, `STOP_GMAIN`是三对控制游戏（Game 的首字母 G）主进程启停的指令，详情不明。

`EV_STACK_HOLD`和`EV_STACK_STOP`控制着事件的调用栈，想必与 CHANGE_EVENT2 指令有关，详情不明。

`DEBUG 变量名`调试某个变量，可能指的是把它的值输出到日志文件中？

### MSG_XXX: 对话框额外操作
之前已经讲解过 MSG_PREFIX 指令，这里再介绍一些其他和对话框有关的指令。

默认情况下，多人对话时一个角色发言后对话框不会自动消失，因此某些场合需要手动隐藏对话框。例如下面的例子：
```
HKDS ma LT
TALKER_REPLACE ma Mob talk_mob_w0
HKDS mb CCRT
TALKER_REPLACE mb Mob talk_mob_w2
HKDS mc CCLCT
TALKER_REPLACE mc Mob talk_mob_w3
MSG	105/scl_hall_center_mob_00*mc_08 // 啊⸺我好像明白了。
MSG	105/scl_hall_center_mob_00*mb_09 // 诶，你明白什么了？
MSG	105/scl_hall_center_mob_00*ma_09 // 魔族是她自己召唤来的！？
MSG_HIDE // 隐藏所有对话框，可以带参数 1 令对话框原地突然消失
WAIT 30
TALKER n R
PIC n a_3/a1__F1__f3__m1__b3_u0
PIC_MP n SMK
MSG 105/scl_hall_center_mob_00*n_00 // ………
```

偶尔会需要让每个角色发言后对话框都（在玩家按键后）自动隐藏，这时候可以用`AUTO_MSG_HIDE 0/1`进行设置。例如下面这个复杂的例子：
```
HKDS p LB
HKDS n RB
TALKER p CLL
TALKER n CRR
PIC p p/a21__F1__f1__m1__b1_u0
MSG s03_6b*p_05 // 我检查一下吧。把胸口露出来一下。（这个对话框不会自动隐藏）
PIC n a_3/a0__F1__f3__m1__b4_uo
MSG s03_6b*n_06 // 那，那……麻烦您了。
PIC_HIDE_ALL T // 隐藏所有立绘
PIC_FILL #0 DARK
PIC_FADEIN #0 60
WAIT 60

AUTO_MSG_HIDE 1 // 开启对话框自动隐藏，对之前的对话框也生效
MSG s03_6b*p_07 // 心跳……正常。体内应该没有魔力瘤。你深吸一口气吧。
MSG s03_6b*n_08 // 哈……呼……
MSG s03_6b*p_09 // 应该没事了。谢谢你，诺艾儿同学。
AUTO_MSG_HIDE 0 // 关闭对话框自动隐藏

PIC_FADEOUT #0 60
WAIT 60
PIC p p/a11__F1__f1__m1__b1_u0
PIC n a_1/a00L3R3__F1__f1__m1__b1__u1
MSG s03_6b*n_10 // 伊夏同学说她把魔法送过来了。（这个对话框不会自动隐藏）
PIC p p/a11__F1__f1__m1__b2_u0
MSG s03_6b*p_11 // 实际操作之前，先来听讲义吧。我带了特别的东西来哦⸺
```

SELECT（不管参数是正整数还是 -1）和 WAIT 指令都会隐藏所有对话框，玩家可能会困惑「题干都没了才看到选项」，此时可以在这些指令之前使用`MSG_HOLD`指令防止任何对话框被隐藏，或使用`MSG_HOLD x`防止某个角色的对话框被隐藏。

`MTL MSG_SKIP`令下一条对话显示完成后不等待玩家按键，例如诺艾儿的发言被阿尔玛打断。

`MTL_SKIPHOLD`可能是`MSG_HOLD`和`MSG_SKIP`的结合，详情不明。

### TUTO_XXX: 操作提示
`TUTO_MSG 字符串`显示一个操作提示（同时只能显示一个），本指令有以下不同于`PIC_SWIN '' 字符串`的特性。

首先它支持获取 localization 词条，若字符串 xxx 来自 tx 类 txt 文件中用`&&xxx`定义的一个词条，则会显示为该词条的译文。

一般来说应当使用以`Tuto_`开头且带有`<key 键名/>`按键图标的词条，但也可以使用其他任何词条，甚至可以用`&&xxx[参数1][参数2]`的写法来使用带参数的词条，不信可以多次运行下面的例子：
```
_num=~rand[3]
TUTO_MSG &&EP_process_general_$_num[&&Talker_NoelCane][&&Talker_Nightingale]
TUTO_POS '' C
WAIT_BUTTON
TUTO_REMOVE
```
如果使用了不存在的词条，就会原样显示，对于单一语种 mod 来说这基本上不是问题，但是要注意以下两点：
1. 如果使用仅含数字、字母、下划线的串，请不要「只在串的内部」使用下划线`_`。要么整个串都别用下划线，要么开头或结尾也用一个。
2. 如果使用仅含字母的字符串，请不要使用下面这些单词作为「整个」字符串（确需使用的话可以通过首字母小写来规避）：  
    BackToTitle（0.25 未实装）, Enabled, Disabled, GameStart, Replay, Confirm, Submit, Reset, Cancel, Destination, Eat

其次，该字符串像 tx 类 txt 文件一样支持字体属性控制（包括斜体，尤其是能变色这点比 PIC_SWIN 强很多）以及插入按键和其他图标。

最后，该指令的参数允许混合使用变量（用`$变量名`获取）、tx 类词条（用`&&`获取）和字符串常量（放在`'单引号'`内）相拼接，不信可以试试下面的例子：
```
_de='的'
TUTO_MSG &&Talker_Primula&&Talker_teacher'最喜欢'$_de&&Talker_elf_student&&Select_yes'进不去'&&EvTitle_Village$_de&&Talker_Noel
WAIT_BUTTON
```
操作提示默认会显示在画面靠下，如果需要调整位置，可以使用`TUTO_POS '' T/C/M/B`来调节，T 靠上，C 或 M 居中，B 靠下。
> 第一个参数之所以是空串，是因为源代码里没有写左右偏移的逻辑。

操作提示在事件结束后也会持续显示直到切换地图，如果需要隐藏，请使用`TUTO_REMOVE`指令。
> 还有个 TUTO_REMOVE_ALL 但游戏中未使用。

使用多个`TUTO_CAP 图片路径 图片说明`进行提示图片的轮播，请尝试下面的例子：
```
TUTO_MSG 连环谜题
TUTO_POS C T
TUTO_CAP 'treasurehunt/treasurehunt_000__0' '蓝色祠堂'
TUTO_CAP 'treasurehunt/treasurehunt_000__1' '遛狗公园'
TUTO_CAP 'treasurehunt/treasurehunt_000__2' '桥东巨树'
TUTO_CAP 'treasurehunt/treasurehunt_000__3' '荆棘爬梯'
TUTO_CAP 'treasurehunt/treasurehunt_000__4' '风庭正下'
TUTO_CAP 'treasurehunt/treasurehunt_000__5' '敬请期待'
WAIT_BUTTON
```
操作提示默认会被对话框遮挡，有时需要暂时前置（如被酒保提示打开对话记录），这可以通过`TUTO_TEMP_FRONT`指令实现，此外还有用途不明的`TUTO_REM_ACTIVE_FLAG`指令。

### ALLOW_XXX, DENY_XXX: 允许/禁止某功能
长按取消键（默认为 ESC）可以快进剧情，但某些剧情需要禁止快进，比如编织者之森的两处爆破现场。这时可以使用 DENY_SKIP 和 ALLOW_SKIP 来禁止或允许快进。

在个别场合（如牧场小游戏或刚拿到炼金术图鉴时）需要临时禁止快速移动，这时可以使用没有参数的 DENY_FASTTRAVEL 和 ALLOW_FASTTRAVEL 来禁止或允许快速移动（但这两个指令不属于 EV.cs 文件）。

在界面教学期间往往需要临时禁用查看对话记录的功能以防止按键冲突，这时可以使用 DENY_MSGLOG 和 ALLOW_MSGLOG 来禁用或启用（但不会停止记录对话）。

在非界面的教学期间有时需要限制可用的按键，这时可以使用以下指令来进行：
1. ALLOW_EVENTHANDLE, DENY_EVENTHANDLE: 无参数，意义不明
2. ALLOW_EVENTHANDLE_KEY, DENY_EVENTHANDLE_KEY: 参数为若干个全大写的键名，范围和 PR_KEY_SIMULATE 指令一致，可引导玩家施展特定的魔法。

### WAIT_XXX: 其他类型的等待指令
之前讲解过 WAIT 和 WAIT_BUTTON 两个最基础的等待指令，下面是几个更复杂的。  
`WAIT_BGM_LOAD`和`WAIT_LOAD`分别等待音乐和其他资源加载完成，游戏中未使用。  
`WAIT_MOVE`用于等待 # 开头的 MoveScript 系列指令完成，后面会讲到。  
`WAIT_FN XXX`等待某个功能完成，可以被等待的功能如下：
1. NIGHTCON: 胜利后魔力磁计的危险度变化。
2. REELMNG: 返回据点或战败时打开所有宝箱。
3. NM2D_GAMEOVER: 战败时加载复活点地图。
4. MAP_TRANSFER: 切换地图，详见 NEL_MAP_TRANSFER 指令的说明。
5. UIGM_ACTIVATE: 未知，可能和另一个文件的`UIGM`指令有关。
6. ITEMDESC: 等待玩家按掉物品/技能/魔法的介绍页，很常用。
7. MGFARM: 牧场小游戏。

## 其他的字母开头指令
这一段的完成度较低，有待各位有志厨圣添砖加瓦。部分指令按照所在的 C# 源代码文件分别列出，请注意。

### //: 注释
某行指令以`//`开头时，该行无效（F7 控制台右侧显示为灰色），在测试过程中需要临时禁用部分指令作对比时可以使用它。  
`//`右侧可以书写任何内容，对于复杂的指令组，最好写清楚自己的设计思路以备查阅。

### MGFARM, MG_DOJO, MGM_4ASCEND: 小游戏相关
MG 是 Mini Game 的缩写，意为小游戏。0.25 共新增了三个小游戏：牧场、道场、四子棋，分别由 MGFARM, MG_DOJO, MGM_4ASCEND 指令控制。这些指令的第一个参数为全大写，根据其不同可能还有后续参数。

牧场只有在实地才能玩，其指令具体用法不明。  
道场可以试试下面的例子：
```
HKDS dj C @R
TALKER_REPLACE dj dojo_teacher talk_mob_m6
HKDS djt LB @L ONELINE
TALKER_REPLACE djt Noel talk_noel
MSG_PREFIX djt '<think>'
MG_DOJO CREATE
LABEL menu
MSG_HIDE
MG_DOJO MENU
IFSTR $_result ISNOT '_cancel' {
    MG_DOJO INITG $_result
    IFSTR $_result IS '_tuto' {
        CHANGE_EVENT2 ___dojo/mg_tuto
    } ELSE {
        CHANGE_EVENT2 ___dojo/mg_main
    }
    GOTO menu
}
```
四子棋（缩写为 ttr，意义不明）的指令只有两条，只要用下面的例子就能选择和四名 NPC 中的哪一个对弈了（包括截至 0.25f 仍未实装的阿尔玛）。
```
MGM_4ASCEND INIT ostrea ixia alma primula
MGM_4ASCEND PLAY
```

### NEL.cs: 诺艾儿相关指令
英语的 r 和 l 在日语罗马字中都被「写作 r，读作 l」，因此哈酱的英语中充斥着「本该写作 r」的 l，比如 NEL 就是ノエル（No E Ru）错误缩写的结果。
> 其实离英文全名 NOEL 就差一个字母了，不知道偷的什么懒。

这个文件中的指令主要负责游戏的烹饪/炼金/调香/煮茶/酿酒系统，文件中也含有一些杂牌指令。

`COOKING`或`ALCHEMY`打开烹饪或炼金炉界面，且玩家可以进一步切换到其他类型（不包括工作台）。

`ALCHEMY_TRM`打开调香界面（需要主线进入第一章），但调好香后不管成功还是失败都不会有后续，除非写成下面的例子：
```
PVV 100 // 在序章中运行此事件后请读档
GETITEM mtr_sage 1 4 // 五星庭园鼠尾草
GETITEM mtr_weed0 1 0 // 一星枯草
GETITEM mtr_coal0 1 0 // 一星煤炭
ALCHEMY_TRM // 打开调香界面，直到诺艾儿侍奉成功/失败或放弃
GET_TRM_REWARD_BOX // 显示报酬页面，只有首次成功或首次失败时有效
IF $_result { // 1 为成功，0 为失败
    _result=success
} ELSE {
    _result=failure
} // 下一行显示「休息室初体验💓成功！/🩵失败…」
TUTO_MSG '&&Trm_'$_episode'&&TrmUi_root_'$_result
TUTO_POS '' T // 显示在报酬页面上方
IF $_reward'>0' GETMONEY $_reward // 实际获得报酬
WAIT_FN ITEMDESC // 等待玩家按掉报酬页面
TUTO_REMOVE // 隐藏报酬页面上方的那行提示
```
> 另一个文件中的`TRM_FINE`指令在休息室的`___Laevi/trm__aloma`事件开头被用到，作用不明。

`ALCHEMY_COFFEEMAKER`打开煮茶界面，但只能制作香草茶或咖啡。

`ALCHEMY_RECIPE_BOOK2`打开炼金术图鉴的物品部分，`ALCHEMY_RECIPE_BOOK`打开炼金术图鉴的配方部分（包括工作台）。

`ALCHEMY_WORKBENCH`打开炼金工作台界面，可以制作「背包扩容」和「空瓶收纳槽」。

`COOKING_TUTORIAL`和`ALCHEMY_TRM_TUTORIAL`分别进行烹饪和调香的教学，但需要参数并配合后续指令比如 UICOOKING。

`FATAL id 0/1`观看一个全屏 CG 动画，截至 0.25f 可用的 id 有 snake, troom_01a, troom_01b。0 表示观看结束时的按钮文字有「返回长椅」。
> 此指令一般要接在 UI_DISABLE 指令后，否则会看到多余的东西。

`LUNCHTIME`进入「享用料理」界面，此界面可以使用玩家所持有的任何能增加饱腹度的饮食，但玩家自己从菜单使用饮品进入不了这个界面。

`ITEMSTORE id pos`或`LUNCHSTORE id`进入一家物品店或堂食店，其中 pos 为位置参数（但只有`CL CCL C CCR CR`比较合适），id 的取值范围如下：
|id|店铺|
|---|---|
|BarUnder|酒吧贮藏室|
|CoffeeMaker|咖啡师（只能交易）|
|Laevi|魔女杂货店|
|Night|南丁格尔|
|Puppet|小木偶|
|city_bar|三月兔酒吧|
|city_bar_t02|免费喝「杨贵妃」|
|city_bread|面包摊|
|city_cafe|虎莲咖啡厅|
|city_slam_egg|精灵卵摊|
|city_stone|矿石摊|
|city_vegi|果蔬摊|

例如下面的例子可以在游戏一开始就购买酒吧贮藏室的所有商品：
```
GETITEM mtr_noel_egg 26 4 // 4 表示获得五星诺艾儿卵 26 个
ITEMSTORE BarUnder
```
商店的货品有库存数量限制（堂食店看不到具体数量），可以被之前提到的`STOREFLUSH id`指令刷新。

在堂食店买下的物品会被<b>立刻使用</b>，如果是无法使用的物品如矿石则会<b>白费金币</b>，请务必注意。
> 堂食店会强制使用金币交易，从而用金币跟小木偶买清水喝，但酒吧贮藏室就不行了。

`UIBOX_MONEY_ACTIVATE`和`UIBOX_MONEY_DEACTIVATE`分别显示和隐藏金币栏，在美术馆用到过。

`UI_RESTROOM_MENU type`打开盥洗室菜单，type 可以填 TOP_BT, TOP_B, TOP_T 之一。下划线后有 B 表示洗浴（Bath），有 T 表示排泄（Toilet）。  
在该指令前可以使用任意多条`UI_RESTROOM_MENU_HILIGHT xxx`来给盥洗室菜单的某个选项右侧添加绿框叹号，比如序章会强制「修补衣服+清洁身体」和「把卵排出」。  
其中 xxx 的取值范围和`BENCH_CMD_EXECUTE_O`指令的参数一致。

0.25 的「三月兔」酒吧下有一个秘密贮藏室，首次进入时需要输入密码 378（读作「米娜哈」，意思是「大家的哈酱」），这意味着新增了一个指令。

`NUMCOUNTER 最小值 最大值 默认值 正解值`令玩家输入一个非负整数，保存在临时变量 _result 中。  
四个参数都为整数且必须满足：0 ≤ 最小值 ≤ 默认值 ≤ 最大值 ≤ 1410065407  
正解值可以省略，如果不省略则在玩家输入它时会有开锁特效。
> 为什么是这个范围？因为在很多高级编程语言中，十亿乘十等于 1410065408

### BGM.cs: 音频类指令
虽然 AiC 本体的音频无法被 AssetStudio 解包，但 0.25 内置的四子棋小游戏 4ascend 的在线版本可以被解包音频，包括两首音乐和若干声效。

`LOAD_BGM BGM_xxx`预加载一个音乐，xxx 的取值范围就是 StreamingAssets 文件夹下的所有 BGM_xxx.awb 文件，截至 0.25f 共有：  
title, forest, ixia_battle, cornehl, cornehl_night, battle_nusi, degree45, shopping, valentine, ixia, ixia_night, underwater, wind, herghost, suzumusi, inn, popsup, tilde, town4, tuuzyou, light, primula, luminous_particle, sohunosyosai, fatal_huon, yocho, madhatter, hunter_minarai, killing, morinokioku, c_sign, tokimeki, bukiyou_na_hutari, yatto_deaeta, sinwa, dungeon3, ChipBattle, dojogame0, dojogame1, dojogame2, dojo_loseb, sakura_skip, mgm_ttr, piano_no_kakera, gaya_school_1, town2, houkago_no_hitotoki, school
> 编织者之森的音乐有战斗和非战斗两个版本，分别用`LOAD_BGM BGM_forest Battle`和`LOAD_BGM BGM_forest Normal`来加载。至于南丁格尔口琴版？那就不知道了。

`BGM_REPLACE x y z`切换到一个之前预加载的音乐，x 为旧音乐的淡出帧数，y 为新音乐的淡入帧数（不填则与 x 一致），z 填 0 表示不释放旧音乐（下次使用 BGM_REPLACE 指令会切换回旧音乐且进度不变）。

`HALF_BGM 0/1`将当前的音乐音量减半（1）或取消减半（0）。  
`STOP_BGM n`暂停当前的音乐，n 为淡出帧数。  
`START_BGM n`让被暂停的音乐继续播放，n 为淡入帧数。  
`SND id`播放一个声效，但 id 的取值范围不明。  
`BGM_GOTO_BLOCK X`或`BGM_OVERRIDE_KEY ...`对森之领主这种多段音乐进行精细的进度控制，详细用法不明。  
`BATTLE_TRANSITION_BGM 0/1`用于控制战斗音乐，详情不明。  
`LOAD_SND_TIMING`似乎是上述指令执行流程的公共终点，详情不明。

### GF.cs: 开关和变量类指令
如前所述，AiC 中除了哈语言的临时变量外，还有会写入存档的 GFB 开关和 GFC 变量。

开关和变量最初只有编号而没有名字，因此在`__INITG.cmd`文件中有大量的`DEFINE_GFB_NAME id name`和`DEFINE_GFC_NAME id name level`指令用来给它们取名。

其中 id 为开关或变量的编号，name 为开关或变量的名称，level 为变量的临时等级（1 表示切换地图后重置）。变量根据 id 的范围不同分为以下类型：
- 0-19: 记录 NPC 对话次数用的临时变量，其中 10-19 会在切换地图时重置。
- 20,21: PHASE, PHASEV，合在一起就是 PVV。
- 30-69: 各个角色相关，每人四个变量。编号为 4 的倍数的会在切换地图时重置，其他编号为偶数的是好感度。按顺序分别是诺艾儿、爱丽丝、南丁格尔、伊夏、杂货店卫兵、提尔德、普莉姆拉、阿尔玛、瓦罗斯、奥斯托利亚。
- 70-79: 编织者之森里的咖啡师、提尔德、小木偶相关。
- 80-87: 格拉提亚相关，如道场、牧场、酒吧等。
- 100-103: 序章战败类型、桥头梅法对话进度、车站男精灵对话进度、休息室某数据。

除此之外，该 cmd 文件还使用了`GFC_SEPARATOR id 注解`来给事件运行中的 F7 控制台长按 F 键显示的列表添加注解，只不过哈酱添加的注解都是日语。

部分开关见下表：
|id|名称|可能的解释|
|---|---|---|
|20|PVV0_YORIMICHI|序章过桥|
|21|PVV100_BATH|在家洗澡|
|22|ALCHEMY_RECIPE|炼金配方|
|23|WALROSS_CURRY|小瓶香料|
|24|PVV105_CITY_ELEC|水管施工|
|25|PVV105_CITY_SLAM_BST|买精灵卵|
|26|TTR_PLAYED|玩过棋局|
|27|TTR_PLAYED_BAR|酒吧棋局|
|28|OMORASHI|城镇失禁|
|29|OMORASHI_BAR|酒吧失禁|

以下除 PVV 外和 F7 控制台命令一样：
1. `GFB_SET x 0/1`或`GFB_PUT x 0/1`更改开关 x 的值为 0/1。
2. `GFC_SET x y`或`GFC_PUT x y`更改变量 x 的值为 y。
3. `GFC_SET_MX x y`或`GFC_PUT_MX x y`将变量 x 的值增大到 y。
4. `CFG_SET x y`（不属于 GF.cs 文件）将玩家设置 x 的值改为 y，其中 x 可以为 autorun（自动奔跑）或 stick_thresh（摇杆奔跑）。
5. `PVV n`将主线进度 PVV 增大到 n。

### UIBase.cs 的界面类指令
除了牧场小游戏中用到的下述 UIP_ 开头的指令以外，这类指令几乎都以 SHOW_ 或 HIDE_ 开头成对存在。  
UIP_EVENT_SETFADE, UIP_EVENT_TEMP_HIDE, UIP_FADE, UIP_PTCST, UIP_PTC_VAR, UIP_SETFADE, UIP_START_VALOTIZE, UIP_STOP_VALOTIZE

两周前的事故中用到了`UIPICT_GOB_DEACTIVE`，参数不明。

`SHOW_LOGBOX`和`HIDE_LOGBOX`这一对指令没有被使用过，效果不明。

之前在`PR_BETO`的例子中提到了`XXX_LETTERBOX`系列指令，这类指令共有八条。  
它们控制着上下黑边、动态立绘、血条蓝条的显隐，请运行下面的例子来帮助理解：
```
// START_LETTERBOX // 事件开始时会自动执行它
WAIT_BUTTON
STOP_LETTERBOX // 黑边逐渐消失的同时，动态立绘和血蓝条出现
WAIT_BUTTON
HIDE_STATUS // 只隐藏血蓝条
WAIT_BUTTON
SHOW_STATUS // 重新显示血蓝条，生效比上面那个慢一些
WAIT_BUTTON
START_LETTERBOX // 黑边逐渐出现的同时，动态立绘和血蓝条消失
WAIT_BUTTON
HIDE_LETTERBOX // 和 STOP 类似但黑边瞬间消失
WAIT_BUTTON
SHOW_LETTERBOX // 和 START 类似但瞬间完成
WAIT_BUTTON
HIDE_LETTERBOX_A // 黑边瞬间消失但动态立绘和血蓝条不出现，此时最适合使用 UI_DISABLE
WAIT_BUTTON
SHOW_LETTERBOX_A // 黑边瞬间出现，本指令只能在 HIDE_LETTERBOX_A 后使用，否则无效
WAIT_BUTTON
```
与「事件中出现动态立绘」相反的需求是「事件外隐藏动态立绘」。  
在 0.24 或更早版本中，玩家在录制或直播 AiC 时经常需要对窗口左侧诺艾儿的动态立绘打码/裁剪/遮挡，但打开 ESC 或长椅菜单时立绘会移到右侧，很不方便。  
如果开启 0.23 以来的「超健全模式」，虽然诺艾儿的动态立绘和部分像素绘不会再露出内裤，但她也不会再怀卵，因此会被高水平玩家认为这是在降低难度。  
使用下面的指令组可以将动态立绘隐藏（读档后也有效，直到返回标题画面或执行 UI_ENABLE 指令）从而获得 16:9 的全景视野，但也会一并隐藏底部的血蓝条和异常状态图标，并不一定利于战斗。
```
HIDE_LETTERBOX_A // 如果不使用此指令，切换地图后上下会有黑边
WAIT_BUTTON // 理由见下
UI_DISABLE // 它和 UI_ENABLE 不属于 UIBase.cs 而属于 NelM2DBase.cs
```
要注意的是，UI_DISABLE 指令一定要在动态立绘完全移出屏幕后再执行（比如上面用 WAIT_BUTTON 阻塞），否则会留下难看的残影。

0.25 新增了「酒吧的秘密贮藏室」，可以用特殊货币「精萃」兑换「更改立绘位置」的设置功能，该功能可以将立绘常驻在右侧（不管是否打开菜单，这样有利于打码/裁剪/遮挡）或隐藏（但打开菜单时会从左侧边缘外平移到右侧边缘内，并不一定优于常驻在右侧）。

虽然这比起 UI_DISABLE 更便于战斗，但如果要录制影片级的沉浸式画面，还是用 UI_DISABLE 把底部的血蓝条也隐藏掉更好，而且也可以规避失禁/泌乳/高潮时一闪而过的特殊立绘。

### NelItem.cs 和 M2DBase.cs 的冷门指令
NelItem.cs 文件中定义了一些从未用于 cmd 文件的冷门指令，可能和 resources.assets 中的 store 文件有关：  
`CATEG, COLOR, COLOR_FN, DESC_FN, DETAIL_FN, ICON, MAX_GRADE_ENPOWER, MAX_GRADE_VALUE, MAX_GRADE_VALUE2, MAX_PRICE_ENPOWER, NAME_FN, RECIPEINFO, SELL, SELL_RATIO, SER_APPLY, SER_CURE, VALUE, VALUE2, VALUE3`

M2DBase.cs 中定义了一些基本只用于 m2d 文件夹下的 cmd 文件的冷门指令，但 evt 文件夹下的 cmd 文件偶尔也可能用到。

`ADD_MAPFLUSH_FLAG`在第一章首次进入森林时用到，想必会导致森林发生一些不同于序章的改变，详情不明。

`DEFEAT_EVENT`和`DEFEAT_EVENT2`用于`__M2D_DEFEAT_SUMMONER.cmd`文件中，该文件定义了诺艾儿在战斗点胜利时会触发的事件，这两个指令想必类似于`CHANGE_EVENT`和`CHANGE_EVENT2`。

`ITEM_ACTIVATE`和`ITEM_DEACTIVATE`是一对效果不明的未知指令。

`START_DGN_HALF_BGM`和`STOP_DGN_HALF_BGM`看上去是一对类似`HALF_BGM 1/0`的指令，其中 DGN 可能是 dungeon 的缩写，意味着这组指令只能用于非据点？

`VALOTIZE 0/1`设置 FlagValotStabilize 属性是否含有 EV 项，具体意义不明，而且这个指令似乎不是英文单词。

`HIDDEN_WHOLE_SCREEN`字面意思是隐藏全屏，家里的卫生间差一点用到，详情不明。

`SEND_EVENT_CORRUPTION`字面意思是「发送_事件_腐朽」，城镇的快速移动用到了，详情不明。

`DEF_CURMAP`以及不在此文件的`DEFINE_WHOLEMAP`是两个很有用的指令，它们可以带一个临时变量名作为参数来将当前地图和所在大区的名称存入该变量，例如下面的例子（请注意 Area_ 和 MAP_ 这两个前缀的位置）：
```
DEF_CURMAP _small
DEFINE_WHOLEMAP _big // house, forest, city, school, sacred
TUTO_MSG '当前位于<font color=#00FF00>&&Area_'$_big'<font color=#66CCFF>&&MAP_'$_small
TUTO_POS C
WAIT_BUTTON
TUTO_REMOVE
```

`INIT_MAP_MATERIAL`经常和另外两个不在此文件的指令连用来让诺艾儿切换地图，一般写法如下（两处地图 id 必须相同）：
```
INIT_MAP_MATERIAL id
WAIT_FN MAP_TRANSFER
NEL_MAP_TRANSFER id
```
这组指令写起来太啰嗦还不能指定坐标，有时不如使用长椅的快速移动指令`NEL_EXECUTE_FAST_TRAVEL id x y`，其中 x y 为出现在目标地图的坐标但会有偏差。
> 但是快速移动指令偶尔会出现地图素材没加载出来的情况。

### M2EventCommand.cs 中的部分指令
该文件中大部分指令以 # 开头，这里只列出其他的（不包括已经讲过的`PR_KEY_SIMULATE`）。

`GREETING L/R/@ d`让诺艾儿在调查点或 NPC 旁立正（使用 F7 控制台的 evt 命令测试时无效），一般作为第一条指令使用。

第一个参数为 L/R 表示诺艾儿立正时<b>背对</b>的绝对方向，@ 表示自动。
> 具体而言，@ 在诺艾儿原本位于调查点左侧时视为 L，原本位于调查点右侧时视为 R，且只和诺艾儿的位置有关而和朝向无关。

第二个参数 d 表示立正点和调查点之间的距离（不填视为 0，略小于可调查边界），d 越大诺艾儿越后退，d 越小诺艾儿越前进，d 小于某个负数（与调查点的胖瘦有关）会穿过调查点背对它。

此指令常用来在进一步移动诺艾儿之前将起点对齐（因为玩家发起调查的位置每次都有一定的偏差），同时因为它本身也算是个异步的移动指令，因此其后往往要紧跟一条`WAIT_MOVE`指令等待移动完成。

`DARK_ACTIVATE` 进入暗黑模式（只有光源周围是亮的），切换地图后失效，也可使用 `DARK_DEACTIVATE` 提前退出此模式。

`LP_ACTIVATE`, `LP_DEACTIVATE`, `CHIP_ACTIVATE`, `CHIP_DEACTIVATE`, `LP_ACTIVATE_TO_CHIP`, `LP_DEACTIVATE_TO_CHIP`是三对控制地图 LabelPoint 和 Chip 启用与否的指令，想必和地图上门的开闭、易碎地形的消失与重现有关。

`LOAD_LAYER`字面意思是加载图层，`PTCST`（还有一个`#PTCST`）不知道是什么的缩写，这两个指令都详情不明。

### NelM2DBase.cs 中的上百条指令
这个文件中有大约 140 条指令，下面大致按照字母顺序列出，但一些功能相关的指令也可能写在一起。

`ABORT_PR_MAGIC`和`KILL_PR_MAGIC`以两种不同的特效取消诺艾儿吟唱好的魔法，前者像是玩家自己短暂同时按下普攻和魔法键主动取消（不消耗魔力），后者则像是魔法打在虫墙上被吞掉了（白白消耗魔力），详见下面的例子：
```
HKDS n BB #<%> WIDE_TT
MSG_PREFIX n '要演示哪种取消魔法的方式呢' // 这样就不需要改动 txt 文件了
MTL MSG_SKIP // 下一条对话显示完成时立刻显示两个选项
MSG 105/main_classroom*n_101 // 原文只有一个问号，刚好够用
SELECT 2 _type
ABORT abort
KILL kill
MSG_HIDE // 隐藏对话框
TUTO_MSG Tuto_magic
TUTO_POS '' T
ALLOW_EVENTHANDLE_KEY X
WAIT_PR_EXPLODE_MAGIC
IFSTR $_type IS 'abort' {
    ABORT_PR_MAGIC
} ELSE {
    KILL_PR_MAGIC
}
TUTO_REMOVE
WAIT 60 // 等待一秒
```

`AUTO_SAVE`无视玩家设置强制自动存档。

`AUTO_SAVE_BENCH`将下次复活的位置设置为身边的长椅，此指令会在每次快速移动后自动执行。

`BENCHMARK`和`BENCHMARK2`似乎跟「纯白之箭」和「护盾」以及 txcheck 命令有关，游戏中未使用，详情不明。

`BENCH_ALLOC_MASTURB`会让诺艾儿下次坐在长椅上时可以无视兴奋度去「抚慰自己」，此指令仅在事件`_bench_cure_ep_base.cmd`中被用到，不建议手动使用。

`BENCH_CMD_EXECUTE x`执行一个长椅操作 x，共有以下这些：
1. cure_hp: 恢复 HP
2. cure_cloth: 修补衣服（首次回家前不可用）
3. cure_mp: MP 恢复（仅据点内可用）
4. cure_ep: 抚慰自己（瞬间完成），想看过程请运行`_bench_cure_ep_base.cmd`事件
5. cure_egged: 将卵排出（未实装）
6. wait_nightingale: 等待商人
7. fast_travel: 快速移动（雨天或夜间不可用）
8. fast_travel_home: 回到据点（仅编织者之森可用）
9. save: 保存

`BENCH_CMD_EXECUTE_O`执行一个盥洗室操作 x，共有一下这些：
1. restroom_cure_egged: 把卵排出
2. pee, pee_excrete: 小便、小便（会清空食物效果）
3. shower: 淋浴
4. shower_clean, shower_cure_cloth, shower_clean_cure_cloth: 清洗身体、修补衣服、两者都做。
5. cure_ep_sensitivity: 重置性兴奋度（未实装）

`BENCH_RELOAD`和`BENCH_SITDOWN`似乎没有作用，`BENCH_EVENT_FAILURE`和`BENCH_EVENT_SUCCESS`被用于「抚慰自己」失败和成功时的不同分支，一般用不到。

`CLEAR_TREASURE_BOX_WM_CACHE`字面意思和宝箱有关，详情不明。

`CLOSE_DESCBOX`与`WAIT_FN ITEMDESC`相反，它会帮玩家按掉技能/魔法/强化插件的黑屏介绍或道具的弹窗介绍，例如下面的例子：
```
GETMAGIC whitearrow
WAIT 60
CLOSE_DESCBOX
WAIT 60
GETMAGIC dropbomb
WAIT 60
CLOSE_DESCBOX
WAIT 60
GETMAGIC fireball
WAIT 60
CLOSE_DESCBOX
WAIT 60
GETMAGIC pr_burst
WAIT 60
CLOSE_DESCBOX
WAIT 60
GETMAGIC thunderbolt
WAIT 60
CLOSE_DESCBOX
WAIT 60
```

`COFFEEMAKER_SET forest_xxx`和`NIGHTINGALE_SET forest_xxx`更改咖啡师和南丁格尔所在的地图（游戏中打森之领主前用到过），但是不能更改提尔德和小木偶的。
> `NIGHTINGALE_SHUFFLE forest_xxx`会让南丁格尔在该地图附近出现，可能需要配合铃铛。

`COOK_ADD_WALK_COUNT id`增加某张地图的行走步数（？），详情不明。

`CONFIRM_AREA_CHANGE xxx`用于确认大区之间的移动，参数写法不明。

`CONFIRM_LOAD_SUCCESS`在最初的事件`s00_0a.cmd`中用到，可能和读取旧版本存档有关。

下面是一个用处不亚于 NUMCOUNTER 的指令，虽说它不能自由指定三处文本的内容（尤其是最长的一段，除非只打算录制视频来投稿）：
```
CONFIRM_WAIT_NIGHTINGALE // 根据玩家的选择将 1 或 0 代入变量 _result
PIC_SWIN '' $_result
WAIT_BUTTON
```

`DANGER n 0/1`将战斗危险度改为 n，第二个参数为 0 表示天色逐渐改变而 1 表示突然改变。

`DANGER_MANUAL n 0/1`只改变视觉天色而不改变危险度，第二个参数含义同上，第一个参数 n 的意义有所不同。  
具体而言，正整数 n 为奇数时会变为第 (n+1)/2 个黑夜，n 为偶数时会变为第 n/2 个清晨。

`DANGER_INITIALIZE_MEMORY`用于在出门自选危险度后初始化相关内存，不应被手动使用。

`DANGER_LEVEL_INIT_BOX xxx`用于出门自选危险度，参数写法不明。

`DARKSPOT type color x y z`用于`#<%>`或`#<xxx>`指令后，从而给诺艾儿或某个 NPC 的像素小人填加聚光灯效果。  
`DARKSPOT_DEACTIVATE type`则可以取消某个类型的灯光效果。  
其中 type 可以为 FILL, CIRCLE, TRIANGLE 之一，但是 CIRCLE 似乎必须捏着霰弹才有效。  
color 的格式为`aa:#rrggbb`，但似乎没有效果，还不如填`''`。  
x y z 为非负小数，一般固定 x=0, y=1, z 越大则光源以外越暗，可以试试下面的例子：
```
SELECT 3 _type
'FILL(without light)' FILL
'CIRCLE(shotgun needed)' CIRCLE
'TRIANGLE(coffee maker)' TRIANGLE
_depth=~0.0
LABEL loop
DARKSPOT $_type '' 0 1 $_depth
WAIT_BUTTON
DARKSPOT_DEACTIVATE $_type
_depth=~$_depth+0.1
IF $_depth'<=1.0' GOTO loop
```

`DEFAULT_MIST_POSE 1`会让诺艾儿保持呼吸困难的姿势（用于城区底层的浓雾地图），切换地图或执行`DEFAULT_MIST_POSE 0`指令后失效。

在通过`#<xxx>`指定某个敌人后，`ENEMY_ADD_TICKET type x y z`让该敌人做出指定动作，比如序章的史莱姆教学。可用的动作 type 有以下这些：  
`NOTHING, AWAKE, SLEEP, WALK, WALK_TO_WEED, PUNCH, PUNCH_0, PUNCH_1, PUNCH_2, PUNCH_WEED, MAG, MAG_0, MAG_1, MAG_2, GUARD, GUARD_0, GUARD_1, GUARD_2, APPEAL_0, BACKSTEP, WARP, GAZE, WAIT`

`ENGINE`和`ENGINE_NNEA`都被用来让 NPC 做出特殊动作，比如咏唱魔法<del>或者被撅</del>，这两个指令的参数写法较难掌握，请结合现有的例子去学习。

因为总有玻璃心的玩家直到 2024 年 6 月初都还在反复质问「诺艾儿开局到底有没有性经验」，所以哈酱在 0.25f 加入了一个新指令用来更改「状态-敏感的记录-最近的回忆」。
> 虽说使用 0.09 的遗留指令 EP_STATE_CLEAR 确实可以重置整个「敏感的记录」页面中所有非实时的部分（也就是只有兴奋度、怀卵和尿意不会被重置），但这能骗得过你自己吗？

`EPSITU x n`或`EPSITU_B x n`将该记录更改，各部分的意义如下：
1. _B: 有 _B 表示插入到记录开头，没有则表示添加到记录末尾，同一事件中多次使用此指令时可用来规划顺序。
2. x: 可以直接写全大写的敌人名称（或`_PEE`、`_MILK`、`MASTURBATE`之一），也可以用 && 开头的 tx 类词条和字符串拼接。  
    0.25f 在 XX_tx2_ep.txt 最底部新增了一些 &&GM_ep_situation_xxx 词条可供参考。
3. n: 连续高潮的次数，范围是 [2,2147483647] 的整数，可以省略。同一事件中多次使用此指令时，会自动合并同一种敌人，n 值取其中最大的。

参数 x 在不以 && 开头的情况下会被优先识别为敌人名称，识别失败时会原样显示为「被 Enemy_x 弄高潮了 ? 次」，这并不是我们想要的效果。  
为了令参数 x 显示任意内容，可以用空词条和字符串拼接得到，例如：  
`EPSITU &&PadInput_Plus'不是处女不是处女不是处女，重要的事情说三遍！'`  
截至 0.25f，XX_tx_config.txt 中有以下几个空词条可以使用：  
&&PadInput_touchpadButton  
&&PadInput_leftStickPress  
&&PadInput_rightStickPress  
&&PadInput_Plus  
&&PadInput_Minus  
&&PadInputL_11  
&&PadInputL_12

全大写的敌人名称有以下这些（除史莱姆外全部位于 XX_tx_enemy.txt）：
|English|中文|
|---|---|
|SLIME|史莱姆|
|WORMS|虫群|
|OTHER|敌人|
|MUSH|蘑菇|
|MAGE|愚者|
|TENTACLE|触手|
|PUPPY|幼犬|
|GOLEM|木偶|
|GOLEM_OD|巨人|
|GOLEM_OD2|巨人|
|FOX|妖狐|
|UNI|剑山|
|SNAKE|土蛇|
|SPONGE|海绵|
|GECKO|壁虎|
|FROG|沼蛙|
|FROG_VORE|沼蛙的吞食|
|BEAM|催淫光束|
|BOSS_NUSI|森之领主|
|MKB|三角木马|
|MECHGOLEM|机甲木偶|

`FLUSHED_MAP`在战败时和 s10_5a 事件中用到，会重置很多地图相关的状态。

`GAMEOVER_MAP_JUMP_TO`在战败时用到，会决定在哪里复活。

使用下面的例子可以获得所有技能：
```
// GETSKILL punch // 轻攻击
// GETSKILL shotgun // 魔法霰弹
// GETSKILL sliding // 滑铲
GETSKILL wheel // 彗星俯冲
GETSKILL comet // 旋风斩击
GETSKILL dashpunch // 突进冲击
GETSKILL airpunch // 凌空横斩
GETSKILL sp_bird // 羽翼护符（本身无用，用来配合下面三行）
GETSKILL_NOANNOUNCE guard // 护盾
GETSKILL_NOANNOUNCE evade // 闪避
GETSKILL_NOANNOUNCE ukemi // 受身术
GETSKILL guard_bush // 护盾冲击
GETSKILL guard_lariat // 环轨护盾
GETSKILL evade_dancing // 轮舞斩击（效果未实装）
GETSKILL burst // 圣光爆发（这个没用，必须用 GETMAGIC pr_burst）
// GETSKILL hp10_forest_0 // 未实装
GETSKILL hp20_forest_senzyo_rt // 水流开关的越狱难题
GETSKILL hp10_forest_ct // 曲径打靶
GETSKILL hp20_store_0 // 钟楼残垣右侧
GETSKILL hp20_forest_wood_extender // 巨树的联动门难题
GETSKILL hp10_forest_ruin_hall // 石碑大道 - 荆棘舞台
// GETSKILL mp10_forest_0 // 未实装
// GETSKILL mp20_store_0 // 未实装
GETSKILL mp20_forest_lava_secret // 酸液上涨区的暗道
GETSKILL mp20_forest_athletic_ladder // 双梯竞速
GETSKILL sp_difficulty0 // 埴轮人偶的护符（效果已下架）
GETSKILL sp_map_forest // 编织者之森的地图
WAIT_FN ITEMDESC // 等待玩家按掉所有介绍
```
除轻攻击、魔法霰弹、滑铲、受身术、圣光爆发以外，其他已习得的技能都可以在菜单中手动启用或禁用来避免按键冲突。  
`ENABLESKILL id`或`DISABLESKILL id`悄悄启用或禁用某个<b>已习得</b>的技能，例如序章教学环节如果选择了「请教教我」，就会禁用 guard 和 evade 技能。  
`REMSKILL id`悄悄失去某个 id 的技能，即使在已经习得「圣光爆发」魔法（pr_burst）后使用`REMSKILL burst`也只会让技能栏带有两句简短介绍的「圣光爆发」技能消失，不影响使用。

使用下面的例子可以获得所有魔法：
```
// GETMAGIC whitearrow // 纯白之箭
GETMAGIC dropbomb // 地面炸弹
GETMAGIC fireball // 聚能火球
GETMAGIC pr_burst // 圣光爆发
GETMAGIC thunderbolt // 雷霆电击
WAIT_FN ITEMDESC // 等待玩家按掉所有介绍
```
在 0.22 或更晚版本的游戏中读取来自 0.21 或更早版本的存档，会失去「圣光爆发」魔法。  
`REMOVEMAGIC id`悄悄失去某个魔法（纯白之箭除外）。
> 当 id 为 pr_burst 时，GETMAGIC 和 REMOVEMAGIC 指令也会同步获得或失去「圣光爆发」技能（burst），但不会影响格拉提亚城内的快速移动功能。

`GETITEM(_XXX) id count grade`获得物品，各参数的意义如下：
1. _XXX: 不填会在左下角提示获得了什么，填`_NOANNOUNCE`则没有提示，填`_BOX`会在画面中央弹窗（需要`WAIT_FN ITEMDESC`）显示物品说明（如四色地图印章、五种炼金配方）。
2. id: 物品 id，取值范围和`ItemHas[id]`监听器一致。
3. count: 物品的数量，填 -1 表示单次叠加上限。
4. grade: 物品的品质，填 0 到 4 分别表示一星到五星品质。

不知从哪个版本开始，诺艾儿和姐姐一起埋在后院的时间胶囊（陈旧的容器）会在获得后立刻悄悄失去，如果想查看它的说明就要用下面的例子：
```
GETITEM_BOX timecapsule
WAIT_FN ITEMDESC
```
此外，如果获得的是强化插件（注意要加 Enhancer_ 前缀），则弹窗样式会有所不同：
```
GETITEM_BOX Enhancer_hp_eye // 血之虹瞳
GETITEM_BOX Enhancer_cliff_stopper // 抓地鞋
GETITEM_BOX Enhancer_overspell // 超载咏唱
GETITEM_BOX Enhancer_anchor // 体术心得
GETITEM_BOX Enhancer_long_reach // 长法杖
GETITEM_BOX Enhancer_secure_absorb // 磁性之心
GETITEM_BOX Enhancer_soul_eater // 灵魂吞噬者
GETITEM_BOX Enhancer_falling_cat // 猫之缓降
GETITEM_BOX Enhancer_double_evade // 双重闪避
GETITEM_BOX Enhancer_sway_sliding // 盗垒滑步
GETITEM_BOX Enhancer_raincaller // 祈雨御守
GETITEM_BOX Enhancer_shield_cat // 恐高症
GETITEM_BOX Enhancer_singletask // 藏巧守拙
GETITEM_BOX Enhancer_juice_server // 濡湿预兆
WAIT_FN ITEMDESC // 等待玩家按掉所有介绍
```
`TOUCHITEM id`也会让诺艾儿获得一个道具，但如果背包已满就无法获得，比如小瓶香料。

在序章中需要交付给姐姐收集的素材，在第一章中需要交付给奥斯托利亚两个炸弹。  
`REMITEM id count grade 词条名`失去指定的物品，其中物品 id 的取值范围和 GETITEM 指令一致，count 为失去的数量，grade 为失去的等级（0~4 表示 1~5 星，-1表示从高到低依次失去）。

词条名表示左下角显示的提示，可以省略（默认为「失去了 count 个某物品。」）也可以填 tx 类 txt 文件中任何带有两个参数的词条名（开头不要带 &&），比如下面的例子：
```
GETITEM_NOANNOUNCE mtr_essence_golem -1 4
REMITEM mtr_essence_golem 5 4 GM_ep_situation_total_reached1
```
`REMITEM_NOANNOUNCE id count grade`悄悄失去物品，左下角没有提示。
> 除此之外还有 GETITEM_SUPPLIER 指令但似乎没有效果。

`GETMONEY n`获得 n 枚金币，n 为小于一百万的正整数。  
`GETMONEY_BOX n`弹窗获得 n 枚金币（需要`WAIT_FN ITEMDESC`），n 为不大于 2147483647 的正整数，但诺艾儿的金币上限依然是 999999。

`GM_ALLOW_OPEN`, `GM_DENY_OPEN`, `GM_ITEMMOVE`, `GM_OPEN`是四条控制炼金术图鉴的指令，详情不明。

在打开菜单时地图画面会变成毛玻璃特效，在进入或离开商店等界面时需要手动用`SHOW_BLURSC`或`HIDE_BLURSC`来启用或禁用此特效。  
它和后面所讲的 PE 特效一样在事件结束时会被移除，在测试时请务必用 WAIT_BUTTON 等指令阻塞住。

在 AiC2023 拜年纪中，开场动画是将魔女杂货店坡上发光蘑菇的旋律改成《新年好》来实现的，但很可惜用的手段是「单独录制每个蘑菇的音符然后变调再重新对轴添加到静音录屏中」。  
AiC 本身提供了 m2d_house_footbell.cmd 文件用来修改蘑菇的旋律（也只能直接修改该文件，写在其他文件无效），该文件的三行非注释内容如下（【】中为行号）：
```
【1】STOP_LETTERBOX
【2】_h=cornehl_stone_
【3】HOUSE_FOOTBELL $1 ${_h}1 ${_h}2 ${_h}3 ${_h}0 ${_h}2 ${_h}3:0.5 ${_h}2:0.5 ${_h}1 ${_h}2 ${_h}3 ${_h}4:0.5 ${_h}3:0.5 ${_h}2 ${_h}5
```
第一行不要修改，第二行是为了让第三行写起来不啰嗦，第三行定义了共计 14 个音符（以 ${_h} 开头）的旋律（不足 14 个则循环播放）。  
其中 HOUSE_FOOTBELL 指令的第一个参数`$1`也可以改为`''`、REVERSE、L2R、R2L 之一，但只建议将 L2R 或 R2L 用于测试，而完工时用`$1`。  
可用的音符共有 6 个，`${_h}0 ${_h}1 ${_h}5 ${_h}2 ${_h}3 ${_h}4`分别表示简谱中的$1,2,4,5,7,\dot1$。  
在音符后添加`:0.5`表示此音符在诺艾儿跑过蘑菇时的播放时值减半，相当于简谱中的下划线。  
只用这 6 个音符能演奏的旋律极少，读者若有办法添加其他音符请提交报告。

`INIT_ITEM_REEL ...`用于初始化宝箱转轮，详情不明。

`INIT_MAP_BGM id`初始化即将到达的某个地图的音乐，详情不明。

`ITEMMNG_POP_BYTES`和`ITEMMNG_PUSH_BYTES`用于烹饪教学，详情不明。

`MANA_CLEAR`会让场上散落的所有魔力立刻消失。

`MAPTITLE_HIDE`字面意思是隐藏地图标题，详情不明。

各种水流/酸液跑酷以及「笼中余祸」这个战斗点一定让你颇伤脑筋吧，是时候解放诺艾儿了！  `MIST_CLEAR`指令可以暂时清除当前地图的各种力场源（切换地图后失效）。  
但是没有源头的力场（如下面的 SEA 以及战斗点「湖面蜃景」）不受影响，所以并不能用来探索「森林边缘的湖泊」和「过充插槽」这两个红色水池。
> 游戏中的力场共有七种：NONE（无）POISON（毒雾）MAGIC_JAMMING（杂念）WATER（水）SWAMP（沼泽）LAVA（酸液）SEA（海）

`MV_CURE x y 0/1`必须用在`#<%>`或`#<xxx>`后，会令指定的目标回复 x 点生命和 y 点魔力，并根据第三个参数决定是否解除该目标的所有异常状态（如果是诺艾儿则只包括能在长椅上解除的异常状态，服装损坏除外）。
> 本指令和`PR_CURE 0/1 0/1 0/1`很像，但前两个参数是回复量。

`NEED_FINE_DEPERTURE`在几个事件中用到，但源代码表明它没有任何效果？

`NOEL_OUTFIT_TURNBACK`在诺艾儿穿着吊带睡裙时使用会让她换回战斗服，但如果她本来穿的是道场训练服则没有效果。

`PE id n`添加一个后处理特效（PostEffect），n 为添加该特效所用的帧数（-1 表示移除特效），id 的取值范围如下：  
HP_REDUCE, MP_REDUCE, MP_ABSORBED, WHOLERIPPLE, FLASH, SUMMONER_ACTIVATE, LAYING_EGG, ENEMY_OVERDRIVE_APPEAR, MAGIC_DEVICE_ACTIVATE, JAMMING, GAS_APPLIED, POST_BLOOM, IRISOUT, WORM_TRAPPED, THUNDER_TRAP, BURST, SHOTGUN, MAGICSELECT, GO_CLOSE_EYE, TS_SLOW, ZOOM2, ZOOM2_EATEN, HEARTBEAT, RAIN, CONFUSED_CAMERA, SND_VOLUME_REDUCE, M2D_VAR_0, BGM_LOWER, BGM_WATER, FINAL_ALPHA

有时添加完某个特效后紧接着就会移除，如果额外写一条带 -1 参数的指令就很麻烦，这时候可以直接用`PE_FADEINOUT id x y`来实现，具体效果是「先在 x 帧内添加特效，再停留 y 帧，最后在 x 帧内撤去特效」，共计 2x+y 帧。
> 后处理特效在事件结束时会被立刻移除，在测试时请务必用 WAIT_BUTTON 等指令阻塞住。

`PRE_FLUSH_MAP`字面意思是预先刷新地图，详情不明。

`PR_ACTIVATE_THROW_RAY 0/1`和`PR_ABSORB_EV_ASSIGN ...`在牧场小游戏中被奶牛扑倒舔舐时使用，详情不明。

`PR_ASSIGN_REVERT_POSITION`在序章诺艾儿到达第一个长椅时使用，详情不明。

`PUZZ_WARP x y z`令诺艾儿进行一次解谜中的检查点传送，参数写法不明。

`QUEST_PROGRESS id n ...`推进某个任务，`QUEST_FINISH id ...`完成某个任务，`QUEST_REMOVE id`移除某个任务，它们的参数写法不明。
> 所有 id 的取值范围见 resources.assets 解包出的 quest 文本文件。

`QU_XXX x y z`令画面震动，其中 XXX 可以为 HANDSHAKE, VIB, SINH, SINV 之一。
1. HANDSHAKE：会先用 y 帧加速离心，再匀速圆周运动 x 帧，最后用 y 帧减速向心，圆周半径为 z。
2. VIB: 会在 y 帧内从震级 x 逐渐变到震级 z。
3. SINH, SINV: 和 VIB 类似，但 SINH 只会左右摇动，SINV 只会上下跳动。

`REEL_FLUSH 0/1 0/1`刷新转轮，在`__M2D_FLUSHED_AREA.cmd`和`__M2D_GAMEOVER.cmd`中用到，详情不明。

`SAVE_SAFEAREA_DEPERTURE house`将下次从长椅返回的默认据点设为魔女杂货店，但是不知道怎么才能设为格拉提亚城。

在使用`NEL_MAP_TRANSFER`或`NEL_EXECUTE_FAST_TRAVEL`切换地图后，会播放该地图的默认音乐。如果需要替换成别的音乐，可以在这两个指令前使用`SCN_MANUAL_BGM_REPLACE id`来替换。

在帮助瓦罗斯和奥斯托利亚完成爆破任务时，会有两处爆破特效，这可以用下面的指令来实现：  
`SETMAGIC POWERBOMB PR % dx dy`  
此处 POWERBOMB 表示爆破特效（将来可能会有其他特效），PR 为固定写法，% 表示以诺艾儿的像素小人为参考系，dx 和 dy 为偏移量，这里 y 轴正方向是<b>朝下的</b>。  
爆破特效完全结束后（非常晚）会爆出一些魔力，如果觉得很突兀的话请把 SETMAGIC 改为 SETMAGIC_NOMANA。  
下面是一个非常精彩的例子，你应当在序章的史莱姆教学之前让诺艾儿站在「穿林日光之庭」长椅左下方的第二级台阶的左边缘（横坐标为27）且面朝左侧，然后运行：
```
SUMMONER_TYPE forest_tutorial NO_BORDER NO_HIDE_LAYER
#MS_ % 'P[guard~]' // 防御动作
TUTO_MSG Tuto_magic
TUTO_POS C T
ALLOW_EVENTHANDLE_KEY X // 只能按魔法键
WAIT_PR_EXPLODE_MAGIC // 等待纯白之箭发射
WAIT 60
TUTO_REMOVE
SETMAGIC_NOMANA POWERBOMB PR % -10.5 3
WAIT 180
```
上面例子的效果应当与 AiC2024 拜年纪单品《我忘不了诺艾儿小姐了》的[结局动画](https://www.bilibili.com/video/BV15y41187di/)相类似。

`SF_EVT_SET x`会将当前事件 xxx 所对应的 SF 变量`EV_xxx`的值设置为 x，据说可以用来大幅优化拜年纪作品《普莉姆拉计算机》。
> 还有一个`SF_SET x y`指令可以将任意 SF 变量 x 的值设置为 y。

`SUMMONER_TYPE`, `SUMMONER_ACTIVATE`, `SUMMONER_ACTIVATE_EFFECT`, `SUMMONER_DEFEAT_NIGHT_PROGRESS`等指令（可能有参数）可以进行一些战斗点相关的操作，详情不明。

`SVT_FLUSH pose`将诺艾儿动态立绘的 pose 姿势刷新，此处可用的 pose 有：  
`bench_torned, bench, hipdown, stand_battle, stand_normal, stand_weak, torture_slime_1`以及各种`damage_xxx`。
> 游戏中只用它在「切换新旧战斗立绘」时刷新了 stand_battle 这个姿势。

`TE_COLORBLINK_ ...`进行颜色闪烁，此指令的参数多达六个，详情不明。

每次开始新游戏时，画面中央会显示「@hinayua_r18 and @Hashinomizuha Presents」的两行字幕。  
一般地，`TITLECALL key size 0/1`显示一个左右居中的白色字幕。  
其中 key 为 tx 类 txt 文件中的一个词条名（不带 &&），且这次可以用多行的词条了！（但是不能带 &1 &2 等参数）  
size 为字号大小，请根据最长一行的字数自行调节。  
第三个参数为 1 则会在字幕最后一行下面加上下划线，用来显示所在大区的名称。  
字幕的默认位置比较偏上，可以立刻接着用`TITLE_POS_SHIFT dx dy`来调节，这里 y 轴正方向是<b>朝下的</b>，例如下面的例子：
```
TITLECALL GM_error_sacred 32 1
TITLE_POS_SHIFT 0 20
WAIT_BUTTON
TITLECALL_HIDE 1 // 让字幕立刻消失
```

`UIALERT 词条id type`或`UIALERT_ITEMHOLDOVER 物品id`在左下角显示警告，其中后者会显示为「身上带的东西太多了，装不下某物品」。  
词条 id 的取值范围和 TUTO_MSG 指令一致（开头不能带 &&，所以也就不能拼接或代入参数），物品 id 的取值范围和`ItemHas[id]`监听器一致。  
type 的取值范围见下面的例子：
```
UIALERT Alert_no_lunchbox // 默认
UIALERT Alert_nearly_laying ALERT_EGG // 怀卵
UIALERT EP_force_masturbate_in_1 ALERT_EP // 低兴奋度
UIALERT Alert_ep_thresh0 ALERT_EP2 // 高兴奋度
UIALERT Damage_water_choke_in_absorbed ALERT_GRAY // 灰色
WAIT_BUTTON // 等上面五个消失了再按键
UIALERT Alert_gameover ALERT_HUNGER // 致命
UIALERT Bench_execute_cure_mp ALERT_BENCH // 长椅
UIALERT SVD_Alert_save_failure ALERT_FATAL // 系统级错误
UIALERT Alert_item_stolen ALERT_PUPPET // 小木偶
UIALERT Alert_new_config_on_barunder ALERT_BARU // 酒保
```

`UIP_VALOTIZE 0/1`在游戏中未使用，详情不明。  
`UI_FRONTLOG 0/1`在洗手间被使用，详情不明。

序章普莉姆拉的技能教学环节如果选择了「请教教我」，就会使用几条`UIGM ...`指令来教诺艾儿如何启用技能，详情不明。

`WAIT_PR_EXPLODE_MAGIC`等待诺艾儿松开魔法键来施放魔法，记得要用在`ALLOW_EVENTHANDLE_KEY X`指令后。  
根据需要的魔法类型不同，可以在 X 后追加 L R T B 这些方向键并用空格隔开，然后进一步使用`IF 'NoelCasting[ID]' {`这样的指令来判断到底咏唱了什么。

`WAIT_PR_EXPLODE_BURST`等待诺艾儿长按普攻加魔法键来圣光爆发，记得要用在`ALLOW_EVENTHANDLE_KEY X Z`指令后。

`WA_DEPERTURE 大区1 地图1 大区2 地图2`在游戏中没有用到，详情不明。  
`WA_RECORD forest _forest_nusi_defeat`在打败森之领主时被用到，详情不明。

`WEATHER_PROGRESS`会根据当前危险度随机推进天气，同一危险度下连续使用此指令只生效一次。

`WM_CHANGE_SAVE_NIGHT_PROGRESS`指令有一个参数，详情不明。

## 非字母开头的像素小人类指令
这部分不包括已经在 EV.cs 文件中提到过的一对尖括号包裹的那几个不知道有什么用的指令。

之前我们已经在「主角操作类指令」一节中遇到了`#<%>`指令，并且在 GREETING 指令的介绍中提到了 WAIT_MOVE 指令。  
在 AiC2024 拜年纪中，共计六幕的过场剧情有好几幕都使用了`#MS_ % 'xxx'`指令来让诺艾儿的像素小人移动，这些以 # 开头的（以及 m2d 文件夹中的 cmd 文件用到的 % 开头的指令）都是像素小人类指令。

### 向地图中添加 NPC
如前所述，m2d 文件夹中的 cmd 文件都有一个与之重名的 tmap 文件相对应。tmap 文件定义了地图的地形，cmd 文件则定义了其中 NPC 的位置、姿势以及调查它时会触发的事件 id。

这方面的研究还很欠缺，对于单个 NPC，下面是一个不太好理解的模板：
```
IF '...' { // 满足一定条件时出现的 NPC，比如根据昼夜或 PVV
    /* ___ NPC名称 ___ */
    // %CLEAR // 有些 NPC 会在开头用这个指令，不知道是要清除什么
    %SIZE x y // 一般为 12 68
    %PXL sub_x // x 为角色标识符
    %POSE pose // 姿势，详见 MoveScript 的 P[pose] 语法
    %PT Ev_xxx // 锚定位置，比如车站的阿尔玛就是锚定在长椅上
    %SP_SHIFT dx dy // 相对锚定位置的偏移量，比如阿尔玛应该靠左给诺艾儿留出空间
    %AIM L/R // 朝向
    %MOVE xxx // 移动方式，比如阿尔玛和普莉姆拉坐着时会 SEE_AROUND（东张西望）
    // 城镇的某些 NPC 则会 WALKAROUND_LR（徘徊）或 WALKAROUND_MAP（闲逛）
    // 有些 NPC 在这里会用一个没有参数的 %PHY 指令，表示是否受碰撞和重力影响
    talk = id // 重要！调查时触发的事件 id，注意等号两侧的空格不能省略
    // 对于 NPC 用 talk = id，对于调查点用 check = id，会提示「查看」而不是「对话」
    // 如果要做靠近就自动触发的事件，请用 stand = id
    %CHECK_DESC key // 靠近时的操作提示词条，比如「交易」，一般以`EV_access_`开头
    %TALK_TARGET_TTT 0/1 // 未靠近时头顶是否显示三点气泡，显示说明可对话
    %LIGHT aa:#rrggbb // 十六进制的光效颜色，冒号左边是不透明度，右边是红绿蓝
}
```
城镇中需要量产一些走路很快还不能对话的 NPC，这时候往往直接用`%MOBG xxx pose`指令。  
为了让这些 NPC 在每次诺艾儿切换地图时有随机出生点，常常用`%POS_RANDW`指令（有的带参数）。  
像素小人在原地站立时可能有呼吸动画，这可以通过`%PXL_FRAME n`和`%PXL_TS n`来控制起始帧和频率，频率为 0 时会定格。  
像素小人可能需要被地图中的一些景物遮挡，为了确定绘制顺序会使用`%DOD order`指令，order 的取值范围如下：
```
_NO_USE, MASK_B, MASK_G, MASK_T, N_BACK0, N_BACK1, N_BACK_EF0, N_BACK_EF1, BUF_0, BUF_1, BUF_2, PR0, PR1, PR2, N_TOP0, N_TOP1, N_TOP2, N_TOP_EF0, N_TOP_EF1, CM0, CM1, CM2, _ALL
```
除此之外还经常看到 %DEFINE_ON_POINT 指令（有的带着和 %PT 一样的参数），不知道是干什么的。
> 试试看吧：请打开 m2d 文件夹下的 house_noelroom.cmd 文件，将最下面的`%POSE ixiadoll`改成`%POSE stand`并在下面加一行`talk = 105/health_ixia_portal`。然后在打败森之领主后从长椅回到魔女杂货店，看看卧室里多了什么并对其调查两次。

### 像素小人移动（MoveScript）
这部分内容参考了 b站 [聪羊羊火白云](https://www.bilibili.com/video/BV1CQ4y1W7n3/) 的一篇写于 0.23 的旧文档。
> #MS 和 #MS_ 指令中 y 轴正方向是<b>朝下的</b>，且它们跟 GREETING 一样都是异步的，其后往往要用 WAIT_MOVE 指令等待移动完成。

使用`#MS_ npc 'route'`可以让 npc 的像素小人按照 route 的序列移动，如果事先用`#<npc>`声明了默认的像素小人，则移动指令可进一步简写为`#MS 'route'`。
> 在事件 s04_6a（星空奇谭，诺艾儿和普莉姆拉老师谈梦想）中这种简写可以操纵镜头移动，就是因为事先用`#<xxx>`声明了一个隐形且不受重力影响的 NPC，然后使用了下面的`##`语法。

npc 的取值范围与 HKDS 指令的`#<npc>`参数一致，比如：  
alma, farmer, ixia, ixiacane, laevi, mepha, Nightingale, ostrea, owl, primula, tilde, walross, sihan, %  
其中 owl 为美术馆馆长，sihan 为道场二掌门，% 为诺艾儿。
> 使用`#VANISH npc`指令可以令某个 NPC 的像素小人消失，不带参数则会让正在对话的 NPC 消失，为了避免突兀一般应在黑屏时或 NPC 走出视野后进行。

route 的写法非常复杂，这个序列可以由多个项之间用空格隔开（必须用一对单引号包裹住）并按顺序执行。具体而言有以下这些可用的项：
1. `##`或`#~`: 使视角跟随此 NPC 或取消跟随（回到诺艾儿），可以紧接`#;`项表示立即完成。  
    初学者建议从「山地守军驻地」进入「贝尔米特操场」时用正在练习纯白之箭的阿尔玛测试。
2. `>+[dx,dy:t]`: 在 t 帧内向右移动 dx 同时向下移动 dy。  
    带有 %PHY 指令的 NPC 在用此法移动时会受到重力作用，因此除了坐着法杖的伊夏以外其他人一般 dy 都填 0。  
    有时需要向两个相互垂直的方向同时开始移动不同的时长，这时可以将序列中的两项之间加入一项`*`（星号两侧各一个空格）表示星号两侧的项同时开始执行（左边的项被异步化）。
3. `>>[pos dx,dy:t]`: 在 t 帧内移动到相对 pos 右侧 dx、上方 dy 的位置。  
    这里的 pos 可以写之前添加 NPC 时用到的`%PT Ev_xxx`中的锚点 Ev_xxx，也可以写另一个像素小人`#<npc>`，和 >+ 的最大区别是这个指定的是目标点而不是位移量，这在起点不确定时很有用。
4. `@dir`: 像素小人转向，其中 dir 可以为 L, R 或 `#[npc]`（注意这个要用方括号，它表示转身面对另一个 npc，面对诺艾儿当然就是`#[%]`了）。  
    另外坐着的阿尔玛有五个方向表示转头幅度，分别是 L, LT, T（埋头）, RT, R。
5. `snd[id]`: 播放某个 id 的声效，相当于`SND id`指令，此时忽略这是谁的像素小人（但可能会影响双声道的偏移？）。
6. `wN`: 等待 N 帧再执行序列中的下一项，当然整个 #MS_ 指令依然是异步的。
7. `P[pose]`: 切换到 pose 姿势，这是 MoveScript 系统最复杂的部分，没有之一。

pose 的取值范围和添加 NPC 时用到的`%POSE pose`一致，可以通过以下三种方法获取。
> 方法一需要安装 Python3，方法二和方法三则需要安装 Java 21。

第一种是直接读取已被 AssetStudio 解包出的 pxls 文件，将所有 pose 列出。这种做法简单快捷，缺点是拿到 pose 名称后只能从字面上猜测效果或在自定义事件中测试。  
这可以用下面的 Python 程序实现：
``` py
import struct
import re
import sys # 本模块用于接收命令行参数，假设本程序文件名为 pose.py
def is_valid_bytes(b):
    pattern = b'^\w+$'
    return bool(re.match(pattern, b))
def search_hex_strings(file_path):
    with open(file_path, 'rb') as file:
        data = file.read()
    matches = []
    i = 1
    while i < len(data) - 8:
        if data[i-1:i+3] == b'\x02\x00\x00\x00':
            count = struct.unpack('B', data[i+3:i+4])[0]
            if is_valid_bytes(data[i+4:i+4+count]):
                matches.append(data[i+4:i+4+count].decode('utf-8'))
            i += 4 + count
        else:
            i += 1
    return matches
file_path = sys.argv[1] # 在终端输入 python pose.py xxx.pxls 运行
result = search_hex_strings(file_path)
print(file_path) # 打印 pxls 文件名，方便批处理
print(result) # 打印该文件含有的所有 pose 名称
```

第二种是使用 SNS 同人社的 AicToolBox 工具将 png 和 pxls 文件合成为 pxl 文件，再用 PixelLiner 打开，从而获得和哈酱一样的上帝编辑视角。

第三种是使用 SNS 同人社的 PixelPreviewer 工具读取 pxl（或 pxls+png）进行预览，如果读取的是 pxl 则会现场生成一个 test.png 文件。  
这种做法也非常方便，它既会输出一个 test.txt 文件列出该 pxl 下的所有 pose 名称（还有一个更啰嗦的 test.json 文件），又可以在预览时复制单个 pose 名称供使用（但是同一个 pose 可能有不同的 sequence），强烈推荐。  
但是，有些被 AssetStudio 解包出的 png 文件名中 texture_ 后的数字不一定是 0，所对应的 pxls 文件被 PixelPreviewer 读取时也会不止一次弹窗要求选择 png 文件，此时每次都选择名称含有 texture_0 的文件即可，SNS 同人社为此不便表示歉意。

诺艾儿的姿势是最多的（大约三百个），下面是其他角色的所有可用姿势：
1. 爱丽丝：RODRODRODROD, guard, magic, Inject, raw1, Damage, Kiss, BindDamage, Stride, DownDamage, XXXXXraw, crouch, lie, row_lie, lie_for_output, sand, fall, run, stand
2. 酒保：bar_stand, stand_golem, _eye
3. 咖啡师：fire, stand
4. 提尔德：ROD, camp, mop, stand
5. 小木偶：damage, stand, _eye
6. 伊夏：shoe, ev_on_bed_1, ev_on_bed_0, ixiadoll, nusi_wait, torture_nusi_atk, torned_cloth, cane_in_ground, magic_t, magic_prepare_t, weak_magic, weak, weakdown, down_b, hitwall, dmg_hktb_b, torture_worm_1, torture_worm, downdamage, down, dmg_hktb2, dmg_hktb, dmg_s_2, dmg_s, magic_prepare, chant, appeal, stand, fly2stand, fly, stand2fly, walk, torture_worm_0
7. 阿尔玛：_ground_targetter, stand_sample, bench, wakeup2stand, dmg_hktb2, dmg_hktb, magic, chant2magic, chant, walk, stand_nocane, stand
8. 无名 NPC: walk, stand_sample, mobo2_stand, mobo1_walk, mobo1_stand, mepha_stand, satoh_stand, oneesan_stand, msgk_stand, mobko_stand, bba_stand, soldier_stand, eihi_stand, mgn_stand, srng_stand, stand
9. 不可对话的城镇巡逻量产 NPC: _pat_mouse, _pat_other, _pat_arm, _pat_eye, _pat_foot, _pat_cloth, general_little, general_fat, general, PLTPLT
10. 普莉姆拉：cane_on_wall, chair, search_behind, bag_search, reading, shot, chant, give, stand_cane, walk_book, stand_book, bench2stand, stand2bench, walk_cane, walk_nobag, walk, stand_nobag, stand
11. 奥斯托利亚：reference, confuse, stand
12. 南丁格尔：greeting, harmonic_2, harmonic, open_store, stand
13. 丽薇歌塔：man_shadow, invisible, appear_from_dark, room_waiting, walk, stand, sitdown, sample
14. 瓦罗斯：bomb_offline_1, bomb_offline_0, bomb_2, bomb, pickel_mask, pickel, stand_mask, stand

可以在有普莉姆拉的任何地图（如医务室）尝试下面的例子：
```
LABEL loop
SELECT 18 _result
空手站立 stand_nobag
持包站立 stand
持杖站立 stand_cane
持书站立 stand_book
坐下翻书 stand2bench
坐姿起身 bench2stand
空手行走 walk_nobag
持包行走 walk
持杖行走 walk_cane
持书行走 walk_book
持续阅读 reading
变成法杖 cane_on_wall
背身坐着 chair
背身站立 search_behind
探囊取物 bag_search
咏唱魔法 chant
释放魔法 shot
抬手仰望 give
#MS_ primula 'P['$_result']'
GOTO loop
```
上述例子是死循环，如果需要结束事件请在 F7 调试界面点击叉号按钮（第四个圆）或事先注释掉最后的 GOTO loop 指令，你也可以仿照本例去查看其他 NPC 的姿势。

### 诺艾儿的所有姿势
这些姿势位于以下不止一个 pxls 文件内，预览起来较为麻烦，但大体上仍然能找到规律：
1. noel: 基本动作，这个是最多的
2. noel_t: 在上面的基础上处于爆衣状态
3. noel_babydall: 吊带睡裙（单词拼写错误，应为 babydoll）
4. noel_bassrobe: 浴袍（游戏中未使用）
5. noel_dojo: 道场训练服
6. noel_magic: 魔法动作
7. noel_magic_torned: 在上面的基础上处于爆衣状态
8. noel_r18: 各种以 torture_ 开头的被魔族蹂躏的动作
9. noel_r18_torned: 在上面的基础上处于爆衣状态

`BearHug, Inject, Naedokoing_2, __stand, _burying_source, absorb_release, absorb_stabbed, absorb_stabbed_2, absorb_stabbed_3, absorb_stabbed_b, absorbed, absorbed2absorbed_crouch, absorbed_basic, absorbed_crouch, absorbed_crouch2absorbed_down, absorbed_crouch2absorbed_downb, absorbed_down, absorbed_downb, aerialkick0, aerialkick1, aerialkick2, attack1, attack2, attack_air1, attack_air2, attack_air3, attack_dash, attack_jumpslash1, attack_jumpslash2, attack_misogi1, attack_misogi2, attack_misogi3, backstep, bench, bench2stand, bench_must0, bench_must0l, bench_must1, bench_must1l, bench_must2, bench_must3, bench_must_orgasm, bench_must_orgasm_2, bench_pajama, bench_reading, bench_seeback, bench_seefront, bench_shamed, bench_trauma, beware, beware_2, beware_3, bind, bindkiss, buried, buried_death, burst2stand, burst_0, burst_1, ceiltrap, ceiltrap1, ceiltrap2, ceiltrap3, ceiltrap_fatal, chant, chant_finished, chant_ladder, chant_weak, chargepunch1, chargepunch2, chargepunch3, collect, confused, crawl, crawl2crouch, crawl_dmg_breathe, crawl_hardbreathe, crawl_turn, crawl_wet_weak, crouch, crouch2stand, crouch_dmg_breathe, crouch_hardbreathe, crouch_wind, crying, damage_m, damage_thunder, dmg_breathe, dmg_burned, dmg_burned_down, dmg_burned_run, dmg_crouch, dmg_crouch_b, dmg_down, dmg_down2, dmg_down2_sensitive, dmg_down_b_2, dmg_down_b_hitwall, dmg_down_b_hitwall_2, dmg_down_hitwall, dmg_down_t, dmg_harapan, dmg_hktb, dmg_hktb_b, dmg_poison, dmg_press, dmg_press_t, dmg_rotating, dmg_s, dmg_s_b, dmg_t, dmg_t_2, dmg_t_kirimomi, dmg_tongue_in, down, down2confused, down_b, down_sensitive, down_u, downdamage, downdamage_t, ev_run_stop, evade, evadeattack1, event_sink, fall, fall2, fall_hardbreathe, fall_hardbreathe2, foxinject_2, get_item, get_magic, get_magic2, get_magic3, get_magic4, get_magic5, guard, guard_bush, guard_bush2stand, guard_crouch, guard_ladder, guard_slash, guard_slash2stand, guard_slash_2, guard_wind, iaigiri, injectrided, interact, interact2stand, interact____, item_gosogoso, jump, ladder, ladder_b2t, ladder_t2b, ladder_wait, ladder_wait_skirt, ladder_wind, laying_egg, magic_bomb_hold, magic_bomb_init, magic_fireball_init, magic_hold, magic_hold_ladder, magic_init, marunomi, marunomi4, must0, must0l, must1, must2, must_orgasm, must_orgasm_2, noeldrill, orgasm_down, orgasm_down_2, orgasm_down_2_sensitive, orgasm_down_laying_egg, orgasm_from_stand, osigama, osigama_2, osigama_3, run, run_hardbreathe, run_stop, run_wet_weak, run_wind, sink, sleep, sleep_init, sleepdown, sliding, spike_trapped, spike_trapped_crouch, spike_trapped_down, stand, stand2absorb_release, stand2bench, stand2confused, stand2crouch, stand2crouch_hardbreathe, stand2fainted, stand2laying_egg, stand2orgasm, stand2sink, stand2sleep, stand2water_choked_release, stand_awake, stand_ev, stand_ev_sleeping, stand_hardbreathe, stand_norod2laying_egg, stand_slow, stand_wait_normal_0, stand_wait_normal_1, stand_wait_normal_2, stand_weak, stand_wet_weak, stand_wind, stargaze, stride, stride_front, stun2down, stun2down_2, stunned, throw, throw_2, throw_m, throw_m_2, thunder_down, torture_burying, torture_doublechew, torture_frog_vore, torture_frog_vore2, torture_gorem_inject, torture_gorem_inject_2, torture_gorem_inject_3, torture_inject_behind, torture_inject_behind_2, torture_inject_behind_3, torture_inject_behind_4, torture_inject_prepare, torture_leg_catch, torture_leg_catch_base, torture_mechgolem0, torture_mechgolem0r, torture_mechgolem1, torture_mechgolem2, torture_mechgolem2d, torture_mechgolem2d2, torture_mush_0, torture_mush_1, torture_mush_1_sensitive, torture_mush_2, torture_mush_2_sensitive, torture_mush_3, torture_mush_3_sensitive, torture_pig_0, torture_pig_1, torture_pinset, torture_romero_0, torture_romero_1, torture_romero_2, torture_slime_0, torture_slime_1, torture_slime_2, torture_smt, torture_snake_0, torture_snake_0_sensitive, torture_snake_2, torture_tentacle_0, torture_tentacle_0_sensitive, torture_tentacle_1, torture_tentacle_1_sensitive, torture_tentacle_2, torture_tentacle_2_sensitive, torture_topchew, torture_underchew, ukemi, ukemi_shotgun, wakeup, wakeup_b, wakeup_sensitive, walk, walk_dmg_breathe, walk_hardbreathe, walk_weak, walk_wet_weak, walk_wind, water_choked, water_choked2, water_choked2_down, water_choked_down, water_choked_release, water_choked_release2`

本文档最后更新于 2024 年 7 月 27 日。