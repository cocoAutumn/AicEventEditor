grammar Aic;

prog : '入口：' BGNL? statement+ ;
/* prog return '[\n'+statement_0+'\n]'; */

statement
    : talker | talker_replace | hkds
    | pic | pic_mp | pic_moveA | pic_hide | pic_f | pic_s | pic_
    | msg | msg_book | tx_board
    | msg_hide | msg_hold | msg_skip | timeout | op_tl | wait
    | tuto_msg | tuto_remove
    | play_bgm | half_bgm | trigger_bgm | play_snd
    | greeting
    | pr_outfit
    | uialert
    | ui_trigger
    | danger
    | gfc_set
    | engine
    | tpmap_house |tpmap_battle | tpmap_chest | tpmap_other
    | pe
    | if_s | select | choice | do_while | until_do
    | custom
    ;

talker : '设置立绘位置：' '角色' who=Alphabet_List '水平位置' hori=Hori_List '上下偏移' vert=Vert_List ;
/* talker
color: 70
default: ["n","C",""]
*/

talker_replace : '绑定姓名音效：' '角色' who=Alphabet_List '姓名' name=Talker_List '音效' voice=Voice_List ;
/* talker_replace
color: 70
default: ["n", "Noel", "noel"]
*/

hkds
    : '设置对话框样式：' '角色' who=Alphabet_List BGNL? '对话框位置：' '水平' hori=Hori_List '上下偏移' vert=Vert_List BGNL? '对话框指向' follow=RawString '对话框边界' border=Border_List
    ;
/* hkds
color: 70
default: ["n", "C", "", "#<%>", "MONOLOGUE"]
*/

pic : '更改立绘差分：' '角色' who=Alphabet_List BGNL? '图片路径' url=RawString ;
/* pic
color: this.picColor
default: ["n", "a_3/a0__F1__f3__m1__b4_uo"]
*/

pic_mp : '立绘动态表情：' '角色' who=Alphabet_List '表情' emo=Emoji_List ;
/* pic_mp
color: this.picColor
default: ["n","SWT"]
*/

pic_moveA : '立绘动作：' '角色' who=Alphabet_List '时长' time=Int '动作' action=Action_List ;
/* pic_moveA
color: this.picColor
default: ["d", 30, "DANCE"]
*/

pic_hide : '隐藏立绘：' '角色' who=Alphabet_List ;
/* pic_hide
color: this.picColor
default: ["n"]
*/

pic_f : 'F开头的图片指令：' 'PIC_' instruction=PIC_F_List '参数（空格隔开）' args=RawString? ;
/* pic_f
color: this.picColor
default: ["FILL", "&0 DARK"]
*/

pic_s : 'S开头的图片指令：' 'PIC_' instruction=PIC_S_List '参数（空格隔开）' args=RawString? ;
/* pic_s
color: this.picColor
default: ["SWAP", "#0 #1"]
*/

pic_ : '其他图片指令：' 'PIC_' instruction=PIC_List '参数（空格隔开）' args=RawString? ;
/* pic_
color: this.picColor
default: ["HIDE_ALL",""]
*/

msg : '对话：' '角色' who=Alphabet_List '对话框样式' style=Style_List BGNL? text=Text_Multi ;
/* msg
helpUrl: https://www.bilibili.com/read/cv24591788
color: this.msgColor
default: ["n", "", "一行最多16字，一页最多5行。\n上方注音：<rb c=\"Cradle\">摇篮</rb>\n<big>38号字<small>12号字\n*\n这是第二页，右击帮助查看更多。"]
*/

msg_book : '书页：' '水平位置' hori=Hori_List '上下偏移' vert=Vert_List BGNL? text=Text_Multi ;
/* msg_book
color: this.msgColor
default: ["L", "", "学园首屈一指的才女，\n柯涅尔家让人骄傲的小女儿。\n虽然诺艾儿觉得自己\n并没有资格拥有这两个头衔，\n但只是装装样子的话应该没问题吧。"]
*/

tx_board : '告示牌/书信：' '_eventboard_' id=RawString BGNL? '普通2/花边3/书信4：' style=Int '需在tx_event.txt中填写内容' ;
/* tx_board
color: this.msgColor
default: ["house_witchboard_00", 3]
*/

msg_hide : '隐藏所有对话框' ;
/* msg_hide
color: 120
*/
msg_hold : '保持对话框（可配合SELECT）' ;
/* msg_hold
color: 120
*/
msg_skip : '打断对话框（需放入延迟0执行）' ;
/* msg_skip
color: 120
*/

wait : '等待' tick=Int '帧' ;
/* wait default: [60] */

