# 为 AiC 加入友方魔族
到目前为止，AiC 有着各种各样的魔族，其中非污染体包括：
1. 早在 0.09 就实装了的史莱姆
2. 不会动且没有 QTE 的蘑菇
3. 没有 QTE 的剑山
4. 只会扔石块和建造设备的木偶
5. 没有 QTE 且不靠近就不会动的海绵
6. 有 QTE 但不造成 HP 伤害的土蛇
7. 把 MP 当护盾用的幼犬
8. 诺艾儿还有 HP 时难以被其撅的妖狐
9.  有 QTE 但不加兴奋度的壁虎
10. 实时读取玩家输入的沼蛙
11. 抓走伊夏的森之领主
12. 不撅诺艾儿而用光束射她的机甲木偶
13. 昼伏夜出且会使用雷电魔法的愚者

而污染体（由上述 1~4 淋雨得到）的攻击则是不分敌我的，且污染体、木偶造物、愚者的雷电魔法（不包括妖狐的地面火）杀死其他魔族时会给本体永久提供高额属性加成。

在《[二创指南](https://aliceincradle.org/hashcode.html)》中，曾提到过<i>魔族的红色轮廓和方框都是用程序后期添加的</i>，因此可以针对部分魔族去修改其轮廓和方框的颜色，再从其招式或 AI 行动逻辑入手，将其改造为帮助诺艾儿战斗的【友方魔族】。

## dnSpy 工具的使用
尽管《二创指南》更推荐能够正确反编译 switch 语句的 dotPeek 而不是 dnSpy，但前者是英文界面且没有修改 dll 文件的能力。

本文以 Windows 专属的 dnSpy 为例进行讲解，读者如果使用的是其他 dotNet 逆向工具，可在参考本文的基础上查阅所用工具的资料。

适用于 AiC 的 dnSpy 是 https://github.com/dnSpy/dnSpy/releases 中的 dnSpy-net-win64.zip，下载它并解压后，请先将 AliceInCradle_Data 下的 Managed 文件夹备份到别处。

运行 dnSpy.exe（请确保最上面显示 C# 而不是 Visual Basic 或 IL），按下快捷键 Ctrl+O 打开文件选择窗口，然后找到 Managed 文件夹，全选其中所有的 dll 文件一起打开。
> 在游戏的压缩包里可以看到这些 dll 的修改日期，其中只有十几个在 2022 年以后被修改。但仍然要一起打开，否则下面点击【编译】按钮时可能会报错。

对于技术二创，最常修改的是 Assembly-CSharp 和 unsafeAssem 这两个 dll，但要快速找到改什么地方可不容易，下面的快捷键会很有帮助。
1. Ctrl+Shift+K: 进行全局搜索，这是定位到所要查看或修改的文件的第一步。
2. Ctrl+F: 在已打开的标签页或编辑器中搜索（在编辑器中还可以执行替换操作），并对搜索结果轮询。
3. Ctrl+Shift+R: 对光标所在处的标识符进行语义分析，从而找到它在哪里被用到（如读写）。
4. Ctrl+Shift+E: 编辑光标所在处的函数（C# 语言中称为【方法】），编辑完成后点击【编译】按钮。

有时点击【编译】按钮会报错，最常见的原因是有被引用的其他 dll 文件没有打开，其次是对于单个函数的反编译结果有语法错误。

对于后一种情况，可以尝试右击光标所在处并在弹出的菜单中选择【编辑类】（菜单中还有【添加类成员】和【添加类】，高级用户可能用到）。

如果还不奏效，可以在右击弹出的菜单中选择【编辑 IL 指令】，这种方法难度较高，一般只能修改个别常量。
> 试试看吧：哔哩哔哩有很多使用 dnSpy 去除游戏中的马赛克的教学视频，请找到一个适用于 0.25f 的并按照它成功操作。

## 魔族颜色的修改
相关代码全部位于 Assembly-CSharp.dll 反编译出的 nel 文件夹。

其中 EnemyMeshDrawer 类有四个 429 开头的大整数，将其转换为十六进制可以发现都是【ffrrggbb】的颜色，因此可以改动它们来修改魔族轮廓和方框的颜色。

为了让这种修改只对特定种类的魔族生效，需要进行语义分析，结果如下：
1. `def_mul_color = 4293055186U;`十六进制为 FFE2D2D2，白色偏红，不需要修改。
2. `add_color_eye_fade_out = 4294901760U;`十六进制为 FFFF0000，方框的纯红色。
3. `BasicColorInit(MeshDrawer Md)`函数中的两个 4294905358U，十六进制为 FFFF0E0E，轮廓的几乎纯红色。

那么就需要对上述的 2 和 3 分别作修改。由于 EnemyMeshDrawer 类无法获取敌人 id，因此需要找到其他类里的相关代码，结果如下：
1. add_color_eye_fade_out 在子类 EnemyAnimator 的一个很长的函数 fnDrawEyeInner 中被读取。
2. BasicColorInit 函数在另外三个类的 redrawBodyMeshInner 函数中被调用。
3. 这四个类都能获取到敌人 id。

那么答案呼之欲出，先在 EnemyAnimator 子类的 fnDrawEyeInner 函数体开头判定敌人 id 并修改 this.add_color_eye_fade_out 为不同的颜色，再在另外三个类的 redrawBodyMeshInner 函数体中把对 BasicColorInit 函数的调用给 inline 了，并在此判定敌人 id 来使用不同的颜色。
> inline 在这里指一种源代码重构的方法，即把某个函数的调用语句全部改成抄写一遍函数体并把形参都换成实参，这样做时要注意标识符冲突。

以愚者（ENEMYID.MAGE_0）为例，下面是手把手的操作步骤教学：
1. 打开 Managed 文件夹下的所有 dll 文件，Ctrl+Shift+K 搜索 fnDrawEyeInner，双击搜索结果中对应 nel.EnemyAnimator 的那个（注意不是 nel.EnemyAnimatorSpine）。
2. Ctrl+Shift+E 编辑该函数，在开头的`if (this.CurFrmData == null)`上面新增一行，输入`if (this.Mv.id == ENEMYID.MAGE_0) this.add_color_eye_fade_out = 0xff66ccff;`。这里的 66ccff 是一个很出名的颜色，读者可以按需修改，但不要动前面的 0xff。
3. 再次 Ctrl+Shift+K 搜索 redrawBodyMeshInner，按住 Shift 双击搜索结果中对应 EnemyAnimatorBase, EnemyAnimatorSpine, EnemyMeshDrawerMagicCane 的三个（注意不要点到 redrawBodyMeshInnerAfter），按住 Shift 是为了打开新标签页。
4. 对于三个 redrawBodyMeshInner 函数分别按下 Ctrl+Shift+E 编辑，并将其中的`base.BasicColorInit(this.Md);`一行分别替换为以下三段代码（`/*`和`*/`之间为行号）。
5. 四处函数编辑都编译成功后，Ctrl+Shift+S 保存，注意不要在没有备份的情况下覆盖原文件。dll 文件保存成功后可用其替换游戏原文件，测试无误后即可作为补丁发布。
``` cs
/*1*/float num2 = (float)this.CAdd.a / 255f;
/*2*/num2 = X.Scr(num2, num2); // EnemyAnimatorBase 用 num2 是因为 num 已经被用掉了
/*3*/uint color = 4294905358U;
/*4*/if (this.Mv.id == ENEMYID.MAGE_0) color = 0xff66ccff;
/*5*/Md.Col = Md.ColGrd.Set(color).multiply(this.CMul.C, false).blend(color, 1f - (float)this.CMul.a / 255f * 0.5f).Scr(this.CAdd, num2).mulA(this.alpha_).C;

/*1*/float num = (float)this.CAdd.a / 255f;
/*2*/num = X.Scr(num, num);
/*3*/uint color = 4294905358U; // EnemyAnimatorSpine 中上一行是 num 下一行是 Mv
/*4*/if (this.Mv.id == ENEMYID.MAGE_0) color = 0xff66ccff;
/*5*/Md.Col = Md.ColGrd.Set(color).multiply(this.CMul.C, false).blend(color, 1f - (float)this.CMul.a / 255f * 0.5f).Scr(this.CAdd, num).mulA(this.alpha_).C;

/*1*/float num = (float)this.CAdd.a / 255f;
/*2*/num = X.Scr(num, num);
/*3*/uint color = 4294905358U; // EnemyMeshDrawerMagicCane 中下一行不是 Mv 而是 En
/*4*/if (this.En.id == ENEMYID.MAGE_0) color = 0xff66ccff;
/*5*/Md.Col = Md.ColGrd.Set(color).multiply(this.CMul.C, false).blend(color, 1f - (float)this.CMul.a / 255f * 0.5f).Scr(this.CAdd, num).mulA(this.alpha_).C;
```
所有 ENEMYID.XXX 中 XXX 的取值范围如下：
|id|敌人|
|---|---|
|SLIME_0|史莱姆|
|SLIME_TUTORIAL|教学史莱姆|
|SLIME_0_FLW|未知史莱姆|
|MUSH_0|蘑菇|
|MUSH_FROZEN|冻结蘑菇|
|MUSH_0_FLW|未知蘑菇|
|PUPPY_0|幼犬|
|GOLEM_0|木偶|
|GOLEM_0_NM|持枪木偶？|
|SNAKE_0|土蛇|
|SNAKE_TUTORIAL|教学土蛇|
|SPONGE_0|海绵|
|UNI_0|剑山|
|MAGE_0|愚者|
|FOX_0|妖狐|
|GOLEMTOY_0|三角木马|
|GOLEMTOY_MKB|三角木马|
|GOLEMTOY_RM|干扰天线|
|GOLEMTOY_POD|导弹车|
|GOLEMTOY_BOW|光束弩|
|_GOLEMTOY_KIND|未知木偶造物|
|GECKO_0|壁虎|
|GECKO_0_FLW|未知壁虎|
|FROG_0|沼蛙|
|MECHGOLEM_0|机甲木偶|
|MECHGOLEM_1|机甲木偶|
|WANDER_PUPPET_NPC|木偶采购员|
|MGMFARM_COW_NPC|牧场的奶牛|
|BOSS_NUSI_0|森之领主|
|BOSS_NUSI_CAGE|伊夏的笼子|
|BOSS_NUSI_TENTACLE|森主的藤蔓|
|_OVERDRIVE_FLAG|污染体标识|

经过上述修改，可以看到愚者身体和法杖的轮廓、以及脸上和帽子飘带末端的方框都变成了想要的颜色。  
只剩下围绕着它的正方形框的颜色没有变化，这些正方形框代表它还能使用多少次魔法，可以通过吸收魔力来补充。暂时不知道怎么修改其颜色，也许不修改更好吧。

## 敌人招式的修改
光是修改了愚者的颜色还不能将其称作【友方】，因为它的雷电魔法会专门瞄准诺艾儿打。

考虑到雷电魔法的攻击判定不分敌我，因此一种思路（见下一节）是修改愚者的 AI 行为逻辑，使它的雷电魔法故意偏离诺艾儿，比如瞄准垂直或相反的方向。

而另一种思路则是替换掉愚者的魔法类型，让它咏唱诺艾儿的其他几种魔法或者【兽人的炸弹】，但这些魔法默认只伤害诺艾儿（这下愚者变智者了），需要同时修改攻击判定才能达到【友方】的效果。

在前述的 nel 文件夹下有大量的 NelNXxx 类，每个类代表一种敌人。以愚者 NelNMage 类为例，其中有这样的代码：  
`protected override MGKIND get_magic_kind() { return MGKIND.THUNDERBOLT; }`

这里的 MGKIND.XXX 就是魔法类型，XXX 的取值范围如下：
1. WHITEARROW: 纯白之箭，打诺艾儿很疼且会吹飞
2. FIREBALL: 聚能火球，速度很快且转弯不止八个方向
3. DROPBOMB: 地面炸弹，对诺艾儿有类似破盾的向上击飞
4. THUNDERBOLT: 雷霆电击，0.20 以来愚者的默认魔法
5. POWERBOMB: 兽人的炸弹，超大范围多段伤害但光污染

MGKIND.XXX 可以加减整数得到另一种魔法，比如给纯白之箭加 2 就会得到地面炸弹，因此可以用下面的代码让愚者从上述 5 种魔法中随机吟唱一种（其中 X.xors(n) 是哈酱写的一个函数，会得到小于正整数 n 的随机非负整数）。  
`protected override MGKIND get_magic_kind() { return MGKIND.WHITEARROW + X.xors(5); }`
> 试试看吧：除了愚者 NelNMage 类以外，森主战的伊夏 IxiaPVV104 和操场上的阿尔玛 AlmaPVV105 这两个类也有这个函数，不妨将她俩的魔法也改为雷霆电击看看会不会打到诺艾儿吧~

先考虑修改魔法的攻击判定，上述五种魔法分别位于 MgXxxXxx 类中，其中 XxxXxx 为魔法的大驼峰命名（Thunderbolt 除外，不知道为什么不是大写的 B）。

这五个类中最适合注入攻击判定的就是`public override bool run(MagicItem Mg, float fcnt)`函数了，只要在其中任何一个 run 函数开头的`if (Mg.phase ...)`上面新增一行代码`Mg.hittype |= MGHIT.PR; Mg.hittype &=~ MGHIT.EN;`，就能将该魔法强制变为只对【施法者以外的魔族】有攻击判定。
> |= 和 &=~ 是两种二进制位运算，简单地说 x|=y 会把 y 中为 1 的位在 x 中改成 1，而 x&=~y 会把 y 中为 1 的位在 x 中改成 0。

MGHIT.XXX 中的 XXX 取值范围如下 (1,2,4 之间可以叠加得到 3,5,6,7):
1. PR: 攻击敌人。
2. EN: 攻击玩家。
3. BERSERK: 攻击敌人和玩家，本质是 1+2=3。
4. HIT_TO_MYSELF: 攻击施法者？

通过这种办法可以得到差强人意的效果，其中【地面炸弹】和【兽人的炸弹】违和感最低（不过地面炸弹会被其他愚者引爆确实挺愚蠢的，而且对魔族伤害偏低），而【纯白之箭】和【聚能火球】因为还是瞄准诺艾儿所以会非常违和，需要配合接下来的瞄准逻辑修改。

## 瞄准逻辑的修改
如前所述，雷电魔法不分敌我，且它的瞄准分为两个阶段：
1. 以施法者的法杖为圆心，向周围某个方向打出一个光球，光球飞行一小段距离，如果碰到实体会造成少量伤害并消失。
2. 光球飞行期间，以光球的终点为圆心向某个方向瞄准，飞到终点后将对此方向发出雷电束，造成范围伤害和对诺艾儿的吹飞+麻痹效果。

那么对 MgThunderbolt 类的 run 函数代码进行分析，可以节选出以下关键内容：
``` cs
if (!Mg.already_reflected) {
  if ((double) Mg.t <= 6.0) {
    Mg.da = Mg.aim_agR; // 关键行 1
  }
  else {
    Mg.Ray.hittype |= HITTYPE.PR_AND_EN | HITTYPE.BERSERK_MYSELF;
    Mg.da = X.VALWALKANGLER(Mg.da, Mg.aim_agR, X.NI(23f / 1000f, 0.0008f, X.ZLINE(Mg.t - 6f, 50f)) * 6.28318548f);
  }
}
else
  Mg.da = Mg.sa; // 关键行 2
if ((double) Mg.t <= (double) Mg.Mn._0.accel_maxt) {
  Mg.sx += Mg.Mn._0.Spd(Mg.t) * fcnt * X.Cos(Mg.sa); // 关键行 3
  Mg.sy += -Mg.Mn._0.Spd(Mg.t) * fcnt * X.Sin(Mg.sa); // 关键行 4
}
else if (!Mg.already_reflected) {
  Mg.sx = X.MULWALKF(Mg.sx, Mg.dx, 0.04f, fcnt);
  Mg.sy = X.MULWALKF(Mg.sy, Mg.dy, 0.04f, fcnt);
}
if (Mg.t >= sz) Mg.phase = 100; // 关键行 5
else if ((double) fcnt > 0.0 && (double) Mg.t >= 3.0) {
  Mg.raypos_s = true;
  Mg.raypos_d = false;
  Mg.MnSetRay(Mg.Ray, 0, Mg.sa, Mg.t);
  Mg.Mn._1.agR = Mg.da; // 关键行 6
  Mg.Mn._1.aim_fixed = true;
  ......
}
```
上述代码共有六个关键行，其中关键行 3 和 4 指出 Mg.sa 是正弦和余弦函数的自变量，也就是某个角的弧度值，结合关键行 1, 2, 6 可得 Mg.da, Mg.aim_agR, Mg.Mn._1.agR 也都是角，而关键行 5 则意味着瞄准时机结束，即将命中。

那么使用 dnSpy 对 MgThunderbolt 类的 run 函数执行【编辑方法】操作，把关键行 5 和 6 的代码分别改为
``` cs
float delta = (float)Math.PI * 2/3 * Math.Sign(X.Tan(Mg.da));
if (Mg.t >= sz) {
  Mg.phase = 100;
  Mg.da += delta;
}
```
和`Mg.Mn._1.agR = Mg.da + delta;`即可。

上面的 (float)Math.PI 是圆周率（180° 角的弧度值），如果直接令 delta 等于圆周率，就会让雷电束打向诺艾儿的反方向。上述代码选择给圆周率分情况乘以 ±2/3，实战效果更佳。
> 180° 以外的角会有顺逆时针的差异，显然当光球和诺艾儿的左右关系反转后这个调整角的顺逆也应该反转，在修改代码时请务必注意。

本文档最后更新于 2024 年 7 月 29 日。