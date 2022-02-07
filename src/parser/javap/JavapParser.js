// Generated from Javap.g4 by ANTLR 4.9.3
// jshint ignore: start
import antlr4 from 'antlr4';
import JavapListener from './JavapListener.js';
import JavapVisitor from './JavapVisitor.js';


const serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786",
    "\u5964\u0003\'\u0128\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004",
    "\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007",
    "\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f",
    "\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010",
    "\u0004\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013\u0004\u0014",
    "\t\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017\t\u0017",
    "\u0004\u0018\t\u0018\u0004\u0019\t\u0019\u0004\u001a\t\u001a\u0003\u0002",
    "\u0003\u0002\u0007\u00027\n\u0002\f\u0002\u000e\u0002:\u000b\u0002\u0003",
    "\u0002\u0005\u0002=\n\u0002\u0003\u0003\u0003\u0003\u0003\u0003\u0007",
    "\u0003B\n\u0003\f\u0003\u000e\u0003E\u000b\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0004\u0003\u0004\u0005\u0004K\n\u0004\u0003\u0005\u0007\u0005",
    "N\n\u0005\f\u0005\u000e\u0005Q\u000b\u0005\u0003\u0005\u0003\u0005\u0003",
    "\u0005\u0003\u0005\u0005\u0005W\n\u0005\u0003\u0005\u0003\u0005\u0005",
    "\u0005[\n\u0005\u0003\u0005\u0003\u0005\u0003\u0006\u0007\u0006`\n\u0006",
    "\f\u0006\u000e\u0006c\u000b\u0006\u0003\u0006\u0003\u0006\u0003\u0006",
    "\u0003\u0006\u0005\u0006i\n\u0006\u0003\u0006\u0003\u0006\u0003\u0007",
    "\u0003\u0007\u0003\b\u0003\b\u0003\t\u0003\t\u0003\t\u0007\tt\n\t\f",
    "\t\u000e\tw\u000b\t\u0003\n\u0003\n\u0003\n\u0005\n|\n\n\u0003\n\u0003",
    "\n\u0005\n\u0080\n\n\u0003\n\u0005\n\u0083\n\n\u0003\u000b\u0003\u000b",
    "\u0003\u000b\u0005\u000b\u0088\n\u000b\u0003\f\u0003\f\u0003\f\u0007",
    "\f\u008d\n\f\f\f\u000e\f\u0090\u000b\f\u0003\r\u0006\r\u0093\n\r\r\r",
    "\u000e\r\u0094\u0003\r\u0003\r\u0003\r\u0003\r\u0007\r\u009b\n\r\f\r",
    "\u000e\r\u009e\u000b\r\u0003\r\u0003\r\u0007\r\u00a2\n\r\f\r\u000e\r",
    "\u00a5\u000b\r\u0005\r\u00a7\n\r\u0003\u000e\u0003\u000e\u0003\u000e",
    "\u0003\u000e\u0003\u000e\u0003\u000e\u0007\u000e\u00af\n\u000e\f\u000e",
    "\u000e\u000e\u00b2\u000b\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003",
    "\u000e\u0003\u000e\u0007\u000e\u00b9\n\u000e\f\u000e\u000e\u000e\u00bc",
    "\u000b\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0005\u000e",
    "\u00c2\n\u000e\u0003\u000f\u0003\u000f\u0007\u000f\u00c6\n\u000f\f\u000f",
    "\u000e\u000f\u00c9\u000b\u000f\u0003\u000f\u0003\u000f\u0003\u0010\u0003",
    "\u0010\u0007\u0010\u00cf\n\u0010\f\u0010\u000e\u0010\u00d2\u000b\u0010",
    "\u0003\u0010\u0003\u0010\u0003\u0011\u0003\u0011\u0003\u0012\u0003\u0012",
    "\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0005\u0012\u00de\n",
    "\u0012\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0005",
    "\u0013\u00e5\n\u0013\u0003\u0014\u0007\u0014\u00e8\n\u0014\f\u0014\u000e",
    "\u0014\u00eb\u000b\u0014\u0003\u0014\u0005\u0014\u00ee\n\u0014\u0003",
    "\u0014\u0003\u0014\u0003\u0014\u0003\u0014\u0003\u0014\u0005\u0014\u00f5",
    "\n\u0014\u0003\u0014\u0003\u0014\u0003\u0015\u0007\u0015\u00fa\n\u0015",
    "\f\u0015\u000e\u0015\u00fd\u000b\u0015\u0003\u0015\u0003\u0015\u0003",
    "\u0015\u0003\u0015\u0003\u0016\u0007\u0016\u0104\n\u0016\f\u0016\u000e",
    "\u0016\u0107\u000b\u0016\u0003\u0016\u0005\u0016\u010a\n\u0016\u0003",
    "\u0016\u0003\u0016\u0003\u0016\u0003\u0016\u0003\u0016\u0003\u0016\u0005",
    "\u0016\u0112\n\u0016\u0003\u0016\u0003\u0016\u0003\u0017\u0003\u0017",
    "\u0003\u0017\u0003\u0018\u0003\u0018\u0003\u0018\u0003\u0019\u0005\u0019",
    "\u011d\n\u0019\u0003\u0019\u0003\u0019\u0003\u0019\u0003\u0019\u0003",
    "\u0019\u0005\u0019\u0124\n\u0019\u0003\u001a\u0003\u001a\u0003\u001a",
    "\u0003C\u0002\u001b\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014",
    "\u0016\u0018\u001a\u001c\u001e \"$&(*,.02\u0002\u0006\u0003\u0002\t",
    "\r\u0003\u0002\t\u000b\u0003\u0002\u000e\u000f\u0004\u0002\t\r\u0018",
    "\u001e\u0002\u0139\u00028\u0003\u0002\u0002\u0002\u0004>\u0003\u0002",
    "\u0002\u0002\u0006J\u0003\u0002\u0002\u0002\bO\u0003\u0002\u0002\u0002",
    "\na\u0003\u0002\u0002\u0002\fl\u0003\u0002\u0002\u0002\u000en\u0003",
    "\u0002\u0002\u0002\u0010p\u0003\u0002\u0002\u0002\u0012{\u0003\u0002",
    "\u0002\u0002\u0014\u0084\u0003\u0002\u0002\u0002\u0016\u0089\u0003\u0002",
    "\u0002\u0002\u0018\u00a6\u0003\u0002\u0002\u0002\u001a\u00c1\u0003\u0002",
    "\u0002\u0002\u001c\u00c3\u0003\u0002\u0002\u0002\u001e\u00cc\u0003\u0002",
    "\u0002\u0002 \u00d5\u0003\u0002\u0002\u0002\"\u00dd\u0003\u0002\u0002",
    "\u0002$\u00e4\u0003\u0002\u0002\u0002&\u00e9\u0003\u0002\u0002\u0002",
    "(\u00fb\u0003\u0002\u0002\u0002*\u0105\u0003\u0002\u0002\u0002,\u0115",
    "\u0003\u0002\u0002\u0002.\u0118\u0003\u0002\u0002\u00020\u0123\u0003",
    "\u0002\u0002\u00022\u0125\u0003\u0002\u0002\u000247\u0005\u0004\u0003",
    "\u000257\u0005\u0006\u0004\u000264\u0003\u0002\u0002\u000265\u0003\u0002",
    "\u0002\u00027:\u0003\u0002\u0002\u000286\u0003\u0002\u0002\u000289\u0003",
    "\u0002\u0002\u00029<\u0003\u0002\u0002\u0002:8\u0003\u0002\u0002\u0002",
    ";=\u0007\u0002\u0002\u0003<;\u0003\u0002\u0002\u0002<=\u0003\u0002\u0002",
    "\u0002=\u0003\u0003\u0002\u0002\u0002>?\u0007\u0003\u0002\u0002?C\u0007",
    "\u0004\u0002\u0002@B\u000b\u0002\u0002\u0002A@\u0003\u0002\u0002\u0002",
    "BE\u0003\u0002\u0002\u0002CD\u0003\u0002\u0002\u0002CA\u0003\u0002\u0002",
    "\u0002DF\u0003\u0002\u0002\u0002EC\u0003\u0002\u0002\u0002FG\u0007\u0004",
    "\u0002\u0002G\u0005\u0003\u0002\u0002\u0002HK\u0005\b\u0005\u0002IK",
    "\u0005\n\u0006\u0002JH\u0003\u0002\u0002\u0002JI\u0003\u0002\u0002\u0002",
    "K\u0007\u0003\u0002\u0002\u0002LN\u0005\f\u0007\u0002ML\u0003\u0002",
    "\u0002\u0002NQ\u0003\u0002\u0002\u0002OM\u0003\u0002\u0002\u0002OP\u0003",
    "\u0002\u0002\u0002PR\u0003\u0002\u0002\u0002QO\u0003\u0002\u0002\u0002",
    "RS\u0007\u0005\u0002\u0002SV\u0005\u0012\n\u0002TU\u0007\u0006\u0002",
    "\u0002UW\u0005\u0012\n\u0002VT\u0003\u0002\u0002\u0002VW\u0003\u0002",
    "\u0002\u0002WZ\u0003\u0002\u0002\u0002XY\u0007\u0007\u0002\u0002Y[\u0005",
    "\u0010\t\u0002ZX\u0003\u0002\u0002\u0002Z[\u0003\u0002\u0002\u0002[",
    "\\\u0003\u0002\u0002\u0002\\]\u0005\u001c\u000f\u0002]\t\u0003\u0002",
    "\u0002\u0002^`\u0005\u000e\b\u0002_^\u0003\u0002\u0002\u0002`c\u0003",
    "\u0002\u0002\u0002a_\u0003\u0002\u0002\u0002ab\u0003\u0002\u0002\u0002",
    "bd\u0003\u0002\u0002\u0002ca\u0003\u0002\u0002\u0002de\u0007\b\u0002",
    "\u0002eh\u0005\u0012\n\u0002fg\u0007\u0006\u0002\u0002gi\u0005\u0010",
    "\t\u0002hf\u0003\u0002\u0002\u0002hi\u0003\u0002\u0002\u0002ij\u0003",
    "\u0002\u0002\u0002jk\u0005\u001e\u0010\u0002k\u000b\u0003\u0002\u0002",
    "\u0002lm\t\u0002\u0002\u0002m\r\u0003\u0002\u0002\u0002no\t\u0003\u0002",
    "\u0002o\u000f\u0003\u0002\u0002\u0002pu\u0005\u0012\n\u0002qr\t\u0004",
    "\u0002\u0002rt\u0005\u0012\n\u0002sq\u0003\u0002\u0002\u0002tw\u0003",
    "\u0002\u0002\u0002us\u0003\u0002\u0002\u0002uv\u0003\u0002\u0002\u0002",
    "v\u0011\u0003\u0002\u0002\u0002wu\u0003\u0002\u0002\u0002xy\u0005\u0016",
    "\f\u0002yz\u0007\u0010\u0002\u0002z|\u0003\u0002\u0002\u0002{x\u0003",
    "\u0002\u0002\u0002{|\u0003\u0002\u0002\u0002|}\u0003\u0002\u0002\u0002",
    "}\u007f\u0007&\u0002\u0002~\u0080\u0005\u0018\r\u0002\u007f~\u0003\u0002",
    "\u0002\u0002\u007f\u0080\u0003\u0002\u0002\u0002\u0080\u0082\u0003\u0002",
    "\u0002\u0002\u0081\u0083\u0005\u0014\u000b\u0002\u0082\u0081\u0003\u0002",
    "\u0002\u0002\u0082\u0083\u0003\u0002\u0002\u0002\u0083\u0013\u0003\u0002",
    "\u0002\u0002\u0084\u0085\u0007\u0010\u0002\u0002\u0085\u0087\u0007&",
    "\u0002\u0002\u0086\u0088\u0005\u0018\r\u0002\u0087\u0086\u0003\u0002",
    "\u0002\u0002\u0087\u0088\u0003\u0002\u0002\u0002\u0088\u0015\u0003\u0002",
    "\u0002\u0002\u0089\u008e\u0007&\u0002\u0002\u008a\u008b\u0007\u0010",
    "\u0002\u0002\u008b\u008d\u0007&\u0002\u0002\u008c\u008a\u0003\u0002",
    "\u0002\u0002\u008d\u0090\u0003\u0002\u0002\u0002\u008e\u008c\u0003\u0002",
    "\u0002\u0002\u008e\u008f\u0003\u0002\u0002\u0002\u008f\u0017\u0003\u0002",
    "\u0002\u0002\u0090\u008e\u0003\u0002\u0002\u0002\u0091\u0093\u00052",
    "\u001a\u0002\u0092\u0091\u0003\u0002\u0002\u0002\u0093\u0094\u0003\u0002",
    "\u0002\u0002\u0094\u0092\u0003\u0002\u0002\u0002\u0094\u0095\u0003\u0002",
    "\u0002\u0002\u0095\u00a7\u0003\u0002\u0002\u0002\u0096\u0097\u0007\u0011",
    "\u0002\u0002\u0097\u009c\u0005\u001a\u000e\u0002\u0098\u0099\t\u0004",
    "\u0002\u0002\u0099\u009b\u0005\u001a\u000e\u0002\u009a\u0098\u0003\u0002",
    "\u0002\u0002\u009b\u009e\u0003\u0002\u0002\u0002\u009c\u009a\u0003\u0002",
    "\u0002\u0002\u009c\u009d\u0003\u0002\u0002\u0002\u009d\u009f\u0003\u0002",
    "\u0002\u0002\u009e\u009c\u0003\u0002\u0002\u0002\u009f\u00a3\u0007\u0012",
    "\u0002\u0002\u00a0\u00a2\u00052\u001a\u0002\u00a1\u00a0\u0003\u0002",
    "\u0002\u0002\u00a2\u00a5\u0003\u0002\u0002\u0002\u00a3\u00a1\u0003\u0002",
    "\u0002\u0002\u00a3\u00a4\u0003\u0002\u0002\u0002\u00a4\u00a7\u0003\u0002",
    "\u0002\u0002\u00a5\u00a3\u0003\u0002\u0002\u0002\u00a6\u0092\u0003\u0002",
    "\u0002\u0002\u00a6\u0096\u0003\u0002\u0002\u0002\u00a7\u0019\u0003\u0002",
    "\u0002\u0002\u00a8\u00c2\u0005\u0012\n\u0002\u00a9\u00aa\u0007&\u0002",
    "\u0002\u00aa\u00ab\u0007\u0006\u0002\u0002\u00ab\u00b0\u0005\u0012\n",
    "\u0002\u00ac\u00ad\u0007\u0013\u0002\u0002\u00ad\u00af\u0005\u0012\n",
    "\u0002\u00ae\u00ac\u0003\u0002\u0002\u0002\u00af\u00b2\u0003\u0002\u0002",
    "\u0002\u00b0\u00ae\u0003\u0002\u0002\u0002\u00b0\u00b1\u0003\u0002\u0002",
    "\u0002\u00b1\u00c2\u0003\u0002\u0002\u0002\u00b2\u00b0\u0003\u0002\u0002",
    "\u0002\u00b3\u00b4\u0007\u0014\u0002\u0002\u00b4\u00b5\u0007\u0006\u0002",
    "\u0002\u00b5\u00ba\u0005\u0012\n\u0002\u00b6\u00b7\u0007\u0013\u0002",
    "\u0002\u00b7\u00b9\u0005\u0012\n\u0002\u00b8\u00b6\u0003\u0002\u0002",
    "\u0002\u00b9\u00bc\u0003\u0002\u0002\u0002\u00ba\u00b8\u0003\u0002\u0002",
    "\u0002\u00ba\u00bb\u0003\u0002\u0002\u0002\u00bb\u00c2\u0003\u0002\u0002",
    "\u0002\u00bc\u00ba\u0003\u0002\u0002\u0002\u00bd\u00be\u0007\u0014\u0002",
    "\u0002\u00be\u00bf\u0007\u0015\u0002\u0002\u00bf\u00c2\u0005\u0012\n",
    "\u0002\u00c0\u00c2\u0007\u0014\u0002\u0002\u00c1\u00a8\u0003\u0002\u0002",
    "\u0002\u00c1\u00a9\u0003\u0002\u0002\u0002\u00c1\u00b3\u0003\u0002\u0002",
    "\u0002\u00c1\u00bd\u0003\u0002\u0002\u0002\u00c1\u00c0\u0003\u0002\u0002",
    "\u0002\u00c2\u001b\u0003\u0002\u0002\u0002\u00c3\u00c7\u0007\u0016\u0002",
    "\u0002\u00c4\u00c6\u0005\"\u0012\u0002\u00c5\u00c4\u0003\u0002\u0002",
    "\u0002\u00c6\u00c9\u0003\u0002\u0002\u0002\u00c7\u00c5\u0003\u0002\u0002",
    "\u0002\u00c7\u00c8\u0003\u0002\u0002\u0002\u00c8\u00ca\u0003\u0002\u0002",
    "\u0002\u00c9\u00c7\u0003\u0002\u0002\u0002\u00ca\u00cb\u0007\u0017\u0002",
    "\u0002\u00cb\u001d\u0003\u0002\u0002\u0002\u00cc\u00d0\u0007\u0016\u0002",
    "\u0002\u00cd\u00cf\u0005$\u0013\u0002\u00ce\u00cd\u0003\u0002\u0002",
    "\u0002\u00cf\u00d2\u0003\u0002\u0002\u0002\u00d0\u00ce\u0003\u0002\u0002",
    "\u0002\u00d0\u00d1\u0003\u0002\u0002\u0002\u00d1\u00d3\u0003\u0002\u0002",
    "\u0002\u00d2\u00d0\u0003\u0002\u0002\u0002\u00d3\u00d4\u0007\u0017\u0002",
    "\u0002\u00d4\u001f\u0003\u0002\u0002\u0002\u00d5\u00d6\t\u0005\u0002",
    "\u0002\u00d6!\u0003\u0002\u0002\u0002\u00d7\u00de\u0005&\u0014\u0002",
    "\u00d8\u00de\u0005(\u0015\u0002\u00d9\u00de\u0005*\u0016\u0002\u00da",
    "\u00db\u0007\u001a\u0002\u0002\u00db\u00dc\u0007\u001f\u0002\u0002\u00dc",
    "\u00de\u0007 \u0002\u0002\u00dd\u00d7\u0003\u0002\u0002\u0002\u00dd",
    "\u00d8\u0003\u0002\u0002\u0002\u00dd\u00d9\u0003\u0002\u0002\u0002\u00dd",
    "\u00da\u0003\u0002\u0002\u0002\u00de#\u0003\u0002\u0002\u0002\u00df",
    "\u00e5\u0005(\u0015\u0002\u00e0\u00e5\u0005*\u0016\u0002\u00e1\u00e2",
    "\u0007\u001a\u0002\u0002\u00e2\u00e3\u0007\u001f\u0002\u0002\u00e3\u00e5",
    "\u0007 \u0002\u0002\u00e4\u00df\u0003\u0002\u0002\u0002\u00e4\u00e0",
    "\u0003\u0002\u0002\u0002\u00e4\u00e1\u0003\u0002\u0002\u0002\u00e5%",
    "\u0003\u0002\u0002\u0002\u00e6\u00e8\u0005 \u0011\u0002\u00e7\u00e6",
    "\u0003\u0002\u0002\u0002\u00e8\u00eb\u0003\u0002\u0002\u0002\u00e9\u00e7",
    "\u0003\u0002\u0002\u0002\u00e9\u00ea\u0003\u0002\u0002\u0002\u00ea\u00ed",
    "\u0003\u0002\u0002\u0002\u00eb\u00e9\u0003\u0002\u0002\u0002\u00ec\u00ee",
    "\u0005\u0018\r\u0002\u00ed\u00ec\u0003\u0002\u0002\u0002\u00ed\u00ee",
    "\u0003\u0002\u0002\u0002\u00ee\u00ef\u0003\u0002\u0002\u0002\u00ef\u00f0",
    "\u0005\u0012\n\u0002\u00f0\u00f1\u0007!\u0002\u0002\u00f1\u00f2\u0005",
    "0\u0019\u0002\u00f2\u00f4\u0007\"\u0002\u0002\u00f3\u00f5\u0005,\u0017",
    "\u0002\u00f4\u00f3\u0003\u0002\u0002\u0002\u00f4\u00f5\u0003\u0002\u0002",
    "\u0002\u00f5\u00f6\u0003\u0002\u0002\u0002\u00f6\u00f7\u0007 \u0002",
    "\u0002\u00f7\'\u0003\u0002\u0002\u0002\u00f8\u00fa\u0005 \u0011\u0002",
    "\u00f9\u00f8\u0003\u0002\u0002\u0002\u00fa\u00fd\u0003\u0002\u0002\u0002",
    "\u00fb\u00f9\u0003\u0002\u0002\u0002\u00fb\u00fc\u0003\u0002\u0002\u0002",
    "\u00fc\u00fe\u0003\u0002\u0002\u0002\u00fd\u00fb\u0003\u0002\u0002\u0002",
    "\u00fe\u00ff\u0005\u0012\n\u0002\u00ff\u0100\u0007&\u0002\u0002\u0100",
    "\u0101\u0007 \u0002\u0002\u0101)\u0003\u0002\u0002\u0002\u0102\u0104",
    "\u0005 \u0011\u0002\u0103\u0102\u0003\u0002\u0002\u0002\u0104\u0107",
    "\u0003\u0002\u0002\u0002\u0105\u0103\u0003\u0002\u0002\u0002\u0105\u0106",
    "\u0003\u0002\u0002\u0002\u0106\u0109\u0003\u0002\u0002\u0002\u0107\u0105",
    "\u0003\u0002\u0002\u0002\u0108\u010a\u0005\u0018\r\u0002\u0109\u0108",
    "\u0003\u0002\u0002\u0002\u0109\u010a\u0003\u0002\u0002\u0002\u010a\u010b",
    "\u0003\u0002\u0002\u0002\u010b\u010c\u0005\u0012\n\u0002\u010c\u010d",
    "\u0007&\u0002\u0002\u010d\u010e\u0007!\u0002\u0002\u010e\u010f\u0005",
    "0\u0019\u0002\u010f\u0111\u0007\"\u0002\u0002\u0110\u0112\u0005,\u0017",
    "\u0002\u0111\u0110\u0003\u0002\u0002\u0002\u0111\u0112\u0003\u0002\u0002",
    "\u0002\u0112\u0113\u0003\u0002\u0002\u0002\u0113\u0114\u0007 \u0002",
    "\u0002\u0114+\u0003\u0002\u0002\u0002\u0115\u0116\u0007#\u0002\u0002",
    "\u0116\u0117\u0005\u0010\t\u0002\u0117-\u0003\u0002\u0002\u0002\u0118",
    "\u0119\u0005\u0012\n\u0002\u0119\u011a\u0007$\u0002\u0002\u011a/\u0003",
    "\u0002\u0002\u0002\u011b\u011d\u0005\u0010\t\u0002\u011c\u011b\u0003",
    "\u0002\u0002\u0002\u011c\u011d\u0003\u0002\u0002\u0002\u011d\u0124\u0003",
    "\u0002\u0002\u0002\u011e\u011f\u0005\u0010\t\u0002\u011f\u0120\t\u0004",
    "\u0002\u0002\u0120\u0121\u0005.\u0018\u0002\u0121\u0124\u0003\u0002",
    "\u0002\u0002\u0122\u0124\u0005.\u0018\u0002\u0123\u011c\u0003\u0002",
    "\u0002\u0002\u0123\u011e\u0003\u0002\u0002\u0002\u0123\u0122\u0003\u0002",
    "\u0002\u0002\u01241\u0003\u0002\u0002\u0002\u0125\u0126\u0007%\u0002",
    "\u0002\u01263\u0003\u0002\u0002\u0002&68<CJOVZahu{\u007f\u0082\u0087",
    "\u008e\u0094\u009c\u00a3\u00a6\u00b0\u00ba\u00c1\u00c7\u00d0\u00dd\u00e4",
    "\u00e9\u00ed\u00f4\u00fb\u0105\u0109\u0111\u011c\u0123"].join("");


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class JavapParser extends antlr4.Parser {

    static grammarFileName = "Javap.g4";
    static literalNames = [ null, "'Compiled from'", "'\"'", "'class'", 
                            "'extends'", "'implements'", "'interface'", 
                            "'public'", "'private'", "'protected'", "'abstract'", 
                            "'final'", "','", "', '", "'.'", "'<'", "'>'", 
                            "'&'", "'?'", "'super'", "'{'", "'}'", "'default'", 
                            "'native'", "'static'", "'strictfp'", "'synchronized'", 
                            "'transient'", "'volatile'", "'{}'", "';'", 
                            "'('", "')'", "'throws'", "'...'", "'[]'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, "Identifier", "WS" ];
    static ruleNames = [ "compilationUnit", "sourceDeclaration", "classOrInterface", 
                         "classDeclaration", "interfaceDeclaration", "classModifier", 
                         "interfaceModifier", "typeList", "type", "subType", 
                         "packageName", "typeArguments", "typeArgument", 
                         "classBody", "interfaceBody", "modifier", "classMember", 
                         "interfaceMember", "constructorDeclaration", "fieldDeclaration", 
                         "methodDeclaration", "throwsException", "varargs", 
                         "methodArguments", "arrayBrackets" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = JavapParser.ruleNames;
        this.literalNames = JavapParser.literalNames;
        this.symbolicNames = JavapParser.symbolicNames;
    }

    get atn() {
        return atn;
    }



	compilationUnit() {
	    let localctx = new CompilationUnitContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, JavapParser.RULE_compilationUnit);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 54;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << JavapParser.T__0) | (1 << JavapParser.T__2) | (1 << JavapParser.T__5) | (1 << JavapParser.T__6) | (1 << JavapParser.T__7) | (1 << JavapParser.T__8) | (1 << JavapParser.T__9) | (1 << JavapParser.T__10))) !== 0)) {
	            this.state = 52;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case JavapParser.T__0:
	                this.state = 50;
	                this.sourceDeclaration();
	                break;
	            case JavapParser.T__2:
	            case JavapParser.T__5:
	            case JavapParser.T__6:
	            case JavapParser.T__7:
	            case JavapParser.T__8:
	            case JavapParser.T__9:
	            case JavapParser.T__10:
	                this.state = 51;
	                this.classOrInterface();
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            this.state = 56;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 58;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
	        if(la_===1) {
	            this.state = 57;
	            this.match(JavapParser.EOF);

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	sourceDeclaration() {
	    let localctx = new SourceDeclarationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, JavapParser.RULE_sourceDeclaration);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 60;
	        this.match(JavapParser.T__0);
	        this.state = 61;
	        this.match(JavapParser.T__1);
	        this.state = 65;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,3,this._ctx)
	        while(_alt!=1 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1+1) {
	                this.state = 62;
	                this.matchWildcard(); 
	            }
	            this.state = 67;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,3,this._ctx);
	        }

	        this.state = 68;
	        this.match(JavapParser.T__1);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	classOrInterface() {
	    let localctx = new ClassOrInterfaceContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, JavapParser.RULE_classOrInterface);
	    try {
	        this.state = 72;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,4,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 70;
	            this.classDeclaration();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 71;
	            this.interfaceDeclaration();
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	classDeclaration() {
	    let localctx = new ClassDeclarationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, JavapParser.RULE_classDeclaration);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 77;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << JavapParser.T__6) | (1 << JavapParser.T__7) | (1 << JavapParser.T__8) | (1 << JavapParser.T__9) | (1 << JavapParser.T__10))) !== 0)) {
	            this.state = 74;
	            this.classModifier();
	            this.state = 79;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 80;
	        this.match(JavapParser.T__2);
	        this.state = 81;
	        this.type();
	        this.state = 84;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===JavapParser.T__3) {
	            this.state = 82;
	            this.match(JavapParser.T__3);
	            this.state = 83;
	            this.type();
	        }

	        this.state = 88;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===JavapParser.T__4) {
	            this.state = 86;
	            this.match(JavapParser.T__4);
	            this.state = 87;
	            this.typeList();
	        }

	        this.state = 90;
	        this.classBody();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	interfaceDeclaration() {
	    let localctx = new InterfaceDeclarationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, JavapParser.RULE_interfaceDeclaration);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 95;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << JavapParser.T__6) | (1 << JavapParser.T__7) | (1 << JavapParser.T__8))) !== 0)) {
	            this.state = 92;
	            this.interfaceModifier();
	            this.state = 97;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 98;
	        this.match(JavapParser.T__5);
	        this.state = 99;
	        this.type();
	        this.state = 102;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===JavapParser.T__3) {
	            this.state = 100;
	            this.match(JavapParser.T__3);
	            this.state = 101;
	            this.typeList();
	        }

	        this.state = 104;
	        this.interfaceBody();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	classModifier() {
	    let localctx = new ClassModifierContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, JavapParser.RULE_classModifier);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 106;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << JavapParser.T__6) | (1 << JavapParser.T__7) | (1 << JavapParser.T__8) | (1 << JavapParser.T__9) | (1 << JavapParser.T__10))) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	interfaceModifier() {
	    let localctx = new InterfaceModifierContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, JavapParser.RULE_interfaceModifier);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 108;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << JavapParser.T__6) | (1 << JavapParser.T__7) | (1 << JavapParser.T__8))) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	typeList() {
	    let localctx = new TypeListContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, JavapParser.RULE_typeList);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 110;
	        this.type();
	        this.state = 115;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,10,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 111;
	                _la = this._input.LA(1);
	                if(!(_la===JavapParser.T__11 || _la===JavapParser.T__12)) {
	                this._errHandler.recoverInline(this);
	                }
	                else {
	                	this._errHandler.reportMatch(this);
	                    this.consume();
	                }
	                this.state = 112;
	                this.type(); 
	            }
	            this.state = 117;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,10,this._ctx);
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	type() {
	    let localctx = new TypeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, JavapParser.RULE_type);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 121;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,11,this._ctx);
	        if(la_===1) {
	            this.state = 118;
	            this.packageName();
	            this.state = 119;
	            this.match(JavapParser.T__13);

	        }
	        this.state = 123;
	        this.match(JavapParser.Identifier);
	        this.state = 125;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===JavapParser.T__14 || _la===JavapParser.T__34) {
	            this.state = 124;
	            this.typeArguments();
	        }

	        this.state = 128;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===JavapParser.T__13) {
	            this.state = 127;
	            this.subType();
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	subType() {
	    let localctx = new SubTypeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, JavapParser.RULE_subType);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 130;
	        this.match(JavapParser.T__13);
	        this.state = 131;
	        this.match(JavapParser.Identifier);
	        this.state = 133;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===JavapParser.T__14 || _la===JavapParser.T__34) {
	            this.state = 132;
	            this.typeArguments();
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	packageName() {
	    let localctx = new PackageNameContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, JavapParser.RULE_packageName);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 135;
	        this.match(JavapParser.Identifier);
	        this.state = 140;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,15,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 136;
	                this.match(JavapParser.T__13);
	                this.state = 137;
	                this.match(JavapParser.Identifier); 
	            }
	            this.state = 142;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,15,this._ctx);
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	typeArguments() {
	    let localctx = new TypeArgumentsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, JavapParser.RULE_typeArguments);
	    var _la = 0; // Token type
	    try {
	        this.state = 164;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case JavapParser.T__34:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 144; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            do {
	                this.state = 143;
	                this.arrayBrackets();
	                this.state = 146; 
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            } while(_la===JavapParser.T__34);
	            break;
	        case JavapParser.T__14:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 148;
	            this.match(JavapParser.T__14);
	            this.state = 149;
	            this.typeArgument();
	            this.state = 154;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===JavapParser.T__11 || _la===JavapParser.T__12) {
	                this.state = 150;
	                _la = this._input.LA(1);
	                if(!(_la===JavapParser.T__11 || _la===JavapParser.T__12)) {
	                this._errHandler.recoverInline(this);
	                }
	                else {
	                	this._errHandler.reportMatch(this);
	                    this.consume();
	                }
	                this.state = 151;
	                this.typeArgument();
	                this.state = 156;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 157;
	            this.match(JavapParser.T__15);
	            this.state = 161;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===JavapParser.T__34) {
	                this.state = 158;
	                this.arrayBrackets();
	                this.state = 163;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	typeArgument() {
	    let localctx = new TypeArgumentContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, JavapParser.RULE_typeArgument);
	    var _la = 0; // Token type
	    try {
	        this.state = 191;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,22,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 166;
	            this.type();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 167;
	            this.match(JavapParser.Identifier);
	            this.state = 168;
	            this.match(JavapParser.T__3);
	            this.state = 169;
	            this.type();
	            this.state = 174;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===JavapParser.T__16) {
	                this.state = 170;
	                this.match(JavapParser.T__16);
	                this.state = 171;
	                this.type();
	                this.state = 176;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 177;
	            this.match(JavapParser.T__17);
	            this.state = 178;
	            this.match(JavapParser.T__3);
	            this.state = 179;
	            this.type();
	            this.state = 184;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===JavapParser.T__16) {
	                this.state = 180;
	                this.match(JavapParser.T__16);
	                this.state = 181;
	                this.type();
	                this.state = 186;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 187;
	            this.match(JavapParser.T__17);
	            this.state = 188;
	            this.match(JavapParser.T__18);
	            this.state = 189;
	            this.type();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 190;
	            this.match(JavapParser.T__17);
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	classBody() {
	    let localctx = new ClassBodyContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, JavapParser.RULE_classBody);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 193;
	        this.match(JavapParser.T__19);
	        this.state = 197;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(((((_la - 7)) & ~0x1f) == 0 && ((1 << (_la - 7)) & ((1 << (JavapParser.T__6 - 7)) | (1 << (JavapParser.T__7 - 7)) | (1 << (JavapParser.T__8 - 7)) | (1 << (JavapParser.T__9 - 7)) | (1 << (JavapParser.T__10 - 7)) | (1 << (JavapParser.T__14 - 7)) | (1 << (JavapParser.T__21 - 7)) | (1 << (JavapParser.T__22 - 7)) | (1 << (JavapParser.T__23 - 7)) | (1 << (JavapParser.T__24 - 7)) | (1 << (JavapParser.T__25 - 7)) | (1 << (JavapParser.T__26 - 7)) | (1 << (JavapParser.T__27 - 7)) | (1 << (JavapParser.T__34 - 7)) | (1 << (JavapParser.Identifier - 7)))) !== 0)) {
	            this.state = 194;
	            this.classMember();
	            this.state = 199;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 200;
	        this.match(JavapParser.T__20);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	interfaceBody() {
	    let localctx = new InterfaceBodyContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, JavapParser.RULE_interfaceBody);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 202;
	        this.match(JavapParser.T__19);
	        this.state = 206;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(((((_la - 7)) & ~0x1f) == 0 && ((1 << (_la - 7)) & ((1 << (JavapParser.T__6 - 7)) | (1 << (JavapParser.T__7 - 7)) | (1 << (JavapParser.T__8 - 7)) | (1 << (JavapParser.T__9 - 7)) | (1 << (JavapParser.T__10 - 7)) | (1 << (JavapParser.T__14 - 7)) | (1 << (JavapParser.T__21 - 7)) | (1 << (JavapParser.T__22 - 7)) | (1 << (JavapParser.T__23 - 7)) | (1 << (JavapParser.T__24 - 7)) | (1 << (JavapParser.T__25 - 7)) | (1 << (JavapParser.T__26 - 7)) | (1 << (JavapParser.T__27 - 7)) | (1 << (JavapParser.T__34 - 7)) | (1 << (JavapParser.Identifier - 7)))) !== 0)) {
	            this.state = 203;
	            this.interfaceMember();
	            this.state = 208;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 209;
	        this.match(JavapParser.T__20);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	modifier() {
	    let localctx = new ModifierContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, JavapParser.RULE_modifier);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 211;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << JavapParser.T__6) | (1 << JavapParser.T__7) | (1 << JavapParser.T__8) | (1 << JavapParser.T__9) | (1 << JavapParser.T__10) | (1 << JavapParser.T__21) | (1 << JavapParser.T__22) | (1 << JavapParser.T__23) | (1 << JavapParser.T__24) | (1 << JavapParser.T__25) | (1 << JavapParser.T__26) | (1 << JavapParser.T__27))) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	classMember() {
	    let localctx = new ClassMemberContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 32, JavapParser.RULE_classMember);
	    try {
	        this.state = 219;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,25,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 213;
	            this.constructorDeclaration();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 214;
	            this.fieldDeclaration();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 215;
	            this.methodDeclaration();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 216;
	            this.match(JavapParser.T__23);
	            this.state = 217;
	            this.match(JavapParser.T__28);
	            this.state = 218;
	            this.match(JavapParser.T__29);
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	interfaceMember() {
	    let localctx = new InterfaceMemberContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 34, JavapParser.RULE_interfaceMember);
	    try {
	        this.state = 226;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,26,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 221;
	            this.fieldDeclaration();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 222;
	            this.methodDeclaration();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 223;
	            this.match(JavapParser.T__23);
	            this.state = 224;
	            this.match(JavapParser.T__28);
	            this.state = 225;
	            this.match(JavapParser.T__29);
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	constructorDeclaration() {
	    let localctx = new ConstructorDeclarationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 36, JavapParser.RULE_constructorDeclaration);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 231;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << JavapParser.T__6) | (1 << JavapParser.T__7) | (1 << JavapParser.T__8) | (1 << JavapParser.T__9) | (1 << JavapParser.T__10) | (1 << JavapParser.T__21) | (1 << JavapParser.T__22) | (1 << JavapParser.T__23) | (1 << JavapParser.T__24) | (1 << JavapParser.T__25) | (1 << JavapParser.T__26) | (1 << JavapParser.T__27))) !== 0)) {
	            this.state = 228;
	            this.modifier();
	            this.state = 233;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 235;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===JavapParser.T__14 || _la===JavapParser.T__34) {
	            this.state = 234;
	            this.typeArguments();
	        }

	        this.state = 237;
	        this.type();
	        this.state = 238;
	        this.match(JavapParser.T__30);
	        this.state = 239;
	        this.methodArguments();
	        this.state = 240;
	        this.match(JavapParser.T__31);
	        this.state = 242;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===JavapParser.T__32) {
	            this.state = 241;
	            this.throwsException();
	        }

	        this.state = 244;
	        this.match(JavapParser.T__29);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	fieldDeclaration() {
	    let localctx = new FieldDeclarationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 38, JavapParser.RULE_fieldDeclaration);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 249;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << JavapParser.T__6) | (1 << JavapParser.T__7) | (1 << JavapParser.T__8) | (1 << JavapParser.T__9) | (1 << JavapParser.T__10) | (1 << JavapParser.T__21) | (1 << JavapParser.T__22) | (1 << JavapParser.T__23) | (1 << JavapParser.T__24) | (1 << JavapParser.T__25) | (1 << JavapParser.T__26) | (1 << JavapParser.T__27))) !== 0)) {
	            this.state = 246;
	            this.modifier();
	            this.state = 251;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 252;
	        this.type();
	        this.state = 253;
	        this.match(JavapParser.Identifier);
	        this.state = 254;
	        this.match(JavapParser.T__29);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	methodDeclaration() {
	    let localctx = new MethodDeclarationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 40, JavapParser.RULE_methodDeclaration);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 259;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << JavapParser.T__6) | (1 << JavapParser.T__7) | (1 << JavapParser.T__8) | (1 << JavapParser.T__9) | (1 << JavapParser.T__10) | (1 << JavapParser.T__21) | (1 << JavapParser.T__22) | (1 << JavapParser.T__23) | (1 << JavapParser.T__24) | (1 << JavapParser.T__25) | (1 << JavapParser.T__26) | (1 << JavapParser.T__27))) !== 0)) {
	            this.state = 256;
	            this.modifier();
	            this.state = 261;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 263;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===JavapParser.T__14 || _la===JavapParser.T__34) {
	            this.state = 262;
	            this.typeArguments();
	        }

	        this.state = 265;
	        this.type();
	        this.state = 266;
	        this.match(JavapParser.Identifier);
	        this.state = 267;
	        this.match(JavapParser.T__30);
	        this.state = 268;
	        this.methodArguments();
	        this.state = 269;
	        this.match(JavapParser.T__31);
	        this.state = 271;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===JavapParser.T__32) {
	            this.state = 270;
	            this.throwsException();
	        }

	        this.state = 273;
	        this.match(JavapParser.T__29);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	throwsException() {
	    let localctx = new ThrowsExceptionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 42, JavapParser.RULE_throwsException);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 275;
	        this.match(JavapParser.T__32);
	        this.state = 276;
	        this.typeList();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	varargs() {
	    let localctx = new VarargsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 44, JavapParser.RULE_varargs);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 278;
	        this.type();
	        this.state = 279;
	        this.match(JavapParser.T__33);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	methodArguments() {
	    let localctx = new MethodArgumentsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 46, JavapParser.RULE_methodArguments);
	    var _la = 0; // Token type
	    try {
	        this.state = 289;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,35,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 282;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===JavapParser.Identifier) {
	                this.state = 281;
	                this.typeList();
	            }

	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 284;
	            this.typeList();
	            this.state = 285;
	            _la = this._input.LA(1);
	            if(!(_la===JavapParser.T__11 || _la===JavapParser.T__12)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 286;
	            this.varargs();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 288;
	            this.varargs();
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	arrayBrackets() {
	    let localctx = new ArrayBracketsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 48, JavapParser.RULE_arrayBrackets);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 291;
	        this.match(JavapParser.T__34);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

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
JavapParser.RULE_subType = 9;
JavapParser.RULE_packageName = 10;
JavapParser.RULE_typeArguments = 11;
JavapParser.RULE_typeArgument = 12;
JavapParser.RULE_classBody = 13;
JavapParser.RULE_interfaceBody = 14;
JavapParser.RULE_modifier = 15;
JavapParser.RULE_classMember = 16;
JavapParser.RULE_interfaceMember = 17;
JavapParser.RULE_constructorDeclaration = 18;
JavapParser.RULE_fieldDeclaration = 19;
JavapParser.RULE_methodDeclaration = 20;
JavapParser.RULE_throwsException = 21;
JavapParser.RULE_varargs = 22;
JavapParser.RULE_methodArguments = 23;
JavapParser.RULE_arrayBrackets = 24;

class CompilationUnitContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JavapParser.RULE_compilationUnit;
    }

	sourceDeclaration = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(SourceDeclarationContext);
	    } else {
	        return this.getTypedRuleContext(SourceDeclarationContext,i);
	    }
	};

	classOrInterface = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ClassOrInterfaceContext);
	    } else {
	        return this.getTypedRuleContext(ClassOrInterfaceContext,i);
	    }
	};

	EOF() {
	    return this.getToken(JavapParser.EOF, 0);
	};

	enterRule(listener) {
	    if(listener instanceof JavapListener ) {
	        listener.enterCompilationUnit(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JavapListener ) {
	        listener.exitCompilationUnit(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JavapVisitor ) {
	        return visitor.visitCompilationUnit(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class SourceDeclarationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JavapParser.RULE_sourceDeclaration;
    }


	enterRule(listener) {
	    if(listener instanceof JavapListener ) {
	        listener.enterSourceDeclaration(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JavapListener ) {
	        listener.exitSourceDeclaration(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JavapVisitor ) {
	        return visitor.visitSourceDeclaration(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ClassOrInterfaceContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JavapParser.RULE_classOrInterface;
    }

	classDeclaration() {
	    return this.getTypedRuleContext(ClassDeclarationContext,0);
	};

	interfaceDeclaration() {
	    return this.getTypedRuleContext(InterfaceDeclarationContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof JavapListener ) {
	        listener.enterClassOrInterface(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JavapListener ) {
	        listener.exitClassOrInterface(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JavapVisitor ) {
	        return visitor.visitClassOrInterface(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ClassDeclarationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JavapParser.RULE_classDeclaration;
    }

	type = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(TypeContext);
	    } else {
	        return this.getTypedRuleContext(TypeContext,i);
	    }
	};

	classBody() {
	    return this.getTypedRuleContext(ClassBodyContext,0);
	};

	classModifier = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ClassModifierContext);
	    } else {
	        return this.getTypedRuleContext(ClassModifierContext,i);
	    }
	};

	typeList() {
	    return this.getTypedRuleContext(TypeListContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof JavapListener ) {
	        listener.enterClassDeclaration(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JavapListener ) {
	        listener.exitClassDeclaration(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JavapVisitor ) {
	        return visitor.visitClassDeclaration(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class InterfaceDeclarationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JavapParser.RULE_interfaceDeclaration;
    }

	type() {
	    return this.getTypedRuleContext(TypeContext,0);
	};

	interfaceBody() {
	    return this.getTypedRuleContext(InterfaceBodyContext,0);
	};

	interfaceModifier = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(InterfaceModifierContext);
	    } else {
	        return this.getTypedRuleContext(InterfaceModifierContext,i);
	    }
	};

	typeList() {
	    return this.getTypedRuleContext(TypeListContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof JavapListener ) {
	        listener.enterInterfaceDeclaration(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JavapListener ) {
	        listener.exitInterfaceDeclaration(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JavapVisitor ) {
	        return visitor.visitInterfaceDeclaration(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ClassModifierContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JavapParser.RULE_classModifier;
    }


	enterRule(listener) {
	    if(listener instanceof JavapListener ) {
	        listener.enterClassModifier(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JavapListener ) {
	        listener.exitClassModifier(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JavapVisitor ) {
	        return visitor.visitClassModifier(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class InterfaceModifierContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JavapParser.RULE_interfaceModifier;
    }


	enterRule(listener) {
	    if(listener instanceof JavapListener ) {
	        listener.enterInterfaceModifier(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JavapListener ) {
	        listener.exitInterfaceModifier(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JavapVisitor ) {
	        return visitor.visitInterfaceModifier(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class TypeListContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JavapParser.RULE_typeList;
    }

	type = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(TypeContext);
	    } else {
	        return this.getTypedRuleContext(TypeContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof JavapListener ) {
	        listener.enterTypeList(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JavapListener ) {
	        listener.exitTypeList(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JavapVisitor ) {
	        return visitor.visitTypeList(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class TypeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JavapParser.RULE_type;
    }

	Identifier() {
	    return this.getToken(JavapParser.Identifier, 0);
	};

	packageName() {
	    return this.getTypedRuleContext(PackageNameContext,0);
	};

	typeArguments() {
	    return this.getTypedRuleContext(TypeArgumentsContext,0);
	};

	subType() {
	    return this.getTypedRuleContext(SubTypeContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof JavapListener ) {
	        listener.enterType(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JavapListener ) {
	        listener.exitType(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JavapVisitor ) {
	        return visitor.visitType(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class SubTypeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JavapParser.RULE_subType;
    }

	Identifier() {
	    return this.getToken(JavapParser.Identifier, 0);
	};

	typeArguments() {
	    return this.getTypedRuleContext(TypeArgumentsContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof JavapListener ) {
	        listener.enterSubType(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JavapListener ) {
	        listener.exitSubType(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JavapVisitor ) {
	        return visitor.visitSubType(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class PackageNameContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JavapParser.RULE_packageName;
    }

	Identifier = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(JavapParser.Identifier);
	    } else {
	        return this.getToken(JavapParser.Identifier, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof JavapListener ) {
	        listener.enterPackageName(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JavapListener ) {
	        listener.exitPackageName(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JavapVisitor ) {
	        return visitor.visitPackageName(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class TypeArgumentsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JavapParser.RULE_typeArguments;
    }

	arrayBrackets = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ArrayBracketsContext);
	    } else {
	        return this.getTypedRuleContext(ArrayBracketsContext,i);
	    }
	};

	typeArgument = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(TypeArgumentContext);
	    } else {
	        return this.getTypedRuleContext(TypeArgumentContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof JavapListener ) {
	        listener.enterTypeArguments(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JavapListener ) {
	        listener.exitTypeArguments(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JavapVisitor ) {
	        return visitor.visitTypeArguments(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class TypeArgumentContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JavapParser.RULE_typeArgument;
    }

	type = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(TypeContext);
	    } else {
	        return this.getTypedRuleContext(TypeContext,i);
	    }
	};

	Identifier() {
	    return this.getToken(JavapParser.Identifier, 0);
	};

	enterRule(listener) {
	    if(listener instanceof JavapListener ) {
	        listener.enterTypeArgument(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JavapListener ) {
	        listener.exitTypeArgument(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JavapVisitor ) {
	        return visitor.visitTypeArgument(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ClassBodyContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JavapParser.RULE_classBody;
    }

	classMember = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ClassMemberContext);
	    } else {
	        return this.getTypedRuleContext(ClassMemberContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof JavapListener ) {
	        listener.enterClassBody(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JavapListener ) {
	        listener.exitClassBody(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JavapVisitor ) {
	        return visitor.visitClassBody(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class InterfaceBodyContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JavapParser.RULE_interfaceBody;
    }

	interfaceMember = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(InterfaceMemberContext);
	    } else {
	        return this.getTypedRuleContext(InterfaceMemberContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof JavapListener ) {
	        listener.enterInterfaceBody(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JavapListener ) {
	        listener.exitInterfaceBody(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JavapVisitor ) {
	        return visitor.visitInterfaceBody(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ModifierContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JavapParser.RULE_modifier;
    }


	enterRule(listener) {
	    if(listener instanceof JavapListener ) {
	        listener.enterModifier(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JavapListener ) {
	        listener.exitModifier(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JavapVisitor ) {
	        return visitor.visitModifier(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ClassMemberContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JavapParser.RULE_classMember;
    }

	constructorDeclaration() {
	    return this.getTypedRuleContext(ConstructorDeclarationContext,0);
	};

	fieldDeclaration() {
	    return this.getTypedRuleContext(FieldDeclarationContext,0);
	};

	methodDeclaration() {
	    return this.getTypedRuleContext(MethodDeclarationContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof JavapListener ) {
	        listener.enterClassMember(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JavapListener ) {
	        listener.exitClassMember(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JavapVisitor ) {
	        return visitor.visitClassMember(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class InterfaceMemberContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JavapParser.RULE_interfaceMember;
    }

	fieldDeclaration() {
	    return this.getTypedRuleContext(FieldDeclarationContext,0);
	};

	methodDeclaration() {
	    return this.getTypedRuleContext(MethodDeclarationContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof JavapListener ) {
	        listener.enterInterfaceMember(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JavapListener ) {
	        listener.exitInterfaceMember(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JavapVisitor ) {
	        return visitor.visitInterfaceMember(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ConstructorDeclarationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JavapParser.RULE_constructorDeclaration;
    }

	type() {
	    return this.getTypedRuleContext(TypeContext,0);
	};

	methodArguments() {
	    return this.getTypedRuleContext(MethodArgumentsContext,0);
	};

	modifier = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ModifierContext);
	    } else {
	        return this.getTypedRuleContext(ModifierContext,i);
	    }
	};

	typeArguments() {
	    return this.getTypedRuleContext(TypeArgumentsContext,0);
	};

	throwsException() {
	    return this.getTypedRuleContext(ThrowsExceptionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof JavapListener ) {
	        listener.enterConstructorDeclaration(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JavapListener ) {
	        listener.exitConstructorDeclaration(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JavapVisitor ) {
	        return visitor.visitConstructorDeclaration(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class FieldDeclarationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JavapParser.RULE_fieldDeclaration;
    }

	type() {
	    return this.getTypedRuleContext(TypeContext,0);
	};

	Identifier() {
	    return this.getToken(JavapParser.Identifier, 0);
	};

	modifier = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ModifierContext);
	    } else {
	        return this.getTypedRuleContext(ModifierContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof JavapListener ) {
	        listener.enterFieldDeclaration(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JavapListener ) {
	        listener.exitFieldDeclaration(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JavapVisitor ) {
	        return visitor.visitFieldDeclaration(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class MethodDeclarationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JavapParser.RULE_methodDeclaration;
    }

	type() {
	    return this.getTypedRuleContext(TypeContext,0);
	};

	Identifier() {
	    return this.getToken(JavapParser.Identifier, 0);
	};

	methodArguments() {
	    return this.getTypedRuleContext(MethodArgumentsContext,0);
	};

	modifier = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ModifierContext);
	    } else {
	        return this.getTypedRuleContext(ModifierContext,i);
	    }
	};

	typeArguments() {
	    return this.getTypedRuleContext(TypeArgumentsContext,0);
	};

	throwsException() {
	    return this.getTypedRuleContext(ThrowsExceptionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof JavapListener ) {
	        listener.enterMethodDeclaration(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JavapListener ) {
	        listener.exitMethodDeclaration(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JavapVisitor ) {
	        return visitor.visitMethodDeclaration(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ThrowsExceptionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JavapParser.RULE_throwsException;
    }

	typeList() {
	    return this.getTypedRuleContext(TypeListContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof JavapListener ) {
	        listener.enterThrowsException(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JavapListener ) {
	        listener.exitThrowsException(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JavapVisitor ) {
	        return visitor.visitThrowsException(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class VarargsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JavapParser.RULE_varargs;
    }

	type() {
	    return this.getTypedRuleContext(TypeContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof JavapListener ) {
	        listener.enterVarargs(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JavapListener ) {
	        listener.exitVarargs(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JavapVisitor ) {
	        return visitor.visitVarargs(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class MethodArgumentsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JavapParser.RULE_methodArguments;
    }

	typeList() {
	    return this.getTypedRuleContext(TypeListContext,0);
	};

	varargs() {
	    return this.getTypedRuleContext(VarargsContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof JavapListener ) {
	        listener.enterMethodArguments(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JavapListener ) {
	        listener.exitMethodArguments(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JavapVisitor ) {
	        return visitor.visitMethodArguments(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ArrayBracketsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JavapParser.RULE_arrayBrackets;
    }


	enterRule(listener) {
	    if(listener instanceof JavapListener ) {
	        listener.enterArrayBrackets(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JavapListener ) {
	        listener.exitArrayBrackets(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JavapVisitor ) {
	        return visitor.visitArrayBrackets(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




JavapParser.CompilationUnitContext = CompilationUnitContext; 
JavapParser.SourceDeclarationContext = SourceDeclarationContext; 
JavapParser.ClassOrInterfaceContext = ClassOrInterfaceContext; 
JavapParser.ClassDeclarationContext = ClassDeclarationContext; 
JavapParser.InterfaceDeclarationContext = InterfaceDeclarationContext; 
JavapParser.ClassModifierContext = ClassModifierContext; 
JavapParser.InterfaceModifierContext = InterfaceModifierContext; 
JavapParser.TypeListContext = TypeListContext; 
JavapParser.TypeContext = TypeContext; 
JavapParser.SubTypeContext = SubTypeContext; 
JavapParser.PackageNameContext = PackageNameContext; 
JavapParser.TypeArgumentsContext = TypeArgumentsContext; 
JavapParser.TypeArgumentContext = TypeArgumentContext; 
JavapParser.ClassBodyContext = ClassBodyContext; 
JavapParser.InterfaceBodyContext = InterfaceBodyContext; 
JavapParser.ModifierContext = ModifierContext; 
JavapParser.ClassMemberContext = ClassMemberContext; 
JavapParser.InterfaceMemberContext = InterfaceMemberContext; 
JavapParser.ConstructorDeclarationContext = ConstructorDeclarationContext; 
JavapParser.FieldDeclarationContext = FieldDeclarationContext; 
JavapParser.MethodDeclarationContext = MethodDeclarationContext; 
JavapParser.ThrowsExceptionContext = ThrowsExceptionContext; 
JavapParser.VarargsContext = VarargsContext; 
JavapParser.MethodArgumentsContext = MethodArgumentsContext; 
JavapParser.ArrayBracketsContext = ArrayBracketsContext; 