timeout : '延迟执行：' '帧数' tick=Int '（0为下一对话显示完成时）' BGNL? Newline instructions=statement+ ;
/* timeout default: [60] */

op_tl : '终止延迟：' operation=TL_List ;

tuto_msg : '操作提示：' tuto=Tuto_List '位置（T/C/B）' pos=RawString ;
/* tuto_msg default: ["collect", "T"] */

tuto_remove : '移除操作提示：' '全部' all=Bool ;

play_bgm : '切换音乐：' 'BGM_' bgm=BGM_List '淡出帧数' fadeout=Int '淡入帧数' fadein=Int ;

half_bgm : '音乐音量是否减半：' half=Bool ;

trigger_bgm : '暂停/继续音乐：' '是否暂停' stop=Bool '淡出/淡入帧数' tick=Int ;

play_snd : '播放声效：' snd=SND_List ;

pr_outfit : '换装：' '是否睡裙' BABYDOLL=Bool ;

ui_trigger : '显隐左侧立绘：' '是否隐藏' DISABLE=Bool ;

greeting : '立正：' '诺艾儿位于哪一侧（L/R/@）' dir=RawString '距离' dist=RawString? ;
/* greeting
color: this.otherColor
default: ["@", "10"]
*/

uialert : '左下角警告：' text=RawString ;
/* uialert
color: this.otherColor
default: ["自动保存完成。"]
*/

danger : '设置危险度：' danger=Int '无渐变' immediate=Bool ;
/* danger
color: this.otherColor
default: [9, false]
*/

gfc_set : '变量赋值：' 'GFC[' id=RawString '] = ' value=RawString '不减少' max=Bool ;
/* gfc_set
color: this.otherColor
default: ["PVV0_KILLED", "GFC[PVV0_KILLED]+1", false]
*/

engine : '老师/伊夏特殊动作：' '角色' who=Engine_List '动作编号' id=Int ;
/* engine
color: this.otherColor
default: ["PrimulaPVV11", 1]
*/

tpmap_house : '地图传送（家里）：' mapid=House_List 'x=' x=Int 'y=' y=Int ;
/* tpmap_house
color: this.otherColor
default: ["house_road", 30, 0]
*/

tpmap_battle : '地图传送（战斗）：' mapid=Battle_List 'x=' x=Int 'y=' y=Int ;
/* tpmap_battle
color: this.otherColor
default: ["forest_mushpot", 22, 18]
*/

tpmap_chest : '地图传送（宝箱）：' mapid=Chest_List 'x=' x=Int 'y=' y=Int ;
/* tpmap_chest
color: this.otherColor
default: ["forest_tc", 22, 18]
*/

tpmap_other : '地图传送（其他）：' mapid=Map_Other_List 'x=' x=Int 'y=' y=Int ;
/* tpmap_other
color: this.otherColor
default: ["forest_ruin_station", 22, 18]
*/

pe : '后期特效：' effect=PE_List '完成帧数（-1表示撤去）' tick=RawString ;
/* pe
color: this.otherColor
default: ["ZOOM2", "60"]
*/

if_s : '如果：' cond=RawString BGNL? then_=statement+ '否则：' BGNL? else_=statement+ ;
/* if_s
color: this.flowColor
default: ["is_night"]
*/

select : '选项列表：' BGNL? choices=choice+ ;
/* select
color: this.flowColor
*/

choice : '子选项：' text=RawString BGNL? instructions=statement+ ;
/* choice
color: 260
default: ["不害怕"]
*/

do_while : '循环：重复以下' BGNL? instructions=statement+ '只要' cond=RawString ;
/* do_while
color: this.flowColor
default: ["noel_cloth_dirty"]
*/

until_do : '循环：除非' cond=RawString BGNL? instructions=statement+ '否则重复以上' ;
/* until_do
color: this.flowColor
default: ["noel_torned"]
*/

custom : '原生指令：' instruction=RawString ;
/* custom
color: 300
default: ["// 这是注释"]
*/

statExprSplit : '=== statement ^ === expression v ===' ;

BGNL : '\n' ;
Bool : 'true' | 'false' ;
Int : '0' | [1-9][0-9]* ;
RawString : .* ;
Text_Multi : .* ;

Alphabet_List
    : 'a'|'书页'|'c'|'提尔德'|'e'|'德尔菲尼'|'梅法'|'h'|'伊夏'|'j'|'k'|'阿尔玛'|'m'|'诺艾儿'|'诺艾儿（浴室）'|'普莉姆拉'|'q'|'r'|'奥斯托利亚'|'南丁格尔'|'u'|'丽薇歌塔'|'瓦罗斯'|'x'|'y'|'z'
    /*Alphabet_List ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','nb','p','q','r','s','t','u','v','w','x','y','z']*/;

