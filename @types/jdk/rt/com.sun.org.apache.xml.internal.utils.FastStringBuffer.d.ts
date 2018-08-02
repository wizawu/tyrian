declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xml {
                    namespace internal {
                        namespace utils {
class FastStringBuffer {
    public static SUPPRESS_LEADING_WS: int
    public static SUPPRESS_TRAILING_WS: int
    public static SUPPRESS_BOTH: int
    public constructor(arg0: int, arg1: int, arg2: int)
    public constructor(arg0: int, arg1: int)
    public constructor(arg0: int)
    public constructor()
    public size(): int
    public length(): int
    public reset(): void
    public setLength(arg0: int): void
    public toString(): string
    public append(arg0: char): void
    public append(arg0: java.lang.String | string): void
    public append(arg0: java.lang.StringBuffer): void
    public append(arg0: char[], arg1: int, arg2: int): void
    public append(arg0: com.sun.org.apache.xml.internal.utils.FastStringBuffer): void
    public isWhitespace(arg0: int, arg1: int): boolean
    public getString(arg0: int, arg1: int): string
    protected getOneChunkString(arg0: int, arg1: int, arg2: int): string
    public charAt(arg0: int): char
    public sendSAXcharacters(arg0: org.xml.sax.ContentHandler, arg1: int, arg2: int): void
    public sendNormalizedSAXcharacters(arg0: org.xml.sax.ContentHandler, arg1: int, arg2: int): int
    public static sendNormalizedSAXcharacters(arg0: char[], arg1: int, arg2: int, arg3: org.xml.sax.ContentHandler): void
    public sendSAXComment(arg0: org.xml.sax.ext.LexicalHandler, arg1: int, arg2: int): void
    public static class: java.lang.Class<any>
}

                        }
                    }
                }
            }
        }
    }
}