"use strict";
// Generated from Javap.g4 by ANTLR 4.7.2
// jshint ignore: start
var antlr4 = require('antlr4/index');
var JavapListener = require('./JavapListener').JavapListener;
var JavapVisitor = require('./JavapVisitor').JavapVisitor;
var grammarFileName = "Javap.g4";
var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003\'\u0101\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f\u0004",
    "\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010\u0004",
    "\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013\u0004\u0014\t",
    "\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017\t\u0017\u0004",
    "\u0018\t\u0018\u0003\u0002\u0003\u0002\u0007\u00023\n\u0002\f\u0002",
    "\u000e\u00026\u000b\u0002\u0003\u0002\u0005\u00029\n\u0002\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0007\u0003>\n\u0003\f\u0003\u000e\u0003A\u000b",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0004\u0003\u0004\u0005\u0004G",
    "\n\u0004\u0003\u0005\u0007\u0005J\n\u0005\f\u0005\u000e\u0005M\u000b",
    "\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0005\u0005S",
    "\n\u0005\u0003\u0005\u0003\u0005\u0005\u0005W\n\u0005\u0003\u0005\u0003",
    "\u0005\u0003\u0006\u0007\u0006\\\n\u0006\f\u0006\u000e\u0006_\u000b",
    "\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0005\u0006e",
    "\n\u0006\u0003\u0006\u0003\u0006\u0003\u0007\u0003\u0007\u0003\b\u0003",
    "\b\u0003\t\u0003\t\u0003\t\u0007\tp\n\t\f\t\u000e\ts\u000b\t\u0003\n",
    "\u0003\n\u0003\n\u0005\nx\n\n\u0003\n\u0003\n\u0005\n|\n\n\u0003\u000b",
    "\u0003\u000b\u0003\u000b\u0007\u000b\u0081\n\u000b\f\u000b\u000e\u000b",
    "\u0084\u000b\u000b\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0007",
    "\f\u008c\n\f\f\f\u000e\f\u008f\u000b\f\u0003\f\u0003\f\u0005\f\u0093",
    "\n\f\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r",
    "\u0003\r\u0003\r\u0003\r\u0005\r\u00a0\n\r\u0003\u000e\u0003\u000e\u0007",
    "\u000e\u00a4\n\u000e\f\u000e\u000e\u000e\u00a7\u000b\u000e\u0003\u000e",
    "\u0003\u000e\u0003\u000f\u0003\u000f\u0007\u000f\u00ad\n\u000f\f\u000f",
    "\u000e\u000f\u00b0\u000b\u000f\u0003\u000f\u0003\u000f\u0003\u0010\u0003",
    "\u0010\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003",
    "\u0011\u0005\u0011\u00bc\n\u0011\u0003\u0012\u0003\u0012\u0003\u0012",
    "\u0003\u0012\u0003\u0012\u0005\u0012\u00c3\n\u0012\u0003\u0013\u0007",
    "\u0013\u00c6\n\u0013\f\u0013\u000e\u0013\u00c9\u000b\u0013\u0003\u0013",
    "\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0005\u0013\u00d0\n",
    "\u0013\u0003\u0013\u0003\u0013\u0003\u0014\u0007\u0014\u00d5\n\u0014",
    "\f\u0014\u000e\u0014\u00d8\u000b\u0014\u0003\u0014\u0003\u0014\u0003",
    "\u0014\u0003\u0014\u0003\u0015\u0007\u0015\u00df\n\u0015\f\u0015\u000e",
    "\u0015\u00e2\u000b\u0015\u0003\u0015\u0005\u0015\u00e5\n\u0015\u0003",
    "\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0005",
    "\u0015\u00ed\n\u0015\u0003\u0015\u0003\u0015\u0003\u0016\u0003\u0016",
    "\u0003\u0016\u0003\u0017\u0003\u0017\u0003\u0017\u0003\u0018\u0005\u0018",
    "\u00f8\n\u0018\u0003\u0018\u0003\u0018\u0003\u0018\u0003\u0018\u0003",
    "\u0018\u0005\u0018\u00ff\n\u0018\u0003\u0018\u0003?\u0002\u0019\u0002",
    "\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016\u0018\u001a\u001c\u001e",
    " \"$&(*,.\u0002\u0006\u0003\u0002\t\r\u0003\u0002\t\u000b\u0003\u0002",
    "\u000e\u000f\u0004\u0002\t\r\u0019\u001f\u0002\u010d\u00024\u0003\u0002",
    "\u0002\u0002\u0004:\u0003\u0002\u0002\u0002\u0006F\u0003\u0002\u0002",
    "\u0002\bK\u0003\u0002\u0002\u0002\n]\u0003\u0002\u0002\u0002\fh\u0003",
    "\u0002\u0002\u0002\u000ej\u0003\u0002\u0002\u0002\u0010l\u0003\u0002",
    "\u0002\u0002\u0012w\u0003\u0002\u0002\u0002\u0014}\u0003\u0002\u0002",
    "\u0002\u0016\u0092\u0003\u0002\u0002\u0002\u0018\u009f\u0003\u0002\u0002",
    "\u0002\u001a\u00a1\u0003\u0002\u0002\u0002\u001c\u00aa\u0003\u0002\u0002",
    "\u0002\u001e\u00b3\u0003\u0002\u0002\u0002 \u00bb\u0003\u0002\u0002",
    "\u0002\"\u00c2\u0003\u0002\u0002\u0002$\u00c7\u0003\u0002\u0002\u0002",
    "&\u00d6\u0003\u0002\u0002\u0002(\u00e0\u0003\u0002\u0002\u0002*\u00f0",
    "\u0003\u0002\u0002\u0002,\u00f3\u0003\u0002\u0002\u0002.\u00fe\u0003",
    "\u0002\u0002\u000203\u0005\u0004\u0003\u000213\u0005\u0006\u0004\u0002",
    "20\u0003\u0002\u0002\u000221\u0003\u0002\u0002\u000236\u0003\u0002\u0002",
    "\u000242\u0003\u0002\u0002\u000245\u0003\u0002\u0002\u000258\u0003\u0002",
    "\u0002\u000264\u0003\u0002\u0002\u000279\u0007\u0002\u0002\u000387\u0003",
    "\u0002\u0002\u000289\u0003\u0002\u0002\u00029\u0003\u0003\u0002\u0002",
    "\u0002:;\u0007\u0003\u0002\u0002;?\u0007\u0004\u0002\u0002<>\u000b\u0002",
    "\u0002\u0002=<\u0003\u0002\u0002\u0002>A\u0003\u0002\u0002\u0002?@\u0003",
    "\u0002\u0002\u0002?=\u0003\u0002\u0002\u0002@B\u0003\u0002\u0002\u0002",
    "A?\u0003\u0002\u0002\u0002BC\u0007\u0004\u0002\u0002C\u0005\u0003\u0002",
    "\u0002\u0002DG\u0005\b\u0005\u0002EG\u0005\n\u0006\u0002FD\u0003\u0002",
    "\u0002\u0002FE\u0003\u0002\u0002\u0002G\u0007\u0003\u0002\u0002\u0002",
    "HJ\u0005\f\u0007\u0002IH\u0003\u0002\u0002\u0002JM\u0003\u0002\u0002",
    "\u0002KI\u0003\u0002\u0002\u0002KL\u0003\u0002\u0002\u0002LN\u0003\u0002",
    "\u0002\u0002MK\u0003\u0002\u0002\u0002NO\u0007\u0005\u0002\u0002OR\u0005",
    "\u0012\n\u0002PQ\u0007\u0006\u0002\u0002QS\u0005\u0012\n\u0002RP\u0003",
    "\u0002\u0002\u0002RS\u0003\u0002\u0002\u0002SV\u0003\u0002\u0002\u0002",
    "TU\u0007\u0007\u0002\u0002UW\u0005\u0010\t\u0002VT\u0003\u0002\u0002",
    "\u0002VW\u0003\u0002\u0002\u0002WX\u0003\u0002\u0002\u0002XY\u0005\u001a",
    "\u000e\u0002Y\t\u0003\u0002\u0002\u0002Z\\\u0005\u000e\b\u0002[Z\u0003",
    "\u0002\u0002\u0002\\_\u0003\u0002\u0002\u0002][\u0003\u0002\u0002\u0002",
    "]^\u0003\u0002\u0002\u0002^`\u0003\u0002\u0002\u0002_]\u0003\u0002\u0002",
    "\u0002`a\u0007\b\u0002\u0002ad\u0005\u0012\n\u0002bc\u0007\u0006\u0002",
    "\u0002ce\u0005\u0010\t\u0002db\u0003\u0002\u0002\u0002de\u0003\u0002",
    "\u0002\u0002ef\u0003\u0002\u0002\u0002fg\u0005\u001c\u000f\u0002g\u000b",
    "\u0003\u0002\u0002\u0002hi\t\u0002\u0002\u0002i\r\u0003\u0002\u0002",
    "\u0002jk\t\u0003\u0002\u0002k\u000f\u0003\u0002\u0002\u0002lq\u0005",
    "\u0012\n\u0002mn\t\u0004\u0002\u0002np\u0005\u0012\n\u0002om\u0003\u0002",
    "\u0002\u0002ps\u0003\u0002\u0002\u0002qo\u0003\u0002\u0002\u0002qr\u0003",
    "\u0002\u0002\u0002r\u0011\u0003\u0002\u0002\u0002sq\u0003\u0002\u0002",
    "\u0002tu\u0005\u0014\u000b\u0002uv\u0007\u0010\u0002\u0002vx\u0003\u0002",
    "\u0002\u0002wt\u0003\u0002\u0002\u0002wx\u0003\u0002\u0002\u0002xy\u0003",
    "\u0002\u0002\u0002y{\u0007&\u0002\u0002z|\u0005\u0016\f\u0002{z\u0003",
    "\u0002\u0002\u0002{|\u0003\u0002\u0002\u0002|\u0013\u0003\u0002\u0002",
    "\u0002}\u0082\u0007&\u0002\u0002~\u007f\u0007\u0010\u0002\u0002\u007f",
    "\u0081\u0007&\u0002\u0002\u0080~\u0003\u0002\u0002\u0002\u0081\u0084",
    "\u0003\u0002\u0002\u0002\u0082\u0080\u0003\u0002\u0002\u0002\u0082\u0083",
    "\u0003\u0002\u0002\u0002\u0083\u0015\u0003\u0002\u0002\u0002\u0084\u0082",
    "\u0003\u0002\u0002\u0002\u0085\u0086\u0007\u0011\u0002\u0002\u0086\u0093",
    "\u0007\u0012\u0002\u0002\u0087\u0088\u0007\u0013\u0002\u0002\u0088\u008d",
    "\u0005\u0018\r\u0002\u0089\u008a\t\u0004\u0002\u0002\u008a\u008c\u0005",
    "\u0018\r\u0002\u008b\u0089\u0003\u0002\u0002\u0002\u008c\u008f\u0003",
    "\u0002\u0002\u0002\u008d\u008b\u0003\u0002\u0002\u0002\u008d\u008e\u0003",
    "\u0002\u0002\u0002\u008e\u0090\u0003\u0002\u0002\u0002\u008f\u008d\u0003",
    "\u0002\u0002\u0002\u0090\u0091\u0007\u0014\u0002\u0002\u0091\u0093\u0003",
    "\u0002\u0002\u0002\u0092\u0085\u0003\u0002\u0002\u0002\u0092\u0087\u0003",
    "\u0002\u0002\u0002\u0093\u0017\u0003\u0002\u0002\u0002\u0094\u00a0\u0005",
    "\u0012\n\u0002\u0095\u0096\u0007&\u0002\u0002\u0096\u0097\u0007\u0006",
    "\u0002\u0002\u0097\u00a0\u0005\u0012\n\u0002\u0098\u0099\u0007\u0015",
    "\u0002\u0002\u0099\u009a\u0007\u0006\u0002\u0002\u009a\u00a0\u0005\u0012",
    "\n\u0002\u009b\u009c\u0007\u0015\u0002\u0002\u009c\u009d\u0007\u0016",
    "\u0002\u0002\u009d\u00a0\u0005\u0012\n\u0002\u009e\u00a0\u0007\u0015",
    "\u0002\u0002\u009f\u0094\u0003\u0002\u0002\u0002\u009f\u0095\u0003\u0002",
    "\u0002\u0002\u009f\u0098\u0003\u0002\u0002\u0002\u009f\u009b\u0003\u0002",
    "\u0002\u0002\u009f\u009e\u0003\u0002\u0002\u0002\u00a0\u0019\u0003\u0002",
    "\u0002\u0002\u00a1\u00a5\u0007\u0017\u0002\u0002\u00a2\u00a4\u0005 ",
    "\u0011\u0002\u00a3\u00a2\u0003\u0002\u0002\u0002\u00a4\u00a7\u0003\u0002",
    "\u0002\u0002\u00a5\u00a3\u0003\u0002\u0002\u0002\u00a5\u00a6\u0003\u0002",
    "\u0002\u0002\u00a6\u00a8\u0003\u0002\u0002\u0002\u00a7\u00a5\u0003\u0002",
    "\u0002\u0002\u00a8\u00a9\u0007\u0018\u0002\u0002\u00a9\u001b\u0003\u0002",
    "\u0002\u0002\u00aa\u00ae\u0007\u0017\u0002\u0002\u00ab\u00ad\u0005\"",
    "\u0012\u0002\u00ac\u00ab\u0003\u0002\u0002\u0002\u00ad\u00b0\u0003\u0002",
    "\u0002\u0002\u00ae\u00ac\u0003\u0002\u0002\u0002\u00ae\u00af\u0003\u0002",
    "\u0002\u0002\u00af\u00b1\u0003\u0002\u0002\u0002\u00b0\u00ae\u0003\u0002",
    "\u0002\u0002\u00b1\u00b2\u0007\u0018\u0002\u0002\u00b2\u001d\u0003\u0002",
    "\u0002\u0002\u00b3\u00b4\t\u0005\u0002\u0002\u00b4\u001f\u0003\u0002",
    "\u0002\u0002\u00b5\u00bc\u0005$\u0013\u0002\u00b6\u00bc\u0005&\u0014",
    "\u0002\u00b7\u00bc\u0005(\u0015\u0002\u00b8\u00b9\u0007\u001b\u0002",
    "\u0002\u00b9\u00ba\u0007 \u0002\u0002\u00ba\u00bc\u0007!\u0002\u0002",
    "\u00bb\u00b5\u0003\u0002\u0002\u0002\u00bb\u00b6\u0003\u0002\u0002\u0002",
    "\u00bb\u00b7\u0003\u0002\u0002\u0002\u00bb\u00b8\u0003\u0002\u0002\u0002",
    "\u00bc!\u0003\u0002\u0002\u0002\u00bd\u00c3\u0005&\u0014\u0002\u00be",
    "\u00c3\u0005(\u0015\u0002\u00bf\u00c0\u0007\u001b\u0002\u0002\u00c0",
    "\u00c1\u0007 \u0002\u0002\u00c1\u00c3\u0007!\u0002\u0002\u00c2\u00bd",
    "\u0003\u0002\u0002\u0002\u00c2\u00be\u0003\u0002\u0002\u0002\u00c2\u00bf",
    "\u0003\u0002\u0002\u0002\u00c3#\u0003\u0002\u0002\u0002\u00c4\u00c6",
    "\u0005\u001e\u0010\u0002\u00c5\u00c4\u0003\u0002\u0002\u0002\u00c6\u00c9",
    "\u0003\u0002\u0002\u0002\u00c7\u00c5\u0003\u0002\u0002\u0002\u00c7\u00c8",
    "\u0003\u0002\u0002\u0002\u00c8\u00ca\u0003\u0002\u0002\u0002\u00c9\u00c7",
    "\u0003\u0002\u0002\u0002\u00ca\u00cb\u0005\u0012\n\u0002\u00cb\u00cc",
    "\u0007\"\u0002\u0002\u00cc\u00cd\u0005.\u0018\u0002\u00cd\u00cf\u0007",
    "#\u0002\u0002\u00ce\u00d0\u0005*\u0016\u0002\u00cf\u00ce\u0003\u0002",
    "\u0002\u0002\u00cf\u00d0\u0003\u0002\u0002\u0002\u00d0\u00d1\u0003\u0002",
    "\u0002\u0002\u00d1\u00d2\u0007!\u0002\u0002\u00d2%\u0003\u0002\u0002",
    "\u0002\u00d3\u00d5\u0005\u001e\u0010\u0002\u00d4\u00d3\u0003\u0002\u0002",
    "\u0002\u00d5\u00d8\u0003\u0002\u0002\u0002\u00d6\u00d4\u0003\u0002\u0002",
    "\u0002\u00d6\u00d7\u0003\u0002\u0002\u0002\u00d7\u00d9\u0003\u0002\u0002",
    "\u0002\u00d8\u00d6\u0003\u0002\u0002\u0002\u00d9\u00da\u0005\u0012\n",
    "\u0002\u00da\u00db\u0007&\u0002\u0002\u00db\u00dc\u0007!\u0002\u0002",
    "\u00dc\'\u0003\u0002\u0002\u0002\u00dd\u00df\u0005\u001e\u0010\u0002",
    "\u00de\u00dd\u0003\u0002\u0002\u0002\u00df\u00e2\u0003\u0002\u0002\u0002",
    "\u00e0\u00de\u0003\u0002\u0002\u0002\u00e0\u00e1\u0003\u0002\u0002\u0002",
    "\u00e1\u00e4\u0003\u0002\u0002\u0002\u00e2\u00e0\u0003\u0002\u0002\u0002",
    "\u00e3\u00e5\u0005\u0016\f\u0002\u00e4\u00e3\u0003\u0002\u0002\u0002",
    "\u00e4\u00e5\u0003\u0002\u0002\u0002\u00e5\u00e6\u0003\u0002\u0002\u0002",
    "\u00e6\u00e7\u0005\u0012\n\u0002\u00e7\u00e8\u0007&\u0002\u0002\u00e8",
    "\u00e9\u0007\"\u0002\u0002\u00e9\u00ea\u0005.\u0018\u0002\u00ea\u00ec",
    "\u0007#\u0002\u0002\u00eb\u00ed\u0005*\u0016\u0002\u00ec\u00eb\u0003",
    "\u0002\u0002\u0002\u00ec\u00ed\u0003\u0002\u0002\u0002\u00ed\u00ee\u0003",
    "\u0002\u0002\u0002\u00ee\u00ef\u0007!\u0002\u0002\u00ef)\u0003\u0002",
    "\u0002\u0002\u00f0\u00f1\u0007$\u0002\u0002\u00f1\u00f2\u0005\u0010",
    "\t\u0002\u00f2+\u0003\u0002\u0002\u0002\u00f3\u00f4\u0005\u0012\n\u0002",
    "\u00f4\u00f5\u0007%\u0002\u0002\u00f5-\u0003\u0002\u0002\u0002\u00f6",
    "\u00f8\u0005\u0010\t\u0002\u00f7\u00f6\u0003\u0002\u0002\u0002\u00f7",
    "\u00f8\u0003\u0002\u0002\u0002\u00f8\u00ff\u0003\u0002\u0002\u0002\u00f9",
    "\u00fa\u0005\u0010\t\u0002\u00fa\u00fb\t\u0004\u0002\u0002\u00fb\u00fc",
    "\u0005,\u0017\u0002\u00fc\u00ff\u0003\u0002\u0002\u0002\u00fd\u00ff",
    "\u0005,\u0017\u0002\u00fe\u00f7\u0003\u0002\u0002\u0002\u00fe\u00f9",
    "\u0003\u0002\u0002\u0002\u00fe\u00fd\u0003\u0002\u0002\u0002\u00ff/",
    "\u0003\u0002\u0002\u0002\u001f248?FKRV]dqw{\u0082\u008d\u0092\u009f",
    "\u00a5\u00ae\u00bb\u00c2\u00c7\u00cf\u00d6\u00e0\u00e4\u00ec\u00f7\u00fe"].join("");
