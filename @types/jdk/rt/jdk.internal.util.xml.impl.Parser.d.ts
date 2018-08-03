declare namespace jdk {
    namespace internal {
        namespace util {
            namespace xml {
                namespace impl {
                    abstract class Parser {
                        public static readonly FAULT: string
                        protected static readonly BUFFSIZE_READER: int
                        protected static readonly BUFFSIZE_PARSER: int
                        public static readonly EOS: char
                        protected mIsSAlone: boolean
                        protected mIsSAloneSet: boolean
                        protected mIsNSAware: boolean
                        protected mPh: int
                        protected static readonly PH_BEFORE_DOC: int
                        protected static readonly PH_DOC_START: int
                        protected static readonly PH_MISC_DTD: int
                        protected static readonly PH_DTD: int
                        protected static readonly PH_DTD_MISC: int
                        protected static readonly PH_DOCELM: int
                        protected static readonly PH_DOCELM_MISC: int
                        protected static readonly PH_AFTER_DOC: int
                        protected mEvt: int
                        protected static readonly EV_NULL: int
                        protected static readonly EV_ELM: int
                        protected static readonly EV_ELMS: int
                        protected static readonly EV_ELME: int
                        protected static readonly EV_TEXT: int
                        protected static readonly EV_WSPC: int
                        protected static readonly EV_PI: int
                        protected static readonly EV_CDAT: int
                        protected static readonly EV_COMM: int
                        protected static readonly EV_DTD: int
                        protected static readonly EV_ENT: int
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
                        protected abstract docType(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string): void
                        protected abstract comm(arg0: char[], arg1: int): void
                        protected abstract pi(arg0: java.lang.String | string, arg1: java.lang.String | string): void
                        protected abstract newPrefix(): void
                        protected abstract skippedEnt(arg0: java.lang.String | string): void
                        protected abstract resolveEnt(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string): jdk.internal.org.xml.sax.InputSource
                        protected abstract notDecl(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string): void
                        protected abstract unparsedEntDecl(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: java.lang.String | string): void
                        protected abstract panic(arg0: java.lang.String | string): void
                        protected abstract bflash(): void
                        protected abstract bflash_ws(): void
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