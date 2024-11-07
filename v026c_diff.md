# 0.25f 到 0.26c 的技术更新
<i>Alice in Cradle</i> 0.25 于 2024 年 5 月 3 日发布，并于一个月后更新至稳定版本 0.25f; 0.26 于同年 9 月 15 日发布，并于一周后更新至稳定版本 0.26c.

由于《[二创指南](https://aliceincradle.org/hashcode.html)》体量过大，短期内难以修订，因此本文将对 0.25f 与 0.26c 的 StreamingAssets 文件夹内所有<b>文本文件</b>的差异进行注解，并给出对《二创指南》的修订意见。
> 在本游戏的官方 Discord 频道中已有日本友人着手制作哈语言的 Visual Studio Code 扩展插件，有意试用或参与开发的小伙伴请加入频道联系我们。

首先，_debug.txt 中新增了 albumunlock 一项（但注释有误），其值为 1 会强制解锁「回忆相册」全部内容。

## localization 文件夹的改动（以简体中文为例）
ev_book.txt 新增了若干文本，包括「使用取卵器」（和之前版本中该文件的其他内容一样是书页形式）和其他一些会在长椅上触发的事件。
> （重要！）注意到其他一些事件中有诺艾儿以外的角色发言并且不是书页形式，这意味着书页内容并不一定要写在 ev_book.txt 中，也许还可以写在其他的 ev_*.txt 中。

ev_city3.txt 新增了「贝尔米特袭击事件」的文本。其中阿尔玛失禁时的手动台词会和诺艾儿的自动台词同时播放，这需要通过对哈语言指令 MSG 追加额外参数来实现。此外，阿尔玛有一句隐藏独白 l_hidden_21，也需要 MSG 指令做类似的配合，详见后文。

新增了文件 ev_fatal_nusi.txt 和 ev_fs_nightingale.txt，内容分别是「森之领主战败 CG」和「商人小姐的秘密采购」（这个和休息室确实是技术上的 fatal 事件，2weekattack 反而不是），并且修改了 ev_nightingale.txt 来加入相关对话。

ev_s01.txt 仅简体中文版修改了提尔德哥哥的某句台词，强调了诺艾儿在「贝尔米特袭击事件」中被破处。（然而袭击事件中只是被丸吞并消化了制服和部分头发）

ev_s105.txt 新增了在医务室探望伊夏同学之前就试图前往东教学楼二层的台词。

XX_tx_config.txt 新增了一批酒吧贮藏室兑换来的设置项。  
XX_tx_item.txt 和 XX_tx4.txt 新增了取卵器和替罪猫。  
XX_tx_map_name.txt 新增了教学楼二层（仅东楼被实装）和家庭实践课教室。  
XX_tx_scenario.txt 新增了「回忆相册」相关内容。  
XX_tx2_ep.txt 新增了取卵器相关描写。

## m2d 和 evt 文件夹中 cmd 文件的改动
在 m2d 文件夹中：  
city_in_museum_backyard.cmd 美术馆后厅新增了「回忆相册」触发点。  
city_scl_ground.cmd 学校操场新增了「贝尔米特袭击事件」触发点。  
forest_ruin_station.cmd 阿尔玛的长椅处，保留此处的夜间女 NPC.  
house_noelroom.cmd 诺艾儿的卧室，将书桌改为「回忆相册」触发点。  
school_in_hall_right.cmd 东教学楼和 school_in_health.cmd 医务室新增了浴室。  
新增了地图 school_in_hall_right_2.cmd 东教学楼二层。  
新增了地图 school_in_homeec.cmd 家庭实践课教室。

在 evt 文件夹中：

`__INITG.cmd`新增了 30 和 31 号开关（贝尔米特袭击事件、商人小姐的秘密采购），88 和 89 号变量（长椅事件用到）。  
`__M2D_FLUSHED_PUPPETNPC.cmd`略微调整了部分商店的刷新机制。  
`__M2D_GAMEOVER.cmd`新增了森之领主战败 CG 的触发机制。  
新增了`_bench_*.cmd`大量长椅事件。  
> 重要：`_DEBUG0n.cmd`提供了在 cmd 文件中直接书写 MSG 指令正文的范例。  

`s01_*.cmd`到`s13_*.cmd`做了「回忆相册」的适配。  
新增了`scl_hall_stop_go_other_area.cmd`的独白。  
> 重要：`_health_ixia_term.cmd`将立绘差分替换正则表达式的`\\`简化为`\`。

新增了`2weekattack_0n.cmd`系列事件（贝尔米特袭击）。  
`_album_*.cmd`新增了「回忆相册」入口事件，移除了原书桌前的回忆事件。  
`_restroom_*.cmd`将「在洗手间将卵排出」改写为 CHANGE_EVENT2 指令，将来会实装 CG.  
`trm_000.cmd`休息室的进入条件由「健全等级<2」改为「健全等级=0」。  
`trm_bath.cmd`休息室的洗浴事件有所更改，以适配学校的浴室。  
`quest00*.cmd`新增了「商人小姐的秘密采购」系列事件。  
宏指令`fatal.cmd`新增了第四个参数表示观看完成后的回调事件。
> 重要：Adder.cmd 提供了在对话中嵌入变量值的「普莉姆拉加法器」范例。

## 新事件：人有三急
`_bench_excrete_juice.cmd`是一个非常有趣的新事件，它的内容是在尿意 Lv2 时在长椅处用空瓶处理。  
具体来说，它会先用以下的代码判定诺艾儿有没有空瓶子：
```
SELECTARRAY_CLEAR
IF 'empty_bottle==0' { // 如果没有，就会禁止选中
    SELECTARRAY &&Select_choose_bottle CHOOSE_BOTTLE S
} ELSE { // 取出空瓶子
    SELECTARRAY &&Select_choose_bottle CHOOSE_BOTTLE
} // 要憋不住了…！
SELECTARRAY &&Select_excrete EXCRETE C
SELECT -1
```
如果有空瓶子并且玩家选择取出，则会进入一个倒计时环节：
```
UI_MGMTIMER_ACTIVATE 10 0 !FAIL_PICK
UI_MGMTIMER_ADDSCORE_TX small_bottle Timer_find_bottle
TL 1 UIP_EVENT_TEMP_HIDE 1
UIGM CHOOSE_ITEM 'mtr_bottle0' _success 1
```
这里第一条指令的 10 表示共有 10 秒操作时间（下个版本中醉酒状态下可能是 5 秒），0 表示在开始操作之前有 0 秒准备时间，!FAIL_PICK 表示操作失败时强制 GOTO FAIL_PICK.  
small_bottle 可能是图标名，Timer_find_bottle 是一个 tx 词条。  
第四条指令写法较为固定，单引号之间是要求选中的道具 id.  
成功时候会有`UI_MGMTIMER_DEACTIVATE`指令终止倒计时，随后有新指令`UIP_PTCST_REMOVE ui_excrete_juice_splash`移除动画。  
> 重要：新增了`DANGER_ADDITIONAL n`令附加危险度（丢汁来增加，上限为45）增加 n.

## 新事件：回忆相册
`_album_portal.cmd`是一个非常重要的新事件，它的内容是在诺艾儿的卧室或者美术馆后厅呼出回忆相册。

该事件首先会使用`DEF_CURMAP xxx`指令保存当前的地图 id 以免回忆结束以后回不来了。

接着会调用 UIALBUM 指令呼出回忆相册的菜单界面，然后可能会调用`UIALBUM_RELOAD`或`UIALBUM_RELOAD_GF`指令做一些清理操作，甚至调用`EV_CLEAR_ALL_STACK`指令清空事件栈。

在玩家完成选择后，临时变量 $_scene 和 $_album_categ 的值可能发生变化，后者的取值可能为 MEMORY TROOM FATAL OSOK 之一，分别表示「剧情事件、休息室、战败CG、惩罚」。
> 再次强调，「商人小姐的秘密采购」在相册界面里属于 MEMORY，但实际执行 FATAL 事件。

如果玩家选择关闭相册，那么 $_scene 会是空串，此时会依次执行作用不明的`WALKCOUNT 99`和`EV_CLEAR_ALL_STACK`指令后结束事件。

否则，对于 MEMORY 类（部分无需切换地图的除外）将会作出以下正确设定后调用宏指令`_album_switch_map`（内容见下）传送到对应地图触发事件。
- 目标地图 $_amap
- 具体的传送目标点 $_apos
- 各 GFB 开关和 GFC 变量
- 主线进度 PVV（使用`PVV_ABSOLUTE n`指令强制设为 n，允许减小）
- 危险度
```
INIT_MAP_MATERIAL $1 1
SCN_MANUAL_BGM_REPLACE ''
WAIT_FN MAP_TRANSFER 
NEL_MAP_TRANSFER $1 $2 '!'$3
TITLECALL_HIDE 1
HIDE_BLURSC
#MS_ % '##'
IFSTR $2 IS 'L' {
    #MS_ % '@R P[stand_ev~]'
}
IFSTR $2 IS 'R' {
    #MS_ % '@L P[stand_ev~]'
}
#CMDRELOAD	IMMEDIATE IMMEDIATE_LOAD
WAIT 2
```

## 新事件：商人小姐的秘密采购、长椅取卵
在 0.26 中，南丁格尔的系列事件被大改。

首先，满足一定条件时，会触发 quest00 事件，南丁格尔会请求诺艾儿帮她买「禁忌的苹果」。

买到苹果后再次和她对话可以选择触发 quest00_1 事件，该选项会像序章的洗澡选项一样有绿色正方形标注（通过对 SELECTARRAY 指令追加参数 Q）。

触发 quest00_1 事件后，在其他地图再次遇到南丁格尔时就只能看到衣服和包（但是如果不切换地图直接战斗就不一样了），调查之则会触发 quest00_bag 事件。

在 quest00_bag 事件中，会有一个三项的选项列表，前两项会根据是否开启健全模式而只能选中之一，第三项是取消。

如果选中了第一项「环顾四周」就会观看其 FATAL 事件，如果选中第二项「呼喊商人」就会黑屏并与其对话然后执行 NIGHTINGALE_CALLBACK 指令。

无论选择了这两项中的哪一项，其货品都会新增「精灵的卵×3、取卵器、替罪猫」。

购买取卵器后，在怀卵状态下就可以在长椅上选择「将卵排出」。此时如果开启了健全模式就会像在家里卫生间一样黑屏解决，否则会进入一个 QTE 小游戏。

该小游戏使用`MGM_EGGRMV INIT pos`指令进入，pos 为诺艾儿的内生殖器截面图出现的位置参数。

随后，玩家需要长按确定键让取卵器进入最深处，短暂停留后松开。重复此操作，直到诺艾儿高潮。

如果高潮了却还没有排出所有卵，就会询问「再努努力/放弃」；如果已排出所有卵，就会询问「再玩一会儿/结束」。选择继续的话会执行`MGM_EGGRMV DEACTIVATE_EFFECT`重置截面图。

小游戏结束后，会执行`BENCH_SITDOWN % -1000 -1000 1`指令坐下，然后执行`MGM_EGGRMV DEACTIVATE`移除截面图，最后统计成功取出的污液`$_liqcount`和卵`$_eggcount`的总和。

## 其他新增指令的详解
`_bench_check_sf_level.cmd`新增了`DEFINE_NEXT_EV xxx`指令，作用是将下个事件（那是什么？和栈有关？）的 ID 代入临时变量 xxx，这样随后就可以使用`SfEvt[$xxx]`或`SF[EV_$xxx]`读取该事件的 SF 变量了。

`_bench_cure_cloth_alma.cmd`新增了`#SND_LOAD xxx`指令用于加载某个音频。

`_bench_cure_cloth_mob.cmd`新增了`DEF_MOBTYPE xxx`指令用于获取 NPC 类型并代入临时变量 xxx，从而判断是阿尔玛还是陌生人看到了长椅上的诺艾儿。另一方面，此事件中出现了形如`GFC_SET CLT_NPC0 |=1`的指令，也就是说开始支持`=`以外的赋值运算了。
> 另一事件也有类似的`SF_SET EV__bench_cure_ep_enemy_orgasm +=1`指令。

`_bench_cure_egged_00.cmd`有大量内容：  
新增了`DEFINENDEF x=y`指令，猜测作用和`IFNDEF x x=y`相同。  
新增了`PREPARE_SV_TEXTURE xxx`指令，用于预加载图像素材？  
新增了`UIP_REPOSIT x y z`指令，参数意义不明。  
新增了`SELECT_POS`，似乎是改变接下来选项列表的位置。  
用到了`BENCH_SITDOWN % x y z`指令，效果不明。  
新增了`UIP_SYNC_CUTIN HIDE`指令，推测除 HIDE 外还支持 SHOW 参数？
> 非常重要：原`MSG BOOK@p_id`指令全部改为新写法`MSG id K[p]`，MSG 指令的其他大改详见后文。

`_bench_cure_ep_enemy_orgasm.cmd`新增了一个 IF 监听器 nightingale_here 用来判断南丁格尔是否在该长椅旁。新增了`BENCH_UIPIC_SLIDE`无参指令，效果不明。

新增了宏指令`@_bench_ev_masturb_noel`（实际执行另外两条宏指令）用来播放诺艾儿的自慰音效。

`_bench_excrete_juice_splash.cmd`新增了`UIP_SYNC_CUTIN`指令，参数很多，详情不明。指令`PR_OMORASHI`的参数变得更加复杂了，有待研究。

`_DEBUG06.cmd`是一个对`UIP_EVENT_SETFADE`指令做综合测试的 playground，有待研究。

`_DEBUG07.cmd`是「回忆相册」的原型，有待研究。

新事件`_SND_SPOT_R.cmd`定义了一个重复播放声效的宏指令，有待研究。

森之领主的战前事件`s13_load_ixia.cmd`新增了`PVIB ground_bump orgasm_1`指令，详情不明。

COOKING 系列指令可以接参数 alchemy_cutin/f_xxx，其中 xxx 可以为 tilde laevi trm primula 之一，表示制作成功后出现的插画。

`u_t00.cmd`用`ITEMSTORE_RELOAD_BASIC id`指令代替了`STOREFLUSH id`指令，其中 id 为某个商店的 ID（在这里是 BarUnder），效果不明。

## MSG 指令的超级大更新
在 0.24 或更早版本中，由于剧情事件的 cmd 文件被封装了起来，玩家不借助第三方工具无法对其进行修改，因此只能对 localization 文件夹中的 txt 文件进行少量修改。

AiC 2024 拜年纪的六幕过场做法是在 Windows 操作系统利用 BepInEx 插件管理器安装 AicUtils 插件，再通过某个基于谷歌 Blockly 的 json 编辑器来编辑事件，最后导出 cmd 和记录对话内容的 yml 文件。

在 0.25 中，cmd 文件被暴露在了 StreamingAssets 文件夹下的 evt 和 m2d 这两个子文件夹内，因此 AicUtils 只用来将对话内容重定向到 yml 文件。但是，上述 json 编辑器的维护难度太大，已被废弃。

0.26 发布后，AicUtils 的作者停止维护此插件，好在游戏作者「橋野みずは」大幅增强了 MSG 指令，基本能做到不怎么修改 txt 文件就能自由书写自定义事件中的对话等文本。

### 新参数
在反编译出的 NelMSGContainer.cs 文件的开头可以找到如下代码：
```
private const char MSGFLAG_IMMEDIATE = 'I';
private const char MSGFLAG_THINK = 'T';
private const char MSGFLAG_ANGRY = 'A';
private const char MSGFLAG_CONTINUE = 'C';
private const char MSGFLAG_BEHIND = 'B';
private const char MSGFLAG_BOOK = 'K';
private const char MSGFLAG_DEVICE = 'D';
private const char MSGFLAG_EVIL = 'V';
private const char MSGFLAG_AUTO_PROGRESS = 'P';
private const char MSGFLAG_FOCUS_COLOR = 'F';
private const char MSGFLAG_MERGE = 'M';
private const char MSGFLAG_REPLACE_LABEL = 'R';
```
据此推断，MSG 指令的基本格式为`MSG x_id xxx`，其中参数 xxx 为由以下内容连接在一起的字符串：
- A: 对话框强制使用`<angry>`样式，圆角矩形且四周冒出剑山污染体一样的尖刺。
- B: 对话框置于背景（？），常用于 NPC 的喧嚣。
- C: 文字显示完后不等待按键，对话框也不消失。
- D: 对话框强制使用`<device>`样式，灰底蓝边尖角平行四边形。
- F: 对话框置于前景（？）并聚焦颜色，常用于 NPC 的喧嚣。
- I: 立刻显示对话框（注意不是立刻显示完文字内容），无淡入和变形效果。
- K[p]: 以 p 为位置参数（常用 L 或 LL）显示书页，相当于以前的`MSG BOOK@p_id`写法。
- M: 启用 merge_flag，在教室上课时老师的台词有用到，作用不明。
- P[t]: 在 t 帧后自动确认此对话而不等待玩家按键，用于贝尔米特袭击事件。
- R[y_id]: 本条对话在记录中显示为 y_id 的内容，用于酒保的暗号效果。
- T: 对话框强制使用`<think>`样式，四角变成圆耳朵，指向角色的尖角变成小气泡。
- V: 对话框强制使用`<evil>`样式，灰底红边圆角平行四边形，打字速度变为六分之一。

### 文本块与变量代入
MSG 和 TX_BOARD 指令现在可以像 PHP 语言的 [heredoc](https://www.runoob.com/php/php-eof-heredoc.html) 一样输入「文本块」了，例如下面的例子：
```
MSG n_<<<EOF
This is a text that <m joy>does not exist<m0> in the localization directory.
*
The part enclosed by
<C1>\"\\\<\\\<\\\<EOF\"<C0> to <C1>\"EOF;\"<C0> is
sent from evt.EV to NelMSG.
EOF;

_variable=TX_BOARD
TX_BOARD <<<EOF
You can also use EOF
in \"$_variable\".
EOF;
```
在这个例子中，MSG 指令首先通过前缀`n_`指出说话人是诺艾儿。

接着是一个关键的部分`<<<EOF`，这个部分<b>必须位于行末</b>。其中 EOF 可以换成别的单词，只要不在正文中出现。

然后就可以像在 txt 文件中一样书写正文了（例子中甚至说明了怎样转义双引号和小于号），如果需要多国语言支持则可以配合 IFLANG 指令。

最后需要一个独占一行的`EOF;`结束正文，其中单词 EOF 要和之前匹配，分号不能省略。

文本块在 TX_BOARD 指令中的用法类似，并且例子中说明了如何通过 $ 代入一个变量。

下面是一个更加复杂的例子（普莉姆拉计算器）：
```
// evt/___Sample/Adder.cmd
VALOTIZE 0
_sample_a=~-10--14
TALKER	n  L  
PIC   n a_3/a2__F1__f3__m1__b4_uo    

HKDS	n RT '' TT

MTL MSG_SKIPHOLD
MSG n_<<<EOM
Let\'s do math.
EOM;

// '
　DEFINENDEF v1=10
NUMCOUNTER 0 999 $v1
    v1=$_result

MTL MSG_SKIPHOLD
MSG n_<<<EOM
the content of v1 is <C1>$v1 <C0>.
what is the next <C1>v2<C0>?
EOM;

DEFINENDEF v2=3
NUMCOUNTER 0 999 $v2
v2=$_result
HKDS	n '' '' ''

    _add=~$v1+$v2
MSG n_<<<EOM
'$v1' = $v1 。
\$v2 = $v2 。
The added result is $_add。
EOM;
```
其中的`Let\'s do math.`给出了单引号的转义方法，DEFINENDEF 给出了变量 v1 初始值的一次性定义，NUMCOUNTER 令玩家输入 v1 的新值。

随后在输入 v2 之前，诺艾儿的台词中分别用 $v1 和 v2 显示出了变量值和变量名。

最后，赋值语句`_add=~$v1+$v2`计算出了两个变量的和，并通过第三段台词输出。  
在第三段台词中，`'$v1'`和`\$v2`都可以保证玩家看到 $ 符号而不发生变量代入。

本文档最后更新于 2024 年 11 月 7 日。