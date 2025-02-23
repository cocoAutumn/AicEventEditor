# 0.26c 到 0.27h 的技术更新
<i>Alice in Cradle</i> 0.26 于 2024-09-15 18:00 发布，并于一周内更新至稳定版本 0.26c; 0.27 于 2025-02-01 19:00 发布，并于同月 20 日更新至可能还未稳定的版本 0.27h.

由于《[二创指南](https://aliceincradle.org/hashcode.html)》的行文结构不佳，笔者拟在 0.28 发布前对其重构，因此本文将对 0.26c 与 0.27h 的 StreamingAssets 文件夹内所有<b>文本文件</b>的差异作注解，以备在重构上述指南时有所参考。
> 截至 0.27h 发布时，指南基于的版本为 0.25f，其与 0.26c 的差异已像本文一样整理出注解，将一并用作参考。

首先，`_debug.txt`的 reloadmtr 值被从 1 改成了 0，也就是默认关闭了翻译文本热重载的功能；同时 announce, timestamp, albumunlock 在文件中的位置被上移了，但 albumunlock 的注释错误仍未被改正；最后还姗姗来迟地加了一句从 0.24 起可以在衣柜处切换为旧版战斗立绘。

`_vibration.csv`新增了武器库潜行被发现时的手柄震动参数。

此外 mobg.bytes 这个二进制文件也有改动。

## localization 文件夹的改动（以简体中文为例）
修改了`__AdditionalFonts`文件夹的`letterspace_ResourceHanRoundedCN-Medium.txt`以使得部分标点符号的宽度正确，但很遗憾漏掉了『空心直角引号』，读者可自行加上。
> StreamingAssets 文件夹下另有`letterspace_logotypegothic.txt`文件新增了【实心括号】的宽度修正。

`zh-cn_tx_whole.txt`的内容依然被误填写为和`zh-cn_tx_ev_whole.txt`一致，读者可自行将其内容修改为与日语文件夹`_`的`__tx_whole.txt`一致。

姓名间隔符号·统一替换成了日文的・，尽管这一做法不值得借鉴。

新增了`ev_city4.txt`，内容为冒险者公会及其炼金锅。从公会接取的任务在进入编织者之森战斗后必须在一趟行程完成，否则会扣除积分。顺利完成委托任务后将会获得专属宝箱（最多暂存5个，任务失败时会全部打开）或效果转轮。
> （重要）新增了形如`MSG mb_01 X[$_cur_gq_level_v]`的哈语言指令（详见后文），可以将临时变量代入对话并替换掉 &1 &2 等占位符。

`ev_fs_nightingale.txt`修复了南丁格尔的 fatal 事件中的字符顺序错误（商小姐人）。
> 话说文案作者 T_Miyabi 是不知道这位商人小姐叫什么吗……

`ev_laevi.txt`修复了错别字。  
`ev_museum.txt`新增了美术馆中蒂格蕾娜·索菈的鉴赏内容，其中提到了法杖其实是兽人发明的。  
`ev_s01.txt`明确了伊夏是住校生，`s12_15e.cmd`中的两条相关指令也被取消注释。  
`ev_s03.txt`在普莉姆拉的某句话中删除了一个字。  
`ev_s04.txt`修改了普莉姆拉的某句话。  
`ev_s10.txt`在诺艾儿的某句话中增加了一个字，同时将姐姐的某句关于伊夏的话作了与上述住校生设定相配套的修正，但仍有“千里迢迢”这个不合理的表述。  
`ev_s13.txt`修改了习得圣光爆发时的部分台词，在与梅法的对话中增加了一个句号。  

新增了`ev_s106.txt`，内容包括：
1. 食堂门口与阿尔玛的对话，其中的翡翠玉指的是卷心菜，可惜不能和她下棋。
2. 武器库和社团活动室相关，比如机械工学科的四年级学姐蒂格蕾娜·索菈。

`ev_tilde.txt`为诺艾儿的某句台词增加了动态效果，同时新增了“让哥哥帮忙开宝箱”的内容。

`XX_tx_config.txt`（XX为语言代码，下同）新增了关于冻结 Lv3 和石化 Lv3 的的设置项，此外还有可能尚未实装的法杖拍照功能。

`XX_tx_enemy.txt`去掉了某个主谓之间的助词，并增加了所有魔族的介绍，以及下列特殊属性：攻击强化、防御强化、魔力稳态、野火、冰霜、雷电、粘液、媚毒、隐形。
> 木偶造物的名称为：（三角）木马、杂波干扰器、导弹发射架、光束发射台。

`XX_tx_ev_whole.txt`新增了一些对话选择项，但其中的“镜子”尚未实装。

新增了`XX_tx_guild.txt`，内容为冒险者公会，任务共有以下几种（但目前似乎只有采集和歼灭）：
1. 采集：必须要新鲜的。（但如果扔在地上再接受任务呢？）
2. 收购：可以先收集再直接交付。
3. 歼灭：在指定战斗点触发遭遇战，可能有三种新魔族。
4. 烹饪：做出指定的饭菜？
5. 营救：在指定区域找到失踪人员并救出，失败惩罚很重。
6. 试装：装备铁匠铺（0.28）的指定法杖完成若干场战斗。
7. 配送：将特定物品押运到指定位置，期间禁止长椅传送，要争取无伤。

`XX_tx_item.txt`新增了会员证、存储卡、干粮、四种魔族掉落物等。

`XX_tx_map_name.txt`新增了若干地图名称，包括公会炼金室、铁匠铺、学校部分场所。

`XX_tx_mgm_ttr.txt`实装了在线对战，不过不能随机匹配。

`XX_tx_scenario.txt`修复了回忆相册中的表述错误，并新增了武器库（“惩罚”类别）和社团活动室的内容。

`XX_tx_skill.txt`修改了魔法霰弹、滑铲和护盾的介绍，新增了技能“会心重击”。

新增了`XX_tx_smnc.txt`，内容为全息投影模拟战斗配置。游戏的存档文件夹下也会有后缀名为 smnc 的配置文件。

新增了`XX_tx_tips.txt`，内容为切换地图时右下角的提示，然而作为单机游戏时长太短了。
> 提示中涵盖了手雷携带的软上限、护盾冲击、取卵器和酒保等重要信息。

`XX_tx2_ep.txt`新增了三种魔族等的敏感文本，但对于“黏”字的使用依然没有完全统一。
> 所有“液”字前都用“粘”，但仍存在其他一些“粘”没有换成“黏”。

`XX_tx.txt`修改了战斗点的悬停介绍，然而简体中文在这里依然保留了“的的”，一定是故意的吧。  
`XX_tx2.txt`修改了退出游戏的部分文本。  
`XX_tx3.txt`修改了冻结状态的介绍。  
`XX_tx4.txt`新增了粘液和石化等的内容。

此外，对于振假名（ruby，ふりがな）的一部分翻译，0.27 采用了新的方案。具体而言，魔法读作 Spell，注册终端读作 Installer，蒂格蕾娜·索菈的部分台词中也有以英文标注的部分。
> 对于原内容是片假名（カタカナ）的情形，翻译成英文而不是中文确实是更好的做法呢。

## m2d 文件夹中 cmd 文件的改动
> 该文件夹下的每个 cmd 文件应该都存在同名的 tmap 文件（作为二进制文件，本文章不作说明），可在 F7 控制台中输入`map xxx`进入`xxx.tmap`所存储的地图。

`city_center.cmd`注释掉了一段关于洗手间的代码。

`city_in_bar.cmd`某个 IF 语句新增了一项与蒂格蕾娜·索菈有关的条件。

`city_in_guild.cmd`实装了冒险者公会的功能并新增了几个 NPC.

`city_market_left.cmd`新增了一段关于洗手间的代码，可能和上面被注释掉的那段有关。

`city_scl_center.cmd`新增了食堂门口徘徊的三个 NPC.

`forest_hirobau.cmd`和`forest_treecrack.cmd`对于序章爱丽丝出没的引用修改了文件路径，详见后文关于`___a`文件夹的说明。

`forest_satoentrance.cmd`修改了两个整数。

`house_atelier.cmd`开头新增了一段关于炼金锅的代码，但为什么是新增呢，难道和 tmap 文件有关？

`school_in_hall_left.cmd`新增了食堂门口的阿尔玛和一些 NPC.

`school_in_hall_right.cmd`新增了一个从右向左走出地图消失的 NPC.

新增了`_school_in_cafeteria_plants.cmd`即园艺部，但无法正常进入或离开。

新增了`city_in_forge.cmd`即铁匠铺，但无法正常进入，可以正常离开。

新增了`city_in_guild_t.cmd`即公会炼金室。

新增了`school_in_armory_mtgroom.cmd`即武器库会议室，其中有一个无法拿走的注册终端。

新增了`school_in_armory.cmd`即武器库，有潜行小游戏，被发现三次会有很可怕的惩罚。

新增了`school_in_cafeteria.cmd`即食堂，只有在<b>去医务室探望伊夏后、上课前</b>才能进入。

新增了`school_garage_pre.cmd, school_in_garage.cmd, school_garage_right.cmd`，分别是社团活动室外（有两只稻草史莱姆）、室内（模拟战斗用的废弃库房）、右侧的破旧电梯（通向武器库会议室）。

新增了`school_in_hall_xxx_b1.cmd`和`school_b1_out.cmd`，其中 xxx 为 left, center, right 之一，分别为三栋教学楼的负一层以及会遇到魔族幼犬的室外。

## evt 文件夹的改动
> 该文件夹下全部为 cmd 文件，其内容便是称为“哈语言”的代码，与前述的 m2d 文件夹下的 cmd 文件有所不同。

总的来说，对于被其他事件以`CHANGE_EVENT, CHANGE_EVENT2`或`@`指令调用的子过程事件，游戏作者对于很多形参在文件开头补充了命名，比起直接在后文中用 $1 $2 等要进步不少。对于只进行了这种修改的文件，下文中不再列出。

新增了`___a`文件夹，序章中爱丽丝出没的两个事件文件被移动到了其内，此外学校中出没魔族幼犬的事件文件也在其内，推测将在后续版本中用于存放爱丽丝的所有事件。

`___city\_omorashi_scl.cmd`（evt 文件夹下的相对路径，下同）新增了对于社团活动室内发生的失禁不触发围观的逻辑。

`___city\_omorashi.cmd`新增了豁免参数`_NOUSE`的逻辑，以及一点其他的代码。

`___city\_warp_zx.cmd`新增了城镇中新地图的传送逻辑，尤其是废弃库房内部以及食堂的处理。

`___city\_warp.cmd`对于城镇中的传送取消了服装脏污的限制，只要没破损就行。

新增了`___city\106_cafeteria_stop.cmd`即进入食堂失败的事件。

新增了`___city\106_scl_armory.cmd`即从正门进入武器库失败的事件。

`___city\bar_4ascend_table.cmd`新增了在酒吧里调查棋盘的下棋逻辑，现在可以和任何已对弈过的 AI 棋手再次对弈，也可以本地双人对战或在线输入房间号约战。

新增了`___city\scl_koubai.cmd`，内容为西教学楼地下层的小卖部。

（重要）新增了成就值系统，使用形如`ACHIVE_SET city_milk_total +=$_score`的指令更新成就值，可在 F7 控制台中查看。

新增了`___city_guild`文件夹，包括以下文件：
1. `__FLUSH_SAFE_AREA.cmd`：在大区之间移动时更新委托任务状态。
2. `_portal_alchemy_guild.cmd`：炼金锅。
3. `_portal.cmd`：每次与前台对话。
4. `_progress.cmd`：任务成功或失败时更新积分并触发升降级。
5. `_shop.cmd`：贩卖干粮的商店。
6. `descryption.cmd`：前台对于系统流程的说明。
7. `t_rankup.cmd`：升级事件，包括一个过充插槽、一个新技能（或饭盒）、两个强化插槽。
8. `t00.cmd`：初次与前台对话，注册为新成员。

美术馆新增了社团活动室的三张照片，此外单组照片的报酬从 700 下调到了 500.
> 话说之前从 0.25 到 0.26 就是从 1000 下调到了 700 吧，哈酱真抠门。

`___House`文件夹有以下改动：
1. 回忆相册新增了“前沿工学交流室”和“潜入武器库失败”。
2. 新增了在卫生间将卵排出的动画。
3. 卫生间新增了是否使用取卵器的选项，排泄的特效也根据角色状态作了细分。
4. 修复了在卫生间门外等里面的人出来时`_evi`变量没有正常更新的 BUG.
   > 其实就是等号右侧的`_evi`左边忘了加 $ 变成数值。

`___Other`文件夹新增了两个与模拟战斗有关的文件，但似乎没有被其他文本文件引用。

`___TildeNpc`文件夹新增了让哥哥帮忙开宝箱的内容。

`105\main_classroom_after.cmd`修改了下课后阿尔玛的行为，由直接消失变成了移到食堂门口。

`__INITG.cmd`新增了若干 GFB 开关和 GFC 变量，与冒险者公会或蒂格蕾娜·索菈等有关。

`__INITNEWGAME.cmd`新增了读取旧版存档时的一些处理。

新增了`__M2D_abort_summoner.cmd`用于在战斗中放弃。

`__M2D_DEFEAT_SUMMONER.cmd`新增了在社团活动室战败以及其他一些的处理。

`__M2D_FINISH_SUMMONER.cmd`新增了与提尔德开宝箱相关的一个变量处理。

`__M2D_FLUSHED_AREA.cmd`新增了形如`GQ_FLUSH $_PRE_WM_KEY $_DEP_WM_KEY`的指令，与冒险者公会有关，详情不明。

`__M2D_FLUSHED_PUPPETNPC.cmd`新增了形如`GFC_SET GLD0 &=14`的指令。

新增了`__M2D_GAMEOVER_WAKEUP_WAIT.cmd`，本质是将`s00_5c`事件中的某段代码封装成了宏，从而在另一事件中复用。

`__M2D_GAMEOVER.cmd`新增了在社团活动室战败等的处理。

`s12_megane.cmd`修改了车站的蒂格蕾娜·索菈的对话语音为`talk_soala`.
> 据说旧版本的 talk.acb 文件拆解后有`talk_tigrina`，也许是改名了。

`s12_15e.cmd`有两条指令被取消注释，明确了伊夏是住校生。

`s00_5c.cmd`的某段代码改成了一条宏指令`@__M2D_GAMEOVER_WAKEUP_WAIT`.

`s00_0a.cmd`（新游戏开场）的淡入淡出效果作了微调。

`_DEBUG0*.cmd`（公共调试文件）有部分修改，其中`_DEBUG07.cmd`被改成了以下内容：
```
<LOAD_DWARF>
MSG n_00
```
而对应的 txt 文件中则有
```
*_DEBUG07 n_00
<dwarf>ありす
ありす
```
推测为用于测试新的对话框皮肤`<dwarf>`的效果，同时也意味着角色爱丽丝与矮人有关。
> 0.27 可以解包出名称中带有`character_dwarf`的图片，内容是不同于[摇篮文](https://aicwiki.com/assets/zh_cn/彩蛋/aliceincradle文字解译_20241209b.png)的另一种文字，姑且称之为矮人文好了。

`_bench_*.cmd`（长椅相关）有部分修改，主要是实装了自我包扎和缝补衣服的图片。

新增了`___Tigrina`文件夹，包括但不限于一堆`t*.cmd`（和蒂格蕾娜·索菈的对话）以及`106sneak_*.cmd`（潜入武器库）。

## 哈语言新增指令的说明（远非详解）
> 在这部分，大批量列出的全大写的内容也许并不都是指令，有待读者自行验证。

在潜入武器库的事件中，新增了`SNEAKINGMG`指令，有以下用法：
1. `SNEAKINGMG INIT_PR_RUNNING`：初始化诺艾儿在此地图的行走动作（踮起脚尖猫着腰）。
2. `SNEAKINGMG SWITCH_NPCPOS sneaker_1 Sneaker_btm_blocker`：在拾获存储卡后，将一名士兵的位置锁定在会议室门口。
3. `SNEAKINGMG STOPNPC`：被发现或成功逃离时，所有士兵停下脚步。
4. `SNEAKINGMG CLOSE`：被发现时关闭潜行小游戏。

全息投影模拟战斗用到了新指令`SMNCREATOR`，有以下用法：
1. `SMNCREATOR PREPARE SmnC_garage ___Tigrina/___after_summoner`：开始自定义模拟战斗。
2. `SMNCREATOR TARGET_SCRIPT school_in_garage*`：开始系统预设的几场模拟战斗之一。
3. `SMNCREATOR POP_DANGER_LEVEL`：战后更新危险度？但是有必要吗。

小游戏（潜入武器库除外）相关的指令目前一共有这些：
- MG_DOJO：道场猜拳，子指令如下（作为第一参数填写，下同）。  
  `CREATE, BACK_FROM_LOSE_STATE, CLOSE, CLOSEG, CLOSE_CUTIN, CURE_CRACK, DEBUG_SET, DIGEST_PR_CRACK, G_PROGRESS, HIDE_RPC, INITG, LEARN, MENU, RESHOW_FIG, RESHOW_RPC, TUTO_SHOW_ENEMY_RPC, WAIT_FOR_GAME_BGM`
- MGFARM：牧场挤奶，子指令如下。  
  `CROP, DEFINE_GRAB_COUNT, DEFINE_RESULT, INITSUCK, INIT_COUNTDOWN, PREPARE_TALK2COW, TALK2COW, QUITSUCK, SUCKER_GRAWL, TIMEOVER_AFTER, TIMER_ACTIVE, UPDATE_RESULT`
- MGM_4ASCEND：四子棋，子指令有`INIT, PLAY, DEFINE_SCORE_EXISTS`.
- MGM_EGGRMV：取卵器，子指令有`INIT, DEACTIVATE, DEACTIVATE_EFFECT`.
- MGM_UI_ACTIVATE
- MGM_UI_ACTIVATE_AFT
- MGM_UI_DEACTIVATE

战斗点相关的指令有所增多，现有：
- `ENEMY_ADD_TICKET`（这个是操作魔族的）
- `SUMMONER_TYPE`
- `SUMMONER_RECHECK_HR_BUFFER`
- `SUMMONER_ACTIVATE`
- `SUMMONER_ACTIVATE_EFFECT`
- `SUMMONER_DEFEAT_NIGHT_PROGRESS`

部分事件新增了指令`PREPARE_SV_TEXTURE cuts_xxx`来预加载材质，详情不明。

PTCThread.cs 可能新增了 SKIP 指令，不过 cmd 文件中没有找到证据。

M2DEventListener.cs 的指令可能有所增多，现有：  
`ADD_MAPFLUSH_FLAG, DEFEAT_EVENT, DEFEAT_EVENT2, DEF_CURMAP, DEF_MOBTYPE, HIDDEN_WHOLE_SCREEN, INIT_MAP_MATERIAL, ITEM_ACTIVATE, ITEM_DEACTIVATE, QU_HANDSHAKE, QU_SINH, QU_SINV, QU_VIB, SEND_EVENT_CORRUPTION, START_DGN_HALF_BGM, STOP_DGN_HALF_BGM, VALOTIZE`

M2EventCommand.cs 的指令可能有所增多，现有：  
`CHIP_ACTIVATE, CHIP_DEACTIVATE, DARK_ACTIVATE, DARK_DEACTIVATE, GREETING, LOAD_LAYER, LP_ACTIVATE, LP_DEACTIVATE, LP_ACTIVATE_TO_CHIP, LP_DEACTIVATE_TO_CHIP, PR_KEY_SIMULATE, PTCST`

BGM.cs 的音频指令可能有所增多，现有：  
`LOAD_SND_TIMING, BATTLE_TRANSITION_BGM, BGM_GOTO_BLOCK, BGM_OVERRIDE_KEY, HALF_BGM, LOAD_BGM, LOAD_SND_TIMING, REPLACE_BGM, SND, START_BGM, STOP_BGM`

NEL.cs 的指令一直很多，现有：  
`ALCHEMY, COOKING, COOKING_TUTORIAL, ALCHEMY_COFFEEMAKER, ALCHEMY_RECIPE_BOOK, ALCHEMY_RECIPE_BOOK2, ALCHEMY_TRM, ALCHEMY_TRM_TUTORIAL, ALCHEMY_WORKBENCH, FATAL, ITEMSTORE, ITEMSTORE_RELOAD_BASIC, LUNCHSTORE, LUNCHTIME, NUMCOUNTER, PVIB, UIALBUM, UIBOX_MONEY_ACTIVATE, UIBOX_MONEY_DEACTIVATE, UICOOKING, UI_GUILDQUEST, UI_GUILDQUEST_REFINE, UI_MGMTIMER_ACTIVATE, UI_MGMTIMER_ADDSCORE, UI_MGMTIMER_ADDSCORE_TX, UI_MGMTIMER_DEACTIVATE, ALCHEMY, ALCHEMY_COFFEEMAKER, ALCHEMY_TRM, ALCHEMY_TRM_TUTORIAL, ALCHEMY_WORKBENCH, COOKING, COOKING_TUTORIAL, PVV, UIALBUM, UICOOKING, UI_RESTROOM_MENU`

UIBase.cs 的指令一直很多，现有：  
`HIDE_LETTERBOX, HIDE_LETTERBOX_A, HIDE_LOGBOX, HIDE_STATUS, SHOW_LETTERBOX, SHOW_LETTERBOX_A, SHOW_LOGBOX, SHOW_STATUS, START_LETTERBOX, STOP_LETTERBOX, UIPICT_GOB_DEACTIVE, UIP_CUTIN_LAYEGG, UIP_EVENT_SETFADE, UIP_EVENT_TEMP_HIDE, UIP_FADE, UIP_PTCST, UIP_PTCST_REMOVE, UIP_PTC_VAR, UIP_PTC_VAR_S, UIP_REPOSIT, UIP_SETFADE, UIP_START_VALOTIZE, UIP_STOP_VALOTIZE, UIP_SYNC_CUTIN`
> 其中的`UIP_*`似乎是用来操作骨骼动画的，有待研究。

EV.cs 的指令一直很多，现有：  
`DEBUG, MSG, TL, MTL, CLEARMTL, DOMTL, CLEARTL, DOTL, ALLOW_EVENTHANDLE, ALLOW_EVENTHANDLE_KEY, ALLOW_MSGLOG, ALLOW_SKIP, DEFINE_NEXT_EV, DENY_EVENTHANDLE, DENY_EVENTHANDLE_KEY, DENY_MSGLOG, DENY_SKIP, EV_CLEAR_ALL_STACK, EV_STACK_HOLD, EV_STACK_STOP, LOG_RECORD, MSG_HIDE, MSG_HOLD, MSG_SKIP, MSG_SKIPHOLD, SELECT, SELECTARRAY, SELECTARRAY_CLEAR, SELECT_FOCUS, SELECT_FOCUS_RANDOM_TALK, SELECT_POS, SELECT_RESULT_TO_LOG, START_GDRAW, START_GHANDLE, START_GMAIN, START_LOG_RECORD_SELECTION, STOP_GDRAW, STOP_GHANDLE, STOP_GMAIN, STOP_LOG_RECORD_SELECTION, TUTO_CAP, TUTO_MSG, TUTO_POS, TUTO_REMOVE, TUTO_REMOVE_ALL, TUTO_REM_ACTIVE_FLAG, TUTO_TEMP_FRONT, WAIT, WAIT_BGM_LOAD, WAIT_BUTTON, WAIT_FN, WAIT_LOAD, WAIT_MOVE, CHANGE_EVENT, SELECT`

EvDrawerContainer.cs 的指令一直很多，现有：  
`PIC, PIC_SILHOUETTE, PIC_B, PIC_SWIN, PIC_SWIN_G, PIC_SWIN2, TUTO_CAP, PIC_MP, PIC, PIC_B, PIC_CLEAR_TERM_CACHE, PIC_FILL, PIC_FINE_ALL, PIC_FLASH, PIC_HIDE_ALL, PIC_MVA_WHOLE, PIC_RADIATION, PIC_RECT, PIC_REM, PIC_RIDE, PIC_SWAP, PIC_SILHOUETTE, PIC_SWIN, PIC_SWIN2, PIC_SWIN_G, PIC_SWIN_PASTE, PIC_SWIN_SHADOW, PIC_FADEIN, PIC_FI, PIC_FADEOUT, PIC_FO, PIC_FINE, PIC_FLIP, PIC_FX, PIC_FY, PIC_HIDE, PIC_MOVE, PIC_MV, PIC_MOVE2, PIC_MV2, PIC_MOVEA, PIC_MVA, PIC_MP, PIC_MP2, PIC_TEMP_REPLACE_TERM, PIC_TFADE`

CsvReaderA.cs 和 STB.cs 的条件分歧指令（包括字符串运算）可能没有增多，现有：  
`CONTAINS, ENDS, ENDSWITH, IS, ISIN, ISNOT, ISNOTIN, NOTCONTAINS, NOTENDS, NOTENDSWITH, NOTSTARTS, NOTSTARTSWITH, STARTS, STARTSWITH, ELSIFDEF, IFDEF, ELSIFLANG, IFLANG, ELSIFNDEF, IFNDEF, ELSIFSTR, IFSTR`

GF.cs 的开关和变量处理指令可能没有增多，现有：  
`DEFINE_GFB_NAME, DEFINE_GFC_NAME, GFB_PUT, GFB_SET, GFC_PUT, GFC_PUT_MX, GFC_SET, GFC_SET_MX, GFC_SEPARATOR, PVV, PVV_ABSOLUTE`

除此之外，还有一些以井号开头的指令：  
`#AUTO_BGM_REPLACE, #BGCOL, #CALL, #CALL2, #CHECK_DESC_KEY, #CLEARSND, #CMDRELOAD, #DECLINE_AREA_CAMERA, #LIGHT, #LIMIT_CAMERA, #MOVE, #MS, #MS_SOFT, #MS_, #MS_SOFT_, #NO_DECLINE_AREA_CAMERA, #NO_LIMIT_CAMERA, #PHY, #PTCST, #PTCST_REMOVE, #RELOADME, #REMOVE, #SNDINTV, #SND_LOAD, #TE, #VANISH`

以及一些以百分号开头但只用于 m2d 文件夹而从未用于 evt 文件夹的指令：  
`%CLONE, %ALIAS, %AIM, %CALCPOS, %HOLD, %MYPOS, %MYPOS_SHAKE, %QU_HANDSHAKE, %QU_HANDSHAKE2, %QU_SINH, %QU_SINH2, %QU_SINV, %QU_SINV2, %QU_VIB, %QU_VIB2, %SIZE, %SND, %SND2, %SND_ACT, %SND_ACT2, %SND_CONFUSE, %SND_CPOS, %SND_TPOS, %TARGETPOS, %TE_COLORBLINK, %TE_COLORBLINK_ADD, %TE_QU_SINH, %TE_QU_SINV, %TE_QU_VIB, %AGDT, %DRO, %DRO_GROUNDBREAK, %EF, %EFT, %TOP, %QU_HANDSHAKE_NEAR, %QU_SINH_NEAR, %QU_SINV_NEAR, %SND, %CLONE, %AIM, %AREA, %CHECK_DESC, %DOD, %LIGHT, %MOBG, %MOBG_ATLAS_WH, %MOBG_CLIP, %MOVE, %MS, %PHY, %POSE, %POS_RANDW, %PT, %PXL, %PXL_LOAD, %PXL_FRAME, %PXL_MTR_USE_MASK, %PXL_MTR_WITH_LIGHT, %PXL_TS, %SET_ENABLE, %SIZE, %SND_LOAD, %SP_SHIFT, %SP_SHIFT_DEFAULT, %EDITOR`

## F7 控制台命令的改动
目前可以输入到 F7 控制台顶部长条的命令有（未列出参数）：  
`AUTOSAVE, AUTO_SAVE, BENCH, BENCH_ENEMY_ORGASM, COFFEEMAKER, DANGER, FADER, FLUSH_MAP, FLUSH_MATERIAL, GATHER_ITEM, GETSKILL, GET_ALL_ITEM, HIDENOEL, MOBTYPE, NIGHTINGALE, NOELJUICE, PRPOS, PUPPETNPC, STOREFLUSH, TILDENPC, UIDAMAGE, WALKCOUNT, WEATHER, EVT, GFB_PUT, GFB_SET, GFC_PUT, GFC_PUT_MX, GFC_SET, GFC_SET_MX, PIC, PIC_B, PIC_R, VP, EXPORT_CAM_IMAGE, EXPORT_IMAGE, LOAD_SND, MAP, MAXFPS, PXL_PROGRESS, REMAKE_MAP, TXCHECK`

其中`EXPORT_CAM_IMAGE`显然是新增命令，可以带参数 MV 或不带。它的字面意思是导出照片，也许和前文中提到的法杖拍照功能有关，读者可以试试看。

## localization 语法的更新
> localization 语法的文档更新起来较为容易，将在随后发布新版，因此这部分内容不会写得很具体。另外，下列部分新增项未必是 0.27 才有的，请注意。

新增了键盘和手柄图标语法：
```
<fiximg mesh="KC_keyboard" tx_color alpha="0.25" margin="-10" behind="1" x="0" y="-16"/>
<fiximg mesh="KC_pad" tx_color alpha="0.25" margin="-10" behind="1" x="0" y="0" scale="2" />
```
新增了`<MT>`和`<MT> l=N`的控制序列，整数 N 的取值范围是 {-1,0,1,2,3}，效果有待研究。

新增了<s>删除线</s>的写法，和<i>斜体</i>的写法类似，目前只用于四子棋的在线对战规则介绍，其他场合未必有效。

奥斯托利亚出场时的某句台词里有`<joy>`（并非 0.27 更新所致），但正确写法应为`<m joy>`，读者可自行检查此处效果是否正确，如果不正确可自行改正。

新增了`<key_s 键名/>`的写法来显示一个当前不可用的按键图标（被斜线划去）。

新增了`<shape 形状名/>`的写法来显示一个几何图形，比如`<shape right_arrow/>`和`<shape check/>`.

新增了`<dwarf>`即矮人皮肤的对话框，不过正常游戏流程中无法看到。

除此之外，cmd 文件中还找到了形如`MSG_PREFIX so <tigrina>`的指令，也就是说`<tigrina>`和`<dwarf>`一样是对话框皮肤，效果之一是打字速度三倍化。

本文档最后编辑于 2025 年 2 月 23 日。