Hori_List : 'LL'|'L'|'CL'|'CCL'|'C'|'CCR'|'CR'|'R'|'RR';

Vert_List : '上'|'中'|'下'/*Vert_List ['T','','B']*/;

Talker_List
    : '（不变）'|'阿尔玛・奥普菲帕姆'|'士兵'|'兽人山民'|'客人'|'精灵大姐姐'|'精灵男性'|'精灵学生'|'精灵女性'|'村庄卫兵'|'伊夏・波利斯塔切尔'|'伊夏的法杖'|'丽薇歌塔・柯涅尔'|'梅法・格里亚德'|'＊'|'南丁格尔'|'诺艾儿・柯涅尔'|'诺艾儿的法杖'|'德尔菲尼・柯涅尔'|'奥斯托利亚'|'普莉姆拉老师'|'士兵'|'提尔德・柯涅尔'|'？？？'|'瓦罗斯'
    /*Talker_List ["'='",'Alma','Army','beastman','Customer','elf_madam','elf_man','elf_student','elf_woman','Guard','Ixia','IxiaCane','Laevi','Mepha','Mob','Nightingale','Noel','NoelCane','NoelDad','Ostrea','Primula','Soldier','Tilde','Unknown','Walross']*/;

Voice_List
    : '（静音）'|'爱丽丝'|'阿尔玛'|'法杖'|'村庄卫兵'|'伊夏'|'丽薇歌塔'|'普莉姆拉'|'瓦罗斯'|'奥斯托利亚'|'梅法'|'梅法（噪音）'|'南丁格尔'|'德尔菲尼'|'诺艾儿'|'提尔德'
    /*Voice_List ["''",'alice','alma','cane','guard','ixia','levi','m1','mob_m1','mob_m2','mob_w3','mob_w3_noise','nightingale','nodad','noel','tilde']*/;

Border_List : '\'=\''|'TT'|'WIDE'|'WIDE_TT'|'MONOLOGUE';

Emoji_List
    : '傲娇'|'不服'|'脸红'|'冒气'|'蓝竖线'|'红叹号'|'叹问号'|'一个心'|'三个心'|'黄星星'|'红黄牌'|'黄灯泡'|'玉米粒'|'蓝问号'|'黑螺旋'|'白泡泡'|'一滴汗'|'很多汗'|'点点点'
    /*Emoji_List ['ANG','AWK','BLS','BSM','DEP','EXC','EXQ','HEA','HEA2','KIR','LAG','LIG','PLE','QUE','SMK','SWB','SWT','SWT2','TTT']*/;

Action_List
    : 'NONE'|'HOP'|'SCARY'|'FLY'|'CAR'|'SCARY2'|'ANGER'|'LOVELY'|'BLINK'|'JUMP'|'JUMPB'|'WEEKHITL'|'WEEKHITR'|'SHAKE'|'BLINK2'|'ZOOM2'|'ZOOM3'|'ZOOM4'|'ALP50'|'DANCE'|'SIN_H'|'SIN_V';

PIC_F_List
    : '填充'|'闪烁'|'自适应'|'自适应所有'|'翻转'|'翻转X'|'翻转Y'|'淡入'|'淡出'
    /*PIC_F_List ['FILL','FLASH','FINE','FINE_ALL','FLIP','FX','FY','FADEIN','FADEOUT']*/;

PIC_S_List
    : '交换'|'SILHOUETTE'|'SWIN'|'SWIN2'|'SWIN_G'|'SWIN_SHADOW'|'SWIN_PASTE'
    /*PIC_S_List ['SWAP']*/;

PIC_List
    : '隐藏所有图片'|'显示背景图'|'CLEAR_TERM_CACHE'|'MVA_WHOLE'|'MOVE'|'MOVE2'|'RADIATION'|'RECT'|'REM'|'RIDE'|'TFADE'
    /*PIC_List ['HIDE_ALL','B']*/;

Style_List : '常规'|'剑山'|'心想'|'泡泡'|'法杖'|'噪音'
    /*Style_List ['','<angry>','<think>','<circ>','<device>','<device><noise>']*/;

TL_List
    : '立即执行（不等待帧数）'|'立即执行（不等待对话）'|'放弃执行（不等待帧数）'|'放弃执行（不等待对话）'
    /*TL_List ['DOTL','DOMTL','CLEARTL','CLEARMTL']*/;

