# AiC 事件编辑器
日本 Ryona ARPG 《Alice in Cradle》的事件编辑器，该游戏由 Hinayua 制作（https://fantia.jp/fanclubs/24531）。

# 开发进度
2023 年基于 antlr 的 blockly 编辑器已被废弃，暂时请参考 HashCode.md 和 localization.md 手动编辑 .cmd 和 .txt 文件。

游戏的 0.26 版可能会实装【将对话内容直接写在 .cmd 文件中的 MSG 指令后】的功能，届时对 .txt 文件的编辑需求会有所减弱。

# 仓库里的其他文件
friendly.md 讲解了如何制作友方魔族。

4ascend.cs 是[四子棋补丁](https://www.bilibili.com/video/BV16vigejEp1)所改动的 C# 源代码。

pose.py 是 HashCode.md 中提到的【读取 .pxls 文件并列出所有 pose】的 Python 程序。