var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);
var decisionsToDFA = atn.decisionToState.map(function (ds, index) { return new antlr4.dfa.DFA(ds, index); });
var sharedContextCache = new antlr4.PredictionContextCache();
var literalNames = [null, "'Compiled from'", "'\"'", "'class'", "'extends'",
    "'implements'", "'interface'", "'public'", "'private'",
    "'protected'", "'abstract'", "'final'", "','", "', '",
    "'.'", "'['", "']'", "'<'", "'>'", "'?'", "'super'",
    "'{'", "'}'", "'default'", "'native'", "'static'",
    "'strictfp'", "'synchronized'", "'transient'", "'volatile'",
    "'{}'", "';'", "'('", "')'", "'throws'", "'...'"];
var symbolicNames = [null, null, null, null, null, null, null, null, null,
    null, null, null, null, null, null, null, null, null,
    null, null, null, null, null, null, null, null, null,
    null, null, null, null, null, null, null, null, null,
    "Identifier", "WS"];
var ruleNames = ["compilationUnit", "sourceDeclaration", "classOrInterface",
    "classDeclaration", "interfaceDeclaration", "classModifier",
    "interfaceModifier", "typeList", "type", "packageName",
    "typeArguments", "typeArgument", "classBody", "interfaceBody",
    "modifier", "classMember", "interfaceMember", "constructorDeclaration",
    "fieldDeclaration", "methodDeclaration", "throwsException",
    "varargs", "methodArguments"];
