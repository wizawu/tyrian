"use strict";
// Generated from Javap.g4 by ANTLR 4.7.2
// jshint ignore: start
var antlr4 = require('antlr4/index');
var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0002&\u0117\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004",
    "\u0004\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t",
    "\u0007\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004",
    "\f\t\f\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010",
    "\t\u0010\u0004\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013",
    "\u0004\u0014\t\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017",
    "\t\u0017\u0004\u0018\t\u0018\u0004\u0019\t\u0019\u0004\u001a\t\u001a",
    "\u0004\u001b\t\u001b\u0004\u001c\t\u001c\u0004\u001d\t\u001d\u0004\u001e",
    "\t\u001e\u0004\u001f\t\u001f\u0004 \t \u0004!\t!\u0004\"\t\"\u0004#",
    "\t#\u0004$\t$\u0004%\t%\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002",
    "\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0004\u0003\u0004",
    "\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005",
    "\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006",
    "\u0003\u0006\u0003\u0006\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007",
    "\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007",
    "\u0003\u0007\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b",
    "\u0003\b\u0003\b\u0003\b\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003",
    "\t\u0003\t\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003",
    "\n\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003",
    "\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\f\u0003",
    "\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\r\u0003",
    "\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003\u000e\u0003\u000e\u0003\u000f",
    "\u0003\u000f\u0003\u0010\u0003\u0010\u0003\u0011\u0003\u0011\u0003\u0012",
    "\u0003\u0012\u0003\u0013\u0003\u0013\u0003\u0014\u0003\u0014\u0003\u0015",
    "\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0016",
    "\u0003\u0016\u0003\u0017\u0003\u0017\u0003\u0018\u0003\u0018\u0003\u0018",
    "\u0003\u0018\u0003\u0018\u0003\u0018\u0003\u0018\u0003\u0019\u0003\u0019",
    "\u0003\u0019\u0003\u0019\u0003\u0019\u0003\u0019\u0003\u0019\u0003\u001a",
    "\u0003\u001a\u0003\u001a\u0003\u001a\u0003\u001a\u0003\u001a\u0003\u001a",
    "\u0003\u001a\u0003\u001a\u0003\u001b\u0003\u001b\u0003\u001b\u0003\u001b",
    "\u0003\u001b\u0003\u001b\u0003\u001b\u0003\u001b\u0003\u001b\u0003\u001b",
    "\u0003\u001b\u0003\u001b\u0003\u001b\u0003\u001c\u0003\u001c\u0003\u001c",
    "\u0003\u001c\u0003\u001c\u0003\u001c\u0003\u001c\u0003\u001c\u0003\u001c",
    "\u0003\u001c\u0003\u001d\u0003\u001d\u0003\u001d\u0003\u001d\u0003\u001d",
    "\u0003\u001d\u0003\u001d\u0003\u001d\u0003\u001d\u0003\u001e\u0003\u001e",
    "\u0003\u001e\u0003\u001f\u0003\u001f\u0003 \u0003 \u0003!\u0003!\u0003",
    "\"\u0003\"\u0003\"\u0003\"\u0003\"\u0003\"\u0003\"\u0003#\u0003#\u0003",
    "#\u0003#\u0003$\u0003$\u0007$\u010c\n$\f$\u000e$\u010f\u000b$\u0003",
    "%\u0006%\u0112\n%\r%\u000e%\u0113\u0003%\u0003%\u0002\u0002&\u0003\u0003",
    "\u0005\u0004\u0007\u0005\t\u0006\u000b\u0007\r\b\u000f\t\u0011\n\u0013",
    "\u000b\u0015\f\u0017\r\u0019\u000e\u001b\u000f\u001d\u0010\u001f\u0011",
    "!\u0012#\u0013%\u0014\'\u0015)\u0016+\u0017-\u0018/\u00191\u001a3\u001b",
    "5\u001c7\u001d9\u001e;\u001f= ?!A\"C#E$G%I&\u0003\u0002\u0005\u0006",
    "\u0002&&C\\aac|\u0007\u0002&&2;C\\aac|\u0005\u0002\u000b\f\u000f\u000f",
    "\"\"\u0002\u0118\u0002\u0003\u0003\u0002\u0002\u0002\u0002\u0005\u0003",
    "\u0002\u0002\u0002\u0002\u0007\u0003\u0002\u0002\u0002\u0002\t\u0003",
    "\u0002\u0002\u0002\u0002\u000b\u0003\u0002\u0002\u0002\u0002\r\u0003",
    "\u0002\u0002\u0002\u0002\u000f\u0003\u0002\u0002\u0002\u0002\u0011\u0003",
    "\u0002\u0002\u0002\u0002\u0013\u0003\u0002\u0002\u0002\u0002\u0015\u0003",
    "\u0002\u0002\u0002\u0002\u0017\u0003\u0002\u0002\u0002\u0002\u0019\u0003",
    "\u0002\u0002\u0002\u0002\u001b\u0003\u0002\u0002\u0002\u0002\u001d\u0003",
    "\u0002\u0002\u0002\u0002\u001f\u0003\u0002\u0002\u0002\u0002!\u0003",
    "\u0002\u0002\u0002\u0002#\u0003\u0002\u0002\u0002\u0002%\u0003\u0002",
    "\u0002\u0002\u0002\'\u0003\u0002\u0002\u0002\u0002)\u0003\u0002\u0002",
    "\u0002\u0002+\u0003\u0002\u0002\u0002\u0002-\u0003\u0002\u0002\u0002",
    "\u0002/\u0003\u0002\u0002\u0002\u00021\u0003\u0002\u0002\u0002\u0002",
    "3\u0003\u0002\u0002\u0002\u00025\u0003\u0002\u0002\u0002\u00027\u0003",
    "\u0002\u0002\u0002\u00029\u0003\u0002\u0002\u0002\u0002;\u0003\u0002",
    "\u0002\u0002\u0002=\u0003\u0002\u0002\u0002\u0002?\u0003\u0002\u0002",
    "\u0002\u0002A\u0003\u0002\u0002\u0002\u0002C\u0003\u0002\u0002\u0002",
    "\u0002E\u0003\u0002\u0002\u0002\u0002G\u0003\u0002\u0002\u0002\u0002",
    "I\u0003\u0002\u0002\u0002\u0003K\u0003\u0002\u0002\u0002\u0005T\u0003",
    "\u0002\u0002\u0002\u0007Y\u0003\u0002\u0002\u0002\t[\u0003\u0002\u0002",
    "\u0002\u000ba\u0003\u0002\u0002\u0002\ri\u0003\u0002\u0002\u0002\u000f",
    "t\u0003\u0002\u0002\u0002\u0011~\u0003\u0002\u0002\u0002\u0013\u0085",
    "\u0003\u0002\u0002\u0002\u0015\u008d\u0003\u0002\u0002\u0002\u0017\u0097",
    "\u0003\u0002\u0002\u0002\u0019\u00a0\u0003\u0002\u0002\u0002\u001b\u00a6",
    "\u0003\u0002\u0002\u0002\u001d\u00a8\u0003\u0002\u0002\u0002\u001f\u00aa",
    "\u0003\u0002\u0002\u0002!\u00ac\u0003\u0002\u0002\u0002#\u00ae\u0003",
    "\u0002\u0002\u0002%\u00b0\u0003\u0002\u0002\u0002\'\u00b2\u0003\u0002",
    "\u0002\u0002)\u00b4\u0003\u0002\u0002\u0002+\u00ba\u0003\u0002\u0002",
    "\u0002-\u00bc\u0003\u0002\u0002\u0002/\u00be\u0003\u0002\u0002\u0002",
    "1\u00c5\u0003\u0002\u0002\u00023\u00cc\u0003\u0002\u0002\u00025\u00d5",
    "\u0003\u0002\u0002\u00027\u00e2\u0003\u0002\u0002\u00029\u00ec\u0003",
    "\u0002\u0002\u0002;\u00f5\u0003\u0002\u0002\u0002=\u00f8\u0003\u0002",
    "\u0002\u0002?\u00fa\u0003\u0002\u0002\u0002A\u00fc\u0003\u0002\u0002",
    "\u0002C\u00fe\u0003\u0002\u0002\u0002E\u0105\u0003\u0002\u0002\u0002",
    "G\u0109\u0003\u0002\u0002\u0002I\u0111\u0003\u0002\u0002\u0002KL\u0007",
    "E\u0002\u0002LM\u0007q\u0002\u0002MN\u0007o\u0002\u0002NO\u0007r\u0002",
    "\u0002OP\u0007k\u0002\u0002PQ\u0007n\u0002\u0002QR\u0007g\u0002\u0002",
    "RS\u0007f\u0002\u0002S\u0004\u0003\u0002\u0002\u0002TU\u0007h\u0002",
    "\u0002UV\u0007t\u0002\u0002VW\u0007q\u0002\u0002WX\u0007o\u0002\u0002",
    "X\u0006\u0003\u0002\u0002\u0002YZ\u0007$\u0002\u0002Z\b\u0003\u0002",
    "\u0002\u0002[\\\u0007e\u0002\u0002\\]\u0007n\u0002\u0002]^\u0007c\u0002",
    "\u0002^_\u0007u\u0002\u0002_`\u0007u\u0002\u0002`\n\u0003\u0002\u0002",
    "\u0002ab\u0007g\u0002\u0002bc\u0007z\u0002\u0002cd\u0007v\u0002\u0002",
    "de\u0007g\u0002\u0002ef\u0007p\u0002\u0002fg\u0007f\u0002\u0002gh\u0007",
    "u\u0002\u0002h\f\u0003\u0002\u0002\u0002ij\u0007k\u0002\u0002jk\u0007",
    "o\u0002\u0002kl\u0007r\u0002\u0002lm\u0007n\u0002\u0002mn\u0007g\u0002",
    "\u0002no\u0007o\u0002\u0002op\u0007g\u0002\u0002pq\u0007p\u0002\u0002",
    "qr\u0007v\u0002\u0002rs\u0007u\u0002\u0002s\u000e\u0003\u0002\u0002",
    "\u0002tu\u0007k\u0002\u0002uv\u0007p\u0002\u0002vw\u0007v\u0002\u0002",
    "wx\u0007g\u0002\u0002xy\u0007t\u0002\u0002yz\u0007h\u0002\u0002z{\u0007",
    "c\u0002\u0002{|\u0007e\u0002\u0002|}\u0007g\u0002\u0002}\u0010\u0003",
    "\u0002\u0002\u0002~\u007f\u0007r\u0002\u0002\u007f\u0080\u0007w\u0002",
    "\u0002\u0080\u0081\u0007d\u0002\u0002\u0081\u0082\u0007n\u0002\u0002",
    "\u0082\u0083\u0007k\u0002\u0002\u0083\u0084\u0007e\u0002\u0002\u0084",
    "\u0012\u0003\u0002\u0002\u0002\u0085\u0086\u0007r\u0002\u0002\u0086",
    "\u0087\u0007t\u0002\u0002\u0087\u0088\u0007k\u0002\u0002\u0088\u0089",
    "\u0007x\u0002\u0002\u0089\u008a\u0007c\u0002\u0002\u008a\u008b\u0007",
    "v\u0002\u0002\u008b\u008c\u0007g\u0002\u0002\u008c\u0014\u0003\u0002",
    "\u0002\u0002\u008d\u008e\u0007r\u0002\u0002\u008e\u008f\u0007t\u0002",
    "\u0002\u008f\u0090\u0007q\u0002\u0002\u0090\u0091\u0007v\u0002\u0002",
    "\u0091\u0092\u0007g\u0002\u0002\u0092\u0093\u0007e\u0002\u0002\u0093",
    "\u0094\u0007v\u0002\u0002\u0094\u0095\u0007g\u0002\u0002\u0095\u0096",
    "\u0007f\u0002\u0002\u0096\u0016\u0003\u0002\u0002\u0002\u0097\u0098",
    "\u0007c\u0002\u0002\u0098\u0099\u0007d\u0002\u0002\u0099\u009a\u0007",
    "u\u0002\u0002\u009a\u009b\u0007v\u0002\u0002\u009b\u009c\u0007t\u0002",
    "\u0002\u009c\u009d\u0007c\u0002\u0002\u009d\u009e\u0007e\u0002\u0002",
    "\u009e\u009f\u0007v\u0002\u0002\u009f\u0018\u0003\u0002\u0002\u0002",
    "\u00a0\u00a1\u0007h\u0002\u0002\u00a1\u00a2\u0007k\u0002\u0002\u00a2",
    "\u00a3\u0007p\u0002\u0002\u00a3\u00a4\u0007c\u0002\u0002\u00a4\u00a5",
    "\u0007n\u0002\u0002\u00a5\u001a\u0003\u0002\u0002\u0002\u00a6\u00a7",
    "\u0007.\u0002\u0002\u00a7\u001c\u0003\u0002\u0002\u0002\u00a8\u00a9",
    "\u00070\u0002\u0002\u00a9\u001e\u0003\u0002\u0002\u0002\u00aa\u00ab",
    "\u0007>\u0002\u0002\u00ab \u0003\u0002\u0002\u0002\u00ac\u00ad\u0007",
    "@\u0002\u0002\u00ad\"\u0003\u0002\u0002\u0002\u00ae\u00af\u0007]\u0002",
    "\u0002\u00af$\u0003\u0002\u0002\u0002\u00b0\u00b1\u0007_\u0002\u0002",
    "\u00b1&\u0003\u0002\u0002\u0002\u00b2\u00b3\u0007A\u0002\u0002\u00b3",
    "(\u0003\u0002\u0002\u0002\u00b4\u00b5\u0007u\u0002\u0002\u00b5\u00b6",
    "\u0007w\u0002\u0002\u00b6\u00b7\u0007r\u0002\u0002\u00b7\u00b8\u0007",
    "g\u0002\u0002\u00b8\u00b9\u0007t\u0002\u0002\u00b9*\u0003\u0002\u0002",
    "\u0002\u00ba\u00bb\u0007}\u0002\u0002\u00bb,\u0003\u0002\u0002\u0002",
    "\u00bc\u00bd\u0007\u007f\u0002\u0002\u00bd.\u0003\u0002\u0002\u0002",
    "\u00be\u00bf\u0007p\u0002\u0002\u00bf\u00c0\u0007c\u0002\u0002\u00c0",
    "\u00c1\u0007v\u0002\u0002\u00c1\u00c2\u0007k\u0002\u0002\u00c2\u00c3",
    "\u0007x\u0002\u0002\u00c3\u00c4\u0007g\u0002\u0002\u00c40\u0003\u0002",
    "\u0002\u0002\u00c5\u00c6\u0007u\u0002\u0002\u00c6\u00c7\u0007v\u0002",
    "\u0002\u00c7\u00c8\u0007c\u0002\u0002\u00c8\u00c9\u0007v\u0002\u0002",
    "\u00c9\u00ca\u0007k\u0002\u0002\u00ca\u00cb\u0007e\u0002\u0002\u00cb",
    "2\u0003\u0002\u0002\u0002\u00cc\u00cd\u0007u\u0002\u0002\u00cd\u00ce",
    "\u0007v\u0002\u0002\u00ce\u00cf\u0007t\u0002\u0002\u00cf\u00d0\u0007",
    "k\u0002\u0002\u00d0\u00d1\u0007e\u0002\u0002\u00d1\u00d2\u0007v\u0002",
    "\u0002\u00d2\u00d3\u0007h\u0002\u0002\u00d3\u00d4\u0007r\u0002\u0002",
    "\u00d44\u0003\u0002\u0002\u0002\u00d5\u00d6\u0007u\u0002\u0002\u00d6",
    "\u00d7\u0007{\u0002\u0002\u00d7\u00d8\u0007p\u0002\u0002\u00d8\u00d9",
    "\u0007e\u0002\u0002\u00d9\u00da\u0007j\u0002\u0002\u00da\u00db\u0007",
    "t\u0002\u0002\u00db\u00dc\u0007q\u0002\u0002\u00dc\u00dd\u0007p\u0002",
    "\u0002\u00dd\u00de\u0007k\u0002\u0002\u00de\u00df\u0007|\u0002\u0002",
    "\u00df\u00e0\u0007g\u0002\u0002\u00e0\u00e1\u0007f\u0002\u0002\u00e1",
    "6\u0003\u0002\u0002\u0002\u00e2\u00e3\u0007v\u0002\u0002\u00e3\u00e4",
    "\u0007t\u0002\u0002\u00e4\u00e5\u0007c\u0002\u0002\u00e5\u00e6\u0007",
    "p\u0002\u0002\u00e6\u00e7\u0007u\u0002\u0002\u00e7\u00e8\u0007k\u0002",
    "\u0002\u00e8\u00e9\u0007g\u0002\u0002\u00e9\u00ea\u0007p\u0002\u0002",
    "\u00ea\u00eb\u0007v\u0002\u0002\u00eb8\u0003\u0002\u0002\u0002\u00ec",
    "\u00ed\u0007x\u0002\u0002\u00ed\u00ee\u0007q\u0002\u0002\u00ee\u00ef",
    "\u0007n\u0002\u0002\u00ef\u00f0\u0007c\u0002\u0002\u00f0\u00f1\u0007",
    "v\u0002\u0002\u00f1\u00f2\u0007k\u0002\u0002\u00f2\u00f3\u0007n\u0002",
    "\u0002\u00f3\u00f4\u0007g\u0002\u0002\u00f4:\u0003\u0002\u0002\u0002",
    "\u00f5\u00f6\u0007}\u0002\u0002\u00f6\u00f7\u0007\u007f\u0002\u0002",
    "\u00f7<\u0003\u0002\u0002\u0002\u00f8\u00f9\u0007=\u0002\u0002\u00f9",
    ">\u0003\u0002\u0002\u0002\u00fa\u00fb\u0007*\u0002\u0002\u00fb@\u0003",
    "\u0002\u0002\u0002\u00fc\u00fd\u0007+\u0002\u0002\u00fdB\u0003\u0002",
    "\u0002\u0002\u00fe\u00ff\u0007v\u0002\u0002\u00ff\u0100\u0007j\u0002",
    "\u0002\u0100\u0101\u0007t\u0002\u0002\u0101\u0102\u0007q\u0002\u0002",
    "\u0102\u0103\u0007y\u0002\u0002\u0103\u0104\u0007u\u0002\u0002\u0104",
    "D\u0003\u0002\u0002\u0002\u0105\u0106\u00070\u0002\u0002\u0106\u0107",
    "\u00070\u0002\u0002\u0107\u0108\u00070\u0002\u0002\u0108F\u0003\u0002",
    "\u0002\u0002\u0109\u010d\t\u0002\u0002\u0002\u010a\u010c\t\u0003\u0002",
    "\u0002\u010b\u010a\u0003\u0002\u0002\u0002\u010c\u010f\u0003\u0002\u0002",
    "\u0002\u010d\u010b\u0003\u0002\u0002\u0002\u010d\u010e\u0003\u0002\u0002",
    "\u0002\u010eH\u0003\u0002\u0002\u0002\u010f\u010d\u0003\u0002\u0002",
    "\u0002\u0110\u0112\t\u0004\u0002\u0002\u0111\u0110\u0003\u0002\u0002",
    "\u0002\u0112\u0113\u0003\u0002\u0002\u0002\u0113\u0111\u0003\u0002\u0002",
    "\u0002\u0113\u0114\u0003\u0002\u0002\u0002\u0114\u0115\u0003\u0002\u0002",
    "\u0002\u0115\u0116\b%\u0002\u0002\u0116J\u0003\u0002\u0002\u0002\u0005",
    "\u0002\u010d\u0113\u0003\b\u0002\u0002"].join("");
