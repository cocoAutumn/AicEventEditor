// Generated from aic.g4 by antlr-blockly
// 语句集合和表达式集合
aicBlocks = {
    "statement": [
        "talker","talker_replace","hkds","pic","pic_mp","pic_moveA","pic_hide","pic_f","pic_s","pic_","msg","msg_book","tx_board","msg_hide","msg_hold","msg_skip","timeout","op_tl","wait","tuto_msg","tuto_remove","play_bgm","half_bgm","trigger_bgm","play_snd","greeting","pr_outfit","uialert","ui_trigger","danger","gfc_set","engine","tpmap_house","tpmap_battle","tpmap_chest","tpmap_other","pe","if_s","select","choice","do_while","until_do","custom"
    ]
}

// 所有域的默认行为
Object.assign(aicBlocks,{
    "BGNL": {
        "type": "input_dummy"
    },
    "Bool": {
        "type": "field_checkbox",
        "checked": true
    },
    "Int": {
        "type": "field_number",
        "value": 0,
        "min": 0,
        "precision": 1
    },
    "RawString": {
        "type": "field_input",
        "text": "RawString_default"
    },
    "Text_Multi": {
        "type": "field_multilinetext",
        "text": "Text_Multi_default"
    },
    "Alphabet_List": {
        "type": "field_dropdown",
        "options": [
            ["a","a"],
            ["书页","b"],
            ["c","c"],
            ["提尔德","d"],
            ["e","e"],
            ["德尔菲尼","f"],
            ["梅法","g"],
            ["h","h"],
            ["伊夏","i"],
            ["j","j"],
            ["k","k"],
            ["阿尔玛","l"],
            ["m","m"],
            ["诺艾儿","n"],
            ["诺艾儿（浴室）","nb"],
            ["普莉姆拉","p"],
            ["q","q"],
            ["r","r"],
            ["奥斯托利亚","s"],
            ["南丁格尔","t"],
            ["u","u"],
            ["丽薇歌塔","v"],
            ["瓦罗斯","w"],
            ["x","x"],
            ["y","y"],
            ["z","z"]
        ],
        "default": "a"
    },
    "Hori_List": {
        "type": "field_dropdown",
        "options": [
            ["LL","LL"],
            ["L","L"],
            ["CL","CL"],
            ["CCL","CCL"],
            ["C","C"],
            ["CCR","CCR"],
            ["CR","CR"],
            ["R","R"],
            ["RR","RR"]
        ],
        "default": "LL"
    },
    "Vert_List": {
        "type": "field_dropdown",
        "options": [
            ["上","T"],
            ["中",""],
            ["下","B"]
        ],
        "default": "T"
    },
    "Talker_List": {
        "type": "field_dropdown",
        "options": [
            ["（不变）","'='"],
            ["阿尔玛・奥普菲帕姆","Alma"],
            ["士兵","Army"],
            ["兽人山民","beastman"],
            ["客人","Customer"],
            ["精灵大姐姐","elf_madam"],
            ["精灵男性","elf_man"],
            ["精灵学生","elf_student"],
            ["精灵女性","elf_woman"],
            ["村庄卫兵","Guard"],
            ["伊夏・波利斯塔切尔","Ixia"],
            ["伊夏的法杖","IxiaCane"],
            ["丽薇歌塔・柯涅尔","Laevi"],
            ["梅法・格里亚德","Mepha"],
            ["＊","Mob"],
            ["南丁格尔","Nightingale"],
            ["诺艾儿・柯涅尔","Noel"],
            ["诺艾儿的法杖","NoelCane"],
            ["德尔菲尼・柯涅尔","NoelDad"],
            ["奥斯托利亚","Ostrea"],
            ["普莉姆拉老师","Primula"],
            ["士兵","Soldier"],
            ["提尔德・柯涅尔","Tilde"],
            ["？？？","Unknown"],
            ["瓦罗斯","Walross"]
        ],
        "default": "'='"
    },
    "Voice_List": {
        "type": "field_dropdown",
        "options": [
            ["（静音）","''"],
            ["爱丽丝","alice"],
            ["阿尔玛","alma"],
            ["法杖","cane"],
            ["村庄卫兵","guard"],
            ["伊夏","ixia"],
            ["丽薇歌塔","levi"],
            ["普莉姆拉","m1"],
            ["瓦罗斯","mob_m1"],
            ["奥斯托利亚","mob_m2"],
            ["梅法","mob_w3"],
            ["梅法（噪音）","mob_w3_noise"],
            ["南丁格尔","nightingale"],
            ["德尔菲尼","nodad"],
            ["诺艾儿","noel"],
            ["提尔德","tilde"]
        ],
        "default": "''"
    },
    "Border_List": {
        "type": "field_dropdown",
        "options": [
            ["'='","'='"],
            ["TT","TT"],
            ["WIDE","WIDE"],
            ["WIDE_TT","WIDE_TT"],
            ["MONOLOGUE","MONOLOGUE"]
        ],
        "default": "'='"
    },
    "Emoji_List": {
        "type": "field_dropdown",
        "options": [
            ["傲娇","ANG"],
            ["不服","AWK"],
            ["脸红","BLS"],
            ["冒气","BSM"],
            ["蓝竖线","DEP"],
            ["红叹号","EXC"],
            ["叹问号","EXQ"],
            ["一个心","HEA"],
            ["三个心","HEA2"],
            ["黄星星","KIR"],
            ["红黄牌","LAG"],
            ["黄灯泡","LIG"],
            ["玉米粒","PLE"],
            ["蓝问号","QUE"],
            ["黑螺旋","SMK"],
            ["白泡泡","SWB"],
            ["一滴汗","SWT"],
            ["很多汗","SWT2"],
            ["点点点","TTT"]
        ],
        "default": "ANG"
    },
    "Action_List": {
        "type": "field_dropdown",
        "options": [
            ["NONE","NONE"],
            ["HOP","HOP"],
            ["SCARY","SCARY"],
            ["FLY","FLY"],
            ["CAR","CAR"],
            ["SCARY2","SCARY2"],
            ["ANGER","ANGER"],
            ["LOVELY","LOVELY"],
            ["BLINK","BLINK"],
            ["JUMP","JUMP"],
            ["JUMPB","JUMPB"],
            ["WEEKHITL","WEEKHITL"],
            ["WEEKHITR","WEEKHITR"],
            ["SHAKE","SHAKE"],
            ["BLINK2","BLINK2"],
            ["ZOOM2","ZOOM2"],
            ["ZOOM3","ZOOM3"],
            ["ZOOM4","ZOOM4"],
            ["ALP50","ALP50"],
            ["DANCE","DANCE"],
            ["SIN_H","SIN_H"],
            ["SIN_V","SIN_V"]
        ],
        "default": "NONE"
    },
    "PIC_F_List": {
        "type": "field_dropdown",
        "options": [
            ["填充","FILL"],
            ["闪烁","FLASH"],
            ["自适应","FINE"],
            ["自适应所有","FINE_ALL"],
            ["翻转","FLIP"],
            ["翻转X","FX"],
            ["翻转Y","FY"],
            ["淡入","FADEIN"],
            ["淡出","FADEOUT"]
        ],
        "default": "FILL"
    },
    "PIC_S_List": {
        "type": "field_dropdown",
        "options": [
            ["交换","SWAP"],
            ["SILHOUETTE","SILHOUETTE"],
            ["SWIN","SWIN"],
            ["SWIN2","SWIN2"],
            ["SWIN_G","SWIN_G"],
            ["SWIN_SHADOW","SWIN_SHADOW"],
            ["SWIN_PASTE","SWIN_PASTE"]
        ],
        "default": "SWAP"
    },
    "PIC_List": {
        "type": "field_dropdown",
        "options": [
            ["隐藏所有图片","HIDE_ALL"],
            ["显示背景图","B"],
            ["CLEAR_TERM_CACHE","CLEAR_TERM_CACHE"],
            ["MVA_WHOLE","MVA_WHOLE"],
            ["MOVE","MOVE"],
            ["MOVE2","MOVE2"],
            ["RADIATION","RADIATION"],
            ["RECT","RECT"],
            ["REM","REM"],
            ["RIDE","RIDE"],
            ["TFADE","TFADE"]
        ],
        "default": "HIDE_ALL"
    },
    "Style_List": {
        "type": "field_dropdown",
        "options": [
            ["常规",""],
            ["剑山","<angry>"],
            ["心想","<think>"],
            ["泡泡","<circ>"],
            ["法杖","<device>"],
            ["噪音","<device><noise>"]
        ],
        "default": ""
    },
    "TL_List": {
        "type": "field_dropdown",
        "options": [
            ["立即执行（不等待帧数）","DOTL"],
            ["立即执行（不等待对话）","DOMTL"],
            ["放弃执行（不等待帧数）","CLEARTL"],
            ["放弃执行（不等待对话）","CLEARMTL"]
        ],
        "default": "DOTL"
    },
    "Tuto_List": {
        "type": "field_dropdown",
        "options": [
            ["采集","collect"],
            ["轻攻击","punch"],
            ["魔法","magic"],
            ["地图","map"],
            ["起身","wakeup"],
            ["爬行","crouch"],
            ["地面炸弹","magic_dropbomb"],
            ["菜单","menu"],
            ["护盾","guard"],
            ["闪避","evade"],
            ["闪避3次","evade_0"],
            ["闪避2次","evade_1"],
            ["闪避1次","evade_2"],
            ["火球","fireball"],
            ["滑铲","sliding"],
            ["搬运石块","box_release"],
            ["撤离","goback"],
            ["立刻撤离！","goback_strong"],
            ["圣光爆发","magic_burst"]
        ],
        "default": "collect"
    },
    "BGM_List": {
        "type": "field_dropdown",
        "options": [
            ["标题画面","title"],
            ["风（BGS）","wind"],
            ["编织者之森","forest"],
            ["史莱姆教学","herghost"],
            ["柯涅尔工房（昼）","cornehl"],
            ["柯涅尔工房（夜）","cornehl_night"],
            ["伊夏（昼）","ixia"],
            ["伊夏（夜）","ixia_night"],
            ["伊夏（战斗）","ixia_battle"],
            ["丽薇歌塔","popsup"],
            ["提尔德","tilde"],
            ["德尔菲尼","town4"],
            ["蝉鸣（BGS）","suzumusi"],
            ["普莉姆拉（出场）","primula"],
            ["普莉姆拉（讲故事）","tuuzyou"],
            ["普莉姆拉（墓前）","light"],
            ["普莉姆拉（教学）","luminous_particle"],
            ["过夜（ME）","inn"],
            ["烹饪教学","valentine"],
            ["炼金手册","c_sign"],
            ["休息室（准备）","tokimeki"],
            ["休息室（成功）","yatto_deaeta"],
            ["休息室（失败）","bukiyou_na_hutari"],
            ["水下（BGS）","underwater"],
            ["南丁格尔","shopping"],
            ["土蛇战败","fatal_huon"],
            ["人偶护符","degree45"],
            ["阿尔玛","sohunosyosai"],
            ["奥斯托利亚","hunter_minarai"],
            ["蛊惑之沼（关门）","yocho"],
            ["爆破现场","madhatter"],
            ["圣光爆发","killing"],
            ["森之领主","battle_nusi"],
            ["要迟到了","morinokioku"]
        ],
        "default": "title"
    },
    "SND_List": {
        "type": "field_dropdown",
        "options": [
            ["absorb_guchu","absorb_guchu"],
            ["cloth_off","cloth_off"],
            ["cloth_off_0","cloth_off_0"],
            ["cloth_off_1","cloth_off_1"],
            ["door_storeportal_open","door_storeportal_open"],
            ["door_wood_s_open","door_wood_s_open"],
            ["dora_ring","dora_ring"],
            ["flashback_noise","flashback_noise"],
            ["foot_leafground_ev2","foot_leafground_ev2"],
            ["foot_sand","foot_sand"],
            ["get_item","get_item"],
            ["gimmick_keyboard","gimmick_keyboard"],
            ["ground_gogogo","ground_gogogo"],
            ["insect_rape2","insect_rape2"],
            ["itembox_appear","itembox_appear"],
            ["nusi_inject","nusi_inject"],
            ["nusivo_grawl","nusivo_grawl"],
            ["orgasm","orgasm"],
            ["paper","paper"],
            ["ping","ping"],
            ["pr_down","pr_down"],
            ["pr_hit_wall","pr_hit_wall"],
            ["prko_s","prko_s"],
            ["puni","puni"],
            ["restroom_flush","restroom_flush"],
            ["restroom_pee","restroom_pee"],
            ["restroom_shower","restroom_shower"],
            ["small_hit","small_hit"],
            ["step_stair","step_stair"],
            ["tsukkomi","tsukkomi"]
        ],
        "default": "absorb_guchu"
    },
    "Engine_List": {
        "type": "field_dropdown",
        "options": [
            ["老师教学","PrimulaPVV11"],
            ["土蛇战","IxiaPVV102"],
            ["森主战","IxiaPVV104"]
        ],
        "default": "PrimulaPVV11"
    },
    "House_List": {
        "type": "field_dropdown",
        "options": [
            ["正门前","house_road"],
            ["庭院","house_center"],
            ["杂货店","house_shop"],
            ["厨房","house_hall"],
            ["自己的房间","house_noelroom"],
            ["姐姐的工房","house_atelier"],
            ["后院","house_barn"],
            ["墓地","house_cliff"],
            ["血池","house_lake"],
            ["强化插槽","house_cliff_cave"],
            ["双重闪避","house_puzzle_cliffcave"],
            ["鸟笼左侧","house_cave2forest"],
            ["休息室","house_theroom"]
        ],
        "default": "house_road"
    },
    "Battle_List": {
        "type": "field_dropdown",
        "options": [
            ["穿林日光之庭","forest_01"],
            ["鸟笼","forest_athletic_thorn_under"],
            ["鲜血镇压者","forest_tomato"],
            ["暗夜帷幕","forest_cliff_portal"],
            ["孢子舞台","forest_mushpot"],
            ["卑鄙的后勤兵","forest_tikuwar"],
            ["盗掘者","forest_toybox"],
            ["飞瀑悬窟","forest_wood_slash"],
            ["蛊惑之沼","forest_swamp"],
            ["遛狗公园","forest_senzyo2cliff"],
            ["沐风中庭","forest_wind_senzyo"],
            ["土龙巢穴","forest_senzyo"],
            ["古驿夜宴","forest_rwood_column"],
            ["黄昏骤雨","forest_darkpot"],
            ["空中回廊","forest_wood_right_exit"],
            ["裂隙看守者","forest_treecrack"],
            ["笼中余祸","forest_geckoland"],
            ["迷途者","forest_coroseum"],
            ["酸池深渊","forest_nightacid"],
            ["酸木前餐","forest_wood_hall"],
            ["匣中恶魔","forest_darkpotu"],
            ["小心头顶","forest_mush_narrow"],
            ["旋转木马","forest_buibui"],
            ["装配实验间","forest_toylabo"],
            ["湖面蜃景","forest_wood_nightlake"],
            ["机关人偶","forest_clocktower"],
            ["菌丝之王","forest_mush_coroseum"],
            ["酸湖下的猬鼠","forest_acid_lake"],
            ["炎舞神乐","forest_foxhall"],
            ["欲壑与泥潭","forest_coroseum_frog"],
            ["森之领主","forest_nusi_coroseum"]
        ],
        "default": "forest_01"
    },
    "Chest_List": {
        "type": "field_dropdown",
        "options": [
            ["旋风斩击","forest_puzzle_worms"],
            ["彗星俯冲","forest_athletic_tikuwafall"],
            ["突进冲击","forest_puzzle_mesher"],
            ["凌空横斩","forest_wind_thorn"],
            ["护盾冲击","forest_puzzle_water"],
            ["环轨护盾","forest_athletic_thunder_wood"],
            ["血之虹瞳","forest_darkpot_r"],
            ["抓地鞋","forest_puzzle_water2"],
            ["超载咏唱","forest_wood_hall"],
            ["猫之缓降","forest_puzzle_timer"],
            ["盗垒滑步","forest_puzzle_hame"],
            ["祈雨御守","forest_box_puzzle"],
            ["恐高症","forest_puzzle_burnivy"],
            ["藏巧守拙","forest_athletic_ladder"],
            ["长法杖","forest_coroseum"],
            ["濡湿预兆","forest_frog_pre"],
            ["金币+100","forest_puzzle_ctop"],
            ["强化插槽","forest_puzzle_ct"],
            ["过充插槽","forest_sea"],
            ["土蛇左侧HP","forest_tc"],
            ["土蛇右侧HP","forest_senzyort"],
            ["巨人右侧HP","forest_presser_mine"],
            ["木马下方HP","forest_wood_extender_puzzle"],
            ["瓦罗斯左侧HP","forest_ruin_hall"],
            ["清水MP+20","forest_lava_secret"],
            ["圣光爆发","forest_burst_treasure"]
        ],
        "default": "forest_puzzle_worms"
    },
    "Map_Other_List": {
        "type": "field_dropdown",
        "options": [
            ["阿尔玛同学","forest_ruin_station"],
            ["阿尔玛右侧","forest_ruin_road"],
            ["暗夜帷幕左侧","forest_hirobau"],
            ["孢子舞台左下","forest_athletic_tikuwa_thorn"],
            ["初始清水","forest_secret_lake"],
            ["初始清水右侧","forest_secr_in"],
            ["大桥和矿洞","forest_hiroba"],
            ["蛊惑之沼上方","forest_ostrea_swampt"],
            ["护盾冲击右侧","forest_column"],
            ["彗星俯冲上方","forest_acid_dobadoba"],
            ["精灵之村入口","forest_satoentrance"],
            ["空中回廊右侧","forest_wood_wip"],
            ["空中回廊左侧","forest_wood_rcolumn"],
            ["恐高症左侧","forest_rt_lavaroad"],
            ["裂隙看守者左侧","forest_c"],
            ["沐风中庭下方","forest_01t"],
            ["鸟笼上方","forest_ahletic_home_thorn"],
            ["鸟笼右下","forest_ahletic_tikuwa"],
            ["森之领主右侧","forest_nusi_right"],
            ["森之领主左侧","forest_nusi_pre"],
            ["上层横风场","forest_roft_wind"],
            ["圣光爆发上方","forest_entrance_grazia"],
            ["酸木前餐上方","forest_wood_cross"],
            ["土龙巢穴上方","forest_senzyot"],
            ["瓦罗斯施工现场","forest_ruin_station_r"],
            ["小心头顶右下","forest_thunder_dancing"],
            ["小心头顶左侧","forest_lava_coming"],
            ["旋转木马右侧","forest_wood_matoate"],
            ["炎舞神乐上方","forest_falltemp"],
            ["炎舞神乐左侧","forest_foxhall_pre"],
            ["欲壑与泥潭左侧","forest_frog_left"],
            ["装配实验间左侧","forest_toylabo_pre"]
        ],
        "default": "forest_ruin_station"
    },
    "PE_List": {
        "type": "field_dropdown",
        "options": [
            ["音乐减弱","BGM_LOWER"],
            ["音乐水下","BGM_WATER"],
            ["圣光爆发","BURST"],
            ["混乱镜头","CONFUSED_CAMERA"],
            ["污染体出场","ENEMY_OVERDRIVE_APPEAR"],
            ["最终阿尔法","FINAL_ALPHA"],
            ["闪烁","FLASH"],
            ["气体","GAS_APPLIED"],
            ["近视","GO_CLOSE_EYE"],
            ["心跳","HEARTBEAT"],
            ["濒死","HP_REDUCE"],
            ["圈出","IRISOUT"],
            ["果酱","JAMMING"],
            ["产卵","LAYING_EGG"],
            ["M2D_VAR_0","M2D_VAR_0"],
            ["选择魔法","MAGICSELECT"],
            ["魔法设备激活","MAGIC_DEVICE_ACTIVATE"],
            ["被吸收魔力","MP_ABSORBED"],
            ["枯竭","MP_REDUCE"],
            ["开花","POST_BLOOM"],
            ["雨","RAIN"],
            ["霰弹","SHOTGUN"],
            ["音效减弱","SND_VOLUME_REDUCE"],
            ["开始战斗","SUMMONER_ACTIVATE"],
            ["触电","THUNDER_TRAP"],
            ["慢动作","TS_SLOW"],
            ["虫墙","WORM_TRAPPED"],
            ["镜头拉近","ZOOM2"],
            ["丸吞","ZOOM2_EATEN"],
            ["__MAX","__MAX"]
        ],
        "default": "BGM_LOWER"
    }
});