function JavapParser(input) {
    antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}
JavapParser.prototype = Object.create(antlr4.Parser.prototype);
JavapParser.prototype.constructor = JavapParser;
Object.defineProperty(JavapParser.prototype, "atn", {
    get: function () {
        return atn;
    }
});
JavapParser.EOF = antlr4.Token.EOF;
JavapParser.T__0 = 1;
JavapParser.T__1 = 2;
JavapParser.T__2 = 3;
JavapParser.T__3 = 4;
JavapParser.T__4 = 5;
JavapParser.T__5 = 6;
JavapParser.T__6 = 7;
JavapParser.T__7 = 8;
JavapParser.T__8 = 9;
JavapParser.T__9 = 10;
JavapParser.T__10 = 11;
JavapParser.T__11 = 12;
JavapParser.T__12 = 13;
JavapParser.T__13 = 14;
JavapParser.T__14 = 15;
JavapParser.T__15 = 16;
JavapParser.T__16 = 17;
JavapParser.T__17 = 18;
JavapParser.T__18 = 19;
JavapParser.T__19 = 20;
JavapParser.T__20 = 21;
JavapParser.T__21 = 22;
JavapParser.T__22 = 23;
JavapParser.T__23 = 24;
JavapParser.T__24 = 25;
JavapParser.T__25 = 26;
JavapParser.T__26 = 27;
JavapParser.T__27 = 28;
JavapParser.T__28 = 29;
JavapParser.T__29 = 30;
JavapParser.T__30 = 31;
JavapParser.T__31 = 32;
JavapParser.T__32 = 33;
JavapParser.T__33 = 34;
JavapParser.T__34 = 35;
JavapParser.Identifier = 36;
JavapParser.WS = 37;
JavapParser.RULE_compilationUnit = 0;
JavapParser.RULE_sourceDeclaration = 1;
JavapParser.RULE_classOrInterface = 2;
JavapParser.RULE_classDeclaration = 3;
JavapParser.RULE_interfaceDeclaration = 4;
JavapParser.RULE_classModifier = 5;
JavapParser.RULE_interfaceModifier = 6;
JavapParser.RULE_typeList = 7;
JavapParser.RULE_type = 8;
JavapParser.RULE_packageName = 9;
JavapParser.RULE_typeArguments = 10;
JavapParser.RULE_typeArgument = 11;
JavapParser.RULE_classBody = 12;
JavapParser.RULE_interfaceBody = 13;
JavapParser.RULE_modifier = 14;
JavapParser.RULE_classMember = 15;
JavapParser.RULE_interfaceMember = 16;
JavapParser.RULE_constructorDeclaration = 17;
JavapParser.RULE_fieldDeclaration = 18;
JavapParser.RULE_methodDeclaration = 19;
JavapParser.RULE_throwsException = 20;
JavapParser.RULE_varargs = 21;
JavapParser.RULE_methodArguments = 22;
function CompilationUnitContext(parser, parent, invokingState) {
    if (parent === undefined) {
        parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
        invokingState = -1;
    }
    antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = JavapParser.RULE_compilationUnit;
    return this;
}
CompilationUnitContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CompilationUnitContext.prototype.constructor = CompilationUnitContext;
CompilationUnitContext.prototype.sourceDeclaration = function (i) {
    if (i === undefined) {
        i = null;
    }
    if (i === null) {
        return this.getTypedRuleContexts(SourceDeclarationContext);
    }
    else {
        return this.getTypedRuleContext(SourceDeclarationContext, i);
    }
};
CompilationUnitContext.prototype.classOrInterface = function (i) {
    if (i === undefined) {
        i = null;
    }
    if (i === null) {
        return this.getTypedRuleContexts(ClassOrInterfaceContext);
    }
    else {
        return this.getTypedRuleContext(ClassOrInterfaceContext, i);
    }
};
CompilationUnitContext.prototype.EOF = function () {
    return this.getToken(JavapParser.EOF, 0);
};
CompilationUnitContext.prototype.enterRule = function (listener) {
    if (listener instanceof JavapListener) {
        listener.enterCompilationUnit(this);
    }
};
CompilationUnitContext.prototype.exitRule = function (listener) {
    if (listener instanceof JavapListener) {
        listener.exitCompilationUnit(this);
    }
};
CompilationUnitContext.prototype.accept = function (visitor) {
    if (visitor instanceof JavapVisitor) {
        return visitor.visitCompilationUnit(this);
    }
    else {
        return visitor.visitChildren(this);
    }
};
JavapParser.CompilationUnitContext = CompilationUnitContext;
JavapParser.prototype.compilationUnit = function () {
    var localctx = new CompilationUnitContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, JavapParser.RULE_compilationUnit);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 50;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while ((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << JavapParser.T__0) | (1 << JavapParser.T__2) | (1 << JavapParser.T__5) | (1 << JavapParser.T__6) | (1 << JavapParser.T__7) | (1 << JavapParser.T__8) | (1 << JavapParser.T__9) | (1 << JavapParser.T__10))) !== 0)) {
            this.state = 48;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case JavapParser.T__0:
                    this.state = 46;
                    this.sourceDeclaration();
                    break;
                case JavapParser.T__2:
                case JavapParser.T__5:
                case JavapParser.T__6:
                case JavapParser.T__7:
                case JavapParser.T__8:
                case JavapParser.T__9:
                case JavapParser.T__10:
                    this.state = 47;
                    this.classOrInterface();
                    break;
                default:
                    throw new antlr4.error.NoViableAltException(this);
            }
            this.state = 52;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 54;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input, 2, this._ctx);
        if (la_ === 1) {
            this.state = 53;
            this.match(JavapParser.EOF);
        }
    }
    catch (re) {
        if (re instanceof antlr4.error.RecognitionException) {
            localctx.exception = re;
            this._errHandler.reportError(this, re);
            this._errHandler.recover(this, re);
        }
        else {
            throw re;
        }
    }
    finally {
        this.exitRule();
    }
    return localctx;
};
function SourceDeclarationContext(parser, parent, invokingState) {
    if (parent === undefined) {
        parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
        invokingState = -1;
    }
    antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = JavapParser.RULE_sourceDeclaration;
    return this;
}
SourceDeclarationContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SourceDeclarationContext.prototype.constructor = SourceDeclarationContext;
SourceDeclarationContext.prototype.enterRule = function (listener) {
    if (listener instanceof JavapListener) {
        listener.enterSourceDeclaration(this);
    }
};
SourceDeclarationContext.prototype.exitRule = function (listener) {
    if (listener instanceof JavapListener) {
        listener.exitSourceDeclaration(this);
    }
};
SourceDeclarationContext.prototype.accept = function (visitor) {
    if (visitor instanceof JavapVisitor) {
        return visitor.visitSourceDeclaration(this);
    }
    else {
        return visitor.visitChildren(this);
    }
};
JavapParser.SourceDeclarationContext = SourceDeclarationContext;
JavapParser.prototype.sourceDeclaration = function () {
    var localctx = new SourceDeclarationContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, JavapParser.RULE_sourceDeclaration);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 56;
        this.match(JavapParser.T__0);
        this.state = 57;
        this.match(JavapParser.T__1);
        this.state = 61;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input, 3, this._ctx);
        while (_alt != 1 && _alt != antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if (_alt === 1 + 1) {
                this.state = 58;
                this.matchWildcard();
            }
            this.state = 63;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 3, this._ctx);
        }
        this.state = 64;
        this.match(JavapParser.T__1);
    }
    catch (re) {
        if (re instanceof antlr4.error.RecognitionException) {
            localctx.exception = re;
            this._errHandler.reportError(this, re);
            this._errHandler.recover(this, re);
        }
        else {
            throw re;
        }
    }
    finally {
        this.exitRule();
    }
    return localctx;
};
function ClassOrInterfaceContext(parser, parent, invokingState) {
    if (parent === undefined) {
        parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
        invokingState = -1;
    }
    antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = JavapParser.RULE_classOrInterface;
    return this;
}
ClassOrInterfaceContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ClassOrInterfaceContext.prototype.constructor = ClassOrInterfaceContext;
ClassOrInterfaceContext.prototype.classDeclaration = function () {
    return this.getTypedRuleContext(ClassDeclarationContext, 0);
};
ClassOrInterfaceContext.prototype.interfaceDeclaration = function () {
    return this.getTypedRuleContext(InterfaceDeclarationContext, 0);
};
ClassOrInterfaceContext.prototype.enterRule = function (listener) {
    if (listener instanceof JavapListener) {
        listener.enterClassOrInterface(this);
    }
};
ClassOrInterfaceContext.prototype.exitRule = function (listener) {
    if (listener instanceof JavapListener) {
        listener.exitClassOrInterface(this);
    }
};
ClassOrInterfaceContext.prototype.accept = function (visitor) {
    if (visitor instanceof JavapVisitor) {
        return visitor.visitClassOrInterface(this);
    }
    else {
        return visitor.visitChildren(this);
    }
};
JavapParser.ClassOrInterfaceContext = ClassOrInterfaceContext;
JavapParser.prototype.classOrInterface = function () {
    var localctx = new ClassOrInterfaceContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, JavapParser.RULE_classOrInterface);
    try {
        this.state = 68;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input, 4, this._ctx);
        switch (la_) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                this.state = 66;
                this.classDeclaration();
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                this.state = 67;
                this.interfaceDeclaration();
                break;
        }
    }
    catch (re) {
        if (re instanceof antlr4.error.RecognitionException) {
            localctx.exception = re;
            this._errHandler.reportError(this, re);
            this._errHandler.recover(this, re);
        }
        else {
            throw re;
        }
    }
    finally {
        this.exitRule();
    }
    return localctx;
};
function ClassDeclarationContext(parser, parent, invokingState) {
    if (parent === undefined) {
        parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
        invokingState = -1;
    }
    antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = JavapParser.RULE_classDeclaration;
    return this;
}
ClassDeclarationContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ClassDeclarationContext.prototype.constructor = ClassDeclarationContext;
ClassDeclarationContext.prototype.type = function (i) {
    if (i === undefined) {
        i = null;
    }
    if (i === null) {
        return this.getTypedRuleContexts(TypeContext);
    }
    else {
        return this.getTypedRuleContext(TypeContext, i);
    }
};
ClassDeclarationContext.prototype.classBody = function () {
    return this.getTypedRuleContext(ClassBodyContext, 0);
};
ClassDeclarationContext.prototype.classModifier = function (i) {
    if (i === undefined) {
        i = null;
    }
    if (i === null) {
        return this.getTypedRuleContexts(ClassModifierContext);
    }
    else {
        return this.getTypedRuleContext(ClassModifierContext, i);
    }
};
ClassDeclarationContext.prototype.typeList = function () {
    return this.getTypedRuleContext(TypeListContext, 0);
};
ClassDeclarationContext.prototype.enterRule = function (listener) {
    if (listener instanceof JavapListener) {
        listener.enterClassDeclaration(this);
    }
};
ClassDeclarationContext.prototype.exitRule = function (listener) {
    if (listener instanceof JavapListener) {
        listener.exitClassDeclaration(this);
    }
};
ClassDeclarationContext.prototype.accept = function (visitor) {
    if (visitor instanceof JavapVisitor) {
        return visitor.visitClassDeclaration(this);
    }
    else {
        return visitor.visitChildren(this);
    }
};
JavapParser.ClassDeclarationContext = ClassDeclarationContext;
JavapParser.prototype.classDeclaration = function () {
    var localctx = new ClassDeclarationContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, JavapParser.RULE_classDeclaration);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 73;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while ((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << JavapParser.T__6) | (1 << JavapParser.T__7) | (1 << JavapParser.T__8) | (1 << JavapParser.T__9) | (1 << JavapParser.T__10))) !== 0)) {
            this.state = 70;
            this.classModifier();
            this.state = 75;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 76;
        this.match(JavapParser.T__2);
        this.state = 77;
        this.type();
        this.state = 80;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === JavapParser.T__3) {
            this.state = 78;
            this.match(JavapParser.T__3);
            this.state = 79;
            this.type();
        }
        this.state = 84;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === JavapParser.T__4) {
            this.state = 82;
            this.match(JavapParser.T__4);
            this.state = 83;
            this.typeList();
        }
        this.state = 86;
        this.classBody();
    }
    catch (re) {
        if (re instanceof antlr4.error.RecognitionException) {
            localctx.exception = re;
            this._errHandler.reportError(this, re);
            this._errHandler.recover(this, re);
        }
        else {
            throw re;
        }
    }
    finally {
        this.exitRule();
    }
    return localctx;
};
function InterfaceDeclarationContext(parser, parent, invokingState) {
    if (parent === undefined) {
        parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
        invokingState = -1;
    }
    antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = JavapParser.RULE_interfaceDeclaration;
    return this;
}
InterfaceDeclarationContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
InterfaceDeclarationContext.prototype.constructor = InterfaceDeclarationContext;
InterfaceDeclarationContext.prototype.type = function () {
    return this.getTypedRuleContext(TypeContext, 0);
};
InterfaceDeclarationContext.prototype.interfaceBody = function () {
    return this.getTypedRuleContext(InterfaceBodyContext, 0);
};
InterfaceDeclarationContext.prototype.interfaceModifier = function (i) {
    if (i === undefined) {
        i = null;
    }
    if (i === null) {
        return this.getTypedRuleContexts(InterfaceModifierContext);
    }
    else {
        return this.getTypedRuleContext(InterfaceModifierContext, i);
    }
};
InterfaceDeclarationContext.prototype.typeList = function () {
    return this.getTypedRuleContext(TypeListContext, 0);
};
InterfaceDeclarationContext.prototype.enterRule = function (listener) {
    if (listener instanceof JavapListener) {
        listener.enterInterfaceDeclaration(this);
    }
};
InterfaceDeclarationContext.prototype.exitRule = function (listener) {
    if (listener instanceof JavapListener) {
        listener.exitInterfaceDeclaration(this);
    }
};
InterfaceDeclarationContext.prototype.accept = function (visitor) {
    if (visitor instanceof JavapVisitor) {
        return visitor.visitInterfaceDeclaration(this);
    }
    else {
        return visitor.visitChildren(this);
    }
};
JavapParser.InterfaceDeclarationContext = InterfaceDeclarationContext;
JavapParser.prototype.interfaceDeclaration = function () {
    var localctx = new InterfaceDeclarationContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, JavapParser.RULE_interfaceDeclaration);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 91;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while ((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << JavapParser.T__6) | (1 << JavapParser.T__7) | (1 << JavapParser.T__8))) !== 0)) {
            this.state = 88;
            this.interfaceModifier();
            this.state = 93;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 94;
        this.match(JavapParser.T__5);
        this.state = 95;
        this.type();
        this.state = 98;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === JavapParser.T__3) {
            this.state = 96;
            this.match(JavapParser.T__3);
            this.state = 97;
            this.typeList();
        }
        this.state = 100;
        this.interfaceBody();
    }
    catch (re) {
        if (re instanceof antlr4.error.RecognitionException) {
            localctx.exception = re;
            this._errHandler.reportError(this, re);
            this._errHandler.recover(this, re);
        }
        else {
            throw re;
        }
    }
    finally {
        this.exitRule();
    }
    return localctx;
};
function ClassModifierContext(parser, parent, invokingState) {
    if (parent === undefined) {
        parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
        invokingState = -1;
    }
    antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = JavapParser.RULE_classModifier;
    return this;
}
ClassModifierContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ClassModifierContext.prototype.constructor = ClassModifierContext;
ClassModifierContext.prototype.enterRule = function (listener) {
    if (listener instanceof JavapListener) {
        listener.enterClassModifier(this);
    }
};
ClassModifierContext.prototype.exitRule = function (listener) {
    if (listener instanceof JavapListener) {
        listener.exitClassModifier(this);
    }
};
ClassModifierContext.prototype.accept = function (visitor) {
    if (visitor instanceof JavapVisitor) {
        return visitor.visitClassModifier(this);
    }
    else {
        return visitor.visitChildren(this);
    }
};
JavapParser.ClassModifierContext = ClassModifierContext;
JavapParser.prototype.classModifier = function () {
    var localctx = new ClassModifierContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, JavapParser.RULE_classModifier);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 102;
        _la = this._input.LA(1);
        if (!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << JavapParser.T__6) | (1 << JavapParser.T__7) | (1 << JavapParser.T__8) | (1 << JavapParser.T__9) | (1 << JavapParser.T__10))) !== 0))) {
            this._errHandler.recoverInline(this);
        }
        else {
            this._errHandler.reportMatch(this);
            this.consume();
        }
    }
    catch (re) {
        if (re instanceof antlr4.error.RecognitionException) {
            localctx.exception = re;
            this._errHandler.reportError(this, re);
            this._errHandler.recover(this, re);
        }
        else {
            throw re;
        }
    }
    finally {
        this.exitRule();
    }
    return localctx;
};
function InterfaceModifierContext(parser, parent, invokingState) {
    if (parent === undefined) {
        parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
        invokingState = -1;
    }
    antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = JavapParser.RULE_interfaceModifier;
    return this;
}
InterfaceModifierContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
InterfaceModifierContext.prototype.constructor = InterfaceModifierContext;
InterfaceModifierContext.prototype.enterRule = function (listener) {
    if (listener instanceof JavapListener) {
        listener.enterInterfaceModifier(this);
    }
};
InterfaceModifierContext.prototype.exitRule = function (listener) {
    if (listener instanceof JavapListener) {
        listener.exitInterfaceModifier(this);
    }
};
InterfaceModifierContext.prototype.accept = function (visitor) {
    if (visitor instanceof JavapVisitor) {
        return visitor.visitInterfaceModifier(this);
    }
    else {
        return visitor.visitChildren(this);
    }
};
JavapParser.InterfaceModifierContext = InterfaceModifierContext;
JavapParser.prototype.interfaceModifier = function () {
    var localctx = new InterfaceModifierContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, JavapParser.RULE_interfaceModifier);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 104;
        _la = this._input.LA(1);
        if (!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << JavapParser.T__6) | (1 << JavapParser.T__7) | (1 << JavapParser.T__8))) !== 0))) {
            this._errHandler.recoverInline(this);
        }
        else {
            this._errHandler.reportMatch(this);
            this.consume();
        }
    }
    catch (re) {
        if (re instanceof antlr4.error.RecognitionException) {
            localctx.exception = re;
            this._errHandler.reportError(this, re);
            this._errHandler.recover(this, re);
        }
        else {
            throw re;
        }
    }
    finally {
        this.exitRule();
    }
    return localctx;
};
function TypeListContext(parser, parent, invokingState) {
    if (parent === undefined) {
        parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
        invokingState = -1;
    }
    antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = JavapParser.RULE_typeList;
    return this;
}
TypeListContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TypeListContext.prototype.constructor = TypeListContext;
TypeListContext.prototype.type = function (i) {
    if (i === undefined) {
        i = null;
    }
    if (i === null) {
        return this.getTypedRuleContexts(TypeContext);
    }
    else {
        return this.getTypedRuleContext(TypeContext, i);
    }
};
TypeListContext.prototype.enterRule = function (listener) {
    if (listener instanceof JavapListener) {
        listener.enterTypeList(this);
    }
};
TypeListContext.prototype.exitRule = function (listener) {
    if (listener instanceof JavapListener) {
        listener.exitTypeList(this);
    }
};
TypeListContext.prototype.accept = function (visitor) {
    if (visitor instanceof JavapVisitor) {
        return visitor.visitTypeList(this);
    }
    else {
        return visitor.visitChildren(this);
    }
};
JavapParser.TypeListContext = TypeListContext;
JavapParser.prototype.typeList = function () {
    var localctx = new TypeListContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, JavapParser.RULE_typeList);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 106;
        this.type();
        this.state = 111;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input, 10, this._ctx);
        while (_alt != 2 && _alt != antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if (_alt === 1) {
                this.state = 107;
                _la = this._input.LA(1);
                if (!(_la === JavapParser.T__11 || _la === JavapParser.T__12)) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 108;
                this.type();
            }
            this.state = 113;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 10, this._ctx);
        }
    }
    catch (re) {
        if (re instanceof antlr4.error.RecognitionException) {
            localctx.exception = re;
            this._errHandler.reportError(this, re);
            this._errHandler.recover(this, re);
        }
        else {
            throw re;
        }
    }
    finally {
        this.exitRule();
    }
    return localctx;
};
function TypeContext(parser, parent, invokingState) {
    if (parent === undefined) {
        parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
        invokingState = -1;
    }
    antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = JavapParser.RULE_type;
    return this;
}
TypeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TypeContext.prototype.constructor = TypeContext;
TypeContext.prototype.Identifier = function () {
    return this.getToken(JavapParser.Identifier, 0);
};
TypeContext.prototype.packageName = function () {
    return this.getTypedRuleContext(PackageNameContext, 0);
};
TypeContext.prototype.typeArguments = function () {
    return this.getTypedRuleContext(TypeArgumentsContext, 0);
};
TypeContext.prototype.enterRule = function (listener) {
    if (listener instanceof JavapListener) {
        listener.enterType(this);
    }
};
TypeContext.prototype.exitRule = function (listener) {
    if (listener instanceof JavapListener) {
        listener.exitType(this);
    }
};
TypeContext.prototype.accept = function (visitor) {
    if (visitor instanceof JavapVisitor) {
        return visitor.visitType(this);
    }
    else {
        return visitor.visitChildren(this);
    }
};
JavapParser.TypeContext = TypeContext;
JavapParser.prototype.type = function () {
    var localctx = new TypeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, JavapParser.RULE_type);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 117;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input, 11, this._ctx);
        if (la_ === 1) {
            this.state = 114;
            this.packageName();
            this.state = 115;
            this.match(JavapParser.T__13);
        }
        this.state = 119;
        this.match(JavapParser.Identifier);
        this.state = 121;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === JavapParser.T__14 || _la === JavapParser.T__16) {
            this.state = 120;
            this.typeArguments();
        }
    }
    catch (re) {
        if (re instanceof antlr4.error.RecognitionException) {
            localctx.exception = re;
            this._errHandler.reportError(this, re);
            this._errHandler.recover(this, re);
        }
        else {
            throw re;
        }
    }
    finally {
        this.exitRule();
    }
    return localctx;
};
function PackageNameContext(parser, parent, invokingState) {
    if (parent === undefined) {
        parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
        invokingState = -1;
    }
    antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = JavapParser.RULE_packageName;
    return this;
}
PackageNameContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PackageNameContext.prototype.constructor = PackageNameContext;
PackageNameContext.prototype.Identifier = function (i) {
    if (i === undefined) {
        i = null;
    }
    if (i === null) {
        return this.getTokens(JavapParser.Identifier);
    }
    else {
        return this.getToken(JavapParser.Identifier, i);
    }
};
PackageNameContext.prototype.enterRule = function (listener) {
    if (listener instanceof JavapListener) {
        listener.enterPackageName(this);
    }
};
PackageNameContext.prototype.exitRule = function (listener) {
    if (listener instanceof JavapListener) {
        listener.exitPackageName(this);
    }
};
PackageNameContext.prototype.accept = function (visitor) {
    if (visitor instanceof JavapVisitor) {
        return visitor.visitPackageName(this);
    }
    else {
        return visitor.visitChildren(this);
    }
};
JavapParser.PackageNameContext = PackageNameContext;
JavapParser.prototype.packageName = function () {
    var localctx = new PackageNameContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, JavapParser.RULE_packageName);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 123;
        this.match(JavapParser.Identifier);
        this.state = 128;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input, 13, this._ctx);
        while (_alt != 2 && _alt != antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if (_alt === 1) {
                this.state = 124;
                this.match(JavapParser.T__13);
                this.state = 125;
                this.match(JavapParser.Identifier);
            }
            this.state = 130;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 13, this._ctx);
        }
    }
    catch (re) {
        if (re instanceof antlr4.error.RecognitionException) {
            localctx.exception = re;
            this._errHandler.reportError(this, re);
            this._errHandler.recover(this, re);
        }
        else {
            throw re;
        }
    }
    finally {
        this.exitRule();
    }
    return localctx;
};
function TypeArgumentsContext(parser, parent, invokingState) {
    if (parent === undefined) {
        parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
        invokingState = -1;
    }
    antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = JavapParser.RULE_typeArguments;
    return this;
}
TypeArgumentsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TypeArgumentsContext.prototype.constructor = TypeArgumentsContext;
TypeArgumentsContext.prototype.typeArgument = function (i) {
    if (i === undefined) {
        i = null;
    }
    if (i === null) {
        return this.getTypedRuleContexts(TypeArgumentContext);
    }
    else {
        return this.getTypedRuleContext(TypeArgumentContext, i);
    }
};
TypeArgumentsContext.prototype.enterRule = function (listener) {
    if (listener instanceof JavapListener) {
        listener.enterTypeArguments(this);
    }
};
TypeArgumentsContext.prototype.exitRule = function (listener) {
    if (listener instanceof JavapListener) {
        listener.exitTypeArguments(this);
    }
};
TypeArgumentsContext.prototype.accept = function (visitor) {
    if (visitor instanceof JavapVisitor) {
        return visitor.visitTypeArguments(this);
    }
    else {
        return visitor.visitChildren(this);
    }
};
JavapParser.TypeArgumentsContext = TypeArgumentsContext;
JavapParser.prototype.typeArguments = function () {
    var localctx = new TypeArgumentsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 20, JavapParser.RULE_typeArguments);
    var _la = 0; // Token type
    try {
        this.state = 144;
        this._errHandler.sync(this);
        switch (this._input.LA(1)) {
            case JavapParser.T__14:
                this.enterOuterAlt(localctx, 1);
                this.state = 131;
                this.match(JavapParser.T__14);
                this.state = 132;
                this.match(JavapParser.T__15);
                break;
            case JavapParser.T__16:
                this.enterOuterAlt(localctx, 2);
                this.state = 133;
                this.match(JavapParser.T__16);
                this.state = 134;
                this.typeArgument();
                this.state = 139;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === JavapParser.T__11 || _la === JavapParser.T__12) {
                    this.state = 135;
                    _la = this._input.LA(1);
                    if (!(_la === JavapParser.T__11 || _la === JavapParser.T__12)) {
                        this._errHandler.recoverInline(this);
                    }
                    else {
                        this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 136;
                    this.typeArgument();
                    this.state = 141;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 142;
                this.match(JavapParser.T__17);
                break;
            default:
                throw new antlr4.error.NoViableAltException(this);
        }
    }
    catch (re) {
        if (re instanceof antlr4.error.RecognitionException) {
            localctx.exception = re;
            this._errHandler.reportError(this, re);
            this._errHandler.recover(this, re);
        }
        else {
            throw re;
        }
    }
    finally {
        this.exitRule();
    }
    return localctx;
};
function TypeArgumentContext(parser, parent, invokingState) {
    if (parent === undefined) {
        parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
        invokingState = -1;
    }
    antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = JavapParser.RULE_typeArgument;
    return this;
}
TypeArgumentContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TypeArgumentContext.prototype.constructor = TypeArgumentContext;
TypeArgumentContext.prototype.type = function () {
    return this.getTypedRuleContext(TypeContext, 0);
};
TypeArgumentContext.prototype.Identifier = function () {
    return this.getToken(JavapParser.Identifier, 0);
};
TypeArgumentContext.prototype.enterRule = function (listener) {
    if (listener instanceof JavapListener) {
        listener.enterTypeArgument(this);
    }
};
TypeArgumentContext.prototype.exitRule = function (listener) {
    if (listener instanceof JavapListener) {
        listener.exitTypeArgument(this);
    }
};
TypeArgumentContext.prototype.accept = function (visitor) {
    if (visitor instanceof JavapVisitor) {
        return visitor.visitTypeArgument(this);
    }
    else {
        return visitor.visitChildren(this);
    }
};
JavapParser.TypeArgumentContext = TypeArgumentContext;
JavapParser.prototype.typeArgument = function () {
    var localctx = new TypeArgumentContext(this, this._ctx, this.state);
    this.enterRule(localctx, 22, JavapParser.RULE_typeArgument);
    try {
        this.state = 157;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input, 16, this._ctx);
        switch (la_) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                this.state = 146;
                this.type();
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                this.state = 147;
                this.match(JavapParser.Identifier);
                this.state = 148;
                this.match(JavapParser.T__3);
                this.state = 149;
                this.type();
                break;
            case 3:
                this.enterOuterAlt(localctx, 3);
                this.state = 150;
                this.match(JavapParser.T__18);
                this.state = 151;
                this.match(JavapParser.T__3);
                this.state = 152;
                this.type();
                break;
            case 4:
                this.enterOuterAlt(localctx, 4);
                this.state = 153;
                this.match(JavapParser.T__18);
                this.state = 154;
                this.match(JavapParser.T__19);
                this.state = 155;
                this.type();
                break;
            case 5:
                this.enterOuterAlt(localctx, 5);
                this.state = 156;
                this.match(JavapParser.T__18);
                break;
        }
    }
    catch (re) {
        if (re instanceof antlr4.error.RecognitionException) {
            localctx.exception = re;
            this._errHandler.reportError(this, re);
            this._errHandler.recover(this, re);
        }
        else {
            throw re;
        }
    }
    finally {
        this.exitRule();
    }
    return localctx;
};
function ClassBodyContext(parser, parent, invokingState) {
    if (parent === undefined) {
        parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
        invokingState = -1;
    }
    antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = JavapParser.RULE_classBody;
    return this;
}
ClassBodyContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ClassBodyContext.prototype.constructor = ClassBodyContext;
ClassBodyContext.prototype.classMember = function (i) {
    if (i === undefined) {
        i = null;
    }
    if (i === null) {
        return this.getTypedRuleContexts(ClassMemberContext);
    }
    else {
        return this.getTypedRuleContext(ClassMemberContext, i);
    }
};
ClassBodyContext.prototype.enterRule = function (listener) {
    if (listener instanceof JavapListener) {
        listener.enterClassBody(this);
    }
};
ClassBodyContext.prototype.exitRule = function (listener) {
    if (listener instanceof JavapListener) {
        listener.exitClassBody(this);
    }
};
ClassBodyContext.prototype.accept = function (visitor) {
    if (visitor instanceof JavapVisitor) {
        return visitor.visitClassBody(this);
    }
    else {
        return visitor.visitChildren(this);
    }
};
JavapParser.ClassBodyContext = ClassBodyContext;
JavapParser.prototype.classBody = function () {
    var localctx = new ClassBodyContext(this, this._ctx, this.state);
    this.enterRule(localctx, 24, JavapParser.RULE_classBody);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 159;
        this.match(JavapParser.T__20);
        this.state = 163;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (((((_la - 7)) & ~0x1f) == 0 && ((1 << (_la - 7)) & ((1 << (JavapParser.T__6 - 7)) | (1 << (JavapParser.T__7 - 7)) | (1 << (JavapParser.T__8 - 7)) | (1 << (JavapParser.T__9 - 7)) | (1 << (JavapParser.T__10 - 7)) | (1 << (JavapParser.T__14 - 7)) | (1 << (JavapParser.T__16 - 7)) | (1 << (JavapParser.T__22 - 7)) | (1 << (JavapParser.T__23 - 7)) | (1 << (JavapParser.T__24 - 7)) | (1 << (JavapParser.T__25 - 7)) | (1 << (JavapParser.T__26 - 7)) | (1 << (JavapParser.T__27 - 7)) | (1 << (JavapParser.T__28 - 7)) | (1 << (JavapParser.Identifier - 7)))) !== 0)) {
            this.state = 160;
            this.classMember();
            this.state = 165;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 166;
        this.match(JavapParser.T__21);
    }
    catch (re) {
        if (re instanceof antlr4.error.RecognitionException) {
            localctx.exception = re;
            this._errHandler.reportError(this, re);
            this._errHandler.recover(this, re);
        }
        else {
            throw re;
        }
    }
    finally {
        this.exitRule();
    }
    return localctx;
};
function InterfaceBodyContext(parser, parent, invokingState) {
    if (parent === undefined) {
        parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
        invokingState = -1;
    }
    antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = JavapParser.RULE_interfaceBody;
    return this;
}
InterfaceBodyContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
InterfaceBodyContext.prototype.constructor = InterfaceBodyContext;
InterfaceBodyContext.prototype.interfaceMember = function (i) {
    if (i === undefined) {
        i = null;
    }
    if (i === null) {
        return this.getTypedRuleContexts(InterfaceMemberContext);
    }
    else {
        return this.getTypedRuleContext(InterfaceMemberContext, i);
    }
};
InterfaceBodyContext.prototype.enterRule = function (listener) {
    if (listener instanceof JavapListener) {
        listener.enterInterfaceBody(this);
    }
};
InterfaceBodyContext.prototype.exitRule = function (listener) {
    if (listener instanceof JavapListener) {
        listener.exitInterfaceBody(this);
    }
};
InterfaceBodyContext.prototype.accept = function (visitor) {
    if (visitor instanceof JavapVisitor) {
        return visitor.visitInterfaceBody(this);
    }
    else {
        return visitor.visitChildren(this);
    }
};
JavapParser.InterfaceBodyContext = InterfaceBodyContext;
JavapParser.prototype.interfaceBody = function () {
    var localctx = new InterfaceBodyContext(this, this._ctx, this.state);
    this.enterRule(localctx, 26, JavapParser.RULE_interfaceBody);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 168;
        this.match(JavapParser.T__20);
        this.state = 172;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (((((_la - 7)) & ~0x1f) == 0 && ((1 << (_la - 7)) & ((1 << (JavapParser.T__6 - 7)) | (1 << (JavapParser.T__7 - 7)) | (1 << (JavapParser.T__8 - 7)) | (1 << (JavapParser.T__9 - 7)) | (1 << (JavapParser.T__10 - 7)) | (1 << (JavapParser.T__14 - 7)) | (1 << (JavapParser.T__16 - 7)) | (1 << (JavapParser.T__22 - 7)) | (1 << (JavapParser.T__23 - 7)) | (1 << (JavapParser.T__24 - 7)) | (1 << (JavapParser.T__25 - 7)) | (1 << (JavapParser.T__26 - 7)) | (1 << (JavapParser.T__27 - 7)) | (1 << (JavapParser.T__28 - 7)) | (1 << (JavapParser.Identifier - 7)))) !== 0)) {
            this.state = 169;
            this.interfaceMember();
            this.state = 174;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 175;
        this.match(JavapParser.T__21);
    }
    catch (re) {
        if (re instanceof antlr4.error.RecognitionException) {
            localctx.exception = re;
            this._errHandler.reportError(this, re);
            this._errHandler.recover(this, re);
        }
        else {
            throw re;
        }
    }
    finally {
        this.exitRule();
    }
    return localctx;
};
function ModifierContext(parser, parent, invokingState) {
    if (parent === undefined) {
        parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
        invokingState = -1;
    }
    antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = JavapParser.RULE_modifier;
    return this;
}
ModifierContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ModifierContext.prototype.constructor = ModifierContext;
ModifierContext.prototype.enterRule = function (listener) {
    if (listener instanceof JavapListener) {
        listener.enterModifier(this);
    }
};
ModifierContext.prototype.exitRule = function (listener) {
    if (listener instanceof JavapListener) {
        listener.exitModifier(this);
    }
};
ModifierContext.prototype.accept = function (visitor) {
    if (visitor instanceof JavapVisitor) {
        return visitor.visitModifier(this);
    }
    else {
        return visitor.visitChildren(this);
    }
};
JavapParser.ModifierContext = ModifierContext;
JavapParser.prototype.modifier = function () {
    var localctx = new ModifierContext(this, this._ctx, this.state);
    this.enterRule(localctx, 28, JavapParser.RULE_modifier);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 177;
        _la = this._input.LA(1);
        if (!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << JavapParser.T__6) | (1 << JavapParser.T__7) | (1 << JavapParser.T__8) | (1 << JavapParser.T__9) | (1 << JavapParser.T__10) | (1 << JavapParser.T__22) | (1 << JavapParser.T__23) | (1 << JavapParser.T__24) | (1 << JavapParser.T__25) | (1 << JavapParser.T__26) | (1 << JavapParser.T__27) | (1 << JavapParser.T__28))) !== 0))) {
            this._errHandler.recoverInline(this);
        }
        else {
            this._errHandler.reportMatch(this);
            this.consume();
        }
    }
    catch (re) {
        if (re instanceof antlr4.error.RecognitionException) {
            localctx.exception = re;
            this._errHandler.reportError(this, re);
            this._errHandler.recover(this, re);
        }
        else {
            throw re;
        }
    }
    finally {
        this.exitRule();
    }
    return localctx;
};
function ClassMemberContext(parser, parent, invokingState) {
    if (parent === undefined) {
        parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
        invokingState = -1;
    }
    antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = JavapParser.RULE_classMember;
    return this;
}
ClassMemberContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ClassMemberContext.prototype.constructor = ClassMemberContext;
ClassMemberContext.prototype.constructorDeclaration = function () {
    return this.getTypedRuleContext(ConstructorDeclarationContext, 0);
};
ClassMemberContext.prototype.fieldDeclaration = function () {
    return this.getTypedRuleContext(FieldDeclarationContext, 0);
};
ClassMemberContext.prototype.methodDeclaration = function () {
    return this.getTypedRuleContext(MethodDeclarationContext, 0);
};
ClassMemberContext.prototype.enterRule = function (listener) {
    if (listener instanceof JavapListener) {
        listener.enterClassMember(this);
    }
};
ClassMemberContext.prototype.exitRule = function (listener) {
    if (listener instanceof JavapListener) {
        listener.exitClassMember(this);
    }
};
ClassMemberContext.prototype.accept = function (visitor) {
    if (visitor instanceof JavapVisitor) {
        return visitor.visitClassMember(this);
    }
    else {
        return visitor.visitChildren(this);
    }
};
JavapParser.ClassMemberContext = ClassMemberContext;
JavapParser.prototype.classMember = function () {
    var localctx = new ClassMemberContext(this, this._ctx, this.state);
    this.enterRule(localctx, 30, JavapParser.RULE_classMember);
    try {
        this.state = 185;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input, 19, this._ctx);
        switch (la_) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                this.state = 179;
                this.constructorDeclaration();
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                this.state = 180;
                this.fieldDeclaration();
                break;
            case 3:
                this.enterOuterAlt(localctx, 3);
                this.state = 181;
                this.methodDeclaration();
                break;
            case 4:
                this.enterOuterAlt(localctx, 4);
                this.state = 182;
                this.match(JavapParser.T__24);
                this.state = 183;
                this.match(JavapParser.T__29);
                this.state = 184;
                this.match(JavapParser.T__30);
                break;
        }
    }
    catch (re) {
        if (re instanceof antlr4.error.RecognitionException) {
            localctx.exception = re;
            this._errHandler.reportError(this, re);
            this._errHandler.recover(this, re);
        }
        else {
            throw re;
        }
    }
    finally {
        this.exitRule();
    }
    return localctx;
};
function InterfaceMemberContext(parser, parent, invokingState) {
    if (parent === undefined) {
        parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
        invokingState = -1;
    }
    antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = JavapParser.RULE_interfaceMember;
    return this;
}
InterfaceMemberContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
InterfaceMemberContext.prototype.constructor = InterfaceMemberContext;
InterfaceMemberContext.prototype.fieldDeclaration = function () {
    return this.getTypedRuleContext(FieldDeclarationContext, 0);
};
InterfaceMemberContext.prototype.methodDeclaration = function () {
    return this.getTypedRuleContext(MethodDeclarationContext, 0);
};
InterfaceMemberContext.prototype.enterRule = function (listener) {
    if (listener instanceof JavapListener) {
        listener.enterInterfaceMember(this);
    }
};
InterfaceMemberContext.prototype.exitRule = function (listener) {
    if (listener instanceof JavapListener) {
        listener.exitInterfaceMember(this);
    }
};
InterfaceMemberContext.prototype.accept = function (visitor) {
    if (visitor instanceof JavapVisitor) {
        return visitor.visitInterfaceMember(this);
    }
    else {
        return visitor.visitChildren(this);
    }
};
JavapParser.InterfaceMemberContext = InterfaceMemberContext;
JavapParser.prototype.interfaceMember = function () {
    var localctx = new InterfaceMemberContext(this, this._ctx, this.state);
    this.enterRule(localctx, 32, JavapParser.RULE_interfaceMember);
    try {
        this.state = 192;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input, 20, this._ctx);
        switch (la_) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                this.state = 187;
                this.fieldDeclaration();
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                this.state = 188;
                this.methodDeclaration();
                break;
            case 3:
                this.enterOuterAlt(localctx, 3);
                this.state = 189;
                this.match(JavapParser.T__24);
                this.state = 190;
                this.match(JavapParser.T__29);
                this.state = 191;
                this.match(JavapParser.T__30);
                break;
        }
    }
    catch (re) {
        if (re instanceof antlr4.error.RecognitionException) {
            localctx.exception = re;
            this._errHandler.reportError(this, re);
            this._errHandler.recover(this, re);
        }
        else {
            throw re;
        }
    }
    finally {
        this.exitRule();
    }
    return localctx;
};
function ConstructorDeclarationContext(parser, parent, invokingState) {
    if (parent === undefined) {
        parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
        invokingState = -1;
    }
    antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = JavapParser.RULE_constructorDeclaration;
    return this;
}
ConstructorDeclarationContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ConstructorDeclarationContext.prototype.constructor = ConstructorDeclarationContext;
ConstructorDeclarationContext.prototype.type = function () {
    return this.getTypedRuleContext(TypeContext, 0);
};
ConstructorDeclarationContext.prototype.methodArguments = function () {
    return this.getTypedRuleContext(MethodArgumentsContext, 0);
};
ConstructorDeclarationContext.prototype.modifier = function (i) {
    if (i === undefined) {
        i = null;
    }
    if (i === null) {
        return this.getTypedRuleContexts(ModifierContext);
    }
    else {
        return this.getTypedRuleContext(ModifierContext, i);
    }
};
ConstructorDeclarationContext.prototype.throwsException = function () {
    return this.getTypedRuleContext(ThrowsExceptionContext, 0);
};
ConstructorDeclarationContext.prototype.enterRule = function (listener) {
    if (listener instanceof JavapListener) {
        listener.enterConstructorDeclaration(this);
    }
};
ConstructorDeclarationContext.prototype.exitRule = function (listener) {
    if (listener instanceof JavapListener) {
        listener.exitConstructorDeclaration(this);
    }
};
ConstructorDeclarationContext.prototype.accept = function (visitor) {
    if (visitor instanceof JavapVisitor) {
        return visitor.visitConstructorDeclaration(this);
    }
    else {
        return visitor.visitChildren(this);
    }
};
JavapParser.ConstructorDeclarationContext = ConstructorDeclarationContext;
JavapParser.prototype.constructorDeclaration = function () {
    var localctx = new ConstructorDeclarationContext(this, this._ctx, this.state);
    this.enterRule(localctx, 34, JavapParser.RULE_constructorDeclaration);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 197;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while ((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << JavapParser.T__6) | (1 << JavapParser.T__7) | (1 << JavapParser.T__8) | (1 << JavapParser.T__9) | (1 << JavapParser.T__10) | (1 << JavapParser.T__22) | (1 << JavapParser.T__23) | (1 << JavapParser.T__24) | (1 << JavapParser.T__25) | (1 << JavapParser.T__26) | (1 << JavapParser.T__27) | (1 << JavapParser.T__28))) !== 0)) {
            this.state = 194;
            this.modifier();
            this.state = 199;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 200;
        this.type();
        this.state = 201;
        this.match(JavapParser.T__31);
        this.state = 202;
        this.methodArguments();
        this.state = 203;
        this.match(JavapParser.T__32);
        this.state = 205;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === JavapParser.T__33) {
            this.state = 204;
            this.throwsException();
        }
        this.state = 207;
        this.match(JavapParser.T__30);
    }
    catch (re) {
        if (re instanceof antlr4.error.RecognitionException) {
            localctx.exception = re;
            this._errHandler.reportError(this, re);
            this._errHandler.recover(this, re);
        }
        else {
            throw re;
        }
    }
    finally {
        this.exitRule();
    }
    return localctx;
};
function FieldDeclarationContext(parser, parent, invokingState) {
    if (parent === undefined) {
        parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
        invokingState = -1;
    }
    antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = JavapParser.RULE_fieldDeclaration;
    return this;
}
FieldDeclarationContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FieldDeclarationContext.prototype.constructor = FieldDeclarationContext;
FieldDeclarationContext.prototype.type = function () {
    return this.getTypedRuleContext(TypeContext, 0);
};
FieldDeclarationContext.prototype.Identifier = function () {
    return this.getToken(JavapParser.Identifier, 0);
};
FieldDeclarationContext.prototype.modifier = function (i) {
    if (i === undefined) {
        i = null;
    }
    if (i === null) {
        return this.getTypedRuleContexts(ModifierContext);
    }
    else {
        return this.getTypedRuleContext(ModifierContext, i);
    }
};
FieldDeclarationContext.prototype.enterRule = function (listener) {
    if (listener instanceof JavapListener) {
        listener.enterFieldDeclaration(this);
    }
};
FieldDeclarationContext.prototype.exitRule = function (listener) {
    if (listener instanceof JavapListener) {
        listener.exitFieldDeclaration(this);
    }
};
FieldDeclarationContext.prototype.accept = function (visitor) {
    if (visitor instanceof JavapVisitor) {
        return visitor.visitFieldDeclaration(this);
    }
    else {
        return visitor.visitChildren(this);
    }
};
JavapParser.FieldDeclarationContext = FieldDeclarationContext;
JavapParser.prototype.fieldDeclaration = function () {
    var localctx = new FieldDeclarationContext(this, this._ctx, this.state);
    this.enterRule(localctx, 36, JavapParser.RULE_fieldDeclaration);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 212;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while ((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << JavapParser.T__6) | (1 << JavapParser.T__7) | (1 << JavapParser.T__8) | (1 << JavapParser.T__9) | (1 << JavapParser.T__10) | (1 << JavapParser.T__22) | (1 << JavapParser.T__23) | (1 << JavapParser.T__24) | (1 << JavapParser.T__25) | (1 << JavapParser.T__26) | (1 << JavapParser.T__27) | (1 << JavapParser.T__28))) !== 0)) {
            this.state = 209;
            this.modifier();
            this.state = 214;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 215;
        this.type();
        this.state = 216;
        this.match(JavapParser.Identifier);
        this.state = 217;
        this.match(JavapParser.T__30);
    }
    catch (re) {
        if (re instanceof antlr4.error.RecognitionException) {
            localctx.exception = re;
            this._errHandler.reportError(this, re);
            this._errHandler.recover(this, re);
        }
        else {
            throw re;
        }
    }
    finally {
        this.exitRule();
    }
    return localctx;
};
function MethodDeclarationContext(parser, parent, invokingState) {
    if (parent === undefined) {
        parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
        invokingState = -1;
    }
    antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = JavapParser.RULE_methodDeclaration;
    return this;
}
MethodDeclarationContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MethodDeclarationContext.prototype.constructor = MethodDeclarationContext;
MethodDeclarationContext.prototype.type = function () {
    return this.getTypedRuleContext(TypeContext, 0);
};
MethodDeclarationContext.prototype.Identifier = function () {
    return this.getToken(JavapParser.Identifier, 0);
};
MethodDeclarationContext.prototype.methodArguments = function () {
    return this.getTypedRuleContext(MethodArgumentsContext, 0);
};
MethodDeclarationContext.prototype.modifier = function (i) {
    if (i === undefined) {
        i = null;
    }
    if (i === null) {
        return this.getTypedRuleContexts(ModifierContext);
    }
    else {
        return this.getTypedRuleContext(ModifierContext, i);
    }
};
MethodDeclarationContext.prototype.typeArguments = function () {
    return this.getTypedRuleContext(TypeArgumentsContext, 0);
};
MethodDeclarationContext.prototype.throwsException = function () {
    return this.getTypedRuleContext(ThrowsExceptionContext, 0);
};
MethodDeclarationContext.prototype.enterRule = function (listener) {
    if (listener instanceof JavapListener) {
        listener.enterMethodDeclaration(this);
    }
};
MethodDeclarationContext.prototype.exitRule = function (listener) {
    if (listener instanceof JavapListener) {
        listener.exitMethodDeclaration(this);
    }
};
MethodDeclarationContext.prototype.accept = function (visitor) {
    if (visitor instanceof JavapVisitor) {
        return visitor.visitMethodDeclaration(this);
    }
    else {
        return visitor.visitChildren(this);
    }
};
JavapParser.MethodDeclarationContext = MethodDeclarationContext;
JavapParser.prototype.methodDeclaration = function () {
    var localctx = new MethodDeclarationContext(this, this._ctx, this.state);
    this.enterRule(localctx, 38, JavapParser.RULE_methodDeclaration);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 222;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while ((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << JavapParser.T__6) | (1 << JavapParser.T__7) | (1 << JavapParser.T__8) | (1 << JavapParser.T__9) | (1 << JavapParser.T__10) | (1 << JavapParser.T__22) | (1 << JavapParser.T__23) | (1 << JavapParser.T__24) | (1 << JavapParser.T__25) | (1 << JavapParser.T__26) | (1 << JavapParser.T__27) | (1 << JavapParser.T__28))) !== 0)) {
            this.state = 219;
            this.modifier();
            this.state = 224;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 226;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === JavapParser.T__14 || _la === JavapParser.T__16) {
            this.state = 225;
            this.typeArguments();
        }
        this.state = 228;
        this.type();
        this.state = 229;
        this.match(JavapParser.Identifier);
        this.state = 230;
        this.match(JavapParser.T__31);
        this.state = 231;
        this.methodArguments();
        this.state = 232;
        this.match(JavapParser.T__32);
        this.state = 234;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === JavapParser.T__33) {
            this.state = 233;
            this.throwsException();
        }
        this.state = 236;
        this.match(JavapParser.T__30);
    }
    catch (re) {
        if (re instanceof antlr4.error.RecognitionException) {
            localctx.exception = re;
            this._errHandler.reportError(this, re);
            this._errHandler.recover(this, re);
        }
        else {
            throw re;
        }
    }
    finally {
        this.exitRule();
    }
    return localctx;
};
function ThrowsExceptionContext(parser, parent, invokingState) {
    if (parent === undefined) {
        parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
        invokingState = -1;
    }
    antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = JavapParser.RULE_throwsException;
    return this;
}
ThrowsExceptionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ThrowsExceptionContext.prototype.constructor = ThrowsExceptionContext;
ThrowsExceptionContext.prototype.typeList = function () {
    return this.getTypedRuleContext(TypeListContext, 0);
};
ThrowsExceptionContext.prototype.enterRule = function (listener) {
    if (listener instanceof JavapListener) {
        listener.enterThrowsException(this);
    }
};
ThrowsExceptionContext.prototype.exitRule = function (listener) {
    if (listener instanceof JavapListener) {
        listener.exitThrowsException(this);
    }
};
ThrowsExceptionContext.prototype.accept = function (visitor) {
    if (visitor instanceof JavapVisitor) {
        return visitor.visitThrowsException(this);
    }
    else {
        return visitor.visitChildren(this);
    }
};
JavapParser.ThrowsExceptionContext = ThrowsExceptionContext;
JavapParser.prototype.throwsException = function () {
    var localctx = new ThrowsExceptionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 40, JavapParser.RULE_throwsException);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 238;
        this.match(JavapParser.T__33);
        this.state = 239;
        this.typeList();
    }
    catch (re) {
        if (re instanceof antlr4.error.RecognitionException) {
            localctx.exception = re;
            this._errHandler.reportError(this, re);
            this._errHandler.recover(this, re);
        }
        else {
            throw re;
        }
    }
    finally {
        this.exitRule();
    }
    return localctx;
};
function VarargsContext(parser, parent, invokingState) {
    if (parent === undefined) {
        parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
        invokingState = -1;
    }
    antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = JavapParser.RULE_varargs;
    return this;
}
VarargsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
VarargsContext.prototype.constructor = VarargsContext;
VarargsContext.prototype.type = function () {
    return this.getTypedRuleContext(TypeContext, 0);
};
VarargsContext.prototype.enterRule = function (listener) {
    if (listener instanceof JavapListener) {
        listener.enterVarargs(this);
    }
};
VarargsContext.prototype.exitRule = function (listener) {
    if (listener instanceof JavapListener) {
        listener.exitVarargs(this);
    }
};
VarargsContext.prototype.accept = function (visitor) {
    if (visitor instanceof JavapVisitor) {
        return visitor.visitVarargs(this);
    }
    else {
        return visitor.visitChildren(this);
    }
};
JavapParser.VarargsContext = VarargsContext;
JavapParser.prototype.varargs = function () {
    var localctx = new VarargsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 42, JavapParser.RULE_varargs);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 241;
        this.type();
        this.state = 242;
        this.match(JavapParser.T__34);
    }
    catch (re) {
        if (re instanceof antlr4.error.RecognitionException) {
            localctx.exception = re;
            this._errHandler.reportError(this, re);
            this._errHandler.recover(this, re);
        }
        else {
            throw re;
        }
    }
    finally {
        this.exitRule();
    }
    return localctx;
};
function MethodArgumentsContext(parser, parent, invokingState) {
    if (parent === undefined) {
        parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
        invokingState = -1;
    }
    antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = JavapParser.RULE_methodArguments;
    return this;
}
MethodArgumentsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MethodArgumentsContext.prototype.constructor = MethodArgumentsContext;
MethodArgumentsContext.prototype.typeList = function () {
    return this.getTypedRuleContext(TypeListContext, 0);
};
MethodArgumentsContext.prototype.varargs = function () {
    return this.getTypedRuleContext(VarargsContext, 0);
};
MethodArgumentsContext.prototype.enterRule = function (listener) {
    if (listener instanceof JavapListener) {
        listener.enterMethodArguments(this);
    }
};
MethodArgumentsContext.prototype.exitRule = function (listener) {
    if (listener instanceof JavapListener) {
        listener.exitMethodArguments(this);
    }
};
MethodArgumentsContext.prototype.accept = function (visitor) {
    if (visitor instanceof JavapVisitor) {
        return visitor.visitMethodArguments(this);
    }
    else {
        return visitor.visitChildren(this);
    }
};
JavapParser.MethodArgumentsContext = MethodArgumentsContext;
JavapParser.prototype.methodArguments = function () {
    var localctx = new MethodArgumentsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 44, JavapParser.RULE_methodArguments);
    var _la = 0; // Token type
    try {
        this.state = 252;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input, 28, this._ctx);
        switch (la_) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                this.state = 245;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === JavapParser.Identifier) {
                    this.state = 244;
                    this.typeList();
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                this.state = 247;
                this.typeList();
                this.state = 248;
                _la = this._input.LA(1);
                if (!(_la === JavapParser.T__11 || _la === JavapParser.T__12)) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 249;
                this.varargs();
                break;
            case 3:
                this.enterOuterAlt(localctx, 3);
                this.state = 251;
                this.varargs();
                break;
        }
    }
    catch (re) {
        if (re instanceof antlr4.error.RecognitionException) {
            localctx.exception = re;
            this._errHandler.reportError(this, re);
            this._errHandler.recover(this, re);
        }
        else {
            throw re;
        }
    }
    finally {
        this.exitRule();
    }
    return localctx;
};
exports.JavapParser = JavapParser;