Tuto_List
    : '采集'|'轻攻击'|'魔法'|'地图'|'起身'|'爬行'|'地面炸弹'|'菜单'|'护盾'|'闪避'|'闪避3次'|'闪避2次'|'闪避1次'|'火球'|'滑铲'|'搬运石块'|'撤离'|'立刻撤离！'|'圣光爆发'
    /*Tuto_List ['collect','punch','magic','map','wakeup','crouch','magic_dropbomb','menu','guard','evade','evade_0','evade_1','evade_2','fireball','sliding','box_release','goback','goback_strong','magic_burst']*/;

BGM_List
    : '标题画面'|'风（BGS）'|'编织者之森'|'史莱姆教学'|'柯涅尔工房（昼）'|'柯涅尔工房（夜）'|'伊夏（昼）'|'伊夏（夜）'|'伊夏（战斗）'|'丽薇歌塔'|'提尔德'|'德尔菲尼'|'蝉鸣（BGS）'|'普莉姆拉（出场）'|'普莉姆拉（讲故事）'|'普莉姆拉（墓前）'|'普莉姆拉（教学）'|'过夜（ME）'|'烹饪教学'|'炼金手册'|'休息室（准备）'|'休息室（成功）'|'休息室（失败）'|'水下（BGS）'|'南丁格尔'|'土蛇战败'|'人偶护符'|'阿尔玛'|'奥斯托利亚'|'蛊惑之沼（关门）'|'爆破现场'|'圣光爆发'|'森之领主'|'要迟到了'
    /*BGM_List ['title','wind','forest','herghost','cornehl','cornehl_night','ixia','ixia_night','ixia_battle','popsup','tilde','town4','suzumusi','primula','tuuzyou','light','luminous_particle','inn','valentine','c_sign','tokimeki','yatto_deaeta','bukiyou_na_hutari','underwater','shopping','fatal_huon','degree45','sohunosyosai','hunter_minarai','yocho','madhatter','killing','battle_nusi','morinokioku']*/;

SND_List
    : 'absorb_guchu'|'cloth_off'|'cloth_off_0'|'cloth_off_1'|'door_storeportal_open'|'door_wood_s_open'|'dora_ring'|'flashback_noise'|'foot_leafground_ev2'|'foot_sand'|'get_item'|'gimmick_keyboard'|'ground_gogogo'|'insect_rape2'|'itembox_appear'|'nusi_inject'|'nusivo_grawl'|'orgasm'|'paper'|'ping'|'pr_down'|'pr_hit_wall'|'prko_s'|'puni'|'restroom_flush'|'restroom_pee'|'restroom_shower'|'small_hit'|'step_stair'|'tsukkomi';

Engine_List
    : '老师教学'|'土蛇战'|'森主战'
    /* Engine_List ['PrimulaPVV11','IxiaPVV102','IxiaPVV104']*/;

House_List
    : '正门前'|'庭院'|'杂货店'|'厨房'|'自己的房间'|'姐姐的工房'|'后院'|'墓地'|'血池'|'强化插槽'|'双重闪避'|'鸟笼左侧'|'休息室'
    /*House_List ['house_road','house_center','house_shop','house_hall','house_noelroom','house_atelier','house_barn','house_cliff','house_lake','house_cliff_cave','house_puzzle_cliffcave','house_cave2forest','house_theroom']*/;

Battle_List
    : '穿林日光之庭'|'鸟笼'|'鲜血镇压者'|'暗夜帷幕'|'孢子舞台'|'卑鄙的后勤兵'|'盗掘者'|'飞瀑悬窟'|'蛊惑之沼'|'遛狗公园'|'沐风中庭'|'土龙巢穴'|'古驿夜宴'|'黄昏骤雨'|'空中回廊'|'裂隙看守者'|'笼中余祸'|'迷途者'|'酸池深渊'|'酸木前餐'|'匣中恶魔'|'小心头顶'|'旋转木马'|'装配实验间'|'湖面蜃景'|'机关人偶'|'菌丝之王'|'酸湖下的猬鼠'|'炎舞神乐'|'欲壑与泥潭'|'森之领主'
    /*Battle_List ['forest_01','forest_athletic_thorn_under','forest_tomato','forest_cliff_portal','forest_mushpot','forest_tikuwar','forest_toybox','forest_wood_slash','forest_swamp','forest_senzyo2cliff','forest_wind_senzyo','forest_senzyo','forest_rwood_column','forest_darkpot','forest_wood_right_exit','forest_treecrack','forest_geckoland','forest_coroseum','forest_nightacid','forest_wood_hall','forest_darkpotu','forest_mush_narrow','forest_buibui','forest_toylabo','forest_wood_nightlake','forest_clocktower','forest_mush_coroseum','forest_acid_lake','forest_foxhall','forest_coroseum_frog','forest_nusi_coroseum']*/;

