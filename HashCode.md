# 哈语言的部分语法归纳
> "Pitiable does NOT imply Adorable." - BobUnderGrave
## 前言
哈语言（HashCode）是Hashino Mizuha为Alice in Cradle原创的一种类似批处理的脚本语言，后缀名为.cmd，大部分指令由<u>一个空格分隔的实参序列</u>组成。
## 事件的测试方式
首先请打开StreamingAssets文件夹的_debug.txt，把里面的reloadmtr、announce、timestamp这三项后面的0都改成1，从而启用"F9热重载译文、F7控制台"（左下角看到时间戳说明有效）这两项功能。
不管采用以下哪一种方式，都建议先获取一份<u>解包好的TextAsset文件夹</u>，如果是Windows系统则最好再配合dnSpy逆向工具。
1. 如果您是苹果自研芯片的MacOS系统：
请使用[一键山雏](https://space.bilibili.com/1724544113)制作的0.23c改版（可通过`@Nepkey纳百技`的[下载器](https://nepservice.top/AicDdata/aicd/setup.exe)下载），它可以在F7菜单中使用execute命令执行自定义事件。
2. 如果您是Windows系统或x86指令集的MacOS系统：
请使用[BepInEx 5.4](https://github.com/BepInEx/BepInEx/releases)（一款适用于任何unity游戏的mod集成工具），并在其中安装[凌空的猫](https://space.bilibili.com/448512891)制作的AnyInCradle这一mod，它可以加载散装的资源文件来局部代替游戏的原始资源，从而使您能修改游戏原本的事件和音像素材，然后正常触发或使用F7菜单的evt命令（详见MSG指令的介绍）执行之。
## 指令的分类
1. 黄色：TALKER、TALKER_REPLACE、HKDS
2. 蓝色：图片处理类，以PIC开头
3. 对话类：包括以MSG开头的指令，以及异步修饰符MTL/TL
4. 粉色斜体：包括子事件调用，或`@_`执行宏
5. 紫色：过于杂乱，想到哪写到哪吧
## 黄色：TALKER、TALKER_REPLACE、HKDS
1. TALKER：设置立绘位置
语法为`TALKER x Y`。
其中小写字母x为角色占位符，其取值范围如下（和TextAsset文件夹的`__ev_x.pxls`一一对应，且在`__vp_person.txt`中全部列出，括号内大写字母为辅助记忆）：
d：提尔德・柯涅尔（三哥，tilDe）
f：德尔菲尼・柯涅尔（父亲，Father/delFini）
g：梅法・格里亚德（蓝发队长，Gridyard）
i：伊夏・波利斯塔切尔（黄发同学，ixIa）
l：阿尔玛・奥普菲帕姆（戴帽子的同学，aLma）
n：诺艾儿・柯涅尔（自己，Noel）
nb：浴室的诺艾儿（Noel Bath），对应`__ev_n_bass.pxls`。
p：普莉姆拉老师（Primula）
s：奥斯托利亚（白狗兽人，oStrea）
t：南丁格尔（商人，nighTingale）
v：丽薇歌塔・柯涅尔（二姐，laeVigata）
w：瓦罗斯（黑狼兽人，Walross）
大写字母Y为立绘在窗口中的位置（全部定义在TextAsset文件夹的`__vp_talker_pos.txt`），基本写法为
LL/L/CL/CCL/C/CCR/CR/R/RR，为从左到右的9个不同位置。
可以在这9个位置后加上T/B来上下偏移，这样就得到了27个不同位置。
记忆方法是（上下左右中）：Top/Bottom/Left/Right/Center。
LOUT/ROUT/BOUT/LBOUT/RBOUT会将立绘移出左/右/下边缘或左下角/右下角。
CT可以简写为T（但CB不能简写为B），另有四个特殊位置：
TT：比T更靠上，不可左右偏移。
CLL：介于L和CL之间，不可上下偏移。
CRR：介于CR和R之间，不可上下偏移。
BBR：比RB更靠下，只有初见南丁格尔被她蹲下摸大腿时用到了。
对已经显示的角色再次调用TALKER指令，并指定另一个位置就能做出平移的效果，对话框的气泡尖角会始终指向立绘，如奥斯托利亚把小瓶香料交给诺艾儿。
如果在`TALKER x1 Y`后又使用了`TALKER x2 Y`，那么可以紧接着使用PIC指令改变角色x2的立绘，从而做出x1换成x2的效果。
2. TALKER_REPLACE：绑定角色姓名和打字音效
语法为`TALKER_REPLACE x Name talk_name`。
其中小写字母x为角色占位符（包括但不限于TALKER指令中的那些），
`Name`为要绑定给它的姓名标识符（首字母一般要大写，除了beastman和几个elf_xxx），所有的姓名标识符定义在localization文件夹的lang_tx_ev_whole.txt中（lang为语言代码，下同），形如"&&Talker_Name"。
`talk_name`为打字音效（一般不用填），小写`name`的取值范围如下：
alice：爱丽丝（未出场）
alma：阿尔玛
cane：法杖（无线通信电流声）
guard：卫兵
ixia：伊夏
levi：二姐
nightingale：南丁格尔
nodad：父亲
noel：自己
tilde：三哥
m1,mob_m0,mob_m1,mob_m2,mob_m3,mob_w0,mob_w1,mob_w2,mob_w3,mob_w4：其他NPC
伊夏首次出场时用了`TALKER_REPLACE i Unknown`来把姓名临时改为"？？？"，如果只填写x就会恢复默认姓名。
姓名会显示在对话框的标题栏（MONOLOGUE样式除外），详见MSG指令的用法。
> 特殊用法：`TALKER_REPLACE n '=' ''`，可以用来保持名字不变但打字静音，常用于黑屏匿名内心独白。
3. HKDS：设置对话框样式
语法为`HKDS x Y F B`。
可以设置对话框的特殊样式，如老师讲故事的顶部宽对话框、黑屏中央的匿名宽对话框等。
其中小写字母x为角色占位符（和TALKER_REPLACE指令一致），Y为对话框的位置（和TALKER指令一样有不止27种）。
F为对话框气泡尖角的指向，可以写`#<name>`表示指向某个行走图（但是小写单词`name`的取值范围和TALKER_REPLACE指令并不完全一致，目前确定能用的主要有`alma,ixia,ixiacane,laevi,mepha,ostrea,primula,tilde,walross,Nightingale`（N为大写），`#<%>`则会恢复默认），也可以写`@Y`表示指向窗口中的某个区域（这个Y和TALKER指令一样有不止27种）。
B为对话框边界样式，取值范围如下：
NORMAL：未知，盲猜是默认
TT：未知但很常用
WIDE：加宽
WIDE_TT：加宽的基础上未知
BOOK：未知，应该和`MSG BOOK@Y_b00`指令无关
MONOLOGUE：加宽且匿名，常用于黑屏内心独白
ONELINE：未知，盲猜是单行
_OFFLINE：未知
例如`HKDS n T/C/CB #<%> WIDE/MONOLOGUE`会将诺艾儿的对话框设为加宽/匿名加宽，位置为靠上/居中/靠下。
> 除x以外且不在末尾的参数可以写'='（要带单引号）表示该项维持不变，只写`HKDS x`则重置回默认样式。
## 蓝色：图片处理类，以PIC开头
1. PIC：更改立绘差分
语法为`PIC x y`。
其中小写字母x为角色占位符（和TALKER指令一致），
y为立绘差分标识符但是<u>非常长</u>并且无法用人脑记住，建议从已知的事件中复制。
2. PIC_MP：附加动态表情
语法为`PIC_MP x EMO`。
该指令会给一个已显示的立绘脸部附加一个动态表情，当再次使用PIC指令更改立绘差分时表情将消失。
其中小写字母x为角色占位符（和TALKER指令一致），
大写字母EMO为动态表情标识符，TextAsset文件夹有若干小写字母命名的MP_emo.txt与之对应：
ANG：傲娇（下次你回学园的时候我绝对会打败你的！）
AWK：不服（怎么这样！你把我当成什么了啊！）
BLS：脸红（似乎没有对应文件）
BSM：脸颊两团白气冒出（游戏中暂未用到）
DEP：三条蓝竖线
EXC：白气泡+红叹号，不循环
EXQ：白叹号+白问号，不循环
HEA/HEA2：一个/三个粉心（0.23新增，用于姐姐）
KIR：一个十字形状的黄星星，不循环
LAG：四个红牌/黄牌交替闪烁
LIG：黄灯泡，不循环（0.23新增，用于姐姐）
PLE：四个和三个玉米粒交替出现
QUE：白气泡+蓝问号
SMK：黑色螺旋线
SWB：一堆白泡泡
SWT/SWT2：一滴汗/一堆汗（后者似乎没有对应文件）
TTT：白气泡+三个点（0.23新增，用于休息室的诺艾儿）
可以使用退格键下面的竖线|隔开两个动态表情来同时启用它们，如`PIC_MP n BLS|TTT`。
3. PIC_B：显示一张背景图
语法不明，可用来显示休息室里的洗澡图或与梅法当面对话时的背景图。
4. PIC_HIDE：隐藏一张图片
语法为`PIC_HIDE x`，可用来隐藏一个角色的立绘。
5. PIC_HIDE_ALL：隐藏所有图片
本指令没有参数，执行后会隐藏包括立绘在内的所有图片。
6. PIC_FILL/FADEIN/FADEOUT：画面淡入淡出
```
PIC_FILL &n DARK
PIC_FADEIN &n x
PIC_FADEOUT &n y
```
n为非负整数（三个必须一致），DARK表示黑屏，x表示进入黑屏的帧数，y表示取消黑屏的帧数。
7. 其他PIC类指令：主要有PIC_Fxx和PIC_Mxx，有待研究。
## 对话类：MSG、MTL/TL等
1. MSG：显示对话（绿色）
语法为`MSG x_dd`，如`MSG n_01`。
其中小写字母x为角色占位符（和TALKER_REPLACE指令一致），会用来确定对话框标题栏中的姓名和正文的打字音效，以及对话框气泡尖角指向哪个立绘或行走图。
对于没有立绘的角色可使用未被占用的字母，并事先用TALKER_REPLACE指令绑定其姓名。
`x_dd`为对话内容标识符，实际会从localization文件夹的某个子文件夹（取决于语言设置）中读取txt文件，这类文件内容的语法详见另一篇说明文档。
该txt文件的名称取决于当前所处的事件ID（可以按下F7在右上角看到并复制，自由行动时F7菜单左上角的单行输入框中可以输入`evt id`回车立即执行系统事件），例如序章中回到魔女的杂货店之前的事件ID全部以"s00"开头，因此这些事件中的对话内容全部保存在ev_s00.txt中。
开局采集清水的事件ID为s00_0a，因此该txt文件中会以`*s00_0a n_01`作为第一句对话的开头（下一行是"一瓶清水...月下铃兰的球茎，"）。
而同一事件中的后续对话似乎可以省略事件ID，而仅以`*n_02`这样的标识符开头。
有些对话位于条件分歧内部（比如姐姐的"连矿石都帮忙挖了啊！"），此时习惯上在`x_dd`后加上一个小写字母作区分，如`*n_07b`。
似乎也存在直接把对话内容写在指令组中（放弃翻译或者利用IFLANG指令判断语言）而不是写在localization文件夹的方法，但只有0.09用到了。
一条对话显示完成后默认会阻塞，直到玩家按下确定或取消键，除非在该对话之前使用了`MTL MSG_SKIP`指令，从而做出被另一人打断的效果（如阿尔玛打断诺艾儿的妄自菲薄）。
使用MSG指令显示的对话会记入日志（按下up键查看），它会按照角色占位符（而不是绑定的姓名）设置头像和背景色。
不同角色交替说话时，除最后说话的人以外，其他人的对话框会变为暗色并被立绘遮挡，按下C键可以隐藏所有对话框。
> 特殊用法：`MSG BOOK@Y_b00`
> 以书页为背景显示ev_book.txt中的旁白（如濒死治疗），
> 这里Y为位置，和TALKER指令一样有不止27种写法。
2. TX_BOARD：告示牌/书信
语法为`TX_BOARD _eventboard_xxx`。
会将lang_tx_event.txt中由标识符`_eventboard_xxx`定义的多行文本作为告示牌显示。
如果写作`TX_BOARD _eventboard_xxx FRAMED_PAPER`，就会作为书信显示，如老师的留言和伊夏的书信。
3. MSG_HIDE：隐藏对话框
本指令不填参数就能隐藏所有对话框，但有时会带上参数1，有时则写作`AUTO_MSG_HIDE 0/1`，意义不明。
4. MSG_HOLD：保持对话框
有些指令如SELECT会隐藏所有对话框，此时可以提前使用MSG_HOLD指令来保持对话框，例如普莉姆拉老师问诺艾儿"还害怕吗？"或诺艾儿选择是否坐在阿尔玛同学旁边。
5. 异步修饰符MTL：延迟到打字完成
在指令前加上"MTL+空格"，就能将该指令<u>延迟到下一条对话的打字效果完成时立即执行</u>。
例如`MTL MSG_SKIP`可以让下一条对话不等待玩家按键，从而被再下一条对话打断。
又如火球教学成功时伊夏打喷嚏，这里使用了好几条被MTL修饰的指令（但是F7菜单里是看不到MTL或TL字样的），确保"阿嚏——！！"显示出来以后立即更改伊夏的立绘差分、添加泡泡表情、播放音效。
6. 异步修饰符TL：延迟指定帧数
和MTL类似，在指令前加上"TL+空格+正整数+空格"，就能将该指令<u>延迟到指定帧数后执行</u>，1秒等于60帧。
写法示例：`TL 60 PIC_MP v EXQ`，1秒后给二姐添加表情。
不是特别好用，一般用来配合对话文本中的暂停打字特效（如`<W3>`）来将指令延迟到打字一半时执行，如诺艾儿决定进入休息室时姐姐的先一愣再惊讶。
7. DOTL/DOMTL/CLEARTL/CLEARMTL：立即执行/放弃执行异步指令
这四种指令都没有参数，前两者会立即执行所有尚未到达设定时刻的TL/MTL异步指令，后两者则会将它们放弃执行。
8. WAIT：阻塞指定帧数
语法为`WAIT n`，n为正整数。
与异步修饰符TL不同，WAIT指令是阻塞的，其后的所有指令都会被推迟执行。
## 粉色斜体：子事件和宏
1. CHANGE_EVENT/CHANGE_EVENT2：跳转到/插入另一事件
语法为`CHANGE_EVENT/CHANGE_EVENT2 sub $1`。
其中sub为另一事件的ID，`$1`为参数（如果需要），如`CHANGE_EVENT2 s13_4b 1`表示首次打败森主后观看胜利CG（不填1则是回忆鉴赏）。
像这种需要多处执行且内容相同或相似的事件（或者很长的条件分歧，如在书房和父亲的对话）就适合作为子事件被调用。
两者的区别是，CHANGE_EVENT2在执行完子事件后会<u>返回原事件继续执行下一条指令</u>（F7菜单右侧的内容不会自动还原，需要按两次F7关掉重开），而CHANGE_EVENT似乎不会？
> 思考题：CHANGE_EVENT2的这一特性能否用于递归？
2. 以`@_`开头的宏：
无参宏`@_PIIN`位于_PIIN.cmd，会闪烁白屏并播放音效（如伊夏打响指）。
`@_TSUKKOMI`位于_TSUKKOMI.cmd，会播放音效并振荡屏幕，可以写最多四个参数来让角色立绘一起振荡。
`@___Other/trauma d x y z`位于trauma.cmd，它有四个参数（d为危险度，y为音乐），会呈现两周前回忆导致的黑屏PTSD。
`@___Other/still x y z`位于still.cmd，功能是淡入图片，其中x为图片路径，y为0或1表示是否立即完成，z表示黑屏的淡入帧数（不填视为0）。
`@___Other/swin x y z`位于swin.cmd，会显示魔力植物/魔力磁计的介绍图。其中x为图片路径，y为L/C/R，z为角色占位符。
`@___Laevi/trm__fading x`位于`trm__fading.cmd`，x填1表示进入休息室，不填表示退出休息室。
此外还有`@___House/_xxx`等宏，有待研究。
## 操作提示：以`TUTO_`开头
1. TUTO_MSG：设置提示文字
语法为`TUTO_MSG Tuto_xxx`。
会从lang_tx_ev_whole.txt中找到由&&Tuto_xxx定义的提示文字（可以包括按键图标）并显示出来。
2. TUTO_CAP：设置提示图片，目前只有火球教学中用到了。
语法为`TUTO_CAP 'tutocap/forest_00或01' <key x/>`。
3. TUTO_POS：设置提示位置
语法为`TUTO_POS C T/B`，会将提示文字显示在屏幕顶部或底部。
4. TUTO_REMOVE/TUTO_REMOVE_ALL：清除提示
本指令没有参数，会清除之前设置的提示文字和信息。
## 音频相关
1. LOAD_BGM：预加载音乐
语法为`LOAD_BGM BGM_xxx`。
本指令会预加载一首音乐，以便用REPLACE_BGM指令切换到它。
全体音乐文件位于StreamingAssets文件夹（TextAsset文件夹的_bgm.txt也会列出），抄就完事了。
有一种写法是`LOAD_BGM BGM_forest Normal`，意义不明。
2. REPLACE_BGM：切换音乐
语法为`REPLACE_BGM x y z`。
本指令会将音乐切换到之前LOAD_BGM加载好的那首，
x表示旧音乐的淡出帧数，y表示新音乐的淡入帧数（不填则和x一致），z填0表示不立即释放旧音乐的缓存（适用于临时切换一下马上要换回来）。
3. HALF_BGM：音乐音量是否减半
语法为`HALF_BGM 0/1`。
参数填1会将音乐的音量减半，如伊夏被土蛇缠住的全屏静态CG，参数填0则恢复正常音量。
4. STOP_BGM：停止音乐
语法为`STOP_BGM x y`。
x为淡出帧数，如填120会使音乐在2秒内淡出。
y可以省略也可以填0或1，目前1只用于在炼金工房被姐姐抓现行，意义不明。
5. START_BGM：继续音乐
语法为`START_BGM x`。
x为淡入帧数，本指令会将之前被`STOP_BGM`停止的音乐继续播放。
6. SND：播放音效
语法为`SND sound`，会播放一个音效，名称有哪些不明，可参考TextAsset文件夹的_snd.txt。
## 其他指令
1. //：注释
某行指令以`//`开头时，该行无效（F7菜单中显示为灰色），当您在测试过程中需要临时禁用部分指令时可以使用它。
`//`右侧也可以书写任意内容，为了防止您忘记您的指令组是干什么用的，最好写下来哦。
2. GREETING：立正
语法为`GREETING L/R/@ d`。
本指令一般在调查NPC或告示牌时首先执行，会让诺艾儿在被调查对象的一侧立正并把法杖横握在小腹处。
第一个参数表示诺艾儿会立正在被调查对象的哪一侧（注意和她立正后面朝的方向相反），填`@`则自动选择较近的一侧。
第二个参数`d`表示立正后与被调查对象的距离，可以省略。
3. PR_OUTFIT：换装
语法为`#<%>`和`PR_OUTFIT NORMAL/BABYDOLL`两条指令连用。
两条指令各占一行，会换穿战斗服/睡裙。
4. UIALERT：（游戏中未使用）左下角显示警告
语法可能为`UIALERT '警告内容'`，试试看吧。
5. UI_ENABLE/UI_DISABLE：显隐左侧立绘和血蓝条
本组指令没有参数，后者执行后会隐藏左侧的动态立绘，从而获得16:9的沉浸式视野，但底部的血蓝条和异常状态图标也会不可见，前者执行后则重新显示。
6. DANGER：设置危险度
语法为`DANGER n 0/1`，n为新的危险度数值，1表示立即完成（没有渐变）。
> DANGER指令会改变danger_level的值（详见IF指令）
7. GFC_SET：变量赋值
语法为`GFC_SET/GFC_SET_MX id x`。
会将x的值代入变量`GFC[id]`（详见IF指令），如果使用MX模式则变量值<u>不会减小！</u>
8. ENGINE：老师和伊夏的特殊动作
```
ENGINE PrimulaPVV11 x
ENGINE IxiaPVV102 y
ENGINE IxiaPVV104 z
```
分别用于护盾和闪避教学、土蛇战、森主战。
x的取值范围为-1到4，其中1到4分别为迷雾、自由闪避、冲击波、组合练习。
y的取值范围如下：
WAITING = 0,
WAITING_NOEL_ATTACK = 1,
EVENT_ACTIVATE = 2,
PRE_FLYING = 3,
QUITING = 10,
BATTLE = 11,
BATTLE_FINISHED = 20
z的取值范围为0-6，含义分别如下：
WAITING,CAGE_APPEAL,CAGE_APPEAL_EXECUTE,
CAGE_APPEAL_ABSORB,CAGE_OPEN_PREPARE,CAGE_CLOSED,END
9. 地图传送：
```
INIT_MAP_MATERIAL id 1/2
WAIT_FN MAP_TRANSFER
NEL_EXECUTE_FAST_TRAVEL id x y t
```
第一句加载地图（2表示刷新，但不知道刷新的是战斗点还是采集点），第二句负责等待第三句执行完，第三句一般推荐写成这种快速传送而不是普通的`NEL_MAP_TRANSFER a b c`，因为那个的参数更复杂。
两个id必须一致，所有地图的id位于TextAsset文件夹的`__m2d_list.txt`中，x和y为传送后的坐标，t为传送帧数（默认40）。
> 单独使用地图传送可能会不好看，可以配合黑屏淡入淡出效果。
> 快速传送后默认会停止音乐，如有需要可再次播放。
10. PE：后期特效（Post Effect）
语法为`PE x n`。
x为后期特效名，n为完成帧数（对持续性特效有效，此时-1表示撤去该特效）。
x的取值范围如下（具体效果全部为猜测，游戏中只用到了几个，已在左侧标出）：
BGM_LOWER：背景音乐音量降低，如二姐的炼金工作室
BGM_WATER：背景音乐附加水下特效
BURST：圣光爆发的白框和动态模糊
CONFUSED_CAMERA：高等级混乱状态的画面抖动
ENEMY_OVERDRIVE_APPEAR：污染体出场，具体哪一种不知道
FINAL_ALPHA：未知
FLASH：闪烁，具体闪什么不知道
GAS_APPLIED：烟雾，具体什么颜色不知道
GO_CLOSE_EYE：未知，可能是血之虹瞳？
HEARTBEAT：字面意思是心跳，可能是左侧兴奋度的粉色背景？
（已使用）HP_REDUCE：濒死，"不要，谁来救救我！"
IRISOUT：圈出？
JAMMING：摔倒？或者沼泽中的黏脚效果
LAYING_EGG：怀卵？产卵？
（已使用）M2D_VAR_0：未知
MAGICSELECT：选择魔法
MAGIC_DEVICE_ACTIVATE：习得新魔法
MP_ABSORBED：被吸收魔力
MP_REDUCE：枯竭，无法奔跑和闪避
POST_BLOOM：魔力植物长出
RAIN：雨
SHOTGUN：霰弹
SND_VOLUME_REDUCE：降低音效音量
SUMMONER_ACTIVATE：开始战斗（长按回车键）
THUNDER_TRAP：被激光打中
TS_SLOW：慢动作？
WORM_TRAPPED：掉进虫墙
（已使用）ZOOM2：镜头拉近
（已使用）ZOOM2_EATEN：镜头拉得更近？（疑似出自0.09的丸吞）
__MAX：未知
## 流程控制
到目前为止，我们遇到的所有指令组都是从上到下一条一条执行的，这叫做<u>算法的顺序结构</u>。
除了顺序结构，算法还有分歧和循环这另外两种结构，这就需要用到流程控制类指令了。
1. 条件分歧
```bat
IF '条件' {
    指令组1
}

IF '条件' {
    指令组1
} ELSE {
    指令组2
}
```
当条件成立时，执行指令组1，否则执行指令组2（没有就算了）。
条件的类型有很多种，常见的有：
`sensitive_level`：健全模式等级，范围为0-2。
`masturbate_count`：诺艾儿自慰的次数，用于休息室初体验的后续剧情。
`noel_ep`：当前兴奋度，范围为0-999。
`noel_cloth_dirty`：诺艾儿当前服装是否脏污，序章见到父亲时如果是脏的则必须洗净。
`noel_torned`：诺艾儿当前服装是否破损，会影响很多NPC的对话，健全模式下始终为未破损。
`noel_carrying_box`：（猜测）诺艾儿当前是否在搬运解谜石块。
`stomach`：饱腹度，范围为0-28。
`danger_level`：危险度，0-8为白天（0-2为绿色），9-15为晚上。
`is_night`：当前是否为晚上。
`load_version`：读取的存档版本号，具体值未知。
`summoner_barrier_active`：一个和当前战斗点有关的开关（已打勾？已暂时安全？），用于爆破炸弹任务。
`noel_bote[0]`：诺艾儿当前是否怀卵，用于卫生间的立绘控制。
`fatal_watched[snake]`：是否已观看过土蛇战败CG，理论上可以把snake改成troom_01a或troom_01b用于休息室初体验？
`SkillHas[id]`：诺艾儿是否已学会某技能，所有技能id请查阅TextAsset文件夹的skill.txt（lang_tx_skill.txt的不完整）。
`MagicHas[ID]`：诺艾儿是否已学会某魔法，所有魔法ID请查阅TextAsset文件夹的_magic_kind.txt（lang_tx_magic.txt里是小写且不完整）。
`SkillEnable[id]`：是否已启用某技能，比如关掉护盾后被家里的双闪谜题淹死就会有特殊对话。
`ItemHas[id]`：某种道具的数量（不包括仓库？）。
如`ItemHas[mtr_amethyst0]>0`表示诺艾儿持有的紫水晶数量大于0（详见六种比较运算），所有道具的id位于lang_tx_item.txt中。
`NoelCasting[ID]`：诺艾儿是否正在咏唱某魔法，例如地面炸弹教学中如果你唱了白箭就不会进入下一段剧情。
`PVV`：一个衡量剧情进度的正整数，百位为章节，后两位为章内进度，可以通过`PVV n`指令增大（不能减小！）
`GFB[PVV0_YORIMICHI]`：序章是否绕道去了飞瀑悬窟，会影响被伊夏询问"战斗了！？为什么这么乱来啊！"的回答。
`GFC[id]`：某个变量的值，可以通过GFC_SET指令改变它。
例如`GFC[PVV0_KILLED]`表示诺艾儿（在序章中？）的战败次数，初始为0。
> 数值之间可用六种比较运算：`== != >= <= > <`，
> 它们分别表示：相等、不等、大于等于、小于等于、大于、小于。
> 条件之间可用逻辑运算：`&& || !`，分别表示"且、或、非"。

例如：
`ItemHas[fruit_cherry0]==0&&ItemHas[fruit_apple0]==0`表示"血苹果和血樱桃都等于0"，
`stomach>0||GFC[TLD0]>0`表示"饱腹度大于0或已完成烹饪教学"，
`!noel_torned`表示"诺艾儿衣服完好"。
2. 固定数量的选项列表
```sql
（MSG_HOLD）
SELECT n
文本1 标签1
文本2 标签2
...
文本n 标签n

LABEL 标签1
指令组1
GOTO 标签0
LABEL 标签2
指令组2
GOTO 标签0
......
LABEL 标签n
指令组n
GOTO 标签0

LABEL 标签0
```
MSG_HOLD用于保持之前的对话框（你也不想在题干消失以后才看到选项吧）。
n为选项总个数，文本k为第k个选项显示给玩家的文本。
文本k可以直接使用`'单语言'`（用单引号是为了保护可能的空格），也可以使用`&&Select_xxx`来从localization文件夹获取某一语言的文本。
标签k为一个英文单词，必须和后面的LABEL指令对应，表示选中第k项后会跳转到该LABEL指令处从而执行指令组k。
`GOTO 标签`指令会跳转到同一标签的LABEL指令处，因此标签0成为了所有指令组k的公共出口。
> GOTO指令也可以在选项列表以外的场合使用，一般用来实现循环。
> 思考题：无条件GOTO指令的下一行一定是什么？
3. 可变数量的选项列表
```sql
（MSG_HOLD）
SELECTARRAY_CLEAR
SELECTARRAY 文本1 标签1 特殊标志 是否已读
SELECTARRAY 文本2 标签2 特殊标志
...
SELECTARRAY 文本n 标签n
（SELECT_FOCUS k-1/标签k）
SELECT -1

LABEL 标签1
指令组1
GOTO 标签0
LABEL 标签2
指令组2
GOTO 标签0
......
LABEL 标签n
指令组n
GOTO 标签0

LABEL 标签0
```
和`SELECT n`指令不同，这次没有n值来指定选项总个数了，而是使用任意多个SELECTARRAY指令来添加选项，并用`SELECT -1`表示添加完毕。
"特殊标志"一般直接写`''`表示没有，特殊写法有`C`或`S`。C表示按下取消键会选中此项（但是如果有多个C会怎么样？），S表示此项<del>禁止选中</del>（如超健全模式的土蛇战败CG）。
"是否已读"可以写1表示已读（如森主的战胜CG）或通过临时变量确定，已读时选项文本左侧会有一个对勾（如二姐、三哥、南丁格尔）。
> "特殊标志"和"是否已读"可以一起省略或只省略后者。

SELECT_FOCUS指令（非必需）用于将光标预设在某一项上，其参数可以是`标签k`（例如家里的"要去哪里呢？"）也可以是`k-1`（例如进入休息室前的"哪里有趣了…"），注意数字的写法要从0开始。
> 实际上因为SELECTARRAY指令本身可以位于条件分歧内部（所以才说是可变数量啊，某些选项满足一定条件才出现），标签k对应的数字不一定是k-1。
4. 循环
哈语言并不像高级语言一样有for或while等循环语句，一般通过临时变量配合GOTO指令实现，比如地面炸弹教学、梅法身后的一堆手下、<del>自慰和将卵排出</del>。
```bat
// 后置肯定条件循环（do loop_while）
LABEL 标签
指令组
IF '条件' GOTO 标签
```
后置肯定条件循环会<u>先至少执行1次</u>指令组，只要<u>条件成立</u>就会反复执行。
```bat
// 前置否定条件循环（do_until loop）
LABEL 标签1
IF '条件' GOTO 标签2
指令组
GOTO 标签1
LABEL 标签2
```
前置否定条件循环会<u>先判断条件</u>是否成立，只要<u>条件不成立</u>就反复执行指令组（<u>可能一次都不执行</u>），注意它要多写一个无条件GOTO和对应的LABEL。
> 对于前置否定条件循环，你可以在指令组里随时使用`GOTO 标签2`或`GOTO 标签1`来实现高级语言中的break或continue。