var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);
var decisionsToDFA = atn.decisionToState.map(function (ds, index) { return new antlr4.dfa.DFA(ds, index); });
function JavapLexer(input) {
    antlr4.Lexer.call(this, input);
    this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
    return this;
}
JavapLexer.prototype = Object.create(antlr4.Lexer.prototype);
JavapLexer.prototype.constructor = JavapLexer;
Object.defineProperty(JavapLexer.prototype, "atn", {
    get: function () {
        return atn;
    }
});
JavapLexer.EOF = antlr4.Token.EOF;
JavapLexer.T__0 = 1;
JavapLexer.T__1 = 2;
JavapLexer.T__2 = 3;
JavapLexer.T__3 = 4;
JavapLexer.T__4 = 5;
JavapLexer.T__5 = 6;
JavapLexer.T__6 = 7;
JavapLexer.T__7 = 8;
JavapLexer.T__8 = 9;
JavapLexer.T__9 = 10;
JavapLexer.T__10 = 11;
JavapLexer.T__11 = 12;
JavapLexer.T__12 = 13;
JavapLexer.T__13 = 14;
JavapLexer.T__14 = 15;
JavapLexer.T__15 = 16;
JavapLexer.T__16 = 17;
JavapLexer.T__17 = 18;
JavapLexer.T__18 = 19;
JavapLexer.T__19 = 20;
JavapLexer.T__20 = 21;
JavapLexer.T__21 = 22;
JavapLexer.T__22 = 23;
JavapLexer.T__23 = 24;
JavapLexer.T__24 = 25;
JavapLexer.T__25 = 26;
JavapLexer.T__26 = 27;
JavapLexer.T__27 = 28;
JavapLexer.T__28 = 29;
JavapLexer.T__29 = 30;
JavapLexer.T__30 = 31;
JavapLexer.T__31 = 32;
JavapLexer.T__32 = 33;
JavapLexer.T__33 = 34;
JavapLexer.Identifier = 35;
JavapLexer.WS = 36;
JavapLexer.prototype.channelNames = ["DEFAULT_TOKEN_CHANNEL", "HIDDEN"];
JavapLexer.prototype.modeNames = ["DEFAULT_MODE"];
JavapLexer.prototype.literalNames = [null, "'Compiled'", "'from'", "'\"'",
    "'class'", "'extends'", "'implements'",
    "'interface'", "'public'", "'private'",
    "'protected'", "'abstract'", "'final'",
    "','", "'.'", "'<'", "'>'", "'['",
    "']'", "'?'", "'super'", "'{'", "'}'",
    "'native'", "'static'", "'strictfp'",
    "'synchronized'", "'transient'", "'volatile'",
    "'{}'", "';'", "'('", "')'", "'throws'",
    "'...'"];
JavapLexer.prototype.symbolicNames = [null, null, null, null, null, null,
    null, null, null, null, null, null,
    null, null, null, null, null, null,
    null, null, null, null, null, null,
    null, null, null, null, null, null,
    null, null, null, null, null, "Identifier",
    "WS"];
JavapLexer.prototype.ruleNames = ["T__0", "T__1", "T__2", "T__3", "T__4",
    "T__5", "T__6", "T__7", "T__8", "T__9",
    "T__10", "T__11", "T__12", "T__13", "T__14",
    "T__15", "T__16", "T__17", "T__18", "T__19",
    "T__20", "T__21", "T__22", "T__23", "T__24",
    "T__25", "T__26", "T__27", "T__28", "T__29",
    "T__30", "T__31", "T__32", "T__33", "Identifier",
    "WS"];
JavapLexer.prototype.grammarFileName = "Javap.g4";
exports.JavapLexer = JavapLexer;