Chest_List
    : '旋风斩击'|'彗星俯冲'|'突进冲击'|'凌空横斩'|'护盾冲击'|'环轨护盾'|'血之虹瞳'|'抓地鞋'|'超载咏唱'|'猫之缓降'|'盗垒滑步'|'祈雨御守'|'恐高症'|'藏巧守拙'|'长法杖'|'濡湿预兆'|'金币+100'|'强化插槽'|'过充插槽'|'土蛇左侧HP'|'土蛇右侧HP'|'巨人右侧HP'|'木马下方HP'|'瓦罗斯左侧HP'|'清水MP+20'|'圣光爆发'
    /*Chest_List ['forest_puzzle_worms','forest_athletic_tikuwafall','forest_puzzle_mesher','forest_wind_thorn','forest_puzzle_water','forest_athletic_thunder_wood','forest_darkpot_r','forest_puzzle_water2','forest_wood_hall','forest_puzzle_timer','forest_puzzle_hame','forest_box_puzzle','forest_puzzle_burnivy','forest_athletic_ladder','forest_coroseum','forest_frog_pre','forest_puzzle_ctop','forest_puzzle_ct','forest_sea','forest_tc','forest_senzyort','forest_presser_mine','forest_wood_extender_puzzle','forest_ruin_hall','forest_lava_secret','forest_burst_treasure']*/;

Map_Other_List
    : '阿尔玛同学'|'阿尔玛右侧'|'暗夜帷幕左侧'|'孢子舞台左下'|'初始清水'|'初始清水右侧'|'大桥和矿洞'|'蛊惑之沼上方'|'护盾冲击右侧'|'彗星俯冲上方'|'精灵之村入口'|'空中回廊右侧'|'空中回廊左侧'|'恐高症左侧'|'裂隙看守者左侧'|'沐风中庭下方'|'鸟笼上方'|'鸟笼右下'|'森之领主右侧'|'森之领主左侧'|'上层横风场'|'圣光爆发上方'|'酸木前餐上方'|'土龙巢穴上方'|'瓦罗斯施工现场'|'小心头顶右下'|'小心头顶左侧'|'旋转木马右侧'|'炎舞神乐上方'|'炎舞神乐左侧'|'欲壑与泥潭左侧'|'装配实验间左侧'
    /*Map_Other_List ['forest_ruin_station','forest_ruin_road','forest_hirobau','forest_athletic_tikuwa_thorn','forest_secret_lake','forest_secr_in','forest_hiroba','forest_ostrea_swampt','forest_column','forest_acid_dobadoba','forest_satoentrance','forest_wood_wip','forest_wood_rcolumn','forest_rt_lavaroad','forest_c','forest_01t','forest_ahletic_home_thorn','forest_ahletic_tikuwa','forest_nusi_right','forest_nusi_pre','forest_roft_wind','forest_entrance_grazia','forest_wood_cross','forest_senzyot','forest_ruin_station_r','forest_thunder_dancing','forest_lava_coming','forest_wood_matoate','forest_falltemp','forest_foxhall_pre','forest_frog_left','forest_toylabo_pre']*/;

PE_List
    : '音乐减弱'|'音乐水下'|'圣光爆发'|'混乱镜头'|'污染体出场'|'最终阿尔法'|'闪烁'|'气体'|'近视'|'心跳'|'濒死'|'圈出'|'果酱'|'产卵'|'M2D_VAR_0'|'选择魔法'|'魔法设备激活'|'被吸收魔力'|'枯竭'|'开花'|'雨'|'霰弹'|'音效减弱'|'开始战斗'|'触电'|'慢动作'|'虫墙'|'镜头拉近'|'丸吞'|'__MAX'
    /* PE_List ['BGM_LOWER','BGM_WATER','BURST','CONFUSED_CAMERA','ENEMY_OVERDRIVE_APPEAR','FINAL_ALPHA','FLASH','GAS_APPLIED','GO_CLOSE_EYE','HEARTBEAT','HP_REDUCE','IRISOUT','JAMMING','LAYING_EGG','M2D_VAR_0','MAGICSELECT','MAGIC_DEVICE_ACTIVATE','MP_ABSORBED','MP_REDUCE','POST_BLOOM','RAIN','SHOTGUN','SND_VOLUME_REDUCE','SUMMONER_ACTIVATE','THUNDER_TRAP','TS_SLOW','WORM_TRAPPED','ZOOM2','ZOOM2_EATEN','__MAX']*/;