// 所有方块的实际内容
Object.assign(aicBlocks,{
    "prog": {
        "type": "statement",
        "json": {
            "type": "prog",
            "message0": "入口： %1 %2",
            "args0": [
                {
                    "type": "input_dummy"
                },
                {
                    "type": "input_statement",
                    "name": "statement_0",
                    "check": aicBlocks.statement
                }
            ],
            "tooltip": "",
            "helpUrl": "",
            "colour": 260
        },
        "generFunc": function(block) {
            var statement_0 = Blockly.JavaScript.statementToCode(block, 'statement_0');
            if (statement_0==='') {
                throw new OmitedError(block,'statement_0','prog');
            }
            return '[\n'+statement_0+'\n]'; 
        },
        "args": ["statement_0"],
        "argsType": ["statement"],
        "argsGrammarName": ["statement"],
        "omitted": [false],
        "multi": [true],
        "fieldDefault": function (keyOrIndex) {
            return aicFunctions.fieldDefault('prog',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return aicFunctions.xmlText('prog',inputs,next,isShadow,comment,attribute);
        }
    },
    "talker": {
        "type": "statement",
        "json": {
            "type": "talker",
            "message0": "设置立绘位置： 角色 %1 水平位置 %2 上下偏移 %3",
            "args0": [
                Object.assign({},aicBlocks.Alphabet_List,{
                    "name": "who",
                    "default": "n"
                }),
                Object.assign({},aicBlocks.Hori_List,{
                    "name": "hori",
                    "default": "C"
                }),
                Object.assign({},aicBlocks.Vert_List,{
                    "name": "vert",
                    "default": ""
                })
            ],
            "inputsInline": true,
            "tooltip": "",
            "helpUrl": "",
            "colour": 70,
            "previousStatement": "talker",
            "nextStatement": aicBlocks.statement
        },
        "generFunc": function(block) {
            var who = block.getFieldValue('who');
            who = aicFunctions.pre('Alphabet_List')(who,block,'who','talker');
            var hori = block.getFieldValue('hori');
            hori = aicFunctions.pre('Hori_List')(hori,block,'hori','talker');
            var vert = block.getFieldValue('vert');
            vert = aicFunctions.pre('Vert_List')(vert,block,'vert','talker');
            var code = aicFunctions.defaultCode('talker',eval('['+aicBlocks['talker'].args.join(',')+']'),block);
            return code;
        },
        "args": ["who","hori","vert"],
        "argsType": ["field","field","field"],
        "argsGrammarName": ["Alphabet_List","Hori_List","Vert_List"],
        "omitted": [false,false,false],
        "multi": [false,false,false],
        "fieldDefault": function (keyOrIndex) {
            return aicFunctions.fieldDefault('talker',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return aicFunctions.xmlText('talker',inputs,next,isShadow,comment,attribute);
        }
    },
    "talker_replace": {
        "type": "statement",
        "json": {
            "type": "talker_replace",
            "message0": "绑定姓名音效： 角色 %1 姓名 %2 音效 %3",
            "args0": [
                Object.assign({},aicBlocks.Alphabet_List,{
                    "name": "who",
                    "default": "n"
                }),
                Object.assign({},aicBlocks.Talker_List,{
                    "name": "name",
                    "default": "Noel"
                }),
                Object.assign({},aicBlocks.Voice_List,{
                    "name": "voice",
                    "default": "noel"
                })
            ],
            "inputsInline": true,
            "tooltip": "",
            "helpUrl": "",
            "colour": 70,
            "previousStatement": "talker_replace",
            "nextStatement": aicBlocks.statement
        },
        "generFunc": function(block) {
            var who = block.getFieldValue('who');
            who = aicFunctions.pre('Alphabet_List')(who,block,'who','talker_replace');
            var name = block.getFieldValue('name');
            name = aicFunctions.pre('Talker_List')(name,block,'name','talker_replace');
            var voice = block.getFieldValue('voice');
            voice = aicFunctions.pre('Voice_List')(voice,block,'voice','talker_replace');
            var code = aicFunctions.defaultCode('talker_replace',eval('['+aicBlocks['talker_replace'].args.join(',')+']'),block);
            return code;
        },
        "args": ["who","name","voice"],
        "argsType": ["field","field","field"],
        "argsGrammarName": ["Alphabet_List","Talker_List","Voice_List"],
        "omitted": [false,false,false],
        "multi": [false,false,false],
        "fieldDefault": function (keyOrIndex) {
            return aicFunctions.fieldDefault('talker_replace',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return aicFunctions.xmlText('talker_replace',inputs,next,isShadow,comment,attribute);
        }
    },
    "hkds": {
        "type": "statement",
        "json": {
            "type": "hkds",
            "message0": "设置对话框样式： 角色 %1 %2 对话框位置： 水平 %3 上下偏移 %4 %5 对话框指向 %6 对话框边界 %7",
            "args0": [
                Object.assign({},aicBlocks.Alphabet_List,{
                    "name": "who",
                    "default": "n"
                }),
                {
                    "type": "input_dummy"
                },
                Object.assign({},aicBlocks.Hori_List,{
                    "name": "hori",
                    "default": "C"
                }),
                Object.assign({},aicBlocks.Vert_List,{
                    "name": "vert",
                    "default": ""
                }),
                {
                    "type": "input_dummy"
                },
                Object.assign({},aicBlocks.RawString,{
                    "name": "follow",
                    "text": "#<%>"
                }),
                Object.assign({},aicBlocks.Border_List,{
                    "name": "border",
                    "default": "MONOLOGUE"
                })
            ],
            "tooltip": "",
            "helpUrl": "",
            "colour": 70,
            "previousStatement": "hkds",
            "nextStatement": aicBlocks.statement
        },
        "generFunc": function(block) {
            var who = block.getFieldValue('who');
            who = aicFunctions.pre('Alphabet_List')(who,block,'who','hkds');
            var hori = block.getFieldValue('hori');
            hori = aicFunctions.pre('Hori_List')(hori,block,'hori','hkds');
            var vert = block.getFieldValue('vert');
            vert = aicFunctions.pre('Vert_List')(vert,block,'vert','hkds');
            var follow = block.getFieldValue('follow');
            if (follow==='') {
                throw new OmitedError(block,'follow','hkds');
            }
            follow = aicFunctions.pre('RawString')(follow,block,'follow','hkds');
            var border = block.getFieldValue('border');
            border = aicFunctions.pre('Border_List')(border,block,'border','hkds');
            var code = aicFunctions.defaultCode('hkds',eval('['+aicBlocks['hkds'].args.join(',')+']'),block);
            return code;
        },
        "args": ["who","hori","vert","follow","border"],
        "argsType": ["field","field","field","field","field"],
        "argsGrammarName": ["Alphabet_List","Hori_List","Vert_List","RawString","Border_List"],
        "omitted": [false,false,false,false,false],
        "multi": [false,false,false,false,false],
        "fieldDefault": function (keyOrIndex) {
            return aicFunctions.fieldDefault('hkds',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return aicFunctions.xmlText('hkds',inputs,next,isShadow,comment,attribute);
        }
    },
    "pic": {
        "type": "statement",
        "json": {
            "type": "pic",
            "message0": "更改立绘差分： 角色 %1 %2 图片路径 %3",
            "args0": [
                Object.assign({},aicBlocks.Alphabet_List,{
                    "name": "who",
                    "default": "n"
                }),
                {
                    "type": "input_dummy"
                },
                Object.assign({},aicBlocks.RawString,{
                    "name": "url",
                    "text": "a_3/a0__F1__f3__m1__b4_uo"
                })
            ],
            "tooltip": "",
            "helpUrl": "",
            "colour": 190,
            "previousStatement": "pic",
            "nextStatement": aicBlocks.statement
        },
        "generFunc": function(block) {
            var who = block.getFieldValue('who');
            who = aicFunctions.pre('Alphabet_List')(who,block,'who','pic');
            var url = block.getFieldValue('url');
            if (url==='') {
                throw new OmitedError(block,'url','pic');
            }
            url = aicFunctions.pre('RawString')(url,block,'url','pic');
            var code = aicFunctions.defaultCode('pic',eval('['+aicBlocks['pic'].args.join(',')+']'),block);
            return code;
        },
        "args": ["who","url"],
        "argsType": ["field","field"],
        "argsGrammarName": ["Alphabet_List","RawString"],
        "omitted": [false,false],
        "multi": [false,false],
        "fieldDefault": function (keyOrIndex) {
            return aicFunctions.fieldDefault('pic',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return aicFunctions.xmlText('pic',inputs,next,isShadow,comment,attribute);
        }
    },
    "pic_mp": {
        "type": "statement",
        "json": {
            "type": "pic_mp",
            "message0": "立绘动态表情： 角色 %1 表情 %2",
            "args0": [
                Object.assign({},aicBlocks.Alphabet_List,{
                    "name": "who",
                    "default": "n"
                }),
                Object.assign({},aicBlocks.Emoji_List,{
                    "name": "emo",
                    "default": "SWT"
                })
            ],
            "inputsInline": true,
            "tooltip": "",
            "helpUrl": "",
            "colour": 190,
            "previousStatement": "pic_mp",
            "nextStatement": aicBlocks.statement
        },
        "generFunc": function(block) {
            var who = block.getFieldValue('who');
            who = aicFunctions.pre('Alphabet_List')(who,block,'who','pic_mp');
            var emo = block.getFieldValue('emo');
            emo = aicFunctions.pre('Emoji_List')(emo,block,'emo','pic_mp');
            var code = aicFunctions.defaultCode('pic_mp',eval('['+aicBlocks['pic_mp'].args.join(',')+']'),block);
            return code;
        },
        "args": ["who","emo"],
        "argsType": ["field","field"],
        "argsGrammarName": ["Alphabet_List","Emoji_List"],
        "omitted": [false,false],
        "multi": [false,false],
        "fieldDefault": function (keyOrIndex) {
            return aicFunctions.fieldDefault('pic_mp',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return aicFunctions.xmlText('pic_mp',inputs,next,isShadow,comment,attribute);
        }
    },
    "pic_moveA": {
        "type": "statement",
        "json": {
            "type": "pic_moveA",
            "message0": "立绘动作： 角色 %1 时长 %2 动作 %3",
            "args0": [
                Object.assign({},aicBlocks.Alphabet_List,{
                    "name": "who",
                    "default": "d"
                }),
                Object.assign({},aicBlocks.Int,{
                    "name": "time",
                    "value": 30
                }),
                Object.assign({},aicBlocks.Action_List,{
                    "name": "action",
                    "default": "DANCE"
                })
            ],
            "inputsInline": true,
            "tooltip": "",
            "helpUrl": "",
            "colour": 190,
            "previousStatement": "pic_moveA",
            "nextStatement": aicBlocks.statement
        },
        "generFunc": function(block) {
            var who = block.getFieldValue('who');
            who = aicFunctions.pre('Alphabet_List')(who,block,'who','pic_moveA');
            var time = block.getFieldValue('time');
            time = aicFunctions.pre('Int')(time,block,'time','pic_moveA');
            var action = block.getFieldValue('action');
            action = aicFunctions.pre('Action_List')(action,block,'action','pic_moveA');
            var code = aicFunctions.defaultCode('pic_moveA',eval('['+aicBlocks['pic_moveA'].args.join(',')+']'),block);
            return code;
        },
        "args": ["who","time","action"],
        "argsType": ["field","field","field"],
        "argsGrammarName": ["Alphabet_List","Int","Action_List"],
        "omitted": [false,false,false],
        "multi": [false,false,false],
        "fieldDefault": function (keyOrIndex) {
            return aicFunctions.fieldDefault('pic_moveA',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return aicFunctions.xmlText('pic_moveA',inputs,next,isShadow,comment,attribute);
        }
    },
    "pic_hide": {
        "type": "statement",
        "json": {
            "type": "pic_hide",
            "message0": "隐藏立绘： 角色 %1",
            "args0": [
                Object.assign({},aicBlocks.Alphabet_List,{
                    "name": "who",
                    "default": "n"
                })
            ],
            "inputsInline": true,
            "tooltip": "",
            "helpUrl": "",
            "colour": 190,
            "previousStatement": "pic_hide",
            "nextStatement": aicBlocks.statement
        },
        "generFunc": function(block) {
            var who = block.getFieldValue('who');
            who = aicFunctions.pre('Alphabet_List')(who,block,'who','pic_hide');
            var code = aicFunctions.defaultCode('pic_hide',eval('['+aicBlocks['pic_hide'].args.join(',')+']'),block);
            return code;
        },
        "args": ["who"],
        "argsType": ["field"],
        "argsGrammarName": ["Alphabet_List"],
        "omitted": [false],
        "multi": [false],
        "fieldDefault": function (keyOrIndex) {
            return aicFunctions.fieldDefault('pic_hide',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return aicFunctions.xmlText('pic_hide',inputs,next,isShadow,comment,attribute);
        }
    },
    "pic_f": {
        "type": "statement",
        "json": {
            "type": "pic_f",
            "message0": "F开头的图片指令： PIC_ %1 参数（空格隔开） %2",
            "args0": [
                Object.assign({},aicBlocks.PIC_F_List,{
                    "name": "instruction",
                    "default": "FILL"
                }),
                Object.assign({},aicBlocks.RawString,{
                    "name": "args",
                    "text": "&0 DARK"
                })
            ],
            "inputsInline": true,
            "tooltip": "",
            "helpUrl": "",
            "colour": 190,
            "previousStatement": "pic_f",
            "nextStatement": aicBlocks.statement
        },
        "generFunc": function(block) {
            var instruction = block.getFieldValue('instruction');
            instruction = aicFunctions.pre('PIC_F_List')(instruction,block,'instruction','pic_f');
            var args = block.getFieldValue('args');
            args = aicFunctions.pre('RawString')(args,block,'args','pic_f');
            var code = aicFunctions.defaultCode('pic_f',eval('['+aicBlocks['pic_f'].args.join(',')+']'),block);
            return code;
        },
        "args": ["instruction","args"],
        "argsType": ["field","field"],
        "argsGrammarName": ["PIC_F_List","RawString"],
        "omitted": [false,true],
        "multi": [false,false],
        "fieldDefault": function (keyOrIndex) {
            return aicFunctions.fieldDefault('pic_f',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return aicFunctions.xmlText('pic_f',inputs,next,isShadow,comment,attribute);
        }
    },
    "pic_s": {
        "type": "statement",
        "json": {
            "type": "pic_s",
            "message0": "S开头的图片指令： PIC_ %1 参数（空格隔开） %2",
            "args0": [
                Object.assign({},aicBlocks.PIC_S_List,{
                    "name": "instruction",
                    "default": "SWAP"
                }),
                Object.assign({},aicBlocks.RawString,{
                    "name": "args",
                    "text": "#0 #1"
                })
            ],
            "inputsInline": true,
            "tooltip": "",
            "helpUrl": "",
            "colour": 190,
            "previousStatement": "pic_s",
            "nextStatement": aicBlocks.statement
        },
        "generFunc": function(block) {
            var instruction = block.getFieldValue('instruction');
            instruction = aicFunctions.pre('PIC_S_List')(instruction,block,'instruction','pic_s');
            var args = block.getFieldValue('args');
            args = aicFunctions.pre('RawString')(args,block,'args','pic_s');
            var code = aicFunctions.defaultCode('pic_s',eval('['+aicBlocks['pic_s'].args.join(',')+']'),block);
            return code;
        },
        "args": ["instruction","args"],
        "argsType": ["field","field"],
        "argsGrammarName": ["PIC_S_List","RawString"],
        "omitted": [false,true],
        "multi": [false,false],
        "fieldDefault": function (keyOrIndex) {
            return aicFunctions.fieldDefault('pic_s',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return aicFunctions.xmlText('pic_s',inputs,next,isShadow,comment,attribute);
        }
    },
    "pic_": {
        "type": "statement",
        "json": {
            "type": "pic_",
            "message0": "其他图片指令： PIC_ %1 参数（空格隔开） %2",
            "args0": [
                Object.assign({},aicBlocks.PIC_List,{
                    "name": "instruction",
                    "default": "HIDE_ALL"
                }),
                Object.assign({},aicBlocks.RawString,{
                    "name": "args",
                    "text": ""
                })
            ],
            "inputsInline": true,
            "tooltip": "",
            "helpUrl": "",
            "colour": 190,
            "previousStatement": "pic_",
            "nextStatement": aicBlocks.statement
        },
        "generFunc": function(block) {
            var instruction = block.getFieldValue('instruction');
            instruction = aicFunctions.pre('PIC_List')(instruction,block,'instruction','pic_');
            var args = block.getFieldValue('args');
            args = aicFunctions.pre('RawString')(args,block,'args','pic_');
            var code = aicFunctions.defaultCode('pic_',eval('['+aicBlocks['pic_'].args.join(',')+']'),block);
            return code;
        },
        "args": ["instruction","args"],
        "argsType": ["field","field"],
        "argsGrammarName": ["PIC_List","RawString"],
        "omitted": [false,true],
        "multi": [false,false],
        "fieldDefault": function (keyOrIndex) {
            return aicFunctions.fieldDefault('pic_',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return aicFunctions.xmlText('pic_',inputs,next,isShadow,comment,attribute);
        }
    },
    "msg": {
        "type": "statement",
        "json": {
            "type": "msg",
            "message0": "对话： 角色 %1 对话框样式 %2 %3 %4",
            "args0": [
                Object.assign({},aicBlocks.Alphabet_List,{
                    "name": "who",
                    "default": "n"
                }),
                Object.assign({},aicBlocks.Style_List,{
                    "name": "style",
                    "default": ""
                }),
                {
                    "type": "input_dummy"
                },
                Object.assign({},aicBlocks.Text_Multi,{
                    "name": "text",
                    "text": "一行最多16字，一页最多5行。\n上方注音：<rb c=\"Cradle\">摇篮</rb>\n<big>38号字<small>12号字\n*\n这是第二页，右击帮助查看更多。"
                })
            ],
            "tooltip": "",
            "helpUrl": "https://www.bilibili.com/read/cv24591788",
            "colour": 120,
            "previousStatement": "msg",
            "nextStatement": aicBlocks.statement
        },
        "generFunc": function(block) {
            var who = block.getFieldValue('who');
            who = aicFunctions.pre('Alphabet_List')(who,block,'who','msg');
            var style = block.getFieldValue('style');
            style = aicFunctions.pre('Style_List')(style,block,'style','msg');
            var text = block.getFieldValue('text');
            if (text==='') {
                throw new OmitedError(block,'text','msg');
            }
            text = aicFunctions.pre('Text_Multi')(text,block,'text','msg');
            var code = aicFunctions.defaultCode('msg',eval('['+aicBlocks['msg'].args.join(',')+']'),block);
            return code;
        },
        "args": ["who","style","text"],
        "argsType": ["field","field","field"],
        "argsGrammarName": ["Alphabet_List","Style_List","Text_Multi"],
        "omitted": [false,false,false],
        "multi": [false,false,false],
        "fieldDefault": function (keyOrIndex) {
            return aicFunctions.fieldDefault('msg',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return aicFunctions.xmlText('msg',inputs,next,isShadow,comment,attribute);
        }
    },
    "msg_book": {
        "type": "statement",
        "json": {
            "type": "msg_book",
            "message0": "书页： 水平位置 %1 上下偏移 %2 %3 %4",
            "args0": [
                Object.assign({},aicBlocks.Hori_List,{
                    "name": "hori",
                    "default": "L"
                }),
                Object.assign({},aicBlocks.Vert_List,{
                    "name": "vert",
                    "default": ""
                }),
                {
                    "type": "input_dummy"
                },
                Object.assign({},aicBlocks.Text_Multi,{
                    "name": "text",
                    "text": "学园首屈一指的才女，\n柯涅尔家让人骄傲的小女儿。\n虽然诺艾儿觉得自己\n并没有资格拥有这两个头衔，\n但只是装装样子的话应该没问题吧。"
                })
            ],
            "tooltip": "",
            "helpUrl": "",
            "colour": 120,
            "previousStatement": "msg_book",
            "nextStatement": aicBlocks.statement
        },
        "generFunc": function(block) {
            var hori = block.getFieldValue('hori');
            hori = aicFunctions.pre('Hori_List')(hori,block,'hori','msg_book');
            var vert = block.getFieldValue('vert');
            vert = aicFunctions.pre('Vert_List')(vert,block,'vert','msg_book');
            var text = block.getFieldValue('text');
            if (text==='') {
                throw new OmitedError(block,'text','msg_book');
            }
            text = aicFunctions.pre('Text_Multi')(text,block,'text','msg_book');
            var code = aicFunctions.defaultCode('msg_book',eval('['+aicBlocks['msg_book'].args.join(',')+']'),block);
            return code;
        },
        "args": ["hori","vert","text"],
        "argsType": ["field","field","field"],
        "argsGrammarName": ["Hori_List","Vert_List","Text_Multi"],
        "omitted": [false,false,false],
        "multi": [false,false,false],
        "fieldDefault": function (keyOrIndex) {
            return aicFunctions.fieldDefault('msg_book',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return aicFunctions.xmlText('msg_book',inputs,next,isShadow,comment,attribute);
        }
    },
    "tx_board": {
        "type": "statement",
        "json": {
            "type": "tx_board",
            "message0": "告示牌/书信： _eventboard_ %1 %2 普通2/花边3/书信4： %3 需在tx_event.txt中填写内容",
            "args0": [
                Object.assign({},aicBlocks.RawString,{
                    "name": "id",
                    "text": "house_witchboard_00"
                }),
                {
                    "type": "input_dummy"
                },
                Object.assign({},aicBlocks.Int,{
                    "name": "style",
                    "value": 3
                })
            ],
            "tooltip": "",
            "helpUrl": "",
            "colour": 120,
            "previousStatement": "tx_board",
            "nextStatement": aicBlocks.statement
        },
        "generFunc": function(block) {
            var id = block.getFieldValue('id');
            if (id==='') {
                throw new OmitedError(block,'id','tx_board');
            }
            id = aicFunctions.pre('RawString')(id,block,'id','tx_board');
            var style = block.getFieldValue('style');
            style = aicFunctions.pre('Int')(style,block,'style','tx_board');
            var code = aicFunctions.defaultCode('tx_board',eval('['+aicBlocks['tx_board'].args.join(',')+']'),block);
            return code;
        },
        "args": ["id","style"],
        "argsType": ["field","field"],
        "argsGrammarName": ["RawString","Int"],
        "omitted": [false,false],
        "multi": [false,false],
        "fieldDefault": function (keyOrIndex) {
            return aicFunctions.fieldDefault('tx_board',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return aicFunctions.xmlText('tx_board',inputs,next,isShadow,comment,attribute);
        }
    },
    "msg_hide": {
        "type": "statement",
        "json": {
            "type": "msg_hide",
            "message0": "隐藏所有对话框",
            "args0": [],
            "inputsInline": true,
            "tooltip": "",
            "helpUrl": "",
            "colour": 120,
            "previousStatement": "msg_hide",
            "nextStatement": aicBlocks.statement
        },
        "generFunc": function(block) {
            var code = aicFunctions.defaultCode('msg_hide',eval('['+aicBlocks['msg_hide'].args.join(',')+']'),block);
            return code;
        },
        "args": [],
        "argsType": [],
        "argsGrammarName": [],
        "omitted": [],
        "multi": [],
        "fieldDefault": function (keyOrIndex) {
            return aicFunctions.fieldDefault('msg_hide',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return aicFunctions.xmlText('msg_hide',inputs,next,isShadow,comment,attribute);
        }
    },
    "msg_hold": {
        "type": "statement",
        "json": {
            "type": "msg_hold",
            "message0": "保持对话框（可配合SELECT）",
            "args0": [],
            "inputsInline": true,
            "tooltip": "",
            "helpUrl": "",
            "colour": 120,
            "previousStatement": "msg_hold",
            "nextStatement": aicBlocks.statement
        },
        "generFunc": function(block) {
            var code = aicFunctions.defaultCode('msg_hold',eval('['+aicBlocks['msg_hold'].args.join(',')+']'),block);
            return code;
        },
        "args": [],
        "argsType": [],
        "argsGrammarName": [],
        "omitted": [],
        "multi": [],
        "fieldDefault": function (keyOrIndex) {
            return aicFunctions.fieldDefault('msg_hold',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return aicFunctions.xmlText('msg_hold',inputs,next,isShadow,comment,attribute);
        }
    },
    "msg_skip": {
        "type": "statement",
        "json": {
            "type": "msg_skip",
            "message0": "打断对话框（需放入延迟0执行）",
            "args0": [],
            "inputsInline": true,
            "tooltip": "",
            "helpUrl": "",
            "colour": 120,
            "previousStatement": "msg_skip",
            "nextStatement": aicBlocks.statement
        },
        "generFunc": function(block) {
            var code = aicFunctions.defaultCode('msg_skip',eval('['+aicBlocks['msg_skip'].args.join(',')+']'),block);
            return code;
        },
        "args": [],
        "argsType": [],
        "argsGrammarName": [],
        "omitted": [],
        "multi": [],
        "fieldDefault": function (keyOrIndex) {
            return aicFunctions.fieldDefault('msg_skip',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return aicFunctions.xmlText('msg_skip',inputs,next,isShadow,comment,attribute);
        }
    },
    "wait": {
        "type": "statement",
        "json": {
            "type": "wait",
            "message0": "等待 %1 帧",
            "args0": [
                Object.assign({},aicBlocks.Int,{
                    "name": "tick",
                    "value": 60
                })
            ],
            "inputsInline": true,
            "tooltip": "",
            "helpUrl": "",
            "colour": 160,
            "previousStatement": "wait",
            "nextStatement": aicBlocks.statement
        },
        "generFunc": function(block) {
            var tick = block.getFieldValue('tick');
            tick = aicFunctions.pre('Int')(tick,block,'tick','wait');
            var code = aicFunctions.defaultCode('wait',eval('['+aicBlocks['wait'].args.join(',')+']'),block);
            return code;
        },
        "args": ["tick"],
        "argsType": ["field"],
        "argsGrammarName": ["Int"],
        "omitted": [false],
        "multi": [false],
        "fieldDefault": function (keyOrIndex) {
            return aicFunctions.fieldDefault('wait',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return aicFunctions.xmlText('wait',inputs,next,isShadow,comment,attribute);
        }
    },
    "timeout": {
        "type": "statement",
        "json": {
            "type": "timeout",
            "message0": "延迟执行： 帧数 %1 （0为下一对话显示完成时） %2 %3",
            "args0": [
                Object.assign({},aicBlocks.Int,{
                    "name": "tick",
                    "value": 60
                }),
                {
                    "type": "input_dummy"
                },
                {
                    "type": "input_statement",
                    "name": "instructions",
                    "check": aicBlocks.statement
                }
            ],
            "tooltip": "",
            "helpUrl": "",
            "colour": 160,
            "previousStatement": "timeout",
            "nextStatement": aicBlocks.statement
        },
        "generFunc": function(block) {
            var tick = block.getFieldValue('tick');
            tick = aicFunctions.pre('Int')(tick,block,'tick','timeout');
            var instructions = Blockly.JavaScript.statementToCode(block, 'instructions');
            if (instructions==='') {
                throw new OmitedError(block,'instructions','timeout');
            }
            var code = aicFunctions.defaultCode('timeout',eval('['+aicBlocks['timeout'].args.join(',')+']'),block);
            return code;
        },
        "args": ["tick","instructions"],
        "argsType": ["field","statement"],
        "argsGrammarName": ["Int","statement"],
        "omitted": [false,false],
        "multi": [false,true],
        "fieldDefault": function (keyOrIndex) {
            return aicFunctions.fieldDefault('timeout',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return aicFunctions.xmlText('timeout',inputs,next,isShadow,comment,attribute);
        }
    },
    "op_tl": {
        "type": "statement",
        "json": {
            "type": "op_tl",
            "message0": "终止延迟： %1",
            "args0": [
                Object.assign({},aicBlocks.TL_List,{
                    "name": "operation"
                })
            ],
            "inputsInline": true,
            "tooltip": "",
            "helpUrl": "",
            "colour": 160,
            "previousStatement": "op_tl",
            "nextStatement": aicBlocks.statement
        },
        "generFunc": function(block) {
            var operation = block.getFieldValue('operation');
            operation = aicFunctions.pre('TL_List')(operation,block,'operation','op_tl');
            var code = aicFunctions.defaultCode('op_tl',eval('['+aicBlocks['op_tl'].args.join(',')+']'),block);
            return code;
        },
        "args": ["operation"],
        "argsType": ["field"],
        "argsGrammarName": ["TL_List"],
        "omitted": [false],
        "multi": [false],
        "fieldDefault": function (keyOrIndex) {
            return aicFunctions.fieldDefault('op_tl',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return aicFunctions.xmlText('op_tl',inputs,next,isShadow,comment,attribute);
        }
    },
    "tuto_msg": {
        "type": "statement",
        "json": {
            "type": "tuto_msg",
            "message0": "操作提示： %1 位置（T/C/B） %2",
            "args0": [
                Object.assign({},aicBlocks.Tuto_List,{
                    "name": "tuto",
                    "default": "collect"
                }),
                Object.assign({},aicBlocks.RawString,{
                    "name": "pos",
                    "text": "T"
                })
            ],
            "inputsInline": true,
            "tooltip": "",
            "helpUrl": "",
            "colour": 160,
            "previousStatement": "tuto_msg",
            "nextStatement": aicBlocks.statement
        },
        "generFunc": function(block) {
            var tuto = block.getFieldValue('tuto');
            tuto = aicFunctions.pre('Tuto_List')(tuto,block,'tuto','tuto_msg');
            var pos = block.getFieldValue('pos');
            if (pos==='') {
                throw new OmitedError(block,'pos','tuto_msg');
            }
            pos = aicFunctions.pre('RawString')(pos,block,'pos','tuto_msg');
            var code = aicFunctions.defaultCode('tuto_msg',eval('['+aicBlocks['tuto_msg'].args.join(',')+']'),block);
            return code;
        },
        "args": ["tuto","pos"],
        "argsType": ["field","field"],
        "argsGrammarName": ["Tuto_List","RawString"],
        "omitted": [false,false],
        "multi": [false,false],
        "fieldDefault": function (keyOrIndex) {
            return aicFunctions.fieldDefault('tuto_msg',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return aicFunctions.xmlText('tuto_msg',inputs,next,isShadow,comment,attribute);
        }
    },
    "tuto_remove": {
        "type": "statement",
        "json": {
            "type": "tuto_remove",
            "message0": "移除操作提示： 全部 %1",
            "args0": [
                Object.assign({},aicBlocks.Bool,{
                    "name": "all"
                })
            ],
            "inputsInline": true,
            "tooltip": "",
            "helpUrl": "",
            "colour": 160,
            "previousStatement": "tuto_remove",
            "nextStatement": aicBlocks.statement
        },
        "generFunc": function(block) {
            var all = block.getFieldValue('all') === 'TRUE';
            all = aicFunctions.pre('Bool')(all,block,'all','tuto_remove');
            var code = aicFunctions.defaultCode('tuto_remove',eval('['+aicBlocks['tuto_remove'].args.join(',')+']'),block);
            return code;
        },
        "args": ["all"],
        "argsType": ["field"],
        "argsGrammarName": ["Bool"],
        "omitted": [false],
        "multi": [false],
        "fieldDefault": function (keyOrIndex) {
            return aicFunctions.fieldDefault('tuto_remove',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return aicFunctions.xmlText('tuto_remove',inputs,next,isShadow,comment,attribute);
        }
    },
    "play_bgm": {
        "type": "statement",
        "json": {
            "type": "play_bgm",
            "message0": "切换音乐： BGM_ %1 淡出帧数 %2 淡入帧数 %3",
            "args0": [
                Object.assign({},aicBlocks.BGM_List,{
                    "name": "bgm"
                }),
                Object.assign({},aicBlocks.Int,{
                    "name": "fadeout"
                }),
                Object.assign({},aicBlocks.Int,{
                    "name": "fadein"
                })
            ],
            "inputsInline": true,
            "tooltip": "",
            "helpUrl": "",
            "colour": 160,
            "previousStatement": "play_bgm",
            "nextStatement": aicBlocks.statement
        },
        "generFunc": function(block) {
            var bgm = block.getFieldValue('bgm');
            bgm = aicFunctions.pre('BGM_List')(bgm,block,'bgm','play_bgm');
            var fadeout = block.getFieldValue('fadeout');
            fadeout = aicFunctions.pre('Int')(fadeout,block,'fadeout','play_bgm');
            var fadein = block.getFieldValue('fadein');
            fadein = aicFunctions.pre('Int')(fadein,block,'fadein','play_bgm');
            var code = aicFunctions.defaultCode('play_bgm',eval('['+aicBlocks['play_bgm'].args.join(',')+']'),block);
            return code;
        },
        "args": ["bgm","fadeout","fadein"],
        "argsType": ["field","field","field"],
        "argsGrammarName": ["BGM_List","Int","Int"],
        "omitted": [false,false,false],
        "multi": [false,false,false],
        "fieldDefault": function (keyOrIndex) {
            return aicFunctions.fieldDefault('play_bgm',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return aicFunctions.xmlText('play_bgm',inputs,next,isShadow,comment,attribute);
        }
    },
    "half_bgm": {
        "type": "statement",
        "json": {
            "type": "half_bgm",
            "message0": "音乐音量是否减半： %1",
            "args0": [
                Object.assign({},aicBlocks.Bool,{
                    "name": "half"
                })
            ],
            "inputsInline": true,
            "tooltip": "",
            "helpUrl": "",
            "colour": 160,
            "previousStatement": "half_bgm",
            "nextStatement": aicBlocks.statement
        },
        "generFunc": function(block) {
            var half = block.getFieldValue('half') === 'TRUE';
            half = aicFunctions.pre('Bool')(half,block,'half','half_bgm');
            var code = aicFunctions.defaultCode('half_bgm',eval('['+aicBlocks['half_bgm'].args.join(',')+']'),block);
            return code;
        },
        "args": ["half"],
        "argsType": ["field"],
        "argsGrammarName": ["Bool"],
        "omitted": [false],
        "multi": [false],
        "fieldDefault": function (keyOrIndex) {
            return aicFunctions.fieldDefault('half_bgm',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return aicFunctions.xmlText('half_bgm',inputs,next,isShadow,comment,attribute);
        }
    },
    "trigger_bgm": {
        "type": "statement",
        "json": {
            "type": "trigger_bgm",
            "message0": "暂停/继续音乐： 是否暂停 %1 淡出/淡入帧数 %2",
            "args0": [
                Object.assign({},aicBlocks.Bool,{
                    "name": "stop"
                }),
                Object.assign({},aicBlocks.Int,{
                    "name": "tick"
                })
            ],
            "inputsInline": true,
            "tooltip": "",
            "helpUrl": "",
            "colour": 160,
            "previousStatement": "trigger_bgm",
            "nextStatement": aicBlocks.statement
        },
        "generFunc": function(block) {
            var stop = block.getFieldValue('stop') === 'TRUE';
            stop = aicFunctions.pre('Bool')(stop,block,'stop','trigger_bgm');
            var tick = block.getFieldValue('tick');
            tick = aicFunctions.pre('Int')(tick,block,'tick','trigger_bgm');
            var code = aicFunctions.defaultCode('trigger_bgm',eval('['+aicBlocks['trigger_bgm'].args.join(',')+']'),block);
            return code;
        },
        "args": ["stop","tick"],
        "argsType": ["field","field"],
        "argsGrammarName": ["Bool","Int"],
        "omitted": [false,false],
        "multi": [false,false],
        "fieldDefault": function (keyOrIndex) {
            return aicFunctions.fieldDefault('trigger_bgm',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return aicFunctions.xmlText('trigger_bgm',inputs,next,isShadow,comment,attribute);
        }
    },
    "play_snd": {
        "type": "statement",
        "json": {
            "type": "play_snd",
            "message0": "播放声效： %1",
            "args0": [
                Object.assign({},aicBlocks.SND_List,{
                    "name": "snd"
                })
            ],
            "inputsInline": true,
            "tooltip": "",
            "helpUrl": "",
            "colour": 160,
            "previousStatement": "play_snd",
            "nextStatement": aicBlocks.statement
        },
        "generFunc": function(block) {
            var snd = block.getFieldValue('snd');
            snd = aicFunctions.pre('SND_List')(snd,block,'snd','play_snd');
            var code = aicFunctions.defaultCode('play_snd',eval('['+aicBlocks['play_snd'].args.join(',')+']'),block);
            return code;
        },
        "args": ["snd"],
        "argsType": ["field"],
        "argsGrammarName": ["SND_List"],
        "omitted": [false],
        "multi": [false],
        "fieldDefault": function (keyOrIndex) {
            return aicFunctions.fieldDefault('play_snd',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return aicFunctions.xmlText('play_snd',inputs,next,isShadow,comment,attribute);
        }
    },
    "pr_outfit": {
        "type": "statement",
        "json": {
            "type": "pr_outfit",
            "message0": "换装： 是否睡裙 %1",
            "args0": [
                Object.assign({},aicBlocks.Bool,{
                    "name": "BABYDOLL"
                })
            ],
            "inputsInline": true,
            "tooltip": "",
            "helpUrl": "",
            "colour": 160,
            "previousStatement": "pr_outfit",
            "nextStatement": aicBlocks.statement
        },
        "generFunc": function(block) {
            var BABYDOLL = block.getFieldValue('BABYDOLL') === 'TRUE';
            BABYDOLL = aicFunctions.pre('Bool')(BABYDOLL,block,'BABYDOLL','pr_outfit');
            var code = aicFunctions.defaultCode('pr_outfit',eval('['+aicBlocks['pr_outfit'].args.join(',')+']'),block);
            return code;
        },
        "args": ["BABYDOLL"],
        "argsType": ["field"],
        "argsGrammarName": ["Bool"],
        "omitted": [false],
        "multi": [false],
        "fieldDefault": function (keyOrIndex) {
            return aicFunctions.fieldDefault('pr_outfit',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return aicFunctions.xmlText('pr_outfit',inputs,next,isShadow,comment,attribute);
        }
    },
    "ui_trigger": {
        "type": "statement",
        "json": {
            "type": "ui_trigger",
            "message0": "显隐左侧立绘： 是否隐藏 %1",
            "args0": [
                Object.assign({},aicBlocks.Bool,{
                    "name": "DISABLE"
                })
            ],
            "inputsInline": true,
            "tooltip": "",
            "helpUrl": "",
            "colour": 160,
            "previousStatement": "ui_trigger",
            "nextStatement": aicBlocks.statement
        },
        "generFunc": function(block) {
            var DISABLE = block.getFieldValue('DISABLE') === 'TRUE';
            DISABLE = aicFunctions.pre('Bool')(DISABLE,block,'DISABLE','ui_trigger');
            var code = aicFunctions.defaultCode('ui_trigger',eval('['+aicBlocks['ui_trigger'].args.join(',')+']'),block);
            return code;
        },
        "args": ["DISABLE"],
        "argsType": ["field"],
        "argsGrammarName": ["Bool"],
        "omitted": [false],
        "multi": [false],
        "fieldDefault": function (keyOrIndex) {
            return aicFunctions.fieldDefault('ui_trigger',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return aicFunctions.xmlText('ui_trigger',inputs,next,isShadow,comment,attribute);
        }
    },
    "greeting": {
        "type": "statement",
        "json": {
            "type": "greeting",
            "message0": "立正： 诺艾儿位于哪一侧（L/R/@） %1 距离 %2",
            "args0": [
                Object.assign({},aicBlocks.RawString,{
                    "name": "dir",
                    "text": "@"
                }),
                Object.assign({},aicBlocks.RawString,{
                    "name": "dist",
                    "text": "10"
                })
            ],
            "inputsInline": true,
            "tooltip": "",
            "helpUrl": "",
            "colour": 30,
            "previousStatement": "greeting",
            "nextStatement": aicBlocks.statement
        },
        "generFunc": function(block) {
            var dir = block.getFieldValue('dir');
            if (dir==='') {
                throw new OmitedError(block,'dir','greeting');
            }
            dir = aicFunctions.pre('RawString')(dir,block,'dir','greeting');
            var dist = block.getFieldValue('dist');
            dist = aicFunctions.pre('RawString')(dist,block,'dist','greeting');
            var code = aicFunctions.defaultCode('greeting',eval('['+aicBlocks['greeting'].args.join(',')+']'),block);
            return code;
        },
        "args": ["dir","dist"],
        "argsType": ["field","field"],
        "argsGrammarName": ["RawString","RawString"],
        "omitted": [false,true],
        "multi": [false,false],
        "fieldDefault": function (keyOrIndex) {
            return aicFunctions.fieldDefault('greeting',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return aicFunctions.xmlText('greeting',inputs,next,isShadow,comment,attribute);
        }
    },
    "uialert": {
        "type": "statement",
        "json": {
            "type": "uialert",
            "message0": "左下角警告： %1",
            "args0": [
                Object.assign({},aicBlocks.RawString,{
                    "name": "text",
                    "text": "自动保存完成。"
                })
            ],
            "inputsInline": true,
            "tooltip": "",
            "helpUrl": "",
            "colour": 30,
            "previousStatement": "uialert",
            "nextStatement": aicBlocks.statement
        },
        "generFunc": function(block) {
            var text = block.getFieldValue('text');
            if (text==='') {
                throw new OmitedError(block,'text','uialert');
            }
            text = aicFunctions.pre('RawString')(text,block,'text','uialert');
            var code = aicFunctions.defaultCode('uialert',eval('['+aicBlocks['uialert'].args.join(',')+']'),block);
            return code;
        },
        "args": ["text"],
        "argsType": ["field"],
        "argsGrammarName": ["RawString"],
        "omitted": [false],
        "multi": [false],
        "fieldDefault": function (keyOrIndex) {
            return aicFunctions.fieldDefault('uialert',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return aicFunctions.xmlText('uialert',inputs,next,isShadow,comment,attribute);
        }
    },
    "danger": {
        "type": "statement",
        "json": {
            "type": "danger",
            "message0": "设置危险度： %1 无渐变 %2",
            "args0": [
                Object.assign({},aicBlocks.Int,{
                    "name": "danger",
                    "value": 9
                }),
                Object.assign({},aicBlocks.Bool,{
                    "name": "immediate",
                    "checked": false
                })
            ],
            "inputsInline": true,
            "tooltip": "",
            "helpUrl": "",
            "colour": 30,
            "previousStatement": "danger",
            "nextStatement": aicBlocks.statement
        },
        "generFunc": function(block) {
            var danger = block.getFieldValue('danger');
            danger = aicFunctions.pre('Int')(danger,block,'danger','danger');
            var immediate = block.getFieldValue('immediate') === 'TRUE';
            immediate = aicFunctions.pre('Bool')(immediate,block,'immediate','danger');
            var code = aicFunctions.defaultCode('danger',eval('['+aicBlocks['danger'].args.join(',')+']'),block);
            return code;
        },
        "args": ["danger","immediate"],
        "argsType": ["field","field"],
        "argsGrammarName": ["Int","Bool"],
        "omitted": [false,false],
        "multi": [false,false],
        "fieldDefault": function (keyOrIndex) {
            return aicFunctions.fieldDefault('danger',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return aicFunctions.xmlText('danger',inputs,next,isShadow,comment,attribute);
        }
    },
    "gfc_set": {
        "type": "statement",
        "json": {
            "type": "gfc_set",
            "message0": "变量赋值： GFC[ %1 ] =  %2 不减少 %3",
            "args0": [
                Object.assign({},aicBlocks.RawString,{
                    "name": "id",
                    "text": "PVV0_KILLED"
                }),
                Object.assign({},aicBlocks.RawString,{
                    "name": "value",
                    "text": "GFC[PVV0_KILLED]+1"
                }),
                Object.assign({},aicBlocks.Bool,{
                    "name": "max",
                    "checked": false
                })
            ],
            "inputsInline": true,
            "tooltip": "",
            "helpUrl": "",
            "colour": 30,
            "previousStatement": "gfc_set",
            "nextStatement": aicBlocks.statement
        },
        "generFunc": function(block) {
            var id = block.getFieldValue('id');
            if (id==='') {
                throw new OmitedError(block,'id','gfc_set');
            }
            id = aicFunctions.pre('RawString')(id,block,'id','gfc_set');
            var value = block.getFieldValue('value');
            if (value==='') {
                throw new OmitedError(block,'value','gfc_set');
            }
            value = aicFunctions.pre('RawString')(value,block,'value','gfc_set');
            var max = block.getFieldValue('max') === 'TRUE';
            max = aicFunctions.pre('Bool')(max,block,'max','gfc_set');
            var code = aicFunctions.defaultCode('gfc_set',eval('['+aicBlocks['gfc_set'].args.join(',')+']'),block);
            return code;
        },
        "args": ["id","value","max"],
        "argsType": ["field","field","field"],
        "argsGrammarName": ["RawString","RawString","Bool"],
        "omitted": [false,false,false],
        "multi": [false,false,false],
        "fieldDefault": function (keyOrIndex) {
            return aicFunctions.fieldDefault('gfc_set',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return aicFunctions.xmlText('gfc_set',inputs,next,isShadow,comment,attribute);
        }
    },
    "engine": {
        "type": "statement",
        "json": {
            "type": "engine",
            "message0": "老师/伊夏特殊动作： 角色 %1 动作编号 %2",
            "args0": [
                Object.assign({},aicBlocks.Engine_List,{
                    "name": "who",
                    "default": "PrimulaPVV11"
                }),
                Object.assign({},aicBlocks.Int,{
                    "name": "id",
                    "value": 1
                })
            ],
            "inputsInline": true,
            "tooltip": "",
            "helpUrl": "",
            "colour": 30,
            "previousStatement": "engine",
            "nextStatement": aicBlocks.statement
        },
        "generFunc": function(block) {
            var who = block.getFieldValue('who');
            who = aicFunctions.pre('Engine_List')(who,block,'who','engine');
            var id = block.getFieldValue('id');
            id = aicFunctions.pre('Int')(id,block,'id','engine');
            var code = aicFunctions.defaultCode('engine',eval('['+aicBlocks['engine'].args.join(',')+']'),block);
            return code;
        },
        "args": ["who","id"],
        "argsType": ["field","field"],
        "argsGrammarName": ["Engine_List","Int"],
        "omitted": [false,false],
        "multi": [false,false],
        "fieldDefault": function (keyOrIndex) {
            return aicFunctions.fieldDefault('engine',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return aicFunctions.xmlText('engine',inputs,next,isShadow,comment,attribute);
        }
    },
    "tpmap_house": {
        "type": "statement",
        "json": {
            "type": "tpmap_house",
            "message0": "地图传送（家里）： %1 x= %2 y= %3",
            "args0": [
                Object.assign({},aicBlocks.House_List,{
                    "name": "mapid",
                    "default": "house_road"
                }),
                Object.assign({},aicBlocks.Int,{
                    "name": "x",
                    "value": 30
                }),
                Object.assign({},aicBlocks.Int,{
                    "name": "y",
                    "value": 0
                })
            ],
            "inputsInline": true,
            "tooltip": "",
            "helpUrl": "",
            "colour": 30,
            "previousStatement": "tpmap_house",
            "nextStatement": aicBlocks.statement
        },
        "generFunc": function(block) {
            var mapid = block.getFieldValue('mapid');
            mapid = aicFunctions.pre('House_List')(mapid,block,'mapid','tpmap_house');
            var x = block.getFieldValue('x');
            x = aicFunctions.pre('Int')(x,block,'x','tpmap_house');
            var y = block.getFieldValue('y');
            y = aicFunctions.pre('Int')(y,block,'y','tpmap_house');
            var code = aicFunctions.defaultCode('tpmap_house',eval('['+aicBlocks['tpmap_house'].args.join(',')+']'),block);
            return code;
        },
        "args": ["mapid","x","y"],
        "argsType": ["field","field","field"],
        "argsGrammarName": ["House_List","Int","Int"],
        "omitted": [false,false,false],
        "multi": [false,false,false],
        "fieldDefault": function (keyOrIndex) {
            return aicFunctions.fieldDefault('tpmap_house',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return aicFunctions.xmlText('tpmap_house',inputs,next,isShadow,comment,attribute);
        }
    },
    "tpmap_battle": {
        "type": "statement",
        "json": {
            "type": "tpmap_battle",
            "message0": "地图传送（战斗）： %1 x= %2 y= %3",
            "args0": [
                Object.assign({},aicBlocks.Battle_List,{
                    "name": "mapid",
                    "default": "forest_mushpot"
                }),
                Object.assign({},aicBlocks.Int,{
                    "name": "x",
                    "value": 22
                }),
                Object.assign({},aicBlocks.Int,{
                    "name": "y",
                    "value": 18
                })
            ],
            "inputsInline": true,
            "tooltip": "",
            "helpUrl": "",
            "colour": 30,
            "previousStatement": "tpmap_battle",
            "nextStatement": aicBlocks.statement
        },
        "generFunc": function(block) {
            var mapid = block.getFieldValue('mapid');
            mapid = aicFunctions.pre('Battle_List')(mapid,block,'mapid','tpmap_battle');
            var x = block.getFieldValue('x');
            x = aicFunctions.pre('Int')(x,block,'x','tpmap_battle');
            var y = block.getFieldValue('y');
            y = aicFunctions.pre('Int')(y,block,'y','tpmap_battle');
            var code = aicFunctions.defaultCode('tpmap_battle',eval('['+aicBlocks['tpmap_battle'].args.join(',')+']'),block);
            return code;
        },
        "args": ["mapid","x","y"],
        "argsType": ["field","field","field"],
        "argsGrammarName": ["Battle_List","Int","Int"],
        "omitted": [false,false,false],
        "multi": [false,false,false],
        "fieldDefault": function (keyOrIndex) {
            return aicFunctions.fieldDefault('tpmap_battle',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return aicFunctions.xmlText('tpmap_battle',inputs,next,isShadow,comment,attribute);
        }
    },
    "tpmap_chest": {
        "type": "statement",
        "json": {
            "type": "tpmap_chest",
            "message0": "地图传送（宝箱）： %1 x= %2 y= %3",
            "args0": [
                Object.assign({},aicBlocks.Chest_List,{
                    "name": "mapid",
                    "default": "forest_tc"
                }),
                Object.assign({},aicBlocks.Int,{
                    "name": "x",
                    "value": 22
                }),
                Object.assign({},aicBlocks.Int,{
                    "name": "y",
                    "value": 18
                })
            ],
            "inputsInline": true,
            "tooltip": "",
            "helpUrl": "",
            "colour": 30,
            "previousStatement": "tpmap_chest",
            "nextStatement": aicBlocks.statement
        },
        "generFunc": function(block) {
            var mapid = block.getFieldValue('mapid');
            mapid = aicFunctions.pre('Chest_List')(mapid,block,'mapid','tpmap_chest');
            var x = block.getFieldValue('x');
            x = aicFunctions.pre('Int')(x,block,'x','tpmap_chest');
            var y = block.getFieldValue('y');
            y = aicFunctions.pre('Int')(y,block,'y','tpmap_chest');
            var code = aicFunctions.defaultCode('tpmap_chest',eval('['+aicBlocks['tpmap_chest'].args.join(',')+']'),block);
            return code;
        },
        "args": ["mapid","x","y"],
        "argsType": ["field","field","field"],
        "argsGrammarName": ["Chest_List","Int","Int"],
        "omitted": [false,false,false],
        "multi": [false,false,false],
        "fieldDefault": function (keyOrIndex) {
            return aicFunctions.fieldDefault('tpmap_chest',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return aicFunctions.xmlText('tpmap_chest',inputs,next,isShadow,comment,attribute);
        }
    },
    "tpmap_other": {
        "type": "statement",
        "json": {
            "type": "tpmap_other",
            "message0": "地图传送（其他）： %1 x= %2 y= %3",
            "args0": [
                Object.assign({},aicBlocks.Map_Other_List,{
                    "name": "mapid",
                    "default": "forest_ruin_station"
                }),
                Object.assign({},aicBlocks.Int,{
                    "name": "x",
                    "value": 22
                }),
                Object.assign({},aicBlocks.Int,{
                    "name": "y",
                    "value": 18
                })
            ],
            "inputsInline": true,
            "tooltip": "",
            "helpUrl": "",
            "colour": 30,
            "previousStatement": "tpmap_other",
            "nextStatement": aicBlocks.statement
        },
        "generFunc": function(block) {
            var mapid = block.getFieldValue('mapid');
            mapid = aicFunctions.pre('Map_Other_List')(mapid,block,'mapid','tpmap_other');
            var x = block.getFieldValue('x');
            x = aicFunctions.pre('Int')(x,block,'x','tpmap_other');
            var y = block.getFieldValue('y');
            y = aicFunctions.pre('Int')(y,block,'y','tpmap_other');
            var code = aicFunctions.defaultCode('tpmap_other',eval('['+aicBlocks['tpmap_other'].args.join(',')+']'),block);
            return code;
        },
        "args": ["mapid","x","y"],
        "argsType": ["field","field","field"],
        "argsGrammarName": ["Map_Other_List","Int","Int"],
        "omitted": [false,false,false],
        "multi": [false,false,false],
        "fieldDefault": function (keyOrIndex) {
            return aicFunctions.fieldDefault('tpmap_other',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return aicFunctions.xmlText('tpmap_other',inputs,next,isShadow,comment,attribute);
        }
    },
    "pe": {
        "type": "statement",
        "json": {
            "type": "pe",
            "message0": "后期特效： %1 完成帧数（-1表示撤去） %2",
            "args0": [
                Object.assign({},aicBlocks.PE_List,{
                    "name": "effect",
                    "default": "ZOOM2"
                }),
                Object.assign({},aicBlocks.RawString,{
                    "name": "tick",
                    "text": "60"
                })
            ],
            "inputsInline": true,
            "tooltip": "",
            "helpUrl": "",
            "colour": 30,
            "previousStatement": "pe",
            "nextStatement": aicBlocks.statement
        },
        "generFunc": function(block) {
            var effect = block.getFieldValue('effect');
            effect = aicFunctions.pre('PE_List')(effect,block,'effect','pe');
            var tick = block.getFieldValue('tick');
            if (tick==='') {
                throw new OmitedError(block,'tick','pe');
            }
            tick = aicFunctions.pre('RawString')(tick,block,'tick','pe');
            var code = aicFunctions.defaultCode('pe',eval('['+aicBlocks['pe'].args.join(',')+']'),block);
            return code;
        },
        "args": ["effect","tick"],
        "argsType": ["field","field"],
        "argsGrammarName": ["PE_List","RawString"],
        "omitted": [false,false],
        "multi": [false,false],
        "fieldDefault": function (keyOrIndex) {
            return aicFunctions.fieldDefault('pe',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return aicFunctions.xmlText('pe',inputs,next,isShadow,comment,attribute);
        }
    },
    "if_s": {
        "type": "statement",
        "json": {
            "type": "if_s",
            "message0": "如果： %1 %2 %3 否则： %4 %5",
            "args0": [
                Object.assign({},aicBlocks.RawString,{
                    "name": "cond",
                    "text": "is_night"
                }),
                {
                    "type": "input_dummy"
                },
                {
                    "type": "input_statement",
                    "name": "then_",
                    "check": aicBlocks.statement
                },
                {
                    "type": "input_dummy"
                },
                {
                    "type": "input_statement",
                    "name": "else_",
                    "check": aicBlocks.statement
                }
            ],
            "tooltip": "",
            "helpUrl": "",
            "colour": 220,
            "previousStatement": "if_s",
            "nextStatement": aicBlocks.statement
        },
        "generFunc": function(block) {
            var cond = block.getFieldValue('cond');
            if (cond==='') {
                throw new OmitedError(block,'cond','if_s');
            }
            cond = aicFunctions.pre('RawString')(cond,block,'cond','if_s');
            var then_ = Blockly.JavaScript.statementToCode(block, 'then_');
            if (then_==='') {
                throw new OmitedError(block,'then_','if_s');
            }
            var else_ = Blockly.JavaScript.statementToCode(block, 'else_');
            if (else_==='') {
                throw new OmitedError(block,'else_','if_s');
            }
            var code = aicFunctions.defaultCode('if_s',eval('['+aicBlocks['if_s'].args.join(',')+']'),block);
            return code;
        },
        "args": ["cond","then_","else_"],
        "argsType": ["field","statement","statement"],
        "argsGrammarName": ["RawString","statement","statement"],
        "omitted": [false,false,false],
        "multi": [false,true,true],
        "fieldDefault": function (keyOrIndex) {
            return aicFunctions.fieldDefault('if_s',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return aicFunctions.xmlText('if_s',inputs,next,isShadow,comment,attribute);
        }
    },
    "select": {
        "type": "statement",
        "json": {
            "type": "select",
            "message0": "选项列表： %1 %2",
            "args0": [
                {
                    "type": "input_dummy"
                },
                {
                    "type": "input_statement",
                    "name": "choices",
                    "check": "choice"
                }
            ],
            "tooltip": "",
            "helpUrl": "",
            "colour": 220,
            "previousStatement": "select",
            "nextStatement": aicBlocks.statement
        },
        "generFunc": function(block) {
            var choices = Blockly.JavaScript.statementToCode(block, 'choices');
            if (choices==='') {
                throw new OmitedError(block,'choices','select');
            }
            var code = aicFunctions.defaultCode('select',eval('['+aicBlocks['select'].args.join(',')+']'),block);
            return code;
        },
        "args": ["choices"],
        "argsType": ["statement"],
        "argsGrammarName": ["choice"],
        "omitted": [false],
        "multi": [true],
        "fieldDefault": function (keyOrIndex) {
            return aicFunctions.fieldDefault('select',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return aicFunctions.xmlText('select',inputs,next,isShadow,comment,attribute);
        }
    },
    "choice": {
        "type": "statement",
        "json": {
            "type": "choice",
            "message0": "子选项： %1 %2 %3",
            "args0": [
                Object.assign({},aicBlocks.RawString,{
                    "name": "text",
                    "text": "不害怕"
                }),
                {
                    "type": "input_dummy"
                },
                {
                    "type": "input_statement",
                    "name": "instructions",
                    "check": aicBlocks.statement
                }
            ],
            "tooltip": "",
            "helpUrl": "",
            "colour": 260,
            "previousStatement": "choice",
            "nextStatement": aicBlocks.statement
        },
        "generFunc": function(block) {
            var text = block.getFieldValue('text');
            if (text==='') {
                throw new OmitedError(block,'text','choice');
            }
            text = aicFunctions.pre('RawString')(text,block,'text','choice');
            var instructions = Blockly.JavaScript.statementToCode(block, 'instructions');
            if (instructions==='') {
                throw new OmitedError(block,'instructions','choice');
            }
            var code = aicFunctions.defaultCode('choice',eval('['+aicBlocks['choice'].args.join(',')+']'),block);
            return code;
        },
        "args": ["text","instructions"],
        "argsType": ["field","statement"],
        "argsGrammarName": ["RawString","statement"],
        "omitted": [false,false],
        "multi": [false,true],
        "fieldDefault": function (keyOrIndex) {
            return aicFunctions.fieldDefault('choice',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return aicFunctions.xmlText('choice',inputs,next,isShadow,comment,attribute);
        }
    },
    "do_while": {
        "type": "statement",
        "json": {
            "type": "do_while",
            "message0": "循环：重复以下 %1 %2 只要 %3",
            "args0": [
                {
                    "type": "input_dummy"
                },
                {
                    "type": "input_statement",
                    "name": "instructions",
                    "check": aicBlocks.statement
                },
                Object.assign({},aicBlocks.RawString,{
                    "name": "cond",
                    "text": "noel_cloth_dirty"
                })
            ],
            "tooltip": "",
            "helpUrl": "",
            "colour": 220,
            "previousStatement": "do_while",
            "nextStatement": aicBlocks.statement
        },
        "generFunc": function(block) {
            var instructions = Blockly.JavaScript.statementToCode(block, 'instructions');
            if (instructions==='') {
                throw new OmitedError(block,'instructions','do_while');
            }
            var cond = block.getFieldValue('cond');
            if (cond==='') {
                throw new OmitedError(block,'cond','do_while');
            }
            cond = aicFunctions.pre('RawString')(cond,block,'cond','do_while');
            var code = aicFunctions.defaultCode('do_while',eval('['+aicBlocks['do_while'].args.join(',')+']'),block);
            return code;
        },
        "args": ["instructions","cond"],
        "argsType": ["statement","field"],
        "argsGrammarName": ["statement","RawString"],
        "omitted": [false,false],
        "multi": [true,false],
        "fieldDefault": function (keyOrIndex) {
            return aicFunctions.fieldDefault('do_while',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return aicFunctions.xmlText('do_while',inputs,next,isShadow,comment,attribute);
        }
    },
    "until_do": {
        "type": "statement",
        "json": {
            "type": "until_do",
            "message0": "循环：除非 %1 %2 %3 否则重复以上",
            "args0": [
                Object.assign({},aicBlocks.RawString,{
                    "name": "cond",
                    "text": "noel_torned"
                }),
                {
                    "type": "input_dummy"
                },
                {
                    "type": "input_statement",
                    "name": "instructions",
                    "check": aicBlocks.statement
                }
            ],
            "tooltip": "",
            "helpUrl": "",
            "colour": 220,
            "previousStatement": "until_do",
            "nextStatement": aicBlocks.statement
        },
        "generFunc": function(block) {
            var cond = block.getFieldValue('cond');
            if (cond==='') {
                throw new OmitedError(block,'cond','until_do');
            }
            cond = aicFunctions.pre('RawString')(cond,block,'cond','until_do');
            var instructions = Blockly.JavaScript.statementToCode(block, 'instructions');
            if (instructions==='') {
                throw new OmitedError(block,'instructions','until_do');
            }
            var code = aicFunctions.defaultCode('until_do',eval('['+aicBlocks['until_do'].args.join(',')+']'),block);
            return code;
        },
        "args": ["cond","instructions"],
        "argsType": ["field","statement"],
        "argsGrammarName": ["RawString","statement"],
        "omitted": [false,false],
        "multi": [false,true],
        "fieldDefault": function (keyOrIndex) {
            return aicFunctions.fieldDefault('until_do',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return aicFunctions.xmlText('until_do',inputs,next,isShadow,comment,attribute);
        }
    },
    "custom": {
        "type": "statement",
        "json": {
            "type": "custom",
            "message0": "原生指令： %1",
            "args0": [
                Object.assign({},aicBlocks.RawString,{
                    "name": "instruction",
                    "text": "// 这是注释"
                })
            ],
            "inputsInline": true,
            "tooltip": "",
            "helpUrl": "",
            "colour": 300,
            "previousStatement": "custom",
            "nextStatement": aicBlocks.statement
        },
        "generFunc": function(block) {
            var instruction = block.getFieldValue('instruction');
            if (instruction==='') {
                throw new OmitedError(block,'instruction','custom');
            }
            instruction = aicFunctions.pre('RawString')(instruction,block,'instruction','custom');
            var code = aicFunctions.defaultCode('custom',eval('['+aicBlocks['custom'].args.join(',')+']'),block);
            return code;
        },
        "args": ["instruction"],
        "argsType": ["field"],
        "argsGrammarName": ["RawString"],
        "omitted": [false],
        "multi": [false],
        "fieldDefault": function (keyOrIndex) {
            return aicFunctions.fieldDefault('custom',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return aicFunctions.xmlText('custom',inputs,next,isShadow,comment,attribute);
        }
    }
});

//生成代码中,当一个不允许省略的值或块省略时,会抛出这个错误
function OmitedError(block, var_, rule, fileName, lineNumber) {
    var message = 'no omitted '+var_+' at '+rule;
    var instance = new Error(message, fileName, lineNumber);
    instance.block = block;
    instance.varName = var_;
    instance.blockName = rule;
    instance.name = 'OmitedError';
    Object.setPrototypeOf(instance, Object.getPrototypeOf(this));
    if (Error.captureStackTrace) {
        Error.captureStackTrace(instance, OmitedError);
    }
    return instance;
}

OmitedError.prototype = Object.create(Error.prototype);
OmitedError.prototype.constructor = OmitedError;
//处理此错误的omitedcheckUpdateFunction定义在下面

//生成代码中,当一个不允许多个语句输入的块放入多语句时,会抛出这个错误
function MultiStatementError(block, var_, rule, fileName, lineNumber) {
    var message = 'no multi-Statement '+var_+' at '+rule;
    var instance = new Error(message, fileName, lineNumber);
    instance.block = block;
    instance.varName = var_;
    instance.blockName = rule;
    instance.name = 'MultiStatementError';
    Object.setPrototypeOf(instance, Object.getPrototypeOf(this));
    if (Error.captureStackTrace) {
        Error.captureStackTrace(instance, MultiStatementError);
    }
    return instance;
}

MultiStatementError.prototype = Object.create(Error.prototype);
MultiStatementError.prototype.constructor = MultiStatementError;
//处理此错误的omitedcheckUpdateFunction定义在下面

aicFunctions={}

aicFunctions.Int_pre = function(intstr) {
    return parseInt(intstr);
}

aicFunctions.Number_pre = function(intstr) {
    return parseFloat(intstr);
}

//返回各LexerRule文本域的预处理函数,方便用来统一转义等等
aicFunctions.pre = function(LexerId) {
    if (aicFunctions.hasOwnProperty(LexerId+'_pre')) {
        return aicFunctions[LexerId+'_pre'];
    }
    return function(obj,block,fieldName,blockType){return obj}
}

// aicFunctions.fieldDefault
// 根据输入是整数字符串或null
// 第index个或者名字为key的域的默认值, null时返回所有field默认值的数组
aicFunctions.fieldDefault = function (ruleName,keyOrIndex) {
    var rule = aicBlocks[ruleName];
    var iskey=typeof keyOrIndex==typeof '';
    var isindex=typeof keyOrIndex==typeof 0;
    function args0_content_to_default(cnt) {
        var key = ({
            'field_input':'text',
            'field_multilinetext':'text',
            'field_number':'value',
            'field_dropdown':'default',
            'field_checkbox':'checked',
            'field_colour':'colour',
            'field_angle':'angle',
            // 'field_image':'src'
        })[cnt.type];
        return cnt[key];
    }
    var allDefault=[];
    for(var ii=0,index=-1,cnt;cnt=rule.json.args0[ii];ii++){
        if (!cnt.name || cnt.type.slice(0,5)!='field' || cnt.type=='field_image') continue;
        index++;
        if (iskey && cnt.name==keyOrIndex)return args0_content_to_default(cnt);
        if (isindex && index==keyOrIndex)return args0_content_to_default(cnt);
        allDefault.push(args0_content_to_default(cnt))
    }
    if (iskey || isindex) return undefined;
    return allDefault;
}

// aicFunctions.defaultCode_TEXT
aicFunctions.defaultCode_TEXT = function (ruleName,args,block) {
    var rule = aicBlocks[ruleName];
    var message=rule.json.message0;
    var args0=rule.json.args0;
    for(var ii=0,jj=0;ii<args0.length;ii++){
        message=message.split(new RegExp('%'+(ii+1)+'\\b'));
        var content='\n';
        if (args0[ii].type==='input_dummy') {
            message[1]=message[1].slice(1);
        } else if(args0[ii].type==='field_image') {
            content=args0[ii].alt;
        } else {
            content=args[jj++];
        }
        if (args0[ii].type=="input_statement") {
            message[0]=message[0]+'\n';
            message[1]=message[1].slice(1);
        }
        message=message.join(content);
    }
    if (rule.type=='statement') {
        message=message+'\n';
    }
    return message;
}

aicFunctions.defaultCode_JSON_TYPE='type'

aicFunctions.parserPre={}
aicFunctions.parserPre.pre = function(LexerId) {
    if (aicFunctions.parserPre.hasOwnProperty(LexerId+'_pre')) {
        return aicFunctions.parserPre[LexerId+'_pre'];
    }
    return function(obj,blockObj,fieldName,blockType,index){return obj}
}
/** @class */
aicFunctions.parserClass = function (params) {
}
aicFunctions.parserClass.prototype.parse = function (obj,next) {
    var blockType = obj[aicFunctions.defaultCode_JSON_TYPE]
    var rule = aicBlocks[blockType]
    if (aicFunctions.parserPre.hasOwnProperty(blockType+'_pre')) {
        obj = aicFunctions.parserPre[blockType+'_pre'](obj)
    }
    var input = []
    for (var index = 0; index < rule.args.length; index++) {
        var dobj = obj[rule.args[index]];
        if (rule.argsType[index]==='statement') {
            if (!rule.multi[index])dobj=[dobj];
            var snext=null
            while (dobj.length) {
                var ds=dobj.pop()
                snext=this.parse(ds,snext)
            }
            input.push(snext)
        } else if (rule.argsType[index]==='value') {
            input.push(this.parse(dobj))
        } else {
            var LexerId = rule.argsGrammarName[index]
            input.push(aicFunctions.parserPre.pre(LexerId)(dobj,obj,rule.args[index],blockType,index))
        }
    }
    return rule.xmlText(input,next)
}
aicFunctions.parser=new aicFunctions.parserClass()
aicFunctions.parse=function(obj){
    var xml_text = aicFunctions.parser.parse(obj);
    var xml = Blockly.Xml.textToDom('<xml>'+xml_text+'</xml>');
    aicFunctions.workspace().clear();
    Blockly.Xml.domToWorkspace(xml, aicFunctions.workspace());
}

// aicFunctions.defaultCode_JSON
aicFunctions.defaultCode_JSON = function (ruleName,args,block) {
    var rule = aicBlocks[ruleName];
    var values=args
    var output={}
    var ret=''
    if (rule.type==='statement'||rule.type==='value') {
        output[aicFunctions.defaultCode_JSON_TYPE]=rule.json.type
        ret=block.getNextBlock()==null?'':','
    }
    for (var index = 0; index < values.length; index++) {
        var value = values[index];
        if (rule.argsType[index]==='statement') {
            output[rule.args[index]]=eval('['+value+']')
            if (!rule.multi[index]) output[rule.args[index]]=output[rule.args[index]][0];
        } else if (rule.argsType[index]==='value') {
            output[rule.args[index]]=eval('('+value+')')
        } else {
            output[rule.args[index]]=value
        }
    }
    ret=JSON.stringify(output,null,4)+ret
    return ret
}

// aicFunctions.defaultCode
aicFunctions.defaultCode=aicFunctions.defaultCode_JSON

// aicFunctions.xmlText
// 构造这个方法是为了能够不借助workspace,从语法树直接构造图块结构
// inputs的第i个元素是第i个args的xmlText,null或undefined表示空
// next是其下一个语句的xmlText
aicFunctions.xmlText = function (ruleName,inputs,next,isShadow,comment,attribute) {
    var rule = aicBlocks[ruleName];
    var blocktext = isShadow?'shadow':'block';
    var xmlText = [];
    xmlText.push('<'+blocktext+' type="'+ruleName+'"');
    for (var attr in attribute) {
        xmlText.push(' '+attr+'="'+attribute[attr]+'"');
    }
    xmlText.push('>');
    if(!inputs)inputs=[];
    var inputIsArray = inputs instanceof Array;
    for (var ii=0,inputType;inputType=rule.argsType[ii];ii++) {
        var input = inputIsArray?inputs[ii]:inputs[rule.args[ii]];
        var _input = '';
        var noinput = input==null;
        if(noinput && inputType==='field' && aicBlocks[rule.argsGrammarName[ii]].type!=='field_dropdown') continue;
        if(noinput && inputType==='field') {
            noinput = false;
            input = rule.fieldDefault(rule.args[ii])
        }
        if(noinput) input = '';
        if(inputType==='field' && aicBlocks[rule.argsGrammarName[ii]].type==='field_checkbox')input=input?'TRUE':'FALSE';
        if(inputType!=='field') {
            var subList = false;
            var subrulename = rule.argsGrammarName[ii];
            var subrule = aicBlocks[subrulename];
            if (subrule instanceof Array) {
                subrulename=subrule[subrule.length-1];
                subrule = aicBlocks[subrulename];
                subList = true;
            }
            _input = subrule.xmlText([],null,true);
            if(noinput && !subList && !isShadow) {
                //无输入的默认行为是: 如果语句块的备选方块只有一个,直接代入方块
                input = subrule.xmlText();
            }
        }
        xmlText.push('<'+inputType+' name="'+rule.args[ii]+'">');
        xmlText.push(_input+input);
        xmlText.push('</'+inputType+'>');
    }
    if(comment){
        xmlText.push('<comment><![CDATA[');
        xmlText.push(comment.replace(/]]>/g,'] ] >'));
        xmlText.push(']]></comment>');
    }
    if (next) {
        xmlText.push('<next>');
        xmlText.push(next);
        xmlText.push('</next>');
    }
    xmlText.push('</'+blocktext+'>');
    return xmlText.join('');
}

// aicFunctions.blocksIniter
// 把各方块的信息注册到Blockly中
aicFunctions.blocksIniter = function(){
    var blocksobj = aicBlocks;
    for(var key in blocksobj) {
        var value = blocksobj[key];
        if(value instanceof Array)continue;
        if(/^[A-Z].*$/.exec(key))continue;
        (function(key,value){
            if (value.menu && value.menu.length) {
                var menuRegisterMixin={
                    customContextMenu: function(options) {
                        for(var ii=0,op;op=value.menu[ii];ii++){
                            var option = {enabled: true};
                            option.text = op[0];
                            var check = 'function('
                            if (option.text.slice(0,check.length)==check){
                                option.text=eval('('+option.text+')(this)');
                            }
                            (function(block,fstr){
                                option.callback = function(){
                                    eval(fstr)
                                }
                            })(this,op[1]);
                            options.push(option);
                        }
                    }
                };
                value.json.extensions=value.json.extensions||[];
                var mixinName = 'contextMenu_aic_'+value.json.type
                value.json.extensions.push(mixinName)
                Blockly.Extensions.registerMixin(mixinName,menuRegisterMixin);
            }
            Blockly.Blocks[key] = {
                init: function() {this.jsonInit(value.json);}
            }
            Blockly.JavaScript[key] = value.generFunc;
        })(key,value);
    }
}

aicFunctions.blocksIniter();

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

var workspace = Blockly.inject('blocklyDiv',{
    media: './media/',
    toolbox: toolbox,
    zoom:{
        controls: true,
        wheel: true,//false
        startScale: 1.0,
        maxScale: 3,
        minScale: 0.3,
        scaleSpeed: 1.08
    },
    trashcan: false,
});
aicFunctions.workspace = function(){return workspace}

function omitedcheckUpdateFunction(event) {
    // console.log(event);
    var codeAreaElement = document.getElementById('codeArea');
    var codeAreaFunc = function(err,data){document.getElementById('codeArea').innerHTML=err?String(err):data};
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

//自动禁用任何未连接到根块的块
workspace.addChangeListener(Blockly.Events.disableOrphans);

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