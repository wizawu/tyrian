declare namespace jdk {
    namespace internal {
        namespace util {
            namespace xml {
                namespace impl {
abstract class Parser {
    public static FAULT: string
    protected static BUFFSIZE_READER: int
    protected static BUFFSIZE_PARSER: int
    public static EOS: char
    protected mIsSAlone: boolean
    protected mIsSAloneSet: boolean
    protected mIsNSAware: boolean
    protected mPh: int
    protected static PH_BEFORE_DOC: int
    protected static PH_DOC_START: int
    protected static PH_MISC_DTD: int
    protected static PH_DTD: int
    protected static PH_DTD_MISC: int
    protected static PH_DOCELM: int
    protected static PH_DOCELM_MISC: int
    protected static PH_AFTER_DOC: int
    protected mEvt: int
    protected static EV_NULL: int
    protected static EV_ELM: int
    protected static EV_ELMS: int
    protected static EV_ELME: int
    protected static EV_TEXT: int
    protected static EV_WSPC: int
    protected static EV_PI: int
    protected static EV_CDAT: int
    protected static EV_COMM: int
    protected static EV_DTD: int
    protected static EV_ENT: int
    protected mBuff: char[]
    protected mBuffIdx: int
    protected mPref: jdk.internal.util.xml.impl.Pair
    protected mElm: jdk.internal.util.xml.impl.Pair
    protected mAttL: jdk.internal.util.xml.impl.Pair
    protected mDoc: jdk.internal.util.xml.impl.Input
    protected mInp: jdk.internal.util.xml.impl.Input
    protected mAttrs: jdk.internal.util.xml.impl.Attrs
    protected constructor()
    protected init(): void
    protected cleanup(): void
    protected step(): int
    protected name(arg0: boolean): string
    protected qname(arg0: boolean): char[]
    protected eqstr(arg0: char): string
    protected wsskip(): char
    protected docType(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string): void
    protected comm(arg0: char[], arg1: int): void
    protected pi(arg0: java.lang.String | string, arg1: java.lang.String | string): void
    protected newPrefix(): void
    protected skippedEnt(arg0: java.lang.String | string): void
    protected resolveEnt(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string): jdk.internal.org.xml.sax.InputSource
    protected notDecl(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string): void
    protected unparsedEntDecl(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: java.lang.String | string): void
    protected panic(arg0: java.lang.String | string): void
    protected bflash(): void
    protected bflash_ws(): void
    protected setinp(arg0: jdk.internal.org.xml.sax.InputSource): void
    protected push(arg0: jdk.internal.util.xml.impl.Input): void
    protected pop(): void
    protected chtyp(arg0: char): char
    protected getch(): char
    protected bkch(): void
    protected setch(arg0: char): void
    protected find(arg0: jdk.internal.util.xml.impl.Pair, arg1: char[]): jdk.internal.util.xml.impl.Pair
    protected pair(arg0: jdk.internal.util.xml.impl.Pair): jdk.internal.util.xml.impl.Pair
    protected del(arg0: jdk.internal.util.xml.impl.Pair): jdk.internal.util.xml.impl.Pair
    public static class: java.lang.Class<any>
}

                }
            }
        }
    }
}