MeaningfulSplit : '=== meaningful ^ ===' ;

/* Call_BeforeType
this.evisitor.picColor = 190;
this.evisitor.msgColor = 120;
this.evisitor.otherColor = 30;
this.evisitor.flowColor = 220;
*/


/* Call_AfterAllContent

this.js._text.map(key=>{this.js[key]=this.js[key].replace(/Aic/g,'aic')})

this.html._name = 'no-using.html'
this.js._name = grammarName.replace(/Aic/g,'aic') + '.js'
this.js.debugFunctions=(()=>{ 
// debugFunctions
function copyjson() { // 复制当前json到剪贴板
    var a = document.getElementById('codeArea');
    a.focus();
    a.setSelectionRange(0, a.value.length);
    try {
        document.execCommand('copy');
        alert('当前json已复制到剪贴板，可粘贴到记事本以供下次还原为积木。');
    } catch (e) {
        alert('复制失败！请手动从页面下方的文本框全选复制。');
    }
    a.rows = a.value.split('\n').length;
    a.blur();
}

function rebuild() { // 弹窗粘贴json，还原到积木
    var s = prompt('请粘贴要用于重建积木的json代码:');
    try {
        s = s.replace(/[<>&]/g, c => ({ '<': '&lt;', '>': '&gt;', '&': '&amp;' }[c]));
        aicFunctions.parse({ "type": "prog", "statement_0": JSON.parse(s) });
    } catch (e) {
        alert('重建失败！请检查所粘贴json是否正确。');
    }
}

function compile() { // 编译json得到哈语言和对话txt
    let id = prompt('请输入事件id:', 's10_4c_srng');
    if (typeof id !== 'string' || id.length <= 0) return;
    let loop = 0, ch = 0, book = 0; // LABEL和BOOK计数器
    let txt = '', msg = 0; // 对话文本及其计数器
    var f = function (o) {
        switch (o.type) {
            case 'talker':
                return `TALKER ${o.who} ${o.hori + o.vert}`;
            case 'talker_replace':
                return `TALKER_REPLACE ${o.who} ` + (
                    o.voice === "''" ? "''" : 'talk_' + o.voice
                );
            case 'hkds':
                return `HKDS ${o.who} ${o.hori + o.vert} ${o.follow} ${o.border}`;
            case 'pic':
                return `PIC ${o.who} ${o.url}`;
            case 'pic_mp':
                return `PIC_MP ${o.who} ${o.emo}`;
            case 'pic_moveA':
                return `PIC_MOVEA ${o.who} ${o.time} ${o.action}`;
            case 'pic_hide':
                return `PIC_HIDE ${o.who}`;
            case 'pic_f':
            case 'pic_s':
            case 'pic_':
                return `PIC_${o.instruction} ${o.args}`;
            case 'msg_hide':
            case 'msg_hold':
            case 'msg_skip':
                return o.type.toUpperCase();
            case 'wait':
                return 'WAIT ' + o.tick;
            case 'timeout':
                const tl = o.tick > 0 ? 'TL ' + o.tick + ' ' : 'MTL ';
                return o.instructions.map(x => tl + f(x)).join('\n');
            case 'op_tl':
                return o.operation;
            case 'tuto_msg':
                return `TUTO_MSG Tuto_${o.tuto}\nTUTO_CAP C ${o.pos}`;
            case 'tuto_remove':
                return 'TUTO_REMOVE' + (o.all ? '_ALL' : '');
            case 'play_bgm':
                return `LOAD_BGM BGM_${o.bgm}\nREPLACE_BGM ${o.fadeout} ${o.fadein}`;
            case 'half_bgm':
                return 'HALF_BGM ' + (o.half ? 1 : 0);
            case 'trigger_bgm':
                return (o.stop ? 'STOP' : 'START') + '_BGM ' + o.tick;
            case 'play_snd':
                return 'SND ' + o.snd;
            case 'pr_outfit':
                return '#<%>\nPR_OUTFIT ' + (o.BABYDOLL ? 'BABYDOLL' : 'NORMAL');
            case 'ui_trigger':
                return 'UI_' + (o.DISABLE ? 'DIS' : 'EN') + 'ABLE';
            case 'greeting':
                return `GREETING ${o.dir} ${o.dist}`;
            case 'uialert':
                return "UIALERT '" + o.text + "'";
            case 'danger':
                return `DANGER ${o.danger} ${o.immediate}`;
            case 'gfc_set':
                return 'GFC_SET' + (o.max ? '_MX ' : ' ') + o.id + ' ' + o.value;
            case 'engine':
                return `ENGINE ${o.who} ${o.id}`;
            case 'tpmap_house':
            case 'tpmap_battle':
            case 'tpmap_chest':
            case 'tpmap_other':
                return `INIT_MAP_MATERIAL ${o.mapid} 1\n` +
                    'WAIT_FN MAP_TRANSFER\n' +
                    `NEL_EXECUTE_FAST_TRAVEL ${o.mapid} ${o.x} ${o.y}`;
            case 'pe':
                return `PE ${o.effect} ${o.tick}`;
            case 'if_s':
                return `IF '${o.cond}' {\n` +
                    o['then_'].map(x => f(x)).join('\n') +
                    '\n} ELSE {\n' +
                    o['else_'].map(x => f(x)).join('\n') +
                    '\n}';
            case 'custom':
                return o.instruction;
            case 'do_while':
                var l = ++loop;
                return `LABEL loop${l}\n` +
                    o.instructions.map(x => f(x)).join('\n') +
                    `\nIF '${o.cond}' GOTO loop${l}`;
            case 'until_do':
                var l = ++loop;
                return `LABEL loop${l}\nIF '${o.cond}' GOTO end${l}\n` +
                    o.instructions.map(x => f(x)).join('\n') +
                    `\nGOTO loop${l}\nLABEL end${l}`;
            case 'select':
                var s = 'SELECT ' + o.choices.length;
                var c = ++ch;
                for (let i = 0; i < o.choices.length; ++i)
                    s += `\n'${o.choices[i].text}' ch${c}_${i + 1}`;
                for (let i = 0; i < o.choices.length; ++i)
                    s += `\nLABEL ch${c}_${i + 1}\n` +
                        o.choices[i].instructions.map(x => f(x)).join('\n') +
                        `\nGOTO ch${c}_end`;
                return s + `\nLABEL ch${c}_end`;
            case 'msg_book':
                var suffix = book < 10 ? '0' + book : book;
                ++book;
                txt += `*${id} b${suffix}\n${o.text}\n`;
                return 'MSG BOOK@' + o.hori + o.vert + '_b' + suffix;
            case 'tx_board':
                return 'TX_BOARD _eventboard_' + o.id + ' ' + o.style;
            case 'msg':
                ++msg;
                var suffix = msg < 10 ? '0' + msg : msg;
                txt += `*${id} ${o.who}_${suffix}\n${o.style}${o.text}\n`;
                return 'MSG ' + o.who + '_' + suffix;
        }
        return '';
    }
    let s = JSON.parse(document.getElementById('codeArea').value);
    var blob = new Blob([s.map(x => f(x)).join('\n')], { type: 'text/plain;charset=utf-8' });
    if (window.navigator.msSaveOrOpenBlob)
        window.navigator.msSaveBlob(blob, id + '.cmd.txt'); // 文件名
    else {
        var href = window.URL.createObjectURL(blob);
        var elem = window.document.createElement('a');
        elem.href = href;
        elem.download = id + '.cmd.txt'; // 文件名
        document.body.appendChild(elem);
        elem.click();
        document.body.removeChild(elem);
        window.URL.revokeObjectURL(href);
    }
    if (txt.length > 0) {
        var a = document.getElementById('codeArea');
        a.innerHTML = txt;
        a.focus();
        a.setSelectionRange(0, a.value.length);
        try {
            document.execCommand('copy');
            alert('对话内容已复制到剪贴板，请自行保存到记事本等处。');
        } catch (e) {
            alert('复制对话内容失败！请手动从页面下方的文本框全选复制。');
        }
        a.rows = a.value.split('\n').length;
        a.blur();
    }
}

Blockly.bindEventWithChecks_(workspace.svgGroup_,"wheel",workspace,function(e){
    e.preventDefault();
    var hvScroll = e.shiftKey?'hScroll':'vScroll';
    workspace.scrollbar[hvScroll].handlePosition_+=( ((e.deltaY||0)+(e.detail||0)) >0?20:-20);
    workspace.scrollbar[hvScroll].onScroll_();
    workspace.setScale(workspace.scale);
});

}).toString().slice(5,-1)
this.js.toolbox=(()=>{ 

var toolbox = (function(){

    var toolboxXml=document.createElement('xml')

    // 调整这个obj来更改侧边栏和其中的方块
    // 可以直接填 '<block type="xxx">...</block>'
    // 标签 '<label text="标签文本"></label>'
    var toolboxObj = {
        // 每个键值对作为一页
        "未分类": [
            aicBlocks["prog"].xmlText(),
            aicBlocks["wait"].xmlText(),
            aicBlocks["timeout"].xmlText(),
            aicBlocks["op_tl"].xmlText(),
            aicBlocks["tuto_msg"].xmlText(),
            aicBlocks["tuto_remove"].xmlText(),
            aicBlocks["play_bgm"].xmlText(),
            aicBlocks["half_bgm"].xmlText(),
            aicBlocks["trigger_bgm"].xmlText(),
            aicBlocks["play_snd"].xmlText(),
            aicBlocks["pr_outfit"].xmlText(),
            aicBlocks["ui_trigger"].xmlText()
        ],
        "图片类": [
            aicBlocks["talker"].xmlText(),
            aicBlocks["talker_replace"].xmlText(),
            aicBlocks["hkds"].xmlText(),
            aicBlocks["pic"].xmlText(),
            aicBlocks["pic_mp"].xmlText(),
            aicBlocks["pic_moveA"].xmlText(),
            aicBlocks["pic_hide"].xmlText(),
            aicBlocks["pic_f"].xmlText(),
            aicBlocks["pic_s"].xmlText(),
            aicBlocks["pic_"].xmlText()
        ],
        "对话类": [
            aicBlocks["msg_hide"].xmlText(),
            aicBlocks["msg_hold"].xmlText(),
            aicBlocks["msg_skip"].xmlText(),
            aicBlocks["msg"].xmlText(),
            aicBlocks["msg_book"].xmlText(),
            aicBlocks["tx_board"].xmlText()
        ],
        "其他类": [
            aicBlocks["greeting"].xmlText(),
            aicBlocks["uialert"].xmlText(),
            aicBlocks["danger"].xmlText(),
            aicBlocks["gfc_set"].xmlText(),
            aicBlocks["engine"].xmlText(),
            aicBlocks["tpmap_house"].xmlText(),
            aicBlocks["tpmap_battle"].xmlText(),
            aicBlocks["tpmap_chest"].xmlText(),
            aicBlocks["tpmap_other"].xmlText(),
            aicBlocks["pe"].xmlText()
        ],
        "流程控制": [
            aicBlocks["custom"].xmlText(),
            aicBlocks["if_s"].xmlText(),
            aicBlocks["select"].xmlText(),
            aicBlocks["do_while"].xmlText(),
            aicBlocks["until_do"].xmlText()
        ]
    }

    var getCategory = function(toolboxXml,name,custom){
        var node = document.createElement('category');
        node.setAttribute('name',name);
        if(custom)node.setAttribute('custom',custom);
        toolboxXml.appendChild(node);
        return node;
    }

    var toolboxGap = '<sep gap="3"></sep>'

    for (var name in toolboxObj){
        var custom = null;
        if(name=='xxxxxx')custom='xxxxxx';
        if(name=='zzzzzz')custom='zzzzzz';
        getCategory(toolboxXml,name,custom).innerHTML = toolboxObj[name].join(toolboxGap);
        var node = document.createElement('sep');
        node.setAttribute('gap',0*3);
        toolboxXml.appendChild(node);
    }

    return toolboxXml;
})();


}).toString().slice(5,-1)
this.js.checkUpdateFunction=(()=>{ 

function omitedcheckUpdateFunction(event) {
    // console.log(event);
    var codeAreaElement = document.getElementById('codeArea');
    var preRender=function(data){return '[\n'+JSON.parse(data).map(v=>JSON.stringify(v)).join(',\n')+'\n]'}
    var codeAreaFunc = function(err,data){document.getElementById('codeArea').innerHTML=err?String(err):preRender(data)};
    try {
        var code = Blockly.JavaScript.workspaceToCode(workspace);
        codeAreaFunc(null,code);
    } catch (error) {
        codeAreaFunc(error,null);
        if (error instanceof OmitedError ||error instanceof MultiStatementError){
            var blockName = error.blockName;
            var varName = error.varName;
            var block = error.block;
        }
        console.log(error);
    }
}

workspace.addChangeListener(omitedcheckUpdateFunction);


}).toString().slice(5,-1)
this.js.BlocklyInject=(()=>{ 


var workspace = Blockly.inject('blocklyDiv',{
    media: './media/',
    toolbox: toolbox,
    zoom:{
        controls: true,
        wheel: false,//false
        startScale: 1.0,
        maxScale: 3,
        minScale: 0.3,
        scaleSpeed: 1.08
    },
    trashcan: false,
});
aicFunctions.workspace = function(){return workspace}


}).toString().slice(5,-1)

*/